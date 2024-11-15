import React, { useEffect, useState } from 'react'
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import axios from 'axios';

export default function Forum({route}) {
  const { nome } = route.params;
  const [comentarios, setComentarios] = useState([]);
  const [texto, setTexto] = useState('');
  const [idEditando, setIdEditando] = useState(null);

  // Função para buscar comentários
  const buscarComentarios = async () => {
    const resposta = await axios.get('http://10.0.2.2:3000/comentarios');
    setComentarios(resposta.data);
  };

  // Função para adicionar ou editar um comentário
  const manipularEnvio = async () => {
    if (idEditando) {
      await axios.put(`http://10.0.2.2:3000/comentarios/${idEditando}`, { texto });
      setIdEditando(null);
    } else {
      await axios.post('http://10.0.2.2:3000/comentarios', { texto, autor: 'Usuário1' });
    }
    setTexto('');
    buscarComentarios();
  };

  // Função para editar um comentário
  const manipularEdicao = (comentario) => {
    setTexto(comentario.texto);
    setIdEditando(comentario.id);
  };

  // Função para deletar um comentário
  const manipularDelecao = async (id) => {
    await axios.delete(`http://10.0.2.2:3000/comentarios/${id}`);
    buscarComentarios();
  };

  useEffect(() => {
    buscarComentarios();
  }, []);

  return (
    <View style={estilos.container}>
      <TextInput
        style={estilos.input}
        placeholder="Digite seu comentário"
        value={texto}
        onChangeText={setTexto}
        />
        <TouchableOpacity 
        style={estilos.button}
        onPress={manipularEnvio} 
      >
        <Text style={estilos.buttonText}>{idEditando ? "Editar Comentário" : "Adicionar Comentário"}</Text>
      </TouchableOpacity>
      <FlatList
        data={comentarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={estilos.containerComentario}>
            <Text>{item.texto} - {item.autor}</Text>
            <View style={estilos.containerBotoes}>
              <TouchableOpacity onPress={() => manipularEdicao(item)}>
                <Text style={estilos.botaoEditar}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => manipularDelecao(item.id)}>
                <Text style={estilos.botaoDeletar}>Deletar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    marginTop: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  containerComentario: {
    marginBottom: 15,
    padding: 10,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
  },
  containerBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  botaoEditar: {
    color: 'darkgray',
  },
  botaoDeletar: {
    color: 'red',
  },
});


