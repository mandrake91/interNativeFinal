import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity, StyleSheet, Text } from 'react-native';
//import { useRoute, useNavigation } from '@react-navigation/native';

const LoginScreen = ({ navigation, onLoginSuccess }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const loginUrl = 'http://192.168.0.11:8000/api/login';

  const handleLogin = async () => {
    try {
      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cookie': 'XSRF-TOKEN=eyJpdiI6IlNrdjZOWVVYYnFDYVdrS2ZicDUzM0E9PSIsInZhbHVlIjoiQWZZUENBL1pFcU5EZlIrNkFwZnZMVzh4Qk9CTXFNajQyWko3VkpHdHR6RWF0L0NpM05UajY2SUJwYlM2MWN0VGdMYmcyM0EwY2Q4R21iZGtHdHRzd0N1M2w0RDlobkQxRGpvR0RVVVM3a1ZjRHRPdFhud0dYbkEvSmhYWFRmeTIiLCJtYWMiOiI0NzExMWQ1NjcxNGYyZTJhMWQzNzAxNzE5NmY3YjRlYjQ3M2QyZWMxMTA5ZmIwZDQ2MWU1MzJhMTEyY2MxZWMxIiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IkplT2xaVnMrSWVzVDd3NjZoMzNzQVE9PSIsInZhbHVlIjoiK2pSTGc3c3U2VWx1SWJVUjk3cXBndS9sVUJPN2IxOWlWWUZPSTlvUVI4VjFQMktabWxpUjU3TExVWVI4QlRxVy95WVk5OStBQ1Zac28zOUtuVjNHOEhibEhoQXBMbE1LNExWR0pHcFF1UkcwT1NNNlhsOXpsZURSQUZSQ2MzOVUiLCJtYWMiOiJjOTlkMWU0MDczNjVkZjU5ZWE4ZGRiNTBmNGQ5OWMwYThiMDZlYTk2N2ExZWY2ZGU1MzEyOTNjZTI0MGM0Y2Y3IiwidGFnIjoiIn0%3D',
        },
        body: JSON.stringify({
          username: 'jeronimoledesma45450@gmail.com',
          password: 'asdasdasd'
        }),
      });
      console.log(response);
      if (!response.ok) {
        console.log(response);
        // En caso de que la respuesta no sea exitosa, lanzar un error o manejarlo según corresponda
        throw new Error('Error en la solicitud de inicio de sesión.');
      }

      // Si la respuesta es exitosa, obtener los datos en formato JSON
      const data = await response.json();

      // Aquí puedes manejar la respuesta de la API como desees
      console.log('Respuesta de inicio de sesión:', data);

      // Llamar a la función onLoginSuccess para indicar que el inicio de sesión fue exitoso
      onLoginSuccess();
    } catch (error) {
      console.error('Error:', error.message);
      // Manejar el error aquí, por ejemplo, mostrar un mensaje al usuario
    }
  };

  const handleRegister = () => {
    navigation.navigate('Registro'); // Redirigir a la pantalla RegistroScreen
  };

  const handleRecover = () => {
    navigation.navigate('Recuperar Contraseña'); // Redirigir a la pantalla RecuperarPasswordScreen
  };


  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} />
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.registerLink}>Registrate si no tenes cuenta</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRecover}>
        <Text style={styles.registerLink}>Olvidaste tu Contraseña?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  registerLink: {
    marginTop: 10,
    color: 'blue', // Color del hipervínculo
    textDecorationLine: 'underline', // Subrayado para indicar que es un enlace
  },
});

export default LoginScreen;


/*

const handleLogin = async () => {  
    // Aquí puedes agregar el código para comunicarte con tu backend en PHP
    // para verificar las credenciales y realizar el inicio de sesión.
    try {
    const response = await fetch('http://192.168.0.11:8000/api/login', {
      
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: email,
        password,
      }),
    });
    const data = await response.json();
    alert(data);
    if (data.res === true) {
      // Si el inicio de sesión es exitoso, navegamos a la pantalla HomeScreen
      navigation.navigate('Home', { user: data.data.user });
     
    } else {
      // Si hay un error en el inicio de sesión, puedes mostrar un mensaje de error
      alert('Error en el inicio de sesión. Verifica tus credenciales.');
    }
  } catch (error) {
    console.error(error);
    alert('Error en la solicitud. Verifica la URL del backend y la conectividad de la red.');
  }
};
*/