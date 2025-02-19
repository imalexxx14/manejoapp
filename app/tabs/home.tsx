import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
    return (
        <view style={styles.container}>
            <Text style={styles.title}>Budget Overview</Text>
            <Link href="/tabs/transactionForm" style={styles.link}>
            Add Transaction
            </Link>
        </view>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    link: {
        color: '#007AFF',
        fontSize: 16,
    },
}); 