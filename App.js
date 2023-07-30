import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import { AuthProvider } from './screens/AuthProvider';
import NoticiasScreen from './screens/NoticiasScreen';
import InformeScreen from './screens/InformeScreen';
import PerfilScreen from './screens/PerfilScreen';
import RegistroScreen from './screens/RegistroScreen';
import RecuperarPasswordScreen from './screens/RecuperarPasswordScreen';
import EmergenciaScreen from './screens/EmergenciaScreen';
import { NewsTabIcon, InformesTabIcon, PerfilTabIcon, EmergenciaTabIcon } from './screens/TabBarIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer>
      <AuthProvider>
        {isLoggedIn ? (
          <Tab.Navigator>
            <Tab.Screen
              name="Noticias"
              component={NoticiasScreen}
              options={{
                tabBarIcon: NewsTabIcon,
              }}
            />
            <Tab.Screen
              name="Informes"
              component={InformeScreen}
              options={{
                tabBarIcon: InformesTabIcon,
              }}
            />
            <Tab.Screen
              name="Perfil"
              component={PerfilScreen}
              options={{
                tabBarIcon: PerfilTabIcon,
              }}
            />
            <Tab.Screen
              name="Emergencia"
              component={EmergenciaScreen}
              options={{
                tabBarIcon: EmergenciaTabIcon,
              }}
            />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator>
             <Stack.Screen
              name="Login"
              options={{
                headerShown: false,
              }}
            >
              {/* Pasamos onLoginSuccess directamente */}
              {props => <LoginScreen {...props} onLoginSuccess={handleLoginSuccess} />}
            </Stack.Screen>
            <Stack.Screen
              name="Registro"
              component={RegistroScreen}
            />
            <Stack.Screen
              name="Recuperar Contraseña"
              component={RecuperarPasswordScreen}
            />
          </Stack.Navigator>
        )}
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;