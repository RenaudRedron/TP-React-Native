import { Text, View, StyleSheet } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';

export default function infoContact({props, children}){

    const {title, icon } = props

    return(
        <View style={styles.view}>
            <Entypo name={icon} size={68} color="#000" />
            <Text style={styles.title}>{title.toUpperCase()}</Text>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        width: "100%",
        padding: 16,
        gap:4,
        justifyContent:"center",
        alignItems: "center",
        gap:20
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        letterSpacing: .15,
        textAlign:"center"
    }
})
