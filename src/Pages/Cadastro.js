
import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = async () => {
    try {
      // Obter os usuários existentes para definir o próximo ID
      const resposta = await axios.get('http://10.0.2.2:3000/usuarios');
      const usuarios = resposta.data;

      // Começando com o ID 1 na ausência de usuários
      const proximoId = usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id)) + 1 : 1;

      // Criação de um novo usuário com o ID gerado
      const novoUsuario = { id: proximoId, nome, email, senha };

      // Enviando o novo usuário para a API
      const respostaCadastro = await axios.post('http://10.0.2.2:3000/usuarios', novoUsuario);

      if (respostaCadastro.status === 201) {
        alert('Cadastro realizado com sucesso!');
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      alert('Erro ao cadastrar. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
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
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <Text
        style={styles.link}
        onPress={() => navigation.navigate('Login')}
      >
        Já tem uma conta? Faça login
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
});