import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import NoticiasScreen from './screens/NoticiasScreen';
import InformeScreen from './screens/InformeScreen';
import PerfilScreen from './screens/PerfilScreen';
import { NewsTabIcon, InformesTabIcon, PerfilTabIcon } from './screens/TabBarIcons';

const Tab = createBottomTabNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Función para cambiar el estado de inicio de sesión y navegar a la pantalla de noticias
  const handleLogin = (user) => {
    setIsLoggedIn(true);
  };

  // Si el usuario no ha iniciado sesión, muestra el LoginScreen
  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <NavigationContainer>
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
      </Tab.Navigator>
      
    </NavigationContainer>
  );
};

export default App;