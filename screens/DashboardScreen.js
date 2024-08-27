// DashboardScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const DashboardScreen = () => {
  // Dummy data for the chart
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [50, 60, 70, 80, 90, 85, 75], // Example performance data
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Dashboard</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Weekly Performance</Text>
        <LineChart
          data={data}
          width={340} 
          height={220}
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Attendance</Text>
        <Text style={styles.attendanceInfo}>Total Classes: 30</Text>
        <Text style={styles.attendanceInfo}>Classes Attended: 25</Text>
        <Text style={styles.attendanceInfo}>Attendance Rate: 83%</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Upcoming Deadlines</Text>
        <Text style={styles.deadline}>- Math Homework: Due 30th Aug</Text>
        <Text style={styles.deadline}>- Physics Lab Report: Due 2nd Sep</Text>
        <Text style={styles.deadline}>- Chemistry Project: Due 5th Sep</Text>
      </View>
    </ScrollView>
  );
};

// Chart configuration
const chartConfig = {
  backgroundGradientFrom: '#3a477a',
  backgroundGradientTo: '#3a477a',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3a477a',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#3a477a',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3a477a',
    marginBottom: 10,
  },
  chart: {
    borderRadius: 8,
  },
  attendanceInfo: {
    fontSize: 16,
    color: '#3a477a',
    marginVertical: 5,
  },
  deadline: {
    fontSize: 16,
    color: '#3a477a',
    marginVertical: 5,
  },
});

export default DashboardScreen;
