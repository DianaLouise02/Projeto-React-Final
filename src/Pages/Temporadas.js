import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Temporadas(props) {
  const [temporadas, setTemporadas] = useState([]);

  // Função para buscar contatos do servidor
  const listTemporadas = () => {
    axios
      .get("http://10.0.2.2:3000/temporadas")

      .then((resposta) => {
        setTemporadas(resposta.data)
      })

      .catch((error) => {
        console.error("Erro ao buscar resultado", error)
      })
  }

  // useEffect para buscar dados 
  useEffect(() => {
    listTemporadas();
  }, [])

  return (

    <View style={styles.container}>
      <Text style={styles.Title}> {props.title}</Text>
      {props.imageSource && (
        <Image source={props.imageSeason} style={styles.seasonImage} />
      )}
      <Text style={styles.year}> {props.year}</Text>
     
    </View>

  )
}
const styles = StyleSheet.create({

  container: {
    backgroundColor: '#fff3542',
    borderRadius: 10,
    padding: 25,
    margin: 10,
    marginTop: 12,
    elevation: 3, // Sombra para Android
    shadowColor: '#00',// Sombra para IOS
    shadowOpacity: 0.2,
    shadowRadius: 1.40,

  },
seasonImage: {
    width: 300,
    height: 220,
    marginVertical: 10,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },

  year: {
    padding: 12,
    fontWeight: "semibold",
    letterSpacing: 1,
    textAlign: "center",
    fontSize: 15
  }


})
