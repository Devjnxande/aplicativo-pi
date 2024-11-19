import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Serviços = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Serviços</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 24,
  },
});

export default Serviços;
