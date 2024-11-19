// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';


// import next from '../assets/img/next.png'

// interface FileType {
//   title: string;
//   subtitle: string;
//   icon: string;
//   image: typeof import('../assets/img/next.png');
// }

// const FilesPage: React.FC = ({ navigation, route }) => {
//     const pages: FileType[] = [
//         { title: 'Images', subtitle: 'View The Images in This Case', icon: 'image', image: require('../assets/img/next.png') },
//         { title: 'Audio', subtitle: 'View The Audio in This Case', icon: 'volume-up', image: require('../assets/img/next.png') },
//         { title: 'Video', subtitle: 'View The Video in This Case', icon: 'videocam', image: require('../assets/img/next.png') },
//         { title: 'Documents', subtitle: 'View The Documents in This Case', icon: 'document', image: require('../assets/img/next.png') },
//       ];
//   const [caseId, setCaseId] = useState<string | null>(null);
//   const [agressionFiles, setAgressionFiles] = useState<null | { caseAttachmentDetails: string }>(null);
//   const [showFiles, setShowFiles] = useState<boolean>(false);
//   const [fromUpload, setFromUpload] = useState<null | unknown>(null);

//   useEffect(() => {
//     const { case_id, agression_files, from_upload, show_files } = route.params || {};
//     setCaseId(case_id);
//     setAgressionFiles(agression_files);
//     setFromUpload(from_upload);
//     setShowFiles(show_files);
//   }, [route.params]);

//   const handleGetImage = (page: FileType) => {
//     if (agressionFiles?.caseAttachmentDetails === 'No attachments found') {
//       navigation.push('AddfilePage', {
//         page,
//         caseId,
//         agressionFiles: '',
//         showFiles,
//       });
//     } else {
//       navigation.push('AddfilePage', {
//         page,
//         caseId,
//         agressionFiles: agressionFiles?.caseAttachmentDetails,
//         showFiles,
//       });
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <View style={{ backgroundColor: '#f5f5f5', padding: 15 }}>
//         <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Files</Text>
//       </View>
//       <ScrollView>
//         {pages.map((item) => (
//          <TouchableOpacity key={item.title} onPress={() => handleGetImage(item)}>
//          <View style={{ flexDirection: 'row', padding: 10, backgroundColor: '#fff', marginVertical: 5 }}>
//            <Image source={item.image} style={{ width: 40, height: 40, marginRight: 10 }} />
//            <View style={{ flex: 1 }}>
//              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
//              <Text>{item.subtitle}</Text>
//            </View>
//            <Image   source={next} style={{ width: 20, height: 20, marginRight: 10 }} />
//          </View>
//        </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// export default FilesPage;


import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet, StatusBar, Modal, Alert, Linking } from 'react-native';

import next from '../assets/img/next.png';
import backarrow from '../assets/img/backarrow.png';

interface FileType {
  title: string;
  subtitle: string;
  icon: string;
  image: any;
  type: 'image' | 'video' | 'audio' | 'document';
}

const FilesPage: React.FC = ({ navigation, route }) => {
  const pages: FileType[] = [
    { title: 'Images', subtitle: 'View The Images in This Case', icon: 'image', image: require('../assets/img/image.png'), type: 'image' },
    { title: 'Audio', subtitle: 'View The Audio in This Case', icon: 'volume-up', image: require('../assets/img/audio.png'), type: 'audio' },
    { title: 'Video', subtitle: 'View The Video in This Case', icon: 'videocam', image: require('../assets/img/video.png'), type: 'video' },
    { title: 'Documents', subtitle: 'View The Documents in This Case', icon: 'document', image: require('../assets/img/docs.png'), type: 'document' },
  ];

  const [caseId, setCaseId] = useState<string | null>(null);
  const [agressionFiles, setAgressionFiles] = useState<any | null>(null); // Change to any for flexibility
  const [showFiles, setShowFiles] = useState<boolean>(false);
  const [fromUpload, setFromUpload] = useState<null | unknown>(null);
  const [showFooter, setShowFooter] = useState(true);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  useEffect(() => {
    const { case_id, agression_files, from_upload, show_files } = route.params || {};
    setCaseId(case_id);
    setAgressionFiles(agression_files); // Set the aggression files
    setFromUpload(from_upload);
    setShowFiles(show_files);
  }, [route.params]);
console.log('caseId',caseId);
const handleGetImage = (page: FileType) => {
  const targetPage = getPageByType(page.type);

  if (agressionFiles?.caseAttachmentDetails === 'No attachments found') {
    navigation.push(targetPage, {
      page,
      caseId,
      agressionFiles: '',
      showFiles,
    });
  } else {
    navigation.push(targetPage, {
      page,
      caseId,
      agressionFiles: agressionFiles?.caseAttachmentDetails,
      showFiles,
    });
  }
};

// Helper function to return the target page based on file type
const getPageByType = (type: 'image' | 'video' | 'audio' | 'document') => {
  switch (type) {
    case 'image':
      return 'ImagePage';
    case 'audio':
      return 'AudioPage';
    case 'video':
      return 'VideoPage';
    case 'document':
      return 'DocumentPage';
    default:
      return 'AddFilePage'; // Fallback page if type doesn't match
  }
};

  const handleLogout = () => {
    setLogoutModalVisible(false);
    Alert.alert('Logged Out', 'You have been logged out.');
  };

  const handleLogoutCancel = () => {
    setLogoutModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#9d0808" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={backarrow} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { flex: 1, textAlign: 'center' }]}>Files</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        {pages.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handleGetImage(item)} style={ styles.cardHeader}>
            <Image source={item.image} style={styles.clip} />
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.titleSub}>{item.subtitle}</Text>
            </View>
            <Image source={next} style={styles.rightIcon} />
          </TouchableOpacity>
        ))}
      </ScrollView>

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
    padding: hp('2%'), // Responsive padding
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
  scrollView: {
    paddingHorizontal: wp('4%'), // Responsive padding
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp('1.5%'), // Responsive padding
    backgroundColor: '#fff',
    marginVertical: hp('1%'), // Responsive margin
    borderRadius: 5,
    elevation: 2,
  },
  clip: {
    width: wp('6.5%'), // Responsive width
    height: wp('6.5%'), // Responsive height
    marginRight: wp('4%'), // Responsive margin
    tintColor:'#9d0808',
    marginLeft: wp('2%'), // Responsive margin
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: wp('4.5%'), // Responsive font size
    flex: 1,
    color: '#9d0808',
  },
  titleSub: {
    fontSize: wp('4%'), // Responsive font size
    color: '#666',
    marginTop: hp('0.5%'), // Responsive margin
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
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: hp('2.5%'), // Responsive padding
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitles: {
    fontSize: wp('5%'), // Responsive font size
    fontWeight: 'bold',
    marginBottom: hp('2%'), // Responsive margin
    color: 'black',
  },
  modalText: {
    fontSize: wp('4.5%'), // Responsive font size
    marginBottom: hp('2%'), // Responsive margin
    color: 'grey',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  modalButton: {
    paddingHorizontal: wp('5%'), // Responsive padding
    paddingVertical: hp('2%'), // Responsive padding
    borderRadius: 5,
    backgroundColor: '#9d0808',
    marginHorizontal: wp('2%'), // Responsive margin
  },
  modalButtonText: {
    color: 'white',
    fontSize: wp('4.5%'), // Responsive font size
    fontWeight: 'bold',
  },
  rightIcon: {
    width: wp('5%'), // Responsive width
    height: wp ('5%'), // Responsive height
    marginRight: wp('2%'), // Responsive margin
    tintColor:'#9d0808'
  },
});

export default FilesPage;

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
//   scrollView: {
//     paddingHorizontal: 16,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//     backgroundColor: '#fff',
//     marginVertical: 5,
//     borderRadius: 5,
//     elevation: 2,
//   },
//   clip: {
//     width: 25,
//     height: 25,
//     marginRight: 15,
//     tintColor:'#9d0808',
//     marginLeft:10,
//   },
//   cardTitle: {
//     fontWeight: 'bold',
//     // color: '#333',
//     fontSize: 16,
//     flex: 1,
//     color: '#9d0808',
//   },
//   titleSub: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 4,
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
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalView: {
//     width: '80%',
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
//     color: 'grey',

//   },
//   modalButtonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//   },
//   modalButton: {
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 5,
//     backgroundColor: '#9d0808',
//     marginHorizontal: 10,
//   },
//   modalButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   rightIcon: {
//     width: 20,
//     height: 20,
//     marginRight: 10,
//     tintColor:'#9d0808'
//   },
// });

// export default FilesPage;