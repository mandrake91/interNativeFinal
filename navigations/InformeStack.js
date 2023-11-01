import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
//import InformeScreen from '../navigations/InformeStack'

const Stack = createStackNavigator()

export default function InformeStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name = "Informe"
            component = {InformeScreen}
            options = {{title: "Informes", headerShown: false}}
        />           
    </Stack.Navigator>
  )
}