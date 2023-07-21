import { size } from 'lodash'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Button, Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function RegisterScreen() {

    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState(defaultFormValues())
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirm, setErrorConfirm] = useState("")
    const navigation = useNavigation()

    const onChange = (e, type) =>{
        setFormData({...formData, [type]: e.nativeEvent.text})  //el type en corchetes significa que es dinamico y el valor que nos devuelva el texto esta en e.nativeEvent.text
    }

  /*  const doRegisterUser = async() => {
        if(!validateData()){
            return;
        }
        const result = await registerUser(formData.email, formData.password)
       if(!result.statusResponse){
            setErrorEmail(result.error)
            return
        }
        navigation.navigate("account")
    }

   const validateData = () => {
        setErrorConfirm("")
        setErrorEmail("")
        setErrorPassword("")
        let isValid = true
        if(!validateEmail(formData.email)){
            setErrorEmail("Debes ingresar un email valido")
            isValid = false
        }
        if(size(formData.password)<8){
            setErrorPassword("Debes ingresar una contraseña de al menos 6 carácteres")
            isValid = false
        }

        if(size(formData.confirm)<8){
            setErrorConfirm("Debes ingresar una confirmacion de contraseña de al menos 6 carácteres")
            isValid = false
        }
        if(formData.password !== formData.confirm){
            setErrorPassword("La contraseña y la confirmacion no son iguales")
            setErrorConfirm("La contraseña y la confirmacion no son iguales")
            isValid = false
        }
        return isValid
    }
*/
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
        errorMessage = {errorEmail}
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
                name={ showPassword ? "eye-off-outline" : "eye-outline"}
                iconStyle={styles.icon}
                onPress={() => setShowPassword(!showPassword)}                
            />
        }
        errorMessage = {errorPassword}
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
                name={ showPassword ? "eye-off-outline" : "eye-outline"}
                iconStyle={styles.icon}
                onPress={() => setShowPassword(!showPassword)}                
            />
        }
        errorMessage = {errorConfirm}
        defaultValue={formData.confirm}
      />
      <Button
        title="Registrar Nuevo Usuario" 
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={() => doRegisterUser()}
      />     
    </View>
   </View>
  )
}

const defaultFormValues = () => {
    return { name: "", lastname: "", dni: "", phone: "", email: "", password: "" };
  }

const styles = StyleSheet.create({
    container: {
        flex :1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30
    },
    form: {
        width: "80%",
      },
      input: {
        width: "100%",
      },
    btnContainer: {
        marginTio: 20,
        width: "95%",
        alignSelf: "center"
    },
    btn: {
        backgroundColor: "#442484"
    },
    icon: {
        color: "#c1c1c1"
    }
})
