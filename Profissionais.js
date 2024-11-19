import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Profissionais= () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profissionais</Text>
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

export default Profissionais;
