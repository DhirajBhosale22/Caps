import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  Alert,
  ScrollView,
  StyleSheet,
  Image
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Contacts from 'react-native-contacts';
import { BiometricAuth } from 'react-native-biometrics'; 
import { useForm, Controller } from 'react-hook-form';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import { Api } from '../providers/api/api';
import ProfileProvider from '../providers/profile/profile';
import { useLoader } from '../providers/loader/loader';
import Ionicons from 'react-native-vector-icons/Ionicons'; 

const SettingsPage = ({ navigation, route }) => {
  const [shareData, setShareData] = useState(false);
  const [fingerprintUnlock, setFingerprintUnlock] = useState(false);
  const [userType, setUserType] = useState(null);
  const [version, setVersion] = useState(null);
  const [hideFingerprint, setHideFingerprint] = useState(false);
  const [isTester, setIsTester] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const api = new Api('https://aggressionmanagement.com/api');
  const profileProvider = new ProfileProvider(api); // Initialize ProfileProvider
  const { showLoader, hideLoader } = useLoader(); // Use the loader context

  useEffect(() => {
    const initializeSettings = async () => {
      try {
        showLoader(); // Show the loader
  
        const shareDataVal = route.params?.share_data || 0;
        setShareData(shareDataVal === 1);
  
        const storedUserType = await AsyncStorage.getItem('client_id');
        setUserType(storedUserType);
  
        const storedShareData = await AsyncStorage.getItem('share_data');
        setShareData(storedShareData === '1');
  
        const storedFingerFlag = await AsyncStorage.getItem('finger_flag');
        setFingerprintUnlock(storedFingerFlag === '1');
  
        const storedHideFingerprint = await AsyncStorage.getItem('hide_finger');
        setHideFingerprint(storedHideFingerprint === '1');
  
        const storedUserTypeFlag = await AsyncStorage.getItem('user_type');
        setIsTester(storedUserTypeFlag === 'tester' || !storedUserTypeFlag);
  
        const appVersion = '1.0.0'; // Mock version, replace with actual version fetching logic
        setVersion(appVersion);
  
        // Load user info from AsyncStorage
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          const user = JSON.parse(storedUser);
          setUserInfo(user); // Set the user info state
        }
      } catch (error) {
        console.error('Error initializing settings', error);
      } finally {
        hideLoader(); // Hide the loader after initializing
      }
    };
  
    initializeSettings();
  }, [route.params]);

  const authenticateWithBiometrics = async () => {
    try {
      const { success } = await BiometricAuth.simpleAuth();
      if (success) {
        Alert.alert('Biometric Authentication', 'Authentication successful');
      } else {
        Alert.alert('Biometric Authentication', 'Authentication failed');
      }
    } catch (error) {
      console.error('Biometric authentication failed', error);
    }
  };

  const handleFingerprintChange = async (value) => {
    setFingerprintUnlock(value);
    const fingerFlag = value ? '1' : '0';
    await AsyncStorage.setItem('finger_flag', fingerFlag);

    // Authenticate with biometrics if enabled
    if (value) {
      await authenticateWithBiometrics();
    }
  };
  

  const onContactSelect = async () => {
    try {
      const contact = await Contacts.openContactForm();
      console.log('Selected contact:', contact);
    } catch (error) {
      console.error('Error selecting contact:', error);
    }
  };

  const handleShareDataChange = async (value) => {
    setShareData(value);
    const share = value ? '1' : '0';
    try {
      showLoader(); // Show loader before making API call
  
      // Ensure userInfo is loaded
      if (userInfo?.token) {
        const editInfo = {
          user_id: userInfo.user_id,
          token: userInfo.token,
          firstname: userInfo.firstname,
          surname: userInfo.surname,
          title: userInfo.title,
          organization: userInfo.organization,
          state: userInfo.state_id,
          country: userInfo.country_id,
          profession: userInfo.profession,
          profile_image: userInfo.image_path,
          share_data: share,
        };
  
        await profileProvider.edit_info(editInfo); // Update user info
        await AsyncStorage.setItem('sharedata', share);
  
        const storedUser = await AsyncStorage.getItem('user');
        const updatedUser = { ...JSON.parse(storedUser), share_data: share };
        await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
      } else {
        console.error('User information is missing');
      }
    } catch (error) {
      console.error('Error updating share data', error);
    } finally {
      hideLoader(); // Hide loader after the process completes
    }
  };
  

//   const handleFingerprintChange = async (value) => {
//     setFingerprintUnlock(value);
//     const fingerFlag = value ? '1' : '0';
//     await AsyncStorage.setItem('finger_flag', fingerFlag);
//   };

  const openTermsConditions = async () => {
    try {
      showLoader(); // Show loader before opening the browser
      const res = await api.get('/terms_and_conditions');
      const url = res.data.terms_and_conditions;
  
      if (url && await InAppBrowser.isAvailable()) {
        InAppBrowser.open(url, {
          toolbarColor: '#6200EE',
          secondaryToolbarColor: 'black',
          enableUrlBarHiding: true,
          showTitle: true,
          enableDefaultShare: true,
        });
      } else {
        Alert.alert('Browser not available or URL is invalid');
      }
    } catch (error) {
      console.error('Error opening terms and conditions', error);
      Alert.alert('Error', 'Failed to open terms and conditions. Please try again later.');
    } finally {
      hideLoader(); // Hide loader after opening the browser
    }
  };
  

  const handleOptOut = async () => {
    const confirmOptOut = async () => {
      try {
        showLoader(); // Show loader during opt-out process
  
        // Ensure userInfo has been set before making the request
        if (userInfo?.user_id && userInfo?.token) {
          await api.post('/optout_user', {
            user_id: userInfo.user_id,
            token: userInfo.token,
          });
          await AsyncStorage.clear();
          Alert.alert('Opted out successfully', '', [
            { text: 'OK', onPress: () => navigation.replace('Login') },
          ]);
        } else {
          Alert.alert('Error', 'User information is missing.');
        }
      } catch (error) {
        console.error('Error during opt-out', error);
      } finally {
        hideLoader(); // Hide loader after opt-out process
      }
    };
  
    Alert.alert(
      'OPT_OUT',
      'Are you sure you want to opt out?',
      [
        { text: 'NO', style: 'cancel' },
        { text: 'YES', onPress: confirmOptOut },
      ],
      { cancelable: true }
    );
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Setting</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {userType === '0' && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Sharing Cases</Text>
            <View style={styles.item}>
              <View style={styles.itemLeft}>
                <Image source={require('../assets/img/share-button.png')} style={styles.icon} />
                <Text style={styles.settingName}>Share Data</Text>
              </View>
              <Switch
                value={shareData}
                onValueChange={handleShareDataChange}
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={shareData ? '#f5dd4b' : '#f4f3f4'}
              />
            </View>
            {shareData && (
              <TouchableOpacity
                style={styles.item}
                onPress={() => navigation.navigate('ShareGroupScreen')}
              >
                <View style={styles.itemLeft}>
                  <Image source={require('../assets/img/userc.png')} style={styles.icon} />
                  <Text style={styles.settingName}>Sharing Group</Text>
                </View>
                <Ionicons name="chevron-forward-outline" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        )}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>System</Text>
          {!hideFingerprint && (
            <View style={styles.item}>
              <View style={styles.itemLeft}>
                <Image source={require('../assets/img/fingerprint.png')} style={styles.icon} />
                <Text style={styles.settingName}>Fingerprint Unlock</Text>
              </View>
              <Switch
                value={fingerprintUnlock}
                onValueChange={handleFingerprintChange}
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={fingerprintUnlock ? '#f5dd4b' : '#f4f3f4'}
              />
            </View>
          )}
          <TouchableOpacity
            style={styles.item}
            onPress={openTermsConditions}
          >
            <View style={styles.itemLeft}>
              <Image source={require('../assets/img/bookmark.png')} style={styles.icon} />
              <Text style={styles.settingName}>Terms and Conditions</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={24} color="#ccc" />
          </TouchableOpacity>
          {userType === '0' && (
            <TouchableOpacity style={styles.item} onPress={handleOptOut}>
              <View style={styles.itemLeft}>
                <Image source={require('../assets/img/bookmark.png')} style={styles.icon} />
                <Text style={styles.settingName}>OPT_OUT</Text>
              </View>
              <Ionicons name="chevron-forward-outline" size={24} color="#ccc" />
            </TouchableOpacity> //
          )}
        </View>
        <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Version Details</Text>
          <View style={styles.item}>
            <View style={styles.itemLeft}>
              <Image source={require('../assets/img/bookmark.png')} style={styles.icon} />
              <Text style={styles.settingName}>App Version</Text>
            </View>
            <Text style={styles.versionText}>{version}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    backgroundColor: '#9d0808',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  settingName: {
    fontSize: 16,
  },
  versionText: {
    fontSize: 16,
    color: '#666',
  },
});

export default SettingsPage;