/*
  const fetchNews = async () => {
    try {
      const response = await fetch('URL_DEL_BACKEND/api/noticias');
      const data = await response.json();
      setNews(data);
    } catch (error) {
      console.error(error);
    }
  };*/
  
  import React, { useState, useEffect } from 'react';
  import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
  
  const NoticiasScreen = () => {
    const [news, setNews] = useState([]);
  
    useEffect(() => {
      // Simulate the retrieval of news from the backend
      fetchNews();
    }, []);
  
    const fetchNews = () => {
      // Simulate the retrieval of news from the backend
      const fakeNews = [
        // Sample news data
        {
          id: 1,
          titulo: 'Noticia 1',
          contenido: 'Contenido de la noticia 1...',
          imagen: 'https://via.placeholder.com/300',
        },
        {
          id: 2,
          titulo: 'Noticia 2',
          contenido: 'Contenido de la noticia 2...',
          imagen: 'https://via.placeholder.com/300',
        },
        {
          id: 3,
          titulo: 'Noticia 3',
          contenido: 'Contenido de la noticia 3...',
          imagen: 'https://via.placeholder.com/300',
        },
        {
          id: 4,
          titulo: 'Noticia 4',
          contenido: 'Contenido de la noticia 4...',
          imagen: 'https://via.placeholder.com/300',
        },
      ];
      setNews(fakeNews);
    };
  
    const renderNewsCard = ({ item }) => (
      <View style={styles.newsCard}>
        <Image source={{ uri: item.imagen }} style={styles.newsImage} />
        <Text style={styles.newsTitle}>{item.titulo}</Text>
        <Text style={styles.newsContent}>{item.contenido}</Text>
      </View>
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
    },
    newsContent: {
      fontSize: 16,
      color: '#555',
      marginTop: 8,
    },
  });
  
  export default NoticiasScreen;