import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, Modal, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const AudioPage: React.FC = () => {
  const navigation = useNavigation();
  const [showFooter, setShowFooter] = useState(true);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [uploadModalVisible, setUploadModalVisible] = useState(false);
  const [recording, setRecording] = useState(false);
  const audioRecorderPlayer = new AudioRecorderPlayer();

  const handleLogout = () => {
    setLogoutModalVisible(false);
    Alert.alert('Logged Out', 'You have been logged out.');
  };

  const handleLogoutCancel = () => {
    setLogoutModalVisible(false);
  };

  const handleDocumentUpload = async (option: 'document' | 'audio') => {
    setUploadModalVisible(false);

    if (option === 'document') {
      try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.allFiles],
        });
        Alert.alert('Document Selected', 'Document successfully selected.');
        console.log(res);
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          console.log('User cancelled document picker');
        } else {
          console.log('DocumentPicker Error: ', err);
        }
      }
    } else if (option === 'audio') {
      if (recording) {
        stopAudioRecording();
      } else {
        startAudioRecording();
      }
    }
  };

  const startAudioRecording = async () => {
    try {
      const result = await audioRecorderPlayer.startRecorder();
      setRecording(true);
      Alert.alert('Recording Started', 'Audio recording has started.');
      console.log(result);
    } catch (error) {
      console.error('Failed to start recording', error);
    }
  };

  const stopAudioRecording = async () => {
    try {
      const result = await audioRecorderPlayer.stopRecorder();
      setRecording(false);
      Alert.alert('Recording Stopped', 'Audio recording has stopped.');
      console.log(result);
    } catch (error) {
      console.error('Failed to stop recording', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={require('../assets/img/backarrow.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { flex: 1, textAlign: 'center' }]}>Audio</Text>
      </View>

      {/* Upload Icon Section */}
      <View style={styles.uploadSection}>
        <TouchableOpacity onPress={() => setUploadModalVisible(true)}>
          <Image source={require('../assets/img/Upload_image.png')} style={styles.uploadIcon} />
          <Text style={styles.uploadText}>Upload/Record Audio</Text>
        </TouchableOpacity>
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
              onPress={() => handleDocumentUpload('document')}
            >
              <Text style={styles.uploadModalButtonText}>Upload a document</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.uploadModalButton}
              onPress={() => handleDocumentUpload('audio')}
            >
              <Text style={styles.uploadModalButtonText}>{recording ? 'Stop Recording' : 'Record an audio message'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.uploadModalButton}
              onPress={() => setUploadModalVisible(false)}
            >
              <Text style={styles.uploadModalButtonText}>Cancel</Text>
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
    </View>
  );
};


import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#9d0808',
    padding: hp('2%'), // Adjusted padding to be responsive
    width: '100%',
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: wp('5.5%'), // Responsive font size
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    width: wp('7%'), // Responsive width
    height: wp('7%'), // Responsive height
    padding: hp('1%'), // Responsive padding
    tintColor: '#fff',
  },
  uploadSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadIcon: {
    width: wp('25%'), // Responsive width
    height: wp('25%'), // Responsive height
    marginLeft: wp('8%'), // Responsive margin
    tintColor: '#9d0808', // Customize color if needed
  },
  footer: {
    height: hp('8%'), // Responsive height
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
    width: wp('6%'), // Responsive width
    height: wp('6%'), // Responsive height
    tintColor: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: wp('5%'), // Responsive margin
    backgroundColor: 'white',
    borderRadius: 10,
    padding: hp('4%'), // Responsive padding
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitles: {
    fontSize: wp('4.5%'), // Responsive font size
    fontWeight: 'bold',
    marginBottom: hp('2%'), // Responsive margin
    color: 'black',
  },
  modalText: {
    fontSize: wp('4%'), // Responsive font size
    marginBottom: hp('2%'), // Responsive margin
  },
  modalButtonContainer: {
    flexDirection: 'row',
  },
  modalButton: {
    borderRadius: 5,
    padding: hp('2%'), // Responsive padding
    marginHorizontal: wp('3%'), // Responsive margin
    backgroundColor: '#9d0808',
  },
  modalButtonText: {
    color: 'white',
    fontSize: wp('4%'), // Responsive font size
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
    paddingVertical: hp('3%'), // Responsive padding
    paddingHorizontal: wp('5%'), // Responsive padding
    alignItems: 'center',
  },
  uploadModalButton: {
    width: '100%',
    paddingVertical: hp('3%'), // Responsive padding
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  uploadModalButtonText: {
    fontSize: wp('4.5%'), // Responsive font size
    color: '#9d0808',
  },
  uploadText: {
    marginTop: hp('1%'), // Responsive margin
    fontSize: wp('5%'), // Responsive font size
    color: '#9d0808', // Same color as the icon for consistency
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default AudioPage;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     backgroundColor: '#9d0808',
//     padding: 15,
//     width: '100%',
//     flexDirection: 'row',
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
//   uploadSection: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   uploadIcon: {
//     width: 100,
//     height: 100,
//     marginLeft:30,
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
//     color: 'black',
//   },
//   modalText: {
//     fontSize: 16,
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
// });

// export default AudioPage;