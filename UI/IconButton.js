import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({icon,onPress,size, color}){
    return(
        <Pressable onPress={onPress} style={({pressed})=> pressed && styles.pressed}>
            <View>
                <Ionicons name={icon} size={size} color={color} />
            </View>
        </Pressable>
    )
}

export default IconButton;


const styles = StyleSheet.create({
    buttonContainer:{
        borderRadius: 24,
        padding: 6,
        margin: 8,
        marginHorizontal: 8,
        marginVertical: 2
    },
    pressed:{
        opacity: 0.25
    }
})
