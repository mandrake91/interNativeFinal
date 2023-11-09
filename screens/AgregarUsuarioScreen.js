import { size } from 'lodash'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Button, Icon, CheckBox } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function AgregarUsuarioScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(defaultFormValues());
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirm, setErrorConfirm] = useState("");
  const [isAdministrator, setIsAdministrator] = useState(false); // Agregado para seleccionar el tipo de usuario
  const navigation = useNavigation();

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  const doRegisterUser = async () => {
    if (!validateData()) {
      return;
    }
    // Aquí debes enviar los datos del registro, incluyendo la información de isAdmin
    const userData = { ...formData, isAdmin: isAdministrator };
    // Resto de tu lógica de registro
  };

  const validateData = () => {
    setErrorConfirm("");
    setErrorEmail("");
    setErrorPassword("");
    let isValid = true;
    if (!validateEmail(formData.email)) {
      setErrorEmail("Debes ingresar un email válido");
      isValid = false;
    }
    if (size(formData.password) < 8) {
      setErrorPassword("Debes ingresar una contraseña de al menos 8 caracteres");
      isValid = false;
    }

    if (size(formData.confirm) < 8) {
      setErrorConfirm("Debes ingresar una confirmación de contraseña de al menos 8 caracteres");
      isValid = false;
    }
    if (formData.password !== formData.confirm) {
      setErrorPassword("La contraseña y la confirmación no son iguales");
      setErrorConfirm("La contraseña y la confirmación no son iguales");
      isValid = false;
    }
    return isValid;
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Input
          placeholder="Nombre"
          containerStyle={styles.input}
          onChange={(e) => onChange(e.nativeEvent.text, "name")}
          defaultValue={formData.name}
        />
        <Input
          placeholder="Apellido"
          containerStyle={styles.input}
          onChange={(e) => onChange(e.nativeEvent.text, "lastname")}
          defaultValue={formData.lastname}
        />
        <Input
          placeholder="DNI"
          containerStyle={styles.input}
          keyboardType="numeric"
          onChange={(e) => onChange(e.nativeEvent.text, "dni")}
          defaultValue={formData.dni}
        />
        <Input
          placeholder="Número de Teléfono"
          containerStyle={styles.input}
          keyboardType="phone-pad"
          onChange={(e) => onChange(e.nativeEvent.text, "phone")}
          defaultValue={formData.phone}
        />
        <Input
          placeholder="Ingresa tu email"
          keyboardType="email-address"
          containerStyle={styles.input}
          onChange={(e) => onChange(e.nativeEvent.text, "email")}
          errorMessage={errorEmail}
          defaultValue={formData.email}
        />
        <Input
          placeholder="Ingresa tu contraseña"
          password={true}
          containerStyle={styles.input}
          secureTextEntry={!showPassword}
          onChange={(e) => onChange(e, "password")}
          rightIcon={
            <Icon
              type="material-community"
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              iconStyle={styles.icon}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
          errorMessage={errorPassword}
          defaultValue={formData.password}
        />
        <Input
          placeholder="Confirma tu contraseña"
          password={true}
          containerStyle={styles.input}
          secureTextEntry={!showPassword}
          onChange={(e) => onChange(e.nativeEvent.text, "confirm")}
          rightIcon={
            <Icon
              type="material-community"
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              iconStyle={styles.icon}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
          errorMessage={errorConfirm}
          defaultValue={formData.confirm}
        />
        <CheckBox
          title="Soy administrador"
          checked={isAdministrator}
          onPress={() => setIsAdministrator(!isAdministrator)}
        />
        <Button
          title="Registrar Nuevo Usuario"
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btn}
          onPress={() => doRegisterUser()}
        />
      </View>
    </View>
  );
}

const defaultFormValues = () => {
  return { name: "", lastname: "", dni: "", phone: "", email: "", password: "", confirm: "" };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  form: {
    width: "80%",
  },
  input: {
    width: "100%",
  },
  btnContainer: {
    marginTop: 20,
    width: "95%",
    alignSelf: "center",
  },
  btn: {
    backgroundColor: "#442484",
  },
  icon: {
    color: "#c1c1c1",
  },
});
