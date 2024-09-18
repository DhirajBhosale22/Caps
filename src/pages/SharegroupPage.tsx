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


import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, FlatList, TouchableOpacity } from 'react-native';
import Contacts from 'react-native-contacts';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DistributionlistProvider } from '../providers/distributionlist/distributionlist';
import { Api } from '../providers/api/api';
import { useLoader } from '../providers/loader/loader';

const SharegroupPage = () => {
  const { control, handleSubmit, setValue, formState: { errors } } = useForm();
  const [contactItems, setContactItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showNotFound, setShowNotFound] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const navigation = useNavigation();
  const { showLoader, hideLoader } = useLoader();
  const apiInstance = new Api();
  const distributionlistProvider = new DistributionlistProvider(apiInstance);

  useEffect(() => {
    const fetchStoredUserInfo = async () => {
      try {
        showLoader();
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          const userInfo = JSON.parse(storedUser);
          const response = await distributionlistProvider.group_info(userInfo);
          hideLoader();
          if (!response || response.result === 'failed') {
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
            setShowNotFound(false);
          }
        } else {
          hideLoader();
          Alert.alert('Error', 'User information not found. Please log in again.');
          navigation.navigate('LoginScreen');
        }
      } catch (error) {
        hideLoader();
        console.error('Error fetching user info:', error);
        Alert.alert('Error', 'Failed to fetch user information.');
      }
    };

    fetchStoredUserInfo();
  }, []);

  const getContact = () => {
    Contacts.openContactForm().then(contact => {
      setValue('name', contact.displayName || '');
      setValue('number', contact.phoneNumbers[0]?.number || '');
      setValue('email', contact.emailAddresses[0]?.email || '');
    }).catch(error => {
      console.error('Error fetching contact:', error);
    });
  };

  const createGroup = async (data) => {
    try {
      showLoader();
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        const userInfo = JSON.parse(storedUser);
        const distriInfo = {
          user_id: userInfo.user_id,
          contact_name: data.name,
          email: data.email,
          phone_number: data.number,
        };
        const response = await distributionlistProvider.distribution(distriInfo);
        hideLoader();
        Alert.alert(response.message);
      } else {
        hideLoader();
        Alert.alert('Error', 'User information not found. Please log in again.');
        navigation.navigate('LoginScreen');
      }
    } catch (error) {
      hideLoader();
      console.error('Error creating group:', error);
      Alert.alert('Error', 'Failed to create group.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>My Groups</Text>
      {!showForm && (
        <TextInput
          placeholder="Search"
          style={{ marginBottom: 20 }}
        />
      )}
      {showForm ? (
        <View>
          <Button title="Select Contact" onPress={getContact} />
          <Controller
            control={control}
            name="name"
            rules={{ required: 'Name is required', pattern: { value: /^[a-zA-Z ]+$/, message: 'Invalid name format' }, maxLength: { value: 30, message: 'Max length is 30' } }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Name"
                value={value}
                onChangeText={onChange}
                style={{ borderBottomWidth: 1, marginBottom: 10 }}
              />
            )}
          />
          {errors.name && <Text>{errors.name.message}</Text>}

          <Controller
            control={control}
            name="number"
            rules={{ required: 'Number is required', pattern: { value: /^[0-9-+()]*$/, message: 'Invalid number format' }, maxLength: { value: 30, message: 'Max length is 30' } }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Mobile number"
                value={value}
                onChangeText={onChange}
                style={{ borderBottomWidth: 1, marginBottom: 10 }}
              />
            )}
          />
          {errors.number && <Text>{errors.number.message}</Text>}

          <Controller
            control={control}
            name="email"
            rules={{
              required: 'Email is required',
              pattern: { value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, message: 'Invalid email format' },
              maxLength: { value: 50, message: 'Max length is 50' }
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Email"
                value={value}
                onChangeText={onChange}
                style={{ borderBottomWidth: 1, marginBottom: 10 }}
              />
            )}
          />
          {errors.email && <Text>{errors.email.message}</Text>}

          <Button title={editMode ? "Edit Group" : "Create Group"} onPress={handleSubmit(createGroup)} />
        </View>
      ) : (
        <FlatList
          data={contactItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => { /* Edit group logic */ }}>
              <Text>{item.name} ({item.email}) - {item.phone}</Text>
            </TouchableOpacity>
          )}
        />
      )}
      {showNotFound && <Text>No groups found</Text>}
      <Button title="Toggle Form" onPress={() => setShowForm(!showForm)} />
    </View>
  );
};

export default SharegroupPage;
