// // import React, { useState } from 'react';
// // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Modal } from 'react-native';

// // const ContactUsScreen = () => {
// //   const [title, setTitle] = useState('');
// //   const [thankYouModalVisible, setThankYouModalVisible] = useState(false);

// //   const [contactReason, setContactReason] = useState('');
// //   const [message, setMessage] = useState('');
// //   const [modalVisible, setModalVisible] = useState(false);
// //   const [selectedReason, setSelectedReason] = useState('');
// //   const [showTitleError, setShowTitleError] = useState(false);
// //   const [showContactReasonError, setShowContactReasonError] = useState(false);
// //   const [showMessageError, setShowMessageError] = useState(false);
  
// //   const isFormValid = () => title && contactReason && message;

// //   const handleOk = () => {
// //     setContactReason(selectedReason);
// //     setModalVisible(false);
// //   };

// //   const handleCancel = () => {
// //     setModalVisible(false);
// //   };

// //   const validateTitle = (text) => {
// //     const valid = /^[A-Za-z\s]{0,25}$/.test(text);
// //     if (text.length < 2 || !valid) {
// //       setShowTitleError(true);
// //     } else {
// //       setShowTitleError(false);
// //     }
// //     setTitle(text);  // Ensure title is updated with the input text
// //   };

// //   const handleSubmit = () => {
// //     if (isFormValid()) {
// //       setThankYouModalVisible(true);
// //     }
// //   };

// //   const handleThankYouOk = () => {
// //     setThankYouModalVisible(false);
// //     // Optionally, reset form fields or navigate to another screen
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.headerContainer}>
// //         <TouchableOpacity style={styles.backButton} onPress={() => {/* handle back action */}}>
// //           <Image source={require('./images/back.png')} style={styles.backIcon} />
// //         </TouchableOpacity>
// //         <Text style={styles.header}>Contact Us</Text>
// //       </View>

// //       <ScrollView contentContainerStyle={styles.scrollViewContent}>
// //         <View style={styles.inputContainer}>
// //           <View style={styles.iconContainer}>
// //             <Image source={require('./images/Title.png')} style={styles.icon} />
// //           </View>
// //           <TextInput
// //             style={styles.input}
// //             placeholder="Title"
// //             value={title}
// //             onChangeText={(text) => validateTitle(text)}
// //             onBlur={() => setShowTitleError(!title)}
// //           />
// //         </View>
// //         {showTitleError && <Text style={styles.errorText}>Enter minimum 2 letters</Text>}

// //         <TouchableOpacity
// //           style={styles.inputContainer}
// //           onPress={() => setModalVisible(true)}
// //           activeOpacity={1}
// //         >
// //           <View style={styles.iconContainer}>
// //             <Image source={require('./images/location (2).png')} style={styles.icons} />
// //           </View>
// //           <TextInput
// //             style={styles.input}
// //             placeholder="Contact Reason"
// //             value={contactReason}
// //             editable={false}
// //             onBlur={() => setShowContactReasonError(!contactReason)}
// //           />
// //           <Image source={require('./images/down_arrow.png')} style={styles.icone} />
// //         </TouchableOpacity>

// //         {showContactReasonError && <Text style={styles.errorText}>This field cannot be empty.</Text>}

// //         <View style={styles.inputContainer}>
// //           <View style={styles.iconContainer}>
// //             <Image source={require('./images/email.png')} style={styles.iconss} />
// //           </View>
// //           <TextInput
// //             style={[styles.input, styles.messageInput]}
// //             placeholder="Message"
// //             value={message}
// //             onChangeText={(text) => {
// //               setMessage(text);
// //               setShowMessageError(true);
// //             }}
// //             maxLength={250}
// //             multiline
// //           />
// //         </View>
// //         {showMessageError && <Text style={styles.charLimitText}>Max 250 characters allowed</Text>}

// //         <TouchableOpacity
// //           style={[styles.submitButton, !isFormValid() && styles.disabledButton]}
// //           disabled={!isFormValid()}
// //           onPress={handleSubmit}  // Call handleSubmit here
// //         >
// //           <Text style={styles.submitButtonText}>SEND MESSAGE</Text>
// //         </TouchableOpacity>

// //         <Modal
// //           visible={modalVisible}
// //           transparent={true}
// //           animationType="slide"
// //         >
// //           <View style={styles.modalContainer}>
// //             <View style={styles.modalContent}>
// //               <TouchableOpacity
// //                 style={styles.radioButton}
// //                 onPress={() => setSelectedReason('Software Technology Issues')}
// //               >
// //                 <View style={[styles.radioCircle, selectedReason === 'Software Technology Issues' && styles.selected]}>
// //                   {selectedReason === 'Software Technology Issues' && <View style={styles.selectedDot} />}
// //                 </View>
// //                 <Text style={styles.radioText}>Software Technology Issues</Text>
// //               </TouchableOpacity>
// //               <TouchableOpacity
// //                 style={styles.radioButton}
// //                 onPress={() => setSelectedReason('CAPS Application Issues')}
// //               >
// //                 <View style={[styles.radioCircles, selectedReason === 'CAPS Application Issues' && styles.selected]}>
// //                   {selectedReason === 'CAPS Application Issues' && <View style={styles.selectedDot} />}
// //                 </View>
// //                 <Text style={styles.radioText}>CAPS Application Issues</Text>
// //               </TouchableOpacity>
             
// //               <View style={styles.lineContainer}>
// //                 <View style={styles.horizontalLine} />
// //               </View>
// //               <View style={styles.modalButtons}>
// //                 <TouchableOpacity style={styles.modalButton} onPress={handleCancel}>
// //                   <Text style={styles.modalButtonText}>CANCEL</Text>
// //                 </TouchableOpacity>
// //                 <TouchableOpacity style={styles.modalButton} onPress={handleOk}>
// //                   <Text style={styles.modalButtonText}>OK</Text>
// //                 </TouchableOpacity>
// //               </View>
// //             </View>
// //           </View>
// //         </Modal>
        
// //         <Modal
// //           visible={thankYouModalVisible}
// //           transparent={true}
// //           animationType="slide"
// //         >
// //           <View style={styles.modalContainer}>
// //             <View style={styles.modalContent}>
// //               <Text style={styles.modalHeader}>CAPS</Text>
// //               <Text style={styles.thankYouText}>Thank you for your feedback</Text>
// //               <TouchableOpacity style={styles.modalButton} onPress={handleThankYouOk}>
// //                 <Text style={styles.modalButtonText}>OK</Text>
// //               </TouchableOpacity>
// //             </View>
// //           </View>
// //         </Modal>
// //       </ScrollView>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#f0f0f0',
// //   },
 
// //   headerContainer: {
// //     backgroundColor: '#d9534f',
// //     padding: 20,
// //     alignItems: 'center',
// //     position: 'relative',
// //   },
// //   backButton: {
// //     position: 'absolute',
// //     top: 20,
// //     left: 20,
// //   },
// //   thankYouText: {
// //     fontSize: 16,
// //     marginVertical: 20,
// //     marginTop:0
// //   },
// //   lineContainer: {
// //     width: '100%', // Ensure it takes the full width of the container
// //     alignItems: 'center', // Center the line horizontally
// //     marginVertical: 10, // Adjust the space above and below the line
// //   },

// //   horizontalLine: {
// //     width: '100%', // Adjust the width of the line
// //     height: 1, // Thickness of the line
// //     backgroundColor: '#000', // Color of the line
// //   },
// //   backIcon: {
// //     width: 26,
// //     height: 26,
// //     tintColor: '#fff',
// //   },
// //   header: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //   },
// //   scrollViewContent: {
// //     padding: 20,
// //   },
// //   inputContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     borderWidth: 2,
// //     borderColor: '#ddd',
// //     borderRadius: 8,
// //     marginBottom: 10,
// //     padding: 10,
// //     backgroundColor: '#fff',
// //   },
// //   iconContainer: {
// //     marginRight: 10,
// //   },
// //   icon: {
// //     width: 24,
// //     height: 24,
// //     tintColor: '#d9534f',
// //   },
// //   icons: {
// //     width: 24,
// //     height: 24,
// //   },
// //   icone: {
// //     width: 15,
// //     height: 15,
// //     tintColor: 'grey',
// //   },
// //   iconss: {
// //     width: 24,
// //     height: 24,
// //     tintColor: '#d9534f',
// //     marginTop: -50,
// //   },
// //   input: {
// //     flex: 1,
// //     fontSize: 16,
// //     padding: 5,
// //   },
// //   messageInput: {
// //     height: 100,
// //     textAlignVertical: 'top',
// //   },
// //   errorText: {
// //     color: 'red',
// //     marginBottom: 10,
// //   },
// //   charLimitText: {
// //     color: 'red',
// //     marginBottom: 10,
// //   },
// //   submitButton: {
// //     backgroundColor: '#d9534f',
// //     padding: 15,
// //     borderRadius: 5,
// //     alignItems: 'center',
// //     width: '50%',
// //     alignSelf: 'center',
// //   },
// //   disabledButton: {
// //     backgroundColor: '#ccc',
// //   },
// //   submitButtonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// //   modalContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: 'rgba(0,0,0,0.5)',
// //   },
// //   modalContent: {
// //     width: 300,
// //     backgroundColor: '#fff',
// //     borderRadius: 10,
// //     padding: 20,
// //     alignItems: 'center',
// //   },
// //   modalHeader: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     marginBottom: 20,
// //   },
// //   radioButton: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: 15,
// //   },
// //   radioCircle: {
// //     width: 20,
// //     height: 20,
// //     borderRadius: 10,
// //     borderWidth: 1,
// //     borderColor: '#d9534f',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginRight: 10,
// //   },
// //   radioCircles: {
// //     width: 20,
// //     height: 20,
// //     borderRadius: 10,
// //     borderWidth: 1,
// //     borderColor: '#d9534f',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginRight: 10,
// //     marginLeft: -25
// //   },
// //   selected: {
// //     borderColor: '#d9534f',
// //   },
// //   selectedDot: {
// //     width: 10,
// //     height: 10,
// //     borderRadius: 5,
// //     backgroundColor: '#d9534f',
// //   },
// //   radioText: {
// //     fontSize: 16,
// //   },
// //   modalButtons: {
// //     flexDirection: 'row',
// //     marginTop: 5,
// //     marginLeft: 130
// //   },
// //   modalButton: {
// //     marginHorizontal: 10,
// //   },
// //   modalButtonText: {
// //     fontSize: 16,
// //     color: '#d9534f',
// //     fontWeight: 'bold'
// //   },
// // });

// // export default ContactUsScreen;

// // import React, { useState } from 'react';
// // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Modal } from 'react-native';

// // const ContactUsScreen = () => {
// //   const [title, setTitle] = useState('');
// //   const [thankYouModalVisible, setThankYouModalVisible] = useState(false);
// //   const [contactReason, setContactReason] = useState('');
// //   const [message, setMessage] = useState('');
// //   const [modalVisible, setModalVisible] = useState(false);
// //   const [selectedReason, setSelectedReason] = useState('');
// //   const [showTitleError, setShowTitleError] = useState('');
// //   const [showContactReasonError, setShowContactReasonError] = useState(false);
// //   const [showMessageError, setShowMessageError] = useState(false);

// //   const isFormValid = () => title && contactReason && message;

// //   const handleOk = () => {
// //     setContactReason(selectedReason);
// //     setModalVisible(false);
// //   };

// //   const handleCancel = () => {
// //     setModalVisible(false);
// //   };

// //   const validateTitle = (text) => {
// //     setTitle(text);
// //     if (text.length === 0) {
// //       setShowTitleError('This field cannot be empty.');
// //     } else if (text.length < 2) {
// //       setShowTitleError('Enter minimum 2 letters.');
// //     } else {
// //       setShowTitleError('');
// //     }
// //   };

// //   const handleSubmit = () => {
// //     if (isFormValid()) {
// //       setThankYouModalVisible(true);
// //     }
// //   };

// //   const handleThankYouOk = () => {
// //     setThankYouModalVisible(false);
// //     // Optionally, reset form fields or navigate to another screen
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.headerContainer}>
// //         <TouchableOpacity style={styles.backButton} onPress={() => {/* handle back action */}}>
// //           <Image source={require('../assets/img/back.png')} style={styles.backIcon} />
// //         </TouchableOpacity>
// //         <Text style={styles.header}>Contact Us</Text>
// //       </View>

// //       <ScrollView contentContainerStyle={styles.scrollViewContent}>
// //         <View style={styles.inputContainer}>
// //           <View style={styles.iconContainer}>
// //             <Image source={require('../assets/img/Title.png')} style={styles.icon} />
// //           </View>
// //           <TextInput
// //             style={styles.input}
// //             placeholder="Title"
// //             value={title}
// //             onChangeText={(text) => validateTitle(text)}
// //             onBlur={() => validateTitle(title)}
// //           />
// //         </View>
// //         {showTitleError ? <Text style={styles.errorText}>{showTitleError}</Text> : null}

// //         <TouchableOpacity
// //           style={styles.inputContainer}
// //           onPress={() => setModalVisible(true)}
// //           activeOpacity={1}
// //         >
// //           <View style={styles.iconContainer}>
// //             <Image source={require('../assets/img/location (2).png')} style={styles.icons} />
// //           </View>
// //           <TextInput
// //             style={styles.input}
// //             placeholder="Contact Reason"
// //             value={contactReason}
// //             editable={false}
// //             onBlur={() => setShowContactReasonError(!contactReason)}
// //           />
// //           <Image source={require('../assets/img/arrow-down.png')} style={styles.icone} />
// //         </TouchableOpacity>

// //         {showContactReasonError && <Text style={styles.errorText}>This field cannot be empty.</Text>}

// //         <View style={styles.inputContainer}>
// //           <View style={styles.iconContainer}>
// //             <Image source={require('../assets/img/email.png')} style={styles.iconss} />
// //           </View>
// //           <TextInput
// //             style={[styles.input, styles.messageInput]}
// //             placeholder="Message"
// //             value={message}
// //             onChangeText={(text) => {
// //               setMessage(text);
// //               setShowMessageError(text.length > 250);
// //             }}
// //             maxLength={250}
// //             multiline
// //           />
// //         </View>
// //         {showMessageError && <Text style={styles.charLimitText}>Max 250 characters allowed</Text>}

// //         <TouchableOpacity
// //           style={[styles.submitButton, !isFormValid() && styles.disabledButton]}
// //           disabled={!isFormValid()}
// //           onPress={handleSubmit}  // Call handleSubmit here
// //         >
// //           <Text style={styles.submitButtonText}>SEND MESSAGE</Text>
// //         </TouchableOpacity>

// //         <Modal
// //           visible={modalVisible}
// //           transparent={true}
// //           animationType="slide"
// //         >
// //           <View style={styles.modalContainer}>
// //             <View style={styles.modalContent}>
// //               <TouchableOpacity
// //                 style={styles.radioButton}
// //                 onPress={() => setSelectedReason('Software Technology Issues')}
// //               >
// //                 <View style={[styles.radioCircle, selectedReason === 'Software Technology Issues' && styles.selected]}>
// //                   {selectedReason === 'Software Technology Issues' && <View style={styles.selectedDot} />}
// //                 </View>
// //                 <Text style={styles.radioText}>Software Technology Issues</Text>
// //               </TouchableOpacity>
// //               <TouchableOpacity
// //                 style={styles.radioButton}
// //                 onPress={() => setSelectedReason('CAPS Application Issues')}
// //               >
// //                 <View style={[styles.radioCircles, selectedReason === 'CAPS Application Issues' && styles.selected]}>
// //                   {selectedReason === 'CAPS Application Issues' && <View style={styles.selectedDot} />}
// //                 </View>
// //                 <Text style={styles.radioText}>CAPS Application Issues</Text>
// //               </TouchableOpacity>
             
// //               <View style={styles.lineContainer}>
// //                 <View style={styles.horizontalLine} />
// //               </View>
// //               <View style={styles.modalButtons}>
// //                 <TouchableOpacity style={styles.modalButton} onPress={handleCancel}>
// //                   <Text style={styles.modalButtonText}>CANCEL</Text>
// //                 </TouchableOpacity>
// //                 <TouchableOpacity style={styles.modalButton} onPress={handleOk}>
// //                   <Text style={styles.modalButtonText}>OK</Text>
// //                 </TouchableOpacity>
// //               </View>
// //             </View>
// //           </View>
// //         </Modal>
        
// //         <Modal
// //           visible={thankYouModalVisible}
// //           transparent={true}
// //           animationType="slide"
// //         >
// //           <View style={styles.modalContainer}>
// //             <View style={styles.modalContent}>
// //               <Text style={styles.modalHeader}>CAPS</Text>
// //               <Text style={styles.thankYouText}>Thank you for your feedback</Text>
// //               <TouchableOpacity style={styles.modalButton} onPress={handleThankYouOk}>
// //                 <Text style={styles.modalButtonText}>OK</Text>
// //               </TouchableOpacity>
// //             </View>
// //           </View>
// //         </Modal>
// //       </ScrollView>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#f0f0f0',
// //   },
 
// //   headerContainer: {
// //     backgroundColor: '#d9534f',
// //     padding: 20,
// //     alignItems: 'center',
// //     position: 'relative',
// //   },
// //   backButton: {
// //     position: 'absolute',
// //     top: 20,
// //     left: 20,
// //   },
// //   thankYouText: {
// //     fontSize: 16,
// //     marginVertical: 20,
// //     marginTop:0
// //   },
// //   lineContainer: {
// //     width: '100%', // Ensure it takes the full width of the container
// //     alignItems: 'center', // Center the line horizontally
// //     marginVertical: 10, // Adjust the space above and below the line
// //   },

// //   horizontalLine: {
// //     width: '100%', // Adjust the width of the line
// //     height: 1, // Thickness of the line
// //     backgroundColor: '#000', // Color of the line
// //   },
// //   backIcon: {
// //     width: 26,
// //     height: 26,
// //     tintColor: '#fff',
// //   },
// //   header: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //   },
// //   scrollViewContent: {
// //     padding: 20,
// //   },
// //   inputContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     borderWidth: 2,
// //     borderColor: '#ddd',
// //     borderRadius: 8,
// //     marginBottom: 10,
// //     padding: 10,
// //     backgroundColor: '#fff',
// //   },
// //   iconContainer: {
// //     marginRight: 10,
// //   },
// //   icon: {
// //     width: 24,
// //     height: 24,
// //     tintColor: '#d9534f',
// //   },
// //   icons: {
// //     width: 24,
// //     height: 24,
// //   },
// //   icone: {
// //     width: 15,
// //     height: 15,
// //     tintColor: 'grey',
// //   },
// //   iconss: {
// //     width: 24,
// //     height: 24,
// //     tintColor: '#d9534f',
// //     marginTop: -50,
// //   },
// //   input: {
// //     flex: 1,
// //     fontSize: 16,
// //     padding: 5,
// //   },
// //   messageInput: {
// //     height: 100,
// //     textAlignVertical: 'top',
// //   },
// //   errorText: {
// //     color: 'red',
// //     marginBottom: 10,
// //   },
// //   charLimitText: {
// //     color: 'red',
// //     marginBottom: 10,
// //   },
// //   submitButton: {
// //     backgroundColor: '#d9534f',
// //     padding: 15,
// //     borderRadius: 5,
// //     alignItems: 'center',
// //     width: '50%',
// //     alignSelf: 'center',
// //   },
// //   disabledButton: {
// //     backgroundColor: '#ccc',
// //   },
// //   submitButtonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// //   modalContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: 'rgba(0,0,0,0.5)',
// //   },
// //   modalContent: {
// //     width: 300,
// //     backgroundColor: '#fff',
// //     borderRadius: 10,
// //     padding: 20,
// //     alignItems: 'center',
// //   },
// //   modalHeader: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     marginBottom: 20,
// //   },
// //   radioButton: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: 15,
// //   },
// //   radioCircle: {
// //     width: 20,
// //     height: 20,
// //     borderRadius: 10,
// //     borderWidth: 1,
// //     borderColor: '#d9534f',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginRight: 10,
// //   },
// //   radioCircles: {
// //     width: 20,
// //     height: 20,
// //     borderRadius: 10,
// //     borderWidth: 1,
// //     borderColor: '#d9534f',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginRight: 10,
// //     marginLeft: -25
// //   },
// //   selected: {
// //     borderColor: '#d9534f',
// //   },
// //   selectedDot: {
// //     width: 10,
// //     height: 10,
// //     borderRadius: 5,
// //     backgroundColor: '#d9534f',
// //   },
// //   radioText: {
// //     fontSize: 16,
// //   },
// //   modalButtons: {
// //     flexDirection: 'row',
// //     marginTop: 5,
// //     marginLeft: 130
// //   },
// //   modalButton: {
// //     marginHorizontal: 10,
// //   },
// //   modalButtonText: {
// //     fontSize: 16,
// //     color: '#d9534f',
// //     fontWeight: 'bold'
// //   },
// // });

// // export default ContactUsScreen;

// // import React, { useState, useEffect } from 'react';
// // import { View, Text, TextInput, Button, Alert,  StyleSheet, ScrollView } from 'react-native';
// // import { Picker } from '@react-native-picker/picker';
// // import { Api } from '../providers/api/api';
// // import AsyncStorage from '@react-native-async-storage/async-storage';

// // const ContactUsPage = ({ navigation }) => {
// //   const [contactForm, setContactForm] = useState({
// //     title: '',
// //     Contact: '',
// //     message: ''
// //   });
// //   const [validName, setValidName] = useState(false);
// //   const [something, setSomething] = useState(false);
// //   const [userInfo, setUserInfo] = useState(null);

// //   const api = new Api('http://aggressionmanagement.com/api');

// //   useEffect(() => {
// //     // Fetch user info from AsyncStorage on component mount
// //     AsyncStorage.getItem('user').then((result) => {
// //       const parsedResult = JSON.parse(result);
// //       const user_info = {
// //         user_id: parsedResult.user_id,
// //         token: parsedResult.token
// //       };

// //       api.post('/user_info', user_info)
// //         .then((response) => {
// //           const data = response.data;
// //           if (data.subscriptionFlag === 1 && parsedResult.client_id === '0') {
// //             if (data.user_type === 'tester') {
// //               Alert.alert(
// //                 'Expire',
// //                 'Your 60 days Free subscription has ended. Please subscribe.',
// //                 [
// //                   {
// //                     text: 'Cancel',
// //                     onPress: () => {
// //                       AsyncStorage.setItem('user', null);
// //                       navigation.replace('LoginScreen');
// //                     }
// //                   },
// //                   {
// //                     text: 'Continue',
// //                     onPress: () => {
// //                       navigation.replace('SubscriptionScreen');
// //                     }
// //                   }
// //                 ]
// //               );
// //             } else {
// //               navigation.replace('SubscriptionScreen');
// //             }
// //           } else if (data.subscriptionFlag === 1 && parsedResult.client_id === '1') {
// //             AsyncStorage.setItem('user', null);
// //             navigation.replace('LoginScreen');
// //           } else if (data.msg === 'Your account is deactivated, please contact support.') {
// //             AsyncStorage.setItem('user', null);
// //             navigation.replace('LoginScreen');
// //           }
// //         })
// //         .catch((error) => {
// //           console.error('Error fetching user info:', error);
// //         });
// //     });
// //   }, []);

// //   const handleContactSubmit = () => {
// //     setSomething(true);

// //     AsyncStorage.getItem('user').then((result) => {
// //       const res = JSON.parse(result);
// //       const contactInfo = {
// //         token: res.token,
// //         user_id: res.user_id,
// //         firstname: res.firstname,
// //         lastname: res.surname,
// //         email: contactForm.email,
// //         title: contactForm.title,
// //         contact_reason: contactForm.Contact,
// //         message: contactForm.message
// //       };

// //       api.post('/feedback', contactInfo)
// //         .then((response) => {
// //           const result = response.data;
// //           if (result.result === 'failed') {
// //             showAlert(result.result, result.msg);
// //           } else {
// //             showAlert(result.result, result.msg);
// //           }
// //         })
// //         .catch((error) => {
// //           console.error('Error in contact request:', error);
// //         });
// //     });
// //   };

// //   const showAlert = (result: string, msg: string) => {
// //     Alert.alert(
// //       'CAPS',
// //       msg,
// //       [
// //         {
// //           text: 'Ok',
// //           onPress: () => navigation.replace('home')
// //         }
// //       ],
// //       { cancelable: false }
// //     );
// //   };

// //   const handleTextChange = (key: string, value: string) => {
// //     setContactForm({ ...contactForm, [key]: value });
// //     if (key === 'title') {
// //       setValidName(value.trim() !== '');
// //     }
// //   };

// //   return (
// //     <ScrollView contentContainerStyle={styles.container}>
// //       <TextInput
// //         style={styles.input}
// //         placeholder="Name"
// //         value={contactForm.title}
// //         onChangeText={(value) => handleTextChange('title', value)}
// //         maxLength={30}
// //       />
// //       {contactForm.title.length < 2 && <Text style={styles.error}>Enter at least 2 characters.</Text>}

// //       <View style={styles.picker}>
// //         <Picker
// //           selectedValue={contactForm.Contact}
// //           onValueChange={(itemValue) => handleTextChange('Contact', itemValue)}>
// //           <Picker.Item label="Select Contact Reason" value="" />
// //           <Picker.Item label="Software Technology Issues" value="Software Technology Issues" />
// //           <Picker.Item label="CAPS Application Issues" value="CAPS Application Issues" />
// //         </Picker>
// //       </View>

// //       <TextInput
// //         style={[styles.input, styles.textArea]}
// //         placeholder="Message"
// //         value={contactForm.message}
// //         onChangeText={(value) => handleTextChange('message', value)}
// //         maxLength={250}
// //         multiline
// //       />

// //       <Button
// //         title="Send Message"
// //         onPress={handleContactSubmit}
// //         disabled={!validName || something || contactForm.Contact === '' || contactForm.message === ''}
// //       />
// //     </ScrollView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     padding: 20,
// //   },
// //   input: {
// //     height: 45,
// //     borderColor: '#cccccc',
// //     borderWidth: 1,
// //     marginVertical: 8,
// //     paddingLeft: 10,
// //     backgroundColor: 'rgba(255, 255, 255, 0.4)',
// //     borderRadius: 4,
// //     fontSize: 14,
// //   },
// //   picker: {
// //     borderColor: '#cccccc',
// //     borderWidth: 1,
// //     marginVertical: 8,
// //     borderRadius: 4,
// //     backgroundColor: 'rgba(255, 255, 255, 0.4)',
// //   },
// //   textArea: {
// //     height: 100,
// //     textAlignVertical: 'top',
// //     borderColor: '#cccccc',
// //     borderWidth: 1,
// //     marginVertical: 8,
// //     paddingLeft: 10,
// //     backgroundColor: 'rgba(255, 255, 255, 0.4)',
// //     borderRadius: 4,
// //   },
// //   error: {
// //     color: '#9D0808',
// //     fontSize: 12,
// //     paddingLeft: 5,
// //   },
// // });

// // export default ContactUsPage;


// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView, Image, Modal, StatusBar,Linking } from 'react-native';
// import { Api } from '../providers/api/api';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { RadioButton } from 'react-native-paper';
// import * as Yup from 'yup';
// import { useLoader } from '../providers/loader/loader';

// const contactFormSchema = Yup.object().shape({
//   title: Yup.string()
//     .min(2, 'Enter at least 2 characters.')
//     .required('This field cannot be empty.'),
//   Contact: Yup.string()
//     .required('This field cannot be empty.'),
//   message: Yup.string()
//     .min(1, 'This field cannot be empty.')
//     .required('This field cannot be empty.'),
   
// });

// const ContactUsPage = ({ navigation }) => {
//   const [contactForm, setContactForm] = useState({
//     title: '',
//     Contact: '',
//     message: ''
//   });
//   const [userInfo, setUserInfo] = useState(null);
//   const [logoutModalVisible, setLogoutModalVisible] = useState(false);
//   const [reasonModalVisible, setReasonModalVisible] = useState(false);
//   const [thankYouModalVisible, setThankYouModalVisible] = useState(false);
//   const [selectedReason, setSelectedReason] = useState('');
//   const [validForm, setValidForm] = useState(false);
//   const [errorModalVisible, setErrorModalVisible] = useState(false); // New error modal state
//   const [errors, setErrors] = useState({});
//   const [errorMsg, setErrorMsg] = useState(''); // Store error message

//   const [showFooter, setShowFooter] = useState(true);

//   const api = new Api('https://aggressionmanagement.com/api');

//   const { showLoader, hideLoader } = useLoader();

//   useEffect(() => {
//     showLoader(); // Show loader before fetching user info
//     AsyncStorage.getItem('user').then((result) => {
//       const parsedResult = JSON.parse(result);
//       const user_info = {
//         user_id: parsedResult.user_id,
//         token: parsedResult.token
//       };

//       api.post('/user_info', user_info)
//         .then((response) => {
//           const data = response.data;
//           if (data.subscriptionFlag === 1 && parsedResult.client_id === '0') {
//             if (data.user_type === 'tester') {
//               Alert.alert(
//                 'Expire',
//                 'Your 60 days Free subscription has ended. Please subscribe.',
//                 [
//                   {
//                     text: 'Cancel',
//                     onPress: () => {
//                       AsyncStorage.setItem('user', null);
//                       navigation.replace('LoginScreen');
//                     }
//                   },
//                   {
//                     text: 'Continue',
//                     onPress: () => {
//                       navigation.replace('SubscriptionScreen');
//                     }
//                   }
//                 ]
//               );
//             } else {
//               navigation.replace('SubscriptionScreen');
//             }
//           } else if (data.subscriptionFlag === 1 && parsedResult.client_id === '1') {
//             AsyncStorage.setItem('user', null);
//             navigation.replace('LoginScreen');
//           } else if (data.msg === 'Your account is deactivated, please contact support.') {
//             AsyncStorage.setItem('user', null);
//             navigation.replace('LoginScreen');
//           }
//         })
//         .catch((error) => {
//           console.error('Error fetching user info:', error);
//         })
//         .finally(() => {
//           hideLoader(); // Hide loader after fetching data
//         });
//     });
//   }, []);

//   const handleTextChange = (key, value) => {
//     const updatedForm = { ...contactForm, [key]: value };
//     setContactForm(updatedForm);

//     // Validate form on every input change
//     contactFormSchema.validate(updatedForm, { abortEarly: false })
//       .then(() => setValidForm(true))
//       .catch((validationErrors) => {
//         const errorsObj = {};
//         validationErrors.inner.forEach(error => {
//           errorsObj[error.path] = error.message;
//         });
//         setErrors(errorsObj);
//         setValidForm(false);
//       });
  
//     // Alerts for character limits
//     if (key === 'message' && value.length > 250) {
//       Alert.alert('Validation', 'Max 250 characters allowed.');
//     }
//   };

//   const handleContactSubmit = () => {
//     showLoader(); // Show loader before submitting the form
//     contactFormSchema.validate(contactForm)
//       .then(() => {
//         AsyncStorage.getItem('user').then((result) => {
//           const res = JSON.parse(result);
//           const contactInfo = {
//             token: res.token,
//             user_id: res.user_id,
//             firstname: res.firstname,
//             lastname: res.surname,
//             email: contactForm.email,
//             title: contactForm.title,
//             contact_reason: contactForm.Contact,
//             message: contactForm.message
//           };

//           api.post('/feedback', contactInfo)
//             .then((_response) => {
//               const result = _response.data;
//               if (result.result === 'success') {
//                 setThankYouModalVisible(true); // Show thank you modal on success
//               } else {
//                 setErrorMsg(result.msg); // Set error message
//                 setErrorModalVisible(true); // Show error modal
//               }
//             })
//             .catch((error) => {
//               setErrorMsg('An error occurred while sending the message. Please try again later.');
//               setErrorModalVisible(true); // Show error modal on failure
//             })
//             .finally(() => {
//               hideLoader(); // Hide loader after form submission
//             });
//         });
//       })
      
//       .catch((validationErrors) => {
//         const errorsObj = {};
//         validationErrors.inner.forEach(error => {
//           errorsObj[error.path] = error.message;
//         });
//         setErrors(errorsObj);
//         hideLoader(); // Hide loader if validation fails
//       });
//   };

//   // const showAlert = (result, msg) => {
//   //   Alert.alert(
//   //     'CAPS',
//   //     msg,
//   //     [
//   //       {
//   //         text: 'Ok',
//   //         onPress: () => navigation.replace('home')
//   //       }
//   //     ],
//   //     { cancelable: false }
//   //   );
//   // };

//   const handleLogout = () => {
//     setLogoutModalVisible(false);
//     Alert.alert('Logged Out', 'You have been logged out.');
//   };

//   const handleLogoutCancel = () => {
//     setLogoutModalVisible(false);
//   };
  
//   const handleCancel = () => {
//     setReasonModalVisible(false);
//   };

//   const handleOk = () => {
//     setContactForm({ ...contactForm, Contact: selectedReason });
//     setReasonModalVisible(false);
//   };


//   return (
//     <View style={styles.container}>
//       <StatusBar backgroundColor="#9d0808" barStyle="light-content" />
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//           <Image source={require('../assets/img/backarrow.png')} style={styles.backIcon} />
//         </TouchableOpacity>
//         <Text style={styles.headerText}>Contact Us</Text>
//       </View>

//       <ScrollView contentContainerStyle={styles.container}>
//         <View style={styles.inputContainer}>
//           <Image source={require('../assets/img/clipboard.png')} style={styles.icon} />
//           <TextInput
//             style={styles.input}
//             placeholder="Title"
//             value={contactForm.title}
//             onChangeText={(value) => handleTextChange('title', value)}
//             maxLength={30}
//           />
//         </View>
//         {errors.title && <Text style={styles.errorText}>{errors.title}</Text>}
//         {contactForm.title.length < 2 && <Text style={styles.error}></Text>}
        

//         <TouchableOpacity onPress={() => setReasonModalVisible(true)} style={styles.pickerContainer}>
//           <Image source={require('../assets/img/location.png')} style={styles.icon1} />
//           <View style={styles.pickerWrapper}>
//             <Text style={styles.pickerText}>
//               {contactForm.Contact || "Contact Reason"}
//             </Text>
//           </View>
//           <TouchableOpacity style={styles.dropdownButton} onPress={() => setReasonModalVisible(true)}>
//             <Image source={require('../assets/img/dropdownarrow.png')} style={styles.dropdownIcon} />
//           </TouchableOpacity>
//         </TouchableOpacity>
//         {errors.Contact && <Text style={styles.errorText}>{errors.Contact}</Text>}
        

//         <View style={styles.inputContainer}>
//           <Image source={require('../assets/img/mail.png')} style={styles.icon} />
//           <TextInput
//             style={[styles.input, styles.textArea]}
//             placeholder="Message"
//             value={contactForm.message}
//             onChangeText={(value) => handleTextChange('message', value)}
//             maxLength={250}
//             multiline
//           />
//         </View>
//          <Text style={styles.errorText}>Max 250 characters allowed.</Text>
//          {errors.message && <Text style={styles.errorText}>{errors.message}</Text>}
         
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             style={[styles.createButton, { backgroundColor: validForm ? '#9d0808' : '#D1919B' }]}
//             onPress={handleContactSubmit}
//             disabled={!validForm}
//           >
//             <Text style={styles.createButtonText}>Send Message</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>

//       {/* Logout Modal */}
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
//             <Text style={styles.modalTitle}>Confirm Logout</Text>
//             <Text style={styles.modalText}>Are you sure you want to log out?</Text>
//             <View style={styles.modalButtonContainer}>
//               <TouchableOpacity style={styles.modalButton} onPress={handleLogout}>
//                 <Text style={styles.modalButtonText}>Yes</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.modalButton} onPress={handleLogoutCancel}>
//                 <Text style={styles.modalButtonText}>No</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>

//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={reasonModalVisible}
//         onRequestClose={() => setReasonModalVisible(false)}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             {/* <Text style={styles.modalTitle}>Select Contact Reason</Text> */}
//             <View style={styles.radioButtonContainer}>
//               {['Software Technology Issues', 'CAPS Application Issues'].map((item) => (
//                 <TouchableOpacity key={item} style={styles.radioButton} onPress={() => setSelectedReason(item)}>
//                   <RadioButton
//                     value={item}
//                     status={selectedReason === item ? 'checked' : 'unchecked'}
//                     onPress={() => setSelectedReason(item)}
//                   />
//                   <Text>{item}</Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//             <View style={styles.modalButtonContainer1}>
//               <TouchableOpacity style={styles.modalButton1} onPress={handleCancel}>
//                 <Text style={styles.modalButtonText1}>Cancel</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.modalButton1} onPress={handleOk}>
//                 <Text style={styles.modalButtonText1}>OK</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={thankYouModalVisible}
//         onRequestClose={() => setThankYouModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>CAPS</Text>
//             <Text style={styles.modalMessage}>Thank you for your feedback</Text>
//             <TouchableOpacity
//               style={styles.modalButton}
//               onPress={() => {
//                 setThankYouModalVisible(false);
//                 navigation.replace('home'); // Navigate to home after closing modal
//               }}
//             >
//               <Text style={styles.modalButtonText}>OK</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={errorModalVisible}
//         onRequestClose={() => setErrorModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>Error</Text>
//             <Text style={styles.modalMessage}>{errorMsg}</Text>
//             <TouchableOpacity
//               style={styles.modalButton}
//               onPress={() => setErrorModalVisible(false)}
//             >
//               <Text style={styles.modalButtonText}>OK</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };
    

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f2f2f2',
//   },
//   header: {
//     height: 60,
//     backgroundColor: '#9d0808',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom:15,

//   },
//   backButton: {
//     position: 'absolute',
//     left: 10,
//   },
//   backIcon: {
//     width: 24,
//     height: 24,
//     tintColor: 'white',
//   },
//   headerText: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   inputContainer: {
//     marginVertical: 10,
//      marginHorizontal: 15,
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 5,
//     // padding: 5,
//     backgroundColor: '#fff',
//   },
//   icon: {
//     width: 15,
//     height: 15,
//     marginRight: 20,
//     marginLeft: 10,
//     tintColor:'#9d0808',
//   },
//   icon1: {
//     width: 15,
//     height: 15,
//     marginRight: 20,
//     marginLeft: 0,
//     tintColor:'#9d0808',
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//   },
//   error: {
//     color: '#9d0808',
//     marginLeft: 20,
//   },
//   pickerContainer: {
//     flexDirection: 'row', // Align items horizontally
//     alignItems: 'center', // Align items vertically in the center
//     padding: 7, 
//     marginVertical: 5,
//     marginHorizontal: 15,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 5,
//     backgroundColor: '#fff',         // Add padding around the container
//   },
//   pickerWrapper: {
//     flex: 1,              // Make the picker take the remaining space
//   },
//   pickerText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   textArea: {
//     height: 100,
 
//   },
//   icone: {
//     width: 18,
//     height: 18,
//     marginRight: 10,
//     tintColor:'#9d0808',
    
//   },
//   characterLimit: {
//     marginHorizontal:  20,
//     color: '#9d0808',
//   },
//   buttonContainer: {
//     marginTop: 20,
//     marginHorizontal: 20,
//   },
//   createButton: {
//     backgroundColor: '#9d0808',
//     paddingVertical: 15,
//     marginHorizontal:85,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   createButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   footer: {
//     height: 60,
//     backgroundColor: '#9d0808',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
//   footerButton: {
//     padding: 10,
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
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalView: {
//     width: 300,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 20,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   modalText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: 'black',
//   },
//   modalMessage: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   modalButton: {
//     padding: 10,
//     borderRadius: 5,
//     backgroundColor: '#9d0808',
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: 'black',
//   },
  
//   modalButtonContainer: {
//     flexDirection: 'row',
//   },
 
//   modalButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   radioButtonContainer: {
//     width: '100%',
//   },
//   radioButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 5,
//   },
//   thankYouText: {
//     fontSize: 20,
//     marginBottom: 20,
//   },
//   dropdownButton: {
//     padding: 10,
    
    
//   },
 
//   dropdownIcon:{
//     width: 18,
//     height: 18,
//     tintColor:'black',
//     alignItems:'flex-end'
    
//   },
//   errorText: {
//     color: 'red',
//     // marginBottom: 10,
//     marginLeft:15,
//   },
//   modalButtonContainer1: {
//     flexDirection: 'row',
//     borderTopWidth: 1,
//     borderTopColor:'#000',
//     top:15, 
//   },
//   modalButton1: {
//     borderRadius: 5,
//     padding: 15,
//     paddingHorizontal:50,
//     top:10,
  
//   },
//   modalButtonText1: {
//     color: '#9d0808',
//     fontSize: 18,
//     fontWeight:'bold',
//   },
//   successButton: {
//     backgroundColor: '#9d0808',
//   },
// });

// export default ContactUsPage;


import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView, Image, Modal, StatusBar,Linking,KeyboardAvoidingView, Platform } from 'react-native';
import { Api } from '../providers/api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RadioButton } from 'react-native-paper';
import * as Yup from 'yup';
import { useLoader } from '../providers/loader/loader';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const contactFormSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Enter at least 2 characters.')
    .required('This field cannot be empty.'),
  Contact: Yup.string()
    .required('This field cannot be empty.'),
  message: Yup.string()
    .min(1, 'This field cannot be empty.')
    .required('This field cannot be empty.'),
   
});

const ContactUsPage = ({ navigation }) => {
  const [contactForm, setContactForm] = useState({
    title: '',
    Contact: '',
    message: ''
  });
  const [userInfo, setUserInfo] = useState(null);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [reasonModalVisible, setReasonModalVisible] = useState(false);
  const [thankYouModalVisible, setThankYouModalVisible] = useState(false);
  const [selectedReason, setSelectedReason] = useState('');
  const [validForm, setValidForm] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false); // New error modal state
  const [errors, setErrors] = useState({});
  const [errorMsg, setErrorMsg] = useState(''); // Store error message

  const [showFooter, setShowFooter] = useState(true);

  const api = new Api('https://aggressionmanagement.com/api');

  const { showLoader, hideLoader } = useLoader();

  useEffect(() => {
    showLoader(); // Show loader before fetching user info
    AsyncStorage.getItem('user').then((result) => {
      const parsedResult = JSON.parse(result);
      const user_info = {
        user_id: parsedResult.user_id,
        token: parsedResult.token
      };

      api.post('/user_info', user_info)
        .then((response) => {
          const data = response.data;
          if (data.subscriptionFlag === 1 && parsedResult.client_id === '0') {
            if (data.user_type === 'tester') {
              Alert.alert(
                'Expire',
                'Your 60 days Free subscription has ended. Please subscribe.',
                [
                  {
                    text: 'Cancel',
                    onPress: () => {
                      AsyncStorage.setItem('user', null);
                      navigation.replace('Login');
                    }
                  },
                  {
                    text: 'Continue',
                    onPress: () => {
                      navigation.replace('sub');
                    }
                  }
                ]
              );
            } else {
              navigation.replace('sub');
            }
          } else if (data.subscriptionFlag === 1 && parsedResult.client_id === '1') {
            AsyncStorage.setItem('user', null);
            navigation.replace('Login');
          } else if (data.msg === 'Your account is deactivated, please contact support.') {
            AsyncStorage.setItem('user', null);
            navigation.replace('Login');
          }
        })
        .catch((error) => {
          console.error('Error fetching user info:', error);
        })
        .finally(() => {
          hideLoader(); // Hide loader after fetching data
        });
    });
  }, []);

  const handleTextChange = (key, value) => {
    // Allow only letters in the title
    if (key === 'title') {
      const regex = /^[a-zA-Z\s]*$/; // Regular expression to allow only letters and spaces
      if (!regex.test(value)) {
        setErrors((prev) => ({
          ...prev,
          title: 'Title must contain only letters.',
        }));
        setValidForm(false);
        return; // Stop further processing
      } else {
        // Clear the error if the input is valid
        setErrors((prev) => ({ ...prev, title: undefined }));
      }
    }
  
    const updatedForm = { ...contactForm, [key]: value };
    setContactForm(updatedForm);
  
    // Validate form on every input change
    contactFormSchema.validate(updatedForm, { abortEarly: false })
      .then(() => setValidForm(true))
      .catch((validationErrors) => {
        const errorsObj = {};
        validationErrors.inner.forEach(error => {
          errorsObj[error.path] = error.message;
        });
        setErrors(errorsObj);
        setValidForm(false);
      });
  
    // Alerts for character limits
    if (key === 'message' && value.length > 250) {
      Alert.alert('Validation', 'Max 250 characters allowed.');
    }
  };

  const handleContactSubmit = () => {
    showLoader(); // Show loader before submitting the form
    contactFormSchema.validate(contactForm)
      .then(() => {
        AsyncStorage.getItem('user').then((result) => {
          const res = JSON.parse(result);
          const contactInfo = {
            token: res.token,
            user_id: res.user_id,
            firstname: res.firstname,
            lastname: res.surname,
            email: contactForm.email,
            title: contactForm.title,
            contact_reason: contactForm.Contact,
            message: contactForm.message
          };

          api.post('/feedback', contactInfo)
            .then((_response) => {
              const result = _response.data;
              if (result.result === 'success') {
                setThankYouModalVisible(true); // Show thank you modal on success
              } else {
                setErrorMsg(result.msg); // Set error message
                setErrorModalVisible(true); // Show error modal
              }
            })
            .catch((error) => {
              setErrorMsg('An error occurred while sending the message. Please try again later.');
              setErrorModalVisible(true); // Show error modal on failure
            })
            .finally(() => {
              hideLoader(); // Hide loader after form submission
            });
        });
      })
      
      .catch((validationErrors) => {
        const errorsObj = {};
        validationErrors.inner.forEach(error => {
          errorsObj[error.path] = error.message;
        });
        setErrors(errorsObj);
        hideLoader(); // Hide loader if validation fails
      });
  };

  // const showAlert = (result, msg) => {
  //   Alert.alert(
  //     'CAPS',
  //     msg,
  //     [
  //       {
  //         text: 'Ok',
  //         onPress: () => navigation.replace('home')
  //       }
  //     ],
  //     { cancelable: false }
  //   );
  // };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  const handleLogoutCancel = () => {
    setLogoutModalVisible(false);
  };
  
  const handleCancel = () => {
    setReasonModalVisible(false);
  };

  const handleOk = () => {
    setContactForm({ ...contactForm, Contact: selectedReason });
    setReasonModalVisible(false);
  };


  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StatusBar backgroundColor="#9d0808" barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={require('../assets/img/backarrow.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Contact Us</Text>
      </View>
      <View style={styles.contentContainer}>
<ScrollView 
contentContainerStyle={styles.scrollViewContent}
keyboardShouldPersistTaps="handled"
showsVerticalScrollIndicator={false}
>
        <View style={styles.inputContainer}>
          <Image source={require('../assets/img/clipboard.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Title"
              placeholderTextColor="grey"
            value={contactForm.title}
            onChangeText={(value) => handleTextChange('title', value)}
            maxLength={30}
          />
        </View>
        {errors.title && <Text style={styles.errorText}>{errors.title}</Text>}
        {contactForm.title.length < 2 && <Text style={styles.error}></Text>}
        

        <TouchableOpacity onPress={() => setReasonModalVisible(true)} style={styles.pickerContainer}>
          <Image source={require('../assets/img/location.png')} style={styles.icon1} />
          <View style={styles.pickerWrapper}>
            <Text style={styles.pickerText}>
              {contactForm.Contact || "Contact Reason"}
            </Text>
          </View>
          <TouchableOpacity style={styles.dropdownButton} onPress={() => setReasonModalVisible(true)}>
            <Image source={require('../assets/img/dropdownarrow.png')} style={styles.dropdownIcon} />
          </TouchableOpacity>
        </TouchableOpacity>
        {errors.Contact && <Text style={styles.errorText}>{errors.Contact}</Text>}
        

        <View style={styles.inputContainer}>
          <Image source={require('../assets/img/mail.png')} style={styles.icon} />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Message"
              placeholderTextColor="gray"
            value={contactForm.message}
            onChangeText={(value) => handleTextChange('message', value)}
            maxLength={250}
            multiline
          />
        </View>
         <Text style={styles.errorText1}>Max 250 characters allowed.</Text>
         {errors.message && <Text style={styles.errorText}>{errors.message}</Text>}
         
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.createButton, { backgroundColor: validForm ? '#9d0808' : '#D1919B' }]}
            onPress={handleContactSubmit}
            disabled={!validForm}
          >
            <Text style={styles.createButtonText}>Send Message</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('home')}>
            <Image source={require('../assets/img/home_icon.png')} style={styles.footerIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton} onPress={() => Linking.openURL('tel:911')}>
            <Image source={require('../assets/img/call_icon.png')} style={styles.footerIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Sharedcases')}>
            <Image source={require('../assets/img/Profile-icon.png')} style={styles.footerIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('EditProfile')}>
            <Image source={require('../assets/img/edit_icon.png')} style={styles.footerIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton} onPress={() => setLogoutModalVisible(true)}>
            <Image source={require('../assets/img/logout.png')} style={styles.footerIcon} />
          </TouchableOpacity>
        </View>
        </View>
      
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
              <TouchableOpacity style={styles.modalButton} onPress={handleLogout}>
                <Text style={styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={handleLogoutCancel}>
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={reasonModalVisible}
        onRequestClose={() => setReasonModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* <Text style={styles.modalTitle}>Select Contact Reason</Text> */}
            <View style={styles.radioButtonContainer}>
              {['Software Technology Issues', 'CAPS Application Issues'].map((item) => (
                <TouchableOpacity key={item} style={styles.radioButton} onPress={() => setSelectedReason(item)}>
                  <RadioButton
                    value={item}
                    status={selectedReason === item ? 'checked' : 'unchecked'}
                    onPress={() => setSelectedReason(item)}
                  />
                   <Text style={{ color: 'black' }}>{item}</Text> 
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.modalButtonContainer1}>
              <TouchableOpacity style={styles.modalButton1} onPress={handleCancel}>
                <Text style={styles.modalButtonText1}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton1} onPress={handleOk}>
                <Text style={styles.modalButtonText1}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={thankYouModalVisible}
        onRequestClose={() => setThankYouModalVisible(false)}
      >
          <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitles}>CAPS</Text>
            <Text style={styles.modalText}>Thank you for your feedback</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setThankYouModalVisible(false);
                navigation.replace('home'); // Navigate to home after closing modal
              }}
            >
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={errorModalVisible}
        onRequestClose={() => setErrorModalVisible(false)}
      >
          <View style={styles.centeredView}>
        
          <View style={styles.modalView}>
            <Text style={styles.modalTitles}>Error</Text>
            <Text style={styles.modalText}>{errorMsg}</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setErrorModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </Modal>
 </KeyboardAvoidingView>
  );
};
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingBottom: 100, // Add padding to avoid overlap with the footer
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between', // Ensure space is distributed between scrollable content and footer
  },
  header: {
    height: hp('8%'), // Height is 8% of the screen height
    backgroundColor: '#9d0808',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp('2%'), // Margin bottom is 2% of the screen height
  },
  backButton: {
    position: 'absolute',
    left: wp('2.5%'), // Left margin is 2% of the screen width
  },
  backIcon: {
    width: wp('7%'), // Width is 6% of the screen width
    height: wp('7%'), // Height is 6% of the screen width
    tintColor: 'white',
  },
  headerText: {
    color: 'white',
    fontSize: wp('5%'), // Font size is 5% of the screen width
    fontWeight: 'bold',
  },
  inputContainer: {
    marginVertical: hp('1%'), // Vertical margin is 1% of the screen height
    marginHorizontal: wp('4%'), // Horizontal margin is 4% of the screen width
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  icon: {
    width: wp('4%'), // Width is 4% of the screen width
    height: wp('4%'), // Height is 4% of the screen width
    marginRight: wp('5%'), // Right margin is 5% of the screen width
    marginLeft: wp('2%'), // Left margin is 2% of the screen width
    tintColor: '#9d0808',
  },
  icon1: {
    width: wp('4%'),
    height: wp('4%'),
    marginRight: wp('5%'),
    marginLeft: 0,
    tintColor: '#9d0808',
  },
  input: {
    flex: 1,
    fontSize: wp('4%'), // Font size is 4% of the screen width
    color: 'black',
  },
  error: {
    color: '#9d0808',
    marginLeft: wp('5%'), // Left margin is 5% of the screen width
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: hp('1%'), // Padding is 1% of the screen height
    marginVertical: hp('1%'),
    marginHorizontal: wp('4%'),
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  pickerWrapper: {
    flex: 1,
  },
  pickerText: {
    fontSize: wp('4%'), // Font size is 4% of the screen width
    color: '#333',
  },
  textArea: {
    height: hp('15%'), // Height is 15% of the screen height
  },
  icone: {
    width: wp('5%'), // Width is 5% of the screen width
    height: wp('5%'), // Height is 5% of the screen width
    marginRight: wp('2%'),
    tintColor: '#9d0808',
  },
  characterLimit: {
    marginHorizontal: wp('5%'), // Horizontal margin is 5% of the screen width
    color: '#9d0808',
  },
  buttonContainer: {
    marginTop: hp('2%'), // Top margin is 2% of the screen height
    marginHorizontal: wp('5%'), // Horizontal margin is 5% of the screen width
  },
  createButton: {
    backgroundColor: '#9d0808',
    paddingVertical: hp('2%'), // Vertical padding is 2% of the screen height
    marginHorizontal: wp('24%'), // Horizontal margin is  20% of the screen width
    borderRadius: 10,
    alignItems: 'center',
  },
  createButtonText: {
    color: 'white',
    fontSize: wp('4%'), // Font size is 5% of the screen width
    fontWeight: 'bold',
  },
  footer: {
    height: hp('8%'), // Height is 8% of the screen height
    backgroundColor: '#9d0808',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footerButton: {
    padding: hp('1%'), // Padding is 1% of the screen height
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
    margin: wp('5%'), // Margin is 5% of the screen width
    backgroundColor: 'white',
    borderRadius: 10,
    padding: hp('5%'), // Padding is 5% of the screen height
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitles: {
    fontSize: wp('5%'), // Font size is 5% of the screen width
    fontWeight: 'bold',
    marginBottom: hp('2%'), // Margin bottom is 2% of the screen height
    color: 'black',
  },
  modalText: {
    fontSize: wp('4%'), // Font size is 4% of the screen width
    marginBottom: hp('2%'), // Margin bottom is 2% of the screen height
    color: 'black',
  },
  modalText1: {
    fontSize: wp('4%'), // Font size is 4% of the screen width
    marginBottom: hp('2%'), // Margin bottom is 2% of the screen height
    fontWeight: 'bold',
  },
  modalButtonContainer: {
    flexDirection: 'row',
  },
  modalButton: {
    borderRadius: 5,
    padding: hp('2%'), // Padding is 2% of the screen height
    marginHorizontal: wp('8%'), // Horizontal margin is 2% of the screen width
    backgroundColor: '#9D0808',
  },
  modalButtonText: {
    color: 'white',
    fontSize: wp('4%'), // Font size is 4% of the screen width
  },
  radioButtonContainer: {
    width: '100%',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp('1%'), // Vertical margin is 1% of the screen height
  },
  thankYouText: {
    fontSize: wp('5%'), // Font size is 5% of the screen width
    marginBottom: hp('2%'), // Margin bottom is 2% of the screen height
  },
  dropdownButton: {
    padding: hp('1%'), // Padding is 1% of the screen height
    color: 'black',
  },
  dropdownIcon: {
    width: wp('5%'), // Width is 5% of the screen width
    height: wp('5%'), // Height is 5% of the screen width
    tintColor: 'grey',
    alignItems: 'flex-end',
  },
  errorText: {
    color: 'red',
    marginLeft: wp('5%'),
    fontSize: wp('3%'), // Left margin is 5% of the screen width
  },
  errorText1: {
    color: 'red',
    marginBottom: hp('2%'), 
    marginLeft: wp('5%'),
    fontSize: wp('3%'), // Left margin is 5% of the screen width
  },
  modalButtonContainer1: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#000',
    top: hp('2%'), // Top margin is 2% of the screen height
  },
  modalButton1: {
    borderRadius: 5,
    padding: hp('2%'), // Padding is 2% of the screen height
    paddingHorizontal: wp('10%'), // Horizontal padding is 10% of the screen width
    top: hp('1%'), // Top margin is 1% of the screen height
  },
  modalButtonText1: {
    color: '#9d0808',
 fontSize: wp('4%'), // Font size is 4% of the screen width
    fontWeight: 'bold',
  },
  successButton: {
    backgroundColor: '#9d0808',
  },
});

export default ContactUsPage;