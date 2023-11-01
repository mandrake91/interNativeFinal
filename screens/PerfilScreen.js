import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const PerfilScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [nombre, setNombre] = useState('John');
  const [apellido, setApellido] = useState('Doe');

  const handleSaveChanges = () => {
    // Aquí puedes guardar los cambios en el backend si es necesario
    // Por ejemplo, realizar una petición HTTP para actualizar los datos del usuario
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre:</Text>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
        />
      ) : (
        <Text style={styles.text}>{nombre}</Text>
      )}

      <Text style={styles.label}>Apellido:</Text>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={apellido}
          onChangeText={setApellido}
        />
      ) : (
        <Text style={styles.text}>{apellido}</Text>
      )}

      {isEditing ? (
        <TouchableOpacity style={styles.button} onPress={handleSaveChanges}>
          <Text style={styles.buttonText}>Guardar cambios</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={() => setIsEditing(true)}>
          <Text style={styles.buttonText}>Editar perfil</Text>
        </TouchableOpacity>
      )}
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
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#442484',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PerfilScreen;