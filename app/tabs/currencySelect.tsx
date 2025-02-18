import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { useRouter } from "expo-router";

const currencies = ['USD', 'EUR', 'GBP', 'DOP' ];

export default function CurrencySelect(){
const router = useRouter();

return(
<View style={styles.container}>
    <FlatList
    data={currencies}
    renderItem={({ item }) => (
        <Pressable
        style= {styles.item}
        onPress={() => router.back()}
        >
            <text>{item}</text>
        </Pressable>
    )}
/>
</View>
);
}

const styles = StyleSheet.create({
container:{
    flex: 1,
    backgroundColor: '#fff',
},
item:{
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
},

})