import { View, StyleSheet, Text, Button } from "react-native";
import { GlobalStyles } from "../constants/styles";

function ErrorOverlay({message,onConfirm}){
    return (
    <View style={styles.container}>
        <Text style={[styles.text, styles.title]}>An error has occured</Text>
        <Text style={styles.text}>{message}</Text>
        <Button onPress={onConfirm}>Okay</Button>
    </View>
    )
}
export default ErrorOverlay;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
    },
    text:{
        marginBottom: 8,
        textAlign: 'center',
        color:'white'
    },

    title:{
        fontSize: 20,
        fontWeight: 'bold',
    },
   
    
})