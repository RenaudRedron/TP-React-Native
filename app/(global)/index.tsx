import { Link, router } from "expo-router";
import { Text, View, StyleSheet, ImageBackground, Image } from "react-native";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';


export default function HomeScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        style={styles.imgBackground}
        source={require('@/assets/images/restaurant.jpg')} 
        resizeMode="cover"
      >
        <Image 
          style={styles.img}
          source={require('@/assets/images/logo.jpg')} 
        />
        
        <View>
          <Text style={styles.title}>Venez-vous asseoir à</Text>
          <Text style={styles.title}>"La Table de M"</Text>
        </View>
        <Text style={styles.text}>Place Alexis Boyer - 19140 Uzerche</Text>
        <Text style={styles.text}>Ouvert du mardi au dimanche</Text>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#e8e4d9",
  },
  imgBackground : {
    justifyContent: "center",
    alignItems: 'center',
    width: '100%',
    height: '100%',
    gap:50
  },
  img : {
    height: 128,
    width: 128,
    borderRadius: 128,
    marginHorizontal: 'auto',
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    textAlign:"center",
  },
  text: {
    color: '#fff',
    fontSize: 18,

    textAlign:"center",
  }
})
