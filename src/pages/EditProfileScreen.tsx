
import React, { useEffect, useState } from 'react';
import {
  View, Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  StyleSheet,
  ScrollView,
  Modal,
  FlatList,
  Pressable,
  StatusBar,
  BackHandler,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';
import ImagePicker from 'react-native-image-picker';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Api } from '../providers/api/api';
import ProfileProvider from '../providers/profile/profile';
import CountryProvider from '../providers/country/country';
import * as Yup from 'yup';
import User from '../providers/user/User';
import { CheckBox } from 'react-native-elements';

import Icon from 'react-native-vector-icons/Entypo';
import { BlurView } from '@react-native-community/blur';
import { Linking } from 'react-native';


const API_URL = 'https://aggressionmanagement.com/api';
const CustomPicker = ({ placeholder, items, selectedValue, setSelectedValue }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (item) => {
    setSelectedValue(item);
    setIsVisible(false);
  };


  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <View style={styles.pickerContainer}>
      <TouchableOpacity onPress={() => setIsVisible(true)} style={styles.pickerButton}>
        <View style={styles.labelContainer}>
          <Text style={styles.pickerText}>{placeholder}</Text>
        </View>
        <View style={styles.valueContainer}>
          <Text
            style={styles.pickerTextValue}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {selectedValue ? selectedValue.name : "selectedValue"}
          </Text>
        </View>
        <Image source={require('../assets/img/dropdownarrow.png')} style={styles.dropdownIcon} />
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={isVisible}
        animationType="slide"
        onRequestClose={() => setIsVisible(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setIsVisible(false)}>
          <View style={styles.modalContent}>
            <View style={styles.header}>
              <View style={styles.headerTop}>
                <Text style={styles.countryTitle}>{placeholder}</Text>
                <TouchableOpacity onPress={() => setIsVisible(false)} style={styles.closeButton}>
                  <Image source={require('../assets/img/cross.png')} style={styles.close} />
                </TouchableOpacity>
              </View>

              <View style={styles.searchInputContainer}>
              <Image
                  source={require('../assets/img/search.png')}
                  style={styles.searchicon} />
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search"
                  placeholderTextColor={'grey'}
                  value={searchQuery}
                  onChangeText={handleSearch}
                />
              </View>
            </View>

            <FlatList
              data={filteredItems}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleSelect(item)} // Handle selection
                  style={styles.item}
                >
                  <Image
                    source={
                      selectedValue?.id === item.id
                        ? require('../assets/img/checklist.png') // Image for checked state
                        : require('../assets/img/circle.png') // Image for unchecked state
                    }
                    style={styles.radioImage} // Style for the image
                  />
                  <Text style={styles.itemText}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const api = new Api(API_URL);
const profileProvider = new ProfileProvider(api);
const countryProvider = new CountryProvider(api);

const EditProfileScreen = () => {
  const { control, handleSubmit, getValues, setValue, watch, trigger, formState: { errors } } = useForm();
  const [backModalVisible, setBackModalVisible] = useState(false);


  const [loading, setLoading] = useState(false);
  const [userInformation, setUserInformation] = useState(null);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const [profileImage, setProfileImage] = useState(null); // To store selected image
  const navigation = useNavigation();
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [showFooter, setShowFooter] = useState(true);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [formChanged, setFormChanged] = useState(false);
  const fname = watch('fname');
  const lname = watch('lname');
  const email = watch('email');
  const country = watch('country');
  const state = watch('state');
  const title = watch('title');
  const organization = watch('organization');
  const Profession = watch('profession');

  const [isSaveModalVisible, setSaveModalVisible] = useState(false);
 
  useEffect(() => {
    const subscription = watch(() => {
      setFormChanged(true); // Set to true if any field changes
    });
    return () => subscription.unsubscribe(); // Cleanup subscription
  }, [watch]);

  
  const backAction = () => {
    if (formChanged) {
      setBackModalVisible(true); // Show confirmation dialog
      return true; // Prevent default back action
    } else {
      return false; // Allow default back action if no changes
    }
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove(); // Clean up the event listener
  }, [formChanged]);

  const handleBackConfirmation = (action) => {
    if (action === "discard") {
      navigation.goBack(); // Discard changes and go back
    } else if (action === "save") {
      handleSubmit(onSubmit)(); // Save changes
    }
    setBackModalVisible(false); // Close the modal
  };


  // const isFormValid = watch('fname') && watch('lname') && watch('title');
  const isFormValid = () => {
    const values = getValues();
    return (
      values.fname?.trim() &&
      values.lname?.trim() &&
      values.title?.trim() &&
      selectedCountry &&
      selectedState &&
      values.Profession?.trim() &&
      values.Organization?.trim() // Ensure this is included
    );
  };

  useEffect(() => {
    const isComplete = isFormValid();
    console.log('Form values:', getValues()); // Log the form values
    console.log('Is form complete:', isComplete); // Log if the form is complete
    setIsFormComplete(isComplete);
  }, [fname, lname, country, state, title, organization, Profession, selectedCountry, selectedState]);
  const [modalMessage, setModalMessage] = useState({
    title: ' ',
    message: ' ',
  });
  useEffect(() => {
    fetchUserInfo();
    loadCountries();
    trigger();
  }, []);
  useEffect(() => {
    if (userInformation && countries.length > 0 && !selectedCountry) {
      const userCountry = countries.find((c) => c.name === userInformation.country);
      if (userCountry) {
        setSelectedCountry(userCountry); // Set the user's country as selected
        handleCountryChange(userCountry); // Load states for the user's country
      }
    }
  }, [userInformation, countries]);

  useEffect(() => {
    if (userInformation && selectedCountry && states.length > 0 && !selectedState) {
      const userState = states.find((s) => s.name === userInformation.state);
      if (userState) {
        setSelectedState(userState); // Set the user's state as selected
      }
    }
  }, [userInformation, states]);

  const fetchUserInfo = async () => {
    setLoading(true);
    try {
      const userData = await AsyncStorage.getItem('user');
      const { user_id, token } = userData ? JSON.parse(userData) : {};
  
      if (!user_id || !token) {
        Alert.alert('Error', 'User  not authenticated.');
        return;
      }
  
      const response = await profileProvider.user_info({ user_id, token });
      const userDataResponse = response.data;
  
      setUserInformation(userDataResponse);
      setValue('fname', userDataResponse.firstname);
      setValue('lname', userDataResponse.surname);
      setValue('email', userDataResponse.email);
      setValue('title', userDataResponse.title);
      setValue('Organization', userDataResponse.organization);
      setValue('Profession', userDataResponse.profession);
      setValue('country', userDataResponse.country);
      setValue('state', userDataResponse.state);
      setValue('subscriptionEndDate', userDataResponse.subscriptionEnd_date);
  
      // Retrieve the profile picture path from AsyncStorage
       setProfileImage(userDataResponse.image_path || 'https://safetnet.site/Aggression_management/profile_images/default_profile.png'); // Set default image URL if not provided
      if (userDataResponse.country) {
        const country = countries.find(c => c.name === userDataResponse.country);
        if (country) {
          handleCountryChange(country);
        }
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
      Alert.alert('Error', 'Failed to fetch user information.');
    } finally {
      setLoading(false);
    }
  };


  const loadCountries = async () => {
    try {
      const response = await countryProvider.country();
      const countriesData = response.data.map((country) => ({
        id: country.country_id,
        name: country.country_name,
      }));
      setCountries(countriesData);
    } catch (error) {
      console.error('Error loading countries:', error);
      Alert.alert('Error', 'Failed to load countries.');
    }
  };

  const loadStates = async (countryId) => {
    try {
      const response = await countryProvider.state(countryId);
      const statesData = response.data.map((state) => ({
        id: state.state_id,
        name: state.state_name,
      }));
      setStates(statesData);
      setIsEnabled(true);
    } catch (error) {
      console.error('Error loading states:', error);
      Alert.alert('Error', 'Failed to load states.');
    }
  };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    loadStates(country.id);
    setValue('country', country.name); // Store the country name in the form
  };

  const handleImagePick = async () => {
    launchImageLibrary({ mediaType: 'photo', includeBase64: true }, async (response) => {
      if (response.didCancel) {
        console.log('User  cancelled image picker');
      } else if (response.error) {
        Alert.alert('Error', 'Image selection failed.');
      } else {
        const selectedImage = response.assets[0];
        console.log('Selected image details:', selectedImage);
        
        // Update the profile image and set profile_picture to the selected image Base64
        setProfileImage(`data:${selectedImage.type};base64,${selectedImage.base64}`); // Convert to Base64
        setValue('profile_picture', `data:${selectedImage.type};base64,${selectedImage.base64}`); // Update the form value with the new image Base64
  
        // Optionally save the selected image path to AsyncStorage if needed
        await AsyncStorage.setItem('profile_picture', `data:${selectedImage.type};base64,${selectedImage.base64}`);
      }
    });
  };


  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const userData = await AsyncStorage.getItem('user');
      const { user_id, token } = userData ? JSON.parse(userData) : {};
      if (!user_id || !token) {
        Alert.alert('Error', 'User  not authenticated.');
        return;
      }
  
      const updatedData = {
        user_id, // Include user_id
        token, // Include token
        firstname: data.fname,
        surname: data.lname,
        title: data.title,
        organization: data.Organization,
        state: selectedState?.id ?? userInformation.state,
        country: selectedCountry?.id ?? userInformation.country,
        profession: data.Profession,
        profile_image: profileImage, // Use the Base64 image here
      };
      console.log('Sending updated data to the server:', updatedData);
  
      await profileProvider.edit_info(updatedData);
      setSaveModalVisible(true);
    } catch (error) {
      console.error('Error updating profile:', error);
      Alert.alert('Error', 'Failed to update profile.');
    } finally {
      setLoading(false);
    }
  };



  if (loading) {
    return <ActivityIndicator size={130} color="brown"
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />;
  }

  const handleLogout = () => {
    setLogoutModalVisible(false);
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }], // Navigate to the login screen and reset the stack
    });
  };

  const handleLogoutCancel = () => {
    setLogoutModalVisible(false);
  };




  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#9d0808" />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={(backAction)}>
            <Image source={require('../assets/img/backarrow.png')} style={styles.backIcon} resizeMode="cover" />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { flex: 1, textAlign: 'center' }]}>Edit Profile</Text>
        </View>

        <View style={styles.profileImageWrapper}>
          <TouchableOpacity onPress={handleImagePick}>
            {profileImage ? (
              <Image
                source={{ uri: profileImage }}
                style={styles.profileImage}
              />
            ) : (
              <Image
                source={{ uri: 'https://safetnet.site/Aggression_management/profile_images/default_profile.png' }}
                style={styles.profileImage}
              />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.formContainer}>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.inputContainer}>
                <Image source={require('../assets/img/contact-us.png')} style={styles.icon} />
                <Text style={styles.subTitle}>E-mail</Text>
                <TextInput
                  style={[styles.textInput, { color: 'black' }]}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  editable={false}
                />
              </View>
            )}
          />

          <Controller
            control={control}
            name="fname"
            rules={{ required: 'This field cannot be empty ' }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.inputContainer}>
                <Image source={require('../assets/img/user.png')} style={styles.icon} />
                <Text style={styles.subTitle}>First Name</Text>
                <TextInput
                  style={[ styles.textInput, { color: 'black' }, errors.fname]}
                  onBlur={() => {
                    onBlur();
                    trigger('fname'); // Trigger validation when the field loses focus
                  }}
                  onChangeText={(text) => {
                    const alphabeticText = text.replace(/[^A-Za-z]/g, '');
                    onChange(alphabeticText);
                    trigger('fname'); // Trigger validation on change
                  }}
                  value={value}
                />

              </View>
            )}
          />
          {errors.fname && <Text style={styles.errorText}>{errors.fname.message}</Text>}

          <Controller
            control={control}
            name="lname"
            rules={{ required: 'This field cannot be empty' }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.inputContainer}>
                <Image source={require('../assets/img/user.png')} style={styles.icon} />
                <Text style={styles.subTitle}>Last Name</Text>
                <TextInput
                   style={[ styles.textInput, { color: 'black' }, errors.lname]}
                  onBlur={() => {
                    onBlur();
                    trigger('lname'); // Trigger validation when the field loses focus
                  }}
                  onChangeText={(text) => {
                    const alphabeticText = text.replace(/[^A-Za-z]/g, '');
                    onChange(alphabeticText);
                    trigger('lname'); // Trigger validation on change
                  }}
                  value={value}
                />

              </View>
            )}
          />
          {errors.lname && <Text style={styles.errorText}>{errors.lname.message}</Text>}

          <Controller
            control={control}
            name="title"
            rules={{ required: 'This field cannot be empty' }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.inputContainer}>
                <Image source={require('../assets/img/Title.png')} style={styles.icon} />
                <Text style={styles.subTitle}>Title</Text>
                <TextInput
                  style={[styles.textInput, { color: 'black' }, errors.title]}
                  onBlur={() => {
                    onBlur();
                    trigger('title'); // Trigger validation when the field loses focus
                  }}
                  onChangeText={onChange}
                  value={value}
                />

              </View>
            )}
          />
          {errors.title && <Text style={styles.errorText}>{errors.title.message}</Text>}

          <Controller
            control={control}
            name="Organization"
            rules={{ required: 'This field cannot be empty' }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.inputContainer}>
                <Image source={require('../assets/img/Title.png')} style={styles.icon} />
                <Text style={styles.subTitle}>Organization</Text>
                <TextInput
                  style={[styles.textInput, { color: 'black' }, errors.Organization]}
                  onBlur={() => {
                    onBlur();
                    trigger('Organization'); // Trigger validation when the field loses focus
                  }}
                  onChangeText={onChange}
                  value={value}
                />

              </View>
            )}
          />
          {errors.Organization && <Text style={styles.errorText}>{errors.Organization.message}</Text>}

          <View style={styles.inputContainer1}>
            <Image source={require('../assets/img/state.png')} style={styles.icon4} />
            <Text style={styles.subTitle}>Country</Text>
            <Controller
              control={control}
              name="country"
              render={({ field: { onChange, value } }) => (

                <CustomPicker
                placeholder={<Text style={{ color: '#f5f5f5' }}>Country</Text>}
                  items={countries}
                  selectedValue={selectedCountry}
                  setSelectedValue={(item) => {
                    onChange(item.id); // Update form value with country ID
                    handleCountryChange(item); // Load states when country changes
                  }}
                />
              )}
            />
          </View>

          <View style={styles.inputContainer1}>
            <Image source={require('../assets/img/state.png')} style={styles.icon4} />
            <Text style={styles.subTitle}>State</Text>
            <Controller
              control={control}
              name="state"
              render={({ field: { onChange, value } }) => (
                <CustomPicker
                placeholder={<Text style={{ color: '#f5f5f5' }}>State</Text>}
                  items={states}
                  selectedValue={selectedState}

                  // Find selected state object
                  setSelectedValue={(item) => {
                    onChange(item.id); // Update form value with state ID
                    setSelectedState(item); // Update selected state
                  }}
                />
              )}
            />
          </View>

          <Controller
            control={control}
            name="Profession"
            rules={{ required: 'This field cannot be empty' }}

            render={({ field: { onChange, onBlur, value } }) => (
              <View style={styles.inputContainer}>
                <Image source={require('../assets/img/Title.png')} style={styles.icon} />
                <Text style={styles.subTitle}>Profession</Text>
                <TextInput
                  style={[styles.textInput, { color: 'black' }, errors.Profession]}
                  onBlur={() => {
                    onBlur();
                    trigger('Profession'); // Trigger validation when the field loses focus
                  }}
                  onChangeText={onChange}
                  value={value}
                />

              </View>
            )}
          />
          {errors.Profession && <Text style={styles.errorText}>{errors.Profession.message}</Text>}


          <Text style={{ fontWeight: '400',  fontSize: wp('3.4%'), color:'black' }} >Subscription</Text>
          <Controller
            control={control}
            name="subscriptionEndDate"
            render={({ field: { onChange, onBlur, value } }) => (

              <View style={styles.inputContainer2}>
                <View style={styles.iconAndSubtitleContainer}>
                  <Image source={require('../assets/img/info.png')} style={styles.icon2} />

                  <Text style={styles.subTitle2}>Subscription</Text>
                </View>
                <TextInput
                 style={[styles.textInput2, { color: 'black' }]} 
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  editable={false}
                />
              </View>
            )}
          />


          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.createButton,
                { backgroundColor: isFormComplete ? '#ae0c00' : '#ae0c00' },
                !isFormComplete && styles.blurEffect, // Apply blur effect if the form is incomplete
              ]}
              onPress={handleSubmit(onSubmit)}
              disabled={!isFormComplete}
            >
              <Text style={styles.buttonText}>SAVE</Text>
            </TouchableOpacity>
          </View>


        </View>
      </ScrollView>
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




      <Modal
        animationType="slide"
        transparent={true}
        visible={isSaveModalVisible}
        onRequestClose={() => setSaveModalVisible(false)}
      >
        <View style={styles.modalOverlay1}>

          <View style={styles.modalContent1}>
          <Text style={styles.modalTitles}>Caps</Text>
            <Text style={styles.modalText1}>Profile updated successfully!</Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setSaveModalVisible(false);
                  navigation.navigate('home'); // Navigate to a specific screen
                }}
              >
                <Text style={styles.modalButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>


      <Modal
        animationType="slide"
        transparent={true}
        visible={backModalVisible}
        onRequestClose={() => setBackModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitles}>Unsaved Changes</Text>
            <Text style={styles.modalText}>Do you want to save your changes before leaving?</Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => handleBackConfirmation("save")}
              >
                <Text style={styles.modalButtonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => handleBackConfirmation("discard")}
              >
                <Text style={styles.modalButtonText}>Discard</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      
    </View>
  );
};


import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  itemText: {
    fontSize: wp('3.6%'), // Adjust font size based on screen width
    color: 'black',
    marginTop: hp('2%'),
  },

  scrollContainer: {
    flexGrow: 1,
    padding: wp('10%'), // Adjust padding based on screen width
    backgroundColor: '#f8f9fa',
  },
  headerContainer: {
    position: 'absolute',
    top: hp('0%'), // position from the top
    left: wp('0%'), // position from the left
    right: wp('0%'), // position from the right
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp('4%'), // Adjust padding based on screen width
    backgroundColor: '#9d0808',
  },
  backButton: {
    marginRight: wp('0.5%'), // Adjust margin based on screen width
  },
  backIcon: {
    width: wp('7%'), // Adjust size based on screen width
    height: wp('7%'), // Adjust size based on screen width
    tintColor: 'white'
  },
  blur: {
    opacity: 0.5,
    backgroundColor: 'red',
    padding: wp('2%'), // Adjust padding based on screen width
    borderRadius: wp('2%'), // Adjust border radius based on screen width
    width: wp('45%'), // Adjust width based on screen width
    height: hp('6%'), // Adjust height based on screen height
  },
  headerTitle: {
    fontSize: wp('5.5%'), // Adjust font size based on screen width
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  input: {
    borderRadius: wp('1%'), // Adjust border radius based on screen width
    height: hp('6%'), // Adjust height based on screen height
    fontSize: wp('3.2%'), // Adjust font size based on screen width
  },
  dropdownIcon: {
    width: wp('3.5%'), // Adjust size based on screen width
    height: wp('3.5%'), // Adjust size based on screen width
    tintColor: 'black',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp('1%'), // Adjust margin based on screen height
    backgroundColor: '#f2f2f2',
    paddingVertical: hp('0.5%'), // Adjust padding based on screen height
    paddingHorizontal: wp('2.5%'), // Adjust padding based on screen width
    borderRadius: wp('1%'), // Adjust border radius based on screen width
    flex: 2,
    position: 'relative',
    marginLeft: 'auto',
    padding: wp('2%'), // Adjust padding based on screen width
    gap: wp('1%'), // Adjust gap based on screen width
    alignSelf: 'center',
  },

  icon: {
    width: wp('4.5%'), // Adjust size based on screen width
    height: wp('4.5%'), // Adjust size based on screen width
    marginRight: wp('2%'), // Adjust margin based on screen width
    tintColor: '#9d0808',
  },
  icon4: {
    width: wp('4%'), // Adjust size based on screen width
    height: wp('4%'), // Adjust size based on screen width
    marginRight: wp('2%'), // Adjust margin based on screen width
    tintColor: '#9d0808',
  },

  textContainer: {
    flex: 1,
    position: 'relative',
    marginLeft: 'auto',
    padding: wp('2%'), // Adjust padding based on screen width
    backgroundColor: '#f0f0f0',
    borderRadius: wp('2%'), // Adjust border radius based on screen width
    marginBottom: hp('1%'), // Adjust margin based on screen height
  },

  subTitle: {
    fontSize: wp('3.3%'), // Adjust font size based on screen width
    color: 'black',
    marginRight: wp('0.5%'), // Adjust margin based on screen width
    width: '24%'
  },
  errorText: {
    color: 'red',
    fontSize: wp('3.5 %'), // Adjust font size based on screen width
    marginTop: -hp('0.5%'), // Adjust margin based on screen height
    marginLeft: wp('2%'), // Adjust margin based on screen width
  },
  blurEffect: {
    opacity: 0.5, // Reduce the opacity to create a blur effect
    transform: [{ scale: 0.95 }], // Optional: slightly reduce the size
  },

  textInput: {
    fontSize: wp('3.4%'),
    flex: 1, // Ensures the text input takes up all available space
    borderColor: '#f0f0f0',
    borderWidth: 1,
    marginLeft: wp('4%'), // Adjust margin based on screen width
    padding: hp('1%'), // Adjust padding based on screen height
    textAlign: 'left',
    width: '100%',
  },

  profileImageWrapper: {
    alignItems: 'center',
    marginBottom: hp('1%'), // Slightly larger margin for spacing
   
  },
  profileImage: {
    width: wp('25%'), // Larger, rounder profile image
    height: wp('25%'),
    borderRadius: wp('12%'),
    borderColor: '#f0f0f0', // Add light border similar to Ionic
    borderWidth: 2,
    shadowColor: '#000', // Subtle shadow for the image
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginTop: hp('5%'),
  },
  profileImagePlaceholder: {
    width: wp('30%'),
    height: wp('30%'),
    backgroundColor: '#ccc',
    borderRadius: wp('15%'),
    justifyContent: 'center',
     marginTop: hp('5%'),
    alignItems: 'center',
  },
  formContainer: {
    width: '117%',
    right: wp('7%'),
    top: hp('1%'), // Slightly more compact margin for a cleaner look
  },
  item: {
    marginBottom: hp('2%'), // Reduce bottom margin for a more compact form
  },
  radioImage: {
    width: wp('4%'), // Adjust size as needed
    height: wp('4%'),
    marginTop: hp('2%'),
    marginRight: wp('6%'), // Space between image and text
  },

  picker: {
    height: hp('6%'),
    width: '50%',
    color: '#000', // Default text color for picker
    backgroundColor: '#fff', // White background for pickers
    borderRadius: wp('2%'), // Rounded corners to match input fields
    borderColor: '#ccc', // Border similar to input fields
    borderWidth: 1,
    left: wp('30%'), // Add some space between text and picker
  },
  button: {
    backgroundColor: '#007bff', // Ionic's signature blue button
    paddingVertical: hp('1.5%'), // Adjust padding based on screen height
    borderRadius: wp('2%'), // Rounded button corners
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000', // Subtle shadow for button
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  buttonText: {
    color: 'white', // White text for contrast on blue button
    fontSize: wp('4%'), // Standard button font size
    fontWeight: '600', // Semi-bold text
  },

  footer: {
    height: hp('8%'),
    backgroundColor: '#b71c1c',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerIcon: {
    width: wp('6%'),
    height: wp('6%'),
    tintColor: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: wp('5%'),
    backgroundColor: 'white',
    borderRadius: wp('2%'),
    padding: hp('4%'),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalTitles: {
    fontSize: wp('4.5%'),
    marginBottom: hp('2%'),
    color: 'black'
  },
  modalText: {
    fontSize: wp('4%'),
    marginBottom: hp('2%'),
    color: 'grey',
  },
  modalText1: {
    fontSize: wp('4%'),
    marginBottom: hp('2%'),
    color: 'grey',
  },
  modalButtonContainer: {
    flexDirection: 'row',
  },
  modalButton: {
    borderRadius: wp('1%'),
    padding: hp('2%'),
    marginHorizontal: wp('2%'),
    backgroundColor: '#9d0808',
  },
  modalButtonText: {
    color: 'white',
    fontSize: wp('4%'),
  },
  ptext: {
    fontSize: wp('4.5%'),
    marginBottom: hp('2%'),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: hp('2%'),
    marginBottom: hp('6%'),
  },
  createButton: {
    backgroundColor: 'red',
    borderRadius: wp('1%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('8%'),
    width: wp('50%'), // Set your desired width here
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerContainer: {
    flex: 1,
    borderRadius: wp('2%'),
    borderWidth: 1,
    borderColor: '#f0f0f0',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1%'),
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  pickerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CountrypickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickerText: {
    fontSize: wp('3.5%'),
    color: '#999',
  },
  pickerTextnew: {
    fontSize: wp('4%'),
    color: '#000',
  },
  labelContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickerTextcon: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#f5f5f5',
  },
  pickerTextValue: {
    color: '#000',
    fontSize: wp('3.5%'),
    marginRight: wp('2%'),
    width: '100%',
    flexShrink: 1,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  modalContent: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 0,
    paddingVertical: hp('4%'),
    marginTop: hp('-15%')
  },
  modalOverlay1: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
  },
  modalContent1: {
    width: '70%',
    backgroundColor: '#FFF',
    borderRadius: wp('2%'),
    paddingVertical: hp('10%'),
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginTop: hp('10%'),
    backgroundColor: 'brown',
    paddingTop: hp('2%'),
    paddingBottom: hp('1%'),
    paddingHorizontal: wp('2%'),
    position: 'relative',
    justifyContent: 'center'
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryTitle: {
    color: 'white',
    fontSize: wp('5%'),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
    top: hp('1%'),
    left: '50%',
    position: 'absolute',
  },
  close: {
    width: wp('3%'),
    height: wp('3%'),
    tintColor: 'white',
  },

  searchInputContainer: {
    marginTop: hp('3%'),
    height: wp('11%'),
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: wp('1%'),
    paddingHorizontal: wp('4%'),
    marginBottom: hp('2%'),
  },
  searchicon: {
    width: wp('3.5%'),
    height: wp('3.5%'),
    marginRight: wp('4%'),
    marginTop: hp('2%'),
  },
  searchInput: {
    
    flex: 1,
    fontSize: wp('3.5%'),
    color:'black',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp('2%'),
    paddingHorizontal: wp('4%'),
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  radioButton: {
    margin: wp('1%'),
    padding: wp('1%'),
  },
  checkBoxContainer: {
    margin: wp('1%'),
  },
  inputContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: wp('2%'),
    padding: wp('2%'),
    marginVertical: hp('1%'),
  },
  input1: {
    backgroundColor: '#f5f5f5',
    fontSize: wp('4%'),
    color: '#333',
  },
  inputContainer2: {
    backgroundColor: '#f2f2f2',
    padding: wp('2%'),
    borderRadius: wp('2%'),
    marginTop: hp('1%'),
    borderColor: 'black',
  },
  iconAndSubtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon2: {
    width: wp('4%'),
    height: wp('4%'),
    marginRight: wp('2%'),
    color: '#F0F8FF',
  },
  subTitle2: {
    fontSize: wp('3.4%'),
    color: 'black',
    fontWeight: '300',
  },
  textInput2: {
    backgroundColor: '#f2f2f2',
    padding: wp('3%'),
    borderRadius: wp('2%'),
    fontWeight: '400',
    fontSize: wp('3.4%'),
  },
});

export default EditProfileScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },

//   itemText: {
//     fontSize: 15,
//     color: 'black',
//   },


//   scrollContainer: {
//     flexGrow: 1,
//     padding: 40,  // Ionic typically uses consistent padding
//     backgroundColor: '#f8f9fa',  // Light background color for Ionic apps
//   },
//   headerContainer: {
//     position: 'absolute',
//     top: 0, // position from the top
//     left: 0, // position from the left
//     right: 0, // position from the right
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 15,
//     backgroundColor: '#9d0808',
//   },
//   backButton: {
//     marginRight: 1,
//   },
//   backIcon: {
//     width: 22,
//     height: 22,
//     tintColor: 'white'
//   },
//   blur: {
//     opacity: 0.5,
//     backgroundColor: 'red',
//     padding: 5,
//     borderRadius: 10,
//     width: 180,
//     height: 50,

//   },
//   headerTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: 'white',
//     textAlign: 'center',
//   },
//   input: {
//     borderRadius: 5,
//     height: 50,
//     fontSize: 18,
//   },
//   dropdownIcon: {
//     width: 15,
//     height: 15,
//     tintColor:'black',
//   },

//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 10,
//     backgroundColor: '#f2f2f2',
//     paddingVertical: 4,
//     paddingHorizontal: 10,
//     borderRadius: 3,
//     flex: 2,
//     position: 'relative',
//     marginLeft: 'auto',
//     padding: 10,
//     gap: 5,
//     // Set a consistent width for all containers
//     alignSelf: 'center',

//   },

//   icon: {
//     width: 18,
//     height: 18,
//     marginRight: 10,
//     tintColor: '#9d0808',
//   },

//   textContainer: {
//     flex: 1,  // Takes up remaining space
//     position: 'relative',
//     marginLeft: 'auto',  // Pushes the container to the right side
//     padding: 10,  // Add some padding for space within the container
//     backgroundColor: '#f0f0f0',  // Add a background color to differentiate the containers
//     borderRadius: 8,  // Optional: Add rounded corners
//     marginBottom: 10,
//   },

//   subTitle: {
//     fontSize: 16,
//     color: 'black',
//     marginRight:2,
//     width:'24%'
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 14,
//     marginTop: -5,
//     marginLeft: 15,

//   },
//   blurEffect: {
//     opacity: 0.5, // Reduce the opacity to create a blur effect
//     transform: [{ scale: 0.95 }], // Optional: slightly reduce the size
//   },

//   textInput: {
//     flex: 1, // Ensures the text input takes up all available space
//     borderColor: '#f0f0f0',
//     borderWidth: 1,
//     marginLeft: 18,
//     padding: 6,
//     textAlign: 'left',
//     width: '100%',
//   },



//   profileImageWrapper: {
//     alignItems: 'center',
//     marginBottom: 30,  // Slightly larger margin for spacing
//     top: 30,

//   },
//   profileImage: {
//     width: 100,  // Larger, rounder profile image
//     height: 100,
//     borderRadius: 60,
//     borderColor: '#f0f0f0',  // Add light border similar to Ionic
//     borderWidth: 2,
//     shadowColor: '#000',  // Subtle shadow for the image
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   profileImagePlaceholder: {
//     width: 120,
//     height: 120,
//     backgroundColor: '#ccc',
//     borderRadius: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   formContainer: {
//     width: '117%',
//     right: 30,
//     top: 5,   // Slightly more compact margin for a cleaner look
//     // Consistent horizontal padding for input fields
//   },
//   item: {
//     marginBottom: 16,  // Reduce bottom margin for a more compact form
//   },
//   radioImage: {
//     width: 24,  // Adjust size as needed
//     height: 24,
//     marginRight: 10,
//     tintColor:'brown', // Space between image and text
//   },


//   picker: {
//     height: 50,
//     width: '50%',
//     color: '#000',  // Default text color for picker
//     backgroundColor: '#fff',  // White background for pickers
//     borderRadius: 8,  // Rounded corners to match input fields
//     borderColor: '#ccc',  // Border similar to input fields
//     borderWidth: 1,
//     left: 110,  // Add some space between text and picker
//   },
//   button: {
//     backgroundColor: '#007bff',  // Ionic's signature blue button
//     paddingVertical: 12,
//     borderRadius: 8,  // Rounded button corners
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',  // Subtle shadow for button
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//   },
//   buttonText: {
//     color: 'white',  // White text for contrast on blue button
//     fontSize: 16,  // Standard button font size
//     fontWeight: '600',  // Semi-bold text
//   },

//   footer: {
//     height: 60,
//     backgroundColor: '#b71c1c',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     position: 'absolute',
//     bottom: 0,
//     width: '100%',
//   },
//   footerButton: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   footerIcon: {
//     width: 24,
//     height: 24,
//     tintColor: 'white',
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
//   modalTitles: {
//     fontSize: 18,
//     // fontWeight: 'bold',
//     marginBottom: 15,
//     color:'black'
//   },
//   modalText: {
//     fontSize: 16,
//     marginBottom: 15,
//     color:'grey',
//   },
//   modalText1: {
//     fontSize: 16,
//     marginBottom: 15,
//     color:'grey',
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
//   ptext: {
//     fontSize: 18,
//     marginBottom: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   buttonContainer: {
//     alignItems: 'center',
//     marginTop: 20,
//     marginBottom: 60,

//   },
//   createButton: {
//     backgroundColor: 'red',
//     borderRadius: 5,
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     width: 200, // Set your desired width here
//     alignItems: 'center', // Center the text horizontally
//     justifyContent: 'center', // Center the text vertically
//   },
//   // country state picker
//   pickerContainer: {
//     flex: 1,

//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#f0f0f0',
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     justifyContent: 'center',
//     backgroundColor: '#f2f2f2',

//   },
//   pickerButton: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',


//   },
//   CountrypickerButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },

//   pickerText: {
//     fontSize: 14,
//     color: '#999',
   


//   },
//   pickerTextnew: {
//     fontSize: 15,
//     color: '#000',

//   },
//   labelContainer: {
//     flex: 1, // Takes up available space on the left
//     flexDirection: 'row',
//     alignItems: 'center',

//   },
//   pickerTextcon: {
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//   },

//   valueContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1, // Takes available space but allows the icon to stay on the right
//     justifyContent: 'flex-end', // Ensures the text is aligned properly before the icon
//     backgroundColor: '#f5f5f5',
//   },
//   pickerTextValue: {
//     color: '#000', // Text color
//     fontSize: 16,
//     marginRight: 8, // Space between text and icon
//     width: '100%', // Limits the width of the text container so it doesn't overlap with the icon
//     flexShrink: 1, // Shrinks the text if it's too long

//   },

//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     width: '100%',
//     height: '100%',
//     position: 'absolute'
//   },
//   modalContent: {
//     flex: 1,
//     width: '100%',
//     //height:'100%',
//     backgroundColor: '#FFF',
//     borderRadius: 0,
//     paddingVertical: 15,

//     marginTop: -100

//   },
//   modalOverlay1: {
//     width: '100%',
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     alignItems: 'center',
//   },
//   modalContent1: {
//     width: '70%',
//     backgroundColor: '#FFF',
//     borderRadius: 10,
//     paddingVertical: 55,
//     alignItems: 'center',

//   },

//   header: {
//     alignItems: 'center', // Vertically centers both items
//     marginTop: 80,
//     backgroundColor: 'brown',
//     paddingTop: 10,
//     paddingBottom: 1,
//     paddingHorizontal: 10,
//     position: 'relative',
//     justifyContent: 'center'


//   },
//   headerTop: {
//     flexDirection: 'row',
//     alignItems: 'center',

//   },
//   countryTitle: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   closeButton: {

//     top: 8,
//     left: '55%',
//     position: 'absolute',


//   },
//   close: {
//     width: 14,
//     height: 14,
//     tintColor: 'white',

//   },

//   //search
//   searchInputContainer: {
//     marginTop: 30,
//     backgroundColor: '#fff',
//     flexDirection: 'row',
//     borderRadius: 3,
//     paddingHorizontal: 15,
//     marginBottom: 10,

//   },
//   searchicon: {
//     width: 16,
//     height: 16,
//     marginRight: 15,
//     marginTop: 15,

//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,


//   },
//   //country list
//   item: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     paddingHorizontal: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   radioButton: {
//     margin: 1,
//     padding: 1,
//   },
//   checkBoxContainer: {
//     margin: 1,
//   },
//   inputContainer1: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//     borderRadius: 10,
//     padding: 10,
//     marginVertical: 10,

//   },
//   input1: {
//     backgroundColor: '#f5f5f5',
//     fontSize: 16, // **Adjust font size for clarity**
//     color: '#333',
//     // **Dark text color for better readability**
//     // **Center text vertically**

//   },

//   inputContainer2: {
//     backgroundColor: '#f2f2f2',
//     padding: 8,
//     borderRadius: 8,
//     marginTop: 10,
//     borderColor: 'black',


//   },
//   iconAndSubtitleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   icon2: {
//     width: 18,
//     height: 18,
//     marginRight: 8,
//     color: '#F0F8FF'
//   },
//   subTitle2: {
//     fontSize: 16,
//     color:'black',
//     fontWeight: '500',

//   },
//   textInput2: {
//     backgroundColor: '#f2f2f2',
//     padding: 15,
//     borderRadius: 8,
//     fontWeight: 'bold',

//   },
// });

// export default EditProfileScreen;




// import React, { useEffect, useState } from 'react';
// import {
//   View, Text,
//   Image,
//   TextInput,
//   Button,
//   TouchableOpacity,
//   ActivityIndicator,
//   Alert,
//   StyleSheet,
//   ScrollView,
//   Modal,
//   FlatList,
//   Pressable,
//   StatusBar,
// } from 'react-native';
// import { useForm, Controller } from 'react-hook-form';
// import { Picker } from '@react-native-picker/picker';
// import ImagePicker from 'react-native-image-picker';
// import { launchImageLibrary } from 'react-native-image-picker';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Api } from '../providers/api/api';
// import ProfileProvider from '../providers/profile/profile';
// import CountryProvider from '../providers/country/country';
// import * as Yup from 'yup';
// import User from '../providers/user/User';
// import { CheckBox } from 'react-native-elements';

// import Icon from 'react-native-vector-icons/Entypo';
// import { BlurView } from '@react-native-community/blur';
// import { Linking } from 'react-native';


// const API_URL = 'https://aggressionmanagement.com/api';
// const CustomPicker = ({ placeholder, items, selectedValue, setSelectedValue }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   const filteredItems = items.filter(item =>
//     item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleSelect = (item) => {
//     setSelectedValue(item);
//     setIsVisible(false);
//   };


//   const handleSearch = (query) => {
//     setSearchQuery(query);
//   };
//   return (
//     <View style={styles.pickerContainer}>
//       <TouchableOpacity onPress={() => setIsVisible(true)} style={styles.pickerButton}>
//         <View style={styles.labelContainer}>
//           <Text style={styles.pickerText}>{placeholder}</Text>
//         </View>
//         <View style={styles.valueContainer}>
//           <Text
//             style={styles.pickerTextValue}
//             numberOfLines={1}
//             ellipsizeMode="tail"
//           >
//             {selectedValue ? selectedValue.name : "selectedValue"}
//           </Text>
//         </View>
//         <Icon name='chevron-down' size={20} color='#000' />
//       </TouchableOpacity>

//       <Modal
//         transparent={true}
//         visible={isVisible}
//         animationType="slide"
//         onRequestClose={() => setIsVisible(false)}
//       >
//         <Pressable style={styles.modalOverlay} onPress={() => setIsVisible(false)}>
//           <View style={styles.modalContent}>
//             <View style={styles.header}>
//               <View style={styles.headerTop}>
//                 <Text style={styles.countryTitle}>{placeholder}</Text>
//                 <TouchableOpacity onPress={() => setIsVisible(false)} style={styles.closeButton}>
//                   <Image source={require('../assets/img/cross.png')} style={styles.close} />
//                 </TouchableOpacity>
//               </View>

//               <View style={styles.searchInputContainer}>
//                 <TextInput
//                   style={styles.searchInput}
//                   placeholder="Search"
//                   value={searchQuery}
//                   onChangeText={handleSearch}
//                 />
//               </View>
//             </View>

//             <FlatList
//               data={filteredItems}
//               keyExtractor={(item) => item.id.toString()}
//               renderItem={({ item }) => (
//                 <TouchableOpacity onPress={() => handleSelect(item)} style={styles.item}>
//                   <CheckBox
//                     checked={selectedValue?.id === item.id}
//                     onPress={() => handleSelect(item)}
//                     checkedIcon="dot-circle-o"
//                     uncheckedIcon="circle-o"
//                     containerStyle={styles.radioButton}
//                   />
//                   <Text style={styles.itemText}>{item.name}</Text>
//                 </TouchableOpacity>
//               )}
//             />
//           </View>
//         </Pressable>
//       </Modal>
//     </View>
//   );
// };

// const api = new Api(API_URL);
// const profileProvider = new ProfileProvider(api);
// const countryProvider = new CountryProvider(api);

// const EditProfileScreen = () => {
//   const { control, handleSubmit, getValues, setValue, watch, trigger, formState: { errors } } = useForm();



//   const [loading, setLoading] = useState(false);
//   const [userInformation, setUserInformation] = useState(null);
//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [selectedState, setSelectedState] = useState(null);
//   const [isEnabled, setIsEnabled] = useState(false);
//   const [profileImage, setProfileImage] = useState(null); // To store selected image
//   const navigation = useNavigation();
//   const [logoutModalVisible, setLogoutModalVisible] = useState(false);
//   const [showFooter, setShowFooter] = useState(true);
//   const [isFormComplete, setIsFormComplete] = useState(false);
//   const fname = watch('fname');
//   const lname = watch('lname');
//   const email = watch('email');
//   const country = watch('country');
//   const state = watch('state');
//   const title = watch('title');
//  const organization = watch('organization');
//  const  Profession = watch('profession');
 
//  const [isSaveModalVisible, setSaveModalVisible] = useState(false);


//   // const isFormValid = watch('fname') && watch('lname') && watch('title');
//   const isFormValid = () => {
//     const values = getValues();
//     return (
//       values.fname?.trim() &&
//       values.lname?.trim() &&
//       values.title?.trim() &&
//       selectedCountry &&
//       selectedState &&
//       values.Profession?.trim() &&
//       values.Organization?.trim() // Ensure this is included
//     );
//   };
  
//   useEffect(() => {
//     const isComplete = isFormValid();
//     console.log('Form values:', getValues()); // Log the form values
//     console.log('Is form complete:', isComplete); // Log if the form is complete
//     setIsFormComplete(isComplete);
//   }, [fname, lname, country, state, title, organization, Profession, selectedCountry, selectedState]);
//   const [modalMessage, setModalMessage] = useState({
//     title: ' ',
//     message: ' ',
//   });
//   useEffect(() => {
//     fetchUserInfo();
//     loadCountries();
//     trigger();
//   }, []);
//   useEffect(() => {
//     if (userInformation && countries.length > 0 && !selectedCountry) {
//       const userCountry = countries.find((c) => c.name === userInformation.country);
//       if (userCountry) {
//         setSelectedCountry(userCountry); // Set the user's country as selected
//         handleCountryChange(userCountry); // Load states for the user's country
//       }
//     }
//   }, [userInformation, countries]);

//   useEffect(() => {
//     if (userInformation && selectedCountry && states.length > 0 && !selectedState) {
//       const userState = states.find((s) => s.name === userInformation.state);
//       if (userState) {
//         setSelectedState(userState); // Set the user's state as selected
//       }
//     }
//   }, [userInformation, states]);

//   const fetchUserInfo = async () => {
//     setLoading(true);
//     try {
//       const userData = await AsyncStorage.getItem('user');
//       const { user_id, token } = userData ? JSON.parse(userData) : {};

//       if (!user_id || !token) {
//         Alert.alert('Error', 'User not authenticated.');
//         return;
//       }

//       const response = await profileProvider.user_info({ user_id, token });
//       const userDataResponse = response.data;

//       setUserInformation(userDataResponse);
//       setValue('fname', userDataResponse.firstname);
//       setValue('lname', userDataResponse.surname);
//       setValue('email', userDataResponse.email);
//       setValue('title', userDataResponse.title);
//       setValue('Organization', userDataResponse.organization);
//       setValue('Profession', userDataResponse.profession);
//       setValue('country', userDataResponse.country);
//       setValue('state', userDataResponse.state);
//       setValue('subscriptionEndDate', userDataResponse.subscriptionEnd_date);


//       const defaultImageUrl = 'https://safetnet.site/Aggression_management/profile_images/default_profile.png';
//       setValue('profilePic', userDataResponse.profile_picture || defaultImageUrl);
//       setProfileImage(userDataResponse.profile_picture || defaultImageUrl);


//       if (userDataResponse.country) {
//         const country = countries.find(c => c.name === userDataResponse.country);
//         if (country) {
//           handleCountryChange(country);
//         }
//       }
//     } catch (error) {
//       console.error('Error fetching user info:', error);
//       Alert.alert('Error', 'Failed to fetch user information.');
//     } finally {
//       setLoading(false);
//     }
//   };


//   const loadCountries = async () => {
//     try {
//       const response = await countryProvider.country();
//       const countriesData = response.data.map((country) => ({
//         id: country.country_id,
//         name: country.country_name,
//       }));
//       setCountries(countriesData);
//     } catch (error) {
//       console.error('Error loading countries:', error);
//       Alert.alert('Error', 'Failed to load countries.');
//     }
//   };

//   const loadStates = async (countryId) => {
//     try {
//       const response = await countryProvider.state(countryId);
//       const statesData = response.data.map((state) => ({
//         id: state.state_id,
//         name: state.state_name,
//       }));
//       setStates(statesData);
//       setIsEnabled(true);
//     } catch (error) {
//       console.error('Error loading states:', error);
//       Alert.alert('Error', 'Failed to load states.');
//     }
//   };

//   const handleCountryChange = (country) => {
//     setSelectedCountry(country);
//     loadStates(country.id);
//     setValue('country', country.name); // Store the country name in the form
//   };

//   const handleImagePick = async () => {
//     launchImageLibrary({ mediaType: 'photo' }, async (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         Alert.alert('Error', 'Image selection failed.');
//       } else {
//         const selectedImage = response.assets[0];
//         console.log('Selected image details:', selectedImage); // Log image details
//         const formData = new FormData();
//         formData.append('profile_image', {
//           uri: selectedImage.uri,
//           name: selectedImage.fileName,
//           type: selectedImage.type,
//         });
//         setProfileImage(selectedImage.uri); // Locally set the image URI
//       }
//     });
//   };


//   const onSubmit = async (data) => {
//     setLoading(true);
//     try {
//       const userData = await AsyncStorage.getItem('user');
//       const { user_id, token } = userData ? JSON.parse(userData) : {};
//       if (!user_id || !token) {
//         Alert.alert('Error', 'User not authenticated.');
//         return;
//       }

//       const updatedData = {
//         ...data,
//         country: selectedCountry?.id ?? userInformation.country,
//         state: selectedState?.id ?? userInformation.state,
//         firstname: data.fname, // Add this
//         surname: data.lname, // Add this
//         organization: data.Organization, // Add this
//         profession: data.Profession, // Add this
//         profile_picture: profileImage,
//       };
//       console.log('Sending updated data to the server:', updatedData); // Log the data


//       await profileProvider.edit_info({ user_id, token, ...updatedData });
//       // Alert.alert('Success', 'Profile updated successfully.');
//       // navigation.goBack();
//       setSaveModalVisible(true);
//     } catch (error) {
//       console.error('Error updating profile:', error);
//       Alert.alert('Error', 'Failed to update profile.');
//     } finally {
//       setLoading(false);
//     }
//   };



//   if (loading) {
//     return <ActivityIndicator size={130} color="brown" 
//     style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}/>;
//   }

//   const handleLogout = () => {
//     setLogoutModalVisible(false);
//     navigation.reset({
//       index: 0,
//       routes: [{ name: 'Login' }], // Navigate to the login screen and reset the stack
//     });
//   };

//   const handleLogoutCancel = () => {
//     setLogoutModalVisible(false);
//   };

  


//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#9d0808" />

//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <View style={styles.headerContainer}>
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Image source={require('../assets/img/backnew.png')} style={styles.backIcon} resizeMode="cover" />
//           </TouchableOpacity>
//           <Text style={[styles.headerTitle, { flex: 1, textAlign: 'center' }]}>Edit Profile</Text>
//         </View>

//         <View style={styles.profileImageWrapper}>
//           <TouchableOpacity onPress={handleImagePick}>
//             {profileImage ? (
//               <Image
//                 source={{ uri: profileImage }}
//                 style={styles.profileImage}
//               />
//             ) : (
//               <Image
//                 source={{ uri: 'https://safetnet.site/Aggression_management/profile_images/default_profile.png' }}
//                 style={styles.profileImage}
//               />
//             )}
//           </TouchableOpacity>
//         </View>
//         <View style={styles.formContainer}>
//           <Controller
//             control={control}
//             name="email"
//             render={({ field: { onChange, onBlur, value } }) => (
//               <View style={styles.inputContainer}>
//                 <Image source={require('../assets/img/contact-us.png')} style={styles.icon} />
//                 <Text style={styles.subTitle}>E-mail</Text>
//                 <TextInput
//                   style={styles.textInput}
//                   onBlur={onBlur}
//                   onChangeText={onChange}
//                   value={value}
//                   editable={false}
//                 />
//               </View>
//             )}
//           />

//           <Controller
//             control={control}
//             name="fname"
//             rules={{ required: 'This field cannot be empty ' }}
//             render={({ field: { onChange, onBlur, value } }) => (
//               <View style={styles.inputContainer}>
//                 <Image source={require('../assets/img/user.png')} style={styles.icon} />
//                 <Text style={styles.subTitle}>First Name</Text>
//                 <TextInput
//                   style={[styles.textInput, errors.fname]}
//                   onBlur={() => {
//                     onBlur();
//                     trigger('fname'); // Trigger validation when the field loses focus
//                   }}
//                   onChangeText={(text) => {
//                     const alphabeticText = text.replace(/[^A-Za-z]/g, '');
//                     onChange(alphabeticText);
//                     trigger('fname'); // Trigger validation on change
//                   }}
//                   value={value}
//                 />

//               </View>
//             )}
//           />
//           {errors.fname && <Text style={styles.errorText}>{errors.fname.message}</Text>}

//           <Controller
//             control={control}
//             name="lname"
//             rules={{ required: 'This field cannot be empty' }}
//             render={({ field: { onChange, onBlur, value } }) => (
//               <View style={styles.inputContainer}>
//                 <Image source={require('../assets/img/user.png')} style={styles.icon} />
//                 <Text style={styles.subTitle}>Last Name</Text>
//                 <TextInput
//                   style={[styles.textInput, errors.lname]}
//                   onBlur={() => {
//                     onBlur();
//                     trigger('lname'); // Trigger validation when the field loses focus
//                   }}
//                   onChangeText={(text) => {
//                     const alphabeticText = text.replace(/[^A-Za-z]/g, '');
//                     onChange(alphabeticText);
//                     trigger('lname'); // Trigger validation on change
//                   }}
//                   value={value}
//                 />

//               </View>
//             )}
//           />
//           {errors.lname && <Text style={styles.errorText}>{errors.lname.message}</Text>}

//           <Controller
//             control={control}
//             name="title"
//             rules={{ required: 'This field cannot be empty' }}
//             render={({ field: { onChange, onBlur, value } }) => (
//               <View style={styles.inputContainer}>
//                 <Image source={require('../assets/img/Title.png')} style={styles.icon} />
//                 <Text style={styles.subTitle}>Title            </Text>
//                 <TextInput
//                   style={[styles.textInput, errors.title]}
//                   onBlur={() => {
//                     onBlur();
//                     trigger('title'); // Trigger validation when the field loses focus
//                   }}
//                   onChangeText={onChange}
//                   value={value}
//                 />

//               </View>
//             )}
//           />
//           {errors.title && <Text style={styles.errorText}>{errors.title.message}</Text>}

//           <Controller
//             control={control}
//             name="Organization"
//             rules={{ required: 'This field cannot be empty' }}
//             render={({ field: { onChange, onBlur, value } }) => (
//               <View style={styles.inputContainer}>
//                 <Image source={require('../assets/img/Title.png')} style={styles.icon} />
//                 <Text style={styles.subTitle}>Organization</Text>
//                 <TextInput
//                   style={[styles.textInput, errors.Organization]}
//                   onBlur={() => {
//                     onBlur();
//                     trigger('Organization'); // Trigger validation when the field loses focus
//                   }}
//                   onChangeText={onChange}
//                   value={value}
//                 />

//               </View>
//             )}
//           />
//           {errors.Organization && <Text style={styles.errorText}>{errors.Organization.message}</Text>}

//           <View style={styles.inputContainer1}>
//             <Image source={require('../assets/img/word.png')} style={styles.icon} />
//             <Text style={styles.subTitle}>Country</Text>
//             <Controller
//               control={control}
//               name="country"
//               render={({ field: { onChange, value } }) => (

//                 <CustomPicker
//                   placeholder=""
//                   items={countries}
//                   selectedValue={selectedCountry}
//                   setSelectedValue={(item) => {
//                     onChange(item.id); // Update form value with country ID
//                     handleCountryChange(item); // Load states when country changes
//                   }}
//                 />
//               )}
//             />
//           </View>

//           <View style={styles.inputContainer1}>
//             <Image source={require('../assets/img/state.png')} style={styles.icon} />
//             <Text style={styles.subTitle}>State</Text>
//             <Controller
//               control={control}
//               name="state"
//               render={({ field: { onChange, value } }) => (
//                 <CustomPicker
//                   placeholder=""
//                   items={states}
//                   selectedValue={selectedState}

//                   // Find selected state object
//                   setSelectedValue={(item) => {
//                     onChange(item.id); // Update form value with state ID
//                     setSelectedState(item); // Update selected state
//                   }}
//                 />
//               )}
//             />
//           </View>

//           <Controller
//             control={control}
//             name="Profession"
//             rules={{ required: 'This field cannot be empty' }}

//             render={({ field: { onChange, onBlur, value } }) => (
//               <View style={styles.inputContainer}>
//                 <Image source={require('../assets/img/Title.png')} style={styles.icon} />
//                 <Text style={styles.subTitle}>Profession</Text>
//                 <TextInput
//                   style={[styles.textInput, errors.Profession]}
//                   onBlur={() => {
//                     onBlur();
//                     trigger('Profession'); // Trigger validation when the field loses focus
//                   }}
//                   onChangeText={onChange}
//                   value={value}
//                 />

//               </View>
//             )}
//           />
//           {errors.Profession && <Text style={styles.errorText}>{errors.Profession.message}</Text>}


//           <Text style={{ fontWeight: '400', fontSize: 16, color:'black' }} >Subscription</Text>
//           <Controller
//             control={control}
//             name="subscriptionEndDate"
//             render={({ field: { onChange, onBlur, value } }) => (

//               <View style={styles.inputContainer2}>
//                 <View style={styles.iconAndSubtitleContainer}>
//                   <Image source={require('../assets/img/info.png')} style={styles.icon2} />

//                   <Text style={styles.subTitle2}>Subscription</Text>
//                 </View>
//                 <TextInput
//                   style={styles.textInput2}
//                   onBlur={onBlur}
//                   onChangeText={onChange}
//                   value={value}
//                   editable={false}
//                 />
//               </View>
//             )}
//           />

          
//           <View style={styles.buttonContainer}>
//   <TouchableOpacity
//     style={[
//       styles.createButton,
//       { backgroundColor: isFormComplete ? '#ae0c00' : '#ae0c00' },
//       !isFormComplete && styles.blurEffect, // Apply blur effect if the form is incomplete
//     ]}
//     onPress={handleSubmit(onSubmit)}
//     disabled={!isFormComplete}
//   >
//     <Text style={styles.buttonText}>SAVE</Text>
//   </TouchableOpacity>
// </View>


//         </View>
//       </ScrollView>
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
//             <Text style={styles.modalTitles}>Confirm Logout</Text>
//             <Text style={styles.modalText}>Are you sure you want to log out?</Text>
//             <View style={styles.modalButtonContainer}>
//               <TouchableOpacity
//                 style={styles.modalButton}
//                 onPress={handleLogout}
//               >
//                 <Text style={styles.modalButtonText}>Yes</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.modalButton}
//                 onPress={handleLogoutCancel}
//               >
//                 <Text style={styles.modalButtonText}>No</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>




//       <Modal
//   animationType="slide"
//   transparent={true}
//   visible={isSaveModalVisible}
//   onRequestClose={() => setSaveModalVisible(false)}
// >
//   <View style={styles.modalOverlay1}>

//     <View style={styles.modalContent1}>
//     <Text style={styles.modalText2}>CAPS</Text>
//       <Text style={styles.modalText1}>User updated successfully!</Text>
//       <View style={styles.modalButtonContainer}>
//         <TouchableOpacity
//           style={styles.modalButton}
//           onPress={() => {
//             setSaveModalVisible(false);
//             navigation.navigate('home'); // Navigate to a specific screen
//           }}
//         >
//           <Text style={styles.modalButtonText}>OK</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   </View>
// </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },

//   itemText: {
//     fontSize: 15,
//     color: '#666',
//   },


//   scrollContainer: {
//     flexGrow: 1,
//     padding: 40,  // Ionic typically uses consistent padding
//     backgroundColor: '#f8f9fa',  // Light background color for Ionic apps
//   },
//   headerContainer: {
//     position: 'absolute',
//     top: 0, // position from the top
//     left: 0, // position from the left
//     right: 0, // position from the right
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 15,
//     backgroundColor: '#9d0808',
//   },
//   backButton: {
//     marginRight: 1,
//   },
//   backIcon: {
//     width: 22,
//     height: 22,
//     tintColor: 'white'
//   },
//   blur: {
//     opacity: 0.5,
//     backgroundColor: 'red',
//     padding: 5,
//     borderRadius: 10,
//     width: 180,
//     height: 50,

//   },
//   headerTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: 'white',
//     textAlign: 'center',
//   },
//   input: {
//     borderRadius: 5,
//     height: 50,
//     fontSize: 18,
//   },

//   inputContainer: {
//     flexDirection: 'row',
//   alignItems: 'center',
//   backgroundColor: '#f2f2f2',
//   padding: 10,
//   borderRadius: 8,
//   flex:1,
//   marginVertical: 10,

//   },

//   icon: {
//     width: 18,
//     height: 18,
//     marginRight: 10,
//     tintColor: '#9d0808',
//   },

//   textContainer: {
//     flex: 1,  // Takes up remaining space
//     position: 'relative',
//     marginLeft: 'auto',  // Pushes the container to the right side
//     padding: 10,  // Add some padding for space within the container
//     backgroundColor: '#f0f0f0',  // Add a background color to differentiate the containers
//     borderRadius: 8,  // Optional: Add rounded corners
//     marginBottom: 10,
//     color: '#666',
//   },

//   subTitle: {
//     fontSize: 16,
//     color: '#666',
//     marginRight: 20,
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 14,
//     marginTop: -5,
//     marginLeft: 15,

//   },
//   blurEffect: {
//     opacity: 0.5, // Reduce the opacity to create a blur effect
//     transform: [{ scale: 0.95 }], // Optional: slightly reduce the size
//   },

//   textInput: {
//     flex: 1, // Ensures the text input takes up all available space
//     borderColor: '#f0f0f0',
//     borderWidth: 1,
//     marginLeft: 18,
//     padding: 6,
//     color: '#666',
//     // textAlign: 'left',
//     width: '100%',
//   },



//   profileImageWrapper: {
//     alignItems: 'center',
//     marginBottom: 30,  // Slightly larger margin for spacing
//     top: 30,

//   },
//   profileImage: {
//     width: 100,  // Larger, rounder profile image
//     height: 100,
//     borderRadius: 60,
//     borderColor: '#f0f0f0',  // Add light border similar to Ionic
//     borderWidth: 2,
//     shadowColor: '#000',  // Subtle shadow for the image
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   profileImagePlaceholder: {
//     width: 120,
//     height: 120,
//     backgroundColor: '#ccc',
//     borderRadius: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   formContainer: {
//     width: '117%',
//     right: 30,
//     top: 5,   // Slightly more compact margin for a cleaner look
//     // Consistent horizontal padding for input fields
//   },



//   picker: {
//     height: 50,
//     width: '50%',
//     color: '#000',  // Default text color for picker
//     backgroundColor: '#fff',  // White background for pickers
//     borderRadius: 8,  // Rounded corners to match input fields
//     borderColor: '#ccc',  // Border similar to input fields
//     borderWidth: 1,
//     left: 110,  // Add some space between text and picker
//   },
//   button: {
//     backgroundColor: '#007bff',  // Ionic's signature blue button
//     paddingVertical: 12,
//     borderRadius: 8,  // Rounded button corners
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',  // Subtle shadow for button
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//   },
//   buttonText: {
//     color: 'white',  // White text for contrast on blue button
//     fontSize: 16,  // Standard button font size
//     fontWeight: '600',  // Semi-bold text
//   },

//   footer: {
//     height: 60,
//     backgroundColor: '#b71c1c',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     position: 'absolute',
//     bottom: 0,
//     width: '100%',
//   },
//   footerButton: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   footerIcon: {
//     width: 24,
//     height: 24,
//     tintColor: 'white',
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
//   modalTitles: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 15,
//     color:'black'
//   },
//   modalText: {
//     fontSize: 16,
//     marginBottom: 15,
//     color: '#666',
//   },
//   modalText1: {
//     fontSize: 16,
//     marginBottom: 15,
  
//     color: '#666',
//   },
//   modalText2: {
//     fontSize: 18,
//     marginBottom: 15,
//     fontWeight:'bold',
//     color: 'black',
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
//   ptext: {
//     fontSize: 18,
//     marginBottom: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
    
//   },
//   buttonContainer: {
//     alignItems: 'center',
//     marginTop: 20,
//     marginBottom: 60,

//   },
//   createButton: {
//     backgroundColor: 'red',
//     borderRadius: 5,
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     width: 200, // Set your desired width here
//     alignItems: 'center', // Center the text horizontally
//     justifyContent: 'center', // Center the text vertically
//   },
//   // country state picker
//   pickerContainer: {
//     flex: 1,

//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#f0f0f0',
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     justifyContent: 'center',
//     backgroundColor: '#f2f2f2',

//   },
//   pickerButton: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',


//   },
//   CountrypickerButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },

//   pickerText: {
//     fontSize: 14,
//     color: '#999',


//   },
//   pickerTextnew: {
//     fontSize: 15,
//     color: '#000',

//   },
//   labelContainer: {
//     flex: 1, // Takes up available space on the left
//     flexDirection: 'row',
//     alignItems: 'center',

//   },
//   pickerTextcon: {
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//   },

//   valueContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1, // Takes available space but allows the icon to stay on the right
//     justifyContent: 'flex-end', // Ensures the text is aligned properly before the icon
//     backgroundColor: '#f5f5f5',
//   },
//   pickerTextValue: {
//     color: '#000', // Text color
//     fontSize: 16,
//     marginRight: 8, // Space between text and icon
//     width: '100%', // Limits the width of the text container so it doesn't overlap with the icon
//     flexShrink: 1, // Shrinks the text if it's too long

//   },

//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     width: '100%',
//     backgroundColor: '#FFF',
//     borderRadius: 10,
//     paddingVertical: 15,
//   },
//   modalOverlay1: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     alignItems: 'center',
//   },
//   modalContent1: {
//     width: '70%',
//     backgroundColor: '#FFF',
//     borderRadius: 10,
//     paddingVertical: 55,
//     alignItems: 'center',

//   },

//   header: {
//     alignItems: 'center', // Vertically centers both items
//     marginTop: 80,
//     backgroundColor: 'brown',
//     paddingTop: 10,
//     paddingBottom: 1,
//     paddingHorizontal: 10,
//     position: 'relative',
//     justifyContent: 'center'


//   },
//   headerTop: {
//     flexDirection: 'row',
//     alignItems: 'center',

//   },
//   countryTitle: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   closeButton: {

//     top: 8,
//     left: '55%',
//     position: 'absolute',


//   },
//   close: {
//     width: 14,
//     height: 14,
//     tintColor: 'white',

//   },

//   //search
//   searchInputContainer: {
//     marginTop: 30,
//     backgroundColor: '#fff',
//     flexDirection: 'row',
//     borderRadius: 3,
//     paddingHorizontal: 15,
//     marginBottom: 10,

//   },
//   searchicon: {
//     width: 16,
//     height: 16,
//     marginRight: 15,
//     marginTop: 15,

//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,


//   },
//   //country list
//   item: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     marginBottom: 16,
//     paddingHorizontal: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   radioButton: {
//     margin: 1,
//     padding: 1,
//   },
//   checkBoxContainer: {
//     margin: 1,
//   },
//   inputContainer1: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//     borderRadius: 10,
//     padding: 10,
//     marginVertical: 10,

//   },
//   input1: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f2f2f2',
//     padding: 10,
//     borderRadius: 8,
//     marginVertical: 10,

//   },

//   inputContainer2: {
//     backgroundColor: '#f2f2f2',
//   padding: 8,
//   borderRadius: 8,
//   marginTop: 10,
//   borderColor: 'black',
//   flexDirection: 'row',
//   alignItems: 'center',

//   },
//   iconAndSubtitleContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   icon2: {
//     width: 18,
//     height: 18,
//     marginRight: 8,
//     color: '#F0F8FF'
//   },
//   subTitle2: {
//     fontSize: 16,
//     color: '#666',
//     fontWeight: '300',

//   },
//   textInput2: {
//     backgroundColor: '#f2f2f2',
//     padding: 15,
//     color: '#666',
//     borderRadius: 8,
//     fontWeight: '400',

//   },
// });

// export default EditProfileScreen;