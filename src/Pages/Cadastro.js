import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';



export default function Cadastro() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [nextId, setNextId] = useState(1)


  useEffect(() => {
    
  const fetchNextId = async () => {
    try {
      const resposta = await axios.get('http://10.0.2.2:3000/usuarios');
      if (resposta.data.length === 0) {
        setNextId(1); // Reinicia o próximo ID para 1
      } else {
      const maxId = Math.max(...resposta.data.map((item) => item.id));
      setNextId(maxId + 1);
    }
   } catch (erro) {
      console.error('Erro ao buscar o próximo ID:', erro);
    }
  };
  fetchNextId();
}, []); 


  const cadastrarUsuario = async () => {
    try {
      await axios.post('http://10.0.2.2:3000/usuarios', {id: nextId, nome, email, senha });
      setMensagem('Cadastro realizado com sucesso!');
      setNextId(nextId + 1); // Incrementa o próximo ID
     
    } catch (erro) {
      console.error("Erro ao cadastrar:", erro);
      setMensagem('Erro ao cadastrar. Tente novamente.');
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
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
        <TouchableOpacity style={styles.button} onPress={cadastrarUsuario}>
        <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Já tem uma conta? Faça login</Text>
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
    marginTop: 12,
    color: 'gray',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  buttonText: {
    textAlign:"center",
    backgroundColor:"gray",
    width: 100,
    padding: 10,
    color:"white"
  }
});