import { Link } from 'expo-router';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Settings() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <Link href="/currencySelect" style={styles.link}>
            Change Currency
            </Link>
            <Link href= "/policyModal" style={styles.link}>
            </Link>
        </View>
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