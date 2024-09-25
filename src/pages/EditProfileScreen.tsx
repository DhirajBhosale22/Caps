import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  StyleSheet,
  ScrollView,
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

const API_URL = 'http://aggressionmanagement.com/api';

const api = new Api(API_URL);
const profileProvider = new ProfileProvider(api);
const countryProvider = new CountryProvider(api);

const EditProfileScreen = () => {
  const { control, handleSubmit, setValue, getValues } = useForm();
  const [loading, setLoading] = useState(false);
  const [userInformation, setUserInformation] = useState(null);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const [profileImage, setProfileImage] = useState(null); // To store selected image
  const navigation = useNavigation();

  useEffect(() => {
    fetchUserInfo();
    loadCountries();
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
        Alert.alert('Error', 'User not authenticated.');
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
      
      
      const defaultImageUrl = 'http://safetnet.site/Aggression_management/profile_images/default_profile.png';
      setValue('profilePic', userDataResponse.profile_picture || defaultImageUrl);
      setProfileImage(userDataResponse.profile_picture || defaultImageUrl);

     
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
    launchImageLibrary({ mediaType: 'photo' }, async (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        Alert.alert('Error', 'Image selection failed.');
      } else {
        const selectedImage = response.assets[0];
        console.log('Selected image details:', selectedImage); // Log image details
        const formData = new FormData();
        formData.append('profile_image', {
          uri: selectedImage.uri,
          name: selectedImage.fileName,
          type: selectedImage.type,
        });
        setProfileImage(selectedImage.uri); // Locally set the image URI
      }
    });
  };
 
  
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const userData = await AsyncStorage.getItem('user');
      const { user_id, token } = userData ? JSON.parse(userData) : {};
      if (!user_id || !token) {
        Alert.alert('Error', 'User not authenticated.');
        return;
      }

      const updatedData = {
        ...data,
        country: selectedCountry?.id ?? userInformation.country,
        state: selectedState?.id ?? userInformation.state,
        firstname: data.fname, // Add this
      surname: data.lname, // Add this
      organization: data.Organization, // Add this
      profession: data.Profession, // Add this
      profile_picture: profileImage,
      };
      console.log('Sending updated data to the server:', updatedData); // Log the data
      
      
      await profileProvider.edit_info({ user_id, token, ...updatedData });
      Alert.alert('Success', 'Profile updated successfully.');
      navigation.goBack();
    } catch (error) {
      console.error('Error updating profile:', error);
      Alert.alert('Error', 'Failed to update profile.');
    } finally {
      setLoading(false);
    }
  };

  

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.profileImageWrapper}>
      <TouchableOpacity onPress={handleImagePick}>
      {profileImage ? (
            <Image
              source={{ uri: profileImage }}
              style={styles.profileImage}
            />
          ) : (
          <Image
            source={{ uri: 'http://safetnet.site/Aggression_management/profile_images/default_profile.png' }}
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
            <View style={styles.item}>
              <Text style={styles.subTitle}>E-mail</Text>
              <TextInput
                style={styles.textInput}
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
          name="subscriptionEndDate"
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.item}>
              <Text style={styles.subTitle}>subscription End Date</Text>
              <TextInput
                style={styles.textInput}
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
render={({ field: { onChange, onBlur, value } }) => (
<View style={styles.item}>
<Text style={styles.subTitle}>First Name</Text>
<TextInput
style={styles.textInput}
onBlur={onBlur}
onChangeText={onChange}
value={value}
/>
</View>
)}
/>
<Controller
control={control}
name="lname"
render={({ field: { onChange, onBlur, value } }) => (
<View style={styles.item}>
<Text style={styles.subTitle}>Last Name</Text>
<TextInput
style={styles.textInput}
onBlur={onBlur}
onChangeText={onChange}
value={value}
/>
</View>
)}
/>
<Controller
control={control}
name="title"
render={({ field: { onChange, onBlur, value } }) => (
<View style={styles.item}>
<Text style={styles.subTitle}>Title</Text>
<TextInput
style={styles.textInput}
onBlur={onBlur}
onChangeText={onChange}
value={value}
/>
</View>
)}
/>
<Controller
control={control}
name="Organization"
render={({ field: { onChange, onBlur, value } }) => (
<View style={styles.item}>
<Text style={styles.subTitle}>Organization</Text>
<TextInput
style={styles.textInput}
onBlur={onBlur}
onChangeText={onChange}
value={value}
/>
</View>
)}
/>
<Controller
control={control}
name="Profession"
render={({ field: { onChange, onBlur, value } }) => (
<View style={styles.item}>
<Text style={styles.subTitle}>Profession</Text>
<TextInput
style={styles.textInput}
onBlur={onBlur}
onChangeText={onChange}
value={value}
/>
</View>
)}
/>
        <View style={styles.item}>
          <Text style={styles.subTitle}>Country</Text>
          <Controller
            control={control}
            name="country"
            render={({ field: { onChange, value } }) => (
              <>
              
                <Picker
                  selectedValue={selectedCountry?.id} // Use country ID here
                  onValueChange={(itemValue) => {
                    const country = countries.find((c) => c.id === itemValue);
                    onChange(itemValue); // Update form value
                    handleCountryChange(country); // Load states when country changes
                  }}
                  style={styles.picker}
                >
                 
                  {countries.map((country) => (
                    <Picker.Item key={country.id} label={country.name} value={country.id} /> // Change value to country ID
                  ))}
                </Picker>
              </>
            )}
          />
        </View>
        <View style={styles.item}>
          <Text style={styles.subTitle}>State</Text>
          <Controller
            control={control}
            name="state"
            render={({ field: { onChange, value } }) => (
              <>
               
                <Picker
                  selectedValue={selectedState?.id} // Use state ID here
                  onValueChange={(itemValue) => {
                    const state = states.find((s) => s.id === itemValue);
                    onChange(itemValue); // Update form value
                    setSelectedState(state); // Update selected state
                  }}
                  style={styles.picker}
                  enabled={isEnabled}
                >
                  
                  {states.map((state) => (
                    <Picker.Item key={state.id} label={state.name} value={state.id} /> // Change value to state ID
                  ))}
                </Picker>
              </>
            )}
          />
        </View>
        <View style={styles.item}>
          <Button title="Update Profile" onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 16,  // Ionic typically uses consistent padding
    backgroundColor: '#f8f9fa',  // Light background color for Ionic apps
  },
  profileImageWrapper: {
    alignItems: 'center',
    marginBottom: 24,  // Slightly larger margin for spacing
  },
  profileImage: {
    width: 120,  // Larger, rounder profile image
    height: 120,
    borderRadius: 60,
    borderColor: '#ddd',  // Add light border similar to Ionic
    borderWidth: 2,
    shadowColor: '#000',  // Subtle shadow for the image
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  profileImagePlaceholder: {
    width: 120,
    height: 120,
    backgroundColor: '#ccc',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    marginTop: 16,  // Slightly more compact margin for a cleaner look
    paddingHorizontal: 16,  // Consistent horizontal padding for input fields
  },
  item: {
    marginBottom: 16,  // Reduce bottom margin for a more compact form
  },
  subTitle: {
    fontSize: 14,  // Slightly smaller font for Ionic-like subtext
    fontWeight: '600',  // Semi-bold for a clear emphasis
    color: '#333',  // Dark gray color for labels
    marginBottom: 8,  // Add spacing below label for better separation
  },
  textInput: {
    borderColor: '#ccc',  // Subtle light border, like in Ionic
    borderWidth: 1,
    padding: 12,  // Comfortable padding for input fields
    borderRadius: 8,  // Rounded corners similar to Ionic input fields
    backgroundColor: '#fff',  // White background for input fields
    shadowColor: '#000',  // Subtle shadow effect for input fields
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  picker: {
    height: 50,
    width: '100%',
    color: '#000',  // Default text color for picker
    backgroundColor: '#fff',  // White background for pickers
    borderRadius: 8,  // Rounded corners to match input fields
    borderColor: '#ccc',  // Border similar to input fields
    borderWidth: 1,
    marginTop: 8,  // Add some space between text and picker
  },
  button: {
    backgroundColor: '#007bff',  // Ionic's signature blue button
    paddingVertical: 12,
    borderRadius: 8,  // Rounded button corners
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',  // Subtle shadow for button
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',  // White text for contrast on blue button
    fontSize: 16,  // Standard button font size
    fontWeight: '600',  // Semi-bold text
  },
});


export default EditProfileScreen;




