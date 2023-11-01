import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PerfilScreen from '../screens/PerfilScreen'

const Stack = createStackNavigator()

export default function PerfilStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name = "perfil"
            component = {PerfilScreen}
            options = {{title: "Cuenta", headerShown: false}}
        />       
    </Stack.Navigator>
  )
}