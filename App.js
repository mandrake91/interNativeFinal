import React, { useState, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Cambiamos a createBottomTabNavigator
import LoginScreen from './screens/LoginScreen';
import NoticiasScreen from './screens/NoticiasScreen';
import InformeScreen from './screens/InformeScreen';
import PerfilScreen from './screens/PerfilScreen';
import RegistroScreen from './screens/RegistroScreen';
import RecuperarPasswordScreen from './screens/RecuperarPasswordScreen';
import { NewsTabIcon, InformesTabIcon, PerfilTabIcon } from './screens/TabBarIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator(); 

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };


  // Si el usuario no ha iniciado sesión, muestra el LoginScreen
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator>
        {/* NoticiasScreen dentro de la pestaña */}
        <Tab.Screen
          name="Noticias"
          component={NoticiasScreen}
          options={{
            tabBarIcon: NewsTabIcon,
          }}
        />
        {/* InformeScreen dentro de la pestaña */}
        <Tab.Screen
          name="Informes"
          component={InformeScreen}
          options={{
            tabBarIcon: InformesTabIcon,
          }}
        />
        {/* PerfilScreen dentro de la pestaña */}
        <Tab.Screen
          name="Perfil"
          component={PerfilScreen}
          options={{
            tabBarIcon: PerfilTabIcon,
          }}
        />
      </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
              // Pasa handleLogin como prop
              initialParams={{ handleLogin }}
            />   
          <Stack.Screen
            name="Registro" // Asegúrate de que este nombre coincida con el componente
            component={RegistroScreen} // Asegúrate de que esta importación sea correcta
          />
          <Stack.Screen
            name="Recuperar Contraseña" // Asegúrate de que este nombre coincida con el componente
            component={RecuperarPasswordScreen} // Asegúrate de que esta importación sea correcta
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;