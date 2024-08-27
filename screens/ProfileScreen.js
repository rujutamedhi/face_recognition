import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile Information</Text>
      <View style={styles.infoSection}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.info}>Mahvish</Text>
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.label}>Class:</Text>
        <Text style={styles.info}>10th Grade</Text>
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.label}>Roll Number:</Text>
        <Text style={styles.info}>58</Text>
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>abc@example.com</Text>
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.label}>Phone Number:</Text>
        <Text style={styles.info}>123-456-7890</Text>
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.label}>Parent's Names:</Text>
        <Text style={styles.info}>ABC, ABC ABC</Text>
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.label}>Parent's Emails:</Text>
        <Text style={styles.info}>abc@example.com, abc@example.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#afdbf5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3a477a',
    marginBottom: 20,
  },
  infoSection: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3a477a',
  },
  info: {
    fontSize: 16,
    color: '#3a477a',
  },
});

export default ProfileScreen;
