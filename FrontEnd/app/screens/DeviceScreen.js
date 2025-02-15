import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import COLORS from '../config/colors';

export default function DeviceScreen() {
  const [deviceName, setDeviceName] = useState('');
  const [devices, setDevices] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    loadDevices();
  }, []);

  const loadDevices = async () => {
    try {
      const storedDevices = await AsyncStorage.getItem('devices');
      if (storedDevices) {
        setDevices(JSON.parse(storedDevices));
      }
    } catch (error) {
      console.log('Error loading devices:', error);
    }
  };

  const addDevice = async () => {
    if (!deviceName.trim()) {
      Alert.alert('Error', 'Device name cannot be empty');
      return;
    }

    // Create a random or predefined icon for the device
    const deviceIcon = 'device-thermostat'; // Default icon, can be adjusted per device type

    const newDevices = [
      ...devices,
      { id: Date.now().toString(), name: deviceName, icon: deviceIcon },
    ];
    setDevices(newDevices);
    await AsyncStorage.setItem('devices', JSON.stringify(newDevices));
    setDeviceName('');
  };

  const removeDevice = async (id) => {
    const updatedDevices = devices.filter(device => device.id !== id);
    setDevices(updatedDevices);
    await AsyncStorage.setItem('devices', JSON.stringify(updatedDevices));
  };

  return (
    <View style={styles.container}>
      {/* Header with Back Arrow and Title */}
      <View style={styles.header}>
        <Text style={styles.title}>Manage Devices</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Enter device name"
        placeholderTextColor="#aaa"
        value={deviceName}
        onChangeText={setDeviceName}
      />

      <TouchableOpacity style={styles.addButton} onPress={addDevice}>
        <Text style={styles.addButtonText}>Add Device</Text>
      </TouchableOpacity>

      <FlatList
        data={devices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.deviceItem}>
            <Icon name={item.icon} size={30} color={COLORS.green} style={styles.deviceIcon} />
            <Text style={styles.deviceText}>{item.name}</Text>
            <TouchableOpacity onPress={() => removeDevice(item.id)}>
              <Text style={styles.deleteText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#E8F5E9' },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.green,
    marginLeft: 10, // Adds spacing between the icon and title
  },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    color: '#333',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#34D399', // Fixed green color
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  deviceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  deviceIcon: {
    marginRight: 10, // Space between the icon and device name
  },
  deviceText: { color: '#333', fontSize: 18 },
  deleteText: { color: 'red', fontSize: 16 },
});
