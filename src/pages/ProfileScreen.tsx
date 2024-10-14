
// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   ActivityIndicator,
//   Alert,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from '@react-navigation/native';
// import ProfileProvider from '../providers/profile/profile';
// import { Api } from '../providers/api/api';

// const ProfileScreen: React.FC = () => {
//   const [userInfo, setUserInfo] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const navigation = useNavigation();
//   const api = new Api('http://aggressionmanagement.com/api');
//   const profileProvider = new ProfileProvider(api);

//   useEffect(() => {
//     const fetchStoredUser = async () => {
//       try {
//         const storedUser = await AsyncStorage.getItem('user');
//         if (storedUser) {
//           const parsedUser = JSON.parse(storedUser);
//           fetchUserInfo(parsedUser);
//         } else {
//           navigation.navigate('LoginScreen');
//         }
//       } catch (error) {
//         console.error('Failed to retrieve user from storage:', error);
//         navigation.navigate('LoginScreen');
//       }
//     };

//     fetchStoredUser();
//   }, []);

//   const fetchUserInfo = async (storedUser: any) => {
//     setLoading(true);
//     const userInfo = {
//       user_id: storedUser.user_id,
//       token: storedUser.token,
//     };

//     try {
//       const response = await profileProvider.user_info(userInfo);

//       if (response && response.status === 200) {
//         const data = response.data;
//         console.log('Received user data:', data);
//         setLoading(false);

//         if (data.subscriptionFlag === 1 && storedUser.client_id === '0') {
//           if (data.user_type === 'tester') {
//             Alert.alert(
//               'Subscription Expired',
//               'Your 60 days Free subscription ended. Please subscribe.',
//               [
//                 { text: 'Cancel', onPress: () => logout() },
//                 { text: 'Continue', onPress: () => navigation.navigate('SubscriptionPage') },
//               ]
//             );
//           } else {
//             navigation.navigate('SubscriptionPage');
//           }
//         } else if (data.msg === "Your account is deactivated, please contact support.") {
//           logout();
//         } else {
//           setUserInfo({
//             firstname: data.firstname,
//             surname: data.surname,
//             profession: data.profession,
//             organization: data.organization,
//             profile_image: data.profile_image,
//             country: data.country,
//             state: data.state,
//           });
//         }
//       } else {
//         setLoading(false);
//         Alert.alert('Error', `Server error: ${response.status}. Please try again later.`);
//       }
//     } catch (error) {
//       setLoading(false);
//       handleNetworkError(error);
//     }
//   };

//   const handleNetworkError = (error: any) => {
//     if (error.response) {
//       Alert.alert('Error', `Server error: ${error.response.status}. Please try again later.`);
//     } else if (error.request) {
//       Alert.alert('Error', 'No response from server. Please try again later.');
//     } else if (error.message === 'Network Error') {
//       Alert.alert('Error', 'No internet connection, make sure Wi-Fi or cellular data is turned on, then try again.');
//     } else {
//       Alert.alert('Error', 'An unexpected error occurred. Please try again later.');
//     }
//   };

//   const logout = async () => {
//     try {
//       await AsyncStorage.removeItem('user');
//       navigation.navigate('LoginScreen');
//     } catch (error) {
//       console.error('Failed to log out:', error);
//     }
//   };

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator size="large" color="#007BFF" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Image
//         source={{ uri: userInfo?.profile_image || 'http://safetnet.site/Aggression_management/profile_images/default_profile.png' }}
//         style={styles.profileImage}
//         onError={() =>
//           setUserInfo({
//             ...userInfo,
//             profile_image: 'http://safetnet.site/Aggression_management/profile_images/default_profile.png',
//           })
//         }
//       />
//       <Text style={styles.name}>{userInfo?.firstname} {userInfo?.surname}</Text>
//       <Text style={styles.occupation}>{userInfo?.profession || ''}</Text>
    
//       <Text style={styles.location}>{userInfo?.state || ''}, {userInfo?.country || ''}</Text>
//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditProfileScreen')}>
//         <Text style={styles.buttonText}>Edit Profile</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyGroupScreen')}>
//         <Text style={styles.buttonText}>My Groups</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={logout}>
//         <Text style={styles.buttonText}>Logout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginBottom: 16,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 8,
//     color: 'black',
//   },
//   occupation: {
//     fontSize: 18,
//     marginBottom: 8,
//   },
//   location: {
//     fontSize: 16,
//     marginBottom: 16,
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginVertical: 8,
//     width: '100%',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

// export default ProfileScreen;
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
  ScrollView,
  Dimensions,
  Platform,
  StatusBar,
  Modal, // Added import for Modal
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import ProfileProvider from '../providers/profile/profile';
import { Api } from '../providers/api/api';
import { useLoader } from '../providers/loader/loader';



const { height } = Dimensions.get('window');

const ProfileScreen: React.FC = () => {
  const [showFooter, setShowFooter] = useState(true);
  
  const [userInfo, setUserInfo] = useState<any>(null);

  const navigation = useNavigation();
  const api = new Api('https://aggressionmanagement.com/api');
  const profileProvider = new ProfileProvider(api);

  const { showLoader, hideLoader } = useLoader();

  useEffect(() => {
    const fetchStoredUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          fetchUserInfo(parsedUser);
        } else {
          navigation.navigate('LoginScreen');
        }
      } catch (error) {
        console.error('Failed to retrieve user from storage:', error);
        navigation.navigate('LoginScreen');
      }
    };

    fetchStoredUser();
  }, []);

  const fetchUserInfo = async (storedUser: any) => {
    showLoader(); // Show the loader
    const userInfo = {
      user_id: storedUser.user_id,
      token: storedUser.token,
    };

    try {
      const response = await profileProvider.user_info(userInfo);

      if (response && response.status === 200) {
        const data = response.data;
        console.log('Received user data:', data);
      hideLoader();

        if (data.subscriptionFlag === 1 && storedUser.client_id === '0') {
          if (data.user_type === 'tester') {
            Alert.alert(
              'Subscription Expired',
              'Your 60 days Free subscription ended. Please subscribe.',
              [
                { text: 'Cancel', onPress: () => logout() },
                { text: 'Continue', onPress: () => navigation.navigate('SubscriptionPage') },
              ]
            );
          } else {
            navigation.navigate('SubscriptionPage');
          }
        } else if (data.msg === "Your account is deactivated, please contact support.") {
          logout();
        } else {
          setUserInfo({
            firstname: data.firstname,
            surname: data.surname,
            profession: data.profession,
            organization: data.organization,
            profile_image: data.profile_image,
            country: data.country,
            state: data.state,
            myCases: data.my_cases_count, 
            myShared: data.shared_cases_count,
          });
        }
      } else {
        hideLoader();
        Alert.alert('Error', `Server error: ${response.status}. Please try again later.`);
      }
    } catch (error) {
      hideLoader();
      handleNetworkError(error);
    }
  };

  const handleNetworkError = (error: any) => {
    if (error.response) {
      Alert.alert('Error', `Server error: ${error.response.status}. Please try again later.`);
    } else if (error.request) {
      Alert.alert('Error', 'No response from server. Please try again later.');
    } else if (error.message === 'Network Error') {
      Alert.alert('Error', 'No internet connection, make sure Wi-Fi or cellular data is turned on, then try again.');
    } else {
      Alert.alert('Error', 'An unexpected error occurred. Please try again later.');
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  // if (loading) {
  //   return (
  //     <View style={styles.container}>
  //       <ActivityIndicator size="large" color="#007BFF" />
  //     </View>
  //   );
  // }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="#9d0808"
      />
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image style={styles.backIcon} source={require('../assets/img/backnew.png')} />
      </TouchableOpacity>
      <View style={styles.stickyHeader}>
        <Text style={styles.stickyHeaderText}>Profile</Text>
      </View>
      <View style={styles.header}>
        <Image
          style={styles.backgroundImage}
          source={require('../assets/img/backgro.jpg')}
        />
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.profileImage}
            source={{ uri: userInfo?.profile_image || 'https://safetnet.site/Aggression_management/profile_images/default_profile.png' }}
            onError={() =>
              setUserInfo({
                ...userInfo,
                profile_image: 'https://safetnet.site/Aggression_management/profile_images/default_profile.png',
              })
            }
          />
        </View>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.name}>{userInfo?.firstname || 'N/A'} {userInfo?.surname || 'N/A'}</Text>
        <Text style={styles.details}>{userInfo?.profession || ''}</Text>
        <View style={styles.location}>
          <Text style={styles.details}>{userInfo?.state || ''}</Text>
          <Text style={styles.details}>, {userInfo?.country || ''}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyCasePage')}>
            <Text style={styles.buttonText}>My Cases {"\n"}      {userInfo?.myCases || 0}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyShared')}>
            <Text style={styles.buttonText}>My Shared {"\n"}       {userInfo?.myShared || 0}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttonFullWidth} onPress={() => navigation.navigate('EditProfile')}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFullWidth} onPress={() => navigation.navigate('SharegroupPage')}>
          <Text style={styles.buttonText}>My Groups</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFullWidth} onPress={() => navigation.navigate('ChangePasswordScreen')}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
      </View>
   
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 40 : 20,
    left: 10,
    zIndex: 3,
    
  },
  backIcon: {
    width: 22,
    height: 22,
    tintColor: 'white',
    marginTop:5,
  },
  stickyHeader: {
    backgroundColor: '#9d0808',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    zIndex: 2,
  },
  stickyHeaderText: {
    fontSize: 20,
    color: '#fff',
    
  },
  header: {
    width: '100%',
    height: height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 100 : 70,
    paddingBottom: 100,
    marginTop: -7,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  profileImageContainer: {
    marginTop: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
  },
  userInfo: {
    alignItems: 'center',
    marginTop: 0,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 18,
    color: '#666',
  },
  location: {
    flexDirection: 'row',
  },
  body: {
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 20,
    borderTopWidth:1,
    
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop:10,
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    padding: 25,
    backgroundColor: '#9d0808',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5,
    maxWidth: '48%',
  },
  buttonFullWidth: {
    width: '100%',
    padding: 15,
    backgroundColor: '#9d0808',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
 
});

export default ProfileScreen;