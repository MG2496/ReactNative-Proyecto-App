import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import { Button } from "react-native-elements";
import { getAuth, signOut } from 'firebase/auth';
import { StackScreenProps } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import PastaScreen from "./PastaScreen";
import { createStackNavigator } from '@react-navigation/stack';


const auth = getAuth();
//export default function HomeScreen(){}

const HomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {

  const { user } = useAuthentication();

  return (
    <View style={styles.container}>

      <Text>Welcome {user?.email}</Text>
      <Button
        title="Sign Out"
        style={styles.button}
        onPress={() => signOut(auth)}
        buttonStyle={{ backgroundColor: '#ef4b4c' }}
        titleStyle={{ color: '#42506b' }}
      />
      <Text style={styles.label}>Welcome</Text>
      <Text style={styles.label2}>What do you want to prepare today?</Text>

      <Button
        title="Pastas 🍝"
        style={styles.button2}
        onPress={() => navigation.navigate('Pasta')}
        buttonStyle={{ backgroundColor: '#df5c40' }}
        titleStyle={{ color: '#ecdfcf', fontSize: 60, }}></Button>

      <Button
        title="Sushi   🍣"
        style={styles.button2}
        onPress={() => navigation.navigate('Sushi')}
        buttonStyle={{ backgroundColor: '#df5c40' }}
        titleStyle={{ color: '#ecdfcf', fontSize: 60, }}></Button>

      <Button
        title="Tacos   🌮"
        style={styles.button2}
        onPress={() => navigation.navigate('Salad')}
        buttonStyle={{ backgroundColor: '#df5c40' }}
        titleStyle={{ color: '#ecdfcf', fontSize: 60, }}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    //marginTop: 1,
    //position: "absolute",
    top: '0%',
    right: 0,


  },
  label: {
    fontSize: 80,
    color: '#97938f',
    textAlign: 'center',


  },
  button2: {
    marginTop: 20,
  },

  label2: {
    color: '#ff6d00',
    fontSize: 15,
    fontWeight: "bold",
  },


});



export default HomeScreen