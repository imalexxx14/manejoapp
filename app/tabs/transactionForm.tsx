import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useRouter } from "expo-router";

export default function transactionForm(){
    const router = useRouter();

    return(
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder="Amount"
            keyboardType="decimal-pad"
            />
            <TextInput
            style={styles.input}
            placeholder= "Description"
            />
            <Button title="Add transaction" onPress={() => router.back}/>

            </View>
    );
}

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 16,
backgroundColor: '#fff',
},

input:{
borderWidth: 1,
borderColor: '#fff',
borderRadius: 0,
padding: 12,
marginBottom: 16,
},
});