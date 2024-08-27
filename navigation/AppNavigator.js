import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen'; // Adjust path as necessary

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer><Stack.Navigator initialRouteName="Login">
  <Stack.Screen name="Login" component={LoginScreen} />
  {/* Add other screens here */}
</Stack.Navigator>
</NavigationContainer>
);

export default AppNavigator;