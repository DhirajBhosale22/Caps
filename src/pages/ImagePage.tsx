// import React, { useState, useRef } from 'react';
// import {
//   View,
//   Text,
//   Button,
//   FlatList,
//   Alert,
//   ActivityIndicator,
//   ScrollView,
//   PermissionsAndroid,
// } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
// import DocumentPicker from 'react-native-document-picker';
// import AudioRecorderPlayer from 'react-native-audio-recorder-player';
// import axios from 'axios';

// const AddFile: React.FC = () => {
//   const [caseId, setCaseId] = useState<string>('123');
//   const [token, setToken] = useState<string>('your-auth-token');
//   const [userId, setUserId] = useState<string>('user-123');
//   const [files, setFiles] = useState<any[]>([]);
//   const [recording, setRecording] = useState<boolean>(false);
//   const [recordedAudio, setRecordedAudio] = useState<string | null>(null);
//   const [uploadInProgress, setUploadInProgress] = useState<boolean>(false);

//   const audioRecorderPlayer = useRef(new AudioRecorderPlayer()).current;

//   const API_BASE_URL = 'http://aggressionmanagement.com/api';

//   // Request Permissions
//   const requestPermissions = async () => {
//     try {
//       const granted = await PermissionsAndroid.requestMultiple([
//         PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//       ]);
//       return (
//         granted['android.permission.RECORD_AUDIO'] === PermissionsAndroid.RESULTS.GRANTED &&
//         granted['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED
//       );
//     } catch (err) {
//       console.warn(err);
//       return false;
//     }
//   };

//   // Handle Image Selection
//   const getPicture = async () => {
//     ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (response) => {
//       if (response.didCancel) return;
//       if (response.uri) processFile(response.uri, 'image');
//     });
//   };

//   // Handle Image Capture
//   const takePicture = async () => {
//     ImagePicker.launchCamera({ mediaType: 'photo' }, (response) => {
//       if (response.didCancel) return;
//       if (response.uri) processFile(response.uri, 'image');
//     });
//   };

//   // Handle Video Selection
//   const getVideo = async () => {
//     ImagePicker.launchImageLibrary({ mediaType: 'video' }, (response) => {
//       if (response.didCancel) return;
//       if (response.uri) processFile(response.uri, 'video');
//     });
//   };

//   // Handle Document Selection
//   const openDoc = async () => {
//     try {
//       const result = await DocumentPicker.pick();
//       processFile(result.uri, 'document');
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) console.log('Document picker cancelled');
//     }
//   };

//   // Process Selected Files
//   const processFile = (uri: string, type: string) => {
//     setFiles([...files, { uri, type }]);
//   };

//   // Start Recording Audio
//   const startRecord = async () => {
//     const permissionGranted = await requestPermissions();
//     if (!permissionGranted) {
//       Alert.alert('Permission denied', 'You need to allow microphone access.');
//       return;
//     }

//     try {
//       const result = await audioRecorderPlayer.startRecorder();
//       audioRecorderPlayer.addRecordBackListener((e) => {
//         console.log('Recording...', e);
//         return;
//       });
//       setRecording(true);
//       setRecordedAudio(result);
//     } catch (error) {
//       console.error('Error starting recording:', error);
//     }
//   };

//   // Stop Recording Audio
//   const stopRecord = async () => {
//     try {
//       await audioRecorderPlayer.stopRecorder();
//       audioRecorderPlayer.removeRecordBackListener();
//       setRecording(false);
//     } catch (error) {
//       console.error('Error stopping recording:', error);
//     }
//   };

//   // Upload Files to the Server
//   const uploadFile = async (file: any) => {
//     setUploadInProgress(true);
//     const formData = new FormData();
//     formData.append('file', {
//       uri: file.uri,
//       type: getMimeType(file.type),
//       name: `upload.${getFileExtension(file.uri)}`,
//     });
//     formData.append('case_id', caseId);
//     formData.append('user_id', userId);

//     try {
//       await axios.post(`${API_BASE_URL}/case_attachment`, formData, {
//         headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' },
//       });
//       Alert.alert('Upload Success', 'File uploaded successfully.');
//     } catch (error) {
//       console.error('Upload failed:', error);
//       Alert.alert('Upload Failed', 'Failed to upload the file.');
//     } finally {
//       setUploadInProgress(false);
//     }
//   };

//   // Helper Functions for File Types and Extensions
//   const getMimeType = (type: string) => {
//     switch (type) {
//       case 'image': return 'image/jpeg';
//       case 'video': return 'video/mp4';
//       case 'audio': return 'audio/mpeg';
//       case 'document': return 'application/pdf';
//       default: return 'application/octet-stream';
//     }
//   };

//   const getFileExtension = (uri: string) => uri.split('.').pop() || '';

//   return (
//     <ScrollView>
//       <View style={{ padding: 20 }}>
//         <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Add File</Text>

//         <Button title="Select Image" onPress={getPicture} />
//         <Button title="Take Picture" onPress={takePicture} />
//         <Button title="Select Video" onPress={getVideo} />
//         <Button title="Select Document" onPress={openDoc} />
//         <Button
//           title={recording ? 'Stop Recording' : 'Start Recording'}
//           onPress={recording ? stopRecord : startRecord}
//         />

//         {files.length > 0 && (
//           <FlatList
//             data={files}
//             keyExtractor={(item, index) => index.toString()}
//             renderItem={({ item }) => (
//               <View style={{ marginVertical: 10 }}>
//                 <Text>Type: {item.type}</Text>
//                 <Text>URI: {item.uri}</Text>
//                 <Button title="Upload" onPress={() => uploadFile(item)} />
//               </View>
//             )}
//           />
//         )}

//         {uploadInProgress && <ActivityIndicator size="large" color="#0000ff" />}
//       </View>
//     </ScrollView>
//   );
// };

// export default AddFile;
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, Modal, Linking, Animated, Easing, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImgVidAudiouploadProvider from '../providers/img-vid-audioupload/img-vid-audioupload';
import AggressionLevelProvider from '../providers/aggressionlevel/aggressionlevel'; // Import AggressionLevelProvider
import { Api } from '../providers/api/api'; // Import Api

const ImagePage: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Get the route object
  const { caseId } = route.params; 
  const [showFooter, setShowFooter] = useState(true);
  
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [uploadModalVisible, setUploadModalVisible] = useState(false);
  const [image, setImage] = useState(null);
  
  // State for user data
  const [userId, setUserId] = useState('');
  const [token, setToken] = useState('');
  const [uploading, setUploading] = useState(false);
  const animationValue = useRef(new Animated.Value(0)).current;

  const startUploadAnimation = () => {
    setUploading(true);
    Animated.loop(
      Animated.timing(animationValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        console.log('Retrieved user data:', userData); // Log the retrieved data
        
        // Parse userData
        const parsedData = userData ? JSON.parse(userData) : null;
  
        // Check if parsedData exists and has the required properties
        if (parsedData && parsedData.result === "success") {
          const { user_id, token } = parsedData; // Access user_id and token directly
          setUserId(user_id);
          setToken(token);
        } else {
          Alert.alert('Error', 'User  data not found.');
        }
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
  
    loadData();
  }, []);
  console.log(caseId);

  const handleLogout = () => {
    setLogoutModalVisible(false);
    Alert.alert('Logged Out', 'You have been logged out.');
  };

  const handleLogoutCancel = () => {
    setLogoutModalVisible(false);
  };

  const handleImageUpload = (option: 'gallery' | 'camera') => {
    setUploadModalVisible(false);
  
    const options = {
      mediaType: 'photo',
      quality: 1,
    };
  
    const imagePickerCallback = (response) => {
      if (response.didCancel) {
        console.log('User  cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        console.log('Selected image:', response.assets[0]);
        setImage(response.assets[0]);
        ImgVidAudiouploadProvider.setImage(response.assets[0].uri); // Set image in provider
        Alert.alert('Image Selected', 'Image successfully selected.');
      }
    };
  
    if (option === 'gallery') {
      launchImageLibrary(options, imagePickerCallback);
    } else if (option === 'camera') {
      launchCamera(options, imagePickerCallback);
    }
  };
  const animatedStyle = {
    opacity: animationValue,
    transform: [
      {
        scale: animationValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0.5, 1],
        }),
      },
    ],
  };
  
  const uploadPhoto = () => {
    startUploadAnimation(); // Start the animation
    const selectedImage = ImgVidAudiouploadProvider.getImage(); // Get image from provider
  
    if (!selectedImage) {
      Alert.alert('No Image Selected', 'Please select an image to upload.');
      return;
    }
  
    const url = 'https://aggressionmanagement.com/api/case_attachment';
    const formData = new FormData();
    
    // Prepare the file for upload
    formData.append('image_upload_file', {
      uri: selectedImage,
      type: 'image/jpeg', // Ensure the correct MIME type
      name: 'name.jpg', // Use a meaningful name
    });
  
    // Additional parameters
    formData.append('token', token); 
    formData.append('user_id', userId); 
    formData.append('case_id', caseId); 
    formData.append('type', 'image');
  
    console.log('Form data prepared for upload:', formData); // Log form data
  
    fetch(url, {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUploading(false); // Stop the animation
        Alert.alert('Upload Successful', 'Image uploaded successfully.');
      })
      .catch((err) => {
        setUploading(false); // Stop the animation
        console.error('Upload error:', err);
        Alert.alert('Upload Failed', 'Failed to upload image.');
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={require('../assets/img/backarrow.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { flex: 1, textAlign: 'center' }]}>Images</Text>
      </View>

      <View style={styles.content}>
        {/* Upload Icon Section */}
        <View style={styles.uploadSection}>
  <TouchableOpacity onPress={() => setUploadModalVisible(true)}>
    {image ? (
      <Image source={{ uri: image.uri }} style={styles.selectedImage} />
    ) : (
      <Image source={require('../assets/img/Upload_image.png')} style={styles.uploadIcon} />
    )}
    <Text style={styles.uploadText}>{image ? 'Selected Image' : 'Upload Image'}</Text>
  </TouchableOpacity>
</View>
        {uploading && (
          <View style={styles.loaderContainer}>
            <Animated.View style={[styles.loader, animatedStyle]}>
              <Text style={styles.loaderText}>Uploading...</Text>
            </Animated.View>
          </View>
        )}
        {image && (
          <TouchableOpacity onPress={uploadPhoto} style={[styles.uploadButton, { marginTop: 20 }]}>
            <Text style={styles.uploadButtonText}>Upload Selected Image</Text>
          </TouchableOpacity>
        )}
      
      </View>

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

      {/* Upload Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={uploadModalVisible}
        onRequestClose={() => setUploadModalVisible(false)}
      >
        <View style={styles.uploadModalContainer}>
          <View style={styles.uploadModalView}>
            <TouchableOpacity
              style={styles.uploadModalButton}
              onPress={() => handleImageUpload('gallery')}
            >
              <Text style={styles.uploadModalButtonText}>Load from gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.uploadModalButton}
              onPress={() => handleImageUpload('camera')}
            >
              <Text style={styles.uploadModalButtonText}>Take a photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.uploadModalButton}
              onPress={() => {
                setUploadModalVisible(false );
                uploadPhoto();
              }}
            >
              <Text style={styles.uploadModalButtonText}>Upload</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Logout Modal */}
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
    </ScrollView>
  );
};


import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  scrollViewContainer: {
    flexGrow: 1,
    backgroundColor: 'white', // Ensure background remains white
  },
  selectedImage: {
    width: wp('25%'), // Adjusted to be responsive
    height: wp('25%'), // Adjusted to be responsive
    borderRadius: 10,
    marginLeft: wp('5%'), // Adjusted to be responsive
  },
  loaderContainer: {
    position: 'absolute',
    top: '50%',
    left: '40%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
    borderRadius: 10,
    padding: wp('5%'), // Adjusted to be responsive
  },
  loader: {
    backgroundColor: '#9d0808', // Loader color
    padding: wp('5%'), // Adjusted to be responsive
    borderRadius: 10,
  },
  loaderText: {
    color: 'white',
    fontSize: hp('2.5%'), // Adjusted to be responsive
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: '#9d0808',
    padding: wp('4%'), // Adjusted to be responsive
    width: '100%',
    flexDirection: 'row',
  },
  uploadButton: {
    backgroundColor: '#9d0808',
    padding: wp('3%'), // Adjusted to be responsive
    borderRadius: 5,
    marginBottom: hp('8%'), // Adjusted to be responsive
    alignItems: 'center',
  },
  uploadButtonText: {
    color: 'white',
    fontSize: hp('2%'), // Adjusted to be responsive
  },
  headerTitle: {
    fontSize: hp('3%'), // Adjusted to be responsive
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    width: wp('7%'), // Adjusted to be responsive
    height: wp('7%'), // Adjusted to be responsive
    padding: wp('2%'), // Adjusted to be responsive
    tintColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadIcon: {
    width: wp('25%'), // Adjusted to be responsive
    height: wp('25%'), // Adjusted to be responsive
    tintColor: '#9d0808', // Customize color if needed
  },
  footer: {
    height: hp('8%'), // Adjusted to be responsive
    backgroundColor: '#B71C1C',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerIcon: {
    width: wp('6%'), // Adjusted to be responsive
    height: wp('6%'), // Adjusted to be responsive
    tintColor: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: wp('5%'), // Adjusted to be responsive
    backgroundColor: 'white',
    borderRadius: 10,
    padding: wp('8%'), // Adjusted to be responsive
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitles: {
    fontSize: hp('2.5%'), // Adjusted to be responsive
    fontWeight: 'bold',
    marginBottom: hp('2%'), // Adjusted to be responsive
    color: 'black',
  },
  modalText: {
    fontSize: hp('2%'), // Adjusted to be responsive
    marginBottom: hp('2%'), // Adjusted to be responsive
  },
  modalButtonContainer: {
    flexDirection: 'row',
  },
  modalButton: {
    borderRadius: 5,
    padding: wp('3%'), // Adjusted to be responsive
    marginHorizontal: wp('2%'), // Adjusted to be responsive
    backgroundColor: '#9d0808',
  },
  modalButtonText: {
    color: 'white',
    fontSize: hp('2%'), // Adjusted to be responsive
  },

  // Upload Modal Styles
  uploadModalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  uploadModalView: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: hp('2%'), // Adjusted to be responsive
    paddingHorizontal: wp('5%'), // Adjusted to be responsive
    alignItems: 'center',
  },
  uploadModalButton: {
    width: '100%',
    paddingVertical: hp('3%'), // Adjusted to be responsive
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  uploadModalButtonText: {
    fontSize: hp('2.5%'), // Adjusted to be responsive
    color: '#9d0808',
  },
  uploadText: {
    marginTop: hp('1%'), // Adjusted to be responsive
    fontSize: hp('2.5%'), // Adjusted to be responsive
    color: '#9d0808', // Same color as the icon for consistency
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
  },
});

export default ImagePage;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     flexDirection: 'column',
//   },
//   scrollViewContainer: {
//     flexGrow: 1,
//     backgroundColor: 'white', // Ensure background remains white
//   },
//   selectedImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//     marginLeft:20,
//     // Additional styling if needed
//   },
//   loaderContainer: {
//     position: 'absolute',
//     top: '50%',
//     left: '40%',
//     transform: [{ translateX: -50 }, { translateY: -50 }],
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
//     borderRadius: 10,
//     padding: 20,
//   },
//   loader: {
//     backgroundColor: '#9d0808', // Loader color
//     padding: 20,
//     borderRadius: 10,
//   },
//   loaderText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   header: {
//     backgroundColor: '#9d0808',
//     padding: 15,
//     width: '100%',
//     flexDirection: 'row',
//   },
//   uploadButton: {
//     backgroundColor: '#9d0808',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 60,
//     alignItems: 'center',
//   },
//   uploadButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   headerTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#fff',
//     textAlign: 'center',
//   },
//   backButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   backIcon: {
//     width: 25,
//     height: 25,
//     padding: 10,
//     tintColor: '#fff',
//   },
//   content: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   uploadSection: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   uploadIcon: {
//     width: 100,
//     height: 100,
//     tintColor: '#9d0808', // Customize color if needed
//   },
//   footer: {
//     height: 60,
//     backgroundColor: '#B71C1C',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',

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
//     color:'black'
//   },
//   modalText: {
//     fontSize:  16,
//     marginBottom: 15,
//   },
//   modalButtonContainer: {
//     flexDirection: 'row',
//   },
//   modalButton: {
//     borderRadius: 5,
//     padding: 10,
//     marginHorizontal: 10,
//     backgroundColor: '#9d0808',
//   },
//   modalButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },

//   // Upload Modal Styles
//   uploadModalContainer: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   uploadModalView: {
//     width: '100%',
//     backgroundColor: 'white',
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     paddingVertical: 20,
//     paddingHorizontal: 20,
//     alignItems: 'center',
//   },
//   uploadModalButton: {
//     width: '100%',
//     paddingVertical: 15,
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   uploadModalButtonText: {
//     fontSize: 18,
//     color: '#9d0808',
//   },
//   uploadText: {
//     marginTop: 8, // Adjust spacing between the image and the text
//     fontSize: 20,
//     color: '#9d0808', // Same color as the icon for consistency
//     textAlign: 'center',
//     fontWeight: 'bold', 
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'flex-start',
//   },
// });

// export default ImagePage;