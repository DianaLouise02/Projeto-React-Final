import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import axios from "axios";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const loginUsuario = async () => {
    try {
      const resposta = await axios.get(`http://10.0.2.2:3000/usuarios?email=${email}&senha=${senha}`);
      if (resposta.data.length > 0) {
        setMensagem(`Bem-vindo, ${resposta.data[0].nome}!`);
        // Navegar para a tela do fórum imediatamente após login
        navigation.navigate('Forum', { nome: resposta.data[0].nome });
      } else {
        setMensagem('Credenciais inválidas');
      }
    } catch (erro) {
      console.error("Erro ao fazer login:", erro);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
    <TouchableOpacity style={styles.button} onPress={loginUsuario}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.link}>Não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 50,
    alignItems:"center"
  },
  input: {
    height: 40,
    width:"95%",
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  mensagem: {
    marginTop: 12,
    color: 'red',
    textAlign: 'center',
  },
  link: {
    marginTop: 40,
    color: 'gray',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  buttonText: {
    textAlign:"center",
    backgroundColor:"gray",
    width: 80,
    padding: 10,
    color:"white"
  }
});

