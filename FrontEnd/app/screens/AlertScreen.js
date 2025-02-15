import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AlertsScreen() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    loadAlerts();
  }, []);

  // Simulate real-time alerts (can be replaced with API data)
  useEffect(() => {
    const interval = setInterval(() => {
      const newAlert = {
        id: Date.now().toString(),
        message: '⚠️ High EC levels detected!',
        timestamp: new Date().toLocaleString(),
      };
      setAlerts((prevAlerts) => [...prevAlerts, newAlert]);
      saveAlerts([...alerts, newAlert]);
    }, 15000); // Adds a new alert every 15 seconds (for demo)

    return () => clearInterval(interval);
  }, [alerts]);

  const saveAlerts = async (alerts) => {
    await AsyncStorage.setItem('alerts', JSON.stringify(alerts));
  };

  const loadAlerts = async () => {
    const storedAlerts = await AsyncStorage.getItem('alerts');
    if (storedAlerts) setAlerts(JSON.parse(storedAlerts));
  };

  const dismissAlert = async (id) => {
    const updatedAlerts = alerts.filter(alert => alert.id !== id);
    setAlerts(updatedAlerts);
    await AsyncStorage.setItem('alerts', JSON.stringify(updatedAlerts));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔔 System Alerts</Text>
      <FlatList
        data={alerts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.alertItem}>
            <Text style={styles.alertText}>{item.message}</Text>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
            <TouchableOpacity onPress={() => dismissAlert(item.id)}>
              <Text style={styles.dismissText}>Dismiss</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#E8F5E9' }, // Light green background
  title: { color: '#333', fontSize: 22, fontWeight: 'bold', marginBottom: 10 }, // Dark text for title
  alertItem: {
    backgroundColor: '#C8E6C9', // Soft green background for alert items
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  alertText: { color: '#333', fontSize: 16 }, // Dark text for alert message
  timestamp: { color: '#555', fontSize: 12, marginTop: 5 }, // Dark grey for timestamp
  dismissText: { color: '#EF4444', fontSize: 14, marginTop: 5, fontWeight: 'bold' }, // Red color for dismiss button
});
