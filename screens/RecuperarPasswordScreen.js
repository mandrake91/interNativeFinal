import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

export default function RecuperarPasswordScreen() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorRepeatPassword, setErrorRepeatPassword] = useState('');
  const navigation = useNavigation();
  const [selectedType, setSelectedType] = useState('tipo1');

  const onChange = (value, type) => {
    setFormData({ ...formData, [type]: value });
  };

  const handleResetPassword = () => {
    if (!validateData()) {
      return;
    }
    // Lógica para enviar la solicitud de restablecimiento de contraseña
    navigation.navigate('ResetPassword');
  };

  const validateData = () => {
    setErrorEmail('');
    setErrorPassword('');
    setErrorRepeatPassword('');
    let isValid = true;

    if (!validateEmail(formData.email)) {
      setErrorEmail('Debes ingresar un correo electrónico válido.');
      isValid = false;
    }

    if (formData.password.length < 6) {
      setErrorPassword('La contraseña debe tener al menos 6 caracteres.');
      isValid = false;
    }

    if (formData.password !== formData.repeatPassword) {
      setErrorRepeatPassword('Las contraseñas no coinciden.');
      isValid = false;
    }

    return isValid;
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Email"
        keyboardType="email-address"
        containerStyle={styles.input}
        onChange={(e) => onChange(e.nativeEvent.text, 'email')}
        errorMessage={errorEmail}
        value={formData.email}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        secureTextEntry
        onChange={(e) => onChange(e.nativeEvent.text, 'password')}
        errorMessage={errorPassword}
        value={formData.password}
      />
      <Input
        placeholder="Repetir Contraseña"
        containerStyle={styles.input}
        secureTextEntry
        onChange={(e) => onChange(e.nativeEvent.text, 'repeatPassword')}
        errorMessage={errorRepeatPassword}
        value={formData.repeatPassword}
      />
      <Picker
          selectedValue={selectedType}
          onValueChange={(itemValue) => setSelectedType(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="¿Cual es el nombre de tu mascota?" value="tipo1" />
          <Picker.Item label="¿Cual es tu hobby favorito?" value="tipo2" />
          <Picker.Item label="¿Cual es tu comida favoria?" value="tipo3" />
        </Picker>
        <Input
        placeholder="Respuesta"
        containerStyle={styles.input}
      />
      <Button
        title="Restablecer Contraseña"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={handleResetPassword}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  input: {
    width: '100%',
    marginBottom: 10,
  },
  picker: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
  },
  btnContainer: {
    marginTop: 20,
    width: '95%',
    alignSelf: 'center',
  },
  btn: {
    backgroundColor: '#442484',
  },
});