import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CargarNoticiaScreen = () => {
  const [titulo, setTitulo] = useState('');
  const [imagenUrl, setImagenUrl] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleCargarNoticia = async () => {
    const noticiasUrl = 'http://192.168.0.11:8000/api/cargarNoticia';

    try {
      const response = await fetch(noticiasUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer PDVwDJVi3A3mYb96b5HL2Wru7fLyOFZfM935BlkvqXtqujDmQjhkw6DvK7CRLhZT6vfA4p',
        },
        body: JSON.stringify({
          titulo,
          imagen: imagenUrl,
          descripcion,
        }),
      });

      if (!response.ok) {
        console.log(response);
        throw new Error('Error en la carga de la noticia');
      }

      // Aquí puedes manejar la respuesta de la carga exitosa si lo deseas

      // Limpiar los campos después de la carga exitosa
      setTitulo('');
      setImagenUrl('');
      setDescripcion('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título:</Text>
      <TextInput
        value={titulo}
        onChangeText={setTitulo}
        style={styles.input}
      />
      <Text style={styles.label}>URL de la imagen:</Text>
      <TextInput
        value={imagenUrl}
        onChangeText={setImagenUrl}
        style={styles.input}
      />
      <Text style={styles.label}>Descripción:</Text>
      <TextInput
        value={descripcion}
        onChangeText={setDescripcion}
        style={styles.input}
        multiline
      />
      <TouchableOpacity onPress={handleCargarNoticia} style={styles.button}>
        <Text style={styles.buttonText}>Cargar Noticia</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 8,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CargarNoticiaScreen;