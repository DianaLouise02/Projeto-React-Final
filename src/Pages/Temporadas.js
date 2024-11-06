import React, { useEffect, useState } from "react";
import axios from "axios";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function Temporadas() {
  const [temporadas, setTemporadas] = useState([]);

  // Função para buscar temporadas no servidor
  const listTemporadas = () => {
    axios
      .get("http://10.0.2.2:3000/temporadas")

      .then((resposta) => {
        setTemporadas(resposta.data);
      })

      .catch((error) => {
        console.error("Erro ao buscar resultado", error);
      });
  };

  // useEffect para buscar dados
  useEffect(() => {
    listTemporadas();
  }, []);

  // Renderização das temporadas
  const renderTemporada = ({ item }) => (
    <View style={styles.container}>
      <Text style={styles.title}>{item.titulo}</Text>
      {item.imageUrl && (
        <Image source={{ uri: item.imageUrl }} style={styles.seasonImage} />
      )}
      <Text style={styles.year}>{item.ano}</Text>
    </View>
  );

  return (
    <FlatList
      data={temporadas} // Dados a serem exibidos
      renderItem={renderTemporada} // Como renderizar cada item
      scrollEventThrottle={14}  
    
    />
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff3542",
    borderRadius: 10,
    padding: 25,
    margin: 10,
    marginTop: 12,
    elevation: 3, // Sombra para Android
    shadowColor: "#00", // Sombra para IOS
    shadowOpacity: 0.2,
    shadowRadius: 1.4,
  },
  seasonImage: {
    width: 340,
    height: 500,
    marginVertical: 10,
    marginLeft: 1
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  year: {
    padding: 12,
    fontWeight: "semibold",
    letterSpacing: 1,
    textAlign: "center",
    fontSize: 15,
  },
});
