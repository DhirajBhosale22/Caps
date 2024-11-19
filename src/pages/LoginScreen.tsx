
// // import React, { useState, useEffect } from 'react';
// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   Alert,
// //   Platform,
// //   StyleSheet,
// //   ActivityIndicator,
// // } from 'react-native';
// // import { useNavigation } from '@react-navigation/native';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import User from '../providers/user/User';
// // import { Api } from '../providers/api/api';
// // import DeviceInfo from 'react-native-device-info';

// // const LoginScreen: React.FC = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [passwordVisible, setPasswordVisible] = useState(false);
// //   const [loading, setLoading] = useState(false);
// //   const [deviceToken, setDeviceToken] = useState('00000');
// //   const [imei, setImei] = useState('item');
// //   const navigation = useNavigation();
// //   const user = new User(new Api(), {}, {});

// //   useEffect(() => {
// //     if (Platform.OS === 'android') {
// //       DeviceInfo.getUniqueId().then(setImei);
// //     }
// //     AsyncStorage.getItem('device_id').then((value) => {
// //       if (value) {
// //         setDeviceToken(value);
// //       }
// //     });
// //   }, []);

// //   const handleLogin = () => {
// //     setLoading(true);
// //     const account = {
// //       email,
// //       password,
// //       device_type: Platform.OS,
// //       device_token: deviceToken,
// //       imei_no: imei,
// //     };
  
// //     user.login(account)
// //       .then((response: any) => {
// //         setLoading(false);
  
// //         // Extract the actual data from the response
// //         const loginRes = response.data;
  
// //         // Debugging: Log the extracted loginRes
// //         console.log("Extracted Login Response:", loginRes);
  
// //         // Check if the login was successful
// //         if (loginRes.result === 'success') {
// //           console.log("Login successful, navigating to ProfileScreen.");
// //           saveUserData(loginRes);  // Save the user data and navigate to ProfileScreen
// //         } else {
// //           console.log("Login failed, showing alert.");
// //           Alert.alert('Login Failed', loginRes.msg || 'Unknown error occurred.');
// //         }
// //       })
// //       .catch(error => {
// //         setLoading(false);
// //         console.error("Error during login:", error);
// //         Alert.alert('Error', 'An error occurred during login. Please try again.');
// //       });
// //   };
  
  
  
  

// //   const saveUserData = (loginRes: any) => {
// //     AsyncStorage.setItem('user', JSON.stringify(loginRes))
// //       .then(() => AsyncStorage.setItem('client_id', loginRes.client_id))
// //       .then(() => {
// //         // Navigate to ProfileScreen
// //         navigation.reset({
// //           index: 0,
// //           routes: [{ name: 'profile' }],
// //         });
// //       });
// //   };
  
  

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Login</Text>
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Email"
// //         value={email}
// //         onChangeText={setEmail}
// //       />
// //       <View style={styles.passwordContainer}>
// //         <TextInput
// //           style={styles.input}
// //           placeholder="Password"
// //           secureTextEntry={!passwordVisible}
// //           value={password}
// //           onChangeText={setPassword}
// //         />
// //         <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
// //           <Text style={styles.togglePassword}>{passwordVisible ? 'Hide' : 'Show'}</Text>
// //         </TouchableOpacity>
// //       </View>
// //       <TouchableOpacity style={styles.button} onPress={handleLogin}>
// //         {loading ? <ActivityIndicator size="small" color="#fff" /> : <Text style={styles.buttonText}>Login</Text>}
// //       </TouchableOpacity>
// //       <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordPage')}>
// //         <Text style={styles.link}>Forgot Password?</Text>
// //       </TouchableOpacity>
// //       <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
// //         <Text style={styles.link}>Don't have an account? Sign up</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 16,
// //     justifyContent: 'center',
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     marginBottom: 24,
// //     textAlign: 'center',
// //   },
// //   input: {
// //     borderBottomWidth: 1,
// //     borderColor: '#ccc',
// //     marginBottom: 16,
// //     padding: 8,
// //     fontSize: 16,
// //   },
// //   passwordContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   togglePassword: {
// //     color: '#007BFF',
// //     marginLeft: 8,
// //   },
// //   button: {
// //     backgroundColor: '#007BFF',
// //     padding: 12,
// //     borderRadius: 8,
// //     alignItems: 'center',
// //     marginVertical: 16,
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontWeight: 'bold',
// //   },
// //   link: {
// //     color: '#007BFF',
// //     textAlign: 'center',
// //     marginVertical: 8,
// //   },
// // });

// // export default LoginScreen;
// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   Alert,
//   Platform,
//   StyleSheet,
//   ActivityIndicator,
//   ImageBackground,
//   Dimensions, StatusBar, Modal
// } from 'react-native';
// import { useRoute } from '@react-navigation/native';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import User from '../providers/user/User';
// import { Api } from '../providers/api/api';
// import DeviceInfo from 'react-native-device-info';
// import Observy_BG from '../assets/img/Observy_BG.png';
// import { useLoader } from '../providers/loader/loader';

// const { width, height } = Dimensions.get('window');

// const LoginScreen: React.FC = () => {
//   const route = useRoute();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   // const [loading, setLoading] = useState(false);
//   const [deviceToken, setDeviceToken] = useState('00000');
//   const [imei, setImei] = useState('item');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [modalVisible, setModalVisible] = useState(false);
//   const [modalMessage, setModalMessage] = useState('');
//   const [modalType, setModalType] = useState('success');
  
//   const navigation = useNavigation();


//   const user = new User(new Api(), {}, {});

//   const { showLoader, hideLoader } = useLoader(); // Access loader functions

//   useEffect(() => {
//     if (route.params?.modalVisible) {
//       setModalVisible(route.params.modalVisible);
//       setModalMessage(route.params.modalMessage);
//       setModalType(route.params.modalType);
//     }
//   }, [route.params]);
//   const closeModal = () => {
//     setModalVisible(false);
//     // Optionally clear params after closing the modal
//     navigation.setParams({ modalVisible: false, modalMessage: '', modalType: 'success' });
//   };
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
// showLoader(); 
//     let valid = true;

//     if (!email) {
//       setEmailError('Email field is empty');
//       valid = false;
//     } else {
//       setEmailError('');
//     }

//     if (!password) {
//       setPasswordError('Password field is empty');
//       valid = false;
//     } else {
//       setPasswordError('');
//     }

//     if (!valid) {
//       hideLoader(); 
//       return;
//     }

//     const account = {
//       email,
//       password,
//       device_type: Platform.OS,
//       device_token: deviceToken,
//       imei_no: imei,
//     };
  
//     user.login(account)
//       .then((response: any) => {
//         hideLoader(); // Hide loader
//         const loginRes = response.data;
//         if (loginRes.result === 'success') {
//           saveUserData(loginRes);
//         } else {
//           Alert.alert('Login Failed', loginRes.msg || 'Unknown error occurred.');
//         }
//       })
//       .catch(error => {
//         hideLoader(); // Hide loader
//         Alert.alert('Error', 'An error occurred during login. Please try again.');
//       });
//   };
//   useEffect(() => {
//     const checkIfLoggedIn = async () => {
//       const user = await AsyncStorage.getItem('user');
//       if (user) {
//         navigation.reset({
//           index: 0,
//           routes: [{ name: 'home' }],
//         });
//       }
//     };
//     checkIfLoggedIn();
//   }, [navigation]);
//   const saveUserData = (loginRes: any) => {
//     AsyncStorage.setItem('user', JSON.stringify(loginRes))
//       .then(() => AsyncStorage.setItem('client_id', loginRes.client_id))
//       .then(() => {
//         navigation.reset({
//           index: 0,
//           routes: [{ name: 'home' }],
//         });
//       });
//   };

//   return (
//     <ImageBackground source={Observy_BG} style={styles.backgroundImage}>
//       <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('EmergencyProceduresPage')}>
//         <Text style={styles.skipButtonText}>SKIP</Text>
//       </TouchableOpacity>
//       <View style={styles.container}>
//       <StatusBar
//         barStyle="light-content" // Set text color to light
//         backgroundColor="#9d0808" // Set background color to brown
//       />
//         <Text style={styles.title}>Login</Text>
//         {/* Email Input Field */}
//         <View style={styles.inputContainer}>
//           <Image source={require('../assets/img/userb.png')} style={styles.icon} />
//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             placeholderTextColor="white"
//             value={email}
//             onChangeText={setEmail}
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />
//         </View>
//         {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        
//         {/* Password Input Field */}
//         <View style={styles.inputContainer}>
//           <Image source={require('../assets/img/lock.png')} style={styles.icon} />
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             secureTextEntry={!passwordVisible}
//             placeholderTextColor="white"
//             value={password}
//             onChangeText={setPassword}
//           />
//           <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
//             <Text style={styles.togglePassword}>{passwordVisible ? 'Hide' : 'Show'}</Text>
//           </TouchableOpacity>
//         </View>
//         {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
        
//         <TouchableOpacity style={styles.button} onPress={handleLogin}>
//  <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
//           <Text style={styles.link}>Forgot Password ?</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('RegistrationForm')} style={styles.createAccountButton}>
//           <Text style={styles.createAccountText}>Create an account</Text>
//         </TouchableOpacity>
//       </View>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => closeModal()}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalView}>
//             <Text style={[styles.modalText, modalType === 'error' && styles.errorText1]}>{modalType === 'error' ? 'Failed' : 'Success'}</Text>
//             <Text style={styles.modalMessage}>{modalMessage}</Text>
//             <TouchableOpacity
//               style={[styles.modalButton, modalType === 'error' ? styles.errorButton : styles.successButton]}
//               onPress={closeModal}
//             >
//               <Text style={styles.modalButtonText}>OK</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   skipButton: {
//     position: 'absolute',
//     top: height * 0.05,
//     right: width * 0.05,
//     padding: 10,
//   },
//   skipButtonText: {
//     fontSize: 16,
//     color: 'white',
//   },
//   container: {
//     width: '90%',
//     backgroundColor: 'rgba(255, 255, 255, 0)',
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   title: {
//     color: 'white',
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '90%',
//     marginTop: 20,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//   },
//   input: {
//     flex: 1,
//     height: 50,
//     paddingHorizontal: 10,
//     backgroundColor: 'rgba(255, 255, 255, 0)',
//     color: 'white',
    
//   },
//   togglePassword: {
//     color: '#007BFF',
//     marginLeft: 8,
//   },
//   button: {
//     backgroundColor: 'rgba(255, 0, 0, 0.2)',
//     padding: 10,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginBottom: 20,
//     width: '45%',
//     marginTop: 15,
//   },
//   buttonText: {
//     color: 'rgba(255, 255, 255, 0.6)',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   link: {
//     color: 'white',
//     textAlign: 'center',
//     marginBottom: 10,
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 20,
//   },
//   icon: {
//     width: 20,
//     height: 20,
//     marginRight: 10,
//     tintColor: 'white',
//   },
//   createAccountButton: {
//     borderColor: 'red',
//     borderWidth: 1,
//     borderRadius: 0,
//     padding: 7,
//     textAlign: 'center',
//     width: '56%',
//     marginTop: 30,
//     marginBottom: 30,
//   },
//   createAccountText: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight:'bold',
//     padding: 5,
//    textAlign:'center',
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 14,
//     marginBottom: 10,
//     width: '90%',
//     textAlign: 'left',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalView: {
//     width: 300,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 20,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   modalText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   modalMessage: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   modalButton: {
//     padding: 10,
//     borderRadius: 5,
//   },
//   errorButton: {
//     backgroundColor: '#9d0808',
//   },
//   successButton: {
//     backgroundColor: '#9d0808',
//   },
//   modalButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   errorText1: {
//     color: 'red',
//   },
// });

// export default LoginScreen;


import React, {useState, useEffect} from 'react';
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
  Dimensions,
  StatusBar,
  Modal,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import User from '../providers/user/User';
import {Api} from '../providers/api/api';
import DeviceInfo from 'react-native-device-info';
import Observy_BG from '../assets/img/Observy_BG.png';
import {useLoader} from '../providers/loader/loader';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';

const {width, height} = Dimensions.get('window');

const LoginScreen: React.FC = () => {
  const route = useRoute();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [deviceToken, setDeviceToken] = useState('00000');
  const [imei, setImei] = useState('item');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState('success');

  const navigation = useNavigation();
  const user = new User(new Api(), {}, {});
  const {showLoader, hideLoader} = useLoader();
  useEffect(() => {
    // Check for modal parameters from navigation
    if (route.params?.modalVisible) {
      setModalVisible(true);
      setModalMessage(route.params.modalMessage || 'An unexpected error occurred.');
      setModalType(route.params.modalType || 'error');
    }
  }, [route.params]);

  useEffect(() => {
    if (Platform.OS === 'android') {
      DeviceInfo.getUniqueId().then(setImei);
    }
    AsyncStorage.getItem('device_id').then(value => {
      if (value) {
        setDeviceToken(value);
      }
    });
    checkBiometricLogin();
  }, []);

  const checkBiometricLogin = async () => {
    const fingerFlag = await AsyncStorage.getItem('finger_flag');
    if (fingerFlag === '1') {
      await authenticateWithBiometrics();
    }
  };

  const handleLogin = async () => {
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

    try {
      const response = await user.login(account);
      hideLoader();
      const loginRes = response.data;

      if (loginRes.result === 'success') {
        await saveUserData(loginRes);
        promptForBiometricSetup();
      } else {
        showModal('error', loginRes.msg || 'Unknown error occurred.');
      }
    } catch (error) {
      hideLoader();
      showModal('error', 'An error occurred during login. Please try again.');
    }
  };

  const saveUserData = async (loginRes) => {
    await AsyncStorage.setItem('user', JSON.stringify(loginRes));
    await AsyncStorage.setItem('client_id', loginRes.client_id);
    const fingerLogin = {
      email,
      password,
      device_type: Platform.OS,
      device_token: deviceToken,
      imei_no: imei,
    };
    await AsyncStorage.setItem('finger_login', JSON.stringify(fingerLogin));
  };

  const promptForBiometricSetup = async () => {
    Alert.alert(
      'Enable Biometric Login',
      'Do you want to enable fingerprint or face recognition for future logins?',
      [
        { text: 'No', onPress: () => navigation.reset({ index: 0, routes: [{ name: 'home' }] }) },
        { text: 'Yes', onPress: () => enableBiometricLogin() }
      ]
    );
  };

  const enableBiometricLogin = async () => {
    await AsyncStorage.setItem('finger_flag', '1');
    navigation.reset({ index: 0, routes: [{ name: 'home' }] });
  };

  const authenticateWithBiometrics = async () => {
    try {
      const rnBiometrics = new ReactNativeBiometrics();
      const { biometryType } = await rnBiometrics.isSensorAvailable();
      if (biometryType === BiometryTypes.Biometrics) {
        const { success } = await rnBiometrics.simplePrompt({ promptMessage: 'Confirm fingerprint' });
        if (success) {
          const storedCredentials = await AsyncStorage.getItem('finger_login');
          if (storedCredentials) {
            const account = JSON.parse(storedCredentials);
            await handleBiometricLogin(account);
          }
        } else {
          Alert.alert('Biometric Authentication', 'Authentication failed');
        }
      } else {
        Alert.alert('Biometric Authentication', 'Biometric sensor is not available');
      }
    } catch (error) {
      console.error('Biometric authentication failed', error);
    }
  };

  const handleBiometricLogin = async (account) => {
    showLoader();
    try {
      const response = await user.login(account);
      hideLoader();
      const loginRes = response.data;

      if (loginRes.result === 'success') {
        await saveUserData(loginRes);
        navigation.reset({ index: 0, routes: [{ name: 'home' }] });
      } else {
        showModal('error', 'Biometric login failed. Please try again.');
      }
    } catch (error) {
      hideLoader();
      showModal('error', 'An error occurred during biometric login.');
    }
  };
  const showModal = (type, message) => {
    setModalType(type);
    setModalMessage(message);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  

  const isButtonDisabled = !email || password.length < 8;

  return (
    <ImageBackground source={Observy_BG} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => navigation.navigate('EmergencyProceduresPage')}>
          <Text style={styles.skipButtonText}>SKIP</Text>
        </TouchableOpacity>
        <StatusBar
          barStyle="light-content" // Set text color to light
          backgroundColor="#9d0808" // Set background color to brown
        />
        <Text style={styles.title}>Login</Text>
        {/* Email Input Field */}
        <View style={styles.inputContainer}>
          <Image
            source={require('../assets/img/userb.png')}
            style={styles.icon}
          />
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
          <Image
            source={require('../assets/img/lock.png')}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            
            secureTextEntry={!passwordVisible}
            placeholderTextColor="white"
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}>
            <Image
              source={
                passwordVisible
                  ? require('../assets/img/view.png')
                  : require('../assets/img/hidden.png')
              }
              style={styles.iconImage}
            />
          </TouchableOpacity>
        </View>
        {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null}

        <TouchableOpacity
          style={[
            styles.button,
            isButtonDisabled ? styles.disabledButton : styles.enabledButton, // Dynamically apply enabled or disabled styles
          ]}
          onPress={handleLogin}
          disabled={isButtonDisabled} // Disable button if no email or password
        >
           <Text style={isButtonDisabled ? styles.buttonTextDisabled : styles.buttonTextEnabled}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.link}>Forgot your Password ?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('RegistrationForm')}
          style={styles.createAccountButton}>
          <Text style={styles.createAccountText}>CREATE AN ACCOUNT</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => closeModal()}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text
              style={[
                styles.modalText,
                modalType === 'error' && styles.errorText1,
              ]}>
              {modalType === 'error' ? 'Failed' : 'Success'}
            </Text>
            <Text style={styles.modalMessage}>{modalMessage}</Text>
            <TouchableOpacity
              style={[
                styles.modalButton,
                modalType === 'error'
                  ? styles.errorButton
                  : styles.successButton,
              ]}
              onPress={closeModal}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipButton: {
    position: 'absolute',
    top: hp('-14%'), // Adjust this value for proper vertical spacing
    right: wp('5%'), // Adjust this value for proper horizontal spacing
    zIndex: 1,
  },
  enabledButton: {
    backgroundColor: '#9d0808',
  },
  disabledButton: {
    backgroundColor: 'rgba(255, 0, 0, 0.3)',
  },
  skipButtonText: {
    fontSize: wp('4%'), // Adjusted for responsiveness
    color: 'white',
    fontWeight: '500',
  },
  container: {
    width: wp('90%'),
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: wp('4.5%'), // Adjusted for responsiveness
    fontWeight: 'bold',
    marginBottom: hp('0.5%'), // Adjusted for responsiveness
    textAlign: 'center',
  },
  iconImage: {
    width: wp('5%'), // Adjusted for responsiveness
    height: hp('2.5%'), // Adjusted for responsiveness
    tintColor: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('80%'),
    marginTop: hp('2%'), // Adjusted for responsiveness
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 3,
    marginBottom: hp('1%'),
    paddingHorizontal: wp('2%'), // Adjusted for responsiveness
  },
  input: {
    flex: 1,
    height: hp('7.5%'), // Adjusted for responsiveness
    paddingHorizontal: wp('2%'), // Adjusted for responsiveness
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'white',
    fontSize: wp('4.2%'),
  },
  togglePassword: {
    color: '#007BFF',
    marginLeft: wp('2%'), // Adjusted for responsiveness
  },
  button: {
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
    padding: hp('2%'), // Adjusted for responsiveness
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: hp('2%'), // Adjusted for responsiveness
    width: wp('45%'),
    marginTop: hp('2%'), // Adjusted for responsiveness
  },
  buttonText: {
    color: 'white',
    fontSize: wp('4.5%'), // Adjusted for responsiveness
    fontWeight: 'bold',
  },
  buttonTextEnabled: {
    color: 'white',
    fontSize: wp('4.5%'), // Adjusted for responsiveness
    fontWeight: 'bold',
  },
  
  buttonTextDisabled: {
    color: 'rgba(255, 255, 255, 0.6)', // Lighter color to indicate disabled state
    fontSize: wp('4.5%'), // Adjusted for responsiveness
    fontWeight: 'bold',
  },
  link: {
    color: 'white',
    textAlign: 'center',
    marginBottom: hp('1%'), // Adjusted for responsiveness
    fontSize: wp('4%'), // Adjusted for responsiveness
    fontWeight: 'bold',
    marginTop: hp('2%'), // Adjusted for responsiveness
  },
  icon: {
    width: wp('5%'), // Adjusted for responsiveness
    height: hp('2.5%'), // Adjusted for responsiveness
    marginRight: wp('4%'), // Adjusted for responsiveness
    tintColor: 'white',
  },
  createAccountButton: {
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 0,
    padding: hp('1%'), // Adjusted for responsiveness
    textAlign: 'center',
    width: wp('56%'),
    marginTop: hp('3%'), // Adjusted for responsiveness
    marginBottom: hp('3%'), // Adjusted for responsiveness
  },
  createAccountText: {
    color: 'white',
    fontSize: wp('4%'), // Adjusted for responsiveness
    fontWeight: 'bold',
    padding: hp('1%'), // Adjusted for responsiveness
    textAlign: 'center',
    
  },
  errorText: {
    color: 'red',
    fontSize: wp(' 4%'), // Adjusted for responsiveness
    marginBottom: hp('1%'), // Adjusted for responsiveness
    width: wp('90%'),
    textAlign: 'left',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: wp('80%'), // Adjusted for responsiveness
    backgroundColor: 'white',
    borderRadius: 10,
    padding: hp('3%'), // Adjusted for responsiveness
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    fontSize: wp('5%'), // Adjusted for responsiveness
    fontWeight: 'bold',
    marginBottom: hp('1%'), // Adjusted for responsiveness
    color: 'black',
  },
  modalMessage: {
    fontSize: wp('4.5%'), // Adjusted for responsiveness
    textAlign: 'center',
    marginBottom: hp('2%'), // Adjusted for responsiveness
    color: 'black',
  },
  modalButton: {
    padding: hp('2%'), // Adjusted for responsiveness
    borderRadius: 5,
  },
  errorButton: {
    backgroundColor: '#9d0808',
  },
  successButton: {
    backgroundColor: '#9d0808',
  },
  modalButtonText: {
    color: 'white',
    fontSize: wp('4%'), // Adjusted for responsiveness
  },
  errorText1: {
    color: 'black',
  },
});

export default LoginScreen;