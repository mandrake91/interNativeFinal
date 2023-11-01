import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import NoticiasScreen from '../screens/NoticiasScreen'

const Stack = createStackNavigator()

export default function NoticiasStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name = "noticias2"
            component = {NoticiasScreen}
            options = {{title: "Noticias2", headerShown: false}}
        />            
    </Stack.Navigator>
  )
}