import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TransactionForm() {
    const router = useRouter();
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async () => {
        if (!amount || !description) {
            Alert.alert('Error', 'Por favor completa todos los campos');
            return;
        }

        try {
            // Obtener transacciones existentes
            const existingTransactions = await AsyncStorage.getItem('transactions');
            const transactions = existingTransactions ? JSON.parse(existingTransactions) : [];

            // Crear nueva transacción
            const newTransaction = {
                id: Date.now().toString(),
                amount: parseFloat(amount),
                description,
                date: new Date().toISOString(),
            };

            // Guardar transacción
            await AsyncStorage.setItem('transactions', 
                JSON.stringify([...transactions, newTransaction])
            );

            Alert.alert('Éxito', 'Transacción registrada');
            router.back();
        } catch (error) {
            Alert.alert('Error', 'No se pudo guardar la transacción');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nueva Transacción</Text>
            <TextInput
                style={styles.input}
                placeholder="Monto"
                keyboardType="decimal-pad"
                value={amount}
                onChangeText={setAmount}
            />
            <TextInput
                style={styles.input}
                placeholder="Descripción"
                value={description}
                onChangeText={setDescription}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Guardar Transacción</Text>
            </TouchableOpacity>
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
        marginBottom: 24,
        color: '#1a1a1a',
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        fontSize: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});