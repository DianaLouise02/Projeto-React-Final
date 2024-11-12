import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header() {
 

  // Função para navegar para a tela de login


  return (
    <View style={estilos.topo}>
      <Image style={estilos.imageHeader} source={require('../Images/SuitsLogo.png')}
      />
      


      
    </View>
  )
}


const estilos = StyleSheet.create({

  topo: {
    width: "100%",
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
    marginLeft: 131,
  },
  loginText: {
    color: 'white',
    fontSize: 12,
    marginRight: 10, // Ajuste para um bom espaçamento
    marginTop: 25, // Alinha o texto com a imagem
  },


})