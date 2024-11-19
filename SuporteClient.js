import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SuporteClient= () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Suporte ao Cliente</Text>
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

export default SuporteClient;
