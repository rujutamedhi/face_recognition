// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from '../screens'; // Ensure correct path
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/Signup';
import TabNavigator from './TabNavigator'; // Import the Tab Navigator

const Stack = createStackNavigator();

const linking = {
  prefixes: ['http://localhost:8081', 'exp://localhost:19000'],
  config: {
    screens: {
      Login: 'login',
      CheckTimetable: 'checktimetable',
      DashboardScreen: 'dashboardScreen',
      ComplaintsScreen: 'complaintsScreen',
    },
  },
};

const AppNavigator = () => (
  <NavigationContainer linking={linking}>
    <Stack.Navigator initialRouteName="Index">
      <Stack.Screen name="Index" component={IndexScreen} options={{ headerShown: false }} />
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ title: 'Login' }} 
      />
      <Stack.Screen 
        name="Signup" 
        component={SignupScreen} 
        options={{ title: 'Signup' }} 
      />
      <Stack.Screen 
        name="Home" 
        component={TabNavigator} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
