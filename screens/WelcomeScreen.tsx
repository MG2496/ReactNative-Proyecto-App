import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { Button } from 'react-native-elements';

const WelcomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Welcome to Recipe 🧑🏻‍🍳</Text>
      <Text style={styles.text}>Please create an account or sign in </Text>
      

      <View style={styles.buttons}>
        <Button 
          title="Sign in"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('Sign In') }
          titleStyle={{color:'#ecdfcf', fontSize: 25}}/>
        <Button 
          title="Sign up"
          type="outline"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('Sign Up') }
          titleStyle={{color: '#ecdfcf', fontSize: 25}}/>
          
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flex: 1,
  },
  button: {
    marginTop: 35,
    backgroundColor:'#df5c40',
  },
  label:{
    color: '#f79053',
    fontSize: 40,
  },
  text:{
    color: '#97938f',
    fontSize: 20,

  }
});

export default WelcomeScreen;
