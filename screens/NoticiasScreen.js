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
    // Simulamos la obtención de noticias desde el backend
    fetchNews();
  }, []);

  const fetchNews = () => {
    // Simulamos la obtención de noticias desde el backend
    const fakeNews = [
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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
  },
  newsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
  newsContent: {
    marginTop: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
  },
  footerIcon: {
    alignItems: 'center',
  },
});

export default NoticiasScreen;