import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from './src/Pages/Home';
import Temporadas from './src/Pages/Temporadas';
import Personagens from './src/Pages/Personagens';
import Curiosidades from './src/Pages/Curiosidades';
import RedesSociais from './src/Pages/RedesSociais';
import Forum from './src/Pages/Forum';
import Login from './src/Pages/Login';

const Stack = createNativeStackNavigator();


export default function MainNavigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName = "Home">
        <Stack.Screen name = "Home" component = {Home}  options={{headerShown: false }} />
        <Stack.Screen name = "Temporadas" component = {Temporadas} />
        <Stack.Screen name = "Personagens" component = {Personagens} />
        <Stack.Screen name = "Curiosidades" component = {Curiosidades} />        
        <Stack.Screen name = "RedesSociais" component = {RedesSociais} />        
        <Stack.Screen name = "Forum" component = {Forum} />
        <Stack.Screen name = "Login" component = {Login} />
    </Stack.Navigator>
</NavigationContainer>
  )
}

