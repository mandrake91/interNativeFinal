//Esto es mas facil con un boton para llamar a emergencias en vez de hacer un reporte

import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Picker } from '@react-native-picker/picker';
import { format } from 'date-fns';
import * as Location from 'expo-location'; 

export default function InformeScreen() {
  const [selectedType, setSelectedType] = useState('');
  const [location, setLocation] = useState(null);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Se requiere permiso para acceder a la ubicación.');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location.coords);
  };

  const handleSendReport = () => {
    console.log('Tipo de informe:', selectedType);
    console.log('Ubicación:', location);
    console.log('Fecha:', date);
    console.log('Foto:', photo);
    console.log('Descripción:', description);
  };

  const formattedDate = format(date, 'dd/MM/yyyy');

  return (
<ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.label}>Seleccionar tipo de Emergencia:</Text>
        <Picker
          selectedValue={selectedType}
          onValueChange={(itemValue) => setSelectedType(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Tipo 1" value="tipo1" />
          <Picker.Item label="Tipo 2" value="tipo2" />
          <Picker.Item label="Tipo 3" value="tipo3" />
        </Picker>

        <Text style={styles.label}>Ubicación:</Text>
        {location ? (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.02,
              longitudeDelta: 0.02,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
            />
          </MapView>
        ) : (
          <Text style={styles.placeholderText}>Obteniendo ubicación...</Text>
        )}
 </ScrollView>
  );
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    scrollContainer: {
      paddingBottom: 20,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    picker: {
      marginBottom: 20,
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
    },
    map: {
      height: 200,
      marginBottom: 20,
    },
    placeholderText: {
      fontStyle: 'italic',
      color: '#888',
      marginBottom: 20,
    },
    date: {
      marginBottom: 20,
      fontSize: 16,
    },
    photoContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    photoButton: {
      backgroundColor: '#442484',
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginBottom: 10,
    },
    photoButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    photo: {
      width: 200,
      height: 200,
      marginBottom: 10,
      borderRadius: 5,
    },
    descriptionInput: {
      height: 100,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 20,
      paddingHorizontal: 10,
      paddingTop: 5,
    },
    buttonContainer: {
      marginBottom: 20,
    },
  });