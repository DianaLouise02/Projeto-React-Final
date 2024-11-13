import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';

export default function Cadastro() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const enviarContato = async () => {
    if (!nome || !email || !senha) {
      Alert.alert("Erro! Por favor, preencha todos os campos.");
      return;
    }
    const novoCadastro = { nome, email, senha }
    axios
      .post('http://10.0.2.2:3000/cadastro', novoCadastro)
      .then(response => {
        if (response.status === 201) {
          Alert.alert('Cadastro realizado com sucesso!');
          
          setEmail('');
          setSenha('');
        } else {
          Alert.alert('Erro! Não é possível realizar cadastro.')
        }
      })
  };

  return (
    <View style={styles.container}>
     

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o email"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />



    </View>
  )
}
