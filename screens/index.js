// src/screens/WelcomeScreen.js

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions  } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
    const { width } = Dimensions.get('window');
  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={[styles.halfOval, { width }]} />
      <Text style={styles.title}>EDURISE</Text>

      {/* Image */}
      <Image 
        source={require('../assets/welcome.png')} // Replace with your image URL or local path
        style={styles.image}
      />

      {/* Register Button */}
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>REGISTER</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText} >LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

// Define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Change background color as needed
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#3A477A', // Dark purple color
  },
  image: {
    width: 350, // Adjust width as needed
    height: 350, // Adjust height as needed
    resizeMode: 'contain', // Makes sure the image maintains aspect ratio
    marginBottom: 40,
  },
  registerButton: {
    backgroundColor: '#3A477A', // Dark purple color for the button
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginBottom: 20,
  },
  registerButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    fontSize: 18,
    color: '#3A477A', // Dark purple color for the text
  },
  halfOval: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#3A477A',
    height: 60, // Adjust height for the oval
    borderBottomLeftRadius: 50, // Same as height to make a half-oval
    borderBottomRightRadius: 50, // Same as height to make a half-oval
  },
});

export default WelcomeScreen;
