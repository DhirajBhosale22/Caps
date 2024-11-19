
// // import React, { useState, useCallback, useRef, useEffect } from 'react';
// // import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, Animated, Alert, StatusBar } from 'react-native';
// // import { useFocusEffect } from '@react-navigation/native';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import { LoaderProvider } from '../providers/loader/loader';
// // import ProfileProvider from '../providers/profile/profile';
// // import { Api } from '../providers/api/api';

// // const HomePage = ({ navigation }) => {
// //   const [activeButton, setActiveButton] = useState(null);
// //   const [isModalVisible, setIsModalVisible] = useState(false);
// //   const [userName, setUserName] = useState('');
// //   const [userEmail, setUserEmail] = useState('');
// //   const slideAnim = useRef(new Animated.Value(-300)).current;
// //   const [loading, setLoading] = useState(true);

// //   const api = new Api('http://aggressionmanagement.com/api');
// //   const profileProvider = new ProfileProvider(api);

// //   useFocusEffect(
// //     useCallback(() => {
// //       setActiveButton(null);
// //     }, [])
// //   );

// //   useEffect(() => {
// //     checkUserSubscription();
// //     loadUserData(); // Load user data when the component mounts
// //   }, []);

// //   const loadUserData = async () => {
// //     try {
// //       const user = JSON.parse(await AsyncStorage.getItem('user'));
// //       console.log("Retrieved user data:", user);  // Debugging line to see what’s in AsyncStorage
      
// //       if (user) {
// //         setUserName(user.firstname);  // Assuming 'first_name' is the correct key
// //         setUserEmail(user.email);      // Assuming 'email' is the correct key
// //       }
// //     } catch (err) {
// //       console.error("Error loading user data:", err);
// //     }
// //   };
  

// //   const checkUserSubscription = async () => {
// //     try {
// //       const user = JSON.parse(await AsyncStorage.getItem('user'));
// //       if (user) {
// //         const user_info = {
// //           user_id: user.user_id,
// //           token: user.token,
// //         };

// //         const response = await profileProvider.user_info(user_info);
// //         const data = response.data;

// //         if (data.subscriptionFlag === 1 && user.client_id === "0") {
// //           if (data.user_type === "tester") {
// //             Alert.alert(
// //               'Expire',
// //               "Your 60 days Free subscription ended. Please subscribe.",
// //               [
// //                 {
// //                   text: 'Cancel',
// //                   onPress: async () => {
// //                     await AsyncStorage.setItem('user', null);
// //                     navigation.reset({
// //                       index: 0,
// //                       routes: [{ name: 'LoginScreen' }],
// //                     });
// //                   },
// //                 },
// //                 {
// //                   text: 'Continue',
// //                   onPress: () => navigation.navigate('SubscriptionScreen'),
// //                 },
// //               ]
// //             );
// //           } else {
// //             navigation.navigate('SubscriptionScreen');
// //           }
// //         } else if (data.subscriptionFlag === 1 && user.client_id === "1") {
// //           await AsyncStorage.setItem('user', null);
// //           navigation.reset({
// //             index: 0,
// //             routes: [{ name: 'LoginScreen' }],
// //           });
// //         } else if (data.msg === "Your account is deactivated, please contact support.") {
// //           await AsyncStorage.setItem('user', null);
// //           navigation.reset({
// //             index: 0,
// //             routes: [{ name: 'LoginScreen' }],
// //           });
// //         }
// //       }
// //     } catch (err) {
// //       console.error("Error fetching user info:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handlePress = (buttonName, screenName) => {
// //     setActiveButton(buttonName);
// //     navigation.navigate(screenName);
// //   };

// //   const handleMenuPress = () => {
// //     setIsModalVisible(true);
// //     Animated.timing(slideAnim, {
// //       toValue: 0,
// //       duration: 300,
// //       useNativeDriver: true,
// //     }).start();
// //   };

// //   const navigateAndCloseModal = (screenName) => {
// //     Animated.timing(slideAnim, {
// //       toValue: -300,
// //       duration: 300,
// //       useNativeDriver: true,
// //     }).start(() => {
// //       setIsModalVisible(false);
// //       navigation.navigate(screenName);
// //     });
// //   };

// //   const closeModal = () => {
// //     Animated.timing(slideAnim, {
// //       toValue: -300,
// //       duration: 300,
// //       useNativeDriver: true,
// //     }).start(() => {
// //       setIsModalVisible(false);
// //     });
// //   };

// //   const Header = () => (
// //     <View style={styles.header}>
// //       <TouchableOpacity
// //         style={styles.menuIconContainer}
// //         onPress={handleMenuPress}
// //       >
// //         <Image
// //           source={require('../assets/img/menu_icon.png')}
// //           style={styles.menuIcon}
// //         />
// //       </TouchableOpacity>
// //       <Text style={styles.headerText}>CAPS Mobile App</Text>
// //     </View>
// //   );

// //   if (loading) {
// //     return <LoaderProvider />;
// //   }

// //   return (
// //     <View style={styles.container}>
// //       <StatusBar
// //         barStyle="light-content" // Set text color to light
// //         backgroundColor="#9d0808" // Set background color to brown
// //       />
// //       <Header />
// //       <View style={styles.buttonContainer}>
// //         <TouchableOpacity
// //           style={[
// //             styles.menuButton,
// //             activeButton === 'CreateCaseScreen' && styles.activeMenuButton,
// //           ]}
// //           onPress={() => handlePress('CreateCaseScreen', 'CreateCaseScreen')}
// //         >
// //           <Image source={require('../assets/img/create-case.png')} style={styles.icon} />
// //           <Text style={styles.buttonText}>CREATE A CASE</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity
// //           style={[
// //             styles.menuButton,
// //             activeButton === 'ExistingCases' && styles.activeMenuButton,
// //           ]}
// //           onPress={() => handlePress('ExistingCases', 'ExistingCases')}
// //         >
// //           <Image source={require('../assets/img/existing-cases.png')} style={styles.icon} />
// //           <Text style={styles.buttonText}>EXISTING CASES</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity
// //           style={[
// //             styles.menuButton,
// //             activeButton === 'EmergencyProcedure' && styles.activeMenuButton,
// //           ]}
// //           onPress={() => handlePress('EmergencyProcedure', 'EmergencyProcedure')}
// //         >
// //           <Image source={require('../assets/img/emergency_procedure.png')} style={styles.icon} />
// //           <Text style={styles.buttonText}>EMERGENCY {"\n"}PROCEDURES</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity
// //           style={[
// //             styles.menuButton,
// //             activeButton === 'IntrductionPage' && styles.activeMenuButton,
// //           ]}
// //           onPress={() => handlePress('IntrductionPage', 'IntrductionPage')}
// //         >
// //           <Image source={require('../assets/img/introduction.jpg')} style={styles.icon} />
// //           <Text style={styles.buttonText}>INTRODUCTION {"\n"}TO CAPS MOBILE {"\n"}APP</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity
// //           style={[
// //             styles.menuButton,
// //             activeButton === 'BestPracticeScreen' && styles.activeMenuButton,
// //           ]}
// //           onPress={() => handlePress('BestPracticeScreen', 'BestPracticeScreen')}
// //         >
// //           <Image source={require('../assets/img/best_practice.webp')} style={styles.icon} />
// //           <Text style={styles.buttonText}>BEST PRACTICE {"\n"}RESPONSES</Text>
// //         </TouchableOpacity>
// //       </View>
// //       <Footer navigation={navigation} />

// //       <Modal
// //         animationType="none"
// //         transparent={true}
// //         visible={isModalVisible}
// //       >
// //         <View style={styles.modalOverlay}>
// //           <TouchableOpacity style={styles.overlayTouchable} onPress={closeModal} />
// //           <Animated.View style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}>
// //             <View style={styles.profileContainer}>
// //               <Image source={require('../assets/img/male.jpg')} style={styles.profileImage} />
// //               <View>
// //                 <Text style={styles.profileName}>{userName || "User Name"}</Text>
// //                 <Text style={styles.profileEmail}>{userEmail}</Text>
// //               </View>
// //             </View>

// //             <TouchableOpacity style={styles.menuItem} onPress={() => navigateAndCloseModal('profile')}>
// //               <Image source={require('../assets/img/userc.png')} style={styles.menuItemIcon} />
// //               <Text style={styles.menuItemText}>Profile</Text>
// //             </TouchableOpacity>
// //             <View style={styles.divider} />
// //             <TouchableOpacity style={styles.menuItem} onPress={() => navigateAndCloseModal('ContactUsScreen')}>
// //               <Image source={require('../assets/img/contact-us.png')} style={styles.menuItemIcon} />
// //               <Text style={styles.menuItemText}>Contact us</Text>
// //             </TouchableOpacity>
// //             <View style={styles.divider} />
// //             <TouchableOpacity style={styles.menuItem} onPress={() => navigateAndCloseModal('SettingsPage')}>
// //               <Image source={require('../assets/img/settings.png')} style={styles.menuItemIcon} />
// //               <Text style={styles.menuItemText}>Settings</Text>
// //             </TouchableOpacity>
// //             <View style={styles.divider} />
// //             <TouchableOpacity style={styles.menuItem} onPress={() => navigateAndCloseModal('Login')}>
// //               <Image source={require('../assets/img/logout_icon.png')} style={styles.menuItemIcon} />
// //               <Text style={styles.menuItemText}>Logout</Text>
// //             </TouchableOpacity>
// //             <View style={styles.divider} />
// //           </Animated.View>
// //         </View>
// //       </Modal>
// //     </View>
// //   );
// // };

// // const Footer = ({ navigation }) => {
// //   return (
// //     <View style={styles.footer}>
// //       <TouchableOpacity
// //         style={styles.footerButton}
// //         onPress={() => navigation.navigate('HomePage')}
// //       >
// //         <Image source={require('../assets/img/home_icon.png')} style={styles.footerIcon} />
// //       </TouchableOpacity>
// //       <TouchableOpacity
// //         style={styles.footerButton}
// //         onPress={() => navigation.navigate('HomePage')}
// //       >
// //         <Image source={require('../assets/img/call_icon.png')} style={styles.footerIcon} />
// //       </TouchableOpacity>
// //       <TouchableOpacity
// //         style={styles.footerButton}
// //         onPress={() => navigation.navigate('HomePage')}
// //       >
// //         <Image source={require('../assets/img/Profile-icon.png')} style={styles.footerIcon} />
// //       </TouchableOpacity>
// //       <TouchableOpacity
// //         style={styles.footerButton}
// //         onPress={() => navigation.navigate('CreateCaseScreen')}
// //       >
// //         <Image source={require('../assets/img/edit_icon.png')} style={styles.footerIcon} />
// //       </TouchableOpacity>
// //       <TouchableOpacity
// //         style={styles.footerButton}
// //         onPress={() => navigation.navigate('Login')}
// //       >
// //         <Image source={require('../assets/img/logout_icon.png')} style={styles.footerIcon} />
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };


// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#f2f2f2',
// //   },
// //   header: {
// //     height: 60,
// //     backgroundColor: '#9d0808',
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     paddingHorizontal: 10,
// //   },
// //   headerText: {
// //     color: 'white',
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     flex: 1,
// //     textAlign: 'center',
// //     marginLeft:50,
// //   },
// //   menuIconContainer: {
// //     position: 'absolute',
// //     left: 10,
// //   },
// //   menuIcon: {
// //     width: 24,
// //     height: 24,
// //   },
// //   buttonContainer: {
// //     flex: 1,
// //     justifyContent: 'space-evenly',
// //     padding: 15,
// //   },
// //   menuButton: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'flex-start',
// //     marginVertical: 3,
// //     padding: 15,
// //     backgroundColor: 'white',
// //     borderRadius: 8,
// //     elevation: 2,
// //   },
// //   activeMenuButton: {
// //     backgroundColor: '#ff0000',
// //   },
// //   icon: {
// //     width: 50,
// //     height: 50,
// //     marginRight: 20,
// //   },
// //   buttonText: {
// //     fontSize: 20,
// //     color: '#333',
// //     textAlign: 'center',
// //     flex: 1,
// //     fontWeight: 'bold',
// //   },
// //   footer: {
// //     height: 60,
// //     backgroundColor: '#9d0808',
// //     flexDirection: 'row',
// //     justifyContent: 'space-around',
// //     alignItems: 'center',
// //   },
// //   footerButton: {
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   footerIcon: {
// //     width: 22,
// //     height: 22,
// //     tintColor: 'white',
// //   },
// //   modalOverlay: {
// //     flex: 1,
// //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
// //     justifyContent: 'flex-start',
// //   },
// //   overlayTouchable: {
// //     flex: 1,
// //     width: '100%',
// //   },
// //   sidebar: {
// //     width: '80%',  // Adjust width based on your design
// //     backgroundColor: 'white',
// //     padding: 20,
// //     elevation: 5,
// //     position: 'absolute',
// //     left: 0,
// //     top: 0,
// //     bottom: 0,
// //     paddingTop: 0,
// //     paddingLeft: 0,
// //     paddingRight: 20,
// //     paddingBottom: 20,
// //   },

// //   profileContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#9d0808',
// //     padding: 10,
// //     marginBottom: 20,
// //     width: '107%',  // Make sure the container takes up the full width of the sidebar
// //     overflow: 'hidden',
    
// //   },

// //   profileImage: {
// //     width: 60,
// //     height: 60,
// //     borderRadius: 30,
// //     marginRight: 10,
// //   },

// //   profileName: {
// //     // fontSize: 20,
// //     // fontWeight: 'bold',
// //     // color: 'white',
// //     // flexWrap: 'wrap',
// //     // marginBottom: 5,
// //     fontSize: 14,
// //     color: 'white',
// //     flexWrap: 'wrap'
// //   },

// //   profileEmail: {
// //     fontSize: 14,
// //     color: 'white',
// //     flexWrap: 'wrap',
// //   },
// //   divider: {
// //     height: 1,
// //     backgroundColor: '#ddd',
// //     //marginVertical:0,
// //     marginBottom:30
// //   },

// //   menuItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     paddingVertical: 10,
// //   },
// //   menuItemIcon: {
// //     width: 30,
// //     height: 30,
// //     marginRight: 10,
// //     marginLeft:10
    
// //   },
// //   menuItemText: {
// //     fontSize: 18,
// //     color: '#333',
// //     marginLeft:20
// //   },
// // });

// // export default HomePage;

// import React, { useState, useCallback, useRef, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, Animated, Alert, StatusBar, Linking } from 'react-native';
// import { useFocusEffect } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { LoaderProvider } from '../providers/loader/loader';
// import ProfileProvider from '../providers/profile/profile';
// import { Api } from '../providers/api/api';


// const HomePage = ({ navigation }: any) => {
//   const [activeButton, setActiveButton] = useState(null);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [userName, setUserName] = useState('');
//   const [userEmail, setUserEmail] = useState('');
//   const slideAnim = useRef(new Animated.Value(-300)).current;
//   const [loading, setLoading] = useState(true);
//   const [showFooter, setShowFooter] = useState(true);
//   const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  

//   const api = new Api('https://aggressionmanagement.com/api');
//   const profileProvider = new ProfileProvider(api);

//   useFocusEffect(
//     useCallback(() => {
//       setActiveButton(null);
//     }, [])
//   );

//   useEffect(() => {
//     checkUserSubscription();
//     loadUserData(); // Load user data when the component mounts
//   }, []);
//   useEffect(() => {
//     const checkIfLoggedIn = async () => {
//       const user = await AsyncStorage.getItem('user');
//       if (!user) {
//         navigation.reset({
//           index: 0,
//           routes: [{ name: 'Login' }],
//         });
//       }
//     };
//     checkIfLoggedIn();
//   }, [navigation]);

//   const loadUserData = async () => {
//     try {
//       const user = JSON.parse(await AsyncStorage.getItem('user'));
//       console.log("Retrieved user data:", user);  // Debugging line to see what’s in AsyncStorage
      
//       if (user) {
//         setUserName(user.firstname);  // Assuming 'first_name' is the correct key
//         setUserEmail(user.email);      // Assuming 'email' is the correct key
//       }
//     } catch (err) {
//       console.error("Error loading user data:", err);
//     }
//   };
  

//   const checkUserSubscription = async () => {
//     try {
//       const user = JSON.parse(await AsyncStorage.getItem('user'));
//       if (user) {
//         const user_info = {
//           user_id: user.user_id,
//           token: user.token,
//         };

//         const response = await profileProvider.user_info(user_info);
//         const data = response.data;

//         if (data.subscriptionFlag === 1 && user.client_id === "0") {
//           if (data.user_type === "tester") {
//             Alert.alert(
//               'Expire',
//               "Your 60 days Free subscription ended. Please subscribe.",
//               [
//                 {
//                   text: 'Cancel',
//                   onPress: async () => {
//                     await AsyncStorage.setItem('user', null);
//                     navigation.reset({
//                       index: 0,
//                       routes: [{ name: 'LoginScreen' }],
//                     });
//                   },
//                 },
//                 {
//                   text: 'Continue',
//                   onPress: () => navigation.navigate('SubscriptionScreen'),
//                 },
//               ]
//             );
//           } else {
//             navigation.navigate('SubscriptionScreen');
//           }
//         } else if (data.subscriptionFlag === 1 && user.client_id === "1") {
//           await AsyncStorage.setItem('user', null);
//           navigation.reset({
//             index: 0,
//             routes: [{ name: 'LoginScreen' }],
//           });
//         } else if (data.msg === "Your account is deactivated, please contact support.") {
//           await AsyncStorage.setItem('user', null);
//           navigation.reset({
//             index: 0,
//             routes: [{ name: 'LoginScreen' }],
//           });
//         }
//       }
//     } catch (err) {
//       console.error("Error fetching user info:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handlePress = (buttonName, screenName) => {
//     setActiveButton(buttonName);
//     navigation.navigate(screenName);
//   };

//   const handleMenuPress = () => {
//     setIsModalVisible(true);
//     Animated.timing(slideAnim, {
//       toValue: 0,
//       duration: 300,
//       useNativeDriver: true,
//     }).start();
//   };

//   const navigateAndCloseModal = (screenName) => {
//     Animated.timing(slideAnim, {
//       toValue: -300,
//       duration: 300,
//       useNativeDriver: true,
//     }).start(() => {
//       setIsModalVisible(false);
//       navigation.navigate(screenName);
//     });
//   };

//   const closeModal = () => {
//     Animated.timing(slideAnim, {
//       toValue: -300,
//       duration: 300,
//       useNativeDriver: true,
//     }).start(() => {
//       setIsModalVisible(false);
//     });
//   };

//   const Header = () => (
//     <View style={styles.header}>
//       <TouchableOpacity
//         style={styles.menuIconContainer}
//         onPress={handleMenuPress}
//       >
//         <Image
//           source={require('../assets/img/menu_icon.png')}
//           style={styles.menuIcon}
//         />
//       </TouchableOpacity>
//       <Text style={styles.headerText}>CAPS Mobile App</Text>
//     </View>
//   );

//   if (loading) {
//     return <LoaderProvider />;
//   }
//   const handleLogout = async () => {
//     await AsyncStorage.removeItem('user');
//     navigation.reset({
//       index: 0,
//       routes: [{ name: 'Login' }],
//     });
//   };

//   const handleLogoutCancel = () => {
//     setLogoutModalVisible(false);
//   };
//   const navigateAndCloseModa = (screenName) => {
//     Animated.timing(slideAnim, {
//       toValue: -300,
//       duration: 300,
//       useNativeDriver: true,
//     }).start(() => {
//       setIsModalVisible(false);
  
//       if (screenName === 'LogOutScreen') {
//         setLogoutModalVisible(true); // Show the logout modal for the sidebar logout button
//       } else {
//         navigation.navigate(screenName);
//       }
//     });
//   };
  

//   return (
//     <View style={styles.container}>
//       <StatusBar
//  barStyle="light-content" // Set text color to light
//  backgroundColor="#9d0808" // Set background color to brown
//  />
//       <Header />
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           style={[
//             styles.menuButton,
//             activeButton === 'CreateCaseScreen' && styles.activeMenuButton,
//           ]}
//           onPress={() => handlePress('CreateCaseScreen', 'CreateCaseScreen')}
//         >
//           <Image source={require('../assets/img/createcase.png')} style={styles.icon} />
//           <Text style={styles.buttonText}>CREATE A CASE</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.menuButton,
//             activeButton === 'ExistingCases' && styles.activeMenuButton,
//           ]}
//           onPress={() => handlePress('ExistingCases', 'ExistingCases')}
//         >
//           <Image source={require('../assets/img/existingcase.png')} style={styles.icon} />
//           <Text style={styles.buttonText}>EXISTING CASES</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.menuButton,
//             activeButton === 'EmergencyProcedure' && styles.activeMenuButton,
//           ]}
//           onPress={() => handlePress('EmergencyProcedure', 'EmergencyProcedure')}
//         >
//           <Image source={require('../assets/img/emergencyprocedure.png')} style={styles.icon} />
//           <Text style={styles.buttonText}>EMERGENCY {"\n"}PROCEDURES</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.menuButton,
//             activeButton === 'IntrductionPage' && styles.activeMenuButton,
//           ]}
//           onPress={() => handlePress('IntrductionPage', 'IntrductionPage')}
//         >
//           <Image source={require('../assets/img/Introduction.png')} style={styles.icon} />
//           <Text style={styles.buttonText}>INTRODUCTION TO {"\n"}CAPS MOBILE APP</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.menuButton,
//             activeButton === 'BestPracticeScreen' && styles.activeMenuButton,
//           ]}
//           onPress={() => handlePress('BestPracticeScreen', 'BestPracticeScreen')}
//         >
//           <Image source={require('../assets/img/bestpractice.webp')} style={styles.icon} />
//           <Text style={styles.buttonText}>BEST PRACTICE {"\n"}RESPONSES</Text>
//         </TouchableOpacity>
//       </View>
//       {showFooter && (
//         <View style={styles.footer}>
//           <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('home')}>
//             <Image source={require('../assets/img/home_icon.png')} style={styles.footerIcon} />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.footerButton} onPress={() => Linking.openURL('tel:911')}>
//             <Image source={require('../assets/img/call_icon.png')} style={styles.footerIcon} />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('SharegroupPage')}>
//             <Image source={require('../assets/img/Profile-icon.png')} style={styles.footerIcon} />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('EditProfile')}>
//             <Image source={require('../assets/img/edit_icon.png')} style={styles.footerIcon} />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.footerButton} onPress={() => setLogoutModalVisible(true)}>
//             <Image source={require('../assets/img/logout.png')} style={styles.footerIcon} />
//           </TouchableOpacity>
//         </View>
//       )}

//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={logoutModalVisible}
//         onRequestClose={() => setLogoutModalVisible(false)}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalTitle}>Confirm Logout</Text>
//             <Text style={styles.modalText}>Are you sure you want to log out?</Text>
//             <View style={styles.modalButtonContainer}>
//               <TouchableOpacity style={styles.modalButton} onPress={handleLogout}>
//                 <Text style={styles.modalButtonText}>Yes</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.modalButton} onPress={handleLogoutCancel}>
//                 <Text style={styles.modalButtonText}>No</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>

//       <Modal
//         animationType="none"
//         transparent={true}
//         visible={isModalVisible}
//       >
//         <View style={styles.modalOverlay}>
//           <TouchableOpacity style={styles.overlayTouchable} onPress={closeModal} />
//           <Animated.View style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}>
//             <View style={styles.profileContainer}>
//               <Image    source={{ uri: 'https://safetnet.site/Aggression_management/profile_images/default_profile.png' }} style={styles.profileImage} />
//               <View>
//                 <Text style={styles.profileName}>{userName || "User Name"}</Text>
//                 <Text style={styles.profileEmail}>{userEmail}</Text>
//               </View>
//             </View>

//             <TouchableOpacity style={styles.menuItem} onPress={() => navigateAndCloseModal('profile')}>
//               <Image source={require('../assets/img/user.png')} style={styles.menuItemIcon} />
//               <Text style={styles.menuItemText}>Profile</Text>
//             </TouchableOpacity>
//             <View style={styles.divider} />
//             <TouchableOpacity style={styles.menuItem} onPress={() => navigateAndCloseModal('ContactUsScreen')}>
//               <Image source={require('../assets/img/email.png')} style={styles.menuItemIcon} />
//               <Text style={styles.menuItemText}>Contact us</Text>
//             </TouchableOpacity>
//             <View style={styles.divider} />
//             <TouchableOpacity style={styles.menuItem} onPress={() => navigateAndCloseModal('SettingsPage')}>
//               <Image source={require('../assets/img/settings.png')} style={styles.menuItemIcon} />
//               <Text style={styles.menuItemText}>Settings</Text>
//             </TouchableOpacity>
//             <View style={styles.divider} />
//             <TouchableOpacity style={styles.menuItem} onPress={() => navigateAndCloseModa('LogOutScreen')}>
//   <Image source={require('../assets/img/logout.png')} style={styles.menuItemIcon} />
//   <Text style={styles.menuItemText}>Logout</Text>
// </TouchableOpacity>
//             <View style={styles.divider} />
//           </Animated.View>
//         </View>
//       </Modal>
      
//     </View>
//   );
// };

// // const Footer = ({ navigation }) => {
// //   return (
// //     <View style={styles.footer}>
// //       <TouchableOpacity
// //         style={styles.footerButton}
// //         onPress={() => navigation.navigate('HomePage')}
// //       >
// //         <Image source={require('../assets/img/home.png')} style={styles.footerIcon} />
// //       </TouchableOpacity>
// //       <TouchableOpacity
// //         style={styles.footerButton}
// //         onPress={() => navigation.navigate('HomePage')}
// //       >
// //         <Image source={require('../assets/img/call.png')} style={styles.footerIcon} />
// //       </TouchableOpacity>
// //       <TouchableOpacity
// //         style={styles.footerButton}
// //         onPress={() => navigation.navigate('HomePage')}
// //       >
// //         <Image source={require('../assets/img/ico.png')} style={styles.footerIcon} />
// //       </TouchableOpacity>
// //       <TouchableOpacity
// //         style={styles.footerButton}
// //         onPress={() => navigation.navigate('CreateCaseScreen')}
// //       >
// //         <Image source={require('../assets/img/edit.png')} style={styles.footerIcon} />
// //       </TouchableOpacity>
// //       <TouchableOpacity
// //         style={styles.footerButton}
// //         onPress={() => navigation.navigate('ExistingCases')}
// //       >
// //         <Image source={require('../assets/img/logout.png')} style={styles.footerIcon} />
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f2f2f2',
//   },
//   header: {
//     height: 60,
//     backgroundColor: '#b71c1c',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 10,
//   },
//   headerText: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold',
//     flex: 1,
//     textAlign: 'center',
//     marginLeft:50,
//   },
//   menuIconContainer: {
//     position: 'absolute',
//     left: 20,
//   },
//   menuIcon: {
//     width: 25,
//     height: 25,
//   },
//   buttonContainer: {
//     flex: 1,
//     marginTop:'4%',
//     justifyContent: 'space-evenly',
//     padding: 10,
//   },
//   menuButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     marginVertical: 3,
//     padding: 13,
//     backgroundColor: 'white',
//     borderRadius: 8,
//     elevation: 2,
//   },
//   activeMenuButton: {
//     backgroundColor: '#ff0000',
//   },
//   icon: {
//     width: 80,
//     height: 80,
//     marginRight: 10,
//   },
//   buttonText: {
//     fontSize: 20,
//     color: '#333',
//     textAlign: 'center',
//     flex: 1,
//     fontWeight: 'bold',
//   },
//   footer: {
//     height: 60,
//     backgroundColor: '#b71c1c',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     marginTop:100
//   },
//   footerButton: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   footerIcon: {
//     width: 22,
//     height: 22,
//     tintColor: 'white',
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'flex-start',
//   },
//   overlayTouchable: {
//     flex: 1,
//     width: '100%',
//   },
//   sidebar: {
//     width: '80%',  // Adjust width based on your design
//     backgroundColor: 'white',
//     padding: 20,
//     elevation: 5,
//     position: 'absolute',
//     left: 0,
//     top: 0,
//     bottom: 0,
//     paddingTop: 0,
//     paddingLeft: 0,
//     paddingRight: 20,
//     paddingBottom: 20,
//   },

//   profileContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#b71c1c',
//     padding: 10,
//     marginBottom: 20,
//     width: '107%',  // Make sure the container takes up the full width of the sidebar
//     overflow: 'hidden',
    
//   },

//   profileImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     marginRight: 10,
//   },

//   profileName: {
//     // fontSize: 20,
//     // fontWeight: 'bold',
//     // color: 'white',
//     // flexWrap: 'wrap',
//     // marginBottom: 5,
//     fontSize: 14,
//     color: 'white',
//     flexWrap: 'wrap'
//   },

//   profileEmail: {
//     fontSize: 14,
//     color: 'white',
//     flexWrap: 'wrap',
//   },
//   divider: {
//     height: 1,
//     backgroundColor: '#ddd',
//     //marginVertical:0,
//     marginBottom:30
//   },

//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
    
//   },
//   menuItemIcon: {
//     width: 30,
//     height: 30,
//     marginRight: 10,
//     marginLeft:10,
//     tintColor:'#b71c1c'
    
//   },
//   menuItemText: {
//     fontSize: 18,
//     color: '#333',
//     marginLeft:20
    
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 15,
//   },
//   modalText: {
//     fontSize: 16,
//     marginBottom: 15,
//   },
//   modalButtonContainer: {
//     flexDirection: 'row',
//   },
//   modalButton: {
//     borderRadius: 5,
//     padding: 10,
//     marginHorizontal: 10,
//     backgroundColor: '#9d0808',
//   },
//   modalButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });

// export default HomePage;

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, Animated, Alert, StatusBar, Linking } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoaderProvider } from '../providers/loader/loader';
import ProfileProvider from '../providers/profile/profile';
import { Api } from '../providers/api/api';
import { ScrollView } from 'react-native';


const HomePage = ({ navigation }: any) => {
  const [activeButton, setActiveButton] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userName, setUserName] = useState('');
  const [profile_picture, setProfileImage] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const slideAnim = useRef(new Animated.Value(-300)).current;
  const [loading, setLoading] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  

  const api = new Api('https://aggressionmanagement.com/api');
  const profileProvider = new ProfileProvider(api);

  useFocusEffect(
    useCallback(() => {
      loadUserData(); // Load user data every time the screen is focused
      setActiveButton(null);
    }, [])
  );
  useEffect(() => {
    checkUserSubscription();
    loadUserData(); // Load user data when the component mounts
  }, []);


  useEffect(() => {
    const checkIfLoggedIn = async () => {
      const user = await AsyncStorage.getItem('user');
      if (!user) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      }
    };
    checkIfLoggedIn();
  }, [navigation]);

  const loadUserData = async () => {
    try {
      const user = JSON.parse(await AsyncStorage.getItem('user'));
      console.log("Retrieved user data:", user);  // Debugging line to see what’s in AsyncStorage
      
      if (user) {
        const user_info = {
          user_id: user.user_id,
          token: user.token,
        };

        const response = await profileProvider.user_info(user_info);
        const data = response.data;

        // Set user name and email from the fetched data
        setUserName(data.firstname);  // Load firstname from API
        setUserEmail(data.email);      // Load email from API
        setProfileImage(data.image_path || 'https://safetnet.site/Aggression_management/profile_images/default_profile.png')
      }
    } catch (err) {
      console.error("Error loading user data:", err);
    }
  };
  

  const checkUserSubscription = async () => {
    try {
      const user = JSON.parse(await AsyncStorage.getItem('user'));
      if (user) {
        const user_info = {
          user_id: user.user_id,
          token: user.token,
        };

        const response = await profileProvider.user_info(user_info);
        const data = response.data;

        if (data.subscriptionFlag === 1 && user.client_id === "0") {
          if (data.user_type === "tester") {
            Alert.alert(
              'Expire',
              "Your 60 days Free subscription ended. Please subscribe.",
              [
                {
                  text: 'Cancel',
                  onPress: async () => {
                    await AsyncStorage.setItem('user', null);
                    navigation.reset({
                      index: 0,
                      routes: [{ name: 'Login' }],
                    });
                  },
                },
                {
                  text: 'Continue',
                  onPress: () => navigation.navigate('sub'),
                },
              ]
            );
          } else {
            navigation.navigate('sub');
          }
        } else if (data.subscriptionFlag === 1 && user.client_id === "1") {
          await AsyncStorage.setItem('user', null);
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          });
        } else if (data.msg === "Your account is deactivated, please contact support.") {
          await AsyncStorage.setItem('user', null);
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          });
        }
      }
    } catch (err) {
      console.error("Error fetching user info:", err);
    } finally {
      setLoading(false);
    }
  };

  const handlePress = (buttonName, screenName) => {
    setActiveButton(buttonName);
    navigation.navigate(screenName);
  };

  const handleMenuPress = () => {
    setIsModalVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const navigateAndCloseModal = (screenName) => {
    Animated.timing(slideAnim, {
      toValue: -300,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsModalVisible(false);
      navigation.navigate(screenName);
    });
  };

  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: -300,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsModalVisible(false);
    });
  };

  const Header = () => (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.menuIconContainer}
        onPress={handleMenuPress}
      >
        <Image
          source={require('../assets/img/menu_icon.png')}
          style={styles.menuIcon}
        />
          <Text style={styles.headerTextc}> shgs    </Text>
      </TouchableOpacity>
      <Text style={styles.headerText}>CAPS Mobile App</Text>
    </View>
  );

  if (loading) {
    return <LoaderProvider />;
  }
  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  const handleLogoutCancel = () => {
    setLogoutModalVisible(false);
  };
  const navigateAndCloseModa = (screenName) => {
    Animated.timing(slideAnim, {
      toValue: -300,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsModalVisible(false);
  
      if (screenName === 'LogOutScreen') {
        setLogoutModalVisible(true); // Show the logout modal for the sidebar logout button
      } else {
        navigation.navigate(screenName);
      }
    });
  };
  

  return (
    <View style={styles.container}>
      <StatusBar
 barStyle="light-content" // Set text color to light
 backgroundColor="#9d0808" // Set background color to brown
 />
      <Header />
      
      <View style={styles.buttonContainer}>
      <ScrollView>
        <TouchableOpacity
          style={[
            styles.menuButton,
            activeButton === 'CreateCaseScreen' && styles.activeMenuButton,
          ]}
          onPress={() => handlePress('CreateCaseScreen', 'CreateCaseScreen')}
        >
          <Image source={require('../assets/img/createcase.png')} style={styles.icon} />
          <Text style={styles.buttonText}>CREATE A CASE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.menuButton,
            activeButton === 'ExistingCases' && styles.activeMenuButton,
          ]}
          onPress={() => handlePress('ExistingCases', 'ExistingCases')}
        >
          <Image source={require('../assets/img/existingcase.png')} style={styles.icon} />
          <Text style={styles.buttonText}>EXISTING CASES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.menuButton,
            activeButton === 'EmergencyProcedure' && styles.activeMenuButton,
          ]}
          onPress={() => handlePress('EmergencyProcedure', 'EmergencyProcedure')}
        >
          <Image source={require('../assets/img/emergencyprocedure.png')} style={styles.icon} />
          <Text style={styles.buttonText}>EMERGENCY {"\n"}PROCEDURES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.menuButton,
            activeButton === 'IntrductionPage' && styles.activeMenuButton,
          ]}
          onPress={() => handlePress('IntrductionPage', 'IntrductionPage')}
        >
          <Image source={require('../assets/img/Introduction.png')} style={styles.icon} />
          <Text style={styles.buttonText}>INTRODUCTION TO {"\n"}CAPS MOBILE APP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.menuButton,
            activeButton === 'BestPracticeScreen' && styles.activeMenuButton,
          ]}
          onPress={() => handlePress('BestPracticeScreen', 'BestPracticeScreen')}
        >
          <Image source={require('../assets/img/bestpractice.webp')} style={styles.icon} />
          <Text style={styles.buttonText}>BEST PRACTICE {"\n"}RESPONSES</Text>
        </TouchableOpacity>
        </ScrollView>
      </View>

     


      {showFooter && (
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('home')}>
            <Image source={require('../assets/img/home_icon.png')} style={styles.footerIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton} onPress={() => Linking.openURL('tel:911')}>
            <Image source={require('../assets/img/call_icon.png')} style={styles.footerIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('SharegroupPage')}>
            <Image source={require('../assets/img/Profile-icon.png')} style={styles.footerIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('EditProfile')}>
            <Image source={require('../assets/img/edit_icon.png')} style={styles.footerIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton} onPress={() => setLogoutModalVisible(true)}>
            <Image source={require('../assets/img/logout.png')} style={styles.footerIcon} />
          </TouchableOpacity>
        </View>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={logoutModalVisible}
        onRequestClose={() => setLogoutModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitles}>Logout</Text>
            <Text style={styles.modalText}>Are you sure you want to log out?</Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity style={styles.modalButton} onPress={handleLogout}>
                <Text style={styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={handleLogoutCancel}>
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="none"
        transparent={true}
        visible={isModalVisible}
      >
        <View style={styles.modalOverlay}>
          <TouchableOpacity style={styles.overlayTouchable} onPress={closeModal} />
          <Animated.View style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}>
            <View style={styles.profileContainer}>
            <Image source={{ uri: profile_picture }} style={styles.profileImage} />
              <View>
                <Text style={styles.profileName}>{userName}</Text>
                <Text style={styles.profileEmail}>{userEmail}</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.menuItem} onPress={() => navigateAndCloseModal('profile')}>
              <Image source={require('../assets/img/user.png')} style={styles.menuItemIcon} />
              <Text style={styles.menuItemText}>Profile</Text>
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity style={styles.menuItem} onPress={() => navigateAndCloseModal('ContactUsScreen')}>
              <Image source={require('../assets/img/email.png')} style={styles.menuItemIcon} />
              <Text style={styles.menuItemText}>Contact us</Text>
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity style={styles.menuItem} onPress={() => navigateAndCloseModal('SettingsPage')}>
              <Image source={require('../assets/img/settings.png')} style={styles.menuItemIcon} />
              <Text style={styles.menuItemText}>Settings</Text>
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity style={styles.menuItem} onPress={() => navigateAndCloseModa('LogOutScreen')}>
  <Image source={require('../assets/img/logout.png')} style={styles.menuItemIcon} />
  <Text style={styles.menuItemText}>Logout</Text>
</TouchableOpacity>
            <View style={styles.divider} />
          </Animated.View>
        </View>
      </Modal>
      
    </View>
  );
};

// const Footer = ({ navigation }) => {
//   return (
//     <View style={styles.footer}>
//       <TouchableOpacity
//         style={styles.footerButton}
//         onPress={() => navigation.navigate('HomePage')}
//       >
//         <Image source={require('../assets/img/home.png')} style={styles.footerIcon} />
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.footerButton}
//         onPress={() => navigation.navigate('HomePage')}
//       >
//         <Image source={require('../assets/img/call.png')} style={styles.footerIcon} />
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.footerButton}
//         onPress={() => navigation.navigate('HomePage')}
//       >
//         <Image source={require('../assets/img/ico.png')} style={styles.footerIcon} />
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.footerButton}
//         onPress={() => navigation.navigate('CreateCaseScreen')}
//       >
//         <Image source={require('../assets/img/edit.png')} style={styles.footerIcon} />
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.footerButton}
//         onPress={() => navigation.navigate('ExistingCases')}
//       >
//         <Image source={require('../assets/img/logout.png')} style={styles.footerIcon} />
//       </TouchableOpacity>
//     </View>
//   );
// };



import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    height: hp('8%'), // Responsive height
    backgroundColor: '#b71c1c',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp('2%'), // Responsive padding
  },
  headerText: {
    color: 'white',
    fontSize: wp('5%'), // Responsive font size
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    marginLeft: wp('10%'), // Responsive margin
  },
  headerTextc: {
    color: '#b71c1c',
    fontSize: wp('5%'), // Responsive font size
    fontWeight: 'bold',
   
   
    // Responsive margin
  },
  menuIconContainer: {
    position: 'absolute',
    left: wp('5%'), // Responsive position
    flexDirection:'row'
    
  },
  menuIcon: {
    width: wp('6%'), // Responsive width
    height: hp('4%'), 
    
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: wp('2%'), // Responsive padding
  },
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: hp('1%'), // Responsive margin
    padding: wp('3%'), // Responsive padding
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 2,
    marginTop: hp('2%'), // Responsive margin
  },
  activeMenuButton: {
    backgroundColor: '#ff0000',
  },
  icon: {
    width: wp('20%'), // Responsive width
    height: hp('10%'), // Responsive height
    marginRight: wp('2%'), // Responsive margin
  },
  buttonText: {
    fontSize: wp('5%'), // Responsive font size
    color: '#333',
    textAlign: 'center',
    flex: 1,
    fontWeight: 'bold',
  },
  footer: {
    height: hp('8%'), // Responsive height
    backgroundColor: '#b71c1c',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footerButton: {
    padding: hp('1%'),
  },
  footerIcon: {
    width: wp('6%'), // Width is 6% of the screen width
    height: wp('6%'), // Height is 6% of the screen width
    tintColor: 'white',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
  },
  overlayTouchable: {
    flex: 1,
    width: '100%',
  },
  sidebar: {
    width: wp('80%'), // Responsive width
    backgroundColor: 'white',
    padding: wp('5%'), // Responsive padding
    elevation: 5,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: wp('5%'), // Responsive padding
    paddingBottom: wp('5%'), // Responsive padding
  },

  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#b71c1c',
    padding: wp('2%'), // Responsive padding
    marginBottom: hp('3%'), // Responsive margin
    width: '107%',  // Keep this as is
    overflow: 'hidden',
  },

  profileImage: {
    width: wp('15%'), // Responsive width
    height: wp('15%'), // Responsive height
    borderRadius: wp('7.5%'), // Responsive border radius
    marginRight: wp('2%'),
    borderColor: '#fff',
    borderWidth: 1, // Responsive margin
  },

  profileName: {
    fontSize: wp('4%'), // Responsive font size
    color: 'white',
    flexWrap: 'wrap'
  },

  profileEmail: {
    fontSize: wp('4%'), // Responsive font size
    color: 'white',
    flexWrap: 'wrap',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginBottom: hp('3%'), },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp('2%'), // Responsive padding
  },
  menuItemIcon: {
    width: wp('8%'), // Responsive width
    height: wp('8%'), // Responsive height
    marginRight: wp('2%'), // Responsive margin
    marginLeft: wp('2%'), // Responsive margin
    tintColor: '#b71c1c'
  },
  menuItemText: {
    fontSize: wp('4.5%'), // Responsive font size
    color: '#333',
    marginLeft: wp('2%') // Responsive margin
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: wp('5%'), // Responsive margin
    backgroundColor: 'white',
    borderRadius: 10,
    padding: wp('5%'), // Responsive padding
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitles: {
    fontSize: wp('5%'), // Responsive font size
    fontWeight: 'bold',
    marginBottom: hp('2%'), // Responsive margin
    color: 'black'
  },
  modalText: {
    fontSize: wp('4%'), // Responsive font size
    marginBottom: hp('2%'), // Responsive margin
    color: 'black'
  },
  modalButtonContainer: {
    flexDirection: 'row',
  },
  modalButton: {
    borderRadius: 5,
    padding: wp('3%'), // Responsive padding
    marginHorizontal: wp('2%'), // Responsive margin
    backgroundColor: '#9d0808',
  },
  modalButtonText: {
    color: 'white',
    fontSize: wp('4%'), // Responsive font size
  },
});

export default HomePage;