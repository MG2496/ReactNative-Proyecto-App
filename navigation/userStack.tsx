import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PastaScreen from '../screens/PastaScreen';
import SaladScreen from '../screens/SaladScreen';
import SushiScreen from '../screens/SushiScreen';

const Stack = createStackNavigator();


export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Pasta" component={PastaScreen} />
        <Stack.Screen name="Salad" component={SaladScreen} />
        <Stack.Screen name="Sushi" component={SushiScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
