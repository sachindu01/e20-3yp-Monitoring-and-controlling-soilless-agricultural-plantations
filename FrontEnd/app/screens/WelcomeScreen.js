import React from 'react';
import { 
    ImageBackground, 
    StyleSheet, 
    View, 
    Image, 
    Text, 
    TouchableOpacity 
} from 'react-native';

import COLORS from '../config/colors';

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground 
            source={require('../assets/background.jpg')}
            style={styles.background}
            blurRadius={3} // Adds a slight blur for a premium feel
        >   
            {/* Logo & Tagline */}
            <View style={styles.logoContainer}>
                {/* <Image style={styles.logo} source={require('../assets/PlantPulselogowhite.png')} /> */}
                <Text style={styles.title}>Welcome to PlantPulse</Text>
                <Text style={styles.subtitle}>Revolutionizing Agriculture</Text>
            </View>
            
            {/* Action Buttons */}
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText1}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.buttonText2}>Register</Text>
            </TouchableOpacity>

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    logoContainer: {
        position: 'absolute',
        top: 100,
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 10,
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 20,
        color: '#ddd',
        marginTop: 5,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row', // Align buttons horizontally
        justifyContent: 'center', // Center the buttons
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    loginButton: {
        backgroundColor: COLORS.dark,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        flex: 1, // Allow equal width for both buttons
        marginRight: 10, // Adds spacing between buttons
    },
    registerButton: {
        backgroundColor: COLORS.white,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        flex: 1, // Allow equal width for both buttons
    },
    buttonText1: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    buttonText2: {
        color: COLORS.dark,
        fontSize: 18,
        fontWeight: '600',
    }
});

export default WelcomeScreen;
