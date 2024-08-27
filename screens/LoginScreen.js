import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = () => {
  return (
    
    <View style={styles.container}>
      
      <View style={styles.header}>
      <Image 
        source={require('../assets/LOGO.png')} // Replace with your image URL or local path
        style={styles.title}
      />
      </View>
  
      <View style={styles.circleContainer}>
        <View style={styles.circleLarge} />
        <View style={styles.circleMedium} />
        <View style={styles.circleSmall} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email or phone number"
          placeholderTextColor="#A8BBCB"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#A8BBCB"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'COLUMN',
    alignItems: 'center',
    marginTop: 30
  },
  backButton: {
    fontSize: 16,
    color: '#FFF',
    paddingRight: 10,
  },
  loginText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFF',
  },
  circleContainer: {
    alignItems: 'center',
    marginTop: 120,
  },
  circleLarge: {
    width: 480,
    height: 800,
    borderRadius: 215,
    backgroundColor: '#AFDBF5',
    position: 'absolute',
    top: 1,
  },
  circleMedium: {
    width: 470,
    height: 750,
    borderRadius: 215,
    backgroundColor: '#6CB4EE',
    position: 'absolute',
    top: 50,
  },
  circleSmall: {
    width: 450,
    height: 800,
    borderRadius: 215,
    backgroundColor: '#3A477A',
    position: 'absolute',
    top: 130,
  },
  inputContainer: {
    marginTop: 270,
    paddingHorizontal: 20,
  },
  input: {
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: '#3A477A',
  },
  loginButton: {
    height: 50,
    backgroundColor: '#40A8FF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  TextInput:{
   color: '#3A477A'
  },
  title: {
    width: 161,
    height:80,
    marginBottom: 10,
    marginTop: 2,
    color: '#3A477A', // Dark purple color
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
