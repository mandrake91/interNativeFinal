import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const ReportesScreen = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // Lógica para obtener los datos de tu endpoint
    // Por ejemplo, supongamos que los datos son un array con 4 números
    const response = await fetch('TU_ENDPOINT_AQUI');
    const jsonData = await response.json();
    setData(jsonData);
  };

  const chartData = {
    labels: ['Informes Locales', 'Falta de Seguridad', 'En el día', 'En Buenos Aires'],
    datasets: [
      {
        data: data,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estadísticas</Text>
      <View style={styles.numbersContainer}>
        <View style={styles.row}>
          <View style={styles.numberCard}>
            <Text style={styles.number}>{data[0]}</Text>
            <Text style={styles.label}>Informes Locales</Text>
          </View>
          <View style={styles.numberCard}>
            <Text style={styles.number}>{data[1]}</Text>
            <Text style={styles.label}>Falta de Seguridad</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.numberCard}>
            <Text style={styles.number}>{data[2]}</Text>
            <Text style={styles.label}>En el día</Text>
          </View>
          <View style={styles.numberCard}>
            <Text style={styles.number}>{data[3]}</Text>
            <Text style={styles.label}>En Buenos Aires</Text>
          </View>
        </View>
      </View>
      <BarChart
        data={chartData}
        width={300}
        height={200}
        yAxisLabel=""
        chartConfig={{
          backgroundColor: '#f9f9f9',
          backgroundGradientFrom: '#f9f9f9',
          backgroundGradientTo: '#f9f9f9',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  numbersContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  numberCard: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 4,
  },
  number: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
});

export default ReportesScreen;