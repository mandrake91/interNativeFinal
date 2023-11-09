import React from 'react';
import { View, Text } from 'react-native';

const DetalleIncidenteScreen = ({ route }) => {
  const { incidente } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ID: {incidente.id}</Text>
      <Text style={styles.descripcion}>Descripción: {incidente.descripcion}</Text>
      <Text style={styles.fecha}>Fecha del incidente: {incidente.fecha}</Text>
      {/* Agrega más detalles según la estructura de tus datos */}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  descripcion: {
    fontSize: 16,
    marginBottom: 8,
  },
  fecha: {
    fontSize: 14,
    color: 'gray',
  },
};

export default DetalleIncidenteScreen;