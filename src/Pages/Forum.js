import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView} from "react-native";
import axios from "axios";

export default function Forum({ route, navigation }) {
  const [comentarios, setComentarios] = useState([]);
  const [novoComentario, setNovoComentario] = useState("");
  const [usuarioId] = useState(route.params?.usuarioId?.toString()  || null); // ID do usuário logado
  const [comentarioEditando, setComentarioEditando] = useState(null);
  const [novoTextoComentario, setNovoTextoComentario] = useState("");

  // Carrega os comentários assim que o componente é montado
  useEffect(() => {
    const fetchComentarios = async () => {
      try {
        const resposta = await axios.get("http://10.0.2.2:3000/comentarios");
        setComentarios(resposta.data);
      } catch (error) {
        console.error("Erro ao carregar comentários:", error);
      }
    };
    fetchComentarios();
  }, []);

  // Adiciona um novo comentário
  const handleAdicionarComentario = async () => {
    if (!novoComentario) return;

    try {
      // Pega o usuário logado para usar o nome como autor
      const respostaUsuario = await axios.get(`http://10.0.2.2:3000/usuarios/${usuarioId}`);
      const autor = respostaUsuario.data.nome;  // Nome do autor baseado no usuarioId

      const resposta = await axios.post('http://10.0.2.2:3000/comentarios', {
        autor: autor, 
        autorId: usuarioId, // Inclui o ID do autor// Usa o nome do usuário como autor
        texto: novoComentario,
      });

      setComentarios([...comentarios, resposta.data]);
      setNovoComentario(''); // Limpa o campo de novo comentário
    } catch (error) {
      console.error('Erro ao adicionar comentário:', error);
    }
  };

  const handleEditarComentario = async (id) => {
    if (!novoTextoComentario) return;

    try {
      const respostaUsuario = await axios.get(`http://10.0.2.2:3000/usuarios/${usuarioId}`);
      const autor = respostaUsuario.data.nome; // Nome do autor baseado no usuarioId

      const resposta = await axios.put(`http://10.0.2.2:3000/comentarios/${id}`, {
        texto: novoTextoComentario,
        autor: autor,
        autorId: usuarioId,  // Mantém o nome do autor ao atualizar o comentário
      });

      // Atualiza o comentário na lista
      setComentarios(comentarios.map(com => (com.id === id ? resposta.data : com)));
      setComentarioEditando(null); // Fecha o modo de edição
      setNovoTextoComentario(''); // Limpa o campo de texto de edição
    } catch (error) {
      console.error('Erro ao editar comentário:', error);
    }
  };

  // Deleta um comentário
   // Deleta um comentário
   const handleDeletarComentario = async (id) => {
    try {
      await axios.delete(`http://10.0.2.2:3000/comentarios/${id}`);
      setComentarios(comentarios.filter((com) => com.id !== id));
    } catch (error) {
      console.error("Erro ao deletar comentário:", error);
    }
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      {/* Mostrar campo para adicionar comentário para o usuário logado */}
      {usuarioId && (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Adicione um comentário"
            value={novoComentario}
            onChangeText={setNovoComentario}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleAdicionarComentario}
          >
            <Text style={styles.buttonText}>Adicionar comentário</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Exibe os comentários */}
      {comentarios.map((comentario) => (
        <View key={comentario.id?.toString()} style={styles.commentContainer}>
          <Text style={styles.author}>{comentario.autor}</Text>
          {comentarioEditando === comentario.id ? (
            <View>
              <TextInput
                style={styles.input}
                value={novoTextoComentario}
                onChangeText={setNovoTextoComentario}
              />
              <TouchableOpacity
                style ={styles.button}
                onPress={() => handleEditarComentario(comentario.id)}
              >
                <Text style={styles.buttonText}>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setComentarioEditando(null);
                  setNovoTextoComentario('');
                }}
              >
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Text>{comentario.texto}</Text>
              {/* Somente o autor do comentário pode editar ou excluir */}
              {usuarioId === comentario.autorId?.toString() && (
                <View style={styles.buttons}>
                  <TouchableOpacity
                    onPress={() => {
                      setComentarioEditando(comentario.id);
                      setNovoTextoComentario(comentario.texto);
                    }}
                  >
                    <Text style={styles.button}>Editar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleDeletarComentario(comentario.id)}
                  >
                    <Text style={styles.button}>Deletar</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          )}
        </View>
      ))}
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 42,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  commentContainer: {
    marginTop: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  author: {
    fontWeight: "bold",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "darkgray",
    padding: 5,
    borderRadius: 2,
    alignSelf: "center",
    width: "100%",
    height: 30,
    marginTop: 10,
    color: "white",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
