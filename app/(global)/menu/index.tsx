import { Text, View, StyleSheet, ScrollView, SectionList, ImageBackground } from "react-native";
import {Card, ListTitle} from '@/components/globals'
import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';

export default function MenuScreen() {

    const DATA = [
        {
            title: 'Entrées', 
            data: [
                {
                    id:1,
                    title: "L'asperge blanche",
                    price: 14.50,
                    description: "L'asperge cuite à l'anglaise, sabayon légèrement moutardé, Lardo Di Colonnata.",
                    img: require("@/assets/images/plats/asperge-blanche.jpg")
                },
                {
                    id:2,
                    title: "Le foie gras de canard",
                    price: 22,
                    description: "Mi-cuit, compotée, d'oignons/rhubarbe.",
                    img: require("@/assets/images/plats/foie-gras.jpg")
                },
                {
                    id:3,
                    title: "Le ris de veau",
                    price: 23,
                    description: "Grillé, palet de pomme de terre, crème d'ail, préfou, huile de persil.",
                    img: require("@/assets/images/plats/ris-de-veau.jpg")
                },
                {
                    id:4,
                    title: "Le poireau",
                    price: 9,
                    description: "Frit, en vinaigrette à l'ancienne et petits croûtons.",
                    img: require("@/assets/images/plats/poireaux.jpg")
                },
            ]
        },
        {
            title: 'Plats', 
            data: [
                {
                    id:5,
                    title: "Le boeuf",
                    price: 17,
                    description: "Pièce de boeuf poêlée, poivre de Timut d'Himalaya.",
                    img: require("@/assets/images/plats/boeuf.jpg")
                },
                {
                    id:6,
                    title: "La pluma de cochon",
                    price: 18,
                    description: "Ragoût de petits pois à la française, réduction d'ail noir et soja.",
                    img: require("@/assets/images/plats/pluma-de-porc.jpg")
                },
                {
                    id:7,
                    title: "Le burger",
                    price: 16,
                    description: "Traditionnel.",
                    img: require("@/assets/images/plats/burgers.jpg")
                },
                {
                    id:8,
                    title: "Le poisson",
                    price: 17.50,
                    description: "Selon la pêche, cuit à basse température, beurre façon meunière.",
                    img: require("@/assets/images/plats/poisson.jpg")
                },
                {
                    id:9,
                    title: "Le veau",
                    price: 25,
                    description: "Pièce de veau cuit longuement, sauce comme une blanquette aux morilles.",
                    img: require("@/assets/images/plats/veau.jpg")
                },
                {
                    id:10,
                    title: "L'entrecôte'",
                    price: 27,
                    description: "Limousine, fleur de sel.",
                    img: require("@/assets/images/plats/entrecote.jpg")
                },
            ]
        },
        {
            title: 'Dessert', 
            data: [
                {
                    id:11,
                    title: "La poire",
                    price: 11,
                    description: "Pochée à la cannelle et badiane, crumble thé Earl Grey, crémeux chocolat au lait.",
                    img: require("@/assets/images/plats/poire.jpg")
                },
                {
                    id:12,
                    title: "La citron",
                    price: 12,
                    description: "Comme une tarte, meringue croustillante.",
                    img: require("@/assets/images/plats/citron.jpg")
                },
                {
                    id:13,
                    title: "Le dessert de grand-mère",
                    price: 8,
                    description: "Selon le chef.",
                    img: require("@/assets/images/plats/grand-mere.jpg")
                },
                {
                    id:14,
                    title: "Le café gourmand",
                    price: 10,
                    description: "Glace et mignardises.",
                    img: require("@/assets/images/plats/cafe.jpg")
                },
            ]
        },
    ]

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground 
                style={styles.imgBackground}
                source={require('@/assets/images/menu.jpg')} 
                resizeMode="cover"
            ><Text style={styles.titleHeader}>La carte</Text></ImageBackground>
                    
                    <SectionList
                        sections={DATA}
                        renderItem={({item}) => <Card props={{
                            title: item.title,
                            description: item.description,
                            price:(item.price).toFixed(2),
                            img: item.img,
                        }}/>}
                        renderSectionHeader={({section}) => (
                            <ListTitle props={{
                                title:section.title,
                                lineHeight: 3,
                                color:"#df9f46",
                                textSize: 35,
                            }} />
                        )}
                        keyExtractor={item => `basicListEntry-${item.id}`}
                    />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F6F4E8",
    },
    scrollView: {
        width:"100%",
    },
    contentView: {
        paddingVertical: 36
    },
    imgBackground: {
        justifyContent: "center",
        alignItems: 'center',
        width: '100%',
        height: 100,
        gap:50,
        marginBottom:30,
    },
    titleHeader:{
        color: "#fff",
        fontSize: 34,
        fontWeight: 'bold',
    },
    sectionHeader: {
        width: "95%",
        marginHorizontal: "auto",
        marginVertical: 25,
        fontSize: 34,
        fontWeight: 'bold',
        color: "#df9f46",
        padding: 10
    },
    row:{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent: "center",
        alignItems: "center",
        gap:15,
    }
})
