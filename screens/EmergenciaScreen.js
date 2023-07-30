import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Linking } from 'react-native';

const EmergencyScreen = () => {
  const handleCall911 = () => {
    Linking.openURL('tel:911');
  };

  const handleCall107 = () => {
    Linking.openURL('tel:107');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleCall911} style={[styles.button, { backgroundColor: 'red' }]}>
        <Text style={styles.buttonText}>LLAMAR AL 911</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCall107} style={[styles.button, { backgroundColor: 'blue', marginTop: 20 }]}>
        <Text style={styles.buttonText}>LLAMAR AL 107</Text>
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