// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, Alert, Platform, FlatList, TouchableOpacity } from 'react-native';
// import Contacts from 'react-native-contacts'; // Assuming react-native-contacts is used for contacts
// import { useForm, Controller } from 'react-hook-form';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
// import { DistributionlistProvider } from '../providers/distributionlist/distributionlist';
// import { Api } from '../providers/api/api';
// import { useLoader } from '../providers/loader/loader';

// const SharegroupPage = () => {
//   const { control, handleSubmit, reset, setValue, formState: { errors } } = useForm();
//   const [contactItems, setContactItems] = useState([]);
//   const [allContact, setAllContact] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [showNotFound, setShowNotFound] = useState(false);
//   const [editMode, setEditMode] = useState(false);
//   const [dl_id, setDlId] = useState(null);
//   const navigation = useNavigation();
//   const { showLoader, hideLoader } = useLoader(); // Access showLoader and hideLoader
//   const apiInstance = new Api(); // Assuming Api is a class that handles axios
//   const distributionlistProvider = new DistributionlistProvider(apiInstance);

//   useEffect(() => {
//     const fetchStoredUserInfo = async () => {
//       try {
//         showLoader();
//         const storedUser = await AsyncStorage.getItem('user'); 
//         if (storedUser) {
//           const userInfo = JSON.parse(storedUser); 
//           const response = await distributionlistProvider.group_info(userInfo); 
//           hideLoader();
//           if (!response || response.result === 'failed') {
//             setContactItems([]);
//             setShowNotFound(true);
//           } else {
//             const data = response.data; // Extract the data from the response
//             const formattedData = data.map(item => ({ // Format the data for display
//               id: item.dl_id,
//               name: item.name,
//               email: item.emailid,
//               phone: item.phone,
//             }));
//             setContactItems(formattedData); // Update the contactItems state
//             setAllContact(formattedData);
//             setShowNotFound(false);
//           }
//         } else {
//           hideLoader();
//           Alert.alert('Error', 'User information not found. Please log in again.');
//           navigation.navigate('LoginScreen');
//         }
//       } catch (error) {
//         hideLoader();
//         console.error('Error fetching user info:', error);
//         Alert.alert('Error', 'Failed to fetch user information.');
//       }
//     };
  
//     fetchStoredUserInfo();
//   }, []);

//   const getContact = () => {
//     Contacts.openContactForm().then(contact => {
//       setValue('name', contact.displayName);
//       setValue('number', contact.phoneNumbers[0]?.number);
//       setValue('email', contact.emailAddresses[0]?.email);
//     }).catch(error => {
//       console.error('Error fetching contact:', error);
//     });
//   };

//   const createGroup = async (data) => {
//     try {
//       showLoader(); // Show loader
//       const storedUser = await AsyncStorage.getItem('user'); // Get user from AsyncStorage
//       if (storedUser) {
//         const userInfo = JSON.parse(storedUser); // Parse user info
//         const distriInfo = {
//           user_id: userInfo.user_id,
//           contact_name: data.name,
//           email: data.email,
//           phone_number: data.number,
//         };
//         const response = await distributionlistProvider.distribution(distriInfo); // Assuming this is the correct method
//         hideLoader(); // Hide loader
//         Alert.alert(response.message); // Show response message
//       } else {
//         hideLoader();
//         Alert.alert('Error', 'User information not found. Please log in again.');
//         navigation.navigate('LoginScreen');
//       }
//     } catch (error) {
//       hideLoader(); // Hide loader on error
//       console.error('Error creating group:', error);
//       Alert.alert('Error', 'Failed to create group.');
//     }
//   };

//   return (
//     <View style={{ padding: 20 }}>
//       <Text style={{ fontSize: 24 }}>My Groups</Text>
//       {!showForm && (
//         <TextInput
//           placeholder="Search"
//         //   onChangeText={handleSearch}
//           style={{ marginBottom: 20 }}
//         />
//       )}
//       {showForm ? (
//         <View>
//           <Button title="Select Contact" onPress={getContact} />
//           <Controller
//             control={control}
//             name="name"
//             rules={{ required: true, pattern: /^[a-zA-Z ]+$/, maxLength: 30 }}
//             render={({ field: { onChange, value } }) => (
//               <TextInput
//                 placeholder="Name"
//                 value={value}
//                 // onChangeText={value => handleOmitSpecialChars(value, onChange)}
//                 // style={{ borderBottomWidth: 1 }}
//               />
//             )}
//           />
//           {errors.name && <Text>This field is required and should contain only letters.</Text>}

//           <Controller
//             control={control}
//             name="number"
//             rules={{ required: true, pattern: /^[0-9-+()]*$/, maxLength: 30 }}
//             render={({ field: { onChange, value } }) => (
//               <TextInput
//                 placeholder="Mobile number"
//                 value={value}
//                 // onChangeText={value => handleOmitSpecialNumbers(value, onChange)}
//                 // style={{ borderBottomWidth: 1 }}
//               />
//             )}
//           />
//           {errors.number && <Text>This field is required.</Text>}

//           <Controller
//             control={control}
//             name="email"
//             rules={{
//               required: true,
//               pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
//               maxLength: 50
//             }}
//             render={({ field: { onChange, value } }) => (
//               <TextInput
//                 placeholder="Email"
//                 value={value}
//                 onChangeText={onChange}
//                 style={{ borderBottomWidth: 1 }}
//               />
//             )}
//           />
//           {errors.email && <Text>Invalid email format.</Text>}

//           <Button title={editMode ? "Edit Group" : "Create Group"} onPress={handleSubmit(editMode ? editGroup : createGroup)} />
//         </View>
//       ) : (
//         <FlatList
//         data={contactItems}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => editGroup(item)}>
//             <Text>{item.name} ({item.email}) - {item.phone}</Text>
//           </TouchableOpacity>
//         )}
//       />
//       )}
//       {showNotFound && <Text>No groups found</Text>}
//       <Button title="Toggle Form" onPress={() => setShowForm(!showForm)} />
//     </View>
//   );
// };

// export default SharegroupPage;


// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, Alert, FlatList, TouchableOpacity } from 'react-native';
// import Contacts from 'react-native-contacts';
// import { useForm, Controller } from 'react-hook-form';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { DistributionlistProvider } from '../providers/distributionlist/distributionlist';
// import { Api } from '../providers/api/api';
// import { useLoader } from '../providers/loader/loader';

// const SharegroupPage = () => {
//   const { control, handleSubmit, setValue, formState: { errors } } = useForm();
//   const [contactItems, setContactItems] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [showNotFound, setShowNotFound] = useState(false);
//   const [editMode, setEditMode] = useState(false);
//   const navigation = useNavigation();
//   const { showLoader, hideLoader } = useLoader();
//   const apiInstance = new Api();
//   const distributionlistProvider = new DistributionlistProvider(apiInstance);

//   useEffect(() => {
//     const fetchStoredUserInfo = async () => {
//       try {
//         showLoader();
//         const storedUser = await AsyncStorage.getItem('user');
//         if (storedUser) {
//           const userInfo = JSON.parse(storedUser);
//           const response = await distributionlistProvider.group_info(userInfo);
//           hideLoader();
//           if (!response || response.result === 'failed') {
//             setContactItems([]);
//             setShowNotFound(true);
//           } else {
//             const formattedData = response.data.map(item => ({
//               id: item.dl_id,
//               name: item.name,
//               email: item.emailid,
//               phone: item.phone,
//             }));
//             setContactItems(formattedData);
//             setShowNotFound(false);
//           }
//         } else {
//           hideLoader();
//           Alert.alert('Error', 'User information not found. Please log in again.');
//           navigation.navigate('LoginScreen');
//         }
//       } catch (error) {
//         hideLoader();
//         console.error('Error fetching user info:', error);
//         Alert.alert('Error', 'Failed to fetch user information.');
//       }
//     };

//     fetchStoredUserInfo();
//   }, []);

//   const getContact = () => {
//     Contacts.openContactForm().then(contact => {
//       setValue('name', contact.displayName || '');
//       setValue('number', contact.phoneNumbers[0]?.number || '');
//       setValue('email', contact.emailAddresses[0]?.email || '');
//     }).catch(error => {
//       console.error('Error fetching contact:', error);
//     });
//   };

//   const createGroup = async (data) => {
//     try {
//       showLoader();
//       const storedUser = await AsyncStorage.getItem('user');
//       if (storedUser) {
//         const userInfo = JSON.parse(storedUser);
//         const distriInfo = {
//           user_id: userInfo.user_id,
//           contact_name: data.name,
//           email: data.email,
//           phone_number: data.number,
//         };
//         const response = await distributionlistProvider.distribution(distriInfo);
//         hideLoader();
//         Alert.alert(response.message);
//       } else {
//         hideLoader();
//         Alert.alert('Error', 'User information not found. Please log in again.');
//         navigation.navigate('LoginScreen');
//       }
//     } catch (error) {
//       hideLoader();
//       console.error('Error creating group:', error);
//       Alert.alert('Error', 'Failed to create group.');
//     }
//   };

//   return (
//     <View style={{ padding: 20 }}>
//       <Text style={{ fontSize: 24 }}>My Groups</Text>
//       {!showForm && (
//         <TextInput
//           placeholder="Search"
//           style={{ marginBottom: 20 }}
//         />
//       )}
//       {showForm ? (
//         <View>
//           <Button title="Select Contact" onPress={getContact} />
//           <Controller
//             control={control}
//             name="name"
//             rules={{ required: 'Name is required', pattern: { value: /^[a-zA-Z ]+$/, message: 'Invalid name format' }, maxLength: { value: 30, message: 'Max length is 30' } }}
//             render={({ field: { onChange, value } }) => (
//               <TextInput
//                 placeholder="Name"
//                 value={value}
//                 onChangeText={onChange}
//                 style={{ borderBottomWidth: 1, marginBottom: 10 }}
//               />
//             )}
//           />
//           {errors.name && <Text>{errors.name.message}</Text>}

//           <Controller
//             control={control}
//             name="number"
//             rules={{ required: 'Number is required', pattern: { value: /^[0-9-+()]*$/, message: 'Invalid number format' }, maxLength: { value: 30, message: 'Max length is 30' } }}
//             render={({ field: { onChange, value } }) => (
//               <TextInput
//                 placeholder="Mobile number"
//                 value={value}
//                 onChangeText={onChange}
//                 style={{ borderBottomWidth: 1, marginBottom: 10 }}
//               />
//             )}
//           />
//           {errors.number && <Text>{errors.number.message}</Text>}

//           <Controller
//             control={control}
//             name="email"
//             rules={{
//               required: 'Email is required',
//               pattern: { value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, message: 'Invalid email format' },
//               maxLength: { value: 50, message: 'Max length is 50' }
//             }}
//             render={({ field: { onChange, value } }) => (
//               <TextInput
//                 placeholder="Email"
//                 value={value}
//                 onChangeText={onChange}
//                 style={{ borderBottomWidth: 1, marginBottom: 10 }}
//               />
//             )}
//           />
//           {errors.email && <Text>{errors.email.message}</Text>}

//           <Button title={editMode ? "Edit Group" : "Create Group"} onPress={handleSubmit(createGroup)} />
//         </View>
//       ) : (
//         <FlatList
//           data={contactItems}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item }) => (
//             <TouchableOpacity onPress={() => { /* Edit group logic */ }}>
//               <Text>{item.name} ({item.email}) - {item.phone}</Text>
//             </TouchableOpacity>
//           )}
//         />
//       )}
//       {showNotFound && <Text>No groups found</Text>}
//       <Button title="Toggle Form" onPress={() => setShowForm(!showForm)} />
//     </View>
//   );
// };

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
} from 'react-native';
import Contacts from 'react-native-contacts';
import {SwipeListView} from 'react-native-swipe-list-view';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DistributionlistProvider} from '../providers/distributionlist/distributionlist';
import {Api} from '../providers/api/api';
import {useLoader} from '../providers/loader/loader';
import Modal from 'react-native-modal';
import {BlurView} from '@react-native-community/blur';
import {red100} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import {Title} from 'react-native-paper';

const SharegroupPage = () => {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: {errors},
    reset,
  } = useForm();

  const [editingGroup, setEditingGroup] = useState(null);
  const [contactItems, setContactItems] = useState([]);
  const [filteredContactItems, setFilteredContactItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showNotFound, setShowNotFound] = useState(false);
  const navigation = useNavigation();
  const {showLoader, hideLoader} = useLoader();
  const [isModalVisible, setModalVisible] = useState(false);
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
        navigation.navigate('LoginScreen');
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

  const handleEdit = rowKey => {
    const groupToEdit = contactItems.find(item => item.id === rowKey);
    if (groupToEdit) {
      setValue('name', groupToEdit.name);
      setValue('number', groupToEdit.phone);
      setValue('email', groupToEdit.email);
      setEditingGroup(groupToEdit);
      setShowForm(true); // Show the form to edit
    }
  };

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

      // API call to delete the group contact
      const response = await distributionlistProvider.delete_group_contact({
        user_id: userInfo.user_id,
        group_id: rowKey, // Assuming group_id is stored in userInfo
      });

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

  const getContact = () => {
    Contacts.openContactForm()
      .then(contact => {
        setValue('name', contact.displayName || '');
        setValue('number', contact.phoneNumbers[0]?.number || '');
        setValue('email', contact.emailAddresses[0]?.email || '');
      })
      .catch(error => {
        console.error('Error fetching contact:', error);
      });
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
        navigation.navigate('LoginScreen');
        return;
      }

      const userInfo = JSON.parse(storedUser);
      const distriInfo = {
        user_id: userInfo.user_id,
        contact_name: data.name,
        email: data.email,
        phone_number: data.number,
      };

      let response;

      if (editingGroup) {
        // Editing existing group
        response = await distributionlistProvider.edit_list({
          ...distriInfo,
          id: editingGroup.id, // Using id of the group being edited
        });
      } else {
        // Creating a new group
        response = await distributionlistProvider.distribution(distriInfo);
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

        // fetchStoredUserInfo();

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
              setShowForm(true);
              fetchStoredUserInfo();
            }}>
            <View style={styles.add}>
              <Text style={{fontSize: 21, color: 'red', marginBottom: 5}}>
                +
              </Text>
            </View>
          </TouchableOpacity>
      
      </View>

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
      </View>

      {showForm ? (
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
                    value: /^[a-zA-Z ]+$/,
                    message: 'Invalid name format',
                  },
                  maxLength: {value: 30, message: 'Max length is 30'},
                }}
                render={({field: {onChange, value}}) => (
                  <TextInput
                    style={styles.textInput}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Name"
                    placeholderTextColor="#888"
                  />
                )}
              />
            </View>
            <TouchableOpacity onPress={getContact}>
              <Image
                source={require('../assets/img/profile_icon.png')}
                style={styles.contactIcon}
              />
            </TouchableOpacity>
          </View>

          {errors.name && <Text>{errors.name.message}</Text>}

          <View>
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
                    value: /^[0-9-+()]*$/,
                    message: 'Invalid number format',
                  },
                  maxLength: {value: 30, message: 'Max length is 30'},
                }}
                render={({field: {onChange, value}}) => (
                  <TextInput
                    style={styles.textInput}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Mobile number"
                    placeholderTextColor="#888"
                  />
                )}
              />
            </View>
          </View>

          {errors.number && <Text>{errors.number.message}</Text>}
          <View>
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
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                    message: 'Invalid email format',
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
          </View>

          {errors.email && <Text>{errors.email.message}</Text>}

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
                <BlurView
                  style={[styles.blur]}
                  blurType="light"
                  blurAmount={10}>
                  <Text style={styles.submitButtonText}>
                    {editingGroup ? 'UPDATE GROUP' : 'CREATE GROUP'}
                  </Text>
                </BlurView>
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
      ) : (
        <SwipeListView
          data={filteredContactItems}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-150} // swipe right to open
          previewRowKey={'0'}
          previewOpenValue={-40}
          previewOpenDelay={3000}
          disableRightSwipe
          // keyExtractor={item => item.id.toString()}
        />
      )}
      {showNotFound && <Text>No groups found</Text>}

      <Modal isVisible={isModalVisible}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>{modalMessage.title}</Text>
            <Text style={styles.modalMessage}>{modalMessage.message}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                reset();
                setModalVisible(false);
              }}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#d32f2f',
    // color: 'white',
    // fontSize: 18,
    padding: 10,
    flexDirection: 'row',
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
    marginLeft: 110,
  },
  add: {
    height: 30,
    width: 30,
    backgroundColor: 'white',
    borderRadius: 40,
    marginLeft: 120,

    justifyContent: 'flex-end',
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
    marginLeft: 370,
    marginTop: -35,
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
    width: '400',
    height: 45,
    borderColor: '#ddd',
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
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.8,
  },
  submitButtonn: {},
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
});

export default SharegroupPage;
