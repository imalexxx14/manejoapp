import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCurrency } from '../tabs/context/currencyContext';

const CURRENCIES = [
    { code: 'USD', symbol: '$' },
    { code: 'EUR', symbol: '€' },
    { code: 'MXN', symbol: '$' },
    { code: 'COP', symbol: '$' },
];

export default function Settings() {
    const { currency, updateCurrency } = useCurrency();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Select Currency</Text>
                <View style={styles.currencyGrid}>
                    {CURRENCIES.map((currencyOption) => (
                        <TouchableOpacity
                            key={currencyOption.code}
                            style={[
                                styles.currencyButton,
                                currencyOption.code === currency && styles.selectedCurrency
                            ]}
                            onPress={() => updateCurrency(currencyOption.code)}
                        >
                            <Text style={[
                                styles.currencyText,
                                currencyOption.code === currency && styles.selectedCurrencyText
                            ]}>
                                {currencyOption.symbol} {currencyOption.code}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>About</Text>
                <Text style={styles.versionText}>Version 1.0.0</Text>
            </View>
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
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 24,
        color: '#1a1a1a',
    },
    section: {
        marginBottom: 24,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 16,
        color: '#1a1a1a',
    },
    currencyGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    currencyButton: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        backgroundColor: '#f1f3f5',
        minWidth: '48%',
    },
    selectedCurrency: {
        backgroundColor: '#007AFF',
    },
    currencyText: {
        fontSize: 16,
        color: '#1a1a1a',
        textAlign: 'center',
    },
    selectedCurrencyText: {
        color: 'white',
        fontWeight: '600',
    },
    versionText: {
        color: '#666',
        fontSize: 16,
    },
});