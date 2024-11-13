import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native'


export default function Login() {
  const navigation = useNavigation();


  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View>
    </View>
  );
}
