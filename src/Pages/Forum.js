import React, { useEffect, useState } from 'react'
import {FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import axios from 'axios';

export default function Forum({route}) {
  const { nome, isLogado } = route.params;
  const [comentarios, setComentarios] = useState([]);
  const [texto, setTexto] = useState('');
  const [idEditando, setIdEditando] = useState(null);

  useEffect(() => {
    const fetchComentarios = async () => {
      const resposta = await axios.get('http://10.0.2.2:3000/comentarios');
      setComentarios(resposta.data);
    };
    fetchComentarios();
  }, []);

  const adicionarComentario = async () => {
    if (isLogado) {
      await axios.post('http://10.0.2.2:3000/comentarios', { texto, nome });
      setTexto('');
      fetchComentarios();
    }
  };

  const editarComentario = async (comentario) => {
    if (isLogado) {
      setTexto(comentario.texto);
      setIdEditando(comentario.id);
    }
  };

  const deletarComentario = async (id) => {
    if (isLogado) {
      await axios.delete(`http://10.0.2.2:3000/comentarios/${id}`);
      fetchComentarios();
    }
  };
  return (
    <View style={estilos.container}>
    {isLogado && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Digite seu comentário"
            value={texto}
            onChangeText={setTexto}
          />
          <TouchableOpacity style={styles.button} onPress={adicionarComentario}>
            <Text style={styles.buttonText}>Adicionar Comentário</Text>
          </TouchableOpacity>
        </>
      )}
      <FlatList
       data={comentarios}
       keyExtractor={(item) => item.id.toString()}
       renderItem={({ item }) => (
         <View style={styles.containerComentario}>
           <Text>{item.texto} - {item.autor}</Text>
           {isLogado && (
             <View style={styles.containerBotoes}>
               <TouchableOpacity onPress={() => editarComentario(item)}>
                 <Text style={styles.botaoEditar}>Editar</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => deletarComentario(item.id)}>
                 <Text style={styles.botaoDeletar}>Deletar</Text>
               </TouchableOpacity>
             </View>
           )}
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


