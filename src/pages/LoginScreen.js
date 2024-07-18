// src/pages/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert, Dimensions } from 'react-native';
import axios from 'axios';
import Observy_BG from '../assets/img/Observy_BG.png';
const { width, height } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both fields');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post('https://your-api-url.com/login', {
        email,
        password,
      });
      setLoading(false);
      if (response.data.success) {
        Alert.alert('Success', 'Login successful');
        // Handle successful login, e.g., navigate to the main app screen
      } else {
        Alert.alert('Error', 'Login failed');
      }
    } catch (error) {
      setLoading(false);
      Alert.alert('Error', 'An error occurred. Please try again.');
      console.error(error);
    }
  };

  return (
    <ImageBackground source={Observy_BG} style={styles.backgroundImage}>
      <TouchableOpacity style={styles.skipButton} onPress={() => { /* Handle skip action */ }}>
        <Text style={styles.skipButtonText}>Skip</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
          <Text style={styles.buttonText}>{loading ? 'Logging in...' : 'LOGIN'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.link}>Forgot your password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Navigate to Create Account screen */ }}>
          <Text style={styles.createAccountButton}>CREATE AN ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipButton: {
    position: 'absolute',
    top: height * 0.05,
    right: width * 0.05,
    padding: 10,
  },
  skipButtonText: {
    color: '#007BFF',
    fontSize: 16,
  },
  container: {
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
  button: {
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    width: '45%',
  },
  buttonText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 22,
    fontWeight: 'bold',
  },
  link: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  createAccountButton: {
    borderColor: '#D9534F',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    textAlign: 'center',
    width: '75%',
    marginTop: 20,
    color: 'white',
    fontSize: 20,
  },
});

export default LoginScreen;
