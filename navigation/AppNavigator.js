import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Import your screens
import LoginScreen from '../screens/LoginScreen';
import CheckTimetable from '../screens/Check_timetable';
import DashboardScreen from '../screens/DashboardScreen';
import ComplaintsScreen from '../screens/ComplaintsScreen';
import HomeScreen from '../screens/StudentHome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Define the Tab Navigator
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'CheckTimetable') {
          iconName = 'calendar-today';
        } else if (route.name === 'Progress') {
          iconName = 'trending-up';
        } else if (route.name === 'Complaints') {
          iconName = 'report-problem';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#3a477a',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: { backgroundColor: '#fff' },
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="CheckTimetable" component={CheckTimetable} />
    <Tab.Screen name="Progress" component={DashboardScreen} />
    <Tab.Screen name="Complaints" component={ComplaintsScreen} />
  </Tab.Navigator>
);

// Define the Stack Navigator
const AppNavigator = () => (
  <NavigationContainer
    linking={{
      prefixes: ['http://localhost:8081', 'exp://localhost:19000'],
      config: {
        screens: {
          Login: 'login',
          CheckTimetable: 'checktimetable',
          DashboardScreen: 'dashboardScreen',
          ComplaintsScreen: 'complaintsScreen',
        },
      },
    }}
  >
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Hide headers in this example; customize as needed
      }}
    >
      {/* Authentication Stack */}
      <Stack.Screen name="Login" component={LoginScreen} />
      
      {/* Main Application Stack */}
      <Stack.Screen name="Main" component={TabNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
