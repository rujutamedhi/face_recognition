import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView ,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {

  const navigation = useNavigation();

  // Function to handle button press
  const handleLogin = () => {
    navigation.navigate('Home');
  };
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

      {/* Wrap the content in a ScrollView to enable scrolling */}
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#A8BBCB"
          />
          <TextInput
            style={styles.input}
            placeholder="Roll No"
            placeholderTextColor="#A8BBCB"
          />
          <TextInput
            style={styles.input}
            placeholder="Class"
            placeholderTextColor="#A8BBCB"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#A8BBCB"
          />
          <TextInput
            style={styles.input}
            placeholder="Parents Email"
            placeholderTextColor="#A8BBCB"
          />
          <TextInput
            style={styles.input}
            placeholder="Phone No."
            placeholderTextColor="#A8BBCB"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#A8BBCB"
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30,
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
    marginTop: 30,
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
  title: {
    width: 161,
    height:80,
    marginBottom: 1,
    marginTop: 1,
    color: '#3A477A', // Dark purple color
  },
  TextInput: {
    color: '#3A477A',
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContent: {
    paddingBottom: 20, // Add some padding to avoid cutting off content
  },
});

export default SignupScreen;
