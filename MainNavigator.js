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
import Cadastro from './src/Pages/Cadastro';

const Stack = createNativeStackNavigator();


export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Temporadas" component={Temporadas} />
        <Stack.Screen name="Personagens" component={Personagens} />
        <Stack.Screen name="Curiosidades" component={Curiosidades} />
        <Stack.Screen name="RedesSociais" component={RedesSociais}  options={{ title: 'Redes Sociais'}} />
        <Stack.Screen name="Forum" component={Forum} />
      
      </Stack.Navigator>
    </NavigationContainer>
  )
}

