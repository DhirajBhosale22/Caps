// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, TextInput, Button, TouchableOpacity, ActivityIndicator, Alert, StyleSheet, ScrollView } from 'react-native';
// import { useForm, Controller } from 'react-hook-form';
// import { Picker } from '@react-native-picker/picker';
// import ImagePicker from 'react-native-image-picker';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Api } from '../providers/api/api';
// import ProfileProvider from '../providers/profile/profile';
// import CountryProvider from '../providers/country/country';

// const API_URL = 'http://aggressionmanagement.com/api';

// const api = new Api(API_URL);
// const profileProvider = new ProfileProvider(api);
// const countryProvider = new CountryProvider(api);

// const EditProfileScreen = () => {
//   const { control, handleSubmit, setValue, getValues } = useForm();
//   const [loading, setLoading] = useState(false);
//   const [userInformation, setUserInformation] = useState<any>(null);
//   const [countries, setCountries] = useState<any[]>([]);
//   const [states, setStates] = useState<any[]>([]);
//   const [selectedCountry, setSelectedCountry] = useState<any>(null);
//   const [selectedState, setSelectedState] = useState<any>(null);
//   const navigation = useNavigation();

//   useEffect(() => {
//     fetchUserInfo();
//     loadCountries();
//   }, []);

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

//       if (userDataResponse.country) {
//         onCountryChange(userDataResponse.country);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const loadCountries = async () => {
//     try {
//       const response = await new CountryProvider().country();
//       setCountries(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
  
//   const loadStates = async (countryId) => {
//     try {
//       const response = await new CountryProvider().state(countryId);
//       setStates(response.data);
//       setIsEnabled(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleCountryChange = (selectedCountry) => {
//     loadStates(selectedCountry.id);
//   };
//   const onCountryChange = async (countryId: string) => {
//     setSelectedCountry(countryId);
//     setLoading(true);
//     try {
//       const userData = await AsyncStorage.getItem('user');
//       const { token } = userData ? JSON.parse(userData) : {};
      
//       if (!token) {
//         Alert.alert('Error', 'User not authenticated.');
//         return;
//       }

//       const response = await countryProvider.getStates(countryId, token);
//       const statesData = response.map((state: any) => ({
//         id: state.state_id,
//         name: state.state_name,
//       }));
//       setStates(statesData);
//       setValue('country', countryId);
//     } catch (error) {
//       console.error('Error loading states:', error);
//       Alert.alert('Error', 'Failed to fetch states.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const onSubmit = async (data: any) => {
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
//         country: selectedCountry ?? userInformation.country,
//         state: selectedState ?? userInformation.state,
//       };

//       await profileProvider.edit_info({ user_id, token, ...updatedData });
//       Alert.alert('Success', 'Profile updated successfully.');
//       navigation.goBack();
//     } catch (error) {
//       console.error(error);
//       Alert.alert('Error', 'Failed to update profile.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleImagePick = () => {
//     ImagePicker.launchImageLibrary({}, (response) => {
//       if (response.error) {
//         Alert.alert('Error', 'Image selection failed.');
//       } else if (!response.didCancel) {
//         setValue('profilePic', response.uri);
//       }
//     });
//   };

//   if (loading) {
//     return <ActivityIndicator size="large" color="#0000ff" />;
//   }

//   return (
//     <ScrollView contentContainerStyle={styles.scrollContainer}>
//       <View style={styles.profileImageWrapper}>
//         <TouchableOpacity onPress={handleImagePick}>
//           {getValues('profilePic') ? (
//             <Image source={{ uri: getValues('profilePic') }} style={styles.profileImage} />
//           ) : (
//             <View style={styles.profileImagePlaceholder}>
//               {/* Add icon or placeholder */}
//             </View>
//           )}
//         </TouchableOpacity>
//       </View>
//       <View style={styles.formContainer}>
//         <Controller
//           control={control}
//           name="email"
//           render={({ field: { onChange, onBlur, value } }) => (
//             <View style={styles.item}>
//               <Text style={styles.subTitle}>E-mail</Text>
//               <TextInput
//                 style={styles.textInput}
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//                 editable={false}
//               />
//             </View>
//           )}
//         />
//         <Controller
//           control={control}
//           name="fname"
//           render={({ field: { onChange, onBlur, value } }) => (
//             <View style={styles.item}>
//               <Text style={styles.subTitle}>First Name</Text>
//               <TextInput
//                 style={styles.textInput}
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//               />
//             </View>
//           )}
//         />
//         <Controller
//           control={control}
//           name="lname"
//           render={({ field: { onChange, onBlur, value } }) => (
//             <View style={styles.item}>
//               <Text style={styles.subTitle}>Last Name</Text>
//               <TextInput
//                 style={styles.textInput}
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//               />
//             </View>
//           )}
//         />
//         <Controller
//           control={control}
//           name="title"
//           render={({ field: { onChange, onBlur, value } }) => (
//             <View style={styles.item}>
//               <Text style={styles.subTitle}>Title</Text>
//               <TextInput
//                 style={styles.textInput}
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//               />
//             </View>
//           )}
//         />
//         <Controller
//           control={control}
//           name="Organization"
//           render={({ field: { onChange, onBlur, value } }) => (
//             <View style={styles.item}>
//               <Text style={styles.subTitle}>Organization</Text>
//               <TextInput
//                 style={styles.textInput}
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//               />
//             </View>
//           )}
//         />
//         <Controller
//           control={control}
//           name="Profession"
//           render={({ field: { onChange, onBlur, value } }) => (
//             <View style={styles.item}>
//               <Text style={styles.subTitle}>Profession</Text>
//               <TextInput
//                 style={styles.textInput}
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//               />
//             </View>
//           )}
//         />
//         <View style={styles.item}>
//           <Text style={styles.subTitle}>Country</Text>
//           <Controller
//             control={control}
//             name="country"
//             render={({ field: { value } }) => (
//               <TextInput
//                 style={styles.textInput}
//                 value={value}
//                 editable={false}
//               />
//             )}
//           />
//                          <Picker
//                   selectedValue={values.country}
//                   onValueChange={(itemValue) => {
//                     setFieldValue('country', itemValue);
//                     handleCountryChange(itemValue);
//                   }}
//                 >
//                   <Picker.Item label="Select Country" value="" />
//                   {countries.map((country) => (
//                     <Picker.Item key={country.id} label={country.name} value={country} />
//                   ))}
//                 </Picker>

//         </View>
//         <View style={styles.item}>
//           <Text style={styles.subTitle}>State</Text>
//           <Controller
//             control={control}
//             name="state"
//             render={({ field: { value } }) => (
//               <TextInput
//                 style={styles.textInput}
//                 value={value}
//                 editable={false}
//               />
//             )}
//           />
//           <Picker
//                   selectedValue={values.state}
//                   onValueChange={(itemValue) => setFieldValue('state', itemValue)}
//                   enabled={isEnabled}
//                 >
//                   <Picker.Item label="Select State" value="" />
//                   {states.map((state) => (
//                     <Picker.Item key={state.id} label={state.name} value={state} />
//                   ))}
//                 </Picker>
//         </View>
//         <Button title="Save" onPress={handleSubmit(onSubmit)} />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1,
//     padding: 20,
//   },
//   profileImageWrapper: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//   },
//   profileImagePlaceholder: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: '#ccc',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   formContainer: {
//     marginTop: 10,
//   },
//   item: {
//     marginBottom: 20,
//   },
//   subTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   textInput: {
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     padding: 10,
//     marginTop: 5,
//   },
//   picker: {
//     height: 50,
//     width: '100%',
//   },
// });

// export default EditProfileScreen;
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
  const navigation = useNavigation();

  useEffect(() => {
    fetchUserInfo();
    loadCountries();
  }, []);

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
      };

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

  const handleImagePick = () => {
    launchImageLibrary({}, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        Alert.alert('Error', 'Image selection failed.');
      } else {
        setValue('profilePic', response.assets[0].uri); // Ensure to access the URI correctly
      }
    });
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.profileImageWrapper}>
        <TouchableOpacity onPress={handleImagePick}>
          {getValues('profilePic') ? (
            <Image source={{ uri: getValues('profilePic') }} style={styles.profileImage} />
          ) : (
            <View style={styles.profileImagePlaceholder}>
              {/* Add icon or placeholder */}
            </View>
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
                <TextInput
                  style={styles.textInput}
                  value={value}
                  editable={false}
                />
                <Picker
                  selectedValue={selectedCountry?.id} // Use country ID here
                  onValueChange={(itemValue) => {
                    const country = countries.find((c) => c.id === itemValue);
                    onChange(itemValue); // Update form value
                    handleCountryChange(country); // Load states when country changes
                  }}
                  style={styles.picker}
                >
                  <Picker.Item label="Select Country" value="" />
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
                <TextInput
                  style={styles.textInput}
                  value={value}
                  editable={false}
                />
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
                  <Picker.Item label="Select State" value="" />
                  {states.map((state) => (
                    <Picker.Item key={state.id} label={state.name} value={state.name} /> // Change value to state ID
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
    padding: 20,
  },
  profileImageWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileImagePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#ccc',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    marginTop: 20,
  },
  item: {
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  picker: {
    height: 50,
    width: '100%',
  },
});

export default EditProfileScreen;
// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   Button,
//   TouchableOpacity,
//   ActivityIndicator,
//   Alert,
//   StyleSheet,
//   ScrollView,
// } from 'react-native';
// import { useForm, Controller } from 'react-hook-form';
// import { Picker } from '@react-native-picker/picker';
// import { launchImageLibrary } from 'react-native-image-picker';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from '@react-navigation/native';
// import { Api } from '../providers/api/api';
// import ProfileProvider from '../providers/profile/profile';
// import CountryProvider from '../providers/country/country';

// const API_URL = 'http://aggressionmanagement.com/api';

// const api = new Api(API_URL);
// const profileProvider = new ProfileProvider(api);
// const countryProvider = new CountryProvider(api);

// const EditProfileScreen = () => {
//   const { control, handleSubmit, setValue, getValues } = useForm();
//   const [loading, setLoading] = useState(false);
//   const [userInformation, setUserInformation] = useState(null);
//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [selectedState, setSelectedState] = useState(null);
//   const [isEnabled, setIsEnabled] = useState(false);
//   const navigation = useNavigation();

//   useEffect(() => {
//     fetchUserInfo();
//     loadCountries();
//   }, []);

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

//       // Set default profile picture
//       setValue('profilePic', userDataResponse.profile_picture_url);

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
//       };

//       // Update profile info including profile picture
//       await profileProvider.edit_info({ user_id, token, ...updatedData });
//       Alert.alert('Success', 'Profile updated successfully.');
//       navigation.goBack();
//     } catch (error) {
//       console.error('Error updating profile:', error);
//       Alert.alert('Error', 'Failed to update profile.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleImagePick = () => {
//     launchImageLibrary({}, async (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         Alert.alert('Error', 'Image selection failed.');
//       } else {
//         const selectedImageUri = response.assets[0].uri;
//         setValue('profilePic', selectedImageUri); // Update profilePic field with the new image URI

//         // Upload the image to the backend
//         await uploadProfileImage(selectedImageUri);
//       }
//     });
//   };

//   const uploadProfileImage = async (imageUri) => {
//     try {
//       const userData = await AsyncStorage.getItem('user');
//       const { user_id, token } = userData ? JSON.parse(userData) : {};
//       if (!user_id || !token) {
//         Alert.alert('Error', 'User not authenticated.');
//         return;
//       }

//       const formData = new FormData();
//       formData.append('user_id', user_id);
//       formData.append('token', token);
//       formData.append('profile_picture', {
//         uri: imageUri,
//         type: 'image/jpeg', // or appropriate mime type
//         name: 'profile_picture.jpg',
//       });

//       const response = await profileProvider.upload_profile_picture(formData);
//       if (response.status === 200) {
//         Alert.alert('Success', 'Profile picture updated successfully.');
//       } else {
//         Alert.alert('Error', 'Failed to update profile picture.');
//       }
//     } catch (error) {
//       console.error('Error uploading profile picture:', error);
//       Alert.alert('Error', 'Failed to upload profile picture.');
//     }
//   };

//   if (loading) {
//     return <ActivityIndicator size="large" color="#0000ff" />;
//   }

//   return (
//     <ScrollView contentContainerStyle={styles.scrollContainer}>
//       <View style={styles.profileImageWrapper}>
//         <TouchableOpacity onPress={handleImagePick}>
//           {getValues('profilePic') ? (
//             <Image source={{ uri: getValues('profilePic') }} style={styles.profileImage} />
//           ) : (
//             <View style={styles.profileImagePlaceholder}>
//               {/* Add icon or placeholder */}
//             </View>
//           )}
//         </TouchableOpacity>
//       </View>
//       <View style={styles.formContainer}>
//         {/* Form Fields */}
//         <Controller
//           control={control}
//           name="email"
//           render={({ field: { onChange, onBlur, value } }) => (
//             <View style={styles.item}>
//               <Text style={styles.subTitle}>E-mail</Text>
//               <TextInput
//                 style={styles.textInput}
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//                 editable={false}
//               />
//             </View>
//           )}
//         />
//         <Controller
//           control={control}
//           name="fname"
//           render={({ field: { onChange, onBlur, value } }) => (
//             <View style={styles.item}>
//               <Text style={styles.subTitle}>First Name</Text>
//               <TextInput
//                 style={styles.textInput}
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//               />
//             </View>
//           )}
//         />
//         <Controller
//           control={control}
//           name="lname"
//           render={({ field: { onChange, onBlur, value } }) => (
//             <View style={styles.item}>
//               <Text style={styles.subTitle}>Last Name</Text>
//               <TextInput
//                 style={styles.textInput}
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//               />
//             </View>
//           )}
//         />
//         <Controller
//           control={control}
//           name="title"
//           render={({ field: { onChange, onBlur, value } }) => (
//             <View style={styles.item}>
//               <Text style={styles.subTitle}>Title</Text>
//               <TextInput
//                 style={styles.textInput}
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//               />
//             </View>
//           )}
//         />
//         <Controller
//           control={control}
//           name="Organization"
//           render={({ field: { onChange, onBlur, value } }) => (
//             <View style={styles.item}>
//               <Text style={styles.subTitle}>Organization</Text>
//               <TextInput
//                 style={styles.textInput}
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//               />
//             </View>
//           )}
//         />
//         <Controller
//           control={control}
//           name="Profession"
//           render={({ field: { onChange, onBlur, value } }) => (
//             <View style={styles.item}>
//               <Text style={styles.subTitle}>Profession</Text>
//               <TextInput
//                 style={styles.textInput}
//                 onBlur={onBlur}
//                 onChangeText={onChange}
//                 value={value}
//               />
//             </View>
//           )}
//         />
//         <Controller
//           control={control}
//           name="country"
//           render={({ field: { onChange, onBlur, value } }) => (
//             <View style={styles.item}>
//               <Text style={styles.subTitle}>Country</Text>
//               <Picker
//                 selectedValue={selectedCountry?.id}
//                 onValueChange={(itemValue) => {
//                   const selectedCountry = countries.find(c => c.id === itemValue);
//                   handleCountryChange(selectedCountry);
//                   onChange(itemValue);
//                 }}
//               >
//                 {countries.map((country) => (
//                   <Picker.Item key={country.id} label={country.name} value={country.id} />
//                 ))}
//               </Picker>
//             </View>
//           )}
//         />
//         <Controller
//           control={control}
//           name="state"
//           render={({ field: { onChange, onBlur, value } }) => (
//             <View style={styles.item}>
//               <Text style={styles.subTitle}>State</Text>
//               <Picker
//                 enabled={isEnabled}
//                 selectedValue={selectedState?.id}
//                 onValueChange={(itemValue) => {
//                   const selectedState = states.find(s => s.id === itemValue);
//                   setSelectedState(selectedState);
//                   onChange(itemValue);
//                 }}
//               >
//                 {states.map((state) => (
//                   <Picker.Item key={state.id} label={state.name} value={state.id} />
//                 ))}
//               </Picker>
//             </View>
//           )}
//         />
//         <View style={styles.item}>
//           <Button title="Update Profile" onPress={handleSubmit(onSubmit)} />
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1,
//     padding: 20,
//   },
//   profileImageWrapper: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//   },
//   profileImagePlaceholder: {
//     width: 100,
//     height: 100,
//     backgroundColor: '#ccc',
//     borderRadius: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   formContainer: {
//     flex: 1,
//   },
//   item: {
//     marginBottom: 20,
//   },
//   textInput: {
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     paddingVertical: 5,
//   },
//   subTitle: {
//     fontSize: 14,
//     color: '#555',
//     marginBottom: 5,
//   },
// });

// export default EditProfileScreen;
