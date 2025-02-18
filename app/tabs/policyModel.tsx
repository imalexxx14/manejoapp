import { View,Text, StyleSheet, ScrollView } from 'react-native';

export default function PolicyModal (){
return (
    <ScrollView style={styles.container}>
        <text style={styles.title}>Privacy Policy</text>
<text style={styles.text}>
    this is a sample of a policy
</text>
    </ScrollView>
)

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16,
backgroundColor: '#fff',
    },
    title: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 16,
    },
    text:{
fontSize: 16,
lineHeight: 24,
    },

});