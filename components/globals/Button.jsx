import { Pressable, StyleSheet, Text } from "react-native";
import { useState } from "react";

export default function Button({ props }){
    const { text, borderRadius, actionOnPress, addStyles, addTextStyles } = props

    const [buttonIsHover, setButtonIsHover] = useState(false)
    const [buttonIsPressed, setButtonIsPressed] = useState(false)

    return(
        <Pressable style={{
            ...styles.customButton,
            borderRadius: borderRadius ?? 8,
            borderWidth: 1,
            borderColor: ( buttonIsHover || buttonIsPressed ) ? "#fff" : "transparent",
            ...addStyles
            }}
            onPress={()=>actionOnPress()}
            onHoverIn={()=> setButtonIsHover(()=>true)}
            onHoverOut={()=> setButtonIsHover(()=>false)}
            onPressIn={()=> setButtonIsPressed(()=>true)}
            onPressOut={()=> setButtonIsPressed(()=>false)}
            >
                <Text style={{...styles.customButtonText, ...addTextStyles}}>
                    {text}
                </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    customButton: {
        width: "auto",
        backgroundColor: "#df9f46",
        marginVertical: 8,
        padding: 12,
    },
    customButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    }
})