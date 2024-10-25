
// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   Alert,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   Linking,
// } from 'react-native';
// import Contacts from 'react-native-contacts';
// import {SwipeListView} from 'react-native-swipe-list-view';
// import {useForm, Controller} from 'react-hook-form';
// import {useNavigation} from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {DistributionlistProvider} from '../providers/distributionlist/distributionlist';
// import {Api} from '../providers/api/api';
// import {useLoader} from '../providers/loader/loader';
// import Modal from 'react-native-modal';
// import {BlurView} from '@react-native-community/blur';
// import {red100} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
// import {Title} from 'react-native-paper';
// import { ScrollView } from 'react-native-gesture-handler';

// const SharegroupPage = () => {
//   const {
//     control,
//     handleSubmit,
//     setValue,
//     watch,
//     formState: {errors},
//     reset,
//   } = useForm();

//   const [editingGroup, setEditingGroup] = useState(null);
//   const [contactItems, setContactItems] = useState([]);
//   const [filteredContactItems, setFilteredContactItems] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [showNotFound, setShowNotFound] = useState(false);
//   const navigation = useNavigation();
//   const {showLoader, hideLoader} = useLoader();
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [showFooter, setShowFooter] = useState(true);
//   const [logoutModalVisible, setLogoutModalVisible] = useState(false);
//   const [modalMessage, setModalMessage] = useState({
//     title: ' ',
//     message: ' ',
//   });
//   const [searchQuery, setSearchQuery] = useState('');
//   const apiInstance = new Api();
//   const distributionlistProvider = new DistributionlistProvider(apiInstance);
//   const isFormValid = watch('name') && watch('number') && watch('email');
//   const fetchStoredUserInfo = async () => {
//     try {
//       showLoader();
//       const storedUser = await AsyncStorage.getItem('user');
//       if (storedUser) {
//         const userInfo = JSON.parse(storedUser);
//         const response = await distributionlistProvider.group_info(userInfo);
//         hideLoader();
//         if (!response || response.data.length === 0) {
//           setContactItems([]);
//           setShowNotFound(true);
//         } else {
//           const formattedData = response.data.map(item => ({
//             id: item.dl_id,
//             name: item.name,
//             email: item.emailid,
//             phone: item.phone,
//           }));
//           setContactItems(formattedData);
//           setFilteredContactItems(formattedData);
//           setShowNotFound(false);
//         }
//       } else {
//         hideLoader();
//         Alert.alert(
//           'Error',
//           'User  information not found. Please log in again.',
//         );
//         navigation.navigate('Login');
//       }
//     } catch (error) {
//       hideLoader();
//       console.error('Error fetching user info:', error);
//       Alert.alert('Error', 'Failed to fetch user information.');
//     }
//   };

//   useEffect(() => {
//     fetchStoredUserInfo();
//   }, []);



//   const handleDelete = async (rowKey) => {
//     try {
//       // Show loader while the deletion request is processed
//       showLoader();
  
//       // Retrieve the stored user from AsyncStorage
//       const storedUser  = await AsyncStorage.getItem('user');
  
//       if (!storedUser ) {
//         hideLoader();
//         Alert.alert('Error', 'User  information is missing.');
//         return;
//       }
  
//       const userInfo = JSON.parse(storedUser );
  
//       // Prepare the payload for the API call
//       const distri_delete_info = {
//         user_id: userInfo.user_id, // Unique identifier for the user
//         dl_id: rowKey, // Unique identifier for the distribution list entry to delete
//         token: userInfo.token, // User's authentication token (if needed)
//       };
  
//       // API call to delete the group contact
//       const response = await distributionlistProvider.delete_group_contact(distri_delete_info);
  
//       // Hide the loader after the API call
//       hideLoader();
  
//       // Check the response result
//       if (response?.data?.result === 'success') {
//         // Remove the deleted contact from the contactItems array
//         const updatedItems = contactItems.filter(item => item.id !== rowKey);
//         setContactItems(updatedItems);
//         setFilteredContactItems(updatedItems);
  
//         // Show a success modal
//         setModalMessage({
//           title: 'Success',
//           message: 'Group deleted successfully!',
//         });
//       } else {
//         // Show an error modal with the API response message (if available)
//         setModalMessage({
//           title: 'Error',
//           message: response?.data?.message || 'Failed to delete group.',
//         });
//       }
  
//       // Display the modal
//       setModalVisible(true);
//     } catch (error) {
//       // Hide loader and display error in case of failure
//       hideLoader();
//       console.error('Error deleting group:', error);
//       Alert.alert('Error', error?.message || 'Failed to delete group.');
//     }
//   };
//   const handleLogout = async () => {
//     await AsyncStorage.removeItem('user');
//     navigation.reset({
//       index: 0,
//       routes: [{name: 'Login'}],
//     });
//   };

//   const handleLogoutCancel = () => {
//     setLogoutModalVisible(false);
//   };

//   // Render group items
//   const renderItem = ({item}) => (
//     <View style={styles.memberItem}>
//       <View>
//         <Image
//           style={{tintColor: 'black', height: 20, width: 20}}
//           source={require('../assets/img/profile_icon.png')}
//         />
//         <Text
//           style={{
//             fontSize: 20,
//             fontWeight: '600',
//             marginLeft: 50,
//             marginTop: -25,
//             color: '#404040',
//           }}>
//           {item.name}
//         </Text>
//       </View>
//       <Text style={{marginLeft: 50, color: '#505050'}}> {item.phone}</Text>
//       <Text style={{marginLeft: 50, color: '#505050'}}> {item.email}</Text>
//     </View>
//   );

//   const renderHiddenItem = (data, rowMap) => (
//     <View style={styles.rowBack}>
//       <View style={[styles.backRightBtn, styles.backRightBtnLeft]}>
//         <Image
//           style={{tintColor: 'white', height: 15, width: 15, marginBottom: 8}}
//           source={require('../assets/img/edit_icon.png')}
//         />
//         <TouchableOpacity onPress={() => handleEdit(data.item.id)}>
//           <Text style={styles.backTextWhite}>Edit</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
//         <Image
//           style={{height: 18, width: 18, marginBottom: 8}}
//           source={require('../assets/img/trash.png')}
//         />
//         <TouchableOpacity onPress={() => handleDelete(data.item.id)}>
//           <Text style={styles.backTextWhite}>Delete</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   const getContact = () => {
//     Contacts.openContactForm()
//       .then(contact => {
//         setValue('name', contact.displayName || '');
//         setValue('number', contact.phoneNumbers[0]?.number || '');
//         setValue('email', contact.emailAddresses[0]?.email || '');
//       })
//       .catch(error => {
//         console.error('Error fetching contact:', error);
//       });
//   };

//   const handleEdit = rowKey => {
//     const groupToEdit = contactItems.find(item => item.id === rowKey);
//     if (groupToEdit) {
//       setValue('name', groupToEdit.name);
//       setValue('number', groupToEdit.phone);
//       setValue('email', groupToEdit.email);
//       setEditingGroup(groupToEdit); // Set the group to be edited
//       setShowForm(true); // Show the form to edit
//     }
//   };
  
//   const createGroup = async data => {
//     try {
//       showLoader();
  
//       const storedUser  = await AsyncStorage.getItem('user');
//       if (!storedUser ) {
//         hideLoader();
//         Alert.alert('Error', 'User  information not found. Please log in again.');
//         navigation.navigate('Login');
//         return;
//       }
  
//       const userInfo = JSON.parse(storedUser );
//       const edit_contact = {
//         user_id: userInfo.user_id,
//         name: data.name,
//         number: data.number,
//         email: data.email,
//         dl_id: editingGroup ? editingGroup.id : undefined, // Only set dl_id if editing
//       };
  
//       let response;
  
//       if (editingGroup) {
//         // Editing existing group
//         response = await distributionlistProvider.edit_list(edit_contact);
//       } else {
//         // Creating a new group
//         response = await distributionlistProvider.distribution(edit_contact);
//       }
  
//       hideLoader();
  
//       if (response?.data?.result === 'success') {
//         if (editingGroup) {
//           // Update the contactItems list with the edited group data
//           const updatedItems = contactItems.map(item =>
//             item.id === editingGroup.id
//               ? {
//                   ...item,
//                   name: data.name,
//                   email: data.email,
//                   phone: data.number,
//                 }
//               : item,
//           );
//           setContactItems(updatedItems);
//           setFilteredContactItems(updatedItems);
//         } else {
//           // Add the new group to the list
//           const newGroup = {
//             id: response.data.id, // Assuming API returns a new ID
//             name: data.name,
//             email: data.email,
//             phone: data.number,
//           };
//           setContactItems([...contactItems, newGroup]);
//           setFilteredContactItems([...contactItems, newGroup]);
//         }
  
//         // Reset the form and states after successful operation
//         reset();
//         setEditingGroup(null);
//         setShowForm(false);
  
//         setModalMessage({
//           title: 'Success',
//           message: editingGroup
//             ? 'Group updated successfully!'
//             : 'Group created successfully!',
//         });
//         setModalVisible(true);
//       } else {
//         setModalMessage({
//           title: 'Error',
//           message: response?.data?.message || 'Failed to save group.',
//         });
//         setModalVisible(true);
//       }
//     } catch (error) {
//       hideLoader();
//       console.error('Error saving group:', error);
//       Alert.alert('Error', error?.message || 'Failed to save group.');
//     }
//   };
//   const handleSearch = text => {
//     const filteredData = contactItems.filter(
//       item =>
//         item.name.toLowerCase().includes(text.toLowerCase()) ||
//         item.phone.toLowerCase().includes(text.toLowerCase()) ||
//         item.email.toLowerCase().includes(text.toLowerCase()),
//     );
//     setFilteredContactItems(filteredData);
//     setSearchQuery(text);
//   };

//   return (
  
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Image
//             style={styles.back}
//             source={require('../assets/img/back.png')}
//           />
//         </TouchableOpacity>
//         <Text style={styles.hedtext}> My Groups</Text>

//         <TouchableOpacity
//           onPress={() => {
//             setShowForm(prevShowForm => !prevShowForm);
//           }}>
//           <View style={styles.add}>
//             <Text style={{fontSize: 21, color: 'red', marginBottom: 5}}>+</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//       <ScrollView style={styles.ScrollView}>
//       <View>
//         {!showForm && (
//           <View style={styles.searchContainer}>
//             <View style={styles.inputWrapper}>
//               <Image
//                 style={styles.searchimg}
//                 source={require('../assets/img/search.png')}
//               />
//               <TextInput
//                 style={styles.searchInput}
//                 placeholder="Search"
//                 placeholderTextColor="#303030"
//                 value={searchQuery}
//                 onChangeText={handleSearch}
//               />
//             </View>
//           </View>
//         )}

//         {/* Form section that only shows when showForm is true */}
//         {showForm && (
//           <View>
//             <View style={styles.input}>
//               <Image
//                 source={require('../assets/img/profile_icon.png')}
//                 style={styles.iconImage}
//               />
//               <Controller
//                 control={control}
//                 name="name"
//                 rules={{
//                   required: 'Name is required',
//                   pattern: {
//                     value: /^[a-zA-Z ]+$/, // This already ensures no numbers are accepted
//                     message: 'Invalid name format',
//                   },
//                   maxLength: {value: 30, message: 'Max length is 30'},
//                 }}
//                 render={({field: {onChange, value}}) => (
//                   <TextInput
//                     style={styles.textInput}
//                     onChangeText={text => {
//                       // Filter out any numeric characters
//                       const filteredText = text.replace(/[^a-zA-Z ]/g, '');
//                       onChange(filteredText); // Update value with filtered text
//                     }}
//                     value={value}
//                     placeholder="Name"
//                     placeholderTextColor="#888"
//                   />
//                 )}
//               />
//             </View>
//             <TouchableOpacity onPress={getContact}>
//               <Image
//                 source={require('../assets/img/profile_icon.png')}
//                 style={styles.contactIcon}
//               />
//             </TouchableOpacity>

//             {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}

//             <View style={styles.input1}>
//               <Image
//                 source={require('../assets/img/call_icon.png')}
//                 style={styles.iconImage}
//               />
//               <Controller
//                 control={control}
//                 name="number"
//                 rules={{
                  
//                   required: 'Number is required',
//                   pattern: {
//                     value: /^[0-9-+()]*$/, // Pattern for valid characters
//                     message: 'Invalid number format',
//                   },
//                   maxLength: {value: 30, message: 'Max length is 30'},
//                 }}
//                 render={({field: {onChange, value}}) => (
//                   <TextInput
//                     style={styles.textInput}
//                     onChangeText={text => {
//                       // Filter out any non-numeric characters except specified ones
//                       const filteredText = text.replace(/[^0-9-+()]/g, '');
//                       onChange(filteredText); // Update value with filtered text
//                     }}
//                     value={value}
//                     placeholder="Mobile number"
//                     placeholderTextColor="#888"
//                     keyboardType="phone-pad" // Set the keyboard type for numeric input
//                   />
//                 )}
//               />
//             </View>
//             {errors.number && <Text style={styles.errorText}>{errors.number.message}</Text>}

//             <View style={styles.input1}>
//               <Image
//                 source={require('../assets/img/email.png')}
//                 style={styles.iconImage}
//               />
//               <Controller
//                 control={control}
//                 name="email"
//                 rules={{
//                   required: 'Email is required',
//                   pattern: {
//                     value: /^[A-Za-z0-9._%+-]+@gmail\.com$/,
//                     message: 'Invalid email format.  Must end with @gmail.com',
//                   },
//                   maxLength: {value: 50, message: 'Max length is 50'},
//                 }}
//                 render={({field: {onChange, value}}) => (
//                   <TextInput
//                     style={styles.textInput}
//                     onChangeText={onChange}
//                     value={value}
//                     placeholder="Email"
//                     placeholderTextColor="#888"
//                   />
//                 )}
//               />
//             </View>
//             {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

//             <View
//               style={{
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 marginTop: 20,
//               }}>
//               <TouchableOpacity
//                 onPress={handleSubmit(createGroup)}
//                 disabled={!isFormValid}>
//                 {!isFormValid ? (
//                   <View style={styles.submitButton}>
//                     <BlurView blurType="light" blurAmount={10}>
//                       <Text style={styles.submitButtonText}>
//                         {editingGroup ? 'UPDATE GROUP' : 'CREATE GROUP'}
//                       </Text>
//                     </BlurView>
//                   </View>
//                 ) : (
//                   <View style={styles.submitButton}>
//                     <Text style={styles.submitButtonText}>
//                       {editingGroup ? 'UPDATE GROUP' : 'CREATE GROUP'}
//                     </Text>
//                   </View>
//                 )}
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}

//         {/* Always display the SwipeListView */}
//         <SwipeListView
//           data={filteredContactItems}
//           renderItem={renderItem}
//           renderHiddenItem={renderHiddenItem}
//           rightOpenValue={-150}
//           previewRowKey={'0'}
//           previewOpenValue={-40}
//           previewOpenDelay={3000}
//           disableRightSwipe
//         />

//         {/* Message for no groups found */}
//         {showNotFound && <Text>No groups found</Text>}
//       </View>

//       <Modal isVisible={isModalVisible}>
//         <View style={{justifyContent: 'center', alignItems: 'center'}}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalTitles}>{modalMessage.title}</Text>
//             <Text style={styles.modalText}>{modalMessage.message}</Text>
//             <TouchableOpacity
//               style={styles.modalButton}
//               onPress={() => {
//                 reset();
//                 setModalVisible(false);
//               }}>
//               <Text style={styles.modalButtonText}>OK</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//       </ScrollView>
//       {showFooter && (
//         <View style={styles.footer}>
//           <TouchableOpacity
//             style={styles.footerButton}
//             onPress={() => navigation.navigate('home')}>
//             <Image
//               source={require('../assets/img/home_icon.png')}
//               style={styles.footerIcon}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.footerButton}
//             onPress={() => Linking.openURL('tel:911')}>
//             <Image
//               source={require('../assets/img/call_icon.png')}
//               style={styles.footerIcon}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.footerButton}
//             onPress={() => navigation.navigate('Sharedcases')}>
//             <Image
//               source={require('../assets/img/Profile-icon.png')}
//               style={styles.footerIcon}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.footerButton}
//             onPress={() => navigation.navigate('EditProfile')}>
//             <Image
//               source={require('../assets/img/edit_icon.png')}
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
//       )}
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
//   ScrollView:{
// marginBottom:50,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     backgroundColor: '#d32f2f',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 10,
//     height: '7%',
//     // any other styles you have
//   },
//   errorText: {
//     color: 'red',
//     marginTop: 5,
//     fontSize: 12,
//     alignSelf: 'flex-start',
//     marginLeft: 15,
//   },

//   back: {
//     width: 25,
//     height: 20,
//     tintColor: 'white',
//     marginLeft: 10,
//   },
//   hedtext: {
//     fontSize: 18,
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   add: {
//     height: 30,
//     width: 30,
//     backgroundColor: 'white',
//     borderRadius: 40,
//     alignItems: 'center',
//   },

//   input: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     backgroundColor: '#f9f9f9',
//     width: '85%',
//     height: 50,
//     marginTop: 15,
//     paddingHorizontal: 10,
//   },
//   blur: {
//     opacity: 0.5,
//     backgroundColor: '#a42f2d',
//     padding: 5,
//     borderRadius: 10,
//     width: 180,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // shadowColor: '#000',
//     // shadowOffset: { width: 0, height: 2 },
//     // shadowOpacity: 0.8,
//   },
//   iconImage: {
//     width: 20,
//     height: 20,
//     tintColor: '#a42f2d',
//     marginRight: 10,
//   },
//   modalMessage: {
//     fontSize: 16,
//     color: 'gray',
//   },
//   contactIcon: {
//     width: 20,
//     height: 20,
//     tintColor: 'red',
//     marginLeft: 270,
//     marginTop: -35,
//   },
//   textInput: {
//     flex: 1,
//     height: 50,
//     fontSize: 16,
//     color: '#303030',
//   },
//   input1: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     backgroundColor: '#f9f9f9',
//     width: '100%',
//     height: 50,
//     marginTop: 15,
//     paddingHorizontal: 10,
//   },
//   searchContainer: {
//     padding: 10,
//     backgroundColor: '#c0c0c0',
//     justifyContent: 'center',
//   },
//   inputWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderRadius: 20,
//     paddingHorizontal: 10,
//     height: 40,
//     borderColor: '#ddd',
//     borderWidth: 1,
//   },
//   searchimg: {
//     width: 20,
//     height: 20,
//     tintColor: 'black',
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     height: 40,
//     fontSize: 16,
//     color: 'black',
//   },
//   memberItem: {
//     flexDirection: 'column',
//     marginTop: 10,
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   searchBar: {
//     backgroundColor: '#fff',
//     padding: 15,
//     marginHorizontal: 10,
//     marginVertical: 15,
//     borderRadius: 15,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     width: 400,
//     height: 45,
    
//   },
//   item: {
//     backgroundColor: '#fff',
//     padding: 15,
//     borderBottomWidth: 1,
//     borderColor: '#ddd',
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   phone: {
//     color: 'gray',
//   },
//   email: {
//     color: 'gray',
//   },
//   editgroup: {
//     marginTop: 10,
//     marginBottom: 10,
//     backgroundColor: 'red',
//     borderRadius: 5,
//     width: 100,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // shadowColor: '#000',
//     // shadowOffset: { width: 0, height: 2 },
//     // shadowOpacity: 0.8,
//     // shadowRadius: 2,
//     // elevation: 5,
//   },
//   submitButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//     // marginLeft: 10,
//   },
//   submitButton: {
//     backgroundColor: '#a42f2d',
//     // padding: 15,
//     borderRadius: 10,
//     width: 180,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     // shadowOffset: { width: 0, height: 2 },
//     // shadowOpacity: 0.8,
//     marginBottom: 20,
//   },
//   blurContainer: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 10,
//     // overflow: 'hidden',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalView: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     // borderRadius: 10,
//     padding: 20,
//     width: 250,
//     height: 150,
//   },
//   modalTitle: {
//     fontSize: 20,
//     marginBottom: 15,
//     fontWeight: 'bold',
//     color: 'black',

//   },
//   successText: {
//     fontSize: 20,
//     marginBottom: 15,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   button: {
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#a42f2d',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   rowBack: {
//     alignItems: 'center',
//     backgroundColor: '#d32f2f',
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingLeft: 15,
//   },
//   backRightBtn: {
//     alignItems: 'center',
//     bottom: 0,
//     justifyContent: 'center',
//     position: 'absolute',
//     top: 0,
//     width: 75,
//   },
//   backRightBtnLeft: {
//     backgroundColor: '#a42f2d',
//     right: 75,
//   },
//   backRightBtnRight: {
//     backgroundColor: '#a42f2d',
//     right: 0,
//   },
//   backTextWhite: {
//     color: '#FFF',
//     fontSize: 15,
//     fontWeight: 'bold',
//   },
//   memberItem: {
//     padding: 20,
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderColor: '#ccc',
//   },
//   footer: {
//     height: 60,
//     backgroundColor: '#B71C1C',
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
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   modalTitles: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 15,
//     color:'black'
//   },
//   modalText: {
//     fontSize: 16,
//     marginBottom: 15,
//     color:'black'
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

// export default SharegroupPage;


import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
  PermissionsAndroid,
  Platform,
} from 'react-native';

import { selectContactPhone } from 'react-native-select-contact';

import {SwipeListView} from 'react-native-swipe-list-view';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DistributionlistProvider} from '../providers/distributionlist/distributionlist';
import {Api} from '../providers/api/api';
import {useLoader} from '../providers/loader/loader';
import Modal from 'react-native-modal';
import {BlurView} from '@react-native-community/blur';

import {ScrollView} from 'react-native-gesture-handler';



const SharegroupPage = () => {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: {errors},
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      number: '',
    },
  });
  const [editingGroup, setEditingGroup] = useState(null);
  const [contactItems, setContactItems] = useState([]);
  const [filteredContactItems, setFilteredContactItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showNotFound, setShowNotFound] = useState(false);
  const navigation = useNavigation();
  const {showLoader, hideLoader} = useLoader();
  const [isModalVisible, setModalVisible] = useState(false);
  const [showFooter, setShowFooter] = useState(true);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [contactList, setContactList] = useState([]);
  const [modalMessage, setModalMessage] = useState({
    title: ' ',
    message: ' ',
  });
  const [searchQuery, setSearchQuery] = useState('');
  const apiInstance = new Api();
  const distributionlistProvider = new DistributionlistProvider(apiInstance);
  const isFormValid = watch('name') && watch('number') && watch('email');
  const fetchStoredUserInfo = async () => {
    try {
      showLoader();
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        const userInfo = JSON.parse(storedUser);
        const response = await distributionlistProvider.group_info(userInfo);
        hideLoader();
        if (!response || response.data.length === 0) {
          setContactItems([]);
          setShowNotFound(true);
        } else {
          const formattedData = response.data.map(item => ({
            id: item.dl_id,
            name: item.name,
            email: item.emailid,
            phone: item.phone,
          }));
          setContactItems(formattedData);
          setFilteredContactItems(formattedData);
          setShowNotFound(false);
        }
      } else {
        hideLoader();
        Alert.alert(
          'Error',
          'User  information not found. Please log in again.',
        );
        navigation.navigate('Login');
      }
    } catch (error) {
      hideLoader();
      console.error('Error fetching user info:', error);
      Alert.alert('Error', 'Failed to fetch user information.');
    }
  };

  useEffect(() => {
    fetchStoredUserInfo();
  }, []);

  const handleDelete = async rowKey => {
    try {
      // Show loader while the deletion request is processed
      showLoader();

      // Retrieve the stored user from AsyncStorage
      const storedUser = await AsyncStorage.getItem('user');

      if (!storedUser) {
        hideLoader();
        Alert.alert('Error', 'User  information is missing.');
        return;
      }

      const userInfo = JSON.parse(storedUser);

      // Prepare the payload for the API call
      const distri_delete_info = {
        user_id: userInfo.user_id, // Unique identifier for the user
        dl_id: rowKey, // Unique identifier for the distribution list entry to delete
        token: userInfo.token, // User's authentication token (if needed)
      };

      // API call to delete the group contact
      const response = await distributionlistProvider.delete_group_contact(
        distri_delete_info,
      );

      // Hide the loader after the API call
      hideLoader();

      // Check the response result
      if (response?.data?.result === 'success') {
        // Remove the deleted contact from the contactItems array
        const updatedItems = contactItems.filter(item => item.id !== rowKey);
        setContactItems(updatedItems);
        setFilteredContactItems(updatedItems);

        // Show a success modal
        setModalMessage({
          title: 'Success',
          message: 'Group deleted successfully!',
        });
      } else {
        // Show an error modal with the API response message (if available)
        setModalMessage({
          title: 'Error',
          message: response?.data?.message || 'Failed to delete group.',
        });
      }

      // Display the modal
      setModalVisible(true);
    } catch (error) {
      // Hide loader and display error in case of failure
      hideLoader();
      console.error('Error deleting group:', error);
      Alert.alert('Error', error?.message || 'Failed to delete group.');
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

  // Render group items
  const renderItem = ({item}) => (
    <View style={styles.memberItem}>
      <View>
        <Image
          style={{tintColor: 'black', height: 20, width: 20}}
          source={require('../assets/img/profile_icon.png')}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            marginLeft: 50,
            marginTop: -25,
            color: '#404040',
          }}>
          {item.name}
        </Text>
      </View>
      <Text style={{marginLeft: 50, color: '#505050'}}> {item.phone}</Text>
      <Text style={{marginLeft: 50, color: '#505050'}}> {item.email}</Text>
    </View>
  );

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <View style={[styles.backRightBtn, styles.backRightBtnLeft]}>
        <Image
          style={{tintColor: 'white', height: 15, width: 15, marginBottom: 8}}
          source={require('../assets/img/edit_icon.png')}
        />
        <TouchableOpacity onPress={() => handleEdit(data.item.id)}>
          <Text style={styles.backTextWhite}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
        <Image
          style={{height: 18, width: 18, marginBottom: 8}}
          source={require('../assets/img/trash.png')}
        />
        <TouchableOpacity onPress={() => handleDelete(data.item.id)}>
          <Text style={styles.backTextWhite}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const getContact = async () => {
    try {
        const selection = await selectContactPhone();
        if (!selection) {
            Alert.alert('Selection Cancelled', 'No contact was selected.');
            return;
        }

        const { contact, selectedPhone } = selection;

        // Set the selected contact's details
        setValue('name', contact.name); // Set the name
        setValue('number', selectedPhone.number); // Set the number
        setValue('email', contact.emails[0]?.address || ''); // Set the email if available
    } catch (error) {
        console.error('Error selecting contact:', error);
        Alert.alert('Error', 'Unable to select contact.');
    }
};

  const requestContactPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts Permission',
          message: 'This app needs access to your contacts.',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      );

      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } else {
      return true; // For iOS, permissions are managed by the library
    }
  };

  const handleEdit = rowKey => {
    const groupToEdit = contactItems.find(item => item.id === rowKey);
    if (groupToEdit) {
      setValue('name', groupToEdit.name);
      setValue('number', groupToEdit.phone);
      setValue('email', groupToEdit.email);
      setEditingGroup(groupToEdit); // Set the group to be edited
      setShowForm(true); // Show the form to edit
    }
  };

  const createGroup = async data => {
    try {
      showLoader();

      const storedUser = await AsyncStorage.getItem('user');
      if (!storedUser) {
        hideLoader();
        Alert.alert(
          'Error',
          'User  information not found. Please log in again.',
        );
        navigation.navigate('Login');
        return;
      }

      const userInfo = JSON.parse(storedUser);
      const edit_contact = {
        user_id: userInfo.user_id,
        name: data.name,
        number: data.number,
        email: data.email,
        dl_id: editingGroup ? editingGroup.id : undefined, // Only set dl_id if editing
      };

      let response;

      if (editingGroup) {
        // Editing existing group
        response = await distributionlistProvider.edit_list(edit_contact);
      } else {
        // Creating a new group
        response = await distributionlistProvider.distribution(edit_contact);
      }

      hideLoader();

      if (response?.data?.result === 'success') {
        if (editingGroup) {
          // Update the contactItems list with the edited group data
          const updatedItems = contactItems.map(item =>
            item.id === editingGroup.id
              ? {
                  ...item,
                  name: data.name,
                  email: data.email,
                  phone: data.number,
                }
              : item,
          );
          setContactItems(updatedItems);
          setFilteredContactItems(updatedItems);
        } else {
          // Add the new group to the list
          const newGroup = {
            id: response.data.id, // Assuming API returns a new ID
            name: data.name,
            email: data.email,
            phone: data.number,
          };
          setContactItems([...contactItems, newGroup]);
          setFilteredContactItems([...contactItems, newGroup]);
        }

        // Reset the form and states after successful operation
        reset();
        setEditingGroup(null);
        setShowForm(false);

        setModalMessage({
          title: 'Success',
          message: editingGroup
            ? 'Group updated successfully!'
            : 'Group created successfully!',
        });
        setModalVisible(true);
      } else {
        setModalMessage({
          title: 'Error',
          message: response?.data?.message || 'Failed to save group.',
        });
        setModalVisible(true);
      }
    } catch (error) {
      hideLoader();
      console.error('Error saving group:', error);
      Alert.alert('Error', error?.message || 'Failed to save group.');
    }
  };
  const handleSearch = text => {
    const filteredData = contactItems.filter(
      item =>
        item.name.toLowerCase().includes(text.toLowerCase()) ||
        item.phone.toLowerCase().includes(text.toLowerCase()) ||
        item.email.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredContactItems(filteredData);
    setSearchQuery(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.back}
            source={require('../assets/img/back.png')}
          />
        </TouchableOpacity>
        <Text style={styles.hedtext}> My Groups</Text>

        <TouchableOpacity
          onPress={() => {
            setShowForm(prevShowForm => !prevShowForm);
          }}>
          <View style={styles.add}>
            <Text style={{fontSize: 21, color: 'red', marginBottom: 5}}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.ScrollView}>
        <View>
          {!showForm && (
            <View style={styles.searchContainer}>
              <View style={styles.inputWrapper}>
                <Image
                  style={styles.searchimg}
                  source={require('../assets/img/search.png')}
                />
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search"
                  placeholderTextColor="#303030"
                  value={searchQuery}
                  onChangeText={handleSearch}
                />
              </View>
            </View>
          )}

          {/* Form section that only shows when showForm is true */}
          {showForm && (
            <View>
              <View>
                <View style={styles.input}>
                  <Image
                    source={require('../assets/img/profile_icon.png')}
                    style={styles.iconImage}
                  />
                  <Controller
                    control={control}
                    name="name"
                    rules={{
                      required: 'Name is required',
                      pattern: {
                        value: /^[a-zA-Z ]+$/, // This already ensures no numbers are accepted
                        message: 'Invalid name format',
                      },
                      maxLength: {value: 30, message: 'Max length is 30'},
                    }}
                    render={({field: {onChange, value}}) => (
                      <TextInput
                        style={styles.textInput}
                        onChangeText={text => {
                          // Filter out any numeric characters
                          const filteredText = text.replace(/[^a-zA-Z ]/g, '');
                          onChange(filteredText); // Update value with filtered text
                        }}
                        value={value}
                        placeholder="Name"
                        placeholderTextColor="#888"
                      />
                    )}
                  />
                </View>
                <TouchableOpacity
                  onPress={getContact}
                  style={styles.contactIconContainer}>
                  <Image
                    source={require('../assets/img/profile_icon.png')}
                    style={styles.contactIcon}
                  />
                </TouchableOpacity>
                {contactList.length > 0 &&
                  contactList.map(contact => (
                    <Text style={{color: 'black'}} key={contact.recordID}>
                      {contact.displayName}
                    </Text>
                  ))}
              </View>

              {errors.name && (
                <Text style={styles.errorText}>{errors.name.message}</Text>
              )}

              <View style={styles.input1}>
                <Image
                  source={require('../assets/img/call_icon.png')}
                  style={styles.iconImage}
                />
                <Controller
                  control={control}
                  name="number"
                  rules={{
                    required: 'Number is required',
                    pattern: {
                      value: /^[0-9-+()]*$/, // Pattern for valid characters
                      message: 'Invalid number format',
                    },
                    maxLength: {value: 30, message: 'Max length is 30'},
                  }}
                  render={({field: {onChange, value}}) => (
                    <TextInput
                      style={styles.textInput}
                      onChangeText={text => {
                        // Filter out any non-numeric characters except specified ones
                        const filteredText = text.replace(/[^0-9-+()]/g, '');
                        onChange(filteredText); // Update value with filtered text
                      }}
                      value={value}
                      placeholder="Mobile number"
                      placeholderTextColor="#888"
                      keyboardType="phone-pad" // Set the keyboard type for numeric input
                    />
                  )}
                />
              </View>
              {errors.number && (
                <Text style={styles.errorText}>{errors.number.message}</Text>
              )}

              <View style={styles.input1}>
                <Image
                  source={require('../assets/img/email.png')}
                  style={styles.iconImage}
                />
                <Controller
                  control={control}
                  name="email"
                  rules={{
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Za-z0-9._%+-]+@gmail\.com$/,
                      message:
                        'Invalid email format.  Must end with @gmail.com',
                    },
                    maxLength: {value: 50, message: 'Max length is 50'},
                  }}
                  render={({field: {onChange, value}}) => (
                    <TextInput
                      style={styles.textInput}
                      onChangeText={onChange}
                      value={value}
                      placeholder="Email"
                      placeholderTextColor="#888"
                    />
                  )}
                />
              </View>
              {errors.email && (
                <Text style={styles.errorText}>{errors.email?.message}</Text>
              )}

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <TouchableOpacity
                  onPress={handleSubmit(createGroup)}
                  disabled={!isFormValid}>
                  {!isFormValid ? (
                    <View style={styles.submitButton}>
                      <BlurView blurType="light" blurAmount={10}>
                        <Text style={styles.submitButtonText}>
                          {editingGroup ? 'UPDATE GROUP' : 'CREATE GROUP'}
                        </Text>
                      </BlurView>
                    </View>
                  ) : (
                    <View style={styles.submitButton}>
                      <Text style={styles.submitButtonText}>
                        {editingGroup ? 'UPDATE GROUP' : 'CREATE GROUP'}
                      </Text>
                    </View>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          )}

          {/* Always display the SwipeListView */}
          <SwipeListView
            data={filteredContactItems}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            rightOpenValue={-150}
            previewRowKey={'0'}
            previewOpenValue={-40}
            previewOpenDelay={3000}
            disableRightSwipe
          />

          {/* Message for no groups found */}
          {showNotFound && <Text>No groups found</Text>}
        </View>

        <Modal isVisible={isModalVisible}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitles}>{modalMessage.title}</Text>
              <Text style={styles.modalText}>{modalMessage.message}</Text>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  reset();
                  setModalVisible(false);
                }}>
                <Text style={styles.modalButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
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
            onPress={() => Linking.openURL('tel')}>
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={logoutModalVisible}
        onRequestClose={() => setLogoutModalVisible(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitles}>Confirm Logout</Text>
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
    </View>
  );
};
const styles = StyleSheet.create({
  ScrollView: {
    marginBottom: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contactIconContainer: {
    position: 'absolute', // This makes it float
    right: 20, // Positioning to the right
    top: '65%', // Center vertically with respect to the input
    transform: [{translateY: -15}], // Adjust to vertically center
    zIndex: 1, // Make sure it's on top of other elements
  },
  header: {
    backgroundColor: '#d32f2f',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: '7%',
    // any other styles you have
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    fontSize: 14,
    alignSelf: 'flex-start',
    marginLeft: 15,
  },

  back: {
    width: 25,
    height: 20,
    tintColor: 'white',
    marginLeft: 10,
  },
  hedtext: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  add: {
    height: 30,
    width: 30,
    backgroundColor: 'white',
    borderRadius: 40,
    alignItems: 'center',
  },

  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    width: '85%',
    height: 50,
    marginTop: 15,
    paddingHorizontal: 10,
    gap: 10,
  },
  blur: {
    opacity: 0.5,
    backgroundColor: '#a42f2d',
    padding: 5,
    borderRadius: 10,
    width: 180,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.8,
  },
  iconImage: {
    width: 20,
    height: 20,
    tintColor: '#a42f2d',
    marginRight: 10,
  },
  modalMessage: {
    fontSize: 16,
    color: 'gray',
  },
  contactIcon: {
    width: 20,
    height: 20,
    tintColor: 'red',
  },
  textInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#303030',
  },
  input1: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    width: '100%',
    height: 50,
    marginTop: 15,
    paddingHorizontal: 10,
  },
  searchContainer: {
    padding: 10,
    backgroundColor: '#c0c0c0',
    justifyContent: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  searchimg: {
    width: 20,
    height: 20,
    tintColor: 'black',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: 'black',
  },
  memberItem: {
    flexDirection: 'column',
    marginTop: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  searchBar: {
    backgroundColor: '#fff',
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    width: 400,
    height: 45,
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  phone: {
    color: 'gray',
  },
  email: {
    color: 'gray',
  },
  editgroup: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'red',
    borderRadius: 5,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // elevation: 5,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    // marginLeft: 10,
  },
  submitButton: {
    backgroundColor: '#a42f2d',
    // padding: 15,
    borderRadius: 10,
    width: 180,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.8,
    marginBottom: 20,
  },
  blurContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    // overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    // borderRadius: 10,
    padding: 20,
    width: 250,
    height: 150,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  successText: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#a42f2d',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#d32f2f',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: '#a42f2d',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: '#a42f2d',
    right: 0,
  },
  backTextWhite: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  memberItem: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  footer: {
    height: 60,
    backgroundColor: '#B71C1C',
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
    width: 24,
    height: 24,
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
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitles: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'black',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 15,
    color: 'black',
  },
  modalText1: {
    fontSize: 16,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  modalButtonContainer: {
    flexDirection: 'row',
  },
  modalButton: {
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: '#9D0808',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
  ptext: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SharegroupPage;
