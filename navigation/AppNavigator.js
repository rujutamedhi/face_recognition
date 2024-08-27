// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen'; // Adjust path as necessary
import CheckTimetable from '../screens/Check_timetable'; // Adjust path as necessary
import DashboardScreen from '../screens/DashboardScreen'; // Ensure correct component name

const Stack = createStackNavigator();

const linking = {
  prefixes: ['http://localhost:8081', 'exp://localhost:19000'],
  config: {
    screens: {
      Login: 'login',
      CheckTimetable: 'checktimetable',
      DashboardScreen: 'dashboardScreen',
    },
  },
};

const AppNavigator = () => (
  <NavigationContainer linking={linking}>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="CheckTimetable" component={CheckTimetable} />
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
