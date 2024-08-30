// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from '../screens'; // Ensure correct path
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/Signup';
import TabNavigator from './TabNavigator'; // Import the Tab Navigator
import ProfileScreen from '../screens/ProfileScreen'; 
import SubjectClick from '../screens/Subject'; 
import AllSubjects from "../screens/AllSubjects";
import Role from '../screens/role';
import StudentSub from '../screens/StudentSub';
import HomeScreen from '../screens/StudentHome';
import HomeScreent from '../screens/TeacherHome';
// import Employee from '../screens/Employee';
import Admin from '../screens/Admin';
import Employee from '../screens/Employee';
import Map from '../screens/Map';
import Scan from "../screens/Scan copy"
const Stack = createStackNavigator();

const linking = {
  prefixes: ['http://localhost:8081', 'exp://localhost:19000'],
  config: {
    screens: {
      Login: 'login',
      CheckTimetable: 'checktimetable',
      DashboardScreen: 'dashboardScreen',
      ComplaintsScreen: 'complaintsScreen',
      Profile: 'profile', // Add the Profile screen route
      SubjectClick: 'subjectClick', // Add the SubjectClick route
      AllSubjects: 'allSubjects', 
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
        name="HomeScreen" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Verification" 
        component={Admin} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="HomeScreent" 
        component={HomeScreent} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ title: 'Profile' }} 
      />
      <Stack.Screen 
        name="SubjectClick" 
        component={SubjectClick} 
        options={{ title: 'Subject Details' }}
      />
      <Stack.Screen 
        name="StudentSub" 
        component={StudentSub} 
        options={{ title: 'Student Subject Details' }}
      />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Scan" component={Scan} />
      <Stack.Screen 
        name="Attend" 
        component={Employee} 
        options={{ title: 'Student Subject Details' }}
      />
      {/* <Stack.Screen 
        name="TakeAttendance" 
        component={Employee} 
        options={{ title: 'Student Subject Details' }}
      /> */}
      <Stack.Screen 
        name="AllSubjects" 
        component={AllSubjects} 
        options={{ title: 'All Subjects' }} 
      />
      <Stack.Screen 
        name="Role" 
        component={Role} 
        options={{ title: 'Role' }} 
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
