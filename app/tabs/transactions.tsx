import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function Transactions() {
    return (
        <View style={styles.container}>
            <Text style = {styles.title}>Transactions</Text>
            <FlatList
                data={[]}
                renderItem={({item}) => null}
                ListEmptyComponent={<Text>No transactions found</Text>}
            />
        </View>
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
    emptyText: {
        textAlign: 'center',
        marginTop: 16,
    },
});