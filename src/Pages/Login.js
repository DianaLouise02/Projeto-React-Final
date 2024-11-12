import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native'


export default function Login() {
  const navigation = useNavigation();


  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome"
        value={nome}
        onChangeText={setNome}
      />

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
      />

      <TouchableOpacity>
       
      </TouchableOpacity>
    </View>
  );
}
