import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import axios from "axios";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const logar = () => {
    if (!email || !senha) {
      Alert.alert("Erro!", "Por favor, preencha todos os campos.");
      return;
    }

    // Requisição
    axios
      .get("http://10.0.2.2:3000/usuarios")
      .then((response) => {
        const usuarios = response.data;

        // Verificação do usuário 
        const usuarioEncontrado = usuarios.find((usuario) => usuario.email === email && usuario.senha === senha);

        if (usuarioEncontrado) {
          Alert.alert("Login realizado com sucesso!");
        
          navigation.navigate("Home");
        } else {
          Alert.alert("Email ou senha incorretos!");
        }
      })
      .catch((error) => {
        Alert.alert("Erro ao tentar fazer login.", error.message);
      });
  };

  // Ir para a página de cadastro
  const irParaCadastro = () => {
    navigation.navigate("Cadastro");
  };

  return (
    <View style={estilos.container}>
    <View style={estilos.form}>
      <TextInput
        style={estilos.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={estilos.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <TouchableOpacity style={estilos.botao} onPress={logar}>
        <Text style={estilos.botaoTexto}>Login</Text>
      </TouchableOpacity>

      {/* Link para a página de cadastro */}
      <TouchableOpacity onPress={irParaCadastro}>
        <Text style={estilos.linkTexto}>Cadastre uma conta</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-start', // Espaço no topo menor
  },
  form: {
    flex: 1, // O formulário ocupa o maior espaço disponível
    justifyContent: 'center', // Centraliza o conteúdo dentro do formulário
    marginTop: 8, // Distância do topo da tela
    alignItems:"center"
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    
  },
  botao: {
    backgroundColor: 'gray',
    padding: 10,
    alignItems: 'center',
    marginBottom: 12,
    borderRadius: 5,
    width: "30%",
  },
  botaoTexto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  linkTexto: {
    marginTop: 16,
    color: 'darkgray',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },

});
