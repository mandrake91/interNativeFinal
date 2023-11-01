/*import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import NoticiasStack from './NoticiasStack';
import InformeStack from './InformeStack';
import PerfilStack from './PerfilStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  const screenOptions = (route, color) => {
    let iconName;
    switch (route.name) {
      case 'noticias':
        iconName = 'compass-outline';
        break;
      case 'informe':
        iconName = 'heart-outline';
        break;
      case 'perfil':
        iconName = 'account-outline';
        break;
      default:
        iconName = 'compass-outline'; // Icono predeterminado en caso de que no haya una coincidencia
        break;
    }
    return (
      <Icon
        type="material-community"
        name={iconName}
        size={22}
        color={color}
      />
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="noticias"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
          tabBarInactiveTintColor: '#452783',
          tabBarActiveTintColor: '#452783',
          tabBarShowLabel: false, // Para ocultar los títulos de los íconos
        })}
      >
        <Tab.Screen
          name="noticias"
          component={NoticiasStack}
        />
        <Tab.Screen
          name="informe"
          component={InformeStack}
        />
        <Tab.Screen
          name="perfil"
          component={PerfilStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}*/