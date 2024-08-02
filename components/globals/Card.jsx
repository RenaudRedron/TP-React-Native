import { Text, View, StyleSheet, Image, Alert } from "react-native";
import { Button } from "@/components/globals"

export default function Card({ props }) {
    const { img, title, price, description  } = props;

    return (
        <View style={styles.view}>
            <Image style={styles.img} source={img} resizeMode="cover" />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}>{price}€</Text>
            <Button
                props={{
                    text:"Ajouter",
                    borderRadius:100,
                    actionOnPress: () => Alert.alert('test'),
                }}
            />            
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        width: 300,
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#df9f46",
        gap: 20,
        marginHorizontal: "auto",
        marginVertical: 10,
        padding: 10
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        letterSpacing: 0.15,
        textAlign:"center",
        color: "#df9f46", 
    },
    description: {
        fontSize: 14,
        letterSpacing: 0.15,
        textAlign:"center"
    },
    price: {
        fontSize: 14,
        letterSpacing: 0.15,
        textAlign:"center"
    },
    img: {
        width: "100%",
        height: 200, 
        borderRadius: 12,
    }
});