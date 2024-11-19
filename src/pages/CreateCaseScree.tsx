
// // import React, { useState, useEffect } from 'react';
// // import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// // import { Picker } from '@react-native-picker/picker';
// // import { useNavigation } from '@react-navigation/native';
// // import { Formik } from 'formik';
// // import * as Yup from 'yup';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import Geolocation from '@react-native-community/geolocation';
// // import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from 'react-native-geocoding';
// // import { Api } from '../providers/api/api';
// // import { CreateCaseProvider } from '../providers/createcase/createcase';
// // import { useLoader } from '../providers/loader/loader';
// // import { InterneterrorProvider } from '../providers/interneterror/InternetErrorProvider';

// // const CreateCaseScreen = () => {
// //   const [knowPerson, setKnowPerson] = useState(false);
// //   const [unknowPerson, setUnknowPerson] = useState(false);
// //   const [visibleMark, setVisibleMark] = useState(false);
// //   const [token, setToken] = useState<string | null>(null);
// //   const [clientId, setClientId] = useState<string | null>(null);
// //   const [userId, setUserId] = useState<string | null>(null);
// //   const [lat, setLat] = useState<number | null>(null);
// //   const [long, setLong] = useState<number | null>(null);
// //   const [currentAddress, setCurrentAddress] = useState<string | null>(null);
// //   const navigation = useNavigation();
// //   const { showLoader, hideLoader } = useLoader();
// //   const internetErrorProvider = new InterneterrorProvider();
// //   const api = new Api();
// //   const createCaseProvider = new CreateCaseProvider(api);

// //   const heightOptions = Array.from({ length: 11 }, (_, i) => ({ height: i + 1 }));
// //   const inchOptions = Array.from({ length: 11 }, (_, i) => ({ inch: i + 1 }));

// //   useEffect(() => {
// //     const loadUserData = async () => {
// //       const user = await AsyncStorage.getItem('user');
// //       if (user) {
// //         const userObj = JSON.parse(user);
// //         setUserId(userObj.user_id);
// //         setToken(userObj.token);
// //       }
// //     };
// //     const loadClientId = async () => {
// //       const client_id = await AsyncStorage.getItem('client_id');
// //       setClientId(client_id);
// //     };

// //     loadUserData();
// //     loadClientId();
// //     loadMap();
// //   }, []);

// //   const loadMap = () => {
// //     Geolocation.getCurrentPosition(
// //       (position) => {
// //         setLat(position.coords.latitude);
// //         setLong(position.coords.longitude);
// //         getCurrentAddress(position.coords.latitude, position.coords.longitude);
// //       },
// //       (error) => console.log(error),
// //       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
// //     );
// //   };

// //   const getCurrentAddress = (latitude: number, longitude: number) => {
// //     const options: NativeGeocoderOptions = {
// //       useLocale: true,
// //       maxResults: 5,
// //     };

// //     NativeGeocoder.reverseGeocode(latitude, longitude, options)
// //       .then((results: NativeGeocoderResult[]) => {
// //         setCurrentAddress(results[0].locality);
// //       })
// //       .catch((error: any) => console.log(error));
// //   };

// //   const current_date = () => {
// //     const today = new Date();
// //     const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
// //     const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
// //     return date + ' ' + time;
// //   };

// //   const showAlert = (result: string, msg: string) => {
// //     Alert.alert(result, msg, [{ text: 'OK' }]);
// //   };

// //   const handleSubmitKnown = (values: any) => {
// //     const suspect_info = {
// //       suspect_name: values.suspect_name,
// //       last_name: values.subject_last_name,
// //       known: 1,
// //       gender: '',
// //       token: token,
// //       race: '',
// //       height: '',
// //       weight: '',
// //       age: '',
// //       visible_marks: '',
// //       hair_color: '',
// //       eye_color: '',
// //       place_of_incident: currentAddress,
// //       distinguishing_clothing: '',
// //       accent: '',
// //       additional_info: '',
// //       date: current_date(),
// //       client_id: clientId,
// //       user_id: userId,
// //       lat: lat,
// //       long: long,
// //     };
  
// //     showLoader();
// //     createCaseProvider.createCase(suspect_info)
// //       .then((res: any) => {
// //         hideLoader();
// //         if (res === null || res === undefined || res.result === 'failed') {
// //           if (res.msg === 'Your account is deactivated, please contact support.' || res.msg === 'Case not created') {
// //             AsyncStorage.setItem('user', '');
// //             navigation.reset({ index: 0, routes: [{ name: 'LoginPage' }] });
// //           } else {
// //             showAlert(res.result, res.msg);
// //           }
// //         } else if (res.msg === 'Case created successfully.') {
// //           const suspectInfo = {
// //             suspect_name: res.suspect_name,
// //             case_id: res.case_id,
// //             last_name: res.last_name,
// //             token: token,
// //             client_id: clientId,
// //             user_id: userId,
// //             lat: lat,
// //             long: long,
// //             place_of_incident: currentAddress,
// //           };
// //           navigation.reset({
// //             index: 0,
// //             routes: [{ name: 'AggressionMeterScreen', params: { suspect_info: suspectInfo } }],
// //           });
// //         }
// //       })
// //       .catch((err) => {
// //         hideLoader();
// //         internetErrorProvider.error();
// //       });
// //   };
  
// //   const handleSubmitUnknown = (values: any) => {
// //     const height = values.height[0];
// //     const inch = values.inch[0];
// //     const height_info = `${height},${inch}`;
  
// //     const suspect_info = {
// //       known: 0,
// //       gender: values.gender,
// //       token: token,
// //       race: values.Race,
// //       height: height_info,
// //       weight: values.weight,
// //       age: values.age,
// //       visible_marks: visibleMark ? 1 : 0,
// //       place_of_incident: currentAddress,
// //       distinguishing_clothing: values.cloth,
// //       accent: values.Accent,
// //       additional_info: values.additional_info,
// //       date: current_date(),
// //       client_id: clientId,
// //       user_id: userId,
// //       visible_marks_desc: values.marks_desc,
// //       lat: lat,
// //       long: long,
// //       eye_color: values.eye_color,
// //       hair_color: values.hair_color,
// //     };
  
// //     showLoader();
// //     createCaseProvider.createCase(suspect_info)
// //       .then((res: any) => {
// //         hideLoader();
// //         if (res === null || res === undefined || res.result === 'failed') {
// //           if (res.msg === 'Your account is deactivated, please contact support.' || res.msg === 'Case not created') {
// //             AsyncStorage.setItem('user', '');
// //             navigation.reset({ index: 0, routes: [{ name: 'LoginPage' }] });
// //           } else {
// //             showAlert(res.result, res.msg);
// //           }
// //         } else if (res.msg === 'Case created successfully.') {
// //           const suspectInfo = {
// //             suspect_name: res.suspect_name,
// //             case_id: res.case_id,
// //             token: token,
// //             client_id: clientId,
// //             user_id: userId,
// //             lat: lat,
// //             long: long,
// //             place_of_incident: currentAddress,
// //           };
// //           navigation.reset({
// //             index: 0,
// //             routes: [{ name: 'AggressionmeterPage', params: { suspect_info: suspectInfo } }],
// //           });
// //         }
// //       })
// //       .catch((err) => {
// //         hideLoader();
// //         internetErrorProvider.error();
// //       });
// //   };
  
// //   return (
// //     <ScrollView contentContainerStyle={styles.container}>
// //       <Formik
// //         initialValues={{
// //           suspect_name: '',
// //           subject_last_name: '',
// //           gender: '',
// //           Race: '',
// //           height: '',
// //           inch: '',
// //           weight: '',
// //           age: '',
// //           Place: '',
// //           cloth: '',
// //           Accent: '',
// //           marks: false,
// //           marks_desc: '',
// //           additional_info: '',
// //           hair_color: '',
// //           eye_color: '',
// //         }}
// //         validationSchema={Yup.object().shape({
// //           suspect_name: Yup.string().required('Required').matches(/^[a-zA-Z -]*$/, 'Invalid name'),
// //           subject_last_name: Yup.string().required('Required').matches(/^[a-zA-Z -]*$/, 'Invalid last name'),
// //         })}
// //         onSubmit={(values) => knowPerson ? handleSubmitKnown(values) : handleSubmitUnknown(values)}
// //       >
// //         {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
// //           <View>
// //             {knowPerson && (
// //               <View>
// //                 <TextInput
// //                   placeholder="Suspect Name"
// //                   onChangeText={handleChange('suspect_name')}
// //                   onBlur={handleBlur('suspect_name')}
// //                   value={values.suspect_name}
// //                   style={styles.input}
// //                 />
// //                 <TextInput
// //                   placeholder="Last Name"
// //                   onChangeText={handleChange('subject_last_name')}
// //                   onBlur={handleBlur('subject_last_name')}
// //                   value={values.subject_last_name}
// //                   style={styles.input}
// //                 />
// //               </View>
// //             )}
// //             {unknowPerson && (
// //               <View>
// //                 <Text style={styles.label}>Gender</Text>
// //                 <Picker
// //                   selectedValue={values.gender}
// //                   onValueChange={(itemValue) => setFieldValue('gender', itemValue)}
// //                   style={styles.picker}
// //                 >
// //                   <Picker.Item label="Select Gender" value="" />
// //                   <Picker.Item label="Male" value="male" />
// //                   <Picker.Item label="Female" value="female" />
// //                 </Picker>

// //                 <Text style={styles.label}>Race</Text>
// //                 <TextInput
// //                   placeholder="Race"
// //                   onChangeText={handleChange('Race')}
// //                   onBlur={handleBlur('Race')}
// //                   value={values.Race}
// //                   style={styles.input}
// //                 />

// //                 <Text style={styles.label}>Height</Text>
// //                 <View style={styles.row}>
// //                   <Picker
// //                     selectedValue={values.height}
// //                     onValueChange={(itemValue) => setFieldValue('height', itemValue)}
// //                     style={styles.picker}
// //                   >
// //                     <Picker.Item label="Select Height" value="" />
// //                     {heightOptions.map((option, index) => (
// //                       <Picker.Item key={index} label={`${option.height}`} value={`${option.height}`} />
// //                     ))}
// //                   </Picker>
// //                   <Picker
// //                     selectedValue={values.inch}
// //                     onValueChange={(itemValue) => setFieldValue('inch', itemValue)}
// //                     style={styles.picker}
// //                   >
// //                     <Picker.Item label="Select Inches" value="" />
// //                     {inchOptions.map((option, index) => (
// //                       <Picker.Item key={index} label={`${option.inch}`} value={`${option.inch}`} />
// //                     ))}
// //                   </Picker>
// //                 </View>

// //                 <Text style={styles.label}>Weight</Text>
// //                 <TextInput
// //                   placeholder="Weight"
// //                   onChangeText={handleChange('weight')}
// //                   onBlur={handleBlur('weight')}
// //                   value={values.weight}
// //                   style={styles.input}
// //                 />

// //                 <Text style={styles.label}>Age</Text>
// //                 <TextInput
// //                   placeholder="Age"
// //                   onChangeText={handleChange('age')}
// //                   onBlur={handleBlur('age')}
// //                   value={values.age}
// //                   style={styles.input}
// //                 />

// //                 <Text style={styles.label}>Distinguishing Clothing</Text>
// //                 <TextInput
// //                   placeholder="Clothing"
// //                   onChangeText={handleChange('cloth')}
// //                   onBlur={handleBlur('cloth')}
// //                   value={values.cloth}
// //                   style={styles.input}
// //                 />

// //                 <Text style={styles.label}>Accent</Text>
// //                 <TextInput
// //                   placeholder="Accent"
// //                   onChangeText={handleChange('Accent')}
// //                   onBlur={handleBlur('Accent')}
// //                   value={values.Accent}
// //                   style={styles.input}
// //                 />

// //                 <View style={styles.checkboxContainer}>
// //                   <Text>Visible Marks</Text>
// //                   <TouchableOpacity
// //                     onPress={() => {
// //                       setVisibleMark(!visibleMark);
// //                       setFieldValue('marks', !visibleMark);
// //                     }}
// //                     style={styles.checkbox}
// //                   >
// //                     {visibleMark && <View style={styles.checked} />}
// //                   </TouchableOpacity>
// //                 </View>

// //                 {visibleMark && (
// //                   <TextInput
// //                     placeholder="Marks Description"
// //                     onChangeText={handleChange('marks_desc')}
// //                     onBlur={handleBlur('marks_desc')}
// //                     value={values.marks_desc}
// //                     style={styles.input}
// //                   />
// //                 )}

// //                 <Text style={styles.label}>Hair Color</Text>
// //                 <TextInput
// //                   placeholder="Hair Color"
// //                   onChangeText={handleChange('hair_color')}
// //                   onBlur={handleBlur('hair_color')}
// //                   value={values.hair_color}
// //                   style={styles.input}
// //                 />

// //                 <Text style={styles.label}>Eye Color</Text>
// //                 <TextInput
// //                   placeholder="Eye Color"
// //                   onChangeText={handleChange('eye_color')}
// //                   onBlur={handleBlur('eye_color')}
// //                   value={values.eye_color}
// //                   style={styles.input}
// //                 />

// //                 <Text style={styles.label}>Additional Information</Text>
// //                 <TextInput
// //                   placeholder="Additional Information"
// //                   onChangeText={handleChange('additional_info')}
// //                   onBlur={handleBlur('additional_info')}
// //                   value={values.additional_info}
// //                   style={styles.input}
// //                 />
// //               </View>
// //             )}

// //             <Button title="Submit" onPress={handleSubmit as any} />
// //           </View>
// //         )}
// //       </Formik>

// //       <View style={styles.radioGroup}>
// //         <Text style={styles.label}>Do you know the person?</Text>
// //         <TouchableOpacity onPress={() => setKnowPerson(true)}>
// //           <Text style={knowPerson ? styles.selectedRadio : styles.radio}>Yes</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity onPress={() => setUnknowPerson(true)}>
// //           <Text style={unknowPerson ? styles.selectedRadio : styles.radio}>No</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flexGrow: 1,
// //     padding: 20,
// //     backgroundColor: '#f5f5f5',
// //   },
// //   input: {
// //     backgroundColor: '#fff',
// //     padding: 10,
// //     marginVertical: 8,
// //     borderRadius: 5,
// //     borderWidth: 1,
// //     borderColor: '#ddd',
// //   },
// //   label: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     marginVertical: 8,
// //   },
// //   picker: {
// //     backgroundColor: '#fff',
// //     borderColor: '#ddd',
// //     borderWidth: 1,
// //     borderRadius: 5,
// //     marginBottom: 15,
// //     paddingHorizontal: 10,
// //   },
// //   row: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //   },
// //   radioGroup: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     marginVertical: 20,
// //   },
// //   radio: {
// //     fontSize: 16,
// //     color: '#007BFF',
// //   },
// //   selectedRadio: {
// //     fontSize: 16,
// //     color: '#0056b3',
// //     fontWeight: 'bold',
// //   },
// //   checkboxContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginVertical: 10,
// //   },
// //   checkbox: {
// //     width: 20,
// //     height: 20,
// //     borderWidth: 1,
// //     borderColor: '#ddd',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginLeft: 10,
// //   },
// //   checked: {
// //     width: 14,
// //     height: 14,
// //     backgroundColor: '#007BFF',
// //   },
// // });

// // export default CreateCaseScreen;



// import React, { useState, useRef, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Alert, TextInput, Modal, Linking } from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
// import { fetchApi } from 'react-native-fetch-api';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import HeightPicker from './HeightPicker'; // Adjust the path as needed
// import InchPicker from './InchPicker';
// import { Api } from '../providers/api/api';
// import { CreateCaseProvider } from '../providers/createcase/createcase';
// import { useLoader } from '../providers/loader/loader';
// import { InterneterrorProvider } from '../providers/interneterror/InternetErrorProvider';
// import Geolocation from '@react-native-community/geolocation';





// const CreateCaseScreen = () => {
//   const [knowPerson, setKnowPerson] = useState(false);
//   const [unknownPerson, setUnknownPerson] = useState(false);
//   const [visibleMark, setVisibleMark] = useState(false);
//   const [token, setToken] = useState<string | null>(null);
//   const [clientId, setClientId] = useState<string | null>(null);
//   const [userId, setUserId] = useState<string | null>(null);
//   const [lat, setLat] = useState<number | null>(null);
//   const [long, setLong] = useState<number | null>(null);
//   const [currentAddress, setCurrentAddress] = useState<string | null>(null);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [gender, setGender] = useState('');
//   const [visible_marks_desc, setmarkDesk] = useState('');
//   const [skinTone, setSkinTone] = useState('');
//   const [eye_color, setEyeColor] = useState('');
//   const [hair_color, setHairColor] = useState('');
//   const [height, setHeight] = useState('');
//   const [inch, setInch] = useState('');
//   const [weight, setWeight] = useState('');
//   const [age, setAge] = useState('');
//   const [place, setPlace] = useState('');
//   const [clothing, setClothing] = useState('');
//   const [accent, setAccent] = useState('');
//   const [information, setInformation] = useState('');
  
//   const [errors, setErrors] = useState({
//     firstName: '',
//     lastName: '',
//   });
//   const [isHeightPickerVisible, setIsHeightPickerVisible] = useState(false);
//   const [isInchPickerVisible, setIsInchPickerVisible] = useState(false);
//   const [logoutModalVisible, setLogoutModalVisible] = useState(false);
//   const [visibleScarsMarksTattoos, setVisibleScarsMarksTattoos] = useState('');
//   const [hasVisibleScarsMarksTattoos, setHasVisibleScarsMarksTattoos] = useState(false);
//   const [showFooter, setShowFooter] = useState(true);
 
//   const navigation = useNavigation();
//   const { showLoader, hideLoader } = useLoader();
//   const internetErrorProvider = new InterneterrorProvider();
//   const api = new Api();
//   const createCaseProvider = new CreateCaseProvider(api);

//   const lastNameRef = useRef<TextInput>(null);
//   const skinToneRef = useRef<TextInput>(null);
//   const eyeColorRef = useRef<TextInput>(null);
//   const hairColorRef = useRef<TextInput>(null);
//   const weightRef = useRef<TextInput>(null);
//   const ageRef = useRef<TextInput>(null);
//   const placeRef = useRef<TextInput>(null);
//   const clothingRef = useRef<TextInput>(null);
//   const accentRef = useRef<TextInput>(null);
//   const informationRef = useRef<TextInput>(null);

//   useEffect(() => {
//     const loadUserData = async () => {
//       const user = await AsyncStorage.getItem('user');
//       if (user) {
//         const userObj = JSON.parse(user);
//         setUserId(userObj.user_id);
//         setToken(userObj.token);
//       }
//     };

//     const loadClientId = async () => {
//       const client_id = await AsyncStorage.getItem('client_id');
//       setClientId(client_id);
//     };

//     loadUserData();
//     loadClientId();
//     loadMap();
//   }, []);

//   const loadMap = () => {
//     Geolocation.getCurrentPosition(
//       (position) => {
//         setLat(position.coords.latitude);
//         setLong(position.coords.longitude);
//         getCurrentAddress(position.coords.latitude, position.coords.longitude);
//       },
//       (error) => console.log(error),
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     );
//   };

  
//   const getCurrentAddress = async (latitude, longitude) => {
//     const url = `${PLACES_API_BASE}/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`;
  
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
  
//       if (data.status === 'OK') {
//         const address = data.results[0].formatted_address;
//         setCurrentAddress(address);  // Set the exact address here
//       } else {
//         console.log('Error fetching address:', data.status);
//       }
//     } catch (error) {
//       console.log('Error fetching address:', error);
//     }
//   };
  
//     const API_KEY = 'AIzaSyC2GNzQwQP-mMTxnCxK6NOTjCFx-mYjvBg';
//     const PLACES_API_BASE = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';
//   const currentDate = () => {
//     const today = new Date();
//     const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//     const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
//     return date + ' ' + time;
//   };

//   const showAlert = (result: string, msg: string) => {
//     Alert.alert(result, msg, [{ text: 'OK' }]);
//   };

//   const isCreateEnabled = (knowPerson && firstName && lastName) || 
//                           (unknownPerson && gender && skinTone && eye_color && hair_color && height && inch && weight && age && place && clothing && accent && information && visible_marks_desc);

//   const handleSelectHeight = (selectedHeight) => {
//     setHeight(selectedHeight);
//     setIsHeightPickerVisible(false);
//   };

//   const handleSelectInch = (selectedInch) => {
//     setInch(selectedInch);
//     setIsInchPickerVisible(false);
//   };

//   const handleWeightChange = (text) => {
//     if (/^\d*$/.test(text)) {
//       setWeight(text);
//     }
//   };

//   const handleAgeChange = (text) => {
//     if (/^\d*$/.test(text)) {
//       setAge(text);
//     }
//   };

//   const handleFirstNameChange = (text) => {
//     setFirstName(text);
//   };

//   const handleLastNameChange = (text) => {
//     setLastName(text);
//   };

//   const handleCreate = () => {
//     if (knowPerson) {
//       handleSubmitKnown();
//     } else if (unknownPerson) {
//       handleSubmitUnknown();
//     } else {
//       Alert.alert('Error', 'Please select a known or unknown person');
//     }
//   };

//   const handleBlur = (fieldName, value) => {
//     if (!value) {
//       setErrors(prevErrors => ({
//         ...prevErrors,
//         [fieldName]: `${fieldName.replace(/([A-Z])/g, ' $1').toLowerCase()} cannot be empty`
//       }));
//     }
//   };

//   const checkIfAllFieldsAreFilled = () => {
//     setIsCreateEnabled(
//       firstName && lastName && !errors.firstName && !errors.lastName
//     );
//   };

//   const handleSubmitKnown = () => {
//     const suspect_info = {
//       suspect_name: firstName,
//       last_name: lastName,
//       known: 1,
//       token: token,
//       race: '',
//       height: '',
//       weight: '',
//       age: '',
//       visible_marks: hasVisibleScarsMarksTattoos ? 1 : 0,
//       visible_marks_desc: '',
//       hair_color: '',
//       eye_color: '',
//       place_of_incident: currentAddress,
//       distinguishing_clothing: '',
//       accent: '',
//       additional_info: '',
//       date: currentDate(),
//       client_id: clientId,
//       user_id: userId,
//       lat: lat,
//       long: long,
//     };

//     showLoader();
//     createCaseProvider.createCase(suspect_info)
//       .then((res) => {
//         hideLoader();
//         if (res?.result === 'failed') {
//           if (res.msg === 'Your account is deactivated, please contact support.' || res.msg === 'Case not created') {
//             AsyncStorage.setItem('user', '');
//             navigation.reset({ index: 0, routes: [{ name: 'LoginPage' }] });
//           } else {
//             showAlert(res.result, res.msg);
//           }
//         } else if (res.msg === 'Case created successfully.') {
//           const suspect_info = {
//             suspect_name: res.suspect_name,
//             case_id: res.case_id,
//             last_name: res.last_name,
//           };
//           navigation.reset({ index: 0, routes: [{ name: 'AggressionMeterScreen', params: { suspect_info, case_id: res.case_id } }] });
//         }
//       })
//       .catch((err) => {
//         hideLoader();
//         internetErrorProvider.error();
//       });
//   };

//   const handleSubmitUnknown = () => {
//     const height_info = `${height},${inch}`;

//     const suspect_info = {
//       known: 0,
//       gender: gender,
//       race: skinTone,
//       height: height_info,
//       weight: weight,
//       age: age,
//       place_of_incident: place,
//       distinguishing_clothing: clothing,
//       accent: accent,
//       eye_color: eye_color,
//       hair_color: hair_color,
//       additional_info: information,
//       visible_marks:  hasVisibleScarsMarksTattoos ? 1 : 0,
//       visible_marks_desc: visible_marks_desc,
//       date: currentDate(),
//       token: token,
//       client_id: clientId,
//       user_id: userId,
//       lat: lat,
//       long: long,
//     };

//     showLoader();
//     createCaseProvider.createCase(suspect_info)
//       .then((res) => {
//         hideLoader();
//         if (res?.result === 'failed') {
//           if (res.msg === 'Your account is deactivated, please contact support.' || res.msg === 'Case not created') {
//             AsyncStorage.setItem('user', '');
//             navigation.reset({ index: 0, routes: [{ name: 'LoginPage' }] });
//           } else {
//             showAlert(res.result, res.msg);
//           }
//         } else if (res.msg === 'Case created successfully.') {
//           const suspect_info = {
//             suspect_name: res.suspect_name,
//             case_id: res.case_id,
//             last_name: res.last_name,
//           };
//           navigation.reset({ index: 0, routes: [{ name: 'AggressionMeterScreen', params: { suspect_info, case_id: res.case_id } }] });
//         }
//       })
//       .catch((err) => {
//         hideLoader();
//         internetErrorProvider.error();
//       });
//   };
//   const handleLogout = () => {
//     setLogoutModalVisible(false);
//     Alert.alert('Logged Out', 'You have been logged out.');
//   };

//   const handleLogoutCancel = () => {
//     setLogoutModalVisible(false);
//   };
//   const handleCheckboxChange = (type) => {
//     if (type === 'know') {
//       setKnowPerson(!knowPerson);
//       if (knowPerson) {
//         setFirstName('');
//         setLastName('');
//       }
//     } else if (type === 'unknown') {
//       setUnknownPerson(!unknownPerson);
//       if (unknownPerson) {
//         setGender('');
//         setSkinTone('');
//         setEyeColor('');
//         setHairColor('');
//         setHeight('');
//         setInch('');
//         setWeight('');
//         setAge('');
//         setPlace('');
//         setmarkDesk('');
//         setClothing('');
//         setAccent('');
//         setInformation('');
//       }
//     }
//   };
//   return (
    
//     <View style={styles.container}>
//     <View style={styles.header}>
//       <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//         <Image source={require('../assets/img/backarrow.png')} style={styles.backIcon} />
//       </TouchableOpacity>
//       <Text style={styles.headerText}>Emerging Aggression</Text>
//     </View>
   
//     <ScrollView  contentContainerStyle={styles.scrollContainer}>
//     <View style={styles.checkboxContainer}>
//      <View style={styles.checkboxWrapper}>
//       <CheckBox
//         value={knowPerson}
//         onValueChange={() => handleCheckboxChange('know')}
//         style={styles.checkbox}
//         disabled={unknownPerson}
//       />
//       <Text style={styles.label}>Known {'\n'}Person</Text>
//       </View>
    
//     <View style={styles.checkboxWrapper}>
//       <CheckBox
//         value={unknownPerson}
//         onValueChange={() => handleCheckboxChange('unknown')}
//         disabled={knowPerson}
//       />
//       <Text style={styles.label}>Unknown  {'\n'} Person</Text>
//     </View>
//     </View>
//     <Text style={styles.ptext}>Insert details about the subject and case</Text>


//     {knowPerson && (
//       <View >
//         <View style={styles.inputContainer}>
//         <Image source={require('../assets/img/user.png')} style={styles.icon} />
//         <TextInput
//           style={styles.put}
//           placeholder="First Name"
//           value={firstName}
//           onChangeText={handleFirstNameChange}
//           onBlur={() => handleBlur('firstName', firstName)}
//         />
//         </View>
//         {errors.firstName ? <Text style={styles.errorText}>{errors.firstName}</Text> : null}
//         <View style={styles.inputContainer}>
//         <Image source={require('../assets/img/user.png')} style={styles.icon} />
//         <TextInput
//           style={styles.put}
//           placeholder="Last Name"
//           value={lastName}
//           onChangeText={handleLastNameChange}
//           onBlur={() => handleBlur('lastName', lastName)}
//         />
//         </View>
//         <View style={styles.buttonContainer}>
//             <TouchableOpacity
//               style={[styles.createButton, !isCreateEnabled && styles.disabledButton]}
//               disabled={!isCreateEnabled}
//               onPress={handleCreate}
//             >
//               <Text style={styles.createButtonText}>Create</Text>
//             </TouchableOpacity>
//           </View>
//         {errors.lastName ? <Text style={styles.errorText}>{errors.lastName}</Text> : null}
//       </View>
      
//     )}

   

//     {unknownPerson && (
//       <View style={styles.unknownPersonForm}>
//                     <View style={styles.genderContainer}>
//             <TouchableOpacity
//               style={[styles.genderOption, gender === 'male' && styles.selectedGenderOption]}
//               onPress={() => setGender('male')}
//             >
//               <Text style={[styles.genderLabel, gender === 'male' && styles.selectedGenderLabel]}>Male</Text>
//               <View style={[styles.radioCircle, gender === 'male' && styles.selectedRb]} />
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[styles.genderOption, gender === 'female' && styles.selectedGenderOption]}
//               onPress={() => setGender('female')}
//             >
//               <Text style={[styles.genderLabel, gender === 'female' && styles.selectedGenderLabel]}>Female</Text>
//               <View style={[styles.radioCircle, gender === 'female' && styles.selectedRb]} />
//             </TouchableOpacity>
//           </View>
//           <View style={styles.inputContainer}>
//             <Image source={require('../assets/img/user.png')} style={styles.icon} />
//             <TextInput
//               style={styles.put}
//               placeholder="Skin Tone"
//               value={skinTone}
//               onChangeText={setSkinTone}
//               returnKeyType="next"
//               onSubmitEditing={() => eyeColorRef.current.focus()}
//               ref={skinToneRef}
//             />
//           </View>
//           <View style={styles.inputContainer}>
//             <Image source={require('../assets/img/user.png')} style={styles.icon} />
//             <TextInput
//               style={styles.put}
//               placeholder="Eye Color"
//               value={eye_color}
//               onChangeText={setEyeColor}
//               returnKeyType="next"
//               onSubmitEditing={() => hairColorRef.current.focus()}
//               ref={eyeColorRef}
//             />
//           </View>
//           <View style={styles.inputContainer}>
//             <Image source={require('../assets/img/user.png')} style={styles.icon} />
//             <TextInput
//               style={styles.put}
//               placeholder="Hair Color"
//               value={hair_color}
//               onChangeText={setHairColor}
//               returnKeyType="next"
//               onSubmitEditing={() => weightRef.current.focus()}
//               ref={hairColorRef}
//             />
//           </View>
//           <View style={styles.heightInchContainer}>
//       <TouchableOpacity
//         style={styles.buttonLikeInput}
//         onPress={() => setIsHeightPickerVisible(true)}
//       >
//                   <Text style={styles.buttonText}>Height</Text>
//         <Text style={styles.buttonText}>{height }</Text>
//         <Image source={require('../assets/img/dropdownarrow.png')} style={styles.dropdownIcon} />
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.buttonLikeInput}
//         onPress={() => setIsInchPickerVisible(true)}
//       >
//                 <Text style={styles.buttonText}>Inch</Text>
//         <Text style={styles.buttonText}>{inch }</Text>
//         <Image source={require('../assets/img/dropdownarrow.png')} style={styles.dropdownIcon} />
//       </TouchableOpacity>
//     </View>
//        <View style={styles.inputContainer}>
//       <Image source={require('../assets/img/user.png')} style={styles.icon} />
//       <TextInput
//         style={styles.put}
//         placeholder="Approximate Weight (in pounds)"
//         value={weight}
//         onChangeText={handleWeightChange}
//         ref={weightRef}
//         returnKeyType="next"
//         keyboardType="numeric"
//         onSubmitEditing={() => ageRef.current.focus()}
//       />
//     </View>
//     <View style={styles.inputContainer}>
//       <Image source={require('../assets/img/user.png')} style={styles.icon} />
//       <TextInput
//         style={styles.put}
//         placeholder="Approximate Age"
//         value={age}
//         onChangeText={handleAgeChange}
//         ref={ageRef}
//         keyboardType="numeric"
//         returnKeyType="next"
//         onSubmitEditing={() => placeRef.current.focus()}
//       />
//     </View>
//     <View style={styles.checkboxWrapper}>
//             <CheckBox
//               value={hasVisibleScarsMarksTattoos}
//               onValueChange={setHasVisibleScarsMarksTattoos}
//               style={styles.checkbox}
//             />
//             <Text style={styles.label}>Visible Scars,Marks,Tattoos</Text>
//           </View>
         
//           {hasVisibleScarsMarksTattoos && (
//   <View style={styles.inputContainer}>
//     <Image source={require('../assets/img/user.png')} style={styles.icon} />
//     <TextInput
//       style={styles.put}
//       placeholder="Visible scars, marks, tattoos"
//       value={visible_marks_desc}
//       multiline={true}
//       numberOfLines={5}
//       onChangeText={setmarkDesk}
//       returnKeyType="next"
//       onSubmitEditing={() => placeRef.current.focus()}
//     />
//   </View>
// )}
//     <View style={styles.inputContainer}>
//     <Image source={require('../assets/img/user.png')} style={styles.icon} />
//       <TextInput
//         style={styles.put}
//         placeholder="Place of incident"
//         value={place}
//         multiline={true}
//         numberOfLines={5}
//         onChangeText={setPlace}
//         ref={placeRef}
//         returnKeyType="next"
//         onSubmitEditing={() => clothingRef.current.focus()}
//       />
//     </View>
//     <View style={styles.inputContainer}>
//       <Image source={require('../assets/img/clothing.png')} style={styles.icon} />
//       <TextInput
//         style={styles.put}
//         placeholder="Distinguishing clothing"
//         value={clothing}
//         multiline={true}
//         numberOfLines={5}
//         onChangeText={setClothing}
//         ref={clothingRef}
//         returnKeyType="next"
//         onSubmitEditing={() => accentRef.current.focus()}
//       />
//     </View>
//     <View style={styles.inputContainer}>
//       <Image source={require('../assets/img/user.png')} style={styles.icon} />
//       <TextInput
//         style={styles.put}
//         placeholder="Accent"
//         value={accent}
//         multiline={true}
//         numberOfLines={5}
//         onChangeText={setAccent}
//         ref={accentRef}
//         returnKeyType="next"
//         onSubmitEditing={() => informationRef.current.focus()}
//       />
//     </View>
//     <View style={styles.inputContainer}>
//       <Image source={require('../assets/img/user.png')} style={styles.icon} />
//       <TextInput
//         style={styles.put}
//         placeholder="Additional Information"
//         value={information}
//         onChangeText={setInformation}
//         ref={informationRef}
//         multiline={true}
//         numberOfLines={5}
//         returnKeyType="done"
//       />
//     </View>
//     <View style={styles.buttonContainer}>
//       <TouchableOpacity
//       style={styles.createButton}
//       disabled={!isCreateEnabled}
//       onPress={handleCreate}
//     >
//       <Text style={styles.buttonText}>Create Case</Text>
//     </TouchableOpacity>
//     </View> 
//       </View>
//     )}

    
//   </ScrollView>
//   {showFooter && (
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
//      <Modal
//       animationType="slide"
//       transparent={true}
//       visible={logoutModalVisible}
//       onRequestClose={() => setLogoutModalVisible(false)}
//     >
//       <View style={styles.centeredView}>
//         <View style={styles.modalView}>
//           <Text style={styles.modalTitles}>Confirm Logout</Text>
//           <Text style={styles.modalText}>Are you sure you want to log out?</Text>
//           <View style={styles.modalButtonContainer}>
//             <TouchableOpacity
//               style={styles.modalButton}
//               onPress={handleLogout}
//             >
//               <Text style={styles.modalButtonText}>Yes</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.modalButton}
//               onPress={handleLogoutCancel}
//             >
//               <Text style={styles.modalButtonText}>No</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </Modal>
    
  
//     <HeightPicker
//       visible={isHeightPickerVisible}
//       onSelect={handleSelectHeight}
//       onClose={() => setIsHeightPickerVisible(false)}
//     />

//     <InchPicker
//       visible={isInchPickerVisible}
//       onSelect={handleSelectInch}
//       onClose={() => setIsInchPickerVisible(false)}
//     />
 
// </View>
// );
// };



// const styles = StyleSheet.create({
// container: {
//   flex: 1,
//   backgroundColor: '#f2f2f2',
// },
// scrollContainer: {
//   flexGrow: 1,
//   padding: 16,
//   marginBottom:'30%',
// },
// header: {
//   height: 60,
//   backgroundColor: '#9d0808',
//   flexDirection: 'row',
//   alignItems: 'center',
//   justifyContent: 'center',
//   paddingHorizontal: 10,
// },
// backButton: {
//   position: 'absolute',
//   left: 10,
// },
// backIcon: {
//   width: 24,
//   height: 24,
//   tintColor: 'white',
// },
// headerText: {
//   color: 'white',
//   fontSize: 20,
//   fontWeight: 'bold',
// },

// checkboxContainer: {
//   flexDirection: 'row',
//   justifyContent: 'space-around',
//   marginBottom: 20,
//   marginTop: 20,
// },
// checkbox: {
//   marginRight: 8,
// },
// label: {
//   fontSize: 16,
//   marginLeft: 10,
// },
// input: {
//   height: 40,
//   borderColor: '#ccc',
//   borderWidth: 1,
//   borderRadius: 5,
//   marginBottom: 15,
//   paddingHorizontal: 10,
//   backgroundColor: 'white',
// },
// submitButton: {
//   backgroundColor: '#9d0808',
//   paddingVertical: 12,
//   paddingHorizontal: 20,
//   borderRadius: 8,
//   alignItems: 'center',
//   justifyContent: 'center',
//   marginVertical: 10,
// },
// submitButtonText: {
//   color: 'white',
//   fontSize: 16,
//   fontWeight: 'bold',
//   textTransform: 'uppercase',
// },
// genderContainer: {
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   marginBottom: 20,
  
// },
// genderOption: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   flex: 1,
//   borderWidth: 1,
//   borderColor: '#ddd',
//   padding: 10,
//   borderRadius: 5,
//   marginHorizontal: 5,
//   backgroundColor:'#fff'
  
  
// },
// selectedGenderOption: {
//   //backgroundColor: '',
  
// },
// genderLabel: {
//   fontSize: 18,
//   marginRight: 50,
//   color: 'black',
// },
// selectedGenderLabel: {
//   color: '#9d0808',
// },
// radioCircle: {
//   height: 20,
//   width: 20,
//   borderRadius: 10,
//   borderWidth: 2,
//   borderColor: 'black',
//   alignItems: 'center',
//   justifyContent: 'center',
//   marginLeft:10
// },
// selectedRb: {
//   width: 12,
//   height: 12,
//   borderRadius: 6,
//   borderColor:'#9d0808',
//   backgroundColor: '#9d0808',
// },
// icon: {
//   position: 'absolute',
//   left: 10,
//   width: 15,
//   height: 15,
//   marginTop:24,
//   tintColor:'#9d0808'
// },
// put: {
//   flex: 1,
//   fontSize: 16,
//   color: 'grey',
//   textAlignVertical: 'top',
//   paddingLeft: 40,
//   marginLeft:20,
// },
// inputContainer: {
//   flexDirection: 'row',
//   alignItems: 'flex-start',
//   marginBottom: 20,
//   borderWidth: 1,
//   borderColor: '#ddd',
//   borderRadius: 5,
//   padding: 10,
//   backgroundColor:'#fff'
// },

// heightInchContainer: {
// flexDirection: 'row',
// justifyContent: 'space-between',
// marginBottom: 20,

// },
// buttonLikeInput: {
// flexDirection: 'row',
// alignItems: 'center',
// borderWidth: 1,
// borderColor: '#ddd',
// borderRadius: 5,
// paddingVertical: 10,
// paddingHorizontal: 15,
// flex: 1,
// marginRight: 10,
// backgroundColor:'#fff',
// marginLeft:5
// },
// buttonText: {
// fontSize: 16,
// color: 'grey',
// flex: 1,
// },
// dropdownIcon: {
// width: 16,
// height: 16,
// tintColor: 'grey',
// },
// checkboxWrapper: {
// flexDirection: 'row',
// alignItems: 'center',
// marginBottom: 20,
// },
// buttonContainer: {
// alignItems: 'center',
// marginTop: 20,
// marginBottom: 60,
// },
// createButton: {
// backgroundColor: '#9d0808',
// borderRadius: 5,
// paddingVertical: 15,
// paddingHorizontal: 30,
// width: 200, // Set your desired width here
// alignItems: 'center', // Center the text horizontally
// justifyContent: 'center', // Center the text vertically
// },
// disabledButton: {
// opacity: 0.5,
// },
// createButtonText: {
// color: '#fff',
// fontSize: 16,
// fontWeight: 'Bold',
// },
// footer: {
// height: 60,
// backgroundColor: '#b71c1c',
// flexDirection: 'row',
// justifyContent: 'space-around',
// alignItems: 'center',
// position: 'absolute',
// bottom: 0,
//   width: '100%',
// },
// footerButton: {
// justifyContent: 'center',
// alignItems: 'center',
// },
// footerIcon: {
// width: 24,
// height: 24,
// tintColor: 'white',
// },
// centeredView: {
// flex: 1,
// justifyContent: 'center',
// alignItems: 'center',
// },
// modalView: {
// margin: 20,
// backgroundColor: 'white',
// borderRadius: 10,
// padding: 35,
// alignItems: 'center',
// shadowColor: '#000',
// shadowOffset: { width: 0, height: 2 },
// shadowOpacity: 0.25,
// shadowRadius: 4,
// elevation: 5,
// zIndex: 1000,
// },
// modalTitles: {
// fontSize: 18,
// fontWeight: 'bold',
// marginBottom: 15,
// },
// modalText: {
// fontSize: 16,
// marginBottom: 15,
// },
// modalButtonContainer: {
// flexDirection: 'row',
// },
// modalButton: {
// borderRadius: 5,
// padding: 10,
// marginHorizontal: 10,
// backgroundColor: '#9d0808',
// },
// modalButtonText: {
// color: 'white',
// fontSize: 16,
// },
// ptext: {
//   fontSize: 18,
//   marginBottom: 20,
//   fontWeight:'bold',
//   textAlign:'center',
// },
// });

// export default CreateCaseScreen;


     
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Alert, TextInput, Modal, Linking, ActivityIndicator } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { fetchApi } from 'react-native-fetch-api';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeightPicker from './HeightPicker'; // Adjust the path as needed
import InchPicker from './InchPicker';
import { Api } from '../providers/api/api';
import { CreateCaseProvider } from '../providers/createcase/createcase';
import { useLoader } from '../providers/loader/loader';
import { InterneterrorProvider } from '../providers/interneterror/InternetErrorProvider';
import Geolocation from '@react-native-community/geolocation';
import { Appearance } from 'react-native';







const CreateCaseScreen = () => {
  const [knowPerson, setKnowPerson] = useState(false);
  const [unknownPerson, setUnknownPerson] = useState(false);
  const [visibleMark, setVisibleMark] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [clientId, setClientId] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [lat, setLat] = useState<number | null>(null);
  const [long, setLong] = useState<number | null>(null);
  const [currentAddress, setCurrentAddress] = useState<string | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [visible_marks_desc, setmarkDesk] = useState('');
  const [skinTone, setSkinTone] = useState('');
  const [eye_color, setEyeColor] = useState('');
  const [hair_color, setHairColor] = useState('');
  const [height, setHeight] = useState('');
  const [inch, setInch] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [place, setPlace] = useState('');
  const [clothing, setClothing] = useState('');
  const [accent, setAccent] = useState('');
  const [information, setInformation] = useState('');

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
  });
  const [isHeightPickerVisible, setIsHeightPickerVisible] = useState(false);
  const [isInchPickerVisible, setIsInchPickerVisible] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [visibleScarsMarksTattoos, setVisibleScarsMarksTattoos] = useState('');
  const [hasVisibleScarsMarksTattoos, setHasVisibleScarsMarksTattoos] = useState(false);
  const [showFooter, setShowFooter] = useState(true);
  const [loading, setLoading] = useState(false);
  

  const navigation = useNavigation();
  const { showLoader, hideLoader } = useLoader();
  const internetErrorProvider = new InterneterrorProvider();
  const api = new Api();
  const createCaseProvider = new CreateCaseProvider(api);

  const lastNameRef = useRef<TextInput>(null);
  const skinToneRef = useRef<TextInput>(null);
  const eyeColorRef = useRef<TextInput>(null);
  const hairColorRef = useRef<TextInput>(null);
  const weightRef = useRef<TextInput>(null);
  const ageRef = useRef<TextInput>(null);
  const placeRef = useRef<TextInput>(null);
  const clothingRef = useRef<TextInput>(null);
  const accentRef = useRef<TextInput>(null);
  const informationRef = useRef<TextInput>(null);

  const [theme, setTheme] = useState(Appearance.getColorScheme());
  

  useEffect(() => {
    Appearance.addChangeListener(() => {
      setTheme(Appearance.getColorScheme());
    });
  }, []);

  useEffect(() => {
    const loadUserData = async () => {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        const userObj = JSON.parse(user);
        setUserId(userObj.user_id);
        setToken(userObj.token);
      }
    };

    const loadClientId = async () => {
      const client_id = await AsyncStorage.getItem('client_id');
      setClientId(client_id);
    };

    loadUserData();
    loadClientId();
    loadMap();
  }, []);

  const loadMap = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        getCurrentAddress(position.coords.latitude, position.coords.longitude);
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };


  const getCurrentAddress = async (latitude, longitude) => {
    const url = `${PLACES_API_BASE}/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === 'OK') {
        const address = data.results[0].formatted_address;
        setCurrentAddress(address);  // Set the exact address here
      } else {
        console.log('Error fetching address:', data.status);
      }
    } catch (error) {
      console.log('Error fetching address:', error);
    }
  };

  const API_KEY = 'AIzaSyC2GNzQwQP-mMTxnCxK6NOTjCFx-mYjvBg';
  const PLACES_API_BASE = 'https://maps.googleapis.com/maps/api/place';
  const currentDate = () => {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    return date + ' ' + time;
  };

  const showAlert = (result: string, msg: string) => {
    Alert.alert(result, msg, [{ text: 'OK' }]);
  };

  const isCreateEnabled = (knowPerson && firstName && lastName) ||
    (unknownPerson && gender );

  const handleSelectHeight = (selectedHeight) => {
    setHeight(selectedHeight);
    setIsHeightPickerVisible(false);
  };

  const handleSelectInch = (selectedInch) => {
    setInch(selectedInch);
    setIsInchPickerVisible(false);
  };

  const handleWeightChange = (text) => {
    const formattedText = text.replace(/[^0-9]/g, ''); // Allow only digits
    setWeight(formattedText);
};

const handleAgeChange = (text) => {
  const formattedText = text.replace(/[^0-9]/g, ''); // Allow only digits
  setAge(formattedText);
};

  const handleFirstNameChange = (text) => {
    setLoading(true); // Start loading
    const formattedText = text.replace(/[^a-zA-Z]/g, ''); // Allow only letters
    if (formattedText.length > 0) {
        const capitalizedText = formattedText.charAt(0).toUpperCase() + formattedText.slice(1);
        setFirstName(capitalizedText);
    } else {
        setFirstName('');
    }
    setErrors(prevErrors => ({
        ...prevErrors,
        firstName: formattedText === '' ? 'First name cannot be empty' : ''
    }));
    setLoading(false); 
};

const handleLastNameChange = (text) => {
    setLoading(true); // Start loading
    const formattedText = text.replace(/[^a-zA-Z]/g, ''); // Allow only letters
    if (formattedText.length > 0) {
        const capitalizedText = formattedText.charAt(0).toUpperCase() + formattedText.slice(1);
        setLastName(capitalizedText);
    } else {
        setLastName('');
    }
    setErrors(prevErrors => ({
        ...prevErrors,
        lastName: formattedText === '' ? 'Last name cannot be empty' : ''
    }));
    setLoading(false);
};


const handleSkinToneChange = (text) => {
  const formattedText = text.replace(/[^a-zA-Z\s]/g, ''); // Allow only letters and spaces
  setSkinTone(formattedText);
};

const handleEyeColorChange = (text) => {
  const formattedText = text.replace(/[^a-zA-Z\s]/g, ''); // Allow only letters and spaces
  setEyeColor(formattedText);
};

const handleHairColorChange = (text) => {
  const formattedText = text.replace(/[^a-zA-Z\s]/g, ''); // Allow only letters and spaces
  setHairColor(formattedText);
};

  const handleCreate = () => {
    if (knowPerson) {
      handleSubmitKnown();
    } else if (unknownPerson) {
      handleSubmitUnknown();
    } else {
      Alert.alert('Error', 'Please select a known or unknown person');
    }
  };

  const handleBlur = (fieldName, value) => {
    if (!value) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [fieldName]: `${fieldName.replace(/([A-Z])/g, ' $1').toLowerCase()} cannot be empty`
      }));
    }
  };

  const checkIfAllFieldsAreFilled = () => {
    const isEnabled =
    (knowPerson && firstName && lastName) ||
    (unknownPerson && gender); // Add more conditions if needed.

  setIsCreateEnabled(isEnabled);
};

  const handleSubmitKnown = () => {
    const suspect_info = {
      suspect_name: firstName,
      last_name: lastName,
      known: 1,
      token: token,
      race: '',
      height: '',
      weight: '',
      age: '',
      visible_marks: hasVisibleScarsMarksTattoos ? 1 : 0,
      visible_marks_desc: '',
      hair_color: '',
      eye_color: '',
      place_of_incident: currentAddress,
      distinguishing_clothing: '',
      accent: '',
      additional_info: '',
      date: currentDate(),
      client_id: clientId,
      user_id: userId,
      lat: lat,
      long: long,
    };
    setLoading(true);
    setLoading(false);
    showLoader();
    createCaseProvider.createCase(suspect_info)
      .then((res) => {
        setLoading(false);
        hideLoader();
        if (res?.result === 'failed') {
          if (res.msg === 'Your account is deactivated, please contact support.' || res.msg === 'Case not created') {
            AsyncStorage.setItem('user', '');
            navigation.reset({ index: 0, routes: [{ name: 'LoginPage' }] });
          } else {
            showAlert(res.result, res.msg);
          }
        } else if (res.msg === 'Case created successfully.') {
          const suspect_info = {
            suspect_name: res.suspect_name,
            case_id: res.case_id,
            last_name: res.last_name,
          };
          navigation.reset({ index: 0, routes: [{ name: 'AggressionMeterScreen', params: { suspect_info, case_id: res.case_id } }] });
        }
      })
      .catch((err) => {
        hideLoader();
        internetErrorProvider.error();
      });
  };

  const handleSubmitUnknown = () => {
    const height_info = `${height},${inch}`;

    const suspect_info = {
      known: 0,
      gender: gender,
      race: skinTone,
      height: height_info,
      weight: weight,
      age: age,
      place_of_incident: place,
      distinguishing_clothing: clothing,
      accent: accent,
      eye_color: eye_color,
      hair_color: hair_color,
      additional_info: information,
      visible_marks: hasVisibleScarsMarksTattoos ? 1 : 0,
      visible_marks_desc: visible_marks_desc,
      date: currentDate(),
      token: token,
      client_id: clientId,
      user_id: userId,
      lat: lat,
      long: long,
    };
    setLoading(true);
    showLoader();
    createCaseProvider.createCase(suspect_info)
      .then((res) => {
        setLoading(false);
        hideLoader();
        if (res?.result === 'failed') {
          if (res.msg === 'Your account is deactivated, please contact support.' || res.msg === 'Case not created') {
            AsyncStorage.setItem('user', '');
            navigation.reset({ index: 0, routes: [{ name: 'LoginPage' }] });
          } else {
            showAlert(res.result, res.msg);
          }
        } else if (res.msg === 'Case created successfully.') {
          const suspect_info = {
            suspect_name: res.suspect_name,
            case_id: res.case_id,
            last_name: res.last_name,
          };
          navigation.reset({ index: 0, routes: [{ name: 'AggressionMeterScreen', params: { suspect_info, case_id: res.case_id } }] });
        }
      })
      .catch((err) => {
        setLoading(false);
        hideLoader();
        internetErrorProvider.error();
      });
  };
  const handleLogout = () => {
    setLogoutModalVisible(false);
    Alert.alert('Logged Out', 'You have been logged out.');
  };

  const handleLogoutCancel = () => {
    setLogoutModalVisible(false);
  };
  const handleCheckboxChange = (type) => {
    if (type === 'know') {
      setKnowPerson(!knowPerson);
      if (knowPerson) {
        setFirstName('');
        setLastName('');
      }
    } else if (type === 'unknown') {
      setUnknownPerson(!unknownPerson);
      if (unknownPerson) {
        setGender('');
        setSkinTone('');
        setEyeColor('');
        setHairColor('');
        setHeight('');
        setInch('');
        setWeight('');
        setAge('');
        setPlace('');
        setmarkDesk('');
        setClothing('');
        setAccent('');
        setInformation('');
      }
    }
    

    
  };
  return (

    <View style={styles.container}>
      {loading && (
        <ActivityIndicator size={130} color="brown" 
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
      )}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={require('../assets/img/backarrow.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Emerging Aggression</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={knowPerson}
              onValueChange={() => handleCheckboxChange('know')}
              style={styles.checkbox}
              disabled={unknownPerson}
                tintColors={{ true: 'brown', false: 'gray' }}
            />
            <Text style={styles.label}>Known {'\n'}Person</Text>
          </View>

          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={unknownPerson}
              onValueChange={() => handleCheckboxChange('unknown')}
              disabled={knowPerson}
              tintColors={{ true: 'brown', false: 'gray' }}
            />
            <Text style={styles.label}>Unknown  {'\n'} Person</Text>
          </View>
        </View>
        <Text style={styles.ptext}>Insert details about the subject and case</Text>


        {knowPerson && (
          <View >
            <View style={styles.inputContainer}>
              <Image source={require('../assets/img/user.png')} style={styles.icon} />
              <TextInput
                style={styles.put}
                placeholder="First Name"
                value={firstName}
                onChangeText={handleFirstNameChange}
                onBlur={() => handleBlur('firstName', firstName)}
                placeholderTextColor={Appearance.getColorScheme() === 'dark' ? 'gray' : 'gray'} // Set placeholder color

              />
            </View>
        
    {errors.firstName ? <Text style={styles.errorText}>{errors.firstName}</Text> : null}

            <View style={styles.inputContainer}>
              <Image source={require('../assets/img/user.png')} style={styles.icon} />
              <TextInput
                style={styles.put}
                placeholder="Last Name"
                value={lastName}
                onChangeText={handleLastNameChange}
                onBlur={() => handleBlur('lastName', lastName)}
                placeholderTextColor={Appearance.getColorScheme() === 'dark' ? 'gray' : 'gray'} // Set placeholder color

              />
            </View>
            {errors.lastName ? <Text style={styles.errorText}>{errors.lastName}</Text> : null}

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.createButton, !isCreateEnabled && styles.disabledButton]}
                disabled={!isCreateEnabled}
                onPress={handleCreate}
              >
                <Text style={styles.createButtonText}>Create</Text>
              </TouchableOpacity>
            </View>
          
          </View>

        )}



        {unknownPerson && (
          <View style={styles.unknownPersonForm}>
            <View style={styles.genderContainer}>
              <TouchableOpacity
                style={[styles.genderOption, gender === 'male' && styles.selectedGenderOption]}
                onPress={() => setGender('male')}
              >
                <Text style={[styles.genderLabel, gender === 'male' && styles.selectedGenderLabel]}>Male</Text>
                <View style={[styles.radioCircle, gender === 'male' && styles.selectedRb]} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.genderOption, gender === 'female' && styles.selectedGenderOption]}
                onPress={() => setGender('female')}
              >
                <Text style={[styles.genderLabel, gender === 'female' && styles.selectedGenderLabel]}>Female</Text>
                <View style={[styles.radioCircle, gender === 'female' && styles.selectedRb]} />
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <Image source={require('../assets/img/user.png')} style={styles.icon} />
              <TextInput
                style={styles.put}
                placeholder="Skin Tone"
                value={skinTone}
                onChangeText={handleSkinToneChange}
                returnKeyType="next"
                onSubmitEditing={() => eyeColorRef.current.focus()}
                ref={skinToneRef}
                placeholderTextColor={Appearance.getColorScheme() === 'dark' ? 'gray' : 'gray'} 
              />
            </View>
            <View style={styles.inputContainer}>
              <Image source={require('../assets/img/user.png')} style={styles.icon} />
              <TextInput
                style={styles.put}
                placeholder="Eye Color"
                value={eye_color}
                onChangeText={handleEyeColorChange}
                returnKeyType="next"
                onSubmitEditing={() => hairColorRef.current.focus()}
                ref={eyeColorRef}
                placeholderTextColor={Appearance.getColorScheme() === 'dark' ? 'gray' : 'gray'} 
              />
            </View>
            <View style={styles.inputContainer}>
              <Image source={require('../assets/img/user.png')} style={styles.icon} />
              <TextInput
                style={styles.put}
                placeholder="Hair Color"
                value={hair_color}
                onChangeText={handleHairColorChange}
                returnKeyType="next"
                onSubmitEditing={() => weightRef.current.focus()}
                ref={hairColorRef}
                placeholderTextColor={Appearance.getColorScheme() === 'dark' ? 'gray' : 'gray'} 
              />
            </View>
            <View style={styles.heightInchContainer}>
              <TouchableOpacity
                style={styles.buttonLikeInput}
                onPress={() => setIsHeightPickerVisible(true)}
              >
                <Text style={styles.buttonText1}>Height</Text>
                <Text style={styles.buttonText1}>{height}</Text>
                <Image source={require('../assets/img/dropdownarrow.png')} style={styles.dropdownIcon} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonLikeInput}
                onPress={() => setIsInchPickerVisible(true)}
              >
                <Text style={styles.buttonText1}>Inch</Text>
                <Text style={styles.buttonText1}>{inch}</Text>
                <Image source={require('../assets/img/dropdownarrow.png')} style={styles.dropdownIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <Image source={require('../assets/img/user.png')} style={styles.icon} />
              <TextInput
                style={styles.put}
                placeholder="Approximate Weight (in pounds)"
                value={weight}
                onChangeText={handleWeightChange}
                ref={weightRef}
                returnKeyType="next"
                keyboardType="numeric"
                onSubmitEditing={() => ageRef.current.focus()}
                placeholderTextColor={Appearance.getColorScheme() === 'dark' ? 'gray' : 'gray'} 
              />
            </View>
            <View style={styles.inputContainer}>
              <Image source={require('../assets/img/user.png')} style={styles.icon} />
              <TextInput
                style={styles.put}
                placeholder="Approximate Age"
                value={age}
                onChangeText={handleAgeChange}
                ref={ageRef}
                keyboardType="numeric"
                returnKeyType="next"
                onSubmitEditing={() => placeRef.current.focus()}
                placeholderTextColor={Appearance.getColorScheme() === 'dark' ? 'gray' : 'gray'} 
              />
            </View>
            <View style={styles.checkboxWrapper}>
              <CheckBox
                value={hasVisibleScarsMarksTattoos}
                onValueChange={setHasVisibleScarsMarksTattoos}
                style={styles.checkbox}
              />
              <Text style={styles.label}>Visible Scars,Marks,Tattoos</Text>
            </View>

            {hasVisibleScarsMarksTattoos && (
              <View style={styles.inputContainer}>
                <Image source={require('../assets/img/user.png')} style={styles.icon} />
                <TextInput
                  style={styles.put}
                  placeholder="Visible scars, marks, tattoos"
                  value={visible_marks_desc}
                  multiline={true}
                  numberOfLines={5}
                  onChangeText={setmarkDesk}
                  returnKeyType="next"
                  onSubmitEditing={() => placeRef.current.focus()}
                  placeholderTextColor={Appearance.getColorScheme() === 'dark' ? 'gray' : 'gray'} 
                />
              </View>
            )}
            <View style={styles.inputContainer}>
              <Image source={require('../assets/img/user.png')} style={styles.icon} />
              <TextInput
                style={styles.put}
                placeholder="Place of incident"
                value={place}
                multiline={true}
                numberOfLines={5}
                onChangeText={setPlace}
                ref={placeRef}
                returnKeyType="next"
                onSubmitEditing={() => clothingRef.current.focus()}
                placeholderTextColor={Appearance.getColorScheme() === 'dark' ? 'gray' : 'gray'} 
              />
            </View>
            <View style={styles.inputContainer}>
              <Image source={require('../assets/img/clothing.png')} style={styles.icon} />
              <TextInput
                style={styles.put}
                placeholder="Distinguishing clothing"
                value={clothing}
                multiline={true}
                numberOfLines={5}
                onChangeText={setClothing}
                ref={clothingRef}
                returnKeyType="next"
                onSubmitEditing={() => accentRef.current.focus()}
                placeholderTextColor={Appearance.getColorScheme() === 'dark' ? 'gray' : 'gray'} 
              />
            </View>
            <View style={styles.inputContainer}>
              <Image source={require('../assets/img/user.png')} style={styles.icon} />
              <TextInput
                style={styles.put}
                placeholder="Accent"
                value={accent}
                multiline={true}
                numberOfLines={5}
                onChangeText={setAccent}
                ref={accentRef}
                returnKeyType="next"
                onSubmitEditing={() => informationRef.current.focus()}
                placeholderTextColor={Appearance.getColorScheme() === 'dark' ? 'gray' : 'gray'} 
              />
            </View>
            <View style={styles.inputContainer}>
              <Image source={require('../assets/img/user.png')} style={styles.icon} />
              <TextInput
                style={styles.put}
                placeholder="Additional Information"
                value={information}
                onChangeText={setInformation}
                ref={informationRef}
                multiline={true}
                numberOfLines={5}
                returnKeyType="done"
                placeholderTextColor={Appearance.getColorScheme() === 'dark' ? 'gray' : 'gray'} 
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.createButton, !isCreateEnabled && styles.disabledButton]}
                disabled={!isCreateEnabled}
                onPress={handleCreate}
              >
                <Text style={styles.buttonText}>CREATE</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}


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


      <HeightPicker
        visible={isHeightPickerVisible}
        onSelect={handleSelectHeight}
        onClose={() => setIsHeightPickerVisible(false)}
      />

      <InchPicker
        visible={isInchPickerVisible}
        onSelect={handleSelectInch}
        onClose={() => setIsInchPickerVisible(false)}
      />

    </View>
  );
};




import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
//import { Appearance } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Appearance.getColorScheme() === 'dark' ? '#f2f2f2' : '#f2f2f2',
  },
  errorText: {
    color: '#9d0808',
    fontSize: wp('3%'), // Adjusted for responsiveness
  },
  scrollContainer: {
    flexGrow: 1,
    padding: wp('4%'), // Adjusted for responsiveness
    marginBottom: hp('5%'), // Adjusted for responsiveness
  },
  header: {
    height: hp('8%'), // Adjusted for responsiveness
    backgroundColor: '#9d0808',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp('2%'), // Adjusted for responsiveness
  },
  backButton: {
    position: 'absolute',
    left: wp('2%'), // Adjusted for responsiveness
  },
  backIcon: {
    width: wp('7%'), // Adjusted for responsiveness
    height: wp('7%'), // Adjusted for responsiveness
    tintColor: 'white',
  },
  headerText: {
    color: 'white',
    fontSize: wp('5%'), // Adjusted for responsiveness
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: hp('2.5%'), // Adjusted for responsiveness
    marginTop: hp('2.5%'), // Adjusted for responsiveness
  },
  checkbox: {
    marginRight: wp('2%'), // Adjusted for responsiveness
    tintColor: Appearance.getColorScheme() === 'dark' ? 'red' : '#007BFF',
  },
  label: {
    fontSize: wp('4%'), // Adjusted for responsiveness
    marginLeft: wp('2%'), // Adjusted for responsiveness
    color: Appearance.getColorScheme() === 'dark' ? 'black' : '#000',
  },
  input: {
    borderColor: Appearance.getColorScheme() === 'dark' ? 'white' : '#ccc',
    height: hp('5%'),
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: hp('2%'),
    paddingHorizontal: wp('2%'),
    backgroundColor: Appearance.getColorScheme() === 'dark' ? '#444' : 'white', // Change background for dark mode
  },
  submitButton: {
    backgroundColor: '#9d0808',
    paddingVertical: hp('2%'), // Adjusted for responsiveness
    paddingHorizontal: wp('5%'), // Adjusted for responsiveness
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp('1%'), // Adjusted for responsiveness
  },
  submitButtonText: {
    color: 'white',
    fontSize: wp('4%'), // Adjusted for responsiveness
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('2.5%'), // Adjusted for responsiveness
  },
  genderOption: {
    borderColor: Appearance.getColorScheme() === 'dark' ? 'lightgrey' : '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderWidth: 1,
    padding: hp('2%'), // Adjusted for responsiveness
    borderRadius: 5,
    marginHorizontal: wp('1%'), // Adjusted for responsiveness
    backgroundColor: Appearance.getColorScheme() === 'dark' ? 'white' : '#fff',
  },
  genderLabel: {
    fontSize: wp('4%'), // Adjusted for responsiveness
    marginRight: wp('10%'), // Adjusted for responsiveness
    color: Appearance.getColorScheme() === 'dark' ? 'black' : '#000',
  },
  radioCircle: {
    height: hp('2%'), // Adjusted for responsiveness
    width: hp('2 %'), // Adjusted for responsiveness
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Appearance.getColorScheme() === 'dark' ? 'grey' : 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: wp('2%'), // Adjusted for responsiveness
  },
  selectedRb: {
    width: hp('1.5%'), // Adjusted for responsiveness
    height: hp('1.5%'), // Adjusted for responsiveness
    borderRadius: 6,
    borderColor: '#9d0808',
    backgroundColor: '#9d0808',
  },
  icon: {
    position: 'absolute',
    left: wp('2%'), // Adjusted for responsiveness
    width: wp('4%'), // Adjusted for responsiveness
    height: wp('4%'), // Adjusted for responsiveness
    marginTop: hp('2%'), // Adjusted for responsiveness
    tintColor: Appearance.getColorScheme() === 'dark' ? '#9d0808' : '#9d0808',
  },
  put: {
    flex: 1,
    fontSize: wp('4%'), // Adjusted for responsiveness
    color: Appearance.getColorScheme() === 'dark' ? 'black' : 'grey',
    textAlignVertical: 'top',
    paddingLeft: wp('10%'), // Adjusted for responsiveness
    marginLeft: wp('5%'), // Adjusted for responsiveness
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: hp('2%'), // Adjusted for responsiveness
    borderWidth: 1,
    borderColor: Appearance.getColorScheme() === 'dark' ? 'lightgrey' : 'black',
    borderRadius: 5,
    backgroundColor: Appearance.getColorScheme() === 'dark' ? 'white' : '#fff',
  },
  heightInchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('2.5%'), // Adjusted for responsiveness
  },
 buttonLikeInput: {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: Appearance.getColorScheme() === 'dark' ? 'lightgrey' : '#ddd',
  borderRadius: 3,
  paddingVertical: hp('2%'),
  paddingHorizontal: wp('4%'),
  flex: 1,
  backgroundColor:'white'
 
},
  buttonText: {
    fontSize: wp('5%'), // Adjusted for responsiveness
    color:'white',
    flex: 1,
    fontWeight:'600'
  },
  buttonText1: {
    fontSize: wp('4%'), // Adjusted for responsiveness
    color:'black',
    flex: 1,
  
  },
  dropdownIcon: {
    width: wp('4%'), // Adjusted for responsiveness
    height: wp('4%'), // Adjusted for responsiveness
    tintColor: Appearance.getColorScheme() === 'dark' ? 'lightgrey' : 'grey',
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2.5%'), // Adjusted for responsiveness
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: hp('1%'), // Adjusted for responsiveness
    marginBottom: hp('10%'), // Adjusted for responsiveness
  },
  createButton: {
    backgroundColor: '#9d0808',
    borderRadius: 8,
    paddingVertical: hp('1.5%'), // Adjusted for responsiveness
    paddingHorizontal: wp('8%'), // Adjusted for responsiveness
    width: wp('43%'), // Adjusted for responsiveness
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    opacity: 0.5,
  },
  createButtonText: {
    color: 'white',
    fontSize: wp('4%'), // Adjusted for responsiveness
  },
  footer: {
    height: hp('7.5%'), // Adjusted for responsiveness
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
    width: wp('6%'), // Adjusted for responsiveness
    height : wp('6%'), // Adjusted for responsiveness
    tintColor: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: wp('5%'), // Adjusted for responsiveness
    backgroundColor: 'white',
    borderRadius: 10,
    padding: wp('8%'), // Adjusted for responsiveness
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1000,
  },
  modalTitles: {
    fontSize: wp('5%'), // Adjusted for responsiveness
    fontWeight: 'bold',
    marginBottom: hp('2%'), // Adjusted for responsiveness
    color:'black'
  },
  modalText: {
    fontSize: wp('4%'), // Adjusted for responsiveness
    marginBottom: hp('2%'), // Adjusted for responsiveness
    color: Appearance.getColorScheme() === 'dark' ? 'black' : '#000',
  },
  modalButtonContainer: {
    flexDirection: 'row',
  },
  modalButton: {
    borderRadius: 5,
    padding: wp('3%'), // Adjusted for responsiveness
    marginHorizontal: wp('2%'), // Adjusted for responsiveness
    backgroundColor: '#9d0808',
  },
  modalButtonText: {
    color: 'white',
    fontSize: wp('4%'), // Adjusted for responsiveness
  },
  ptext: {
    fontSize: wp('4%'), // Adjusted for responsiveness
    marginBottom: hp('2%'), // Adjusted for responsiveness
    textAlign: 'center',
    color: Appearance.getColorScheme() === 'dark' ? 'black' : '#000',
  },
});

export default CreateCaseScreen;


