// import React, { useState, useCallback, useRef, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, Animated } from 'react-native';
// import { useFocusEffect } from '@react-navigation/native';

// const HomePage = ({ navigation }) => {
//   const [activeButton, setActiveButton] = useState(null);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const slideAnim = useRef(new Animated.Value(-300)).current; // Initial value for sliding animation

//   useFocusEffect(
//     useCallback(() => {
//       setActiveButton(null);
//     }, [])
//   );

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

//   return (
//     <View style={styles.container}>
//       <Header />
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           style={[
//             styles.menuButton,
//             activeButton === 'CreateCaseScreen' && styles.activeMenuButton,
//           ]}
//           onPress={() => handlePress('CreateCaseScreen', 'CreateCaseScreen')}
//         >
//           <Image source={require('../assets/img/create-case.png')} style={styles.icon} />
//           <Text style={styles.buttonText}>CREATE A CASE</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.menuButton,
//             activeButton === 'ExistingCases' && styles.activeMenuButton,
//           ]}
//           onPress={() => handlePress('ExistingCases', 'ExistingCases')}
//         >
//           <Image source={require('../assets/img/existing-cases.png')} style={styles.icon} />
//           <Text style={styles.buttonText}>EXISTING CASES</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.menuButton,
//             activeButton === 'EmergencyProcedure' && styles.activeMenuButton,
//           ]}
//           onPress={() => handlePress('EmergencyProcedure', 'EmergencyProcedure')}
//         >
//           <Image source={require('../assets/img/emergency_procedure.png')} style={styles.icon} />
//           <Text style={styles.buttonText}>EMERGENCY {"\n"}PROCEDURES</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.menuButton,
//             activeButton === 'IntroductionPage' && styles.activeMenuButton,
//           ]}
//           onPress={() => handlePress('IntroductionPage', 'IntroductionPage')}
//         >
//           <Image source={require('../assets/img/introduction.jpg')} style={styles.icon} />
//           <Text style={styles.buttonText}>INTRODUCTION {"\n"}TO CAPS MOBILE {"\n"}APP</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.menuButton,
//             activeButton === 'BestPracticeScreen' && styles.activeMenuButton,
//           ]}
//           onPress={() => handlePress('BestPracticeScreen', 'BestPracticeScreen')}
//         >
//           <Image source={require('../assets/img/best_practice.webp')} style={styles.icon} />
//           <Text style={styles.buttonText}>BEST PRACTICE {"\n"}RESPONSES</Text>
//         </TouchableOpacity>
//       </View>
//       <Footer navigation={navigation} />

//       <Modal
//         animationType="none"
//         transparent={true}
//         visible={isModalVisible}
        
//       >
//         <View style={styles.modalOverlay}>
//           <TouchableOpacity style={styles.overlayTouchable} onPress={closeModal} />
//           <Animated.View style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}>
            

//             <View style={styles.profileContainer}>
//               <Image source={require('../assets/img/male.jpg')} style={styles.profileImage} />
//               <View>
//                 <Text style={styles.profileName}>RAHUL</Text>
//                 <Text style={styles.profileEmail}>dhirajbhosale2203@gmail.com</Text>
//               </View>
//             </View>
            

//             <TouchableOpacity style={styles.menuItem} onPress={() => navigateAndCloseModal('ProfileScreen')}>
//               <Image source={require('../assets/img/user.png')} style={styles.menuItemIcon} />
//               <Text style={styles.menuItemText}>Profile</Text>
//             </TouchableOpacity>
//             <View style={styles.divider} />
//             <TouchableOpacity style={styles.menuItem} onPress={() => navigateAndCloseModal('ContactUsScreen')}>
//               <Image source={require('../assets/img/contact-us.png')} style={styles.menuItemIcon} />
//               <Text style={styles.menuItemText}>Contact us</Text>
//             </TouchableOpacity>
//             <View style={styles.divider} />
//             <TouchableOpacity style={styles.menuItem} onPress={() => navigateAndCloseModal('SettingScreen')}>
//               <Image source={require('../assets/img/settings.png')} style={styles.menuItemIcon} />
//               <Text style={styles.menuItemText}>Settings</Text>
//             </TouchableOpacity>
//             <View style={styles.divider} />
//             <TouchableOpacity style={styles.menuItem} onPress={() => navigateAndCloseModal('LogOutScreen')}>
//               <Image source={require('../assets/img/logout_icon.png')} style={styles.menuItemIcon} />
//               <Text style={styles.menuItemText}>Logout</Text>
//             </TouchableOpacity>
//             <View style={styles.divider} />
//           </Animated.View>
//         </View>
//       </Modal>
//     </View>
//   );
// };


//   const Footer = ({ navigation }) => {
//     return (
//       <View style={styles.footer}>
//         <TouchableOpacity
//           style={styles.footerButton}
//           onPress={() => navigation.navigate('HomePage')}
//         >
//           <Image source={require('../assets/img/home_icon.png')} style={styles.footerIcon} />
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.footerButton}
//           onPress={() => navigation.navigate('CreateCaseScreen')}
//         >
//           <Image source={require('../assets/img/create-case.png')} style={styles.footerIcon} />
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.footerButton}
//           onPress={() => navigation.navigate('ExistingCases')}
//         >
//           <Image source={require('../assets/img/existing-cases.png')} style={styles.footerIcon} />
//         </TouchableOpacity>
//       </View>
//     );
//   };

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
//     left: 10,
//   },
//   menuIcon: {
//     width: 24,
//     height: 24,
//   },
//   buttonContainer: {
//     flex: 1,
//     justifyContent: 'space-evenly',
//     padding: 15,
//   },
//   menuButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     marginVertical: 3,
//     padding: 15,
//     backgroundColor: 'white',
//     borderRadius: 8,
//     elevation: 2,
//   },
//   activeMenuButton: {
//     backgroundColor: '#ff0000',
//   },
//   icon: {
//     width: 50,
//     height: 50,
//     marginRight: 20,
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
//     width: '100%',  // Make sure the container takes up the full width of the sidebar
//     overflow: 'hidden',
    
//   },

//   profileImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     marginRight: 10,
//   },

//   profileName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white',
//     flexWrap: 'wrap',
//     marginBottom: 5,
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
//     marginLeft:10
    
//   },
//   menuItemText: {
//     fontSize: 18,
//     color: '#333',
//     marginLeft:20
//   },
// });

// export default HomePage;
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, Animated, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoaderProvider } from '../providers/loader/loader';
import ProfileProvider from '../providers/profile/profile';
import { Api } from '../providers/api/api';

const HomePage = ({ navigation }) => {
  const [activeButton, setActiveButton] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const slideAnim = useRef(new Animated.Value(-300)).current;
  const [loading, setLoading] = useState(true);

  const api = new Api('http://aggressionmanagement.com/api');
  const profileProvider = new ProfileProvider(api);

  useFocusEffect(
    useCallback(() => {
      setActiveButton(null);
    }, [])
  );

  useEffect(() => {
    checkUserSubscription();
    loadUserData(); // Load user data when the component mounts
  }, []);

  const loadUserData = async () => {
    try {
      const user = JSON.parse(await AsyncStorage.getItem('user'));
      console.log("Retrieved user data:", user);  // Debugging line to see what’s in AsyncStorage
      
      if (user) {
        setUserName(user.firstname);  // Assuming 'first_name' is the correct key
        setUserEmail(user.email);      // Assuming 'email' is the correct key
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
                      routes: [{ name: 'LoginScreen' }],
                    });
                  },
                },
                {
                  text: 'Continue',
                  onPress: () => navigation.navigate('SubscriptionScreen'),
                },
              ]
            );
          } else {
            navigation.navigate('SubscriptionScreen');
          }
        } else if (data.subscriptionFlag === 1 && user.client_id === "1") {
          await AsyncStorage.setItem('user', null);
          navigation.reset({
            index: 0,
            routes: [{ name: 'LoginScreen' }],
          });
        } else if (data.msg === "Your account is deactivated, please contact support.") {
          await AsyncStorage.setItem('user', null);
          navigation.reset({
            index: 0,
            routes: [{ name: 'LoginScreen' }],
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
      </TouchableOpacity>
      <Text style={styles.headerText}>CAPS Mobile App</Text>
    </View>
  );

  if (loading) {
    return <LoaderProvider />;
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.menuButton,
            activeButton === 'CreateCaseScreen' && styles.activeMenuButton,
          ]}
          onPress={() => handlePress('CreateCaseScreen', 'CreateCaseScreen')}
        >
          <Image source={require('../assets/img/create-case.png')} style={styles.icon} />
          <Text style={styles.buttonText}>CREATE A CASE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.menuButton,
            activeButton === 'ExistingCases' && styles.activeMenuButton,
          ]}
          onPress={() => handlePress('ExistingCases', 'ExistingCases')}
        >
          <Image source={require('../assets/img/existing-cases.png')} style={styles.icon} />
          <Text style={styles.buttonText}>EXISTING CASES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.menuButton,
            activeButton === 'EmergencyProcedure' && styles.activeMenuButton,
          ]}
          onPress={() => handlePress('EmergencyProceduresPage', 'EmergencyProceduresPage')}
        >
          <Image source={require('../assets/img/emergency_procedure.png')} style={styles.icon} />
          <Text style={styles.buttonText}>EMERGENCY {"\n"}PROCEDURES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.menuButton,
            activeButton === 'IntroductionPage' && styles.activeMenuButton,
          ]}
          onPress={() => handlePress('IntroductionPage', 'IntroductionPage')}
        >
          <Image source={require('../assets/img/introduction.jpg')} style={styles.icon} />
          <Text style={styles.buttonText}>INTRODUCTION {"\n"}TO CAPS MOBILE {"\n"}APP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.menuButton,
            activeButton === 'BestPracticeScreen' && styles.activeMenuButton,
          ]}
          onPress={() => handlePress('BestPracticeScreen', 'BestPracticeScreen')}
        >
          <Image source={require('../assets/img/best_practice.webp')} style={styles.icon} />
          <Text style={styles.buttonText}>BEST PRACTICE {"\n"}RESPONSES</Text>
        </TouchableOpacity>
      </View>
      <Footer navigation={navigation} />

      <Modal
        animationType="none"
        transparent={true}
        visible={isModalVisible}
      >
        <View style={styles.modalOverlay}>
          <TouchableOpacity style={styles.overlayTouchable} onPress={closeModal} />
          <Animated.View style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}>
            <View style={styles.profileContainer}>
              <Image source={require('../assets/img/male.jpg')} style={styles.profileImage} />
              <View>
                <Text style={styles.profileName}>{userName || "User Name"}</Text>
                <Text style={styles.profileEmail}>{userEmail}</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.menuItem} onPress={() => navigateAndCloseModal('profile')}>
              <Image source={require('../assets/img/userc.png')} style={styles.menuItemIcon} />
              <Text style={styles.menuItemText}>Profile</Text>
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity style={styles.menuItem} onPress={() => navigateAndCloseModal('ContactUsScreen')}>
              <Image source={require('../assets/img/contact-us.png')} style={styles.menuItemIcon} />
              <Text style={styles.menuItemText}>Contact us</Text>
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity style={styles.menuItem} onPress={() => navigateAndCloseModal('SettingScreen')}>
              <Image source={require('../assets/img/settings.png')} style={styles.menuItemIcon} />
              <Text style={styles.menuItemText}>Settings</Text>
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity style={styles.menuItem} onPress={() => navigateAndCloseModal('LogOutScreen')}>
              <Image source={require('../assets/img/logout_icon.png')} style={styles.menuItemIcon} />
              <Text style={styles.menuItemText}>Logout</Text>
            </TouchableOpacity>
            <View style={styles.divider} />
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
};

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => navigation.navigate('HomePage')}
      >
        <Image source={require('../assets/img/home_icon.png')} style={styles.footerIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => navigation.navigate('HomePage')}
      >
        <Image source={require('../assets/img/call_icon.png')} style={styles.footerIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => navigation.navigate('HomePage')}
      >
        <Image source={require('../assets/img/Profile-icon.png')} style={styles.footerIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => navigation.navigate('CreateCaseScreen')}
      >
        <Image source={require('../assets/img/edit_icon.png')} style={styles.footerIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => navigation.navigate('ExistingCases')}
      >
        <Image source={require('../assets/img/logout_icon.png')} style={styles.footerIcon} />
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    height: 60,
    backgroundColor: '#b71c1c',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    marginLeft:50,
  },
  menuIconContainer: {
    position: 'absolute',
    left: 10,
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 15,
  },
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 3,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 2,
  },
  activeMenuButton: {
    backgroundColor: '#ff0000',
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#333',
    textAlign: 'center',
    flex: 1,
    fontWeight: 'bold',
  },
  footer: {
    height: 60,
    backgroundColor: '#b71c1c',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerIcon: {
    width: 22,
    height: 22,
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
    width: '80%',  // Adjust width based on your design
    backgroundColor: 'white',
    padding: 20,
    elevation: 5,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 20,
    paddingBottom: 20,
  },

  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#b71c1c',
    padding: 10,
    marginBottom: 20,
    width: '106%',  // Make sure the container takes up the full width of the sidebar
    overflow: 'hidden',
    
  },

  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },

  profileName: {
    // fontSize: 20,
    // fontWeight: 'bold',
    // color: 'white',
    // flexWrap: 'wrap',
    // marginBottom: 5,
    fontSize: 14,
    color: 'white',
    flexWrap: 'wrap'
  },

  profileEmail: {
    fontSize: 14,
    color: 'white',
    flexWrap: 'wrap',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    //marginVertical:0,
    marginBottom:30
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuItemIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
    marginLeft:10
    
  },
  menuItemText: {
    fontSize: 18,
    color: '#333',
    marginLeft:20
  },
});

export default HomePage;
