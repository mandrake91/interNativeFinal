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
import DetalleNoticiasScreen from './screens/DetalleNoticiasScreen';
import ReportesScreen from './screens/ReportesScreen';
import CargarNoticiaScreen from './screens/CargarNoticiaScreen';
import AdministradorScreen from './screens/AdministradorScreen';
import AgregarUsuarioScreen from './screens/AgregarUsuarioScreen';
import VerificarIncidentesScreen from './screens/VerificarIncidentesScreen';
import DetalleIncidenteScreen from './screens/DetalleIncidenteScreen';
import { NewsTabIcon, InformesTabIcon, PerfilTabIcon, EmergenciaTabIcon, AdministradorTabIcon } from './screens/TabBarIcons';

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
        <Stack.Navigator>
          {isLoggedIn ? (
            <>
              <Stack.Screen name="Interconectados">
                {() => (
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
                    <Tab.Screen
                      name="Administrador"
                      component={AdministradorScreen}
                      options={{
                        tabBarIcon: AdministradorTabIcon,
                      }}
                    />
                  </Tab.Navigator>
                )}
              </Stack.Screen>
              <Stack.Screen
                name="Detalle de Noticia"
                component={DetalleNoticiasScreen}
              />
              <Stack.Screen
                name="Cargar Noticias"
                component={CargarNoticiaScreen}
              />
              <Stack.Screen
                name="Reportes"
                component={ReportesScreen}
              />
              <Stack.Screen
                name="Agregar Usuario"
                component={AgregarUsuarioScreen}
              />
              <Stack.Screen
                name="Listado de Incidentes"
                component={VerificarIncidentesScreen}
              />
              <Stack.Screen
                name="Detalle de Incidente"
                component={DetalleIncidenteScreen}
              />
            </>
          ) : (
            <>
              <Stack.Screen name="Login" options={{ headerShown: false }}>
                {props => <LoginScreen {...props} onLoginSuccess={handleLoginSuccess} />}
              </Stack.Screen>
              <Stack.Screen name="Registro" component={RegistroScreen} />
              <Stack.Screen name="Recuperar Contraseña" component={RecuperarPasswordScreen} />
            </>
          )}
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
