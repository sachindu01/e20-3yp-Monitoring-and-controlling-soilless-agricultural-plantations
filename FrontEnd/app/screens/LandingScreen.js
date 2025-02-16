import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../config/colors';
import plantsData from '../config/plants';

const width = Dimensions.get('window').width / 2 - 30;

const LandingScreen = ({ navigation }) => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [plants, setPlants] = useState(plantsData);
  const [newPlantName, setNewPlantName] = useState('');

  const categories = ['LEAFY GREENS', 'HERBS', 'FRUITS', 'OTHERS'];

  const addPlantation = () => {
    if (newPlantName.trim() === '') return;
    const newPlant = {
      id: plants.length + 1,
      name: newPlantName,
      like: false,
      img: require('../plants/plant1.png'), // Placeholder image
      about: `A new plantation named ${newPlantName}.`,
    };
    setPlants([...plants, newPlant]);
    setNewPlantName('');
  };

  const CategoryList = () => {
    return (
      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}
          >
            <Text
              style={[
                styles.categoryText,
                categoryIndex === index && styles.categoryTextSelected,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({ plant }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Details', plant)}
      >
        <View style={styles.card}>
          <View style={{ alignItems: 'flex-end' }}>
            
          </View>

          <View style={{ height: 100, alignItems: 'center' }}>
            <Image source={plant.img} style={{ flex: 1, resizeMode: 'contain' }} />
          </View>

          <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 10 }}>
            {plant.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white }}
    >
      <View style={styles.header}>
        <View>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Welcome to</Text>
          <Text style={{ fontSize: 38, color: COLORS.green, fontWeight: 'bold' }}>
            Plantations
          </Text>
        </View>
      </View>

      <View style={{ marginTop: 30, flexDirection: 'row' }}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={25} style={{ marginLeft: 20 }} />
          <TextInput placeholder="Search" style={styles.input} />
        </View>
        <View style={styles.sortBtn}>
          <Icon name="sort" size={30} color={COLORS.white} />
        </View>
      </View>

      {/* Add Plantation Input */}
      <View style={styles.addPlantContainer}>
        <TextInput
          placeholder="Enter plantation name"
          value={newPlantName}
          onChangeText={setNewPlantName}
          style={styles.addPlantInput}
        />
        <TouchableOpacity style={styles.addPlantButton} onPress={addPlantation}>
          <Text style={styles.addPlantButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <CategoryList />
      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 10, paddingBottom: 50 }}
        numColumns={2}
        data={plants}
        renderItem={({ item }) => <Card plant={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryText: { fontSize: 16, color: 'grey', fontWeight: 'bold' },
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
  card: {
    height: 220,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPlantContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  addPlantInput: {
    flex: 1,
    height: 45,
    borderWidth: 1,
    borderColor: COLORS.green,
    borderRadius: 10,
    paddingLeft: 10,
  },
  addPlantButton: {
    marginLeft: 10,
    height: 45,
    paddingHorizontal: 15,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  addPlantButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LandingScreen;
