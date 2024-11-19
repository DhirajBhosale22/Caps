
// // // import React, { useEffect, useState } from 'react';
// // // import { View, Text, ActivityIndicator, FlatList, Alert, StyleSheet, TouchableOpacity } from 'react-native';
// // // import AsyncStorage from '@react-native-async-storage/async-storage';
// // // import CaseProvider from '../providers/case/case';
// // // import ProfileProvider from '../providers/profile/profile';
// // // import { Api } from '../providers/api/api';


// // // // Initialize API and providers
// // // const api = new Api('https://aggressionmanagement.com/api');
// // // const profileProvider = new ProfileProvider(api);
// // // const caseProvider = new CaseProvider(api);

// // // const MyCasePage = ({ navigation }: any) => {
// // //   const [loading, setLoading] = useState(true);
// // //   const [myCases, setMyCases] =useState<any[]>([]);
// // //   const [userInfo, setUserInfo] = useState(null);
// // //   const [item, setItem] = useState(null);
// // //   const [token, setToken] = useState(null); // Define token as a state variable
// // //   useEffect(() => {
// // //     loadUserData();
// // //   }, []);

// // //   // Function to load cases and user info
// // //   const loadUserData = async () => {
// // //     try {
// // //       const storedUser = await AsyncStorage.getItem('user');

// // //       if (storedUser) {
// // //         const parsedUser = JSON.parse(storedUser);
// // //         const tokenObject = { token: parsedUser.token, user_id: parsedUser.user_id };
// // //         setToken(tokenObject.token); // Update the token state variable

// // //         // Fetch user profile info
// // //         const userProfileResponse = await profileProvider.user_info(tokenObject);
// // //         console.log('userProfileResponse:', userProfileResponse.data);
// // //         setUserInfo(userProfileResponse.data);

// // //         // Fetch cases created by the user
// // //         const myCasesResponse = await caseProvider.myCases(tokenObject);
// // //         console.log('myCasesResponse:', myCasesResponse);
        
  
        

// // //         // Ensure myCases is always an array
// // //         setMyCases(Array.isArray(myCasesResponse) ? myCasesResponse : []);
// // //       } else {
// // //         Alert.alert('Error', 'User token not found. Please log in again.');
// // //       }
// // //     } catch (error) {
// // //       console.error('Error loading data:', error);
// // //       Alert.alert('Error', 'Failed to load data. Please try again later.');
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <View style={styles.loadingContainer}>
// // //         <ActivityIndicator size="large" color="#0000ff" />
// // //       </View>
// // //     );
// // //   }

// // //   return (
// // //     <View style={styles.container}>
// // //       {userInfo && (
// // //         <View style={styles.userInfo}>
// // //           <Text style={styles.welcomeText}>Welcome, {userInfo.firstname}</Text>
// // //           <Text>Email: {userInfo.email}</Text>
// // //         </View>
// // //       )}

// // //       <Text style={styles.header}>My Cases</Text>

// // //       {/* Show a message if no cases are available */}
// // //       {myCases.length === 0 ? (
// // //         <Text style={styles.noCasesText}>No cases available</Text>
// // //       ) : (
// // //         <FlatList
// // //           data={myCases}
// // //           keyExtractor={(item) => item.case_id.toString()}
// // //           renderItem={({ item }) => (
// // //             <TouchableOpacity
// // //             style={styles.caseCard}
// // //             onPress={() => navigation.navigate('AggressionMeterScreen', {
// // //               case_id: item.case_id,
// // //               suspect_info: {
// // //                 suspect_name: item.name,
// // //                 last_name: item.last_name,
// // //               },
// // //               token: token, // Add this line to pass the token
// // //             })}
// // //           >
// // //             <View style={styles.caseContent}>
// // //               <Text style={styles.caseName}>{item.name} {item.last_name}</Text>
// // //               <Text style={styles.caseDate}>{item.date_time}</Text>
// // //               <Text style={styles.caseId}>Case ID: {item.case_id}</Text>
// // //               <Text style={styles.caseDetails}>P: {item.Primal}/C: {item.Cognitive}</Text>
// // //             </View>
// // //           </TouchableOpacity>
          
// // //           )}
// // //           contentContainerStyle={{ paddingBottom: 20 }}
// // //           style={styles.flatList}
// // //         />
// // //       )}
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     padding: 16,
// // //     backgroundColor: '#fff',
// // //   },
// // //   loadingContainer: {
// // //     flex: 1,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   userInfo: {
// // //     marginBottom: 20,
// // //   },
// // //   welcomeText: {
// // //     fontSize: 18,
// // //     fontWeight: 'bold',
// // //   },
// // //   header: {
// // //     fontSize: 20,
// // //     fontWeight: 'bold',
// // //     marginVertical: 10,
// // //   },
// // //   caseCard: {
// // //     backgroundColor: '#f9f9f9',
// // //     borderRadius: 8,
// // //     padding: 16,
// // //     marginBottom: 10,
// // //   },
// // //   caseContent: {
// // //     flex: 1,
// // //   },
// // //   caseName: {
// // //     fontSize: 16,
// // //     fontWeight: 'bold',
// // //     color: 'black',
// // //   },
// // //   caseDate: {
// // //     fontSize: 14,
// // //     color: 'black',
// // //   },
// // //   caseId: {
// // //     fontSize: 14,
// // //     color: '#666',
// // //   },
// // //   caseDetails: {
// // //     fontSize: 14,
// // //   },
// // //   flatList: {
// // //     flex: 1,
// // //   },
// // //   noCasesText: {
// // //     textAlign: 'center',
// // //     fontSize: 16,
// // //     color: '#666',
// // //     marginTop: 20,
// // //   },
// // // });

// // // export default MyCasePage;



// // import React, {useEffect, useState} from 'react';
// // import {
// //   View,
// //   Text,
// //   ActivityIndicator,
// //   FlatList,
// //   Alert,
// //   StyleSheet,
// //   TouchableOpacity,
// //   Image,
// // } from 'react-native';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import CaseProvider from '../providers/case/case';
// // import ProfileProvider from '../providers/profile/profile';
// // import {Api} from '../providers/api/api';
// // import {useNavigation} from '@react-navigation/native';

// // // Initialize API and providers
// // const api = new Api('https://aggressionmanagement.com/api');
// // const profileProvider = new ProfileProvider(api);
// // const caseProvider = new CaseProvider(api);

// // const MyCasePage = () => {
// //   const [loading, setLoading] = useState(true);
// //   const [myCases, setMyCases] = useState<any[]>([]);
// //   const [userInfo, setUserInfo] = useState(null);
// //   const [token, setToken] = useState(null);
// //   const [item, setItem] = useState(null);
// //   const [colors, setColors] = useState('rgba(102, 102, 102, 0.5)');
// //   const [select, setSelect] = useState(0);
// //   const navigation = useNavigation();

// //   useEffect(() => {
// //     loadUserData();
// //   }, []);

// //   // Function to load cases and user info
// //   const loadUserData = async () => {
// //     try {
// //       const storedUser = await AsyncStorage.getItem('user');

// //       if (storedUser) {
// //         const parsedUser = JSON.parse(storedUser);
// //         const token = {token: parsedUser.token, user_id: parsedUser.user_id};

// //         // Fetch user profile info
// //         const userProfileResponse = await profileProvider.user_info(token);
// //         console.log('userProfileResponse:', userProfileResponse.data);
// //         setUserInfo(userProfileResponse.data);

// //         // Fetch cases created by the user
// //         const myCasesResponse = await caseProvider.myCases(token);
// //         console.log('myCasesResponse:', myCasesResponse);

// //         // Ensure myCases is always an array
// //         setMyCases(Array.isArray(myCasesResponse) ? myCasesResponse : []);
// //       } else {
// //         Alert.alert('Error', 'User token not found. Please log in again.');
// //       }
// //     } catch (error) {
// //       console.error('Error loading data:', error);
// //       Alert.alert('Error', 'Failed to load data. Please try again later.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <View style={styles.loadingContainer}>
// //         <ActivityIndicator size={120} color="#a42f2d" />
// //       </View>
// //     );
// //   }

// //   return (
// //     <View style={styles.container}>
// //       {userInfo && (
// //         <View style={styles.userInfo}>
// //           {/* <Text style={styles.welcomeText}>Welcome, {userInfo.firstname}</Text> */}
// //           {/* <Text>Email: {userInfo.email}</Text> */}
// //         </View>
// //       )}

// //       <View style={styles.header}>
// //         <TouchableOpacity onPress={() => navigation.goBack()}>
// //           <Image
// //             style={styles.back}
// //             source={require('../assets/img/back.png')}
// //           />
// //         </TouchableOpacity>
// //         <Text style={{fontSize: 20, color: 'white'}}>My Cases</Text>
// //         <View style={styles.icons}>
// //           <Image
// //             style={styles.iconsdownload}
// //             source={require('../assets/img/download.png')}
// //           />
// //           <Image
// //             style={styles.iconsearch}
// //             source={require('../assets/img/search.png')}
// //           />
// //         </View>
// //       </View>

// //       {/* Show a message if no cases are available */}
// //       {myCases.length === 0 ? (
// //         <Text style={styles.noCasesText}>No cases available</Text>
// //       ) : (
// //         <FlatList
// //           data={myCases}
// //           keyExtractor={item => item.case_id.toString()}
// //           renderItem={({item}) => (
// //             <TouchableOpacity
// //               style={styles.caseCard}
// //               onPress={() => navigation.navigate('AggressionMeterScreen', {
// //                               case_id: item.case_id,
// //                               suspect_info: {
// //                                 suspect_name: item.name,
// //                                 last_name: item.last_name,
// //                               },
// //                               token: token, 
// //                             })}
// //                           >
// //               <View style={styles.caseContent}>
// //                 {/* Container to hold the image and the text in a row */}
// //                 <View style={styles.caseHeader}>
// //                   <Image
// //                     style={styles.pad}
// //                     source={require('../assets/img/escolaimg.png')}
// //                   />
// //                   <Text style={styles.caseName}>
// //                     {item.name} {item.last_name}
// //                   </Text>
// //                 </View>

// //                 <Text style={styles.caseDate}>{item.date_time}</Text>
// //                 <Text style={styles.caseId}>Case ID: {item.case_id}</Text>
// //                 <Text style={styles.caseDetails}>
// //                   P: {item.Primal}/C: {item.Cognitive}
// //                 </Text>
// //                 <View
// //                   style={[
// //                     styles.separator,
// //                     {
// //                       backgroundColor:
// //                         item.color_code === 'green'
// //                           ? 'rgb(58, 186, 128)'
// //                           : item.color_code === 'red'
// //                           ? 'rgb(216, 108, 107)'
// //                           : item.color_code === 'yellow'
// //                           ? 'rgb(232, 185, 106)'
// //                           : '#000000',
// //                     },
// //                   ]}
// //                 />
// //               </View>
// //             </TouchableOpacity>
// //           )}
// //           contentContainerStyle={{paddingBottom: 20}}
// //           style={styles.flatList}
// //         />
// //       )}
// //     </View>
// //   );
// // };
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#e5e5e5',
// //   },
// //   caseHeader: {
// //     flexDirection: 'row', // Align items in a row
// //     alignItems: 'center', // Vertically align the image and text
// //     marginBottom: 8, // Add space below the image and name
// //   },
// //   loadingContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   userInfo: {
// //     marginBottom: 0,
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-between', // Distribute items with space between
// //     backgroundColor: '#a42f2d',
// //     paddingHorizontal: 15,
// //     paddingVertical: 13,
// //   },
// //   icons: {
// //     flexDirection: 'row',
// //     justifyContent: 'flex-end',

// //     width: 100,
// //     gap: 25,
// //   },
// //   back: {
// //     width: 25,
// //     height: 20,
// //     tintColor: 'white',
// //   },
// //   headerTitle: {
// //     flex: 1, // Ensure title takes available space
// //     textAlign: 'center',
// //     fontSize: 20,
// //     color: 'white',
// //   },
// //   iconsContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   iconsdownload: {
// //     height: 19,
// //     width: 20,
// //     tintColor: 'white',
// //     fontWeight: '900',
// //   },
// //   iconsearch: {
// //     height: 20,
// //     width: 20,
// //     tintColor: 'white',
// //     fontWeight: 'bold',
// //   },
// //   caseCard: {
// //     flexDirection: 'row',
// //     backgroundColor: '#ffffff',
// //     paddingVertical: 15,
// //     paddingHorizontal: 15,
// //   },
// //   caseContent: {
// //     flex: 1,
// //   },
// //   caseName: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     color: '#a42f2d',
// //     marginLeft: 14,
// //   },
// //   caseDate: {
// //     fontSize: 12,
// //     color: '#555',
// //     marginBottom: 14,
// //     marginLeft: 40,
// //   },
// //   caseId: {
// //     fontSize: 12,
// //     color: '#555',
// //     marginBottom: 14,
// //     marginLeft: 40,
// //   },
// //   caseDetails: {
// //     fontSize: 12,
// //     color: '#555',
// //     marginBottom: 14,
// //     marginLeft: 40,
// //   },
// //   separator: {
// //     height: 4,
// //     // backgroundColor: '#4caf50',
// //     marginTop: 8,
// //     marginLeft: 40,
// //     width: 335,
// //   },
// //   flatList: {
// //     flex: 1,
// //   },
// //   noCasesText: {
// //     textAlign: 'center',
// //     fontSize: 16,
// //     color: '#666',
// //     marginTop: 20,
// //   },
// //   pad: {
// //     height: 19,
// //     width: 15,
// //     marginRight: 10,
// //   },
// // });

// // export default MyCasePage;



// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   ActivityIndicator,
//   FlatList,
//   Alert,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   TextInput,
//   PermissionsAndroid,
//   Platform,
//   Modal,
//   Linking
// } from 'react-native';
// import RNHTMLtoPDF from 'react-native-html-to-pdf';
// import RNFS from 'react-native-fs';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import CaseProvider from '../providers/case/case';
// import ProfileProvider from '../providers/profile/profile';
// import {Api} from '../providers/api/api';
// import {useNavigation} from '@react-navigation/native';


// const api = new Api('https://aggressionmanagement.com/api');
// const profileProvider = new ProfileProvider(api);
// const caseProvider = new CaseProvider(api);

// const MyCasePage = () => {
//   const [loading, setLoading] = useState(true);
//   const [myCases, setMyCases] = useState<any[]>([]);
//   const [userInfo, setUserInfo] = useState(null);
//   const [token, setToken] = useState(null);
//   const [allCases, setAllCases] = useState<any[]>([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [showSearchBar, setShowSearchBar] = useState(false);
//   const [showFooter, setShowFooter] = useState(true);
//   const [logoutModalVisible, setLogoutModalVisible] = useState(false);

//   const navigation = useNavigation();

//   useEffect(() => {
//     loadUserData();
//   }, []);

//   const loadUserData = async () => {
//     try {
//       const storedUser = await AsyncStorage.getItem('user');
//       if (storedUser) {
//         const parsedUser = JSON.parse(storedUser);
//         const token = {token: parsedUser.token, user_id: parsedUser.user_id};
//         const userProfileResponse = await profileProvider.user_info(token);
//         setUserInfo(userProfileResponse.data);
//         const myCasesResponse = await caseProvider.myCases(token);
//         const casesArray = Array.isArray(myCasesResponse) ? myCasesResponse : [];
//         setMyCases(casesArray);
//         setAllCases(casesArray);
//       } else {
//         Alert.alert('Error', 'User token not found. Please log in again.');
//       }
//     } catch (error) {
//       console.error('Error loading data:', error);
//       Alert.alert('Error', 'Failed to load data. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearchIconPress = () => {
//     setShowSearchBar(!showSearchBar);
//   };

//   const handleSearch = (text: string) => {
//     const filteredData = allCases.filter(
//       item =>
//         item.name.toLowerCase().includes(text.toLowerCase()) ||
//         item.case_id.toString().includes(text.toLowerCase()),
//     );
//     setMyCases(filteredData);
//     setSearchQuery(text);
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

//   // Request storage permission for Android
//   const requestStoragePermission = async () => {
//     if (Platform.OS === 'android') {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//           {
//             title: 'Storage Permission Required',
//             message: 'App needs access to your storage to download the form',
//           },
//         );
//         return granted === PermissionsAndroid.RESULTS.GRANTED;
//       } catch (err) {
//         console.warn(err);
//         return false;
//       }
//     }
//     return true;
//   };

//   // Function to generate the PDF
//   const generatePDF = async () => {
//     let options = {
//       html: `
//         <h1>My Case Report</h1>
//         ${myCases
//           .map(
//             caseItem =>
//               `<p>Case Name: ${caseItem.name} ${caseItem.last_name}</p>
//                <p>Case ID: ${caseItem.case_id}</p>
//                <p>Date: ${caseItem.date_time}</p>
//                <hr />`,
//           )
//           .join('')}
//       `,
//       fileName: 'my_case_report',
//       directory: 'Documents',
//     };

//     let file = await RNHTMLtoPDF.convert(options);
//     console.log('PDF generated:', file.filePath); // Log the generated PDF file path
//     Alert.alert('Success', 'PDF has been generated!', [{text: 'OK'}]);

//     return file.filePath;
//   };

//   // Handle download click
//   const handleDownload = async () => {
//     const hasPermission = await requestStoragePermission(); // Request permission
//     if (!hasPermission) return; // Stop if permission is not granted

//     try {
//       const pdfPath = await generatePDF(); // Generate the PDF
//       console.log('Generated PDF Path:', pdfPath); // Log the generated PDF path

//       // Move the file to Downloads folder
//       const destinationPath = `${RNFS.DownloadDirectoryPath}/my_case_report.pdf`;
//       await RNFS.moveFile(pdfPath, destinationPath);
//       Alert.alert('Success', 'File downloaded to: ' + destinationPath); // Notify success
//     } catch (error) {
//       console.error('Error downloading file:', error);
//       Alert.alert('Error', 'Failed to download the file.'); // Notify error
//     }
//   };

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size={120} color="#a42f2d" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Image
//             style={styles.back}
//             source={require('../assets/img/back.png')}
//           />
//         </TouchableOpacity>
//         <Text style={{fontSize: 20, color: 'white'}}>My Cases</Text>
//         <View style={styles.icons}>
//           <TouchableOpacity onPress={handleDownload}>
//             <Image
//               style={styles.iconsdownload}
//               source={require('../assets/img/download.png')}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={handleSearchIconPress}>
//             <Image
//               style={styles.iconsearch}
//               source={require('../assets/img/search.png')}
//             />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {showSearchBar && (
//         <View style={styles.searchContainer}>
//           <View style={styles.inputWrapper}>
//             <TextInput
//               style={styles.searchInput}
//               placeholder="Search"
//               placeholderTextColor="#303030"
//               value={searchQuery}
//               onChangeText={handleSearch}
//             />
//           </View>
//         </View>
//       )}

//       {myCases.length === 0 ? (
//         <Text style={styles.noCasesText}>No cases available</Text>
//       ) : (
//         <FlatList
//           data={myCases}
//           keyExtractor={item => item.case_id.toString()}
//           renderItem={({item}) => (
//             <TouchableOpacity
//               style={styles.caseCard}
//               onPress={() => navigation.navigate('AggressionMeterScreen', {
//                                               case_id: item.case_id,
//                                               suspect_info: {
//                                                 suspect_name: item.name,
//                                                 last_name: item.last_name,
//                                               },
//                                               token: token, 
//                                             })}
//                                           >
//          <View style={styles.caseContent}>
//          <View style={styles.caseHeader}>
//   <Image
//     style={styles.pad}
//     source={require('../assets/img/escolaimg.png')}
//   />
//   <View style={{flex: 1}}>
//     <Text style={styles.caseName}>
//       {item.name} {item.last_name}
//     </Text>
//   </View>
//   <View style={{alignItems: 'flex-end'}}>
//     <Image
//       style={{ width: 25, height: 25 }}
//       source={require('../assets/img/next.png')}
//     />
//     </View>
//     <View style={{alignItems: 'flex-end'}}>
//     {item.shared_case === '1' && (
//       <Image
//         style={{ width: 15, height: 15, tintColor:'red' }}
//         source={require('../assets/img/share.png')}
//       />
//     )}
    
//   </View>
// </View>
    
//     <Text style={styles.caseDate}>{item.date_time}</Text>
//     <Text style={styles.caseId}>Case ID: {item.case_id}</Text>
//     <Text style={styles.caseDetails}>
//       P: {item.Primal}/C: {item.Cognitive}
//     </Text>
   
//                 <View
//                   style={[
//                     styles.separator,
//                     {
//                       backgroundColor:
//                         item.color_code === 'green'
//                           ? 'rgb(58, 186, 128)'
//                           : item.color_code === 'red'
//                           ? 'rgb(216, 108, 107)'
//                           : item.color_code === 'yellow'
//                           ? 'rgb(232, 185, 106)'
//                           : '#000000',
//                     },
//                   ]}
//                 />
//               </View>
//             </TouchableOpacity>
//           )}
//           contentContainerStyle={{paddingBottom: 20}}
//           style={styles.flatList}
//         />
//       )}
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
//     backgroundColor: '#e5e5e5',
//   },
//   caseHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//     justifyContent: 'space-between',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: '#a42f2d',
//     paddingHorizontal: 15,
//     paddingVertical: 13,
//   },
//   icons: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     width: 100,
//     gap: 25,
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
//     shadowOffset: { width: 0, height: 2 },
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
//     fontWeight:'bold',
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
//   searchInput: {
//     flex: 1,
//     height: 40,
//     fontSize: 16,
//   },
//   searchContainer: {
//     padding: 10,
//     backgroundColor: '#c0c0c0',
//     justifyContent: 'center',
//   },
//   back: {
//     width: 25,
//     height: 20,
//     tintColor: 'white',
//   },
//   iconsdownload: {
//     height: 19,
//     width: 20,
//     tintColor: 'white',
//   },
//   iconsearch: {
//     height: 20,
//     width: 20,
//     tintColor: 'white',
//   },
//   caseCard: {
//     flexDirection: 'row',
//     backgroundColor: '#ffffff',
//     paddingVertical: 15,
//     paddingHorizontal: 15,
//   },
//   caseContent: {
//     flex: 1,
//   },
//   caseName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#a42f2d',
//     marginLeft: 14,
//   },
//   share: {
//     height: 15,
//     width: 15,
//     marginLeft: 5,
//     tintColor:'red',
//   },
//   caseDate: {
//     fontSize: 12,
//     color: '#555',
//     marginBottom: 14,
//     marginLeft: 40,
//   },
//   caseId: {
//     fontSize: 12,
//     color: '#555',
//     marginLeft: 40,
//   },
//   caseDetails: {
//     fontSize: 12,
//     color: '#555',
//     marginBottom: 14,
//     marginLeft: 40,
//   },
//   separator: {
//     height: 4,
//     // backgroundColor: '#4caf50',
//     marginTop: 8,
//     marginLeft: 40,
//     width: 335,
//   },
//   flatList: {
//     flex: 1,
//   },
//   noCasesText: {
//     textAlign: 'center',
//     fontSize: 16,
//     color: '#666',
//     marginTop: 20,
//   },
//   pad: {
//     height: 19,
//     width: 15,
//     marginRight: 10,
//   },
// });

// export default MyCasePage;
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  PermissionsAndroid,
  Platform,
  Modal,
  Linking,
} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNFS from 'react-native-fs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CaseProvider from '../providers/case/case';
import ProfileProvider from '../providers/profile/profile';
import {Api} from '../providers/api/api';
import {useNavigation} from '@react-navigation/native';

const api = new Api('https://aggressionmanagement.com/api');
const profileProvider = new ProfileProvider(api);
const caseProvider = new CaseProvider(api);

const MyCasePage = () => {
  const [loading, setLoading] = useState(true);
  const [myCases, setMyCases] = useState<any[]>([]);
  const [userInfo, setUserInfo] = useState(null);
  const [token, setToken] = useState(null);
  const [allCases, setAllCases] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showFooter, setShowFooter] = useState(true);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        const token = {token: parsedUser.token, user_id: parsedUser.user_id};
        const userProfileResponse = await profileProvider.user_info(token);
        setUserInfo(userProfileResponse.data);
        const myCasesResponse = await caseProvider.myCases(token);
        const casesArray = Array.isArray(myCasesResponse)
          ? myCasesResponse
          : [];
        setMyCases(casesArray);
        setAllCases(casesArray);
      } else {
        Alert.alert('Error', 'User token not found. Please log in again.');
      }
    } catch (error) {
      console.error('Error loading data:', error);
      Alert.alert('Error', 'Failed to load data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearchIconPress = () => {
    setShowSearchBar(!showSearchBar);
  };

  const handleSearch = (text: string) => {
    const filteredData = allCases.filter(
      item =>
        item.name.toLowerCase().includes(text.toLowerCase()) ||
        item.case_id.toString().includes(text.toLowerCase()),
    );
    setMyCases(filteredData);
    setSearchQuery(text);
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

  // Request storage permission for Android
  const requestStoragePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message: 'App needs access to your storage to download the form',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true;
  };

  // Function to generate the PDF
  const generatePDF = async () => {
    let options = {
      html: `
        <h1>My Case Report</h1>
        ${myCases
          .map(
            caseItem =>
              `<p>Case Name: ${caseItem.name} ${caseItem.last_name}</p>
               <p>Case ID: ${caseItem.case_id}</p>
               <p>Date: ${caseItem.date_time}</p>
               <hr />`,
          )
          .join('')}
      `,
      fileName: 'my_case_report',
      directory: 'Documents',
    };

    let file = await RNHTMLtoPDF.convert(options);
    console.log('PDF generated:', file.filePath); // Log the generated PDF file path
    Alert.alert('Success', 'PDF has been generated!', [{text: 'OK'}]);

    return file.filePath;
  };

  // Handle download click
  const handleDownload = async () => {
    // const hasPermission = await requestStoragePermission(); // Request permission
    // if (!hasPermission) return; // Stop if permission is not granted

    try {
      const pdfPath = await generatePDF(); // Generate the PDF
      console.log('Generated PDF Path:', pdfPath); // Log the generated PDF path

      // Move the file to Downloads folder
      const destinationPath = `${RNFS.DownloadDirectoryPath}/my_case_report.pdf`;
      await RNFS.moveFile(pdfPath, destinationPath);
      Alert.alert('Success', 'File downloaded to: ' + destinationPath); // Notify success
    } catch (error) {
      console.error('Error downloading file:', error);
      Alert.alert('Error', 'Failed to download the file.'); // Notify error
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={120} color="#a42f2d" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.back}
            source={require('../assets/img/backarrow.png')}
          />
        </TouchableOpacity>
        <Text style={{fontSize: wp('5%'), color: 'white'}}>My Cases</Text>
        <View style={styles.icons}>
          <TouchableOpacity onPress={handleDownload}>
            <Image
              style={styles.iconsdownload}
              source={require('../assets/img/download.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSearchIconPress}>
            <Image
              style={styles.iconsearch}
              source={require('../assets/img/search.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      {showSearchBar && (
        <View style={styles.searchContainer}>
          <View style={styles.inputWrapper}>
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

      {myCases.length === 0 ? (
        <Text style={styles.noCasesText}>No cases available</Text>
      ) : (
        <FlatList
          data={myCases}
          keyExtractor={item => item.case_id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.caseCard}
              onPress={() =>
                navigation.navigate('AggressionMeterScreen', {
                  case_id: item.case_id,
                  suspect_info: {
                    suspect_name: item.name,
                    last_name: item.last_name,
                  },
                  token: token,
                })
              }>
              <View style={styles.caseContent}>
                <View style={styles.caseHeader}>
                  <Image
                    style={styles.pad}
                    source={require('../assets/img/escolaimg.png')}
                  />
                  <View style={{flex: 1}}>
                    <Text style={styles.caseName}>
                      {item.name} {item.last_name}
                    </Text>
                  </View>

                  <View>
                    <View style={{marginRight: 50}}>
                      {item.shared_case === '1' && (
                        <Image
                          style={{width: 15, height: 15, tintColor: 'red'}}
                          source={require('../assets/img/share.png')}
                        />
                      )}
                    </View>
                   
                  </View>
                </View>
                <View style={{flex:1}}>
                  <Text style={styles.caseDate}>{item.date_time}</Text>
                   <View style={{alignItems: 'flex-end'}}>
                      <Image
                        style={{ height: hp('3%'), // Adjusted for responsive height
                          width: wp('4%')}}
                        source={require('../assets/img/next.png')}
                      />
                    </View>
                  <Text style={styles.caseId}>Case ID: {item.case_id}</Text>
                  <Text style={styles.caseDetails}>
                  P: {item.Primal}/C: {item.Cognitive}
                </Text>
                </View>
               

                <View
                  style={[
                    styles.separator,
                    {
                      backgroundColor:
                        item.color_code === 'green'
                          ? 'rgb(58, 186, 128)'
                          : item.color_code === 'red'
                          ? 'rgb(216, 108, 107)'
                          : item.color_code === 'yellow'
                          ? 'rgb(232, 185, 106)'
                          : '#000000',
                    },
                  ]}
                />
              </View>
            </TouchableOpacity>
          )}
          contentContainerStyle={{paddingBottom: 20}}
          style={styles.flatList}
        />
      )}
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
    </View>
  );
};


import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  caseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  
    justifyContent: 'space-between',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#a42f2d',
    paddingHorizontal: wp('4%'), // Adjusted for responsive padding
    paddingVertical: hp('2%'), // Adjusted for responsive padding
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: wp('25%'), // Adjusted for responsive width
    gap: wp('5%'), // Adjusted for responsive gap
  },
  footer: {
    height: hp('8%'), // Responsive height
    backgroundColor: '#b71c1c',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footerButton: {
    padding: hp('1%'),
  },
  footerIcon: {
    width: wp('6%'), // Width is 6% of the screen width
    height: wp('6%'), // Height is 6% of the screen width
    tintColor: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: wp('5%'), // Adjusted for responsive margin
    backgroundColor: 'white',
    borderRadius: 10,
    padding: wp('8%'), // Adjusted for responsive padding
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitles: {
    fontSize: wp('5%'), // Adjusted for responsive font size
    fontWeight: 'bold',
    marginBottom: hp('2%'), // Adjusted for responsive margin
    color: 'black',
  },
  modalText: {
    fontSize: wp('4%'), // Adjusted for responsive font size
    marginBottom: hp('2%'), // Adjusted for responsive margin
    color: 'black',
  },
  modalText1: {
    fontSize: wp('4%'), // Adjusted for responsive font size
    marginBottom: hp('2%'), // Adjusted for responsive margin
    fontWeight: 'bold',
  },
  modalButtonContainer: {
    flexDirection: 'row',
  },
  modalButton: {
    borderRadius: 5,
    padding: hp('2%'), // Adjusted for responsive padding
    marginHorizontal: wp('2%'), // Adjusted for responsive margin
    backgroundColor: '#9D0808',
  },
  modalButtonText: {
    color: 'white',
    fontSize: wp('4%'), // Adjusted for responsive font size
  },
  ptext: {
    fontSize: wp('4.5%'), // Adjusted for responsive font size
    marginBottom: hp('3%'), // Adjusted for responsive margin
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: wp('2.5%'), // Adjusted for responsive padding
    height: hp('5%'), // Adjusted for responsive height
    borderColor: '#ddd',
    borderWidth: 1,
  },
  searchInput: {
    flex: 1,
    height: hp('8%'), // Adjusted for responsive height
    fontSize: wp('3.5%'), // Adjusted for responsive font size
    color: 'black',
  },
  searchContainer: {
    padding: hp('1.8%'), // Adjusted for responsive padding
    backgroundColor: '#c0c0c0',
    justifyContent: 'center',
  },
  back: {
    width: wp('6%'), // Adjusted for responsive width
    height: hp('3%'), // Adjusted for responsive height
    tintColor: 'white',
  },
  iconsdownload: {
    height: hp('2.5%'), // Adjusted for responsive height
    width: wp('5%'), // Adjusted for responsive width
    tintColor: 'white',
  },
  iconsearch: {
    height: hp('2.5%'), // Adjusted for responsive height
    width: wp('5%'), // Adjusted for responsive width
    tintColor: 'white',
    // marginTop: hp('0.5%'),
  },
  caseCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingVertical: hp('2%'), // Adjusted for responsive padding
    paddingHorizontal: wp('4%'), // Adjusted for responsive padding
  },
  caseContent: {
    flex: 1,
  },
  caseName: {
    fontSize: wp('5%'), // Adjusted for responsive font size
    fontWeight: '600',
    marginBottom: hp('0.5%'),
    color: '#a42f2d',
    marginLeft: wp('3%'), // Adjusted for responsive margin
  },
  share: {
    height: hp('2%'), // Adjusted for responsive height
    width: wp('4%'), // Adjusted for responsive width
    marginLeft: wp('2%'), // Adjusted for responsive margin
    tintColor: 'red',
  },
  caseDate: {
    fontSize: wp('3.5%'), // Adjusted for responsive font size
    color: '#555',
    marginBottom: hp('-2%'), // Adjusted for responsive margin
    marginLeft: wp('10%'), // Adjusted for responsive margin
  },
  caseId: {
    fontSize: wp('3.5%'), // Adjusted for responsive font size
    color: '#555',
    marginLeft: wp('10%'), // Adjusted for responsive margin
    marginBottom: hp('2%'), // Adjusted for responsive margin
  },
  caseDetails: {
    fontSize: wp('3.5%'), // Adjusted for responsive font size
    color: '#555',
    marginBottom: hp('2%'), // Adjusted for responsive margin
    marginLeft: wp('10%'), // Adjusted for responsive margin
  },
  separator: {
    height: hp('0.6%'), // Adjusted for responsive height
    // marginTop: hp('1%'), // Adjusted for responsive margin
    marginLeft: wp('10%'), // Adjusted for responsive margin
    width: wp('80%'), // Adjusted for responsive width
    // marginBottom: hp('1%'), // Adjusted for responsive margin
  },
  flatList: {
    flex: 1,
  },
  noCasesText: {
    textAlign: 'center',
    fontSize: wp('4%'), // Adjusted for responsive font size
    color: '#666',
    marginTop: hp('3%'), // Adjusted for responsive margin
  },
  pad: {
    height: hp('3%'), // Adjusted for responsive height
    width: wp('4%'), // Adjusted for responsive width
    marginRight: wp('2%'), // Adjusted for responsive margin
  },
});

export default MyCasePage;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#e5e5e5',
//   },
//   caseHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//     justifyContent: 'space-between',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: '#a42f2d',
//     paddingHorizontal: 15,
//     paddingVertical: 13,
//   },
//   icons: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     width: 100,
//     gap: 25,
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
//   searchInput: {
//     flex: 1,
//     height: 40,
//     fontSize: 16,
//     color:'black'
//   },
//   searchContainer: {
//     padding: 10,
//     backgroundColor: '#c0c0c0',
//     justifyContent: 'center',
//   },
//   back: {
//     width: 25,
//     height: 20,
//     tintColor: 'white',
//   },
//   iconsdownload: {
//     height: 19,
//     width: 20,
//     tintColor: 'white',
//   },
//   iconsearch: {
//     height: 20,
//     width: 20,
//     tintColor: 'white',
//   },
//   caseCard: {
//     flexDirection: 'row',
//     backgroundColor: '#ffffff',
//     paddingVertical: 15,
//     paddingHorizontal: 15,
//   },
//   caseContent: {
//     flex: 1,
//   },
//   caseName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#a42f2d',
//     marginLeft: 14,
//   },
//   share: {
//     height: 15,
//     width: 15,
//     marginLeft: 5,
//     tintColor: 'red',
//   },
//   caseDate: {
//     fontSize: 12,
//     color: '#555',
//     marginBottom: -15,
//     marginLeft: 40,
//   },
//   caseId: {
//     fontSize: 12,
//     color: '#555',
//     marginLeft: 40,
//     marginBottom: 14,
//   },
//   caseDetails: {
//     fontSize: 12,
//     color: '#555',
//     marginBottom: 14,
//     marginLeft: 40,
//   },
//   separator: {
//     height: 4,
//     // backgroundColor: '#4caf50',
//     marginTop: 8,
//     marginLeft: 40,
//     width: 335,
//     marginBottom: 40,
//   },
//   flatList: {
//     flex: 1,
//   },
//   noCasesText: {
//     textAlign: 'center',
//     fontSize: 16,
//     color: '#666',
//     marginTop: 20,
//   },
//   pad: {
//     height: 19,
//     width: 15,
//     marginRight: 10,
//   },
// });

// export default MyCasePage;
