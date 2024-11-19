import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Perfil from './Perfil';
import Serviços from './Serviços';

export default function DetalhesScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Bem-vindo</Text>
            
            {/* Substituindo o Button por TouchableOpacity */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Perfil')}
            >
                <Text style={styles.buttonText}>Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Serviços')}
            >
                <Text style={styles.buttonText}>Serviços</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Profissionais')}
            >
                <Text style={styles.buttonText}>Profissionais</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Transações')}
            >
                <Text style={styles.buttonText}>Transações</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Configurações')}
            >
                <Text style={styles.buttonText}>Configurações</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('SuporteClient')}
            >
                <Text style={styles.buttonText}>Suporte ao Cliente</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20, // Para um pouco de espaçamento lateral
    },
    welcomeText: {
        fontSize: 24,
        marginBottom: 30, // Espaço entre o texto de boas-vindas e os botões
    },
    button: {
        backgroundColor: '#007bff', // Cor do fundo do botão
        paddingVertical: 12, // Padding superior e inferior
        paddingHorizontal: 20, // Padding lateral
        borderRadius: 5, // Bordas arredondadas
        marginBottom: 15, // Espaço entre os botões
        elevation: 3, // Sombra para o Android
        shadowColor: '#000', // Cor da sombra (para iOS)
        shadowOffset: { width: 0, height: 2 }, // Offset da sombra
        shadowOpacity: 0.25, // Opacidade da sombra
        shadowRadius: 3.5, // Raio da sombra
    },
    buttonText: {
        color: '#fff', // Cor do texto do botão
        fontSize: 18,
        textAlign: 'center',
    },
});
