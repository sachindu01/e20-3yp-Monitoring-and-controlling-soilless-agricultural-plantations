import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../config/colors';

export default function DashboardScreen({ navigation }) {

  const getStatusColor = (value) => {
    if (value === 'Optimal' || value === '22°C') {
      return 'green'; // Green for optimal status
    } else if (value === '55%' || value === '6.8 (Optimal)') {
      return 'yellow'; // Yellow for warning status
    } else {
      return 'red'; // Red for critical status
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Header with Back Arrow and Title */}
      <View style={styles.header}>
        <Icon name="arrow-back" size={28} color="#fff" onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Dashboard</Text>
      </View>

      {/* Cards Grid */}
      <View style={styles.gridContainer}>
        {/* Soil Moisture */}
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Icon name="opacity" size={30} color={COLORS.green} />
            <Text style={styles.cardTitle}>Soil Moisture</Text>
            <Text style={styles.cardText}>
              (78%) <View style={[styles.statusDot, { backgroundColor: getStatusColor('Optimal') }]} />
            </Text>
          </Card.Content>
        </Card>

        {/* Temperature */}
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Icon name="device-thermostat" size={30} color={COLORS.green} />
            <Text style={styles.cardTitle}>Temperature</Text>
            <Text style={styles.cardText}>
              22°C <View style={[styles.statusDot, { backgroundColor: getStatusColor('22°C') }]} />
            </Text>
          </Card.Content>
        </Card>

        {/* Humidity */}
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Icon name="water-drop" size={30} color={COLORS.green} />
            <Text style={styles.cardTitle}>Humidity</Text>
            <Text style={styles.cardText}>
              (55%) <View style={[styles.statusDot, { backgroundColor: getStatusColor('55%') }]} />
            </Text>
          </Card.Content>
        </Card>

        {/* pH Level */}
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Icon name="science" size={30} color={COLORS.green} />
            <Text style={styles.cardTitle}>pH Level</Text>
            <Text style={styles.cardText}>
              6.8 <View style={[styles.statusDot, { backgroundColor: getStatusColor('6.8 (Optimal)') }]} />
            </Text>
          </Card.Content>
        </Card>

        {/* EC Level */}
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Icon name="electrical-services" size={30} color={COLORS.green} />
            <Text style={styles.cardTitle}>EC Level</Text>
            <Text style={styles.cardText}>
              2.0 mS/cm <View style={[styles.statusDot, { backgroundColor: getStatusColor('2.0 mS/cm (Optimal)') }]} />
            </Text>
          </Card.Content>
        </Card>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.lightGreen,  // Set background color to light green
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.green,  // Use the same green for header background
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%', // Make it 2-column layout
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  cardContent: {
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.green,  // Use green color for title
    marginTop: 5,
  },
  cardText: {
    fontSize: 16,
    color: '#555',
    marginTop: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 5,
  },
});
