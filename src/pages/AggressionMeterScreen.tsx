// import React from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { Api } from '../providers/api/api';
// import { DistributionlistProvider } from '../providers/distributionlist/distributionlist';
// import { ProfileProvider } from '../providers/profile/profile';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// interface Props {
//   navigation: any;
// }

// interface State {
//   suspectInfo: any;
//   pages: any[];
//   number: number;
//   state: string;
//   shareShow: boolean;
//   corporate: boolean;
//   agressionResult: any;
//   level: any[];
//   otherFactor: any[];
//   maxRating: any[];
//   showColor: string;
//   tabBarElement: any;
//   storage: any;
// }

// class AggressionMeterScreen extends React.Component<Props, State> {
//   private api: Api;
//   private distributionProvider: DistributionlistProvider;
//   private profileProvider: ProfileProvider;

//   constructor(props: Props) {
//     super(props);
//     this.api = new Api(); // Initialize API with default base URL
//     this.distributionProvider = new DistributionlistProvider(this.api);
//     this.profileProvider = new ProfileProvider(this.api);

//     this.state = {
//       suspectInfo: {},
//       pages: [],
//       number: 0,
//       state: '0',
//       shareShow: false,
//       corporate: false,
//       agressionResult: {},
//       level: [],
//       otherFactor: [],
//       maxRating: [],
//       showColor: '',
//       tabBarElement: null,
//       storage: AsyncStorage, // Assume AsyncStorage is initialized
//     };
//   }

//   async componentDidMount() {
//     const suspectInfo = await this.props.navigation.getParam('suspectInfo', {});
//     const pages = await this.props.navigation.getParam('pages', []);
//     const agressionResult = await this.props.navigation.getParam('agressionResult', {});

//     this.setState({
//       suspectInfo,
//       pages,
//       agressionResult,
//     });
//   }

//   getQuestion = (item: any) => {
//     const myModalData = {
//       name: item.title,
//       case_id: this.state.suspectInfo.case_id,
//       type_id: item.type_id,
//     };

//     this.props.navigation.navigate('QuestionPage', { data: myModalData });
//   };

//   getRating = () => {
//     const rating = this.state.pages.reduce((acc: number, page: any) => {
//       if (page.select === 1) {
//         acc += page.rating;
//       }
//       return acc;
//     }, 0);
//     this.setState({ number: rating });
//   };

//   submitCase = async () => {
//     try {
//       const token = await AsyncStorage.getItem('token');
//       const user_id = await AsyncStorage.getItem('user_id');

//       const info = {
//         types: this.state.level,
//         case_photo: this.state.agressionResult.case_details.meter_photo,
//         token,
//         user_id,
//         case_id: this.state.suspectInfo.case_id,
//         avg_rating: this.state.number,
//         verification: 'yes',
//       };

//       await this.distributionProvider.distribution(info);
//       console.log('Case submitted successfully');
//       // Handle successful submission
//     } catch (error) {
//       console.error('Error submitting case:', error);
//       // Handle error
//     }
//   };

//   showConfirm = () => {
//     const newArrays = this.checkDuplicateInObject(this.state.otherFactor);

//     newArrays.map((data: any) => {
//       this.state.level.push({
//         case_id: data.case_id,
//         type_id: data.type_id,
//         type: data.type,
//         rating: data.rating,
//       });
//     });

//     Alert.alert(
//       'Verification',
//       'Can you verify that what you witnessed is consistent with the level of aggression as described by the Meter of Emerging Aggression?',
//       [
//         {
//           text: 'No',
//           onPress: () => this.submitCase(),
//         },
//         {
//           text: 'Yes',
//           onPress: () => this.submitCase(),
//         },
//       ],
//       { cancelable: false }
//     );
//   };

//   checkDuplicateInObject = (array: any) => {
//     const newArray: any = [];
//     array.forEach((element: any) => {
//       let flag = 0;
//       newArray.forEach((newElement: any) => {
//         if (newElement.type_id === element.type_id) {
//           flag = 1;
//         }
//       });
//       if (flag === 0) {
//         newArray.push(element);
//       }
//     });
//     return newArray;
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backButton}>
//             <Image source={require('../assets/img/back.png')} style={styles.backIcon} />
//           </TouchableOpacity>
//           <Text style={styles.headerText}>Aggression Meter</Text>
//         </View>
//         <View style={styles.content}>
//           <View style={styles.meterContainer}>
//             <Image source={require('../assets/img/meter.png')} style={styles.meterImg} />
//             <Image
//               source={require('../assets/img/green_ar.png')}
//               style={[styles.arrowImg, { transform: [{ rotate: `${this.state.state}deg` }] }]}
//             />
//             <View style={styles.notification}>
//               <Text style={styles.notificationText}>{this.state.number}</Text>
//             </View>
//           </View>
//           <Text style={styles.meterText}>Meter of Emerging Aggression</Text>
//         </View>
//         <View style={styles.cardContainer}>
//           {this.state.pages.map((item: any, index: number) => (
//             <TouchableOpacity key={index} onPress={() => this.getQuestion(item)} style={styles.card}>
//               <View style={styles.cardHeader}>
//                 <Image source={require('../assets/img/info.png')} style={styles.cardIcon} />
//                 <Text style={styles.cardHeaderText}>{item.title}</Text>
//               </View>
//               <View style={styles.cardFooter}>
//                 <Text style={styles.cardFooterText}>{item.rating}</Text>
//               </View>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     height: 50,
//     backgroundColor: '#337ab7',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 10,
//   },
//   backButton: {
//     width: 30,
//     height: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   backIcon: {
//     width: 24,
//     height: 24,
//   },
//   headerText: {
//     fontSize: 18,
//     color: '#fff',
//   },
//   content: {
//     flex: 1,
//     paddingHorizontal: 10,
//   },
//   meterContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginVertical: 20,
//   },
//   meterImg: {
//     width: 100,
//     height: 100,
//   },
//   arrowImg: {
//     width: 20,
//     height: 20,
//   },
//   notification: {
//     position: 'absolute',
//     top: 40,
//     left: 40,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 5,
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   notificationText: {
//     fontSize: 18,
//     color: '#337ab7',
//   },
//   meterText: {
//     fontSize: 18,
//     color: '#337ab7',
//     textAlign: 'center',
//   },
//   cardContainer: {
//     flex: 1,
//     paddingHorizontal: 10,
//     marginTop: 20,
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 10,
//     marginBottom: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   cardIcon: {
//     width: 24,
//     height: 24,
//   },
//   cardHeaderText: {
//     fontSize: 18,
//     color: '#337ab7',
//     marginLeft: 10,
//   },
//   cardFooter: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   cardFooterText: {
//     fontSize: 18,
//     color: '#337ab7',
//   },
// });

// export default AggressionMeterScreen;











// // React component
// import React from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet, Alert, Modal, ScrollView, StatusBar }  from 'react-native';
// import { Api } from '../providers/api/api';
// import { DistributionlistProvider } from '../providers/distributionlist/distributionlist';
// import { AggressionlevelProvider } from '../providers/aggressionlevel/aggressionlevel'; // Import AggressionlevelProvider
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import ProfileProvider from '../providers/profile/profile';
// import { useRoute } from '@react-navigation/native';
// import { CreateCaseProvider } from '../providers/createcase/createcase';

// // Import all images
// import info from '../assets/img/info.png';
// import meter from '../assets/img/meter.png';
// import back from '../assets/img/back.png';
// import green_ar from '../assets/img/green_ar.png';

// interface Props {
//   navigation: any;
// }

// interface State {
//   suspectInfo: any;
//   pages: any[];
//   number: number;
//   state: string;
//   shareShow: boolean;
//   corporate: boolean;
//   agressionResult: any;
//   level: any[];
//   otherFactor: any[];
//   maxRating: any[];
//   showColor: string;
//   tabBarElement: any;
//   storage: any;
//   userName: string;
//   colors: string; // To track colors for meter display
//   isModalVisible: boolean; // Modal state
// }

// class AggressionMeterScreen extends React.Component<Props, State> {
//   private api: Api;
//   private distributionProvider: DistributionlistProvider;
//   private profileProvider: ProfileProvider;
//   private aggressionProvider: AggressionlevelProvider; // Add aggression provider
//   private createCaseProvider: CreateCaseProvider; // Add CreateCaseProvider


//   constructor(props: Props) {
//     super(props);
//     this.api = new Api();
//     this.distributionProvider = new DistributionlistProvider(this.api);
//     this.profileProvider = new ProfileProvider(this.api);
//     this.aggressionProvider = new AggressionlevelProvider(this.api); // Initialize provider
//  this.createCaseProvider = new CreateCaseProvider(this.api); // Initialize CreateCaseProvider



//     this.state = {
//       suspectInfo: {},
//       pages: [
//         { title: 'behavior', icon: 'info', rating: '', select: '', colors: '', type_id: '' },
//         { title: 'communication', icon: 'info', rating: '', select: '', colors: '', type_id: '' },
//         { title: 'interaction', icon: 'info', rating: '', select: '', colors: '', type_id: '' },
//         { title: 'demeanor', icon: 'info', rating: '', select: '', colors: '', type_id: '' },
//         { title: 'facial_expression', icon: 'info', rating: '', select: '', colors: '', type_id: '' },
//         { title: 'tactical_movement', icon: 'info', rating: '', select: '', colors: '', type_id: '' },
//         { title: 'other_concerning_factors', icon: 'info', rating: '', select: '', colors: '', type_id: '' },
//         { title: 'Files', icon: 'info', rating: '', select: '', colors: '', type_id: '' },
//         { title: 'best practices', icon: 'info', rating: '', select: '', colors: '', type_id: '' },
//       ],
//       number: 0,
//       state: '0',
//       shareShow: false,
//       corporate: false,
//       agressionResult: {},
//       level: [],
//       otherFactor: [],
//       maxRating: [],
//         showColor: 'rgba(102, 102, 102, 0.5)', // Default color for the meter
//       tabBarElement: null,
//       userName: '',
//       colors: 'rgba(102, 102, 102, 0.5)', // Default color for the meter
//       isModalVisible: false, // Initialize modal state
//     };
//   }

//   componentDidMount() {
//     this.fetchUserName();
//     this.fetchData(); // Call the function to fetch case data, aggression level, etc.
//   }

//   fetchUserName = async () => {
//     try {
//       const userData = await AsyncStorage.getItem('user');
//       const { user_id, token } = userData ? JSON.parse(userData) : {};

//       if (!user_id || !token) {
//         Alert.alert('Error', 'User not authenticated.');
//         return;
//       }

//       const response = await this.profileProvider.user_info({ user_id, token });
//       const userDataResponse = response.data;

//       this.setState({ userName: userDataResponse.firstname });
//     } catch (error) {
//       console.error('Error fetching user info:', error);
//       Alert.alert('Error', 'Failed to fetch user information.');
//     }
//   };
//   fetchData = async () => {
//     try {
//       const userToken = await AsyncStorage.getItem('user_token');
//       if (userToken) {
//         // Fetch suspect info using CreateCaseProvider
//         const caseInfo = await this.createCaseProvider.getSuspectInfo(userToken);
//         this.setState({ suspectInfo: caseInfo });

//         // Fetch aggression result using AggressionlevelProvider
//         const aggressionData = await this.aggressionProvider.getAggressionResult(userToken);
//         this.setState({ aggressionResult: aggressionData, number: aggressionData.level });

//         // Fetch profile data
//         const profileData = await this.profileProvider.getProfile(userToken);
//         console.log('Profile Data:', profileData);
//       }
//     } catch (error) {
//       Alert.alert('Error', 'Failed to fetch data');
//       console.error('Fetch Error:', error);
//     }
//   };

//   getQuestion = async (item: any) => {
 
//     try {
//       const userData = await AsyncStorage.getItem('user');
//       const { user_id, token } = userData ? JSON.parse(userData) : {};

//       if (!user_id || !token) {
//         Alert.alert('Error', 'User not authenticated.');
//         return;
//       }

//       const myModalData = {
//         token: token,
//         user_id: user_id,
//         type: item.title,
//       };

//       // Call aggression level function before navigating if needed
//       const aggressionInfo = { user_id, type: item.title };
//       const aggressionResponse = await this.aggressionProvider.aggression_level(aggressionInfo);
//       console.log('Aggression Level Response:', aggressionResponse.data); // Handle the response as needed

//       this.props.navigation.navigate('QuestionPage', {
//         data: myModalData,
//         // onDismiss: this.handleModalDismiss,
//       });
//     } catch (error) {
//       console.error('Error getting token or user_id:', error);
//       Alert.alert('Error', 'Failed to get token or user_id.');
//     }
//   };
//   toggleModal = () => {
//     this.setState({ isModalVisible: !this.state.isModalVisible });
//   };

//   handleModalDismiss = (data: any) => {
//     if (data && data.qes[0]) {
//       this.setState({ hide_: true });

//       const { name, case_id, qes } = data;
//       const { rating } = qes[0];

//       if (name === 'other concerning factors') {
//         this.setState((prevState) => ({
//           otherFactor: [...prevState.otherFactor, { case_id, type_id: qes[0].id, type: name, rating }],
//         }));
//       } else {
//         this.setState((prevState) => ({
//           level: [...prevState.level, { case_id, type_id: qes[0].id, type: name, rating }],
//         }));
//       }

//       this.updateMaxRating(name, rating);
//       this.saveData();
//     }
//   };

//   saveData = async () => {
//     try {
//       const { otherFactor, level } = this.state;
//       await AsyncStorage.setItem('other_factor', JSON.stringify(otherFactor));
//       await AsyncStorage.setItem('level', JSON.stringify(level));
//     } catch (error) {
//       console.error('Error saving data:', error);
//     }
//   };

//   updateMaxRating = (pageName: string, rating: number) => {
//     this.setState(
//       (prevState) => {
//         const maxRatingExists = prevState.maxRating.find((item) => item.page === pageName);

//         if (maxRatingExists) {
//           return {
//             maxRating: prevState.maxRating.map((item) =>
//               item.page === pageName ? { ...item, data: rating } : item
//             ),
//           };
//         } else {
//           return {
//             maxRating: [...prevState.maxRating, { page: pageName, data: rating }],
//           };
//         }
//       },
//       () => {
//         this.updateNumberAndColor();
//       }
//     );
//   };

//   updateNumberAndColor = () => {
//     const max = this.state.maxRating.reduce(
//       (prev, current) => (prev.data > current.data ? prev : current),
//       { data: 0 }
//     );
//     const { data: maxRating } = max;

//     this.setState({ number: maxRating }, this.updateColor);
//   };

//   updateColor = () => {
//     const { number } = this.state;

//     if (number < 30) {
//       this.setState({ showColor: 'rgba(0, 255, 0, 0.5)' }); // Green
//     } else if (number < 60) {
//       this.setState({ showColor: 'rgba(255, 255, 0, 0.5)' }); // Yellow
//     } else {
//       this.setState({ showColor: 'rgba(255, 0, 0, 0.5)' }); // Red
//     }
//   };

  
//   render() {
//     const { suspectInfo, number, isModalVisible } = this.state;
// //     return (
// //       <View style={styles.container}>
// //         {/* Render content based on the state */}
// //         <Text style={styles.userNameText}>{this.state.userName}</Text>
// //         <View style={styles.meterContainer}>
// //           <Image source={meter} style={styles.meterImage} />
// //           <View style={[styles.colorOverlay, { backgroundColor: this.state.showColor }]} />
// //         </View>
// //         <Text style={styles.ratingText}>Aggression Level: {this.state.number}</Text>
// //         <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
// //           <Image source={back} style={styles.backButton} />
// //         </TouchableOpacity>
// //         {/* Map through the pages to render buttons */}
// //         {this.state.pages.map((item, index) => (
// //           <TouchableOpacity key={index} onPress={() => this.getQuestion(item)}>
// //             <Image source={info} style={styles.infoIcon} />
// //             <Text>{item.title}</Text>
// //           </TouchableOpacity>
// //         ))}
// //       </View>
// //     );
// //   }
// // }

// return (
//   <View style={styles.container}>
//     {/* StatusBar */}
//     <StatusBar barStyle="light-content" backgroundColor="#B22222" />

//     <ScrollView contentContainerStyle={styles.scrollViewContent}>
//       {/* Top Navigation Bar */}
//       <View style={styles.topBar}>
//         <TouchableOpacity style={styles.footerButton} onPress={() => this.props.navigation.navigate('IntroductionScreen')}>
//           <Image source={require('../assets/img/download.png')} style={styles.footerIcon} />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.footerButton} onPress={() => this.props.navigation.navigate('IntroductionScreen')}>
//           <Image source={require('../assets/img/share.png')} style={styles.footerIcon} />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.footerButton} onPress={() => this.props.navigation.navigate('IntroductionScreen')}>
//           <Image source={require('../assets/img/edit.png')} style={styles.footerIcon} />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.footerButton} onPress={() => this.props.navigation.navigate('IntroductionScreen')}>
//           <Image source={require('../assets/img/document.png')} style={styles.footerIcon} />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.footerButton} onPress={() => this.props.navigation.navigate('IntroductionScreen')}>
//           <Image source={require('../assets/img/Profile-icon.png')} style={styles.footerIcon} />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.footerButton} onPress={() => this.props.navigation.navigate('IntroductionScreen')}>
//           <Image source={require('../assets/img/check.png')} style={styles.footerIcon} />
//         </TouchableOpacity>
//       </View>

//       {/* Name Placeholder */}
//       <Text style={styles.namePlaceholder}>{suspectInfo.suspect_name} {suspectInfo.last_name}</Text>
//       <Text style={styles.namePlaceholder}>{this.state.userName}</Text>
//       {this.state.pages.map((item, index) => (
//           <TouchableOpacity key={index} onPress={() => this.getQuestion(item)}>
//             <Image source={info} style={styles.infoIcon} />
//             <Text>{item.title}</Text>
//           </TouchableOpacity>
//         ))}
//       {/* Aggression Meter */}
//       <View style={styles.meterContainer}>
        
//         <Image source={meter} style={styles.meterImage} />
//         <Text style={styles.meterText}>Aggression Level: {number}</Text>
//       </View>

//       {/* Modal for Best Practices */}
//       <Modal animationType="slide" transparent={true} visible={isModalVisible} onRequestClose={this.toggleModal}>
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalText}>
//               To advance to Best Practice Responses, you must first select elements in the Meter of Emerging Aggression.
//             </Text>
//             <TouchableOpacity style={styles.modalButton} onPress={this.toggleModal}>
//               <Text style={styles.modalButtonText}>OK</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>

//     </ScrollView>
//   </View>
// );
// }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f8f8',
//   },
//   scrollViewContent: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//    infoIcon: {
//     width: 30,
//     height: 30,
//   },
//   topBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: '#B22222',
//     padding: 10,
//   },
//   footerButton: {
//     padding: 10,
//   },
//   footerIcon: {
//     width: 30,
//     height: 30,
//   },
//   namePlaceholder: {
//     fontSize: 20,
//     marginVertical: 20,
//   },
//   meterContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   meterImage: {
//     width: 300,
//     height: 300,
//   },
//   meterText: {
//     fontSize: 18,
//     marginTop: 10,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//   },
//   modalText: {
//     fontSize: 16,
//     marginBottom: 20,
//   },
//   modalButton: {
//     backgroundColor: '#B22222',
//     padding: 10,
//     borderRadius: 5,
//   },
//   modalButtonText: {
//     color: 'white',
//     textAlign: 'center',
//   },
// });

// export default AggressionMeterScreen;

import React, { useState, useEffect, useRef } from 'react';
import { 
  SafeAreaView,
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  Alert, 
  Modal, 
  ScrollView, 
  StatusBar, 
  Animated, 
  PermissionsAndroid, 
  Platform,
  TextInput,
  Dimensions, BackHandler
} from 'react-native';
import { useRoute, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Api } from '../providers/api/api';
import RNFS from 'react-native-fs';
import ViewShot from 'react-native-view-shot';
import AggressionLevelProvider from '../providers/aggressionlevel/aggressionlevel';
import { DistributionlistProvider } from '../providers/distributionlist/distributionlist';
import ProfileProvider from '../providers/profile/profile';
import CaseProvider from '../providers/case/case';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import DocumentPicker from 'react-native-document-picker';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { useLoader } from '../providers/loader/loader';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// Import all images

import meter from '../assets/img/meter.png';

import green_ar from '../assets/img/green_ar.png';
import man from '../assets/img/man.png';
import tactic_movement from '../assets/img/tactic_movement.png';
import demeanor from '../assets/img/demeanor.png';
import file from '../assets/img/file.png';
import meeting from '../assets/img/meeting.png';
import walking from '../assets/img/walking.png';
import grinning from '../assets/img/grinning.png';
import checkc from '../assets/img/checkc.png';
import social from '../assets/img/social.png';
import { Rating } from 'react-native-elements';
import CustomModal from './CustomModal';

const AggressionMeterScreen = ({ navigation, route }) => {
  const { case_id, token, suspect_info, pageType, rating} = route.params;

  const api = new Api();
  const distributionProvider = new DistributionlistProvider(api);
  const profileProvider = new ProfileProvider(api);
  const aggressionLevelProvider = new AggressionLevelProvider(api);
  const createCaseProvider = new CaseProvider(api);
  const [isShareErrorModalVisible, setIsShareErrorModalVisible] = useState(false);
  const [isShareModalVisible, setIsShareModalVisible] = useState(false);
  const [isShareSpecificUserModalVisible, setIsShareSpecificUserModalVisible] = useState(false);
  const [avgRating, setAvgRating] = useState('');
  const [agressionResult, setAgressionResult] = useState(null);
  const [agressionFiles, setAgressionFiles] = useState([]);
  const [suspectInfo, setSuspectInfo] = useState(suspect_info || {});
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isNoInternetModalVisible, setIsNoInternetModalVisible] = useState(false);
  const [pages, setPages] = useState([
    { title: 'behavior', rating: '', colors: '', image: man },
    { title: 'communication', rating: '', colors: '', image: meeting },
    { title: 'interaction', rating: '', colors: '', image: social },
    { title: 'demeanor', rating: '', colors: '', image: demeanor },
    { title: 'facial expression', rating: '', colors: '', image: grinning },
    { title: 'tactical_movement', rating: '', colors: '', image: walking },
    { title: 'other concerning factors', rating: '', colors: '', image: tactic_movement },
    { title: 'Files', rating: '', colors: '', image: file },
    { title: 'best practices', rating: '', colors: '', image: checkc },
  ]);
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
  const [isErrorModalVisibless, setIsErrorModalVisibless] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessagess, setErrorMessagess] = useState('');
  const [isLoading, setIsLoading] = useState(true); // State to track loading status
  const [errorMessagesss, setErrorMessagesss] = useState('');
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);
const [confirmMessage, setConfirmMessage] = useState('');
const [isBackModalVisible, setIsBackModalVisible] = useState(false);
const [shareData, setShareData] = useState(null);

  const { showLoader, hideLoader } = useLoader();
  const rotateValue = useRef(new Animated.Value(0)).current;
  const viewShotRef = useRef(null);

  const shareWithSpecificUser  = async () => {
    setIsShareSpecificUserModalVisible(true);
  };
  const showErrorModal = (message) => {
    setErrorMessage(message);
    setIsErrorModalVisible(true);
  };
  const showErrorModalsss = (message) => {
    setErrorMessagesss(message);
    setIsShareErrorModalVisible(true);
  };
  const showErrorModalss = (message) => {
    setErrorMessagess(message);
    setIsErrorModalVisibless(true);
  };
  const showSuccessModal = (message) => {
    setSuccessMessage(message);
    setIsSuccessModalVisible(true);
  };

  const validateEmail = (email) => {
    if (/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
      return { isValid: true, message: '' };
    } else {
      return { isValid: false, message: 'Email address is required' };
    }
  };
  const handleBackButtonPress = () => {
    console.log(pages);
    console.log(pages.some(page => page.image !== ''));
    if (agressionResult && agressionResult.aggression_level_details === 'No content') {
      setErrorMessage('You cannot go back, you must have to fill data in at least one aggression level.');
      setIsBackModalVisible(true);

    } else if (pages.some(page => page.image !== '')) {
      setErrorMessage('You cannot go back until you submit this case.');
      setIsBackModalVisible(true); //da
    } 
    else {
      // If no conditions are met, allow back navigation
      navigation.goBack();
    }
    return true; // Prevent default behavior
  };
  useEffect(() => {
    loadData(); // Load data only when component mounts
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButtonPress
    );
  
    return () => {
      backHandler.remove(); // Cleanup the event listener on unmount
      setIsBackModalVisible(false); // Reset the back modal state when unmounting
    };
  }, []);// Empty dependency array to ensure it runs only on mount
  const handleShareWithSpecificUser  = async (email) => {
    const validateObj = validateEmail(email);
    if (!validateObj.isValid) {
      showErrorModal(validateObj.message); // Show error modal
      return;
    }

    try {
      const userData = await AsyncStorage.getItem('user');
      const { user_id, token } = userData ? JSON.parse(userData) : {};

      if (!user_id || !token) {
        showErrorModal('User  not authenticated. ');// Show error modal
        
        return;
      }

      const case_info = { user_id, token, emailid: email, case_id };
      const response = await createCaseProvider.nocaps_shareCase(case_info);

      if (response.result === 'success') {
        showSuccessModal(response.msg); // Show success modal
      } else {
        showErrorModal(response.msg); // Show error modal
      }
    } catch (error) {
      console.error('Error sharing case with specific user:', error);
      showErrorModal('Failed to share case with specific user'); // Show error modal
    } finally {
      setIsShareSpecificUserModalVisible(false);
    }
  };
  const loadShareData = async () => {
    try {
      const data = await AsyncStorage.getItem('sharedata');
      setShareData(data ? parseInt(data) : 0); // Parse to integer, default to 0
    } catch (error) {
      console.error('Error loading share_data:', error);
    }
  };
  useEffect(() => {
    loadShareData(); // Call to load share_data when component mounts
  }, []);
  const handleShareButtonPress = () => {
    // if (agressionResult && agressionResult.aggression_level_details === 'No content') {
    //   showErrorModalsss('You can share case details only after submitting the case.'); // Show share error modal
    // } else 
    if (shareData === 1) {
      setIsShareModalVisible(true); // Show share modal
    } else {
      showErrorModalss('Sharing cases is not allowed. To enable this feature, go to settings -> Enable Sharing'); // Show error message modal
    }
  };
  const loadData = async () => {
    setIsNoInternetModalVisible(false);
    showLoader();
    try {
      await fetchUserName();
      await fetchData();
      await fetchAggressionLevel();
    } catch (error) {
      console.error('Error loading data:', error);
      if (error.message === 'Network Error' || error instanceof TypeError) {
        setIsNoInternetModalVisible(true);
      } else {
        Alert.alert('Error', 'An unexpected error occurred.');
      }
    } finally {
      hideLoader();
    }
  };

  // useFocusEffect(
  //   React.useCallback(() => {
  //     loadData();
  //     return () => {
  //       setIsNoInternetModalVisible(false);
  //       setIsModalVisible(false);
  //       setIsShareModalVisible(false);
  //     };
  //   }, [])
  // );

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     loadData();
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  useEffect(() => {
    if (avgRating !== '' && !isNaN(parseFloat(avgRating))) {
      Animated.timing(rotateValue, {
        toValue: parseFloat(avgRating) * 20 - 90,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [avgRating]);

  useEffect(() => {
    if (pages.length > 0) {
      const maxRating = Math.max(...pages.map(page => page.rating ? parseInt(page.rating) : 0));
      setAvgRating(maxRating.toString());
    } else {
      setAvgRating('0');
    }
  }, [pages]);
useEffect(() => {
  // Check if the pageType matches any title in pages
  setPages(prevPages => 
    prevPages.map(page => {
      if (page.title === pageType) {
        let show_color = 'grey'; // Default color
        const currentRating: string = rating; // Assuming rating is passed as prop, or it can be derived from the state

        if (['1', '2', '3'].includes(rating)) {
          show_color = 'rgb(58, 186, 128)'; // Green
        } else if (['4', '5', '6'].includes(rating)) {
          show_color = 'rgb(232, 185, 106)'; // Yellow
        } else if (rating === '0') {
          show_color = 'grey';
        } else {
          show_color = 'rgb(216, 108, 107)'; // Red
        }

        return { ...page, rating: currentRating, colors: show_color }; // Update the rating and color if it matches
      }
      return page; // Return unchanged page if no match
    })
  );
}, [pageType, rating]);

  const fetchUserName = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      const { user_id, token } = userData ? JSON.parse(userData) : {};

      if (!user_id || !token) {
        Alert.alert('Error', 'User  not authenticated.');
        return;
      }

      const response = await profileProvider.user_info({ user_id, token });
      setUserName(response.data.firstname);
    } catch (error) {
      console.error('Error fetching user info:', error);
      if (error.message === 'Network Error' || error instanceof TypeError) {
        throw error; // Propagate network error to loadData
      } else {
        Alert.alert('Error', 'Failed to fetch user information.');
      }
    }
  };

  const fetchData = async () => {
    try {
      const userToken = await AsyncStorage.getItem('user_token');
      if (userToken) {
        const caseInfo = await createCaseProvider.myCases({}, userToken);
        setSuspectInfo(caseInfo);

        const profileData = await profileProvider.user_info(userToken);
        console.log('Profile Data:', profileData);
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      if (error.message === 'Network Error' || error instanceof TypeError) {
        throw error; // Propagate network error to loadData
      } else {
        Alert.alert('Error', 'Failed to fetch data');
      }
    }
  };

  const fetchAggressionLevel = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      const { user_id, token } = userData ? JSON.parse(userData) : {};

      if (!user_id || !token) {
        Alert.alert('Error', 'User  not authenticated.');
        throw new Error('User  not authenticated'); // Propagate error
      }

      const info = { token: token, user_id: user_id, case_id: case_id };
      const response = await aggressionLevelProvider.aggressionLevel(info);
      if (response) {
        const aggressionInfo = response.aggression_level_details;

        setAgressionResult(response);

        if (aggressionInfo === 'No content') {
          const defaultPages = pages.map((page) => ({
            ...page,
            rating: '',
            colors: 'grey',
          }));
          setPages(defaultPages);
        } else {
          const updatedPages = pages.map((page) => {
            let show_color = 'grey';
            const matchingAggression = aggressionInfo.find(
              (data) => data.type.toLowerCase() === page.title.toLowerCase()
            );
            if (matchingAggression) {
              const rating = matchingAggression.rating;
              if (['1', '2', '3'].includes(rating)) {
                show_color = 'rgb(58, 186, 128)'; // Green
              } else if (['4', '5', '6'].includes(rating)) {
                show_color = 'rgb(232, 185, 106)'; // Yellow
              } else if (rating === '0') {
                show_color = 'grey';
              } else {
                show_color = 'rgb(216, 108, 107)'; // Red
              }

              return {
                ...page,
                rating: matchingAggression.rating,
                colors: show_color,
              };
            }
            return { ...page, colors: show_color };
          });

          setPages(updatedPages);
        // Assuming files are part of the response, extract them
        if (response.aggression_files) {
          setAgressionFiles(response.aggression_files); // Store aggression files
        }
      }
    }
  } catch (error) {
    setIsNoInternetModalVisible(true);
    console.error('Error fetching aggression level:', error);
    throw error; // Propagate error
  }
};
console.log(case_id);
  const getQuestion = async (item) => {
    showLoader();
    try {
      const userData = await AsyncStorage.getItem('user');
      const { user_id, token } = userData ? JSON.parse(userData) : {};

      if (!user_id || !token) {
        Alert.alert('Error', 'User  not authenticated.');
        return;
      }

      if (item.title === 'best practices') {
        const hasRating = pages.some((page) => page.rating !== '');
        if (!hasRating) {
          setIsModalVisible(true);
        } else {
          // Determine the maxRating
          const maxRating = Math.max(...pages.map(page => parseInt(page.rating) || 0));
  
          // Navigate based on maxRating
          if (maxRating === 0) {
            navigation.navigate('AggressionStageZeroScreen', { token, user_id, case_id });
          } else if (maxRating === 1) {
            navigation.navigate('AggressionStageOneScreen', { token, user_id, case_id });
          } else if (maxRating === 2) {
            navigation.navigate('AggressionStageTwoScreen', { token, user_id, case_id });
          } else if (maxRating === 3) {
            navigation.navigate('AggressionStageThreeScreen', { token, user_id, case_id });
          }   else if (maxRating === 4) {
            navigation.navigate('AggressionStageFourScreen', { token, user_id, case_id });
          }else if (maxRating === 5) {
            navigation.navigate('AggressionStageFiveScreen', { token, user_id, case_id });
          } else if (maxRating === 6) {
            navigation.navigate('AggressionStageSixScreen', { token, user_id, case_id });
          } else {
            navigation.navigate('EmergencyProcedure', { token, user_id, case_id });
          }
        }
      } else if (item.title.toLowerCase() === 'files') {
        // Navigate to FilesPage with the necessary parameters
        navigation.navigate('FilesPage', { 
          token, 
          user_id, 
          case_id,
          agression_files: agressionFiles // Pass the aggression files
        });
      }  else {
        let type = item.title;
        if (type === 'facial expression') {
          type = 'facial_expression';
        }

        if (type === 'other concerning factors') {
          type = 'other_concerning_factors';
        }

        const myModalData = {
          token: token,
          user_id: user_id,
          type,
          case_id: case_id,
          rating: item.rating, 
        };
        console.log('Navigating to AggressionMeterScreen with values:', {
          token: token,
          user_id: user_id,
          type,
          case_id: case_id,
          rating: item.rating, 
        });
        navigation.navigate('QuestionPage', { data: myModalData });
      }
    } catch (error) {
      console.error('Error getting token or user_id:', error);
      Alert.alert('Error', 'Failed to get token or user_id.');
    } finally {
      hideLoader();
    }
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const requestStoragePermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission Required',
          message: 'This app needs access to your storage to download the PDF',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } else {
      return true; // iOS automatically grants permission
    }
  };

  const generatePDF = async () => {
    try {
      // Capture screenshot
      const uri = await viewShotRef.current.capture();
      console.log('Screenshot captured at:', uri);
      const base64 = await RNFS.readFile(uri, 'base64');
  
      // Convert HTML to PDF
      let options = {
        html: `
          <html>
            <body>
              <h1>Aggression Meter Report</h1>
              <p>Suspect: ${suspectInfo.suspect_name} ${suspectInfo.last_name}</p>
              <img src="data:image/jpeg;base64,${base64}" alt="Screenshot" width="90%" height="90%" />
              <!-- Additional case details -->
            </body>
          </html>
        `,
        fileName: `AggressionMeter_${case_id}`,
        directory: 'Documents',
      };
  
      const pdf = await RNHTMLtoPDF.convert(options);
  
      // Return the generated PDF file path
      return pdf.filePath;
    } catch (error) {
      console.error('Error generating PDF:', error);
      throw new Error('Failed to generate PDF.'); // Throw error for handling in download method
    }
  };
  
  // Handle download click
  const handleDownload = async () => {
    try {
      const pdfPath = await generatePDF(); // Generate the PDF
      console.log('Generated PDF Path:', pdfPath); // Log the generated PDF path
  
      // Move the file to Downloads folder
      const destinationPath = `${RNFS.DownloadDirectoryPath}/AggressionMeter_${case_id}.pdf`;
      await RNFS.moveFile(pdfPath, destinationPath);
      Alert.alert('Success', 'File downloaded to: ' + destinationPath); // Notify success
    } catch (error) {
      console.error('Error downloading file:', error);
      Alert.alert('Error', 'Failed to download the file.'); // Notify error
    }
  };

  // Retry function to reload data
  const retryLoadData = () => {
    setIsNoInternetModalVisible(false);
    loadData();
  };

  const submitCase = async () => {
    try {
      // Take screenshot
      const uri = await viewShotRef.current.capture();
      const base64 = await RNFS.readFile(uri, 'base64');
      const casePhoto = `data:image/jpeg;base64,${base64}`;
  
      // Check if data is available
      if (pages.every((page) => page.rating === '')) {
        setErrorMessage('You must have to fill data in at least one aggression level');
        setIsErrorModalVisible(true);
        return;
      }
  
      // Show confirmation prompt
      Alert.alert(
        'Confirm',
        'Is the witnessed aggression consistent with the level of aggression described by the Meter of Emerging Aggression?',
        [
          {
            text: 'Yes',
            onPress: async () => {
              const userData = await AsyncStorage.getItem('user');
              const { user_id, token } = userData ? JSON.parse(userData) : {};
  
              if (!user_id || !token) {
                setErrorMessage('User  not authenticated');
                setIsErrorModalVisible(true);
                return;
              }
  
              const caseAggressionLevelInfo = {
                types: pages.map((page) => ({
                  type: page.title,
                  rating: page.rating,
                })),
                case_photo: casePhoto,
                token,
                user_id,
                case_id,
                avg_rating: avgRating,
                verification: 'yes',
                client_id: 'your_client_id', // Replace with your client ID
              };
  
              // Debugging: Log the data being sent
              console.log('Submitting case with data:', caseAggressionLevelInfo);
  
              // Save the case details via the API
              const response = await aggressionLevelProvider.createCaseAggressionLevel(caseAggressionLevelInfo);
              console.log('Response from API:', response);
  
              if (response && response.data && response.data.msg === "Case not found") {
                setErrorMessage('Failed to create case aggression level: Case not found');
                setIsErrorModalVisible(true);
              } else if (response && response.result === 'success') {
                navigation.navigate('ExistingCases', { flag: 1 });
              } else {
                setErrorMessage('Failed to create case aggression level');
                setIsErrorModalVisible(true);
              }
            },
          },
          {
            text: 'No',
            onPress: async () => {
              const userData = await AsyncStorage.getItem('user');
              const { user_id, token } = userData ? JSON.parse(userData) : {};

              if (!user_id || !token) {
               setErrorMessage('User  not authenticated');
                setIsErrorModalVisible(true);
                return;
              }

              const caseAggressionLevelInfo = {
                types: pages.map((page) => ({
                  type: page.title,
                  rating: page.rating,
                })),
                case_photo: casePhoto,
                token,
                user_id,
                case_id,
                avg_rating: avgRating,
                verification: 'no',
                client_id: 'your_client_id', // Replace with your client ID
              };

              const response = await aggressionLevelProvider.createCaseAggressionLevel(caseAggressionLevelInfo);
            if (response && response.result === 'success') {
              navigation.navigate('ExistingCases', { flag: 1 });
            } else {
              setErrorMessage('Failed to create case aggression level');
              setIsErrorModalVisible(true);
            }
          },
        },
      ],
      { cancelable: false }
    );
  } catch (error) {
    console.error('Error submitting case:', error);
    setErrorMessage('Failed to submit case');
    setIsErrorModalVisible(true);
  }
};
               


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#B22222" />

        {/* Top Bar */}
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.footerButton} onPress={handleDownload}>
            <Image source={require('../assets/img/download.png')} style={styles.footerIcon} />
          </TouchableOpacity>
          {/* Share Modal Trigger */}
          <TouchableOpacity style={styles.footerButton} onPress={handleShareButtonPress}>
            <Image source={require('../assets/img/share.png')} style={styles.footerIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('EditCaseScreen', { case_id })}>
            <Image source={require('../assets/img/edit.png')} style={styles.footerIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('MyCasePage', { token })}>
            <Image source={require('../assets/img/document.png')} style={styles.footerIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('CasesharedWith', { case_id })}>
            <Image source={require('../assets/img/Profile-icon.png')} style={styles.footerIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton} onPress={submitCase}>
            <Image source={require('../assets/img/check.png')} style={styles.footerIcon} />
          </TouchableOpacity>
        </View>

        {/* Content to be captured in PDF */}
        <ViewShot ref={viewShotRef} style={styles.viewShot} options={{ format: 'jpg', quality: 0.9 }}>
          <ScrollView 
            contentContainerStyle={styles.scrollViewContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.namePlaceholder}>
              {suspectInfo.suspect_name} {suspectInfo.last_name}
            </Text>

            <View style={styles.gridContainer}>
              {pages.map((item, index) => (
                <TouchableOpacity 
                  key={index} 
                  onPress={() => getQuestion(item)} 
                  style={[styles.gridItem, { backgroundColor: item.colors }]}
                >
                  <Image source={item.image} style={styles.infoIcon} />
                  <Text style={styles.gridItemText}>{item.title.replace(/_/g, ' ')}
                  {item.title === 'best practices' && avgRating !== undefined ? ` ${avgRating}` : ''}
                  </Text>
                  
                  {item.rating && (
                    <Text style={styles.ratingText}>{item.rating}</Text>
                  )}
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.meterContainer}>
              <Image source={meter} style={styles.meterImg} resizeMode="contain" />

              <Animated.Image
                source={green_ar}
                style={[
                  styles.arrowImg,
                  {
                    transform: [
                      {
                        rotate: rotateValue.interpolate({
                          inputRange: [0, 360],
                          outputRange: ['0deg', '360deg'],
                        }),
                      },
                    ],
                  },
                ]}
                resizeMode="contain"
              />
              <Text style={styles.notification}>{avgRating}</Text>
            </View>

            <Text style={styles.meterText}>Meter of Emerging Aggression</Text>
            <Text style={styles.meterTextInner}>
              This CAPS Mobile App is fully protected by Copyrights,
              Trademarks and Patents. Any unauthorized use of this app or 
              its methodologies in whole or in part without prior written 
              permission from the Center for Aggression Management, Inc. is a 
              Federal offense and will be prosecuted to the fullest extent of the law.
            </Text>
          </ScrollView>
        </ViewShot>
        <Modal 
          animationType="slide" 
          transparent={true} 
          visible={isErrorModalVisible} 
          onRequestClose={() => setIsErrorModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
            <Text style={styles.modalText2}>
            Agression Level !
              </Text>
              <Text style={styles.modalText}>
              {errorMessage}
              </Text>
              <TouchableOpacity style={styles.modalButton} onPress={() => setIsErrorModalVisible(false)}>
              
                <Text style={styles.modalButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal 
          animationType="slide" 
          transparent={true} 
          visible={isShareErrorModalVisible} 
          onRequestClose={() => setIsShareErrorModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
            <Text style={styles.modalText2}>
            Error
              </Text>
              <Text style={styles.modalText}>
              {errorMessagesss}
              </Text>
              <TouchableOpacity style={styles.modalButton} onPress={() => setIsShareErrorModalVisible(false)}>
              
                <Text style={styles.modalButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal 
          animationType="slide" 
          transparent={true} 
          visible={isBackModalVisible} 
          onRequestClose={() => setIsBackModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
            <Text style={styles.modalText2}>
            Agression Level !
              </Text>
              <Text style={styles.modalText}>{errorMessage}</Text>
              <TouchableOpacity style={styles.modalButton} onPress={() => setIsBackModalVisible(false)}>
                <Text style={styles.modalButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/* Success Modal */}
        <Modal 
          animationType="slide" 
          transparent={true} 
          visible={isSuccessModalVisible} 
          onRequestClose={() => setIsSuccessModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
            <Text style={styles.modalText2}>
            Agression Level !
              </Text>
              <Text style={styles.modalText}>
              {successMessage}
              </Text>
              <TouchableOpacity style={styles.modalButton} onPress={() => setIsSuccessModalVisible(false)}>
                <Text style={styles.modalButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal 
          animationType="slide" 
          transparent={true} 
          visible={isShareModalVisible} 
          onRequestClose={() => setIsShareModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.shareModalContent}>
              
              <TouchableOpacity style={styles.modalButton} onPress={async () => {
                await AsyncStorage.setItem('caseId', case_id);
                navigation.navigate('SharecontactPage');
              }}>
                <Text style={styles.modalButtonText}>Share with My Group</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={async () => {
                await AsyncStorage.setItem('caseId', case_id);
                navigation.navigate('SharecontactPage');
              }}>
                <Text style={styles.modalButtonText}>Share with Selected Users</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={() => shareWithSpecificUser ()}>
                <Text style={styles.modalButtonText}>Share with a Specific User</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={() => setIsShareModalVisible(false)}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      
        <Modal 
          animationType="slide" 
          transparent={true} 
          visible={isErrorModalVisibless} 
          onRequestClose={() => setIsErrorModalVisibless(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
            <Text style={styles.modalText2}>
           Error
              </Text>
              <Text style={styles.modalText}>{errorMessagess}</Text>
              <TouchableOpacity style={styles.modalButton} onPress={() => setIsErrorModalVisibless(false)}>
                <Text style={styles.modalButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/* Generic Modal */}
        <Modal 
          animationType="slide" 
          transparent={true} 
          visible={isModalVisible} 
          onRequestClose={toggleModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                To advance to Best Practice Responses, you must first select elements in the Meter of Emerging Aggression.
              </Text>
              <TouchableOpacity style={styles.modalButton} onPress={toggleModal}>
                <Text style={styles.modalButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        
<Modal
  animationType="slide"
  transparent={true}
  visible={isShareSpecificUserModalVisible}
  onRequestClose={() => setIsShareSpecificUserModalVisible(false)}
>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <Text style={styles.modalText}>Enter the email address of the user you want to share with:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        placeholderTextColor={'grey'}
        onChangeText={(email) => setEmail(email)}
        value={email}
      />
      <TouchableOpacity style={styles.modalButton} onPress={() => handleShareWithSpecificUser (email)}>
        <Text style={styles.modalButtonText}>Share</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.modalButton} onPress={() => setIsShareSpecificUserModalVisible(false)}>
        <Text style={styles.modalButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>

        {/* "No Internet Connection" Modal */}
        <Modal 
          animationType="slide" 
          transparent={true} 
          visible={isNoInternetModalVisible} 
          onRequestClose={() => { /* Prevent modal from closing on back press */ }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.noInternetModalContent}>
              <Text style={styles.modalText}>
                No internet connection. Make sure Wi-Fi or cellular data is turned on, then try again.
              </Text>
              <TouchableOpacity style={styles.modalButton} onPress={retryLoadData}>
                <Text style={styles.modalButtonText}>Retry</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        
      </View>
    </SafeAreaView>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  shareModalContent: {
    backgroundColor: 'white',
    padding: wp('5%'),
    borderRadius: wp('2%'),
    width: '80%',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#B22222',
    paddingVertical: hp('2%'),
    width: '100%',
  },
  noInternetModalContent: { // New style for the "No Internet" modal
    backgroundColor: 'white',
    padding: wp('5%'),
    borderRadius: wp('2%'),
    width: '80%',
    alignItems: 'center',
  },
  footerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp('2%'),
  },
  textInput: {
    paddingVertical: hp('1.5%'),
    marginBottom:hp('1.5%'),
    padding: wp('2%'),
    color:'black',
    borderRadius: wp('1.5%'),
    borderColor:'#B22222',
    borderWidth:1,
  },
  footerIcon: {
    width: wp('5%'),
    height: wp('5%'),
    tintColor: 'white',
    resizeMode: 'contain',
  },
  viewShot: {
    flex: 1,
    padding: wp('1.5%'),
    backgroundColor: '#f5f5f5',
  },
  scrollViewContent: {
    paddingBottom: hp('5%'),
  },
  namePlaceholder: {
    fontSize: wp('4.5%'),
    color: '#737373',
    marginBottom: hp('1%'),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '26%',
    height: hp('15%'),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('2%'),
    margin:hp('0.8%'),
    backgroundColor: 'rgba(102, 102, 102, 0.5)',
    position: 'relative',
  },
  infoIcon: {
    width: wp('8%'),
    height: wp('8%'),
    marginBottom: hp('1%'),
    tintColor: 'white',
    resizeMode: 'contain',
  },
  gridItemText: {
    fontSize: wp('2.4%'),
    color: 'white',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  ratingText: {
    position: 'absolute',
    top: hp('-1%'),
    right: wp('-1%'),
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'white',
    fontWeight: 'bold',
    borderRadius: wp('3%'),
    borderWidth: 1,
    borderColor: '#b7bcc1',
    width: wp('6%'),
    height: wp('6%'),
    lineHeight: wp('6%') - 2, // Adjust lineHeight to center the text
    zIndex: 1,
  },
  meterContainer: {
    alignItems: 'center',
    marginVertical: hp('3%'),
  },
  meterImg: {
    width: wp('70%'),
    
    height: hp('30%'),
    resizeMode: 'contain',
  },
  arrowImg: {
    position: 'absolute',
    width: wp('24%'),
    height: wp('24%'),
    top: hp('11.5%'),
    left: wp('36%'),
    transform: [{ rotate: '-90deg' }], // Added transform
transformOrigin: 'bottom', // Added transform origin

  },
  notification: {
    fontSize: wp('4%'),
    position: 'absolute',
    top: hp('22%'),
    left: '52%',
    transform: [{ translateX: -wp('3%') }],
    color: 'white',
   
  },
  meterText: {
    fontSize: wp('4.5%'),
    textAlign: 'center',
    textTransform: 'uppercase',
    color: 'black',
    marginTop: hp('2%'),
    fontWeight: '600',
  },
  meterTextInner: {
    fontSize: wp('2.7%'),
    color: 'black',
    textAlign: 'center',
    padding: wp('2%'),
    marginTop: hp('3%'),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: wp('5%'),
    borderRadius: wp('2%'),
    width: '80%',
  },
  modalText: {
    fontSize: wp('4%'),
    marginBottom: hp('2%'),
    textAlign: 'center',
    color:'grey'
  },
  modalText2: {
    fontSize: wp('4%'),
    marginBottom: hp('2%'),
    textAlign: 'center',
    color:'black'
  },
  modalButton: {
    // backgroundColor: '#B22222',
    paddingVertical: hp('1.5%'),
    marginBottom:hp('1.5%'),
    padding: wp('2%'),
    borderRadius: wp('1.5%'),
    borderColor:'#B22222',
    borderWidth:1,
  },
  modalButtonText: {
    color: '#9d0808',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: wp('4%'),
  },
});

export default AggressionMeterScreen;

