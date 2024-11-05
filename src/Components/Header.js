import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Header() {
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
    backgroundColor: "black"

  },
  imageHeader: {
    width: "30%",
    height: 75,
    marginTop: 25,
    marginLeft: 139,
  },


})