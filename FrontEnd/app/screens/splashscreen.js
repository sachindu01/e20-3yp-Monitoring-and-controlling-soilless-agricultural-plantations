import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import COLORS from '../config/colors'; 

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome'); // Navigate to welcome screen after 2 seconds
    }, 2000);
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: COLORS.green }]}>
      {/* Logo Image */}
      <Image source={require('../assets/whitelogo2.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  logo: {
    width: 230,  
    height: 200, 
    marginBottom: 20, 

  },
  text: {
    fontSize: 45,
    fontWeight: 'bold',
    color: COLORS.white, // Use white color from the colors.js
    textAlign: 'center',
  },
});

export default SplashScreen;
