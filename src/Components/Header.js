import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Header() {
 

  // Função para navegar para a tela de login
  const fazerLogin = () => {
    navigation.navigate('Login'); // Navega para a tela de login
  };

  return (
    <View style={estilos.topo}>
      <Image style={estilos.imageHeader} source={require('../Images/SuitsLogo.png')} />
    
    </View>
  )
}


const estilos = StyleSheet.create({

  topo: {
    Width: "100%",
    height: 120,
    backgroundColor: "black",
    flexDirection: "row", // Coloca os itens lado a lado
    alignItems: "center", // Alinha os itens verticalmente
    justifyContent: "space-between", //Itens ficam distantes
    paddingHorizontal: 20

  },
  imageHeader: {
    width: "30%",
    height: 75,
    marginTop: 25,
    marginLeft: 139,
  },
 

})