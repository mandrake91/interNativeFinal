
  
  import React, { useState, useEffect } from 'react';
  import { View, Text, FlatList, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
  
  const NoticiasScreen = () => {
    const [news, setNews] = useState([]);
  
    useEffect(() => {
      // Simulate the retrieval of news from the backend
      fetchNews();
    }, []);
  
    const noticiasUrl = 'http://192.168.0.11:8000/api/getNoticias';
  
    const fetchNews = async () => {
      try {
        const response = await fetch(noticiasUrl, {
          headers: {
            Authorization: 'Bearer PDVwDJVi3A3mYb96b5HL2Wru7fLyOFZfM935BlkvqXtqujDmQjhkw6DvK7CRLhZT6vfA4p',
          },
        });
  
        if (!response.ok) {
          console.log(response);
          throw new Error('Error en la solicitud de noticias');
        }
  
        const data = await response.json();
        setNews(data.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    const navigation = useNavigation();
  
    const handleNewsPress = (item) => {
      navigation.navigate('DetalleNoticiasScreen', { item });
    };
  
    const renderNewsCard = ({ item }) => (
      <TouchableWithoutFeedback onPress={() => handleNewsPress(item)}>
        <View style={styles.newsCard}>
          <Text style={styles.newsTitle}>{item.titulo}</Text>
          <Text style={styles.newsDate}>{item.fecha}</Text>
          <Image source={{ uri: item.imagen }} style={styles.newsImage} />
          <Text style={styles.newsContent}>{item.descripcion.slice(0, 50)}{item.descripcion.length > 50 ? '...' : ''}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  
    return (
      <View style={styles.container}>
        <FlatList
          data={news}
          renderItem={renderNewsCard}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f9f9f9',
    },
    newsCard: {
      marginBottom: 16,
      padding: 16,
      borderRadius: 8,
      backgroundColor: '#ffffff',
      elevation: 4,
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
      marginBottom: 4,
    },
    newsDate: {
      fontSize: 12, // Cambia el tamaño según tus preferencias
      color: '#888', // Cambia el color según tus preferencias
      marginBottom: 8,
    },
    newsContent: {
      fontSize: 16,
      color: '#555',
    },
  });
  
  export default NoticiasScreen;