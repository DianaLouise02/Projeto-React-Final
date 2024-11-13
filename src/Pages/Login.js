import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native'


export default function Login() {
  const navigation = useNavigation();


  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const logar = async () => {
    if (!email || !senha) {
      Alert.alert("Erro! Por favor, preencha ambos os campos.");
      return;
    }

    try {
      const response = await axios.post('http://10.0.2.2:3000/login', { email, senha });
      
      if (response.status === 200) {
        // Sucesso no login
        Alert.alert('Login realizado com sucesso!');
        // Aqui você pode redirecionar para a tela principal ou para onde deseja
      } else {
        Alert.alert('Email ou senha incorretos!');
      }
    } catch (error) {
      Alert.alert('Erro na conexão com o servidor!');
    }
  };

  return (
    <View>
    </View>
  );
}
