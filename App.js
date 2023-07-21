import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import NoticiasScreen from './screens/NoticiasScreen';
import InformeScreen from './screens/InformeScreen';
import PerfilScreen from './screens/PerfilScreen';
import RegistroScreen from './screens/RegistroScreen';
import RecuperarPasswordScreen from './screens/RecuperarPasswordScreen';
import { NewsTabIcon, InformesTabIcon, PerfilTabIcon } from './screens/TabBarIcons';

const Stack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  
  
  // Si el usuario no ha iniciado sesión, muestra el LoginScreen
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Noticias"
            component={NoticiasScreen}
            options={{
              tabBarIcon: NewsTabIcon,
            }}
          />
          <Stack.Screen
            name="Informes"
            component={InformeScreen}
            options={{
              tabBarIcon: InformesTabIcon,
            }}
          />
          <Stack.Screen
            name="Perfil"
            component={PerfilScreen}
            options={{
              tabBarIcon: PerfilTabIcon,
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
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