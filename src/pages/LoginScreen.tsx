
// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Alert,
//   Platform,
//   StyleSheet,
//   ActivityIndicator,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import User from '../providers/user/User';
// import { Api } from '../providers/api/api';
// import DeviceInfo from 'react-native-device-info';

// const LoginScreen: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [deviceToken, setDeviceToken] = useState('00000');
//   const [imei, setImei] = useState('item');
//   const navigation = useNavigation();
//   const user = new User(new Api(), {}, {});

//   useEffect(() => {
//     if (Platform.OS === 'android') {
//       DeviceInfo.getUniqueId().then(setImei);
//     }
//     AsyncStorage.getItem('device_id').then((value) => {
//       if (value) {
//         setDeviceToken(value);
//       }
//     });
//   }, []);

//   const handleLogin = () => {
//     setLoading(true);
//     const account = {
//       email,
//       password,
//       device_type: Platform.OS,
//       device_token: deviceToken,
//       imei_no: imei,
//     };
  
//     user.login(account)
//       .then((response: any) => {
//         setLoading(false);
  
//         // Extract the actual data from the response
//         const loginRes = response.data;
  
//         // Debugging: Log the extracted loginRes
//         console.log("Extracted Login Response:", loginRes);
  
//         // Check if the login was successful
//         if (loginRes.result === 'success') {
//           console.log("Login successful, navigating to ProfileScreen.");
//           saveUserData(loginRes);  // Save the user data and navigate to ProfileScreen
//         } else {
//           console.log("Login failed, showing alert.");
//           Alert.alert('Login Failed', loginRes.msg || 'Unknown error occurred.');
//         }
//       })
//       .catch(error => {
//         setLoading(false);
//         console.error("Error during login:", error);
//         Alert.alert('Error', 'An error occurred during login. Please try again.');
//       });
//   };
  
  
  
  

//   const saveUserData = (loginRes: any) => {
//     AsyncStorage.setItem('user', JSON.stringify(loginRes))
//       .then(() => AsyncStorage.setItem('client_id', loginRes.client_id))
//       .then(() => {
//         // Navigate to ProfileScreen
//         navigation.reset({
//           index: 0,
//           routes: [{ name: 'profile' }],
//         });
//       });
//   };
  
  

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <View style={styles.passwordContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry={!passwordVisible}
//           value={password}
//           onChangeText={setPassword}
//         />
//         <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
//           <Text style={styles.togglePassword}>{passwordVisible ? 'Hide' : 'Show'}</Text>
//         </TouchableOpacity>
//       </View>
//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         {loading ? <ActivityIndicator size="small" color="#fff" /> : <Text style={styles.buttonText}>Login</Text>}
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordPage')}>
//         <Text style={styles.link}>Forgot Password?</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
//         <Text style={styles.link}>Don't have an account? Sign up</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 24,
//     textAlign: 'center',
//   },
//   input: {
//     borderBottomWidth: 1,
//     borderColor: '#ccc',
//     marginBottom: 16,
//     padding: 8,
//     fontSize: 16,
//   },
//   passwordContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   togglePassword: {
//     color: '#007BFF',
//     marginLeft: 8,
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginVertical: 16,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   link: {
//     color: '#007BFF',
//     textAlign: 'center',
//     marginVertical: 8,
//   },
// });

// export default LoginScreen;
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  Platform,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
  Dimensions, StatusBar
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import User from '../providers/user/User';
import { Api } from '../providers/api/api';
import DeviceInfo from 'react-native-device-info';
import Observy_BG from '../assets/img/Observy_BG.png';
import { useLoader } from '../providers/loader/loader';

const { width, height } = Dimensions.get('window');

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [deviceToken, setDeviceToken] = useState('00000');
  const [imei, setImei] = useState('item');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigation = useNavigation();


  const user = new User(new Api(), {}, {});

  const { showLoader, hideLoader } = useLoader(); // Access loader functions

  useEffect(() => {
    if (Platform.OS === 'android') {
      DeviceInfo.getUniqueId().then(setImei);
    }
    AsyncStorage.getItem('device_id').then((value) => {
      if (value) {
        setDeviceToken(value);
      }
    });
  }, []);

  const handleLogin = () => {
showLoader(); 
    let valid = true;

    if (!email) {
      setEmailError('Email field is empty');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password field is empty');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (!valid) {
      hideLoader(); 
      return;
    }

    const account = {
      email,
      password,
      device_type: Platform.OS,
      device_token: deviceToken,
      imei_no: imei,
    };
  
    user.login(account)
      .then((response: any) => {
        hideLoader(); // Hide loader
        const loginRes = response.data;
        if (loginRes.result === 'success') {
          saveUserData(loginRes);
        } else {
          Alert.alert('Login Failed', loginRes.msg || 'Unknown error occurred.');
        }
      })
      .catch(error => {
        hideLoader(); // Hide loader
        Alert.alert('Error', 'An error occurred during login. Please try again.');
      });
  };

  const saveUserData = (loginRes: any) => {
    AsyncStorage.setItem('user', JSON.stringify(loginRes))
      .then(() => AsyncStorage.setItem('client_id', loginRes.client_id))
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'home' }],
        });
      });
  };

  return (
    <ImageBackground source={Observy_BG} style={styles.backgroundImage}>
      <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('EmergencyProceduresPage')}>
        <Text style={styles.skipButtonText}>Skip</Text>
      </TouchableOpacity>
      <View style={styles.container}>
      <StatusBar
        barStyle="light-content" // Set text color to light
        backgroundColor="#9d0808" // Set background color to brown
      />
        <Text style={styles.title}>Login</Text>
        {/* Email Input Field */}
        <View style={styles.inputContainer}>
          <Image source={require('../assets/img/userb.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="white"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        
        {/* Password Input Field */}
        <View style={styles.inputContainer}>
          <Image source={require('../assets/img/lock.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!passwordVisible}
            placeholderTextColor="white"
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <Text style={styles.togglePassword}>{passwordVisible ? 'Hide' : 'Show'}</Text>
          </TouchableOpacity>
        </View>
        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
        
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
 <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RegistrationForm')} style={styles.createAccountButton}>
          <Text style={styles.createAccountText}>Create an account</Text>
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
    fontSize: 16,
    color: 'white',
  },
  container: {
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginTop: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'white',
    
  },
  togglePassword: {
    color: '#007BFF',
    marginLeft: 8,
  },
  button: {
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    width: '45%',
    marginTop: 15,
  },
  buttonText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: 'white',
  },
  createAccountButton: {
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 0,
    padding: 7,
    textAlign: 'center',
    width: '56%',
    marginTop: 30,
    marginBottom: 30,
  },
  createAccountText: {
    color: 'white',
    fontSize: 20,
    fontWeight:'bold',
    padding: 5,
   textAlign:'center',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
    width: '90%',
    textAlign: 'left',
  },
});

export default LoginScreen;