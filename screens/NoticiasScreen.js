
  
  import React, { useState, useEffect } from 'react';
  import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
  
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
    console.log(data);
    setNews(data);
  } catch (error) {
    console.error(error);
  }
}
  
    const renderNewsCard = ({ item }) => (
      <View style={styles.newsCard}>
        <Image source={{ uri: item.imagen }} style={styles.newsImage} />
        <Text style={styles.newsTitle}>{item.titulo}</Text>
        <Text style={styles.newsContent}>{item.descripcion}</Text>
      </View>
    );
  
    return (
      <View style={styles.container}>
        <FlatList
          data={news.data}
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