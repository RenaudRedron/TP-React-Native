import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Tabs } from "expo-router";
import { Text, StyleSheet } from "react-native";

export default function GlobalLayout() {

  return (
    <Tabs>
      <Tabs.Screen 
        name="index"
        options={{
          headerShown: false,
          title:"La Table de M",
          tabBarLabel: () => (<Text>Accueil</Text>),
          tabBarIcon: () => (<TabBarIcon name="home-outline" size={14}/>),
          tabBarIconStyle: styles.tabBarIconCustom,
          tabBarItemStyle: styles.taBarItemCustom,
        }}
      />
      <Tabs.Screen
        name="menu/index"
        options={{
          headerShown: false,
          title: "Carte du restaurant",
          tabBarLabel: () => (<Text>Carte</Text>),
          tabBarIcon: () => (<TabBarIcon name="book-outline" size={14}/>),
          tabBarIconStyle: styles.tabBarIconCustom,
          tabBarItemStyle: styles.taBarItemCustom,
        }}  
      />
      <Tabs.Screen
        name="contact/index"
        options={{
          headerShown: false,
          title: "Contact du restaurant",
          tabBarLabel: () => (<Text>Contact</Text>),
          tabBarIcon: () => (<TabBarIcon name="information-circle-outline" size={14}/>),
          tabBarIconStyle: styles.tabBarIconCustom,
          tabBarItemStyle: styles.taBarItemCustom,
        }}  
      />
    </Tabs>
  );
}


const styles = StyleSheet.create({
  taBarItemCustom: {
    flex:1,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#fff",
  },
  tabBarIconCustom: {
    height:18,
  },
})
