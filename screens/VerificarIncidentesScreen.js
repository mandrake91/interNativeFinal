import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const VerificarIncidentesScreen = ({ navigation }) => {
  const [incidentes, setIncidentes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchIncidentes();
  }, []);

  const incidentesUrl = 'http://192.168.0.11:8000/api/mostrarInformes';

  const fetchIncidentes = async () => {
    try {
      const response = await fetch(incidentesUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer PDVwDJVi3A3mYb96b5HL2Wru7fLyOFZfM935BlkvqXtqujDmQjhkw6DvK7CRLhZT6vfA4p',
        },
        body: JSON.stringify({
          estado: 1,
        }),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud de incidentes');
      }

      const data = await response.json();
      setIncidentes(data.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={incidentes}
        keyExtractor={(incidente) => incidente.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Detalle de Incidente', { incidente: item })}
          >
            <View style={styles.incidenteItem}>
              <Text style={styles.incidenteTitulo}>ID: {item.id}</Text>
              <Text style={styles.incidenteTitulo}>Tipo: {item.tipo}</Text>
              <Text style={styles.incidenteTitulo}>Descripción: {item.descripcion}</Text>
              <Text style={styles.incidenteTitulo}>
                Fecha: {new Date(item.fecha).toLocaleDateString('es-ES')}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7', // Fondo claro
  },
  incidenteItem: {
    backgroundColor: 'white', // Fondo blanco para cada elemento
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    margin: 8, // Márgenes externos para separar los elementos
    borderWidth: 1, // Borde
    borderColor: '#ddd', // Color del borde
  },
  incidenteTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VerificarIncidentesScreen;