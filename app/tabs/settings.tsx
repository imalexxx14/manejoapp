import { Link } from 'expo-router';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Settings() {
    return (
        <view style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <Link href="/tabs/currencySelect" style={styles.link}>
            Change Currency
            </Link>
            <Link href="/tabs/policyModel" style={styles.link}>
            </Link>
        </view>
    );
}

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 16,
backgroundColor: '#fff',
},

title: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 16,
},

link:{
color: '#007AFF',
fontSize: 16,
marginBottom: 12,
},
});