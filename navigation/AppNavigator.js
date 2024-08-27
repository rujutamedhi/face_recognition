// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen'; // Adjust path as necessary
import CheckTimetable from '../screens/Check_timetable'; // Adjust path as necessary
import DashboardScreen from '../screens/DashboardScreen'; // Ensure correct component name
import ComplaintsScreen from '../screens/ComplaintsScreen'; // Ensure the path is correct
import IndexScreen from '../screens';
import SignupScreen from '../screens/Signup';

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
    <Stack.Navigator initialRouteName="Start">
    <Stack.Screen name="Start" component={IndexScreen} />
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
      <Stack.Screen name="CheckTimetable" component={CheckTimetable} />
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
      <Stack.Screen name="ComplaintsScreen" component={ComplaintsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
