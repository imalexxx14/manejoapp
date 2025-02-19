import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCurrency } from '../tabs/context/currencyContext';

interface Transaction {
    id: string;
    amount: number;
    description: string;
    date: string;
}

export default function Transactions() {
    const { symbol } = useCurrency();
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        loadTransactions();
    }, []);

    const loadTransactions = async () => {
        try {
            const stored = await AsyncStorage.getItem('transactions');
            if (stored) {
                setTransactions(JSON.parse(stored));
            }
        } catch (error) {
            console.error('Error loading transactions:', error);
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString();
    };

    const renderTransaction = ({ item }: { item: Transaction }) => (
        <View style={styles.transactionCard}>
            <View style={styles.transactionHeader}>
                <Text style={styles.amount}>
                    {symbol}{item.amount.toFixed(2)}
                </Text>
                <Text style={styles.date}>{formatDate(item.date)}</Text>
            </View>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Transacciones</Text>
            <FlatList
                data={transactions}
                renderItem={renderTransaction}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.list}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>No hay transacciones registradas</Text>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f8f9fa',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#1a1a1a',
    },
    list: {
        gap: 12,
    },
    transactionCard: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    transactionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    amount: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2ecc71',
    },
    date: {
        color: '#666',
        fontSize: 14,
    },
    description: {
        color: '#444',
        fontSize: 16,
    },
    emptyText: {
        textAlign: 'center',
        color: '#666',
        marginTop: 24,
        fontSize: 16,
    },
});