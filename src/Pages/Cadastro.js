import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';


export default function Cadastro() {
  const navigation = useNavigation();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const enviarCadastro = async () => {
    if (!nome || !email || !senha) {
      Alert.alert("Erro! Por favor, preencha todos os campos.");
      return;
    }
    axios
    .get("http://10.0.2.2:3000/usuarios")
    .then((response) => {
      const usuarios = response.data;
      const ultimoId = usuarios.length > 0 ? Math.max(...usuarios.map((u) => u.id)) : 0;
      const novoId = ultimoId + 1;

    const novoCadastro = {id: novoId, nome, email, senha };
    axios
      .post("http://10.0.2.2:3000/usuarios", novoCadastro)
      .then((response) => {
        if (response.status === 201) {
          Alert.alert("Cadastro realizado com sucesso!");
          setEmail("");
          setSenha("");
        } else {
          Alert.alert("Erro! Não é possível realizar cadastro.");
        }
      })
      .catch((error) => {
        // Requisição POST
        Alert.alert("Erro ao tentar cadastrar", error.message);
      });
      
    })
    .catch((error) => {
      // Requisição GET
      Alert.alert("Erro ao buscar usuários", error.message);
    });
};
  // Ir para a página de login
  const irParaLogin = () => {
    navigation.navigate("Login");
  };


  return (
    <View style={estilos.container}>
    <View style={estilos.form}>
      <Text style={estilos.label}>Nome</Text>
      <TextInput
        style={estilos.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />
      <Text style={estilos.label}>Email</Text>
      <TextInput
        style={estilos.input}
        placeholder="Digite o email"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={estilos.label}>Senha</Text>
      <TextInput
        style={estilos.input}
        placeholder="Digite a senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <TouchableOpacity style={estilos.botao} onPress={enviarCadastro}>
        <Text style={estilos.botaoTexto}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={irParaLogin}>
        <Text style={estilos.linkTexto}>Faça Login</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const estilos = StyleSheet.create({

  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-start' 
  }, 

  label: {
    fontSize: 14,
    marginBottom: 2,
    fontWeight: 'bold',
    textAlign: 'left', 
    width: '80%'
  },

  form: {
    flex: 1, 
    justifyContent: 'center', 
    marginTop: 8, 
    alignItems:'center'
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8   
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
