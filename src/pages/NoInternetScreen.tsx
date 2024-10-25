import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const NoInternetScreen: React.FC<{ onRetry: () => void }> = ({ onRetry }) => {
  const handleRetry = () => {
    onRetry(); // Call the retry function passed as prop
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="red" barStyle="light-content" />
      <View style={styles.content}>
        <Image source={require('../assets/img/nointernet.png')} style={styles.icon} />
        <Text style={styles.title}>Whoops</Text>
        <Text style={styles.subtitle}>
          Slow or no internet connection{'\n'}Please check your internet settings
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleRetry}>
          <Text style={styles.buttonText}>RETRY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:width,
    height:height,
   //flex:1000, // Makes the container fill the entire screen
    justifyContent: 'space-around', // Ensures space is allocated evenly
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    //resizeMode: 'contain',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.8, // Ensure the content isn't too wide, relative to the screen size
  },
  icon: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: 'contain', // Ensures the image scales correctly
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#00A89C',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NoInternetScreen;