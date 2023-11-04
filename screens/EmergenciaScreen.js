import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Linking } from 'react-native';

const EmergencyScreen = () => {
  const handleCall911 = () => {
    Linking.openURL('tel:911');
  };

  const handleCall107 = () => {
    Linking.openURL('tel:107');
  };

  const handleCall100 = () => {
    Linking.openURL('tel:100');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleCall911} style={[styles.button, { backgroundColor: 'red' }]}>
        <Text style={styles.buttonText}>POLICIA</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCall107} style={[styles.button, { backgroundColor: 'blue', marginTop: 20 }]}>
        <Text style={styles.buttonText}>SAME</Text>
      </TouchableOpacity>
    
    <TouchableOpacity onPress={handleCall100} style={[styles.button, { backgroundColor: 'red' }]}>
      <Text style={styles.buttonText}>BOMBEROS</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default EmergencyScreen;