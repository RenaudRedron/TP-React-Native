import { Text, View, StyleSheet, ScrollView  } from "react-native";
import {InfoContact, Button} from "@/components/globals"
import * as Linking from 'expo-linking';
import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';

export default function ContactScreen() {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.contentView}>

                    <InfoContact 
                    props={{
                        title:"Réservation",
                        icon:"old-phone"
                    }}
                    >
    
                        <Button
                            props={{
                                text:"05 55 98 17 80",
                                borderRadius:100,
                                actionOnPress: () => Linking.openURL('tel:0555981780'),
                            }}
                        />

                        <Button
                            props={{
                                text:"formation@webdevoo.com",
                                borderRadius:100,
                                actionOnPress: () => Linking.openURL('mailto:formation@webdevoo.com'),
                            }}
                        />

                    </InfoContact>

                    <InfoContact 
                    props={{
                        title:"Nous rendre visite",
                        icon:"home"
                    }}
                    >

                        <Button
                            props={{
                                text:"Place Alexis Boyer - 19140 Uzerche",
                                borderRadius:100,
                                actionOnPress: () => Linking.openURL('https://www.google.com/maps/place/Pl.+Alexis+Boyer,+19140+Uzerche/@45.4213828,1.5607037,17z/data=!3m1!4b1!4m6!3m5!1s0x47f8e8154a328c81:0x78f16c9f63eae221!8m2!3d45.4213791!4d1.5632786!16s%2Fg%2F1v2kwsx5?hl=fr&entry=ttu'),
                            }}
                        />

                    </InfoContact>

                    <InfoContact 
                    props={{
                        title:"Horaires d'ouverture",
                        icon:"clock"
                    }}
                    >
                        <Text style={styles.text}>Lundi : FERMÉ</Text>
                        <Text style={styles.text}>Mardi : 12:00 - 14:00</Text>
                        <Text style={styles.text}>Mercredi : 12:00 - 14:00 | 19:00 - 21:00</Text>
                        <Text style={styles.text}>Jeudi : 12:00 - 14:00 | 19:00 - 21:00</Text>    
                        <Text style={styles.text}>Vendredi : 12:00 - 14:00 | 19:00 - 21:00</Text>
                        <Text style={styles.text}>Samedi : 12:00 - 14:00 | 19:00 - 21:00</Text>    
                        <Text style={styles.text}>Dimanche : 12:00 - 14:00</Text>                   
                    </InfoContact>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e8e4d9",
    },
    scrollView: {
        width:"100%",
    },
    contentView: {
        justifyContent: "flex-start",
        alignItems: "center",
        gap:24,
        paddingVertical:20
    },
    text: {
        textAlign:"center",
        fontSize: 18,
    },
})
