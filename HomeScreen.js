import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  // Função para manipular o envio do formulário
  const handleLogin = () => {
    if (!usuario || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }
    // Aqui você pode adicionar a lógica de autenticação, por exemplo, fazendo uma requisição à API
    Alert.alert('Sucesso', 'Login realizado com sucesso');
    // Se o login for bem-sucedido, você pode navegar para a tela de detalhes
    navigation.navigate('Detalhes');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        placeholderTextColor="#ccc"
        value={usuario}
        onChangeText={setUsuario}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#ccc"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <Button title="Entrar" 
      onPress={() => navigation.navigate('inicial')} />

      <View style={styles.space} />

      <Button
        title="Cadastro"
        onPress={() => navigation.navigate('Cadastro')}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Sobreposição para melhorar a legibilidade
    padding: 20,
    paddingTop: 40, // Um pouco de espaço no topo
  },
  text: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
  space: {
    height: 20, // Espaço entre os botões
  },
});
