import React, { useEffect, useState } from "react";
import axios from "axios";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function Personagens() {
  const [personagens, setPersonagens] = useState([]);

  // Função para buscar personagens no servidor
  const listPersonagens = () => {
    axios
      .get("http://10.0.2.2:3000/personagens") // endpoint dos personagens
      .then((resposta) => {
        setPersonagens(resposta.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar personagens", error);
      });
  };

  // useEffect para buscar dados
  useEffect(() => {
    listPersonagens();
  }, []);

  // Renderização dos personagens
  const renderPersonagem = ({ item }) => (
    <View style={stylesCharacter.container}>
      <Text style={stylesCharacter.name}>{item.nome}</Text>
      {item.imageCharacter && (
        <Image
          source={{ uri: item.imageCharacter }}
          style={stylesCharacter.characterImage}
        />
      )}

      {/* Título Descrição */}
      <Text style={stylesCharacter.infoTitle}>Descrição</Text>
      <Text style={stylesCharacter.description}>{item.descricao}</Text>

      {/* Título Aparição */}
      <Text style={stylesCharacter.infoTitle}>Aparição</Text>
      <Text style={stylesCharacter.appearance}>{item.aparicao}</Text>
    </View>
  );
  return (
    <FlatList
      data={personagens} // Dados a serem exibidos
      renderItem={renderPersonagem} // Como renderizar cada item
      keyExtractor={(item) => item.id.toString()} // Chave única para cada item
      scrollEventThrottle={16} // Desempenho de rolagem otimizado
    />
  );
}

const stylesCharacter = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    borderRadius: 10,
    padding: 25,
    margin: 10,
    marginTop: 12,
    elevation: 3, // Sombra para Android
    shadowColor: "#000", // Sombra para IOS
    shadowOpacity: 0.2,
    shadowRadius: 1.4,
  },
  characterImage: {
    width: 300,
    height: 500,
    marginVertical: 10,
    alignSelf: "center",
  
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center"
  },

  description: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    
  },

  appearance: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
  },
});
