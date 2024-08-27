// TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/StudentHome';
import CheckTimetable from '../screens/Check_timetable';
import DashboardScreen from '../screens/DashboardScreen';
import ComplaintsScreen from '../screens/ComplaintsScreen';

const Tab = createBottomTabNavigator();

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

export default TabNavigator;
