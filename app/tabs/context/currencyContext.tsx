import { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CurrencyContextType {
    currency: string;
    symbol: string;
    updateCurrency: (code: string) => Promise<void>;
}

const CurrencyContext = createContext<CurrencyContextType>({
    currency: 'USD',
    symbol: '$',
    updateCurrency: async () => {},
});

export const useCurrency = () => useContext(CurrencyContext);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
    const [currency, setCurrency] = useState('USD');
    const [symbol, setSymbol] = useState('$');

    const CURRENCY_SYMBOLS: { [key: string]: string } = {
        'USD': '$',
        'EUR': '€',
        'MXN': '$',
        'COP': '$',
    };

    useEffect(() => {
        loadCurrency();
    }, []);

    const loadCurrency = async () => {
        try {
            const saved = await AsyncStorage.getItem('currency');
            if (saved) {
                setCurrency(saved);
                setSymbol(CURRENCY_SYMBOLS[saved]);
            }
        } catch (error) {
            console.error('Error loading currency:', error);
        }
    };

    const updateCurrency = async (code: string) => {
        try {
            await AsyncStorage.setItem('currency', code);
            setCurrency(code);
            setSymbol(CURRENCY_SYMBOLS[code]);
        } catch (error) {
            console.error('Error saving currency:', error);
        }
    };

    return (
        <CurrencyContext.Provider value={{ currency, symbol, updateCurrency }}>
            {children}
        </CurrencyContext.Provider>
    );
}