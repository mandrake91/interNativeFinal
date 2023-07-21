import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, ScrollView, View, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { MapView, Marker } from 'expo';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { format } from 'date-fns';

export default function Informes() {
  const [selectedType, setSelectedType] = useState('');
  const [location, setLocation] = useState(null);
  const [date, setDate] = useState(new Date());
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState('');

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

  const handleChoosePhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Se requiere permiso para acceder a la galería de fotos.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) {
      setPhoto(result.assets[0].uri)
    }
  };

  const handleTakePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Se requiere permiso para acceder a la cámara.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync();
    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
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
    <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={100}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.label}>Tipo de Informe:</Text>
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

        <Text style={styles.label}>Fecha:</Text>
        <Text style={styles.date}>{formattedDate}</Text>

        <Text style={styles.label}>Foto:</Text>
        <View style={styles.photoContainer}>
          <Image source={{ uri: photo }} style={styles.photo} />
          <TouchableOpacity style={styles.photoButton} onPress={handleChoosePhoto}>
            <Text style={styles.photoButtonText}>Seleccionar Foto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.photoButton} onPress={handleTakePhoto}>
          <Text style={styles.photoButtonText}>Tomar Foto</Text>
        </TouchableOpacity>
        </View>

        <Text style={styles.label}>Descripción:</Text>
        <Input
          style={styles.descriptionInput}
          multiline
          value={description}
          onChangeText={setDescription}
        />
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button title="Enviar" onPress={handleSendReport} />
      </View>
    </KeyboardAvoidingView>
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