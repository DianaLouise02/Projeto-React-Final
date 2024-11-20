import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const fazerLogin = async () => {
    try {
      const resposta = await axios.get('http://10.0.2.2:3000/usuarios');
      const usuarios = resposta.data;

      // Verificar se usuarios é um array antes de usar o .find()
      if (!Array.isArray(usuarios)) {
        throw new Error('Dados de usuários estão mal formatados');
      }

      const usuarioEncontrado = usuarios.find(
        (usuario) => usuario.email === email && usuario.senha === senha
      );

      if (usuarioEncontrado) {
        alert('Login realizado com sucesso!');
        navigation.navigate('Forum', { usuarioId: usuarioEncontrado.id }); // Passa o ID do usuário para a tela de Fórum
      } else {
        setErro('Email ou senha incorretos. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setErro('Erro ao fazer login. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      {erro ? <Text style={styles.error}>{erro}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={fazerLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <Text
        style={styles.link}
        onPress={() => navigation.navigate('Cadastro')}
      >
        Não tem uma conta? Cadastre-se
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 5,
    alignSelf: 'center',
    width: '60%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  link: {
    color: 'gray',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: 10,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});
