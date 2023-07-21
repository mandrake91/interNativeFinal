import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Aquí puedes realizar la validación del inicio de sesión y obtener el usuario
    const user = { name: 'John Doe', email: 'john@example.com' };

    // Llamar a la función onLogin pasando el usuario como parámetro
    onLogin(user);
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