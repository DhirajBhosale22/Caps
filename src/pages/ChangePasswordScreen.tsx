import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { changePassword } from '../providers/forgotpassword/forgotpassword';
import { Api } from '../providers/api/api';

const api = new Api();

const PasswordValidation = {
  matchPassword: (password: string, confirmPassword: string) => {
    return password === confirmPassword ? null : 'Passwords do not match';
  },
};

const ChangePasswordScreen = ({ navigation }) => {
  const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const { control, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      old_password: '',
      new_password: '',
      confirm_password: '',
    },
  });

  useEffect(() => {
    // Fetch the user token from AsyncStorage
    const fetchToken = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setToken(parsedUser.token); // Store the token for API requests
        } else {
          navigation.navigate('LoginScreen'); // Redirect to login if no user info found
        }
      } catch (error) {
        console.error('Failed to retrieve user from storage:', error);
      }
    };

    fetchToken();
  }, []);

  const onSubmit = async (data: any) => {
    if (PasswordValidation.matchPassword(data.new_password, data.confirm_password)) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    if (!token) {
      Alert.alert('Error', 'User token is missing. Please log in again.');
      navigation.navigate('LoginScreen');
      return;
    }

    try {
      // Call the API to change the password, including the token for authentication
      const response = await changePassword({
        old_password: data.old_password,
        new_password: data.new_password,
        token, // Pass the token with the request
      });

      if (response.data.result === 'success') {
        Alert.alert('Success', response.data.msg, [
          {
            text: 'OK',
            onPress: () => navigation.navigate('profile'),
          },
        ]);
      } else {
        if (response.data.msg === 'Your account is deactivated, please contact support.') {
          // Handle account deactivation
          navigation.navigate('LoginScreen');
        } else {
          Alert.alert('Error', response.data.msg);
        }
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred. Please try again later.');
      console.error(error);
    }
  };

  const toggleVisibility = (type: string) => {
    switch (type) {
      case 'Old':
        setOldPasswordVisible(!oldPasswordVisible);
        break;
      case 'New':
        setNewPasswordVisible(!newPasswordVisible);
        break;
      case 'Confirm':
        setConfirmPasswordVisible(!confirmPasswordVisible);
        break;
      default:
        break;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Change Password</Text>

      {/* Old Password */}
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name="old_password"
          rules={{
            required: 'Old password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long',
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={!oldPasswordVisible}
              placeholder="Old Password"
            />
          )}
        />
        {errors.old_password && <Text style={styles.errorText}>{errors.old_password.message}</Text>}
        <TouchableOpacity onPress={() => toggleVisibility('Old')}>
          <Text>{oldPasswordVisible ? 'Hide' : 'Show'} Old Password</Text>
        </TouchableOpacity>
      </View>

      {/* New Password */}
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name="new_password"
          rules={{
            required: 'New password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long',
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={!newPasswordVisible}
              placeholder="New Password"
            />
          )}
        />
        {errors.new_password && <Text style={styles.errorText}>{errors.new_password.message}</Text>}
        <TouchableOpacity onPress={() => toggleVisibility('New')}>
          <Text>{newPasswordVisible ? 'Hide' : 'Show'} New Password</Text>
        </TouchableOpacity>
      </View>

      {/* Confirm Password */}
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name="confirm_password"
          rules={{
            required: 'Confirm password is required',
            validate: (value) =>
              value === watch('new_password') || 'Passwords do not match',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={!confirmPasswordVisible}
              placeholder="Confirm Password"
            />
          )}
        />
        {errors.confirm_password && <Text style={styles.errorText}>{errors.confirm_password.message}</Text>}
        <TouchableOpacity onPress={() => toggleVisibility('Confirm')}>
          <Text>{confirmPasswordVisible ? 'Hide' : 'Show'} Confirm Password</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.submitButtonText}>Change Password</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  submitButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChangePasswordScreen;
