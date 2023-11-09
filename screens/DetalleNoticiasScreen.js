/*import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetalleNoticiasScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.imagen }} style={styles.newsImage} />
      <Text style={styles.newsTitle}>{item.titulo}</Text>
      <Text style={styles.newsContent}>{item.descripcion}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  newsImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  newsContent: {
    fontSize: 16,
    color: '#555',
  },
});

export default DetalleNoticiasScreen;*/

import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DetalleNoticiasScreen = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.imagen }} style={styles.newsImage} />
      <Text style={styles.newsTitle}>{item.titulo}</Text>
      <Text style={styles.newsContent}>{item.descripcion}</Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  newsImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  newsContent: {
    fontSize: 16,
    color: '#555',
  },
});

export default DetalleNoticiasScreen;