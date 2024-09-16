// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Modal } from 'react-native';

// const ContactUsScreen = () => {
//   const [title, setTitle] = useState('');
//   const [thankYouModalVisible, setThankYouModalVisible] = useState(false);

//   const [contactReason, setContactReason] = useState('');
//   const [message, setMessage] = useState('');
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedReason, setSelectedReason] = useState('');
//   const [showTitleError, setShowTitleError] = useState(false);
//   const [showContactReasonError, setShowContactReasonError] = useState(false);
//   const [showMessageError, setShowMessageError] = useState(false);
  
//   const isFormValid = () => title && contactReason && message;

//   const handleOk = () => {
//     setContactReason(selectedReason);
//     setModalVisible(false);
//   };

//   const handleCancel = () => {
//     setModalVisible(false);
//   };

//   const validateTitle = (text) => {
//     const valid = /^[A-Za-z\s]{0,25}$/.test(text);
//     if (text.length < 2 || !valid) {
//       setShowTitleError(true);
//     } else {
//       setShowTitleError(false);
//     }
//     setTitle(text);  // Ensure title is updated with the input text
//   };

//   const handleSubmit = () => {
//     if (isFormValid()) {
//       setThankYouModalVisible(true);
//     }
//   };

//   const handleThankYouOk = () => {
//     setThankYouModalVisible(false);
//     // Optionally, reset form fields or navigate to another screen
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.headerContainer}>
//         <TouchableOpacity style={styles.backButton} onPress={() => {/* handle back action */}}>
//           <Image source={require('./images/back.png')} style={styles.backIcon} />
//         </TouchableOpacity>
//         <Text style={styles.header}>Contact Us</Text>
//       </View>

//       <ScrollView contentContainerStyle={styles.scrollViewContent}>
//         <View style={styles.inputContainer}>
//           <View style={styles.iconContainer}>
//             <Image source={require('./images/Title.png')} style={styles.icon} />
//           </View>
//           <TextInput
//             style={styles.input}
//             placeholder="Title"
//             value={title}
//             onChangeText={(text) => validateTitle(text)}
//             onBlur={() => setShowTitleError(!title)}
//           />
//         </View>
//         {showTitleError && <Text style={styles.errorText}>Enter minimum 2 letters</Text>}

//         <TouchableOpacity
//           style={styles.inputContainer}
//           onPress={() => setModalVisible(true)}
//           activeOpacity={1}
//         >
//           <View style={styles.iconContainer}>
//             <Image source={require('./images/location (2).png')} style={styles.icons} />
//           </View>
//           <TextInput
//             style={styles.input}
//             placeholder="Contact Reason"
//             value={contactReason}
//             editable={false}
//             onBlur={() => setShowContactReasonError(!contactReason)}
//           />
//           <Image source={require('./images/down_arrow.png')} style={styles.icone} />
//         </TouchableOpacity>

//         {showContactReasonError && <Text style={styles.errorText}>This field cannot be empty.</Text>}

//         <View style={styles.inputContainer}>
//           <View style={styles.iconContainer}>
//             <Image source={require('./images/email.png')} style={styles.iconss} />
//           </View>
//           <TextInput
//             style={[styles.input, styles.messageInput]}
//             placeholder="Message"
//             value={message}
//             onChangeText={(text) => {
//               setMessage(text);
//               setShowMessageError(true);
//             }}
//             maxLength={250}
//             multiline
//           />
//         </View>
//         {showMessageError && <Text style={styles.charLimitText}>Max 250 characters allowed</Text>}

//         <TouchableOpacity
//           style={[styles.submitButton, !isFormValid() && styles.disabledButton]}
//           disabled={!isFormValid()}
//           onPress={handleSubmit}  // Call handleSubmit here
//         >
//           <Text style={styles.submitButtonText}>SEND MESSAGE</Text>
//         </TouchableOpacity>

//         <Modal
//           visible={modalVisible}
//           transparent={true}
//           animationType="slide"
//         >
//           <View style={styles.modalContainer}>
//             <View style={styles.modalContent}>
//               <TouchableOpacity
//                 style={styles.radioButton}
//                 onPress={() => setSelectedReason('Software Technology Issues')}
//               >
//                 <View style={[styles.radioCircle, selectedReason === 'Software Technology Issues' && styles.selected]}>
//                   {selectedReason === 'Software Technology Issues' && <View style={styles.selectedDot} />}
//                 </View>
//                 <Text style={styles.radioText}>Software Technology Issues</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.radioButton}
//                 onPress={() => setSelectedReason('CAPS Application Issues')}
//               >
//                 <View style={[styles.radioCircles, selectedReason === 'CAPS Application Issues' && styles.selected]}>
//                   {selectedReason === 'CAPS Application Issues' && <View style={styles.selectedDot} />}
//                 </View>
//                 <Text style={styles.radioText}>CAPS Application Issues</Text>
//               </TouchableOpacity>
             
//               <View style={styles.lineContainer}>
//                 <View style={styles.horizontalLine} />
//               </View>
//               <View style={styles.modalButtons}>
//                 <TouchableOpacity style={styles.modalButton} onPress={handleCancel}>
//                   <Text style={styles.modalButtonText}>CANCEL</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.modalButton} onPress={handleOk}>
//                   <Text style={styles.modalButtonText}>OK</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </Modal>
        
//         <Modal
//           visible={thankYouModalVisible}
//           transparent={true}
//           animationType="slide"
//         >
//           <View style={styles.modalContainer}>
//             <View style={styles.modalContent}>
//               <Text style={styles.modalHeader}>CAPS</Text>
//               <Text style={styles.thankYouText}>Thank you for your feedback</Text>
//               <TouchableOpacity style={styles.modalButton} onPress={handleThankYouOk}>
//                 <Text style={styles.modalButtonText}>OK</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//   },
 
//   headerContainer: {
//     backgroundColor: '#d9534f',
//     padding: 20,
//     alignItems: 'center',
//     position: 'relative',
//   },
//   backButton: {
//     position: 'absolute',
//     top: 20,
//     left: 20,
//   },
//   thankYouText: {
//     fontSize: 16,
//     marginVertical: 20,
//     marginTop:0
//   },
//   lineContainer: {
//     width: '100%', // Ensure it takes the full width of the container
//     alignItems: 'center', // Center the line horizontally
//     marginVertical: 10, // Adjust the space above and below the line
//   },

//   horizontalLine: {
//     width: '100%', // Adjust the width of the line
//     height: 1, // Thickness of the line
//     backgroundColor: '#000', // Color of the line
//   },
//   backIcon: {
//     width: 26,
//     height: 26,
//     tintColor: '#fff',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   scrollViewContent: {
//     padding: 20,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 2,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     marginBottom: 10,
//     padding: 10,
//     backgroundColor: '#fff',
//   },
//   iconContainer: {
//     marginRight: 10,
//   },
//   icon: {
//     width: 24,
//     height: 24,
//     tintColor: '#d9534f',
//   },
//   icons: {
//     width: 24,
//     height: 24,
//   },
//   icone: {
//     width: 15,
//     height: 15,
//     tintColor: 'grey',
//   },
//   iconss: {
//     width: 24,
//     height: 24,
//     tintColor: '#d9534f',
//     marginTop: -50,
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//     padding: 5,
//   },
//   messageInput: {
//     height: 100,
//     textAlignVertical: 'top',
//   },
//   errorText: {
//     color: 'red',
//     marginBottom: 10,
//   },
//   charLimitText: {
//     color: 'red',
//     marginBottom: 10,
//   },
//   submitButton: {
//     backgroundColor: '#d9534f',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//     width: '50%',
//     alignSelf: 'center',
//   },
//   disabledButton: {
//     backgroundColor: '#ccc',
//   },
//   submitButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     width: 300,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 20,
//     alignItems: 'center',
//   },
//   modalHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   radioButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   radioCircle: {
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#d9534f',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   radioCircles: {
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#d9534f',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//     marginLeft: -25
//   },
//   selected: {
//     borderColor: '#d9534f',
//   },
//   selectedDot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: '#d9534f',
//   },
//   radioText: {
//     fontSize: 16,
//   },
//   modalButtons: {
//     flexDirection: 'row',
//     marginTop: 5,
//     marginLeft: 130
//   },
//   modalButton: {
//     marginHorizontal: 10,
//   },
//   modalButtonText: {
//     fontSize: 16,
//     color: '#d9534f',
//     fontWeight: 'bold'
//   },
// });

// export default ContactUsScreen;

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Modal } from 'react-native';

// const ContactUsScreen = () => {
//   const [title, setTitle] = useState('');
//   const [thankYouModalVisible, setThankYouModalVisible] = useState(false);
//   const [contactReason, setContactReason] = useState('');
//   const [message, setMessage] = useState('');
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedReason, setSelectedReason] = useState('');
//   const [showTitleError, setShowTitleError] = useState('');
//   const [showContactReasonError, setShowContactReasonError] = useState(false);
//   const [showMessageError, setShowMessageError] = useState(false);

//   const isFormValid = () => title && contactReason && message;

//   const handleOk = () => {
//     setContactReason(selectedReason);
//     setModalVisible(false);
//   };

//   const handleCancel = () => {
//     setModalVisible(false);
//   };

//   const validateTitle = (text) => {
//     setTitle(text);
//     if (text.length === 0) {
//       setShowTitleError('This field cannot be empty.');
//     } else if (text.length < 2) {
//       setShowTitleError('Enter minimum 2 letters.');
//     } else {
//       setShowTitleError('');
//     }
//   };

//   const handleSubmit = () => {
//     if (isFormValid()) {
//       setThankYouModalVisible(true);
//     }
//   };

//   const handleThankYouOk = () => {
//     setThankYouModalVisible(false);
//     // Optionally, reset form fields or navigate to another screen
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.headerContainer}>
//         <TouchableOpacity style={styles.backButton} onPress={() => {/* handle back action */}}>
//           <Image source={require('../assets/img/back.png')} style={styles.backIcon} />
//         </TouchableOpacity>
//         <Text style={styles.header}>Contact Us</Text>
//       </View>

//       <ScrollView contentContainerStyle={styles.scrollViewContent}>
//         <View style={styles.inputContainer}>
//           <View style={styles.iconContainer}>
//             <Image source={require('../assets/img/Title.png')} style={styles.icon} />
//           </View>
//           <TextInput
//             style={styles.input}
//             placeholder="Title"
//             value={title}
//             onChangeText={(text) => validateTitle(text)}
//             onBlur={() => validateTitle(title)}
//           />
//         </View>
//         {showTitleError ? <Text style={styles.errorText}>{showTitleError}</Text> : null}

//         <TouchableOpacity
//           style={styles.inputContainer}
//           onPress={() => setModalVisible(true)}
//           activeOpacity={1}
//         >
//           <View style={styles.iconContainer}>
//             <Image source={require('../assets/img/location (2).png')} style={styles.icons} />
//           </View>
//           <TextInput
//             style={styles.input}
//             placeholder="Contact Reason"
//             value={contactReason}
//             editable={false}
//             onBlur={() => setShowContactReasonError(!contactReason)}
//           />
//           <Image source={require('../assets/img/arrow-down.png')} style={styles.icone} />
//         </TouchableOpacity>

//         {showContactReasonError && <Text style={styles.errorText}>This field cannot be empty.</Text>}

//         <View style={styles.inputContainer}>
//           <View style={styles.iconContainer}>
//             <Image source={require('../assets/img/email.png')} style={styles.iconss} />
//           </View>
//           <TextInput
//             style={[styles.input, styles.messageInput]}
//             placeholder="Message"
//             value={message}
//             onChangeText={(text) => {
//               setMessage(text);
//               setShowMessageError(text.length > 250);
//             }}
//             maxLength={250}
//             multiline
//           />
//         </View>
//         {showMessageError && <Text style={styles.charLimitText}>Max 250 characters allowed</Text>}

//         <TouchableOpacity
//           style={[styles.submitButton, !isFormValid() && styles.disabledButton]}
//           disabled={!isFormValid()}
//           onPress={handleSubmit}  // Call handleSubmit here
//         >
//           <Text style={styles.submitButtonText}>SEND MESSAGE</Text>
//         </TouchableOpacity>

//         <Modal
//           visible={modalVisible}
//           transparent={true}
//           animationType="slide"
//         >
//           <View style={styles.modalContainer}>
//             <View style={styles.modalContent}>
//               <TouchableOpacity
//                 style={styles.radioButton}
//                 onPress={() => setSelectedReason('Software Technology Issues')}
//               >
//                 <View style={[styles.radioCircle, selectedReason === 'Software Technology Issues' && styles.selected]}>
//                   {selectedReason === 'Software Technology Issues' && <View style={styles.selectedDot} />}
//                 </View>
//                 <Text style={styles.radioText}>Software Technology Issues</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.radioButton}
//                 onPress={() => setSelectedReason('CAPS Application Issues')}
//               >
//                 <View style={[styles.radioCircles, selectedReason === 'CAPS Application Issues' && styles.selected]}>
//                   {selectedReason === 'CAPS Application Issues' && <View style={styles.selectedDot} />}
//                 </View>
//                 <Text style={styles.radioText}>CAPS Application Issues</Text>
//               </TouchableOpacity>
             
//               <View style={styles.lineContainer}>
//                 <View style={styles.horizontalLine} />
//               </View>
//               <View style={styles.modalButtons}>
//                 <TouchableOpacity style={styles.modalButton} onPress={handleCancel}>
//                   <Text style={styles.modalButtonText}>CANCEL</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.modalButton} onPress={handleOk}>
//                   <Text style={styles.modalButtonText}>OK</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </Modal>
        
//         <Modal
//           visible={thankYouModalVisible}
//           transparent={true}
//           animationType="slide"
//         >
//           <View style={styles.modalContainer}>
//             <View style={styles.modalContent}>
//               <Text style={styles.modalHeader}>CAPS</Text>
//               <Text style={styles.thankYouText}>Thank you for your feedback</Text>
//               <TouchableOpacity style={styles.modalButton} onPress={handleThankYouOk}>
//                 <Text style={styles.modalButtonText}>OK</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//   },
 
//   headerContainer: {
//     backgroundColor: '#d9534f',
//     padding: 20,
//     alignItems: 'center',
//     position: 'relative',
//   },
//   backButton: {
//     position: 'absolute',
//     top: 20,
//     left: 20,
//   },
//   thankYouText: {
//     fontSize: 16,
//     marginVertical: 20,
//     marginTop:0
//   },
//   lineContainer: {
//     width: '100%', // Ensure it takes the full width of the container
//     alignItems: 'center', // Center the line horizontally
//     marginVertical: 10, // Adjust the space above and below the line
//   },

//   horizontalLine: {
//     width: '100%', // Adjust the width of the line
//     height: 1, // Thickness of the line
//     backgroundColor: '#000', // Color of the line
//   },
//   backIcon: {
//     width: 26,
//     height: 26,
//     tintColor: '#fff',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   scrollViewContent: {
//     padding: 20,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 2,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     marginBottom: 10,
//     padding: 10,
//     backgroundColor: '#fff',
//   },
//   iconContainer: {
//     marginRight: 10,
//   },
//   icon: {
//     width: 24,
//     height: 24,
//     tintColor: '#d9534f',
//   },
//   icons: {
//     width: 24,
//     height: 24,
//   },
//   icone: {
//     width: 15,
//     height: 15,
//     tintColor: 'grey',
//   },
//   iconss: {
//     width: 24,
//     height: 24,
//     tintColor: '#d9534f',
//     marginTop: -50,
//   },
//   input: {
//     flex: 1,
//     fontSize: 16,
//     padding: 5,
//   },
//   messageInput: {
//     height: 100,
//     textAlignVertical: 'top',
//   },
//   errorText: {
//     color: 'red',
//     marginBottom: 10,
//   },
//   charLimitText: {
//     color: 'red',
//     marginBottom: 10,
//   },
//   submitButton: {
//     backgroundColor: '#d9534f',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//     width: '50%',
//     alignSelf: 'center',
//   },
//   disabledButton: {
//     backgroundColor: '#ccc',
//   },
//   submitButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     width: 300,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 20,
//     alignItems: 'center',
//   },
//   modalHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   radioButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   radioCircle: {
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#d9534f',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   radioCircles: {
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#d9534f',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//     marginLeft: -25
//   },
//   selected: {
//     borderColor: '#d9534f',
//   },
//   selectedDot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: '#d9534f',
//   },
//   radioText: {
//     fontSize: 16,
//   },
//   modalButtons: {
//     flexDirection: 'row',
//     marginTop: 5,
//     marginLeft: 130
//   },
//   modalButton: {
//     marginHorizontal: 10,
//   },
//   modalButtonText: {
//     fontSize: 16,
//     color: '#d9534f',
//     fontWeight: 'bold'
//   },
// });

// export default ContactUsScreen;

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert,  StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Api } from '../providers/api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ContactUsPage = ({ navigation }) => {
  const [contactForm, setContactForm] = useState({
    title: '',
    Contact: '',
    message: ''
  });
  const [validName, setValidName] = useState(false);
  const [something, setSomething] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const api = new Api('http://aggressionmanagement.com/api');

  useEffect(() => {
    // Fetch user info from AsyncStorage on component mount
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
                      navigation.replace('LoginScreen');
                    }
                  },
                  {
                    text: 'Continue',
                    onPress: () => {
                      navigation.replace('SubscriptionScreen');
                    }
                  }
                ]
              );
            } else {
              navigation.replace('SubscriptionScreen');
            }
          } else if (data.subscriptionFlag === 1 && parsedResult.client_id === '1') {
            AsyncStorage.setItem('user', null);
            navigation.replace('LoginScreen');
          } else if (data.msg === 'Your account is deactivated, please contact support.') {
            AsyncStorage.setItem('user', null);
            navigation.replace('LoginScreen');
          }
        })
        .catch((error) => {
          console.error('Error fetching user info:', error);
        });
    });
  }, []);

  const handleContactSubmit = () => {
    setSomething(true);

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
        .then((response) => {
          const result = response.data;
          if (result.result === 'failed') {
            showAlert(result.result, result.msg);
          } else {
            showAlert(result.result, result.msg);
          }
        })
        .catch((error) => {
          console.error('Error in contact request:', error);
        });
    });
  };

  const showAlert = (result: string, msg: string) => {
    Alert.alert(
      'CAPS',
      msg,
      [
        {
          text: 'Ok',
          onPress: () => navigation.replace('home')
        }
      ],
      { cancelable: false }
    );
  };

  const handleTextChange = (key: string, value: string) => {
    setContactForm({ ...contactForm, [key]: value });
    if (key === 'title') {
      setValidName(value.trim() !== '');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={contactForm.title}
        onChangeText={(value) => handleTextChange('title', value)}
        maxLength={30}
      />
      {contactForm.title.length < 2 && <Text style={styles.error}>Enter at least 2 characters.</Text>}

      <View style={styles.picker}>
        <Picker
          selectedValue={contactForm.Contact}
          onValueChange={(itemValue) => handleTextChange('Contact', itemValue)}>
          <Picker.Item label="Select Contact Reason" value="" />
          <Picker.Item label="Software Technology Issues" value="Software Technology Issues" />
          <Picker.Item label="CAPS Application Issues" value="CAPS Application Issues" />
        </Picker>
      </View>

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Message"
        value={contactForm.message}
        onChangeText={(value) => handleTextChange('message', value)}
        maxLength={250}
        multiline
      />

      <Button
        title="Send Message"
        onPress={handleContactSubmit}
        disabled={!validName || something || contactForm.Contact === '' || contactForm.message === ''}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 45,
    borderColor: '#cccccc',
    borderWidth: 1,
    marginVertical: 8,
    paddingLeft: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 4,
    fontSize: 14,
  },
  picker: {
    borderColor: '#cccccc',
    borderWidth: 1,
    marginVertical: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
    borderColor: '#cccccc',
    borderWidth: 1,
    marginVertical: 8,
    paddingLeft: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 4,
  },
  error: {
    color: '#9D0808',
    fontSize: 12,
    paddingLeft: 5,
  },
});

export default ContactUsPage;
