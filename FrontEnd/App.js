import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './app/screens/splashscreen'; // Added Splash Screen
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import HomeScreen from './app/screens/HomeScreen'; // Bottom Tab Navigation
import DashboardScreen from './app/screens/DashboardScreen';
import LandingScreen from './app/screens/LandingScreen';
import PlantationsScreen from './app/screens/PlantationsScreen';
import UserScreen from './app/screens/UserScreen';
import DetailsScreen from './app/compononts/PlantDetails';
import DeviceScreen from './app/screens/DeviceScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash" // Changed to start with Splash Screen
        screenOptions={{
          animation: 'slide_from_right', // Smooth transition
        }}
      >
        {/* NEW: Added Splash Screen as the first screen */}
        <Stack.Screen 
          name="Splash" 
          component={SplashScreen} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="Landing" 
          component={LandingScreen} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="ViewImageScreen" 
          component={ViewImageScreen} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="Devices" 
          component={DeviceScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
