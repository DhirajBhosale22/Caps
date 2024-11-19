// // // import React, { useState, useEffect } from 'react';
// // // import {
// // //   View,
// // //   Text,
// // //   TextInput,
// // //   TouchableOpacity,
// // //   Alert,
// // //   StyleSheet,
// // //   ScrollView,
// // // } from 'react-native';
// // // import { useForm, Controller } from 'react-hook-form';
// // // import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
// // // import { changePassword } from '../providers/forgotpassword/forgotpassword';
// // // import { Api } from '../providers/api/api';

// // // const api = new Api();

// // // const PasswordValidation = {
// // //   matchPassword: (password: string, confirmPassword: string) => {
// // //     return password === confirmPassword ? null : 'Passwords do not match';
// // //   },
// // // };

// // // const ChangePasswordScreen = ({ navigation }) => {
// // //   const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
// // //   const [newPasswordVisible, setNewPasswordVisible] = useState(false);
// // //   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
// // //   const [token, setToken] = useState<string | null>(null);

// // //   const { control, handleSubmit, watch, formState: { errors } } = useForm({
// // //     defaultValues: {
// // //       old_password: '',
// // //       new_password: '',
// // //       confirm_password: '',
// // //     },
// // //   });

// // //   useEffect(() => {
// // //     // Fetch the user token from AsyncStorage
// // //     const fetchToken = async () => {
// // //       try {
// // //         const storedUser = await AsyncStorage.getItem('user');
// // //         if (storedUser) {
// // //           const parsedUser = JSON.parse(storedUser);
// // //           setToken(parsedUser.token); // Store the token for API requests
// // //         } else {
// // //           navigation.navigate('LoginScreen'); // Redirect to login if no user info found
// // //         }
// // //       } catch (error) {
// // //         console.error('Failed to retrieve user from storage:', error);
// // //       }
// // //     };

// // //     fetchToken();
// // //   }, []);

// // //   const onSubmit = async (data: any) => {
// // //     if (PasswordValidation.matchPassword(data.new_password, data.confirm_password)) {
// // //       Alert.alert('Error', 'Passwords do not match');
// // //       return;
// // //     }

// // //     if (!token) {
// // //       Alert.alert('Error', 'User token is missing. Please log in again.');
// // //       navigation.navigate('LoginScreen');
// // //       return;
// // //     }

// // //     try {
// // //       // Call the API to change the password, including the token for authentication
// // //       const response = await changePassword({
// // //         old_password: data.old_password,
// // //         new_password: data.new_password,
// // //         token, // Pass the token with the request
// // //       });

// // //       if (response.data.result === 'success') {
// // //         Alert.alert('Success', response.data.msg, [
// // //           {
// // //             text: 'OK',
// // //             onPress: () => navigation.navigate('profile'),
// // //           },
// // //         ]);
// // //       } else {
// // //         if (response.data.msg === 'Your account is deactivated, please contact support.') {
// // //           // Handle account deactivation
// // //           navigation.navigate('LoginScreen');
// // //         } else {
// // //           Alert.alert('Error', response.data.msg);
// // //         }
// // //       }
// // //     } catch (error) {
// // //       Alert.alert('Error', 'An error occurred. Please try again later.');
// // //       console.error(error);
// // //     }
// // //   };

// // //   const toggleVisibility = (type: string) => {
// // //     switch (type) {
// // //       case 'Old':
// // //         setOldPasswordVisible(!oldPasswordVisible);
// // //         break;
// // //       case 'New':
// // //         setNewPasswordVisible(!newPasswordVisible);
// // //         break;
// // //       case 'Confirm':
// // //         setConfirmPasswordVisible(!confirmPasswordVisible);
// // //         break;
// // //       default:
// // //         break;
// // //     }
// // //   };

// // //   return (
// // //     <ScrollView contentContainerStyle={styles.container}>
// // //       <Text style={styles.title}>Change Password</Text>

// // //       {/* Old Password */}
// // //       <View style={styles.inputContainer}>
// // //         <Controller
// // //           control={control}
// // //           name="old_password"
// // //           rules={{
// // //             required: 'Old password is required',
// // //             minLength: {
// // //               value: 8,
// // //               message: 'Password must be at least 8 characters long',
// // //             },
// // //           }}
// // //           render={({ field: { onChange, onBlur, value } }) => (
// // //             <TextInput
// // //               style={styles.input}
// // //               onBlur={onBlur}
// // //               onChangeText={onChange}
// // //               value={value}
// // //               secureTextEntry={!oldPasswordVisible}
// // //               placeholder="Old Password"
// // //             />
// // //           )}
// // //         />
// // //         {errors.old_password && <Text style={styles.errorText}>{errors.old_password.message}</Text>}
// // //         <TouchableOpacity onPress={() => toggleVisibility('Old')}>
// // //           <Text>{oldPasswordVisible ? 'Hide' : 'Show'} Old Password</Text>
// // //         </TouchableOpacity>
// // //       </View>

// // //       {/* New Password */}
// // //       <View style={styles.inputContainer}>
// // //         <Controller
// // //           control={control}
// // //           name="new_password"
// // //           rules={{
// // //             required: 'New password is required',
// // //             minLength: {
// // //               value: 8,
// // //               message: 'Password must be at least 8 characters long',
// // //             },
// // //           }}
// // //           render={({ field: { onChange, onBlur, value } }) => (
// // //             <TextInput
// // //               style={styles.input}
// // //               onBlur={onBlur}
// // //               onChangeText={onChange}
// // //               value={value}
// // //               secureTextEntry={!newPasswordVisible}
// // //               placeholder="New Password"
// // //             />
// // //           )}
// // //         />
// // //         {errors.new_password && <Text style={styles.errorText}>{errors.new_password.message}</Text>}
// // //         <TouchableOpacity onPress={() => toggleVisibility('New')}>
// // //           <Text>{newPasswordVisible ? 'Hide' : 'Show'} New Password</Text>
// // //         </TouchableOpacity>
// // //       </View>

// // //       {/* Confirm Password */}
// // //       <View style={styles.inputContainer}>
// // //         <Controller
// // //           control={control}
// // //           name="confirm_password"
// // //           rules={{
// // //             required: 'Confirm password is required',
// // //             validate: (value) =>
// // //               value === watch('new_password') || 'Passwords do not match',
// // //           }}
// // //           render={({ field: { onChange, onBlur, value } }) => (
// // //             <TextInput
// // //               style={styles.input}
// // //               onBlur={onBlur}
// // //               onChangeText={onChange}
// // //               value={value}
// // //               secureTextEntry={!confirmPasswordVisible}
// // //               placeholder="Confirm Password"
// // //             />
// // //           )}
// // //         />
// // //         {errors.confirm_password && <Text style={styles.errorText}>{errors.confirm_password.message}</Text>}
// // //         <TouchableOpacity onPress={() => toggleVisibility('Confirm')}>
// // //           <Text>{confirmPasswordVisible ? 'Hide' : 'Show'} Confirm Password</Text>
// // //         </TouchableOpacity>
// // //       </View>

// // //       <TouchableOpacity style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
// // //         <Text style={styles.submitButtonText}>Change Password</Text>
// // //       </TouchableOpacity>
// // //     </ScrollView>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flexGrow: 1,
// // //     padding: 20,
// // //     backgroundColor: '#fff',
// // //   },
// // //   title: {
// // //     fontSize: 24,
// // //     fontWeight: 'bold',
// // //     marginBottom: 20,
// // //     textAlign: 'center',
// // //   },
// // //   inputContainer: {
// // //     marginBottom: 15,
// // //   },
// // //   input: {
// // //     borderColor: '#ccc',
// // //     borderWidth: 1,
// // //     borderRadius: 5,
// // //     padding: 10,
// // //     fontSize: 16,
// // //     backgroundColor: '#f9f9f9',
// // //   },
// // //   errorText: {
// // //     color: 'red',
// // //     marginTop: 5,
// // //   },
// // //   submitButton: {
// // //     backgroundColor: '#007BFF',
// // //     padding: 15,
// // //     borderRadius: 5,
// // //     alignItems: 'center',
// // //   },
// // //   submitButtonText: {
// // //     color: '#fff',
// // //     fontSize: 16,
// // //     fontWeight: 'bold',
// // //   },
// // // });

// // // export default ChangePasswordScreen;


// // // import React, {useState, useEffect} from 'react';
// // // import {
// // //   View,
// // //   Text,
// // //   TextInput,
// // //   TouchableOpacity,
// // //   Alert,
// // //   StyleSheet,
// // //   ScrollView,
// // //   Image,
// // // } from 'react-native';
// // // import {useForm, Controller} from 'react-hook-form';
// // // import AsyncStorage from '@react-native-async-storage/async-storage';
// // // import { changePassword } from '../providers/forgotpassword/forgotpassword';
// // // import {Api} from '../providers/api/api';

// // // const api = new Api();

// // // const PasswordValidation = {
// // //   matchPassword: (password: string, confirmPassword: string) => {
// // //     return password === confirmPassword ? null : 'Passwords do not match';
// // //   },
// // // };

// // // const ChangePasswordScreen = ({navigation}) => {
// // //   const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
// // //   const [newPasswordVisible, setNewPasswordVisible] = useState(false);
// // //   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
// // //   const [token, setToken] = useState<string | null>(null);

// // //   const {
// // //     control,
// // //     handleSubmit,
// // //     watch,
// // //     formState: {errors},
// // //   } = useForm({
// // //     defaultValues: {
// // //       old_password: '',
// // //       new_password: '',
// // //       confirm_password: '',
// // //     },
// // //   });

// // //   useEffect(() => {
// // //     const fetchToken = async () => {
// // //       try {
// // //         const storedUser = await AsyncStorage.getItem('user');
// // //         if (storedUser) {
// // //           const parsedUser = JSON.parse(storedUser);
// // //           setToken(parsedUser.token);
// // //         } else {
// // //           navigation.navigate('LoginScreen');
// // //         }
// // //       } catch (error) {
// // //         console.error('Failed to retrieve user from storage:', error);
// // //       }
// // //     };

// // //     fetchToken();
// // //   }, []);

// // //   const onSubmit = async (data: any) => {
// // //     if (
// // //       PasswordValidation.matchPassword(data.new_password, data.confirm_password)
// // //     ) {
// // //       Alert.alert('Error', 'Passwords do not match');
// // //       return;
// // //     }

// // //     if (!token) {
// // //       Alert.alert('Error', 'User token is missing. Please log in again.');
// // //       navigation.navigate('LoginScreen');
// // //       return;
// // //     }

// // //     try {
// // //       const response = await changePassword({
// // //         old_password: data.old_password,
// // //         new_password: data.new_password,
// // //         token,
// // //       });

// // //       if (response.data.result === 'success') {
// // //         Alert.alert('Success', response.data.msg, [
// // //           {
// // //             text: 'OK',
// // //             onPress: () => navigation.navigate('profile'),
// // //           },
// // //         ]);
// // //       } else {
// // //         if (
// // //           response.data.msg ===
// // //           'Your account is deactivated, please contact support.'
// // //         ) {
// // //           navigation.navigate('LoginScreen');
// // //         } else {
// // //           Alert.alert('Error', response.data.msg);
// // //         }
// // //       }
// // //     } catch (error) {
// // //       Alert.alert('Error', 'An error occurred. Please try again later.');
// // //       console.error(error);
// // //     }
// // //   };

// // //   const toggleVisibility = (type: string) => {
// // //     switch (type) {
// // //       case 'Old':
// // //         setOldPasswordVisible(!oldPasswordVisible);
// // //         break;
// // //       case 'New':
// // //         setNewPasswordVisible(!newPasswordVisible);
// // //         break;
// // //       case 'Confirm':
// // //         setConfirmPasswordVisible(!confirmPasswordVisible);
// // //         break;
// // //       default:
// // //         break;
// // //     }
// // //   };

// // //   return (
// // //     <ScrollView contentContainerStyle={styles.container}>
// // //       <View style={styles.head}>
// // //         <Text style={styles.title}>Change Password</Text>
// // //       </View>

// // //       {/* Old Password */}
// // //       <View style={styles.inputContainer}>
// // //         <View style={styles.inputWrapper}>
// // //           <Controller
// // //             control={control}
// // //             name="old_password"
// // //             rules={{
// // //               required: 'Old password is required',
// // //               minLength: {
// // //                 value: 8,
// // //                 message: 'Password must be at least 8 characters long',
// // //               },
// // //             }}
// // //             render={({field: {onChange, onBlur, value}}) => (
// // //               <TextInput
// // //                 style={styles.input}
// // //                 onBlur={onBlur}
// // //                 onChangeText={onChange}
// // //                 value={value}
// // //                 secureTextEntry={!oldPasswordVisible}
// // //                 placeholder="Old Password"
// // //               />
// // //             )}
// // //           />
// // //           <TouchableOpacity
// // //             onPress={() => toggleVisibility('Old')}
// // //             style={styles.icon}>
// // //             <Image
// // //               source={
// // //                 oldPasswordVisible
// // //                   ? require('../assets/img/view.png')
// // //                   : require('../assets/img/hidden.png')
// // //               }
// // //               style={styles.iconImage}
// // //             />
// // //           </TouchableOpacity>
// // //         </View>
// // //         {errors.old_password && (
// // //           <Text style={styles.errorText}>{errors.old_password.message}</Text>
// // //         )}
// // //       </View>

// // //       {/* New Password */}
// // //       <View style={styles.inputContainer}>
// // //         <View style={styles.inputWrapper}>
// // //           <Controller
// // //             control={control}
// // //             name="new_password"
// // //             rules={{
// // //               required: 'New password is required',
// // //               minLength: {
// // //                 value: 8,
// // //                 message: 'Password must be at least 8 characters long',
// // //               },
// // //             }}
// // //             render={({field: {onChange, onBlur, value}}) => (
// // //               <TextInput
// // //                 style={styles.input}
// // //                 onBlur={onBlur}
// // //                 onChangeText={onChange}
// // //                 value={value}
// // //                 secureTextEntry={!newPasswordVisible}
// // //                 placeholder="New Password"
// // //               />
// // //             )}
// // //           />
// // //           <TouchableOpacity
// // //             onPress={() => toggleVisibility('New')}
// // //             style={styles.icon}>
// // //             <Image
// // //               source={
// // //                 newPasswordVisible
// // //                   ? require('../assets/img/view.png')
// // //                   : require('../assets/img/hidden.png')
// // //               }
// // //               style={styles.iconImage}
// // //             />
// // //           </TouchableOpacity>
// // //         </View>
// // //         {errors.new_password && (
// // //           <Text style={styles.errorText}>{errors.new_password.message}</Text>
// // //         )}
// // //       </View>

// // //       {/* Confirm Password */}
// // //       <View style={styles.inputContainer}>
// // //         <View style={styles.inputWrapper}>
// // //           <Controller
// // //             control={control}
// // //             name="confirm_password"
// // //             rules={{
// // //               required: 'Confirm password is required',
// // //               validate: value =>
// // //                 value === watch('new_password') || 'Passwords do not match',
// // //             }}
// // //             render={({field: {onChange, onBlur, value}}) => (
// // //               <TextInput
// // //                 style={styles.input}
// // //                 onBlur={onBlur}
// // //                 onChangeText={onChange}
// // //                 value={value}
// // //                 secureTextEntry={!confirmPasswordVisible}
// // //                 placeholder="Confirm Password"
// // //               />
// // //             )}
// // //           />
// // //           <TouchableOpacity
// // //             onPress={() => toggleVisibility('Confirm')}
// // //             style={styles.icon}>
// // //             <Image
// // //               source={
// // //                 confirmPasswordVisible
// // //                   ? require('../assets/img/view.png')
// // //                   : require('../assets/img/hidden.png')
// // //               }
// // //               style={styles.iconImage}
// // //             />
// // //           </TouchableOpacity>
// // //         </View>
// // //         {errors.confirm_password && (
// // //           <Text style={styles.errorText}>
// // //             {errors.confirm_password.message}
// // //           </Text>
// // //         )}
// // //       </View>

// // //       <TouchableOpacity
// // //         style={styles.submitButton}
// // //         onPress={handleSubmit(onSubmit)}>
// // //         <Text style={styles.submitButtonText}>CHANGE PASSWORD</Text>
// // //       </TouchableOpacity>
// // //     </ScrollView>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flexGrow: 1,
// // //     backgroundColor: '#fff',
// // //   },
// // //   title: {
// // //     fontSize: 20,
// // //     fontWeight: '300',
// // //     textAlign: 'center',
// // //     color: 'white',
// // //   },
// // //   inputContainer: {
// // //     marginBottom: 1,
// // //   },
// // //   inputWrapper: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //     borderColor: '#ccc',
// // //     borderWidth: 1,
// // //     borderRadius: 3,
// // //     backgroundColor: '#f9f9f9',
// // //     marginLeft: 15,
// // //     height: 50,
// // //     marginTop: 15,
// // //     width: 400,
// // //   },
// // //   icon: {
// // //     padding: 10,
// // //   },
// // //   iconImage: {
// // //     width: 15,
// // //     height: 15,
// // //     tintColor: '#a42f2d',
// // //   },
// // //   head: {
// // //     flexDirection: 'row',
// // //     backgroundColor: '#a42f2d',
// // //     paddingHorizontal: 50,
// // //     paddingVertical: 17,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     color: 'white',
// // //     marginBottom: 15,
// // //     elevation: 15,
// // //   },
// // //   input: {
// // //     flex: 1,
// // //     paddingHorizontal: 10,
// // //     fontSize: 16,
// // //     tintColor: 'black',
// // //   },
// // //   errorText: {
// // //     color: 'red',
// // //     marginTop: 5,
// // //     marginLeft: 17,
// // //   },
// // //   submitButton: {
// // //     backgroundColor: '#a42f2d',
// // //     padding: 15,
// // //     borderRadius: 7,
// // //     alignItems: 'center',
// // //     width: 250,
// // //     marginLeft: 94,
// // //     marginTop: 7,
// // //   },
// // //   submitButtonText: {
// // //     color: '#fff',
// // //     fontSize: 16,
// // //     fontWeight: 'bold',
// // //   },
// // // });

// // // export default ChangePasswordScreen;



// // import React, {useState, useEffect} from 'react';
// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   Alert,
// //   StyleSheet,
// //   ScrollView,
// //   Image,
// // } from 'react-native';
// // import {useForm, Controller} from 'react-hook-form';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import {changePassword} from '../providers/forgotpassword/forgotpassword';
// // import {Api} from '../providers/api/api';

// // const api = new Api();

// // const PasswordValidation = {
// //   matchPassword: (password: string, confirmPassword: string) => {
// //     return password === confirmPassword ? null : 'Passwords do not match';
// //   },
// // };

// // const ChangePasswordScreen = ({navigation}) => {
// //   const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
// //   const [newPasswordVisible, setNewPasswordVisible] = useState(false);
// //   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
// //   const [token, setToken] = useState<string | null>(null);

// //   const {
// //     control,
// //     handleSubmit,
// //     watch,
// //     formState: {errors},
// //   } = useForm({
// //     defaultValues: {
// //       old_password: '',
// //       new_password: '',
// //       confirm_password: '',
// //     },
// //   });

// //   useEffect(() => {
// //     const fetchToken = async () => {
// //       try {
// //         const storedUser = await AsyncStorage.getItem('user');
// //         if (storedUser) {
// //           const parsedUser = JSON.parse(storedUser);
// //           setToken(parsedUser.token);
// //         } else {
// //           navigation.navigate('LoginScreen');
// //         }
// //       } catch (error) {
// //         console.error('Failed to retrieve user from storage:', error);
// //       }
// //     };

// //     fetchToken();
// //   }, []);

// //   const onSubmit = async (data: any) => {
// //     if (
// //       PasswordValidation.matchPassword(data.new_password, data.confirm_password)
// //     ) {
// //       Alert.alert('Error', 'Passwords do not match');
// //       return;
// //     }

// //     if (!token) {
// //       Alert.alert('Error', 'User token is missing. Please log in again.');
// //       navigation.navigate('LoginScreen');
// //       return;
// //     }

// //     try {
// //       const response = await changePassword({
// //         old_password: data.old_password,
// //         new_password: data.new_password,
// //         token,
// //       });

// //       if (response.data.result === 'success') {
// //         Alert.alert('Success', response.data.msg, [
// //           {
// //             text: 'OK',
// //             onPress: () => navigation.navigate('profile'),
// //           },
// //         ]);
// //       } else {
// //         if (
// //           response.data.msg ===
// //           'Your account is deactivated, please contact support.'
// //         ) {
// //           navigation.navigate('LoginScreen');
// //         } else {
// //           Alert.alert('Error', response.data.msg);
// //         }
// //       }
// //     } catch (error) {
// //       Alert.alert('Error', 'An error occurred. Please try again later.');
// //       console.error(error);
// //     }
// //   };

// //   const toggleVisibility = (type: string) => {
// //     switch (type) {
// //       case 'Old':
// //         setOldPasswordVisible(!oldPasswordVisible);
// //         break;
// //       case 'New':
// //         setNewPasswordVisible(!newPasswordVisible);
// //         break;
// //       case 'Confirm':
// //         setConfirmPasswordVisible(!confirmPasswordVisible);
// //         break;
// //       default:
// //         break;
// //     }
// //   };

// //   return (
// //     <ScrollView contentContainerStyle={styles.container}>
// //       <View style={styles.head}>
// //         <TouchableOpacity onPress={() => navigation.goBack()}>
// //           <Image
// //             style={styles.back}
// //             source={require('../assets/img/back.png')}
// //           />
// //         </TouchableOpacity>
// //         <Text style={styles.title}>Change Password</Text>
// //       </View>

// //       {/* Old Password */}
// //       <View style={styles.inputContainer}>
// //         <View style={styles.inputWrapper}>
// //           <Controller
// //             control={control}
// //             name="old_password"
// //             rules={{
// //               required: 'This field cannot be empty.',
// //               minLength: {
// //                 value: 8,
// //                 message: 'Password must be at least 8 characters long',
// //               },
// //             }}
// //             render={({field: {onChange, onBlur, value}}) => (
// //               <TextInput
// //                 style={styles.input}
// //                 onBlur={onBlur}
// //                 onChangeText={onChange}
// //                 value={value}
// //                 secureTextEntry={!oldPasswordVisible}
// //                 placeholder="Old Password"
// //                 placeholderTextColor="#303030"
// //               />
// //             )}
// //           />
// //           <TouchableOpacity
// //             onPress={() => toggleVisibility('Old')}
// //             style={styles.icon}>
// //             <Image
// //               source={
// //                 oldPasswordVisible
// //                   ? require('../assets/img/view.png')
// //                   : require('../assets/img/hidden.png')
// //               }
// //               style={styles.iconImage}
// //             />
// //           </TouchableOpacity>
// //         </View>
// //       </View>
// //       {errors.old_password && (
// //         <Text style={styles.errorText}>{errors.old_password.message}</Text>
// //       )}

// //       {/* New Password */}
// //       <View style={styles.inputContainer}>
// //         <View style={styles.inputWrapper}>
// //           <Controller
// //             control={control}
// //             name="new_password"
// //             rules={{
// //               required: 'New password is required',
// //               minLength: {
// //                 value: 8,
// //                 message: 'Password must be at least 8 characters long',
// //               },
// //             }}
// //             render={({field: {onChange, onBlur, value}}) => (
// //               <TextInput
// //                 style={styles.input}
// //                 onBlur={onBlur}
// //                 onChangeText={onChange}
// //                 value={value}
// //                 secureTextEntry={!newPasswordVisible}
// //                 placeholder="New Password"
// //                 placeholderTextColor="#303030"
// //               />
// //             )}
// //           />
// //           <TouchableOpacity
// //             onPress={() => toggleVisibility('New')}
// //             style={styles.icon}>
// //             <Image
// //               source={
// //                 newPasswordVisible
// //                   ? require('../assets/img/view.png')
// //                   : require('../assets/img/hidden.png')
// //               }
// //               style={styles.iconImage}
// //             />
// //           </TouchableOpacity>
// //         </View>
// //       </View>
// //       {errors.new_password && (
// //         <Text style={styles.errorText}>{errors.new_password.message}</Text>
// //       )}

// //       {/* Confirm Password */}
// //       <View style={styles.inputContainer}>
// //         <View style={styles.inputWrapper}>
// //           <Controller
// //             control={control}
// //             name="confirm_password"
// //             rules={{
// //               required: 'Confirm password is required',
// //               validate: value =>
// //                 value === watch('new_password') || 'Passwords do not match',
// //             }}
// //             render={({field: {onChange, onBlur, value}}) => (
// //               <TextInput
// //                 style={styles.input}
// //                 onBlur={onBlur}
// //                 onChangeText={onChange}
// //                 value={value}
// //                 secureTextEntry={!confirmPasswordVisible}
// //                 placeholder="Confirm Password"
// //                 placeholderTextColor="#303030"
// //               />
// //             )}
// //           />
// //           <TouchableOpacity
// //             onPress={() => toggleVisibility('Confirm')}
// //             style={styles.icon}>
// //             <Image
// //               source={
// //                 confirmPasswordVisible
// //                   ? require('../assets/img/view.png')
// //                   : require('../assets/img/hidden.png')
// //               }
// //               style={styles.iconImage}
// //             />
// //           </TouchableOpacity>
// //         </View>
// //       </View>
// //       {errors.confirm_password && (
// //         <Text style={styles.errorText}>{errors.confirm_password.message}</Text>
// //       )}

// //       <TouchableOpacity
// //         style={styles.submitButton}
// //         onPress={handleSubmit(onSubmit)}>
// //         <Text style={styles.submitButtonText}>CHANGE PASSWORD</Text>
// //       </TouchableOpacity>
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flexGrow: 1,
// //     backgroundColor: '#fff',
// //   },
// //   title: {
// //     fontSize: 20,
// //     fontWeight: 'bolt',
// //     color: 'white',
// //     margin: 'auto',
// //   },
// //   inputContainer: {
// //     marginBottom: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   inputWrapper: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     borderColor: '#ccc',
// //     borderWidth: 1,
// //     borderRadius: 3,
// //     backgroundColor: '#f9f9f9',
// //     height: 50,
// //     marginTop: 15,
// //     width: '95%',
// //   },
// //   icon: {
// //     padding: 10,
// //   },
// //   iconImage: {
// //     width: 15,
// //     height: 15,
// //     tintColor: '#a42f2d',
// //   },
// //   head: {
// //     flexDirection: 'row',
// //     backgroundColor: '#a42f2d',
// //     // paddingHorizontal: 50,
// //     paddingVertical: 17,

// //     // justifyContent: 'center',
// //     // alignItems: 'center',
// //     color: 'white',
// //     marginBottom: 15,
// //     elevation: 15,
// //   },
// //   back: {
// //     width: 25,
// //     height: 20,
// //     tintColor: 'white',
// //     marginLeft: 15,
// //   },
// //   input: {
// //     flex: 1,
// //     paddingHorizontal: 10,
// //     fontSize: 16,
// //     tintColor: 'black',
// //   },
// //   errorText: {
// //     color: 'red',
// //     marginTop: 5,
// //     marginLeft: 19,
// //   },
// //   submitButton: {
// //     backgroundColor: '#a42f2d',
// //     padding: 15,
// //     borderRadius: 7,
// //     alignItems: 'center',
// //     width: 250,
// //     marginLeft: 94,
// //     marginTop: 7,
// //   },
// //   submitButtonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// // });

// // export default ChangePasswordScreen;



// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Alert,
//   StyleSheet,
//   ScrollView,
//   Image,
//   Modal,
// } from 'react-native';
// import {useForm, Controller} from 'react-hook-form';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {changePassword} from '../providers/forgotpassword/forgotpassword';
// import {Api} from '../providers/api/api';
// import {Linkinig} from 'react-native';
// const api = new Api();

// const PasswordValidation = {
//   matchPassword: (password: string, confirmPassword: string) => {
//     return password === confirmPassword ? null : 'Passwords do not match';
//   },
// };

// const ChangePasswordScreen = ({navigation}) => {
//   const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
//   const [newPasswordVisible, setNewPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
//   const [token, setToken] = useState<string | null>(null);
//   const [showFooter, setShowFooter] = useState(true);
//   const [logoutModalVisible, setLogoutModalVisible] = useState(false);

//   const {
//     control,
//     handleSubmit,
//     watch,
//     formState: {errors},
//   } = useForm({
//     defaultValues: {
//       old_password: '',
//       new_password: '',
//       confirm_password: '',
//     },
//   });

//   useEffect(() => {
//     const fetchToken = async () => {
//       try {
//         const storedUser = await AsyncStorage.getItem('user');
//         if (storedUser) {
//           const parsedUser = JSON.parse(storedUser);
//           setToken(parsedUser.token);
//         } else {
//           navigation.navigate('LoginScreen');
//         }
//       } catch (error) {
//         console.error('Failed to retrieve user from storage:', error);
//       }
//     };

//     fetchToken();
//   }, []);

//   const onSubmit = async (data: any) => {
//     if (
//       PasswordValidation.matchPassword(data.new_password, data.confirm_password)
//     ) {
//       Alert.alert('Error', 'Passwords do not match');
//       return;
//     }

//     if (!token) {
//       Alert.alert('Error', 'User token is missing. Please log in again.');
//       navigation.navigate('LoginScreen');
//       return;
//     }

//     try {
//       const response = await changePassword({
//         old_password: data.old_password,
//         new_password: data.new_password,
//         token,
//       });

//       if (response.data.result === 'success') {
//         Alert.alert('Success', response.data.msg, [
//           {
//             text: 'OK',
//             onPress: () => navigation.navigate('profile'),
//           },
//         ]);
//       } else {
//         if (
//           response.data.msg ===
//           'Your account is deactivated, please contact support.'
//         ) {
//           navigation.navigate('LoginScreen');
//         } else {
//           Alert.alert('Error', response.data.msg);
//         }
//       }
//     } catch (error) {
//       Alert.alert('Error', 'An error occurred. Please try again later.');
//       console.error(error);
//     }
//   };

//   const toggleVisibility = (type: string) => {
//     switch (type) {
//       case 'Old':
//         setOldPasswordVisible(!oldPasswordVisible);
//         break;
//       case 'New':
//         setNewPasswordVisible(!newPasswordVisible);
//         break;
//       case 'Confirm':
//         setConfirmPasswordVisible(!confirmPasswordVisible);
//         break;
//       default:
//         break;
//     }
//   };
//   const handleLogout = () => {
//     setLogoutModalVisible(false);
//     navigation.reset({
//       index: 0,
//       routes: [{name: 'Login'}], // Navigate to the login screen and reset the stack
//     });
//   };
//   const handleLogoutCancel = () => {
//     setLogoutModalVisible(false);
//   };

//   return (
//     <View Style={styles.container}>
//       <ScrollView>
//         <View style={styles.head}>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Image
//               style={styles.back}
//               source={require('../assets/img/back.png')}
//             />
//           </TouchableOpacity>
//           <Text style={styles.title}>Change Password</Text>
//         </View>

//         {/* Old Password */}
//         <View style={styles.inputContainer}>
//           <View style={styles.inputWrapper}>
//             <Controller
//               control={control}
//               name="old_password"
//               rules={{
//                 required: 'This field cannot be empty.',
//                 minLength: {
//                   value: 8,
//                   message: 'Password must be at least 8 characters long',
//                 },
//               }}
//               render={({field: {onChange, onBlur, value}}) => (
//                 <TextInput
//                   style={styles.input}
//                   onBlur={onBlur}
//                   onChangeText={onChange}
//                   value={value}
//                   secureTextEntry={!oldPasswordVisible}
//                   placeholder="Old Password"
//                   placeholderTextColor="#303030"
//                 />
//               )}
//             />
//             <TouchableOpacity
//               onPress={() => toggleVisibility('Old')}
//               style={styles.icon}>
//               <Image
//                 source={
//                   oldPasswordVisible
//                     ? require('../assets/img/view.png')
//                     : require('../assets/img/hidden.png')
//                 }
//                 style={styles.iconImage}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>
//         {errors.old_password && (
//           <Text style={styles.errorText}>{errors.old_password.message}</Text>
//         )}

//         {/* New Password */}
//         <View style={styles.inputContainer}>
//           <View style={styles.inputWrapper}>
//             <Controller
//               control={control}
//               name="new_password"
//               rules={{
//                 required: 'New password is required',
//                 minLength: {
//                   value: 8,
//                   message: 'Password must be at least 8 characters long',
//                 },
//               }}
//               render={({field: {onChange, onBlur, value}}) => (
//                 <TextInput
//                   style={styles.input}
//                   onBlur={onBlur}
//                   onChangeText={onChange}
//                   value={value}
//                   secureTextEntry={!newPasswordVisible}
//                   placeholder="New Password"
//                   placeholderTextColor="#303030"
//                 />
//               )}
//             />
//             <TouchableOpacity
//               onPress={() => toggleVisibility('New')}
//               style={styles.icon}>
//               <Image
//                 source={
//                   newPasswordVisible
//                     ? require('../assets/img/view.png')
//                     : require('../assets/img/hidden.png')
//                 }
//                 style={styles.iconImage}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>
//         {errors.new_password && (
//           <Text style={styles.errorText}>{errors.new_password.message}</Text>
//         )}

//         {/* Confirm Password */}
//         <View style={styles.inputContainer}>
//           <View style={styles.inputWrapper}>
//             <Controller
//               control={control}
//               name="confirm_password"
//               rules={{
//                 required: 'Confirm password is required',
//                 validate: value =>
//                   value === watch('new_password') || 'Passwords do not match',
//               }}
//               render={({field: {onChange, onBlur, value}}) => (
//                 <TextInput
//                   style={styles.input}
//                   onBlur={onBlur}
//                   onChangeText={onChange}
//                   value={value}
//                   secureTextEntry={!confirmPasswordVisible}
//                   placeholder="Confirm Password"
//                   placeholderTextColor="#303030"
//                 />
//               )}
//             />
//             <TouchableOpacity
//               onPress={() => toggleVisibility('Confirm')}
//               style={styles.icon}>
//               <Image
//                 source={
//                   confirmPasswordVisible
//                     ? require('../assets/img/view.png')
//                     : require('../assets/img/hidden.png')
//                 }
//                 style={styles.iconImage}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>
//         {errors.confirm_password && (
//           <Text style={styles.errorText}>
//             {errors.confirm_password.message}
//           </Text>
//         )}

//         <TouchableOpacity
//           style={styles.submitButton}
//           onPress={handleSubmit(onSubmit)}>
//           <Text style={styles.submitButtonText}>CHANGE PASSWORD</Text>
//         </TouchableOpacity>
//       </ScrollView>

//       {/* {showFooter && (
//         <View style={styles.footer}>
//           <TouchableOpacity
//             style={styles.footerButton}
//             onPress={() => navigation.navigate('home')}>
//             <Image
//               source={require('../assets/img/home.png')}
//               style={styles.footerIcon}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.footerButton}
//             onPress={() => Linking.openURL('tel://')}>
//             <Image
//               source={require('../assets/img/call.png')}
//               style={styles.footerIcon}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.footerButton}
//             onPress={() => navigation.navigate('SharegroupPage')}>
//             <Image
//               source={require('../assets/img/Profile-icon.png')}
//               style={styles.footerIcon}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.footerButton}
//             onPress={() => navigation.navigate('EditProfile')}>
//             <Image
//               source={require('../assets/img/edit.png')}
//               style={styles.footerIcon}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.footerButton}
//             onPress={() => setLogoutModalVisible(true)}>
//             <Image
//               source={require('../assets/img/logout.png')}
//               style={styles.footerIcon}
//             />
//           </TouchableOpacity>
//         </View>
//       )} */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={logoutModalVisible}
//         onRequestClose={() => setLogoutModalVisible(false)}>
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalTitles}>Confirm Logout</Text>
//             <Text style={styles.modalText}>
//               Are you sure you want to log out?
//             </Text>
//             <View style={styles.modalButtonContainer}>
//               <TouchableOpacity
//                 style={styles.modalButton}
//                 onPress={handleLogout}>
//                 <Text style={styles.modalButtonText}>Yes</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.modalButton}
//                 onPress={handleLogoutCancel}>
//                 <Text style={styles.modalButtonText}>No</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
  
//   title: {
//     fontSize: 20,
//     fontWeight: 'bolt',
//     color: 'white',
//     margin: 'auto',
//   },
//   inputContainer: {
//     marginBottom: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   inputWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 3,
//     backgroundColor: '#f9f9f9',
//     height: 50,
//     marginTop: 15,
//     width: '95%',
//   },
//   icon: {
//     padding: 10,
//   },
//   iconImage: {
//     width: 15,
//     height: 15,
//     tintColor: '#a42f2d',
//   },
//   head: {
//     flexDirection: 'row',
//     backgroundColor: '#a42f2d',
//     paddingVertical: 17,
//     color: 'white',
//     marginBottom: 15,
//     elevation: 15,
//   },
//   back: {
//     width: 25,
//     height: 20,
//     tintColor: 'white',
//     marginLeft: 15,
//   },
//   input: {
//     flex: 1,
//     paddingHorizontal: 10,
//     fontSize: 16,
//     tintColor: 'black',
//   },
//   errorText: {
//     color: 'red',
//     marginTop: 5,
//     marginLeft: 19,
//   },
//   submitButton: {
//     backgroundColor: '#a42f2d',
//     padding: 15,
//     borderRadius: 7,
//     alignItems: 'center',
//     width: 250,
//     marginLeft: 94,
//     marginTop: 7,
//   },
//   submitButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   footer: {
//     height: 60,
//     backgroundColor: '#B71C1C',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
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
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   modalTitles: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 15,
//   },
//   modalText: {
//     fontSize: 16,
//     marginBottom: 15,
//   },
//   modalText1: {
//     fontSize: 16,
//     marginBottom: 15,
//     fontWeight: 'bold',
//   },
//   modalButtonContainer: {
//     flexDirection: 'row',
//   },
//   modalButton: {
//     borderRadius: 5,
//     padding: 10,
//     marginHorizontal: 10,
//     backgroundColor: '#9D0808',
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
// });

// export default ChangePasswordScreen;

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ScrollView,
  Image,
  Modal,
  Linking,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {changePassword} from '../providers/forgotpassword/forgotpassword';
import {Api} from '../providers/api/api';

const api = new Api();

const PasswordValidation = {
  matchPassword: (password: string, confirmPassword: string) => {
    return password === confirmPassword ? null : 'Passwords do not match';
  },
};

const ChangePasswordScreen = ({navigation}) => {
  const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [showFooter, setShowFooter] = useState(true);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    trigger,
    formState: {errors},
  } = useForm({
    defaultValues: {
      old_password: '',
      new_password: '',
      confirm_password: '',
    },
  });

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setToken(parsedUser.token);
        } else {
          navigation.navigate('LoginScreen');
        }
      } catch (error) {
        console.error('Failed to retrieve user from storage:', error);
      }
    };

    fetchToken();
  }, []);

  const onSubmit = async (data: any) => {
    if (
      PasswordValidation.matchPassword(data.new_password, data.confirm_password)
    ) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    if (!token) {
      Alert.alert('Error', 'User token is missing. Please log in again.');
      navigation.navigate('LoginScreen');
      return;
    }

    try {
      const response = await changePassword({
        old_password: data.old_password,
        new_password: data.new_password,
        token,
      });

      if (response.data.result === 'success') {
        Alert.alert('Success', response.data.msg, [
          {
            text: 'OK',
            onPress: () => navigation.navigate('profile'),
          },
        ]);
      } else {
        if (
          response.data.msg ===
          'Your account is deactivated, please contact support.'
        ) {
          navigation.navigate('LoginScreen');
        } else {
          Alert.alert('Error', response.data.msg);
        }
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred. Please try again later.');
      console.error(error);
    }
  };

  const toggleVisibility = (type: string) => {
    switch (type) {
      case 'Old':
        setOldPasswordVisible(!oldPasswordVisible);
        break;
      case 'New':
        setNewPasswordVisible(!newPasswordVisible);
        break;
      case 'Confirm':
        setConfirmPasswordVisible(!confirmPasswordVisible);
        break;
      default:
        break;
    }
  };
  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };
  const handleLogoutCancel = () => {
    setLogoutModalVisible(false);
  };
  const isButtonDisabled =
    !watch('old_password') ||
    watch('old_password').length < 8 ||
    !watch('new_password') ||
    watch('new_password').length < 8 ||
    !watch('confirm_password') ||
    watch('confirm_password') !== watch('new_password');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.head}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.back}
            source={require('../assets/img/backarrow.png')}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Change Password</Text>
      </View>

      {/* Old Password */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Controller
            control={control}
            name="old_password"
            rules={{
              required: 'This field cannot be empty.',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.input}
                onBlur={() => {
                  onBlur(); // Call onBlur to trigger validation
                  trigger('old_password'); // Validate on blur
                }}
                onChangeText={text => {
                  onChange(text); // Update value
                  trigger('old_password'); // Validate on change
                }}
                value={value}
                secureTextEntry={!oldPasswordVisible}
                placeholder="Old Password"
                placeholderTextColor="#303030"
              />
            )}
          />
          <TouchableOpacity
            onPress={() => toggleVisibility('Old')}
            style={styles.icon}>
            <Image
              source={
                oldPasswordVisible
                  ? require('../assets/img/view.png')
                  : require('../assets/img/hidden.png')
              }
              style={styles.iconImage}
            />
          </TouchableOpacity>
        </View>
        {errors.old_password && (
          <Text style={styles.errorText}>{errors.old_password.message}</Text>
        )}
      </View>

      {/* New Password */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Controller
            control={control}
            name="new_password"
            rules={{
              required: 'New password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long',
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  'Password must contain at least one uppercase letter, one lowercase letter, one number, and can include special characters like @$!%*?&.',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.input}
                onBlur={() => {
                  onBlur(); // Call onBlur to trigger validation
                  trigger('new_password'); // Validate on blur
                }}
                onChangeText={text => {
                  onChange(text); // Update value
                  trigger('new_password'); // Validate on change
                }}
                value={value}
                secureTextEntry={!newPasswordVisible}
                placeholder="New Password"
                placeholderTextColor="#303030"
              />
            )}
          />

          <TouchableOpacity
            onPress={() => toggleVisibility('New')}
            style={styles.icon}>
            <Image
              source={
                newPasswordVisible
                  ? require('../assets/img/view.png')
                  : require('../assets/img/hidden.png')
              }
              style={styles.iconImage}
            />
          </TouchableOpacity>
        </View>
        {errors.new_password && (
          <Text style={styles.errorText}>{errors.new_password.message}</Text>
        )}
      </View>

      {/* Confirm Password */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Controller
            control={control}
            name="confirm_password"
            rules={{
              required: 'Confirm password is required',
              validate: value =>
                value === watch('new_password') || 'Passwords do not match',
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.input}
                onBlur={() => {
                  onBlur(); // Call onBlur to trigger validation
                  trigger('confirm_password'); // Validate on blur
                }}
                onChangeText={text => {
                  onChange(text); // Update value
                  trigger('confirm_password'); // Validate on change
                }}
                value={value}
                secureTextEntry={!confirmPasswordVisible}
                placeholder="Confirm Password"
                placeholderTextColor="#303030"
              />
            )}
          />
          <TouchableOpacity
            onPress={() => toggleVisibility('Confirm')}
            style={styles.icon}>
            <Image
              source={
                confirmPasswordVisible
                  ? require('../assets/img/view.png')
                  : require('../assets/img/hidden.png')
              }
              style={styles.iconImage}
            />
          </TouchableOpacity>
        </View>
        {errors.confirm_password && (
          <Text style={styles.errorText}>
            {errors.confirm_password.message}
          </Text>
        )}
      </View>

      <TouchableOpacity
        style={[
          styles.submitButton,
          isButtonDisabled ? styles.disabledButton : styles.enabledButton, // Dynamically apply enabled or disabled styles
        ]}
        onPress={handleSubmit(onSubmit)}
        disabled={isButtonDisabled} // Disable button if no email or password
      >
        <Text style={styles.submitButtonText}>CHANGE PASSWORD</Text>
      </TouchableOpacity>
      <View style={styles.footer1}>
        {showFooter && (
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.footerButton}
              onPress={() => navigation.navigate('home')}>
              <Image
                source={require('../assets/img/home_icon.png')}
                style={styles.footerIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.footerButton}
              onPress={() => Linking.openURL('tel:911')}>
              <Image
                source={require('../assets/img/call_icon.png')}
                style={styles.footerIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.footerButton}
              onPress={() => navigation.navigate('Sharedcases')}>
              <Image
                source={require('../assets/img/Profile-icon.png')}
                style={styles.footerIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.footerButton}
              onPress={() => navigation.navigate('EditProfile')}>
              <Image
                source={require('../assets/img/edit_icon.png')}
                style={styles.footerIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.footerButton}
              onPress={() => setLogoutModalVisible(true)}>
              <Image
                source={require('../assets/img/logout.png')}
                style={styles.footerIcon}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={logoutModalVisible}
        onRequestClose={() => setLogoutModalVisible(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitles}>Logout</Text>
            <Text style={styles.modalText}>
              Are you sure you want to log out?
            </Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleLogout}>
                <Text style={styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleLogoutCancel}>
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};



import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: wp('5.5%'), // Adjusted font size to be responsive
    fontWeight: 'bold', // Fixed typo from 'bolt' to 'bold'
    color: 'white',
    margin: 'auto',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: hp('10%'), // Adjusted padding to be responsive
  },
  inputContainer: {
    marginBottom: hp('1%'), // Adjusted margin to be responsive
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: 'white',
    height: hp('7%'), // Adjusted height to be responsive
    marginTop: hp('1%'), // Adjusted margin to be responsive
    width: '95%',
  },
  enabledButton: {
    backgroundColor: '#9d0808',
  },
  disabledButton: {
    backgroundColor: 'rgba(300, 0, 0.1, 0.3)',
  },
  icon: {
    padding: wp('2.5%'), // Adjusted padding to be responsive
  },
  iconImage: {
    width: wp('4%'), // Adjusted width to be responsive
    height: hp('2.5%'), // Adjusted height to be responsive
    tintColor: '#a42f2d',
  },
  head: {
    flexDirection: 'row',
    backgroundColor: '#a42f2d',
    paddingVertical: hp('2%'), // Adjusted padding to be responsive
    marginBottom: hp('2%'), // Adjusted margin to be responsive
    elevation: 15,
  },
  back: {
    width: wp('7%'), // Adjusted width to be responsive
    height: hp('4%'), // Adjusted height to be responsive
    tintColor: 'white',
    marginLeft: wp('3%'), // Adjusted margin to be responsive
  },
  input: {
    flex: 1,
    paddingHorizontal: wp('2.5%'), // Adjusted padding to be responsive
    fontSize: wp('4%'), // Adjusted font size to be responsive
    tintColor: 'black',
    color: 'black',
  },
  errorText: {
    color: 'red',
    marginTop: hp('1%'), // Adjusted margin to be responsive
    fontSize: wp('3.5%'), // Adjusted font size to be responsive
    alignSelf: 'flex-start',
    marginLeft: wp('3%'), // Adjusted margin to be responsive
  },
  submitButton: {
    backgroundColor: '#a42f2d',
    padding: hp('1.5%'), // Adjusted padding to be responsive
    borderRadius: 7,
    alignItems: 'center',
    width: '60%',
    height: hp('7%'),
    marginTop: hp('2%'), // Adjusted margin to be responsive
    alignSelf: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: wp('5.2%'), // Adjusted font size to be responsive
    fontWeight: 'bold',
  
  },
  footer: {
    height: hp('8%'), // Adjusted height to be responsive
    backgroundColor: '#B71C1C',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footer1: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: hp('7.5%'), // Adjusted height to be responsive
  },
  footerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerIcon: {
    width: wp('6%'), // Adjusted width to be responsive
    height: hp('4%'), // Adjusted height to be responsive
    tintColor: 'white',
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
    padding: hp('4%'), // Adjusted padding to be responsive
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitles: {
    fontSize: wp('5%'), // Adjusted font size to be responsive
    fontWeight: 'bold',
    marginBottom: hp('2%'), // Adjusted margin to be responsive
    color: 'black',
  },
  modalText: {
    fontSize: wp('4%'), // Adjusted font size to be responsive
    marginBottom: hp('2%'), // Adjusted margin to be responsive
    color: 'black',
  },
  modalText1: {
    fontSize: wp('4%'), // Adjusted font size to be responsive
    marginBottom: hp('2%'), // Adjusted margin to be responsive
    fontWeight: 'bold',
  },
  modalButtonContainer: {
    flexDirection: 'row',
  },
  modalButton: {
    borderRadius: 5,
    padding: hp('2%'), // Adjusted padding to be responsive
    marginHorizontal: wp('2%'), // Adjusted margin to be responsive
    backgroundColor: '#9D0808',
  },
  modalButtonText: {
    color: 'white',
    fontSize: wp('4%'), // Adjusted font size to be responsive
  },
  ptext: {
    fontSize: wp('4.5%'), // Adjusted font size to be responsive
    marginBottom: hp('2%'), // Adjusted margin to be responsive
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ChangePasswordScreen;