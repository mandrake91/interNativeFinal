import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AdministradorScreen = () => {
  const navigation = useNavigation();

  // Función para manejar la navegación cuando se presiona un botón
  const handleButtonPress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress('Cargar Noticias')}>
        <Text style={styles.buttonText}>Agregar Noticias</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress('Agregar Usuario')}>
        <Text style={styles.buttonText}>Agregar Usuario</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress('Reportes')}>
        <Text style={styles.buttonText}>Visualizar Reportes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress('Listado de Incidentes')}>
        <Text style={styles.buttonText}>Verificar Incidentes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Color de fondo
  },
  button: {
    backgroundColor: '#8e44ad', // Color del botón (violeta)
    padding: 15,
    borderRadius: 10, // Bordes más redondeados
    width: 300, // Ancho fijo
    marginBottom: 20, // Espacio entre botones
    alignItems: 'center', // Centrar contenido horizontalmente
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AdministradorScreen;
