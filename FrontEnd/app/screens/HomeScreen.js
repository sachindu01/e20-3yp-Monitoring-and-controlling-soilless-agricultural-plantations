// HomeScreen.js
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DashboardScreen from './DashboardScreen';
import UserScreen from './UserScreen';
import PlantationsScreen from './PlantationsScreen';
import DevicesScreen from './DeviceScreen'; // Import the Devices screen
import COLORS from '../config/colors';
import LandingScreen from './LandingScreen';
import AlertScreen from './AlertScreen';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.green,
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: { backgroundColor: COLORS.white },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="dashboard" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="person" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Plantations"
        component={LandingScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="local-florist" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Devices"
        component={DevicesScreen} // Add the new DevicesScreen
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="devices" size={30} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Alerts"
        component={AlertScreen} // Add the new Alerts
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
