import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'

export default function Curiosidades() {
  const [curiosidades, setCuriosidades] = useState([]);

  // Função para buscar curiosidades no servidor
  const listCuriosidades = () => {
    axios
      .get("http://10.0.2.2:3000/curiosidades") // endpoint curiosidades
      .then((resposta) => {
        setCuriosidades(resposta.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar personagens", error);
      });
  };

  // useEffect para buscar dados
  useEffect(() => {
    listCuriosidades();
  }, []);

  // Renderização dos personagens
  const renderCuriosidade = ({ item }) => (
    <View style={styleCuriosity.container}>
   
      {item.imagemCuriosidade && (
        <Image
          source={{ uri: item.imagemCuriosidade }}
          style={styleCuriosity.imageCuriosity}
        />
      )}


      <Text style={styleCuriosity.title}>{item.title}</Text>
      <Text style={styleCuriosity.information}>{item.informacao}</Text>
    </View>

  );
  return (
    <FlatList
      data={curiosidades} // Dados a serem exibidos
      renderItem={renderCuriosidade} // Como renderizar cada item
      keyExtractor={(item) => item.id.toString()} // Chave única para cada item

    />
  );
}


const styleCuriosity = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    borderRadius: 10,
    padding: 25,
    margin: 10,
    marginTop: 12,
    elevation: 4, // Sombra para Android
    shadowColor: "#000", // Sombra para IOS
    shadowOpacity: 0.2,
    shadowRadius: 1.4,
  },

  imageCuriosity: {
    width: 340,
    height: 300,
    marginVertical: 10,
    alignSelf: "center",

  },

 

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center"
  },

  information: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",

  }
});
