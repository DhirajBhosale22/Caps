// import React, { useState, useCallback, useRef, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, Animated, Alert } from 'react-native';
// import { useFocusEffect } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { LoaderProvider } from '../providers/loader/loader';
// import ProfileProvider from '../providers/profile/profile';
// import { Api } from '../providers/api/api';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { StatusBar } from 'react-native';

// const ExistingCases = ({ navigation }) => {
//     const [activeButton, setActiveButton] = useState(null);
//     const [isModalVisible, setIsModalVisible] = useState(false);
//     const [userName, setUserName] = useState('');
//     const [userEmail, setUserEmail] = useState('');
//     const [userToken, setUserToken] = useState('');
//     const [userId, setUserId] = useState('');
//     const slideAnim = useRef(new Animated.Value(-300)).current;
//     const [loading, setLoading] = useState(true);


//     const api = new Api('https://aggressionmanagement.com/api');
//     const profileProvider = new ProfileProvider(api);

//     useFocusEffect(
//         useCallback(() => {
//             setActiveButton(null);
//         }, [])
//     );

//     useEffect(() => {
//         checkUserSubscription();
//         loadUserData(); // Load user data when the component mounts
//     }, []);

//     const loadUserData = async () => {
//         try {
//             const user = JSON.parse(await AsyncStorage.getItem('user'));
//             console.log("Retrieved user data:", user);  // Debugging line to see what’s in AsyncStorage

//             if (user) {
//                 setUserName(user.firstname);  // Assuming 'first_name' is the correct key
//                 setUserEmail(user.email); 
//                 setUserToken(user.token);      // Assuming 'token' is the correct key
//                 setUserId(user.user_id);          // Assuming 'email' is the correct key
//             }
//         } catch (err) {
//             console.error("Error loading user data:", err);
//         }
//     };


//     const checkUserSubscription = async () => {
//         try {
//             const user = JSON.parse(await AsyncStorage.getItem('user'));
//             if (user) {
//                 const user_info = {
//                     user_id: user.user_id,
//                     token: user.token,
//                 };
//                 console.log("User ID:", user_info.user_id); // Log the user ID
//                 console.log("User Token:", user_info.token); // Log the user token
//                 const response = await profileProvider.user_info(user_info);
//                 const data = response.data;
//                 console.log("API Response:", data); // Log the response from the API
//                 if (data.subscriptionFlag === 1 && user.client_id === "0") {
//                     if (data.user_type === "tester") {
//                         Alert.alert(
//                             'Expire',
//                             "Your 60 days Free subscription ended. Please subscribe.",
//                             [
//                                 {
//                                     text: 'Cancel',
//                                     onPress: async () => {
//                                         await AsyncStorage.setItem('user', null);
//                                         navigation.reset({
//                                             index: 0,
//                                             routes: [{ name: 'LoginScreen' }],
//                                         });
//                                     },
//                                 },
//                                 {
//                                     text: 'Continue',
//                                     onPress: () => navigation.navigate('SubscriptionScreen'),
//                                 },
//                             ]
//                         );
//                     } else {
//                         navigation.navigate('SubscriptionScreen');
//                     }
//                 } else if (data.subscriptionFlag === 1 && user.client_id === "1") {
//                     await AsyncStorage.setItem('user', null);
//                     navigation.reset({
//                         index: 0,
//                         routes: [{ name: 'LoginScreen' }],
//                     });
//                 } else if (data.msg === "Your account is deactivated, please contact support.") {
//                     await AsyncStorage.setItem('user', null);
//                     navigation.reset({
//                         index: 0,
//                         routes: [{ name: 'LoginScreen' }],
//                     });
//                 }
//             }
//         } catch (err) {
//             console.error("Error fetching user info:", err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handlePress = (screenName) => {
//         navigation.navigate(screenName, { token: userToken, user_id: userId });
//     };

//     const handleMenuPress = () => {
//         setIsModalVisible(true);
//         Animated.timing(slideAnim, {
//             toValue: 0,
//             duration: 300,
//             useNativeDriver: true,
//         }).start();
//     };

//     const navigateAndCloseModal = (screenName) => {
//         Animated.timing(slideAnim, {
//             toValue: -300,
//             duration: 300,
//             useNativeDriver: true,
//         }).start(() => {
//             setIsModalVisible(false);
//             navigation.navigate(screenName);
//         });
//     };

//     const closeModal = () => {
//         Animated.timing(slideAnim, {
//             toValue: -300,
//             duration: 300,
//             useNativeDriver: true,
//         }).start(() => {
//             setIsModalVisible(false);
//         });
//     };

//     const Header = () => (
//         <View style={styles.header}>
//             <TouchableOpacity
//                 style={styles.menuIconContainer}
//                 onPress={() => navigation.goBack()} 
//             >
//                 <Image
//                     source={require('../assets/img/back-arrow.png')}
//                     style={styles.menuIcon}
//                 />
//             </TouchableOpacity>
//             <Text style={styles.headerText}>Existing Cases </Text>
//         </View>
//     );

//     if (loading) {
//         return <LoaderProvider />;
//     }

//     return (
//         <View style={styles.container}>

//             {/* Set the status bar background color to red */}
//             <StatusBar backgroundColor="red" barStyle="light-content" />

//             <Header />
//             <View style={styles.buttonContainer}>
//                 <View style={styles.container}>

//                     {/* My Cases Section */}
//                     <View>
//                         <TouchableOpacity style={styles.caseItem}
//                          onPress={() => handlePress('MyCasePage')}
//                          >
//                             <View style={styles.caseLeft}>

//                                 <Image
//                                     source={require('../assets/img/mycases.png')} // Add your "My Cases" icon here
//                                     style={styles.caseIcon}
//                                 />


//                                 <View>
//                                     <Text style={styles.caseTitle}>My Cases</Text>
//                                     <Text style={styles.caseDescription}>Show all of my Cases!</Text>
//                                 </View>
//                             </View>
//                             <View>
//                                 <Image
//                                     source={require('../assets/img/arrow.png')} // Add arrow icon here
//                                     style={styles.arrowIcon}
//                                 />
//                             </View>
//                         </TouchableOpacity>
//                     </View>

//                     {/* Shared Cases Section */}
//                     <TouchableOpacity style={styles.caseItem}
//                     onPress={() => handlePress('Sharedcases')}
//                     >
//                         <View style={styles.caseLeft}>

//                             <Image
//                                 source={require('../assets/img/share-button.png')} // Add your "Shared Cases" icon here
//                                 style={styles.caseIcon}
//                             />


//                             <View>
//                                 <Text style={styles.caseTitle}>Shared Cases</Text>
//                                 <Text style={styles.caseDescription}>Show all Cases Shared with me!</Text>
//                             </View>
//                         </View>
//                         <View>
//                             <Image
//                                 source={require('../assets/img/arrow.png')} // Re-use arrow icon
//                                 style={styles.arrowIcon}
//                             />
//                         </View>
//                     </TouchableOpacity>
//                 </View>

//             </View>
//             <Footer navigation={navigation} />


//         </View>
//     );
// };

// const Footer = ({ navigation }) => {
//     return (
//         <View style={styles.footer}>
//             <TouchableOpacity
//                 style={styles.footerButton}
//                 onPress={() => navigation.navigate('HomePage')}
//             >
//                 <Image source={require('../assets/img/home_icon.png')} style={styles.footerIcon} />
//             </TouchableOpacity>
//             <TouchableOpacity
//                 style={styles.footerButton}
//                 onPress={() => navigation.navigate('HomePage')}
//             >
//                 <Image source={require('../assets/img//call_icon.png')} style={styles.footerIcon} />
//             </TouchableOpacity>
//             <TouchableOpacity
//                 style={styles.footerButton}
//                 onPress={() => navigation.navigate('HomePage')}
//             >
//                 <Image source={require('../assets/img/Profile-icon.png')} style={styles.footerIcon1} />
//             </TouchableOpacity>
//             <TouchableOpacity
//                 style={styles.footerButton}
//                 onPress={() => navigation.navigate('CreateCaseScreen')}
//             >
//                 <Image source={require('../assets/img/edit_icon.png')} style={styles.footerIcon} />
//             </TouchableOpacity>
//             <TouchableOpacity
//                 style={styles.footerButton}
//                 onPress={() => navigation.navigate('ExistingCases')}
//             >
//                 <Image source={require('../assets/img/logout.png')} style={styles.footerIcon} />
//             </TouchableOpacity>
//         </View>
//     );
// };


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#f2f2f2',
//     },
//     header: {
//         height: 60,
//         backgroundColor: '#b71c1c',
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingHorizontal: 10,
//     },
//     headerText: {
//         color: 'white',
//         fontSize: 20,
//         fontWeight: 'bold',
//         flex: 1,
//         textAlign: 'center',
//         marginLeft: 50,
//     },
//     menuIconContainer: {
//         position: 'absolute',
//         left: 20,
//     },
//     menuIcon: {
//         width: 25,
//         height: 25,
//     },
//     buttonContainer: {
//         flex: 1,
//         //justifyContent: 'space-evenly',
//         //padding: 5,
//     },
//     footer: {
//         height: 60,
//         backgroundColor: '#b71c1c',
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         marginTop: 100
//     },
//     footerButton: {
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     footerIcon: {
//         width: 21,
//         height: 21,
//         tintColor: 'white',
//     },
//     footerIcon1: {
//         width: 28,
//         height: 28,
//         tintColor: 'white',
//     },
//     modalOverlay: {
//         flex: 1,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         justifyContent: 'flex-start',
//     },
//     overlayTouchable: {
//         flex: 1,
//         width: '100%',
//     },

//     //existing cases

//     backIcon: {
//         width: 24,
//         height: 24,
//         tintColor: '#ffffff',

//     },
//     caseItem: {
//         marginHorizontal: 16,
//         padding: 16,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',

//     },
//     caseLeft: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     caseIcon: {
//         width: 24,
//         height: 24,
//         marginRight: 16,
//     },
//     caseTitle: {
//         fontSize: 18,
//         color: '#B71C1C',

//     },
//     caseDescription: {
//         fontSize: 15,
//         color: 'black',

//     },
//     arrowIcon: {
//         width: 16,
//         height: 16,



//     },
// });

// export default ExistingCases;

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, Animated, Alert, Linking } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoaderProvider } from '../providers/loader/loader';
import ProfileProvider from '../providers/profile/profile';
import { Api } from '../providers/api/api';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'react-native';

const ExistingCases = ({ navigation }) => {
    const [activeButton, setActiveButton] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userToken, setUserToken] = useState('');
    const [userId, setUserId] = useState('');
    const slideAnim = useRef(new Animated.Value(-300)).current;
    const [loading, setLoading] = useState(true);
    const [showFooter, setShowFooter] = useState(true);
    const [logoutModalVisible, setLogoutModalVisible] = useState(false);



    const api = new Api('https://aggressionmanagement.com/api');
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
                setUserEmail(user.email);
                setUserToken(user.token);      // Assuming 'token' is the correct key
                setUserId(user.user_id);          // Assuming 'email' is the correct key
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
                console.log("User ID:", user_info.user_id); // Log the user ID
                console.log("User Token:", user_info.token); // Log the user token
                const response = await profileProvider.user_info(user_info);
                const data = response.data;
                console.log("API Response:", data); // Log the response from the API
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

    const handlePress = (screenName) => {
        navigation.navigate(screenName, { token: userToken, user_id: userId });
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
                onPress={() => navigation.goBack()}
            >
                <Image
                    source={require('../assets/img/back-arrow.png')}
                    style={styles.menuIcon}
                />
            </TouchableOpacity>
            <Text style={styles.headerText}>Existing Cases </Text>
        </View>
    );

   
    const handleLogout = () => {
        setLogoutModalVisible(false);
        Alert.alert('Logged Out', 'You have been logged out.');
      };
    
      const handleLogoutCancel = () => {
        setLogoutModalVisible(false);
      };

    return (
        <View style={styles.container}>

            {/* Set the status bar background color to red */}
            <StatusBar backgroundColor="red" barStyle="light-content" />

            <Header />
            <View style={styles.buttonContainer}>
                <View style={styles.container}>

                    {/* My Cases Section */}
                    <View>
                        <TouchableOpacity style={styles.caseItem}
                            onPress={() => handlePress('MyCasePage')}
                        >
                            <View style={styles.caseLeft}>

                                <Image
                                    source={require('../assets/img/Title.png')} // Add your "My Cases" icon here
                                    style={styles.caseIcon}
                                />


                                <View>
                                    <Text style={styles.caseTitle}>My Cases</Text>
                                    <Text style={styles.caseDescription}>Show all of my Cases!</Text>
                                </View>
                            </View>
                            <View>
                                <Image
                                    source={require('../assets/img/arrow.png')} // Add arrow icon here
                                    style={styles.arrowIcon}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* Shared Cases Section */}
                    <TouchableOpacity style={styles.caseItem}
                        onPress={() => handlePress('Sharedcases')}
                    >
                        <View style={styles.caseLeft}>

                            <Image
                                source={require('../assets/img/share-button.png')} // Add your "Shared Cases" icon here
                                style={styles.caseIcon}
                            />


                            <View>
                                <Text style={styles.caseTitle}>Shared Cases</Text>
                                <Text style={styles.caseDescription}>Show all Cases Shared with me!</Text>
                            </View>
                        </View>
                        <View>
                            <Image
                                source={require('../assets/img/arrow.png')} // Re-use arrow icon
                                style={styles.arrowIcon}
                            />
                        </View>
                    </TouchableOpacity>
                </View>

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
            <Text style={styles.modalTitles}>Confirm Logout</Text>
            <Text style={styles.modalText}>Are you sure you want to log out?</Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleLogout}
              >
                <Text style={styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleLogoutCancel}
              >
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>


          


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
        marginLeft: 50,
    },
    menuIconContainer: {
        position: 'absolute',
        left: 10,
    },
    menuIcon: {
        width: 35,
        height: 35,
    },
    buttonContainer: {
        flex: 1,
        //justifyContent: 'space-evenly',
        //padding: 5,
    },
    footer: {
        height: 60,
        backgroundColor: '#b71c1c',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 100
    },
    footerButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerIcon: {
        width: 21,
        height: 21,
        tintColor: 'white',
    },
    footerIcon1: {
        width: 28,
        height: 28,
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

    //existing cases

    backIcon: {
        width: 24,
        height: 24,
        tintColor: '#ffffff',

    },
    caseItem: {
        marginHorizontal: 1,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    caseLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    caseIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
        tintColor:'#B71C1C',
    },
    caseTitle: {
        fontSize: 18,
        color: '#B71C1C',

    },
    caseDescription: {
        fontSize: 15,
        color: 'black',

    },
    arrowIcon: {
        width: 16,
        height: 16,

    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        zIndex: 1000,
      },
      modalTitles: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        color:'#fff',
    
      },
      modalText: {
        fontSize: 16,
        marginBottom: 15,
        color: 'black',
    
      },
      modalButtonContainer: {
        flexDirection: 'row',
      },
      modalButton: {
        borderRadius: 5,
        padding: 10,
        marginHorizontal: 10,
        backgroundColor: '#9d0808',
      },
      modalButtonText: {
        color: 'white',
        fontSize: 16,
      },
      ptext: {
        fontSize: 16,
        marginBottom: 20,
       
        textAlign: 'center',
        
    
      },
});

export default ExistingCases;