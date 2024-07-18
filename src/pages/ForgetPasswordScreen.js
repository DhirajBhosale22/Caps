// src/pages/ForgotPasswordScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput,TouchableOpacity, StyleSheet, Alert, Image, Platform, StatusBar } from 'react-native';
import Api from '../providers/api'; // Adjust the path as per your file structure
import { useNavigation } from '@react-navigation/native';

const api = new Api(); // Initialize your Api instance

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email');
      return;
    }

    setLoading(true);

    try {
      const response = await api.post('forgot-password', {
        email,
      });

      setLoading(false);

      if (response.data.success) {
        Alert.alert('Success', 'Password reset link sent to your email');
        navigation.goBack();
      } else {
        Alert.alert('Error', 'Failed to send password reset link');
      }
    } catch (error) {
      setLoading(false);
      Alert.alert('Error', 'An error occurred. Please try again.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="red"/> 
    
        <View style={styles.header}>
  <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
    <Image source={require('../assets/img/back.png')} style={styles.backIcon} />
    <Text style={styles.headerTitle}>Back</Text>
  </TouchableOpacity>
  <Text style={[styles.headerTitle, { flex: 1, textAlign: 'center' }]}>Welcome</Text>
</View>
      <Text style={styles.title}>An email will be send to your registered email id to reset your password</Text>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/img/mail.png')} style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleForgotPassword} disabled={loading}>
        <Text style={styles.buttonText}>{loading? 'Sending...' : 'SEND RESET LINK'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
   
      backgroundColor: '#fff',
    },
    header: {
      backgroundColor: 'red', // Header background color
      padding: 10,
      width: '100%',
    
      flexDirection: 'row',
    
    },
    backButton: {
        flexDirection: 'row', // Add this
        alignItems: 'center', // Add this
      },
    headerTitle: {
      color: '#fff', // Text color
      fontSize: 26,
      fontWeight: 'bold',
      
    },
   
    backIcon: {
      width: 20,
      height: 20,
      padding:10,
      
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    inputIcon: {
      width: 20,
      height: 20,
      marginRight: 10,
    },
    input: {
      flex: 1,
      height: 50,
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: '#007bff',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      width: '100%',
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

export default ForgotPasswordScreen;