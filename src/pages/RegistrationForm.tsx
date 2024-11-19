// // import React, { useState, useEffect, useRef } from 'react';
// // import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, StyleSheet, Image, KeyboardAvoidingView, StatusBar, Platform, Linking} from 'react-native';
// // import { Picker } from '@react-native-picker/picker';
// // import { CheckBox } from 'react-native-elements';
// // import { Formik } from 'formik';
// // import * as Yup from 'yup';
// // import CountryProvider from '../providers/country/country';
// // import User from '../providers/user/User';
// // import { Api } from '../providers/api/api';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import pointer from '../assets/img/pointer.png';
// // import userb from '../assets/img/userb.png';
// // import lock from '../assets/img/lock.png';
// // import mailb from '../assets/img/mailb.png';
// // import Title from '../assets/img/Title.png';
// // import organization from '../assets/img/organization.png';
// // import Icon from 'react-native-vector-icons/FontAwesome';
// // import { useLoader } from '../providers/loader/loader';

// // const api = new Api();
// // const countryProvider = new CountryProvider(api);
// // const userProvider = new User(api, AsyncStorage);

// // const PasswordValidationSchema = Yup.object().shape({
// //   password: Yup.string()
// //     .required('Required')
// //     .min(8, 'Too Short!')
// //     .max(30, 'Too Long!')
// //     .matches(/(?=.*[a-z])(?=.*[0-9])(?=.*[$@$#!%*?&])/, 'Password must contain at least one lowercase letter, one number, and one special character.'),
// //   confirmPassword: Yup.string()
// //     .oneOf([Yup.ref('password'), null], 'Passwords must match')
// //     .required('Required'),
// // });

// // const RegistrationForm = ({ navigation }) => {
// //   const { showLoader, hideLoader } = useLoader();
// //   const [passwordVisible, setPasswordVisible] = useState(false);
// //   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
// //   const [countries, setCountries] = useState([]);
// //   const [states, setStates] = useState([]);
// //   const [isEnabled, setIsEnabled] = useState(true);
// //   const [share, setShare] = useState(false);

// //   const surnameRef = useRef<TextInput>(null);
// //   const emailRef = useRef<TextInput>(null);
// //   const passwordRef = useRef<TextInput>(null);
// //   const confirmPasswordRef = useRef<TextInput>(null);
// //   const titleRef = useRef<TextInput>(null);
// //   const organizationRef = useRef<TextInput>(null);
// //   const professionRef = useRef<TextInput>(null);

// //   useEffect(() => {
// //     loadCountries();
// //   }, []);

// //   const loadCountries = async () => {
// //     showLoader();
// //     try {
// //       const response = await countryProvider.country();
// //       const countries = response.data.map(country => ({
// //         id: country.country_id,
// //         name: country.country_name,
// //       }));
// //       console.log('Countries loaded:', countries);
// //       setCountries(countries);
// //     } catch (error) {
// //       console.error(error);
// //     } finally {
// //       hideLoader();
// //     }
// //   };

// //   const handleCountryChange = async (selectedItem) => {
// //     showLoader();
// //     try {
// //       const response = await countryProvider.state(selectedItem.id);
// //       const states = response.data.map(state => ({
// //         id: state.state_id,
// //         name: state.state_name,
// //       }));
// //       console.log('States loaded for country:', selectedItem, states);
// //       setStates(states);
// //       setIsEnabled(false);
// //     } catch (error) {
// //       console.error(error);
// //     } finally {
// //       hideLoader();
// //     }
// //   };

// //   const handleSignup = async (values) => {
// //     showLoader();
// //     try {
// //       const response = await userProvider.check_email(values.email);
// //       if (response.data.result === 'success') {
// //         const account = {
// //           firstname: values.fname,
// //           surname: values.lname,
// //           email: values.email,
// //           password: values.confirmPassword,
// //           title: values.title,
// //           organization: values.organization,
// //           state: values.state.id,
// //           country: values.country.id,
// //           profession: values.profession,
// //           share_data: values.share ? '1' : '0',
// //         };
// //         navigation.navigate('credit', { account });
// //       } else {
// //         Alert.alert(response.data.result, response.data.msg);
// //       }
// //     } catch (error) {
// //       console.error(error);
// //     } finally {
// //       hideLoader();
// //     }
// //   };
// //   const togglePasswordVisibility = () => {
// //     setPasswordVisible(!passwordVisible);
// //   };

// //   const toggleConfirmPasswordVisibility = () => {
// //     setConfirmPasswordVisible(!confirmPasswordVisible);
// //   };

// //   return (
// //     <KeyboardAvoidingView
// //       style={styles.container}
// //       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
// //     >
     
// //         <StatusBar barStyle="light-content" backgroundColor="#9d0808" />
// //         <View style={styles.headerContainer}>
// //           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
// //             <Image source={pointer} style={styles.backIcon} resizeMode="cover" />
// //           </TouchableOpacity>
// //           <Text style={[styles.headerTitle, { flex: 1, textAlign: 'center' }]}>Welcome</Text>
// //         </View>
// //         <ScrollView
// //         contentContainerStyle={styles.scrollViewContent}
// //         keyboardShouldPersistTaps='handled'
// //         showsVerticalScrollIndicator={false}
// //       >
       
// //         <Formik
// //           initialValues={{
// //             fname: '',
// //             lname: '',
// //             email: '',
// //             password: '',
// //             confirmPassword: '',
// //             title: '',
// //             organization: '',
// //             state: '',
// //             country: '',
// //             share: false,
// //             profession: '',
// //           }}
// //           validationSchema={Yup.object().shape({
// //             fname: Yup.string()
// //               .required('Required')
// //               .min(2, 'Too Short!')
// //               .max(30, 'Too Long!')
// //               .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed.'),
// //             lname: Yup.string()
// //               .required('Required')
// //               .min(2, 'Too Short!')
// //               .max(30, 'Too Long!')
// //               .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed.'),
// //             email: Yup.string()
// //               .required('Required')
// //               .min(5, 'Too Short!')
// //               .max(50, 'Too Long!')
// //               .email('Invalid email address'),
// //             password: Yup.string()
// //               .required('Required')
// //               .min(8, 'Too Short!')
// //               .max(30, 'Too Long!')
// //               .matches(/(?=.*[a-z])(?=.*[0-9])(?=.*[$@$#!%*?&])/, 'Password must contain at least one lowercase letter, one number, and one special character.'),
// //             confirmPassword: Yup.string()
// //               .oneOf([Yup.ref('password'), null], 'Passwords must match')
// //               .required('Required'),
// //             title: Yup.string()
// //               .required('Required')
// //               .min(2, 'Too Short!')
// //               .max(30, 'Too Long!')
// //               .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed.'),
// //             organization: Yup.string()
// //               .required('Required')
// //               .min(2, 'Too Short!')
// //               .max(30, 'Too Long!')
// //               .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed.'),
// //             country: Yup.object().required('Required'),
// //             state: Yup.object().required('Required'),
// //             profession: Yup.string()
// //               .required('Required')
// //               .min(2, 'Too Short!')
// //               .max(30, 'Too Long!')
// //               .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed.'),
// //           })}
// //           onSubmit={handleSignup}
// //         >
// //           {({
// //             handleChange,
// //             handleBlur,
// //             handleSubmit,
// //             values,
// //             errors,
// //             touched,
// //             setFieldValue,
// //           }) => (
// //             <View>
// //                <View>
// //           <Text style={styles.trial}> Sign up to start your 1 month free trial </Text>
// //         </View>
// //               <View style={styles.inputContainer}>
// //                 <Image source={userb} style={styles.icon} />
// //                 <TextInput
// //                   style={styles.input}
// //                   placeholder="First Name"
// //                   placeholderTextColor="#aaa"
// //                   value={values.fname}
// //                   onChangeText={handleChange('fname')}
// //                   onBlur={handleBlur('fname')}
// //                   onSubmitEditing={() => surnameRef.current.focus()}
// //                   autoCapitalize="none"
// //                   returnKeyType="next"
// //                   blurOnSubmit={false}
// //                   maxLength={30}
// //                 />
// //               </View>
// //               <View style={styles.warning}>
// //                 {touched.fname && errors.fname && <Text style={styles.warningtext}>{errors.fname}</Text>}
// //               </View>

// //               <View style={styles.inputContainer}>
// //                 <Image source={userb} style={styles.icon} />
// //                 <TextInput
// //                   ref={surnameRef}
// //                   style={styles.input}
// //                   placeholder="Surname"
// //                   placeholderTextColor="#aaa"
// //                   value={values.lname}
// //                   onChangeText={handleChange('lname')}
// //                   onBlur={handleBlur('lname')}
// //                   onSubmitEditing={() => emailRef.current.focus()}
// //                   autoCapitalize="none"
// //                   returnKeyType="next"
// //                   blurOnSubmit={false}
// //                 />
// //               </View>
// //               <View style={styles.warning}>
// //                 {touched.lname && errors.lname && <Text style={styles.warningtext}>{errors.lname}</Text>}
// //               </View>

// //               <View style={styles.inputContainer}>
// //                 <Image source={mailb} style={styles.icon} />
// //                 <TextInput
// //                   ref={emailRef}
// //                   style={styles.input}
// //                   placeholder="Email"
// //                   placeholderTextColor="#aaa"
// //                   keyboardType="email-address"
// //                   value={values.email}
// //                   onChangeText={handleChange('email')}
// //                   onBlur={handleBlur('email')}
// //                   onSubmitEditing={() => passwordRef.current.focus()}
// //                   autoCapitalize="none"
// //                   returnKeyType="next"
// //                   blurOnSubmit={false}
// //                 />
// //               </View>
// //               <View style={styles.warning}>
// //                 {touched.email && errors.email && <Text style={styles.warningtext}>{errors.email}</Text>}
// //               </View>

// //               <View style={styles.inputContainer}>
// //                 <Image source={lock} style={styles.icon} />
// //                 <TextInput
// //                   ref={passwordRef}
// //                   style={styles.input}
// //                   placeholder="Password"
// //                   placeholderTextColor="#aaa"
// //                   secureTextEntry={!passwordVisible}
// //                   value={values.password}
// //                   onChangeText={handleChange('password')}
// //                   onBlur={handleBlur('password')}
// //                   onSubmitEditing={() => confirmPasswordRef.current.focus()}
// //                   autoCapitalize="none"
// //                   returnKeyType="next"
// //                   blurOnSubmit={false}
// //                 />
// //                 <TouchableOpacity onPress={togglePasswordVisibility}>
// //                   <Icon name={passwordVisible ? 'eye' : 'eye-slash'} size={20} color="#aaa" />
// //                 </TouchableOpacity>
// //               </View>
// //               <View style={styles.warning}>
// //                 {touched.password && errors.password && <Text style={styles.warningtext}>{errors.password}</Text>}
// //               </View>

// //               <View style={styles.inputContainer}>
// //                 <Image source={lock} style={styles.icon} />
// //                 <TextInput
// //                   ref={confirmPasswordRef}
// //                   style={styles.input}
// //                   placeholder="Confirm Password"
// //                   placeholderTextColor="#aaa"
// //                   secureTextEntry={!confirmPasswordVisible}
// //                   value={values.confirmPassword}
// //                   onChangeText={handleChange('confirmPassword')}
// //                   onBlur={handleBlur('confirmPassword')}
// //                   onSubmitEditing={() => titleRef.current.focus()}
// //                   autoCapitalize="none"
// //                   returnKeyType="next"
// //                   blurOnSubmit={false}
// //                 />
// //                 <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
// //                   <Icon name={confirmPasswordVisible ? 'eye' : 'eye-slash'} size={20} color="#aaa" />
// //                 </TouchableOpacity>
// //               </View>
// //               <View style={styles.warning}>
// //                 {touched.confirmPassword && errors.confirmPassword && <Text style={styles.warningtext}>{errors.confirmPassword}</Text>}
// //               </View>

// //               <View style={styles.inputContainer}>
// //                 <Image source={Title} style={styles.icon} />
// //                 <TextInput
// //                   ref={titleRef}
// //                   style={styles.input}
// //                   placeholder="Title"
// //                   placeholderTextColor="#aaa"
// //                   value={values.title}
// //                   onChangeText={handleChange('title')}
// //                   onBlur={handleBlur('title')}
// //                   onSubmitEditing={() => organizationRef.current.focus()}
// //                   autoCapitalize="none"
// //                   returnKeyType="next"
// //                   blurOnSubmit={false}
// //                 />
// //               </View>
// //               <View style={styles.warning}>
// //                 {touched.title && errors.title && <Text style={styles.warningtext}>{errors.title}</Text>}
// //               </View>

// //               <View style={styles.inputContainer}>
// //                 <Image source={organization} style={styles.icon} />
// //                 <TextInput
// //                   ref={organizationRef}
// //                   style={styles.input}
// //                   placeholder="Organization"
// //                   placeholderTextColor="#aaa"
// //                   value={values.organization}
// //                   onChangeText={handleChange('organization')}
// //                   onBlur={handleBlur('organization')}
// //                   onSubmitEditing={() => professionRef.current.focus()}
// //                   autoCapitalize="none"
// //                   returnKeyType="next"
// //                   blurOnSubmit={false}
// //                 />
// //               </View>
// //               <View style={styles.warning}>
// //                 {touched.organization && errors.organization && <Text style={styles.warningtext}>{errors.organization}</Text>}
// //               </View>

// //               <View style={styles.pickerContainer}>
// //                 <Picker
// //                   selectedValue={values.country}
// //                   onValueChange={(itemValue, itemIndex) => {
// //                     setFieldValue('country', itemValue);
// //                     handleCountryChange(itemValue);
// //                   }}
// //                   style={styles.picker}
// //                 >
// //                   <Picker.Item label="Select Country" value="" />
// //                   {countries.map((country) => (
// //                     <Picker.Item key={country.id} label={country.name} value={country} />
// //                   ))}
// //                 </Picker>
// //               </View>
// //               <View style={styles.warning}>
// //                 {touched.country && errors.country && <Text style={styles.warningtext}>{errors.country}</Text>}
// //               </View>

// //               <View style={styles.pickerContainer}>
// //                 <Picker
// //                   selectedValue={values.state}
// //                   onValueChange={(itemValue, itemIndex) => setFieldValue('state', itemValue)}
// //                   style={styles.picker}
// //                   enabled={!isEnabled}
// //                 >
// //                   <Picker.Item label="Select State" value="" />
// //                   {states.map((state) => (
// //                     <Picker.Item key={state.id} label={state.name} value={state} />
// //                   ))}
// //                 </Picker>
// //               </View>
// //               <View style={styles.warning}>
// //                 {touched.state && errors.state && <Text style={styles.warningtext}>{errors.state}</Text>}
// //               </View>

// //               <View style={styles.inputContainer}>
// //                 <Image source={userb} style={styles.icon} />
// //                 <TextInput
// //                   ref={professionRef}
// //                   style={styles.input}
// //                   placeholder="Profession"
// //                   placeholderTextColor="#aaa"
// //                   value={values.profession}
// //                   onChangeText={handleChange('profession')}
// //                   onBlur={handleBlur('profession')}
// //                   autoCapitalize="none"
// //                   returnKeyType="done"
// //                 />
// //               </View>
// //               <View style={styles.warning}>
// //                 {touched.profession && errors.profession && <Text style={styles.warningtext}>{errors.profession}</Text>}
// //               </View>

// //               <View style={styles.checkboxContainer}>
// //                 <CheckBox
// //                   title="Share Data"
// //                   checked={values.share}
// //                   onPress={() => setFieldValue('share', !values.share)}
// //                   containerStyle={styles.checkbox}
// //                 />
// //                 <Text style={styles.agreementText}>
// // By clicking <Text style={styles.bold}>Register</Text> you are agree to the
// // <Text style={styles.link} onPress={() => Linking.openURL('https://aggressionmanagement.com/Privacy%20Policy%20of%20CAPS.html')}> Privacy Policy and conditions</Text>
// // </Text>

// //               </View>
              
// //               <TouchableOpacity style={styles.signupButton} onPress={handleSubmit}>
// //                 <Text style={styles.signupButtonText}>NEXT</Text>
// //               </TouchableOpacity>
// //             </View>
// //           )}
// //         </Formik>
// //       </ScrollView>
// //     </KeyboardAvoidingView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //   },
// //   scrollViewContent: {
// //     flexGrow: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   paddingBottom:60,
// //   },
// //   headerContainer: {
// //     position: 'absolute',
// //     top: 0,
// //     left: 0,
// //     right: 0,
// //     backgroundColor: '#9d0808',
// //     padding: 10,
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     zIndex: 1, // Ensure header stays above other content
// //     },
// //     agreementText: {
// //       textAlign: 'center',
// //       marginLeft:10,
// //       marginRight:10,
// //       fontSize: 18,
// //       color: 'black',
// //       marginTop: 5,
// //       marginBottom:25,
      
// //       },
  
// //     link: {
// //       color: '#800000',
// //       },
// //       bold:{
// //       color:'black',
// //       fontSize: 18,
// //       fontWeight:'700'
// //       },

// //     backButton: {
// //       flexDirection: 'row',
// //       alignItems: 'center',
// //       },
  
// //   backIcon: {
// //     width: 30,
// //     height: 30,
// //     padding: 10,
// //     tintColor: 'white'
// //     },
// //   headerTitle: {
// //     fontSize: 22,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     textAlign: 'center',
// //     },
// //   trial: {
// //     fontSize: 22,
// //     marginTop: '15%',
// //     marginBottom: 10,
// //     color: 'black',
// //     textAlign: 'center',
// //     fontWeight:'600'

// //   },
// //   inputContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     borderColor: '#9d0808',
// //     borderWidth: 1,
    
// //     width: '90%',
// //      marginTop: 10,
// //     paddingHorizontal: 15,
// //     marginLeft:15,
// //   },
// //   input: {
// //     flex: 1,
// //     height: 50,
// //     color: '#000',
// //     fontSize: 15,
// //   },
// //   icon: {
// //     width: 20,
// //     height: 20,
// //     marginRight: 10,
// //     tintColor: '#800000',
// //     },
// //   warning: {
// //     alignItems: 'flex-start',
// //     marginBottom: 10,
// //   },
// //   warningtext: {
// //     color: 'red',
// //   },
// //   pickerContainer: {
// //     borderWidth: 1,
// //     borderColor: '#9d0808',
// //   marginLeft:15,
// //     marginTop: 10,
// //     marginRight:20,
// //     overflow: 'hidden',
// //   },
// //   picker: {
// //     height: 50,
// //     width: '100%',
// //     color: '#000',
// //   },
// //   checkboxContainer: {
// //     alignItems: 'center',
// //     marginBottom: 20,
// //   },
// //   checkbox: {
// //     backgroundColor: 'transparent',
// //     borderWidth: 0,
// //   },
// //   signupButton: {
// //     backgroundColor: '#9d0808',
// //     width:'35%',
// //     paddingVertical: 15,
// //     paddingHorizontal: 30,
// //     borderRadius: 5,
// //     alignItems: 'center',
// //     marginLeft:'35%',
// //   },
// //   signupButtonText: {
// //     color: '#fff',
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// // });

// // export default RegistrationForm;




// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, StyleSheet, Image, KeyboardAvoidingView, StatusBar, Platform, Modal, Pressable, FlatList } from 'react-native';
// import { Icon } from 'react-native-elements';
// import { CheckBox } from 'react-native-elements';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
// import CountryProvider from '../providers/country/country';
// import User from '../providers/user/User';
// import { Api } from '../providers/api/api';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useLoader } from '../providers/loader/loader';
// import { Linking } from 'react-native';

// const api = new Api();
// const countryProvider = new CountryProvider(api);
// const userProvider = new User(api, AsyncStorage);

// const PasswordValidationSchema = Yup.object().shape({
//   password: Yup.string()
//     .required('Required')
//     .min(8, 'Too Short!')
//     .max(30, 'Too Long!')
//     .matches(/(?=.*[a-z])(?=.*[0-9])(?=.*[$@$#!%*?&])/, 'Password must contain at least one lowercase letter, one number, and one special character.'),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref('password'), null], 'Passwords must match')
//     .required('Required'),
// });



// const CustomPicker = ({ items, selectedValue, onValueChange, placeholder }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredItems, setFilteredItems] = useState(items);

//   useEffect(() => {
//     if (isVisible) {
//       // Reset the search and filteredItems when the modal is closed
//       setSearchQuery('');
//       setFilteredItems(items);
//     }
//   }, [isVisible]);

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//     if (query) {
//       setFilteredItems(
//         items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
//       );
//     } else {
//       setFilteredItems(items);
//     }
//   };

//   const handleSelect = (item) => {
//     onValueChange(item);
//     setIsVisible(false);
//   };

//   const handleSubmit = () => {
//     if (!selectedValue) {   // Show an alert or error if no value is selected
//       Alert.alert('Please select a value from the list.');
//     } else {              // If a value is selected, proceed and close the modal
//       setIsVisible(false);
//     }
//   };

//   return (
//     <View style={styles.pickerContainer}>
//       <TouchableOpacity onPress={() => setIsVisible(true)} style={styles.pickerButton}>

//         <View style={styles.labelContainer}>
//           <Text style={styles.pickerText}>{placeholder}</Text>
//         </View>

//         <Text style={styles.pickerTextnew}></Text>

//         <View style={styles.valueContainer}>
//           <Text
//             style={styles.pickerTextValue}
//             numberOfLines={1} // Limits text to one line
//             ellipsizeMode="tail" // Adds ellipsis at the end of the text
//           >
//             {selectedValue ? selectedValue.name : selectedValue}
//           </Text>
//         </View>
//         <Icon name='chevron-down' type='entypo' size={20} color='#000' />
//       </TouchableOpacity>

//       <Modal
//         transparent={true}
//         visible={isVisible}
//         animationType="slide"
//         onRequestClose={() => setIsVisible(false)}
//       >
//         <Pressable style={styles.modalOverlay} onPress={() => setIsVisible(false)}>
//           <View style={styles.modalContent}>

//             {/*header style */}

//             <View style={styles.header}>
//               <View style={styles.headerTop}>

//                 <Text style={styles.countryTitle}>{placeholder}</Text>

//                 <TouchableOpacity onPress={() => setIsVisible(false)} style={styles.closeButton}>
//                   <Image source={require('../assets/img/close.png')} style={styles.close} />
//                 </TouchableOpacity>
//               </View>

//               {/* search bar */}

//               <View style={styles.searchInputContainer}>
//                 <Image source={require('../assets/img/search.png')} style={styles.searchicon} />
//                 <TextInput
//                   style={styles.searchInput}
//                   placeholder="Search"
//                   value={searchQuery}
//                   onChangeText={handleSearch}
//                 />
//               </View>
//             </View>

//             {/* list of countries */}

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

// const RegistrationForm = ({ navigation }) => {
//   const { showLoader, hideLoader } = useLoader();
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);
//   const [isEnabled, setIsEnabled] = useState(true);
//   const [share, setShare] = useState(false);
//   const [allFieldsFilled, setAllFieldsFilled] = useState(false);

//   const surnameRef = useRef(null);
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);
//   const confirmPasswordRef = useRef(null);
//   const titleRef = useRef(null);
//   const organizationRef = useRef(null);
//   const professionRef = useRef(null);

//   useEffect(() => {
//     loadCountries();
//   }, []);

//   const loadCountries = async () => {
//     showLoader();
//     try {
//       const response = await countryProvider.country();
//       const countries = response.data.map(country => ({
//         id: country.country_id,
//         name: country.country_name,
//       }));
//       console.log('Countries loaded:', countries);
//       setCountries(countries);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       hideLoader();
//     }
//   };

//   const handleCountryChange = async (selectedItem) => {
//     showLoader();
//     try {
//       const response = await countryProvider.state(selectedItem.id);
//       const states = response.data.map(state => ({
//         id: state.state_id,
//         name: state.state_name,
//       }));

//       setStates(states );
     


//       console.log('States loaded for country:', selectedItem, states);
//       setIsEnabled(false);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       hideLoader();
//     }
//   };

//   const handleSignup = async (values) => {
//     showLoader();
//     try {
//       const response = await userProvider.check_email(values.email);
//       if (response.data.result === 'success') {
//         const account = {
//           firstname: values.fname,
//           surname: values.lname,
//           email: values.email,
//           password: values.confirmPassword,
//           title: values.title,
//           organization: values.organization,
//           state: values.state.id,
//           country: values.country.id,
//           profession: values.profession,
//           share_data: values.share ? '1' : '0',
//         };
//         navigation.navigate('credit', { account });
//       } else {
//         Alert.alert(response.data.result, response.data.msg);
//       }
//     } catch (error) {
//       console.error(error);
//     } finally {
//       hideLoader();
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setConfirmPasswordVisible(!confirmPasswordVisible);
//   };

//   // Function to check if all fields are filled
//   const checkFieldsFilled = (values) => {
//     const isFilled = values.fname && values.lname && values.email && values.password && values.confirmPassword &&
//       values.country && values.state && values.title && values.organization && values.profession && share;
//     setAllFieldsFilled(isFilled);
//   };

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//     >
//       <StatusBar barStyle="light-content" backgroundColor="#9d0808" />
//       <View style={styles.headerContainer}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Image source={require('../assets/img/backnew.png')} style={styles.backIcon} resizeMode="cover" />
//         </TouchableOpacity>
//         <Text style={[styles.headerTitle, { flex: 1, textAlign: 'center' }]}>Welcome</Text>
//       </View>
//       <ScrollView
//         contentContainerStyle={styles.scrollViewContent}
//         keyboardShouldPersistTaps='handled'
//         showsVerticalScrollIndicator={false}
//       >
//         <Formik
//           initialValues={{
//             fname: '',
//             lname: '',
//             email: '',
//             password: '',
//             confirmPassword: '',
//             title: '',
//             organization: '',
//             state: '',
//             country: '',
//             share: false,
//             profession: '',
//           }}
//           validationSchema={Yup.object().shape({
//             fname: Yup.string()
//               .required('Required')
//               .min(2, 'Too Short!')
//               .max(30, 'Too Long!')
//               .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed.'),
//             lname: Yup.string()
//               .required('Required')
//               .min(2, 'Too Short!')
//               .max(30, 'Too Long!')
//               .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed.'),
//             email: Yup.string()
//               .required('Required')
//               .email('Invalid email'),
//             password: PasswordValidationSchema.fields.password,

//             confirmPassword: PasswordValidationSchema.fields.confirmPassword,

//             country: Yup.mixed()
//               .required('Required'),
//             state: Yup.mixed()
//               .required('Required'),

//             title: Yup.string()
//               .required('Required')
//               .min(2, 'Too Short!')
//               .max(30, 'Too Long!')
//               .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed.'),
//             organization: Yup.string()
//               .required('Required')
//               .min(2, 'Too Short!')
//               .max(30, 'Too Long!')
//               .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed.'),
//             profession: Yup.string()
//               .required('Required')
//               .min(2, 'Too Short!')
//               .max(30, 'Too Long!')
//               .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed.'),

//           })}
//           onSubmit={handleSignup}
//         >
//           {({ handleChange, handleBlur, handleSubmit, values, touched, errors, setFieldValue }) => (
//             <View>
//               <View>
//                 <Text style={styles.trial}> Sign up to start your 1 month free trial </Text>
//               </View>

//               <View style={styles.inputContainer}>
//                 <Image source={require('../assets/img/userc.png')} style={styles.icon} />
//                 <TextInput
//                   style={styles.input}
//                   onChangeText={handleChange('fname')}
//                   onBlur={() => {
//                     handleBlur('fname');
//                     checkFieldsFilled(values);
//                   }}
//                   value={values.fname}
//                   placeholder='First Name'
//                   ref={surnameRef}
//                   onSubmitEditing={() => surnameRef.current.focus()}
//                   autoCapitalize="none"
//                   returnKeyType="next"
//                   blurOnSubmit={false}
//                   maxLength={30}
//                 />

//               </View>
//               {touched.lname && errors.lname ? <Text style={styles.error}>{errors.lname}</Text> : null}



//               <View style={styles.inputContainer}>
//                 <Image source={require('../assets/img/userc.png')} style={styles.icon} />
//                 <TextInput
//                   style={styles.input}
//                   onChangeText={handleChange('lname')}
//                   onBlur={handleBlur('lname')}
//                   value={values.lname}
//                   placeholder='Last Name'
//                   ref={surnameRef}
//                   onSubmitEditing={() => emailRef.current.focus()}
//                   autoCapitalize="none"
//                   returnKeyType="next"
//                   blurOnSubmit={false}
//                   maxLength={30}
//                 />

//               </View>
//               {touched.lname && errors.lname ? <Text style={styles.error}>{errors.lname}</Text> : null}

//               <View style={styles.inputContainer}>
//                 <Image source={require('../assets/img/mail.png')} style={styles.icon} />
//                 <TextInput
//                   style={styles.input}
//                   onChangeText={handleChange('email')}
//                   onBlur={handleBlur('email')}
//                   value={values.email}
//                   placeholder='Email'
//                   ref={emailRef}
//                   onSubmitEditing={() => passwordRef.current.focus()}
//                   autoCapitalize="none"
//                   keyboardType='email-address'
//                   returnKeyType="next"
//                   blurOnSubmit={false}
//                 />

//               </View>
//               {touched.email && errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}

//               <View style={styles.inputContainer}>
//                 <Image source={require('../assets/img/padlock.png')} style={styles.icon6} />
//                 <TextInput
//                   style={styles.input}
//                   onChangeText={handleChange('password')}
//                   onBlur={handleBlur('password')}
//                   value={values.password}
//                   placeholder='Password'
//                   ref={passwordRef}
//                   secureTextEntry={!passwordVisible}
//                   onSubmitEditing={() => confirmPasswordRef.current.focus()}
//                   autoCapitalize="none"
//                   returnKeyType="next"
//                   blurOnSubmit={false}
//                 />
//                 <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
//                   <Icon name={passwordVisible ? 'eye-off' : 'eye'} type='feather' size={20} color='#000' />
//                 </TouchableOpacity>

//               </View>
//               {touched.password && errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}

//               <View style={styles.inputContainer}>
//                 <Image source={require('../assets/img/padlock.png')} style={styles.icon6} />
//                 <TextInput
//                   style={styles.input}
//                   onChangeText={handleChange('confirmPassword')}
//                   onBlur={handleBlur('confirmPassword')}
//                   value={values.confirmPassword}
//                   placeholder='Confirm Password'
//                   ref={confirmPasswordRef}
//                   secureTextEntry={!confirmPasswordVisible}
//                   autoCapitalize="none"
//                 />
//                 <TouchableOpacity onPress={toggleConfirmPasswordVisibility} style={styles.eyeIcon}>
//                   <Icon name={confirmPasswordVisible ? 'eye-off' : 'eye'} type='feather' size={20} color='#000' />
//                 </TouchableOpacity>

//               </View>
//               {touched.confirmPassword && errors.confirmPassword ? <Text style={styles.error}>{errors.confirmPassword}</Text> : null}

//               <View style={styles.inputContainer}>
//                 <Image source={require('../assets/img/country.png')} style={styles.icon} />
//                 <CustomPicker
//                   items={countries}
//                   selectedValue={values.country}
//                   onValueChange={item => {
//                     setFieldValue('country', item);
//                     handleCountryChange(item);
//                   }}
//                   placeholder='Country'
//                 />
//               </View>
//               {touched.country && errors.country ? <Text style={styles.error}>{errors.country}</Text> : null}

//               <View style={styles.inputContainer}>
//                 <Image source={require('../assets/img/state.png')} style={styles.icon} />
//                 <CustomPicker
//                   items={states}
//                   selectedValue={values.state}
//                   onValueChange={item => setFieldValue('state', item)}
//                   placeholder='State'
//                   disabled={isEnabled}
//                 />
//               </View>

//               <View style={styles.inputContainer}>
//                 <Image source={require('../assets/img/profession.png')} style={styles.icon2} />
//                 <TextInput
//                   style={styles.input}
//                   onChangeText={handleChange('title')}
//                   onBlur={handleBlur('title')}
//                   value={values.title}
//                   placeholder='Title'
//                   ref={titleRef}
//                   autoCapitalize="none"
//                 />
//               </View>
//               {touched.title && errors.title ? <Text style={styles.error}>{errors.title}</Text> : null}


//               <View style={styles.inputContainer}>
//                 <Image source={require('../assets/img/organizationQ.png')} style={styles.icon1} />
//                 <TextInput
//                   style={styles.input}
//                   onChangeText={handleChange('organization')}
//                   onBlur={handleBlur('organization')}
//                   value={values.organization}
//                   placeholder='Organization'
//                   ref={organizationRef}
//                   autoCapitalize="none"
//                 />
//               </View>
//               {touched.organization && errors.organization ? <Text style={styles.error}>{errors.organization}</Text> : null}


//               <View style={styles.inputContainer}>
//                 <Image source={require('../assets/img/profession.png')} style={styles.icon2} />
//                 <TextInput
//                   style={styles.input}
//                   onChangeText={handleChange('profession')}
//                   onBlur={handleBlur('profession')}
//                   value={values.profession}
//                   placeholder='Profession'
//                   ref={professionRef}
//                   autoCapitalize="none"
//                 />
//               </View>
//               {touched.profession && errors.profession ? <Text style={styles.error}>{errors.profession}</Text> : null}


//               <View style={styles.checkBoxContainer}>
//                 <CheckBox
//                   title="Share my data"
//                   checked={!share}
//                   onPress={() => {
//                     setShare(!share);
//                     checkFieldsFilled(values);
//                   }}
//                 />
//               </View>
              
//               <Text style={styles.agreementText}>
//                 By clicking <Text style={styles.bold}>Register</Text> you are agree to the
//                 <Text style={styles.link} onPress={() => Linking.openURL('https://aggressionmanagement.com/Privacy%20Policy%20of%20CAPS.html')}> Privacy Policy and conditions</Text>
//               </Text>


//               <TouchableOpacity
//                 style={[
//                   styles.button,
//                   allFieldsFilled ?? share ? styles.buttonEnabled : styles.buttonDisabled,
//                 ]}
//                 disabled={!allFieldsFilled && share}
//                 onPress={handleSubmit}
//               >
//                 <Text style={styles.buttonText}>NEXT</Text>
//               </TouchableOpacity>

//             </View>
//           )}
//         </Formik>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   scrollViewContent: {
//     paddingVertical: 20, // Vertical padding for the entire content inside ScrollView

//   },

//   headerContainer: {
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
//   headerTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: 'white',
//     textAlign: 'center',
//   },


//   itemText: {
//     fontSize: 15,
//     color: 'black',
//   },

//   trial: {
//     fontSize: 20,
//     //marginTop: '1%',
//     marginBottom: 10,
//     color: 'black',
//     textAlign: 'center',
//     fontWeight: '600'
//   },
//   inputContainer: {
//     margin: 10,
//     position: 'relative',
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   input: {

//     padding: 10,
//     marginLeft: 30,
//     height: 45,
//     fontSize: 15,

//   },

//   eyeIcon: {
//     position: 'absolute',
//     right: 10,
//     top: 15,
//   },
//   eyeIconContainer: {
//     padding: 10,
//   },
//   error: {
//     color: 'red',
//     fontSize: 12,
//     marginLeft: 10,

//   },

//   // country state picker
//   pickerContainer: {
//     margin: 1,
//   },
//   pickerButton: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 8,
//     //borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//   },
//   CountrypickerButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },

//   pickerText: {
//     padding: 1,
//     marginLeft: 30,
//     fontSize: 15,

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
//   },
//   pickerTextValue: {
//     color: '#000', // Text color
//     fontSize: 16,
//     marginRight: 8, // Space between text and icon
//     maxWidth: '85%', // Limits the width of the text container so it doesn't overlap with the icon
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
//   button: {
//     margin: 5,
//     backgroundColor: '#d1919b', // The pink color for the button
//     paddingVertical: 12, // Vertical padding for the button height
//     paddingHorizontal: 20, // Horizontal padding for button width
//     borderRadius: 10, // Rounded corners
//     elevation: 2, // For a subtle shadow (optional)
//     width: '40%',
//     marginLeft: '30%',
//   },
//   buttonText: {
//     color: '#fff', // White text
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   agreementText: {
//     textAlign: 'left',
//     marginLeft: 10,
//     marginRight: 10,
//     fontSize: 15,
//     color: 'black',
//     marginTop: 5,
//     marginBottom: 25,

//   },

//   link: {
//     color: '#800000',
//   },
//   bold: {
//     color: 'black',
//     fontSize: 16,
//     fontWeight: '700'
//   },
//   icon: {
//     width: 18,
//     height: 18,
//     marginRight: 10,
//     marginTop: 15,
//     marginLeft: 10,
//     position: 'absolute'
//   },
//   icon6: {
//     width: 18,
//     height: 18,
//     tintColor:'brown',
//     marginRight: 10,
//     marginTop: 15,
//     marginLeft: 10,
//     position: 'absolute'
//   },
//   icon1: {
//     width: 22,
//     height: 22,
//     marginRight: 10,
//     marginTop: 15,
//     marginLeft: 10,
//     position: 'absolute'
//   },
//   icon2: {
//     width: 22,
//     height: 22,
//     marginRight: 10,
//     marginTop: 15,
//     marginLeft: 10,
//     position: 'absolute'
//   },
//   labelText: {
//     fontSize: 16,
//     color: '#B22222',
//     marginRight: 10,
//   },

//   buttonEnabled: {
//     backgroundColor: 'darkred',
//   },
//   buttonDisabled: {
//     backgroundColor: '#d1919b',
//   },


// });

// export default RegistrationForm;



import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, StyleSheet, Image, KeyboardAvoidingView, StatusBar, Platform, Modal, Pressable, FlatList, TouchableWithoutFeedback } from 'react-native';

import { Formik, FormikErrors } from 'formik';
import * as Yup from 'yup';
import CountryProvider from '../providers/country/country';
import User from '../providers/user/User';
import { Api } from '../providers/api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLoader } from '../providers/loader/loader';
import { Linking } from 'react-native';


const api = new Api();
const countryProvider = new CountryProvider(api);
const userProvider = new User(api, AsyncStorage);

const PasswordValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required('Required')
    .min(8, 'Too Short!')
    .max(30, 'Too Long!')
    .matches(/(?=.*[a-z])(?=.*[0-9])(?=.*[$@$#!%*?&])/, 'Password must contain at least one lowercase letter, one number, and one special character.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

const CustomPicker = ({ items, selectedValue, onValueChange, placeholder, placeholderTextColor }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);
  const [isStatePicker, setIsStatePicker] = useState(false);


  useEffect(() => {
    if (isVisible) {
      // Reset the search and filteredItems when the modal is closed
      setSearchQuery('');
      setFilteredItems(items);
    }
  }, [isVisible]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      setFilteredItems(
        items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
      );
    } else {
      setFilteredItems(items);
    }
  };

  const handleSelect = (item) => {
    onValueChange(item);
    setIsVisible(false);
  };

  const handleSubmit = () => {
    if (!selectedValue) {   // Show an alert or error if no value is selected
      Alert.alert('Please select a value from the list.');
    } else {              // If a value is selected, proceed and close the modal
      setIsVisible(false);
    }
  };

  const openPicker = (isState) => {
    setIsStatePicker(isState);
    setIsVisible(true);
  };


  return (
    <View style={styles.pickerContainer}>
      <TouchableOpacity onPress={() => setIsVisible(true)} style={styles.pickerButton}>

        <View style={styles.labelContainer}>
          <Text style={styles.pickerText}>{placeholder}</Text>
        </View>
        <Text style={styles.pickerTextnew}></Text>
        <View style={styles.valueContainer}>
          <Text
            style={styles.pickerTextValue}
            numberOfLines={1} // Limits text to one line
            ellipsizeMode="tail" // Adds ellipsis at the end of the text
          >
            {selectedValue ? selectedValue.name : selectedValue}
          </Text>
        </View>
        {/* Use the dropdown arrow image */}
        <View style={styles.dropdownIconContainer}>
          <Image source={require('../assets/img/dropdownarrow.png')} style={styles.dropdownIcon} />
        </View>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={isVisible}
        animationType="slide"
        onRequestClose={() => setIsVisible(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setIsVisible(false)}>
          <View style={styles.modalContent}>

            {/*header style */}

            <View style={styles.header}>
              <View style={styles.headerTop}>
                <Text style={styles.countryTitle}>{placeholder}</Text>

                <TouchableOpacity onPress={() => setIsVisible(false)} style={styles.closeButton}>
                  <Image source={require('../assets/img/close.png')} style={styles.close} />
                </TouchableOpacity>
              </View>

              {/* search bar */}

              <View style={styles.searchInputContainer}>
                <Image
                  source={require('../assets/img/search.png')}
                  style={styles.searchicon} />
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search"
                  placeholderTextColor={'#666'}
                  value={searchQuery}
                  onChangeText={handleSearch}
                  // Ensure text color is set for visibility
                  selectionColor="#000" // Color of the cursor for better visibility
                />
              </View>
            </View>

            {/* list of countries */}

            <FlatList
              data={filteredItems}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSelect(item)} style={styles.item}>
                  {/* Radio button and country name in the same row */}
                  <View style={styles.rowContainer}>
                    <TouchableOpacity onPress={() => handleSelect(item)} style={styles.radioButton}>
                      <Image
                        source={
                          selectedValue?.id === item.id
                            ? require('../assets/img/checklist.png')
                            : require('../assets/img/circle.png')
                        }
                        style={styles.radioButtonImage}
                      />
                    </TouchableOpacity>

                    <Text style={styles.itemText1}>{item.name}</Text>
                  </View>

                </TouchableOpacity>
              )}

            />

            {/* Conditionally Render No Items Found Message */}
            {isStatePicker && filteredItems.length === 0 && (
              <View style={styles.noItemsFoundContainer}>
                <Text style={styles.noItemsFoundText}>No items found.</Text>
              </View>
            )}

          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const RegistrationForm = ({ navigation }) => {
  const { showLoader, hideLoader } = useLoader();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [isEnabled, setIsEnabled] = useState(true);
  const [share, setShare] = useState(false);
  const [allFieldsValid, setAllFieldsValid] = useState(false);

  const surnameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const titleRef = useRef(null);
  const organizationRef = useRef(null);
  const professionRef = useRef(null);



  useEffect(() => {
    loadCountries();
  }, []);

  const loadCountries = async () => {
    showLoader();
    try {
      const response = await countryProvider.country();
      const countries = response.data.map(country => ({
        id: country.country_id,
        name: country.country_name,
      }));
      console.log('Countries loaded:', countries);
      setCountries(countries);
    } catch (error) {
      console.error(error);
    } finally {
      hideLoader();
    }
  };

  const handleCountryChange = async (selectedItem) => {
    showLoader();
    try {
      const response = await countryProvider.state(selectedItem.id);
      const states = response.data.map(state => ({
        id: state.state_id,
        name: state.state_name,
      }));

      setStates(states);
      console.log('States loaded for country:', selectedItem, states);
      setIsEnabled(false);
    } catch (error) {
      console.error(error);
    } finally {
      hideLoader();
    }
  };

  const handleSignup = async (values) => {
    showLoader();
    try {
      const response = await userProvider.check_email(values.email);
      if (response.data.result === 'success') {
        const account = {
          firstname: values.fname,
          surname: values.lname,
          email: values.email,
          password: values.confirmPassword,
          title: values.title,
          organization: values.organization,
          state: values.state.id,
          country: values.country.id,
          profession: values.profession,
          share_data: values.share ? '1' : '0',
        };
        navigation.navigate('credit', { account });
      } else {
        Alert.alert(response.data.result, response.data.msg);
      }
    } catch (error) {
      console.error(error);
    } finally {
      hideLoader();
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  // Function to check if all fields are valid
  const checkFieldsValid = (values, errors) => {
    
    const noErrors = Object.keys(errors).length === 0;
    const allFieldsFilled = values.fname && values.lname && values.email && values.password && values.confirmPassword &&
      values.country && values.state && values.title && values.organization && values.profession && values.share;

    setAllFieldsValid(noErrors && allFieldsFilled && values.share);
  };

  function checkFieldsFilled(values: { fname: string; lname: string; email: string; password: string; confirmPassword: string; title: string; organization: string; state: string; country: string; share: boolean; profession: string; }, errors: FormikErrors<{ fname: string; lname: string; email: string; password: string; confirmPassword: string; title: string; organization: string; state: string; country: string; share: boolean; profession: string; }>) {
    throw new Error('Function not implemented.');
  }

  return (

    

    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar barStyle="light-content" backgroundColor="#9d0808" />
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={require('../assets/img/backarrow.png')} style={styles.backIcon} resizeMode="cover" />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { flex: 1, textAlign: 'center' }]}>Welcome</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps='handled'
        showsVerticalScrollIndicator={false}
      >
        <Formik
          initialValues={{
            fname: '',
            lname: '',
            email: '',
            password: '',
            confirmPassword: '',
            title: '',
            organization: '',
            state: '',
            country: '',
            share: false,
            profession: '',
          }}
          validationSchema={Yup.object().shape({
            fname: Yup.string()
              .required('Required')
              .min(2, 'Too Short!')
              .max(30, 'Too Long!')
              .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed '),
            lname: Yup.string()
              .required('Required')
              .min(2, 'Too Short!')
              .max(30, 'Too Long!')
              .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed.'),
            email: Yup.string()
              .required('Required')
              .email('Invalid email'),
            password: PasswordValidationSchema.fields.password,

            confirmPassword: PasswordValidationSchema.fields.confirmPassword,

            country: Yup.mixed()
              .required('Required'),
            state: Yup.mixed()
              .required('Required'),

            title: Yup.string()
              .required('Required')
              .min(2, 'Too Short!')
              .max(30, 'Too Long!')
              .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed'),
            organization: Yup.string()
              .required('Required')
              .min(2, 'Too Short!')
              .max(30, 'Too Long!')
              .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed.'),
            profession: Yup.string()
              .required('Required')
              .min(2, 'Too Short!')
              .max(30, 'Too Long!')
              .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed.'),
            share: Yup.boolean().oneOf([true], 'Must accept data sharing'),

          })}
          validateOnChange={true}
          validateOnBlur={true}
          onSubmit={handleSignup}
        >
          {({ handleChange, handleBlur, handleSubmit, values, touched, errors, setFieldValue }) => (
            <View>
              <View>
                <Text style={styles.trial}> Sign up to start your 1 month free trial </Text>
              </View>
              {/* first name field */}

              <View style={styles.inputContainer}>
                <Image source={require('../assets/img/userc.png')} style={styles.icon} />
                <TextInput
                  style={styles.input}
                  onChangeText={(text) => handleChange('fname')(text.replace(/\s/g, ''))} 
                  onBlur={handleBlur('fname')}
                  value={values.fname}
                  placeholder='First Name'
                  ref={surnameRef}
                  onSubmitEditing={() => surnameRef.current.focus()}
                  autoCapitalize="none"
                  returnKeyType="next"
                  blurOnSubmit={false}
                  maxLength={30}
                  placeholderTextColor={'#666'}
                />

              </View>
              {touched.fname && errors.fname ? <Text style={styles.error}>{errors.fname}</Text> : null}



              <View style={styles.inputContainer}>
                <Image source={require('../assets/img/userc.png')} style={styles.icon} />
                <TextInput
                  style={styles.input}
                  onChangeText={(text) => handleChange('lname')(text.replace(/\s/g, ''))}
                  onBlur={handleBlur('lname')}
                  value={values.lname}
                  placeholder='Last Name'
                  ref={surnameRef}
                  onSubmitEditing={() => emailRef.current.focus()}
                  autoCapitalize="none"
                  returnKeyType="next"
                  blurOnSubmit={false}
                  maxLength={30}
                  placeholderTextColor={'#666'}
                />
              </View>
              {touched.lname && errors.lname ? <Text style={styles.error}>{errors.lname}</Text> : null}

              <View style={styles.inputContainer}>
                <Image source={require('../assets/img/email.png')} style={styles.icon} />
                <TextInput
                  style={styles.input}
                  onChangeText={(text) => handleChange('email')(text.replace(/\s/g, ''))}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  placeholder='Email'
                  ref={emailRef}
                  onSubmitEditing={() => passwordRef.current.focus()}
                  autoCapitalize="none"
                  keyboardType='email-address'
                  returnKeyType="next"
                  blurOnSubmit={false}
                  placeholderTextColor={'#666'}
                />
              </View>
              {touched.email && errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}

              <View style={styles.inputContainer}>
                <Image source={require('../assets/img/padlock.png')} style={styles.icon} />
                <TextInput
                  style={styles.input}
                  onChangeText={(text) => handleChange('password')(text.replace(/\s/g, ''))}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  placeholder='Password'
                  ref={passwordRef}
                  secureTextEntry={!passwordVisible}
                  onSubmitEditing={() => confirmPasswordRef.current.focus()}
                  autoCapitalize="none"
                  returnKeyType="next"
                  blurOnSubmit={false}
                  placeholderTextColor={'#666'}
                />
                <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
                  <Image
                    source={passwordVisible ? require('../assets/img/eyeopen.png') : require('../assets/img/eyeclose.png')}
                    style={styles.eyeImage} // Define styles for the eye image
                  />
                </TouchableOpacity>

              </View>
              {touched.password && errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}

              <View style={styles.inputContainer}>
                <Image source={require('../assets/img/padlock.png')} style={styles.icon} />
                <TextInput
                  style={styles.input}
                  onChangeText={(text) => handleChange('confirmPassword')(text.replace(/\s/g, ''))}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  placeholder='Confirm Password'
                  ref={confirmPasswordRef}
                  secureTextEntry={!confirmPasswordVisible}
                  autoCapitalize="none"
                  placeholderTextColor={'#666'}
                />
                <TouchableOpacity onPress={toggleConfirmPasswordVisibility} style={styles.eyeIcon}>
                  <Image
                    source={confirmPasswordVisible ? require('../assets/img/eyeopen.png') : require('../assets/img/eyeclose.png')}
                    style={styles.eyeImage} // Define styles for the eye image
                  />
                </TouchableOpacity>


              </View>
              {touched.confirmPassword && errors.confirmPassword ? <Text style={styles.error}>{errors.confirmPassword}</Text> : null}
              <View style={styles.inputContainer}>
                <Image source={require('../assets/img/profession.png')} style={styles.icon2} />
                <TextInput
                  style={styles.input}
                  onChangeText={(text) => handleChange('title')(text.replace(/\s/g, ''))}
                  onBlur={handleBlur('title')}
                  value={values.title}
                  placeholder='Title'
                  ref={titleRef}
                  autoCapitalize="none"
                  placeholderTextColor={'#666'}
                />
              </View>
              {touched.title && errors.title ? <Text style={styles.error}>{errors.title}</Text> : null}


              <View style={styles.inputContainer}>
                <Image source={require('../assets/img/organization.png')} style={styles.icon1} />
                <TextInput
                  style={styles.input}
                  onChangeText={(text) => handleChange('organization')(text.replace(/\s/g, ''))}
                  onBlur={handleBlur('organization')}
                  value={values.organization}
                  placeholder='Organization'
                  ref={organizationRef}
                  autoCapitalize="none"
                  placeholderTextColor={'#666'}
                />
              </View>
              {touched.organization && errors.organization ? <Text style={styles.error}>{errors.organization}</Text> : null}

              <View style={styles.inputContainer}>
                <Image source={require('../assets/img/country.png')} style={styles.icon} />
                <CustomPicker
                  items={countries}
                  selectedValue={values.country}
                  onValueChange={item => {
                    setFieldValue('country', item);
                    handleCountryChange(item);
                  }}
                  placeholder={<Text style={{ color: '#333333' }}>Country</Text>}
                />
              </View>
              {touched.country && errors.country ? <Text style={styles.error}>{errors.country}</Text> : null}

              <View style={styles.inputContainer}>
                <Image source={require('../assets/img/state.png')} style={styles.icon} />
                <CustomPicker
                  items={states}
                  selectedValue={values.state}
                  onValueChange={item => setFieldValue('state', item)}
                  placeholder={<Text style={{ color: '#333333' }}>State</Text>}
                  disabled={isEnabled}
                />
              </View>
              {touched.state && errors.state ? <Text style={styles.error}>{errors.state}</Text> : null}


              <View style={styles.inputContainer}>
                <Image source={require('../assets/img/profession.png')} style={styles.icon2} />
                <TextInput
                  style={styles.input}
                  onChangeText={(text) => handleChange('profession')(text.replace(/\s/g, ''))}
                  onBlur={handleBlur('profession')}
                  value={values.profession}
                  placeholder='Profession'
                  ref={professionRef}
                  autoCapitalize="none"
                  placeholderTextColor={'#666'}
                />
              </View>
              {touched.profession && errors.profession ? <Text style={styles.error}>{errors.profession}</Text> : null}


              <View style={styles.container1}>
                {/* Custom checkbox container */}
                <View style={styles.customCheckboxContainer}>
                  <View style={styles.checkBoxContainer1}>


                    <TouchableWithoutFeedback
                      onPress={() => {
                        setFieldValue('share', !values.share); // Update Formik's 'share' field
                        setShare(!share); // Toggle local share state
                        checkFieldsValid(values, errors); // Re-check if all fields are valid
                      }}
                    >
                      <Image
                        source={
                          values.share
                            ? require('../assets/img/checkedbox.png') // Checked image when the box is checked
                            : require('../assets/img/box.png') // Unchecked image when the box is unchecked
                        }
                        style={styles.imageStyle}
                      />
                    </TouchableWithoutFeedback>


                    {/* Share Data Text */}
                    <Text style={styles.checkBoxText}>Share my data</Text>
                  </View>
                </View>

                {/* Agreement Text */}
                <Text style={styles.agreementText}>
                  By clicking <Text style={styles.bold}>Register</Text> you are agree to the
                  <Text style={styles.link} onPress={() => Linking.openURL('https://aggressionmanagement.com/Privacy%20Policy%20of%20CAPS.html')}> Privacy Policy and conditions</Text>
                </Text>


                <TouchableOpacity
                  style={[
                    styles.nextButton,
                    allFieldsValid, share ? styles.nextButtonEnabled : styles.nextButtonDisabled,
                  ]}
                  onPress={handleSubmit}
                  disabled={!allFieldsValid && !share}
                >
                  <Text style={styles.nextButtonText}>NEXT</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollViewContent: {
    paddingVertical: hp('2.5%'), // Adjusted for vertical padding
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp('4%'), // Adjusted padding
    backgroundColor: '#9d0808',
  },
  backButton: {
    marginRight: wp('1%'), // Adjusted margin
  },
  backIcon: {
    width: wp('7%'), // Adjusted size
    height: wp('7%'), // Adjusted size
    tintColor: 'white',
  },
  headerTitle: {
    fontSize: wp('5.5%'), // Adjusted font size
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  itemText: {
    fontSize: wp('4%'), // Adjusted font size
    color: 'black',
  },
  trial: {
    fontSize: wp('5%'), // Adjusted font size
    marginBottom: hp('1%'), // Adjusted margin
    color: 'black',
    textAlign: 'center',
    fontWeight: '300',
  },
  inputContainer: {
    margin: wp('2.5%'), // Adjusted margin
    position: 'relative',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    color: 'black',
    padding: wp('2.5%'), // Adjusted padding
    marginLeft: wp('7%'), // Adjusted margin
    height: hp('6%'), // Adjusted height
    fontSize: wp('4%'), // Adjusted font size
  },
  eyeIcon: {
    position: 'absolute',
    right: wp('2.5%'), // Adjusted position
    top: hp('2%'), // Adjusted position
    tintColor: '#9d0808',
  },
  eyeImage: {
    width: wp('5%'), // Adjusted size
    height: wp('5%'), // Adjusted size
    tintColor: '#9d0808',
  },
  eyeIconContainer: {
    padding: wp('2.5%'), // Adjusted padding
  },
  error: {
    color: 'red',
    fontSize: wp('3%'), // Adjusted font size
    marginLeft: wp('2.5%'), // Adjusted margin
  },
  pickerContainer: {
    margin: wp('1%'), // Adjusted margin
  },
  pickerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: wp('2%'), // Adjusted padding
    borderColor: '#ccc',
    borderRadius: 5,
  },
  CountrypickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp('1%'), // Adjusted padding
  },
  dropdownIcon: {
    width: wp('3%'), // Adjusted size
    height: wp('3%'), // Adjusted size
  },
  pickerText: {
    padding: hp('0.5%'), // Adjusted padding
    marginLeft: wp('7%'), // Adjusted margin
    fontSize: wp('4%'), // Adjusted font size
    color: 'white',
  },
  pickerTextnew: {
    fontSize: wp('4%'), // Adjusted font size
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
  },
  pickerTextValue: {
    color: '#000',
    fontSize: wp('4%'), // Adjust fontSize: wp('4%'), // Adjusted font size
    marginRight: wp('2%'), // Adjusted margin
    maxWidth: '85%',
    flexShrink: 1,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  modalContent: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF',
    paddingVertical: 0,
    top: -1,
    bottom: 0,
  },
  header: {
    alignItems: 'center',
     marginTop: hp('0.1%'), // Adjusted margin
    backgroundColor: 'brown',
    paddingTop: hp('2.5%'), // Adjusted padding
    paddingBottom: hp('0.5%'), // Adjusted padding
    paddingHorizontal: wp('2.5%'), // Adjusted padding
    position: 'relative',
    justifyContent: 'center',
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryTitle: {
    color: '#FFFFFF',
    fontSize: wp('5%'), // Adjusted font size
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
    top: hp('1%'), // Adjusted position
    left: '54%',
    position: 'absolute',
  },
  close: {
    width: wp('4%'), // Adjusted size
    height: wp('4%'), // Adjusted size
    tintColor: 'white',
    marginRight: wp('12.5%'), // Adjusted margin
  },
  searchInputContainer: {
    height: wp('12%'),
    marginTop: hp('3%'), // Adjusted margin
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 3,
    paddingHorizontal: wp('4%'), // Adjusted padding
    marginBottom: hp('1%'), // Adjusted margin
  },
  searchicon: {
    width: wp('4.5%'), // Adjusted size
    height: wp('4.5%'), // Adjusted size
    tintColor: '#515151',
    marginRight: wp('4%'), // Adjusted margin
    marginTop: hp('2.2%'), // Adjusted margin
  },
  searchInput: {
    flex: 1,
    fontSize: wp('4%'), // Adjusted font size
    color: '#000',
  },
  noItemsFoundContainer: {
    flex: 1,
  },
  noItemsFoundText: {
    fontSize: wp('4%'), // Adjusted font size
    color: '#333',
    marginLeft: wp('5%'), // Adjusted margin
    marginTop: hp('-30%'), // Adjusted margin
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp('2.5%'), // Adjusted padding
    borderBottomColor: '#E0E0E0',
  },
  itemText1: {
    fontSize: wp('4%'), // Adjusted font size
    color: '#000',
    marginLeft: wp('4%'), // Adjusted margin
  },
  radioButton: {
    margin: 1,
    padding: 1,
    paddingHorizontal: wp('2.5%'), // Adjusted padding
  },
  radioButtonImage: {
    width: wp('5%'), // Adjusted size
    height: wp('5%'), // Adjusted size
  },
  countryContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingBottom: hp('2.5%'), // Adjusted padding
    marginLeft: wp('4%'), // Adjusted margin
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dividerAligned: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginTop: hp('1%'), // Adjusted margin
    marginLeft: wp('10%'), // Adjusted margin
  },
  checkBoxContainer: {
    margin: 1,
  },
  agreementText: {
    textAlign: 'left',
    marginLeft: wp('2.5%'), // Adjusted margin
    marginRight: wp('2.5%'), // Adjusted margin
    fontSize: wp('4%'), // Adjusted font size
    color: 'black',
    marginTop: hp('1%'), // Adjusted margin
    marginBottom: hp('3%'), // Adjusted margin
  },
  link: {
    color: '#800000',
    
  },
  bold: {
    color: 'black',
    fontSize: wp('3.8%'), // Adjusted font size
    fontWeight: '700',
  },
  icon: {
    width: wp('4.5%'), // Adjusted size
    height: wp('4.5%'), // Adjusted size
    marginRight: wp('2.5%'), // Adjusted margin
    marginTop: hp('2%'), // Adjusted margin
    marginLeft: wp('2.5%'), // Adjusted margin
    position: 'absolute',
    tintColor: '#9d0808',
  },
  icon1: {
    width: wp('5%'), // Adjusted size
    height: wp('5%'), // Adjusted size
    marginRight: wp('2.5%'), // Adjusted margin
    marginTop: hp('2%'), // Adjusted margin
    marginLeft: wp('2.5%'), // Adjusted margin
    position: 'absolute',
    tintColor: '#9d0808',
  },
  icon2: {
    width: wp('5.5%'), // Adjusted size
    height: wp('5.5%'), // Adjusted size
    marginRight: wp('2.5%'), // Adjusted margin
    marginTop: hp('1.5%'), // Adjusted margin
    marginLeft: wp('2.5%'), // Adjusted margin
    position: 'absolute',
    tintColor: '#9d0808',
  },
  labelText: {
    fontSize: wp('4%'), // Adjusted font size
    color: '#B22222',
    marginRight: wp('2.5%'), // Adjusted margin
  },
  container1: {
    padding: wp('2.5%'), // Adjusted padding
  },
  customCheckboxContainer: {
    borderColor: '#D3D3D3',
    borderWidth: 1,
    padding: wp('2.5%'), // Adjusted padding
    backgroundColor: '#F5F5F5',
    borderRadius: 4,
  },
  checkBoxContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imageStyle: {
    width: wp('4%'), // Adjusted size
    height: wp('4%'), // Adjusted size
    marginRight: wp('2.5%'), // Adjusted margin
    tintColor: '#9d0808',
  },
  checkedImage: {
    tintColor: 'blue',
  },
  checkBoxText: {
    fontSize: wp('4%'), // Adjusted font size
    color: '#555',
  },
  nextButton: {
    padding: wp('3%'), // Adjusted padding
    borderRadius: 5,
    width: wp('50%'), // Adjusted width
    height: hp('7%'), // Adjusted height
    alignSelf: 'center',
  },
  nextButtonEnabled: {
    backgroundColor: 'darkred',
  },
  nextButtonDisabled: {
    backgroundColor: '#d1919b',
  },
  nextButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: wp('4%'), // Adjusted font size
    fontWeight: 'bold',
  },
});

export default RegistrationForm;

function setAllFieldsValid(arg0: any) {
  throw new Error('Function not implemented.');
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   scrollViewContent: {
//     paddingVertical: 20, // Vertical padding for the entire content inside ScrollView

//   },

//   headerContainer: {
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
//   headerTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: 'white',
//     textAlign: 'center',
//   },


//   itemText: {
//     fontSize: 15,
//     color: 'black',
//   },

//   trial: {
//     fontSize: 20,
//     //marginTop: '1%',
//     marginBottom: 10,
//     color: 'black',
//     textAlign: 'center',
//     fontWeight: '600'
//   },
//   inputContainer: {
//     margin: 10,
//     position: 'relative',
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   input: {
//     color: 'black',
//     padding: 10,
//     marginLeft: 30,
//     height: 45,
//     fontSize: 15,

//   },

//   eyeIcon: {
//     position: 'absolute',
//     right: 10,
//     top: 15,
//     tintColor: '#9d0808'
//   },

//   eyeImage: {
//     width: 20, // Adjust the size
//     height: 20,
//     tintColor: '#9d0808'
//   },

//   eyeIconContainer: {
//     padding: 10,
//   },
//   error: {
//     color: 'red',
//     fontSize: 12,
//     marginLeft: 10,

//   },

//   // country state picker
//   pickerContainer: {
//     margin: 1,

//   },
//   pickerButton: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 8,
//     borderColor: '#ccc',
//     borderRadius: 5,
//   },
//   CountrypickerButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   dropdownIconContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 5, // Adjust to add some padding if needed
//   },
//   dropdownIcon: {
//     width: 12,
//     height: 12,
//   },

//   pickerText: {
//     padding: 1,
//     marginLeft: 30,
//     fontSize: 15,
//     color: 'white'

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
//   },
//   pickerTextValue: {
//     color: '#000', // Text color
//     fontSize: 16,
//     marginRight: 8, // Space between text and icon
//     maxWidth: '85%', // Limits the width of the text container so it doesn't overlap with the icon
//     flexShrink: 1, // Shrinks the text if it's too long
//   },

//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     alignItems: 'center',
//     width: '100%',
//     height: '100%',
//     position: 'absolute',
//   },
//   modalContent: {
//     width: '100%',
//     height: '100%',
//     backgroundColor: '#FFF',
//     paddingVertical: 0,
//     top: -1,
//     bottom: 0,


//   },

//   header: {
//     alignItems: 'center', // Vertically centers both items
//     marginTop: 1,
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
//     color: '#FFFFFF',
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   closeButton: {
//     top: 8,
//     left: '54%',
//     position: 'absolute',



//   },
//   close: {
//     width: 13,
//     height: 13,
//     tintColor: 'white',
//     marginRight: 50,

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
//     width: 17,
//     height: 18,
//     tintColor: '#515151',
//     marginRight: 15,
//     marginTop: 16,

//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     color: '#000',

//   },

//   noItemsFoundContainer: {
//     flex: 1,
//     //justifyContent: 'flex-start',
//     //alignItems: 'flex-start',
//   },
//   noItemsFoundText: {
//     fontSize: 16,
//     color: '#333',
//     marginLeft: 20,
//     marginTop: -260,

//   },
//   //country list
//   item: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//     borderBottomColor: '#E0E0E0',
//   },
//   itemText1: {
//     fontSize: 16,
//     color: '#000',
//     marginLeft: 15, // Adjust for spacing between image and text
//   },
//   radioButton: {
//     margin: 1,
//     padding: 1,
//     paddingHorizontal: 10, // Add padding to adjust click area

//   },
//   radioButtonImage: {
//     width: 20, // Adjust the size of the image
//     height: 20, // Adjust the size of the image
//   },
//   countryContainer: {
//     flex: 1, // Ensures the country name and divider take up the remaining space
//     borderBottomWidth: 1,
//     borderBottomColor: '#E0E0E0',
//     paddingBottom: 10, // Adjust space between the name and the line
//     marginLeft: 15, // This separates the country name from the image
//   },
//   rowContainer: {
//     flexDirection: 'row',  // Align circle and country name in a row
//     alignItems: 'center',  // Vertically center align the items

//   },

//   dividerAligned: {
//     height: 1, // Line height
//     backgroundColor: '#E0E0E0', // Divider color
//     marginTop: 5, // Space between the country name and divider
//     marginLeft: 40, // Ensure this aligns with the start of the country text
//   },

//   checkBoxContainer: {
//     margin: 1,
//   },

//   agreementText: {
//     textAlign: 'left',
//     marginLeft: 10,
//     marginRight: 10,
//     fontSize: 15,
//     color: 'black',
//     marginTop: 5,
//     marginBottom: 25,

//   },

//   link: {
//     color: '#800000',
//   },
//   bold: {
//     color: 'black',
//     fontSize: 16,
//     fontWeight: '700'
//   },
//   icon: {
//     width: 18,
//     height: 18,
//     marginRight: 10,
//     marginTop: 15,
//     marginLeft: 10,
//     position: 'absolute',
//     tintColor: '#9d0808'
//   },
//   icon1: {
//     width: 22,
//     height: 22,
//     marginRight: 10,
//     marginTop: 15,
//     marginLeft: 10,
//     position: 'absolute',
//     tintColor: '#9d0808'
//   },
//   icon2: {
//     width: 25,
//     height: 25,
//     marginRight: 10,
//     marginTop: 10,
//     marginLeft: 10,
//     position: 'absolute',
//     tintColor: '#9d0808'
//   },
//   labelText: {
//     fontSize: 16,
//     color: '#B22222',
//     marginRight: 10,
//   },

//   container1: {
//     padding: 10,
//   },
//   // Outer container for the custom checkbox with border and padding
//   customCheckboxContainer: {
//     borderColor: '#D3D3D3', // Light grey border color
//     borderWidth: 1,
//     padding: 10,
//     backgroundColor: '#F5F5F5', // Slightly off-white background
//     borderRadius: 4, // Rounded corners similar to the image
//   },
//   checkBoxContainer1: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   },
//   imageStyle: {
//     width: 18,
//     height: 18, // Default checkbox size
//     marginRight: 10, // Space between image and text
//     tintColor: '#9d0808'
//   },
//   // Style for when the checkbox is checked
//   checkedImage: {
//     tintColor: 'blue', // You can change this to any color to indicate it's checked
//   },
//   checkBoxText: {
//     fontSize: 15,
//     color: '#555',
//   },

//   nextButton: {
//     padding: 15,
//     borderRadius: 5,
//     width: 200,
//     height: 50,
//     alignSelf: 'center', // Horizontally center the button

//   },
//   nextButtonEnabled: {
//     backgroundColor: 'darkred',
//   },
//   nextButtonDisabled: {
//     backgroundColor: '#d1919b',
//   },
//   nextButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontSize: 16,
//     fontWeight: 'bold',

//   },

//   //network modal




// });

// export default RegistrationForm;
// function setAllFieldsValid(arg0: any) {
//   throw new Error('Function not implemented.');
// }

