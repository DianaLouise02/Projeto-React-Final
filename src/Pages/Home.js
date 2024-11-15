import { useNavigation } from "@react-navigation/native";
import React from "react";
import {ScrollView,StyleSheet,Text,TouchableOpacity,View} from "react-native";
import Card from "../Components/Card";
import Login from "./Login";

export default function Home() {
  const navigation = useNavigation();
  const goToLogin = () => {
    navigation.navigate("Login"); 
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <TouchableOpacity onPress={goToLogin} style={styles.loginLink}>
        <Text style={styles.textoLogin}>Login</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Card
          title="Temporadas"
          imageSource={require("../Images/SuitsSeason1.png")}
          content="134 episódios totais, 9 temporadas"
          navigationTarget="Temporadas"
        />

        <Card
          title="Personagens"
          imageSource={require("../Images/SuitsCharacters.jpg")}
          content="Conheça os personagens da série mais famosa de drama jurídico."
          navigationTarget="Personagens"
        />

        <Card
          title="Curiosidades"
          imageSource={require("../Images/Curiosidades.jpg")}
          content="Fatos interessantes da série"
          navigationTarget="Curiosidades"
        />

        <Card
          title="Redes Sociais"
          imageSource={require("../Images/RedesSociais.jpg")}
          content="Redes sociais do elenco"
          navigationTarget="RedesSociais"
        />

        <Card
          title="Fórum"
          imageSource={require("../Images/Forum.jpg")}
          content="Ambiente para interação"
          navigationTarget="Forum"
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 8,
  },
  container: {
    padding: 20,
    paddingBottom: 10,
  },
  loginLink: {
    alignSelf: 'flex-end',
    padding: 10,
    width:"40%",
    height: 40,
    marginRight: 120,
    fontSize: 20,
    backgroundColor: "whitesmoke", 
    alignItems: "center",
    marginBottom: 20, // Espaço entre o login e os cards
  },
  textoLogin: {
    fontSize: 15,
    fontWeight: "bold"
  },
 
});
