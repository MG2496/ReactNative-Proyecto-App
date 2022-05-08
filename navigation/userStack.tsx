import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import TypeScreen from '../screens/TypeScreen';
import SelectionScreen from '../screens/SelectionScreen';

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="Type" component={TypeScreen} />
        <Stack.Screen name="Selection" component={SelectionScreen} />
        {/* Las pantallas a las que el usuario pueda entrar */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
