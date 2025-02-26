import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState,  useCallback,  } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCurrency } from'../tabs/context/currencyContext';
import { useFocusEffect } from '@react-navigation/native'

interface Transaction {
    id: string;
    amount: number;
    description: string;
    date: string;
}

export default function Home() {
    const { symbol } = useCurrency();
    const [totalBalance, setTotalBalance] = useState(0);

    useFocusEffect(
        useCallback(() => {
            loadTotalBalance();
        }, [])
    );

    const loadTotalBalance = async () => {
        try {
            const stored = await AsyncStorage.getItem('transactions');
            if (stored) {
                const transactions: Transaction[] = JSON.parse(stored);
                const total = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
                setTotalBalance(total);
                console.log(total);
            }
        } catch (error) {
            console.error('Error loading balance:', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Budget Overview</Text>
            </View>
            
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Total Balance</Text>
                    <Text style={[
                        styles.amount,
                        totalBalance < 0 ? styles.negative : styles.positive
                    ]}>
                        {symbol}{totalBalance.toFixed(2)}
                    </Text>
                </View>
            </View>

            <Link href="/tabs/transactionForm" asChild>
                <TouchableOpacity style={styles.addButton}>
                    <Ionicons name="add" size={24} color="white" />
                    <Text style={styles.buttonText}>Add Transaction</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f8f9fa',
    },
    header: {
        marginBottom: 24,
        marginTop: 12,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1a1a1a',
    },
    cardContainer: {
        marginBottom: 24,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 8,
    },
    amount: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    positive: {
        color: '#2ecc71',
    },
    negative: {
        color: '#e74c3c',
    },
    addButton: {
        backgroundColor: '#007AFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderRadius: 12,
        marginTop: 'auto',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 8,
    },
}); 