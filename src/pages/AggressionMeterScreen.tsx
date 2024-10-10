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
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert, Modal, ScrollView, StatusBar, Animated, PermissionsAndroid, Platform  } from 'react-native';
import { useRoute } from '@react-navigation/native'; // Import useRoute
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Api } from '../providers/api/api';
import RNFS from 'react-native-fs';
import ViewShot from 'react-native-view-shot'; // Import for screenshot
import AggressionLevelProvider from '../providers/aggressionlevel/aggressionlevel';
import { DistributionlistProvider } from '../providers/distributionlist/distributionlist';
import ProfileProvider from '../providers/profile/profile';
import CaseProvider from '../providers/case/case';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import DocumentPicker from 'react-native-document-picker';

import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

import { useLoader } from '../providers/loader/loader';
// Import all images
import info from '../assets/img/info.png';
import meter from '../assets/img/meter.png';
import back from '../assets/img/back.png';
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

const AggressionMeterScreen = ({ navigation, route }: any) => {
  const { case_id, token } = route.params; // Access the token here
  const { suspect_info } = route.params as { suspect_info: { suspect_name: string; last_name: string } };
  const { avg_rating } = route.params;

  const api = new Api();
  const distributionProvider = new DistributionlistProvider(api);
  const profileProvider = new ProfileProvider(api);
  const aggressionLevelProvider = new AggressionLevelProvider(api); // Create an instance of AggressionLevelProvider

  const createCaseProvider = new CaseProvider(api);
  const [avgRating, setAvgRating] = useState<string>('');
  const [suspectInfo, setSuspectInfo] = useState<any>(suspect_info || {});
  const [userName, setUserName] = useState<string>('');
  const [number, setNumber] = useState<number>(0);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pages, setPages] = useState<any[]>([
    { title: 'behavior', icon: 'man', rating: '', select: '', colors: '', type_id: '', image: man },
    { title: 'communication', icon: 'info', rating: '', select: '', colors: '', type_id: '', image: meeting },
    { title: 'interaction', icon: 'info', rating: '', select: '', colors: '', type_id: '', image: social },
    { title: 'demeanor', icon: 'demeanor', rating: '', select: '', colors: '', type_id: '', image: demeanor },
    { title: 'facial expression', icon: 'info', rating: '', select: '', colors: '', type_id: '', image: grinning },
    { title: 'tactical_movement', icon: 'info', rating: '', select: '', colors: '', type_id: '', image: walking },
    { title: 'other concerning factors', icon: 'tactic_movement', rating: '', select: '', colors: '', type_id: '', image: tactic_movement },
    { title: 'Files', icon: 'info', rating: '', select: '', colors: '', type_id: '', image: file },
    { title: 'best practices', icon: 'file', rating: '', select: '', colors: '', type_id: '', image: checkc },
  ]);
  const { showLoader, hideLoader } = useLoader();
  const [showColor, setShowColor] = useState<string>('rgba(102, 102, 102, 0.5)'); // Default color for the meter
  const rotateValue = useRef(new Animated.Value(0)).current;
  const viewShotRef = useRef(null); // For screenshot reference

  

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
    fetchUserName();
    fetchData();
  }, []);

  useEffect(() => {
    if (pages.length > 0) {
      const maxRating = Math.max(...pages.map(page => page.rating ? parseInt(page.rating) : 0));
      setAvgRating(maxRating.toString());
    } else {
      setAvgRating('0');
    }
  }, [pages]);

  const fetchUserName = async () => {
    showLoader();
    try {
      const userData = await AsyncStorage.getItem('user');
      const { user_id, token } = userData ? JSON.parse(userData) : {};

      if (!user_id || !token) {
        Alert.alert('Error', 'User  not authenticated.');
        return;
      }

      const response = await profileProvider.user_info({ user_id, token });
      const userDataResponse =response.data;
      setUserName(userDataResponse.firstname);
    } catch (error) {
      console.error('Error fetching user info:', error);
      Alert.alert('Error', 'Failed to fetch user information.');
    } finally {
      hideLoader();
    }
  };

  const fetchData = async () => {
    showLoader();
    try {
      const userToken = await AsyncStorage.getItem('user_token');
      if (userToken) {
        const caseInfo = await createCaseProvider.myCases({}, userToken); // Use the new myCases method
        setSuspectInfo(caseInfo);

        const profileData = await profileProvider.user_info(userToken);
        console.log('Profile Data:', profileData);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch data');
      console.error('Fetch Error:', error);
    }  finally {
      hideLoader();
    }
  };

  const fetchAggressionLevel = async () => {
    showLoader();
    try {
      const userData = await AsyncStorage.getItem('user');
      const { user_id, token } = userData ? JSON.parse(userData) : {};
  
      if (!user_id || !token) {
        Alert.alert('Error', 'User not authenticated.');
        hideLoader(); // Hide loader if user is not authenticated
        return;
      }
  
      const info = {
        token: token,
        user_id: user_id,
        case_id: case_id,
      };
  
      const response = await aggressionLevelProvider.aggressionLevel(info);
      if (response) {
        const aggressionInfo = response.aggression_level_details;
        if (aggressionInfo=== 'No content') {
          const defaultPages = pages.map((page) => ({
            ...page,
            rating: '',
            colors: 'grey', // default color
          }));
          setPages(defaultPages);
        } else {
        
          const updatedPages = pages.map((page) => {
            let show_color = 'grey'; // Default color
            const matchingAggression = aggressionInfo.find((data) => data.type === page.title);
            if (matchingAggression) {
              // Set rating and determine color
            
  
              // Rating-based color logic
              const rating = matchingAggression.rating;
              if (rating === '1' || rating === '2' || rating === '3') {
                show_color = 'rgb(58, 186, 128)'; // Green
              } else if (rating === '4' || rating === '5' || rating === '6') {
                show_color = 'rgb(232, 185, 106)'; // Yellow
              } else if (rating === '0') {
                show_color = 'grey'; // Grey
              } else {
                show_color = 'rgb(216, 108, 107)'; // Red
              }
  
              return {
                ...page,
                rating: matchingAggression.rating,
                colors: show_color, // Assign the color based on rating
              };
            }
            return { ...page, colors: show_color };
          });
  
          setPages(updatedPages); // Update pages state with colors
        }
      }
    } catch (error) {
      console.error('Error fetching aggression level:', error);
    }
    finally {
      hideLoader();
    }
  };
  

  useEffect(() => {
    fetchAggressionLevel();
  }, []);


  const getQuestion = async (item: any) => {
    showLoader();
    try {
      const userData = await AsyncStorage.getItem('user');
      const { user_id, token } = userData ? JSON.parse(userData) : {};

      if (!user_id || !token) {
        Alert.alert('Error', 'User  not authenticated.');
        return;
      }

      if (item.title === 'best practices') {
        navigation.navigate('EmergencyProcedure', {  token: token, user_id: user_id, case_id: case_id,}); // Navigate to BestPractices page
      } else {
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
        case_id: case_id, // Pass case_id
        rating: item.rating, 
      };

      navigation.navigate('QuestionPage', {
        data: myModalData,
      });
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
      return true;
    }
  };


  const generatePDF = async () => {
    const hasPermission = await requestStoragePermission();
    if (!hasPermission) {
      Alert.alert('Permission denied', 'Cannot save PDF without storage permission.');
      return;
    }
  
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
              <img src="data:image/jpeg;base64,${base64}" alt="Screenshot" width="70%" height="80%" />
              <!-- Additional case details -->
            </body>
          </html>
        `,
        fileName: `AggressionMeter_${case_id}`,
        directory: 'Documents',
      };
  
      const pdf = await RNHTMLtoPDF.convert(options);

    // Get the directory path
    const directory = await RNFS.DownloadDirectoryPath;

    // Create the file path
    const filePath = `${directory}/AggressionMeter_${case_id}.pdf`;

    // Write the PDF to the file path
    await RNFS.writeFile(filePath, pdf.filePath, 'base64');

    // Save the file path for later use
    await RNFS.moveFile(pdf.filePath, filePath);

    Alert.alert('PDF Generated', `PDF file has been saved to: ${filePath}`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    Alert.alert('Error', 'Failed to generate PDF.');
  }
};


  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#B22222" />
  
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.footerButton} onPress={generatePDF}>
          <Image source={require('../assets/img/download.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('FilesPage')}>
        <Image source={require('../assets/img/share.png')} style={styles.footerIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('EditCaseScreen', { case_id: case_id })}>
        <Image source={require('../assets/img/edit.png')} style={styles.footerIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('MyCasePage', { token})}>
        <Image source={require('../assets/img/document.png')} style={styles.footerIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('CasesharedWith', { case_id: case_id })}>
        <Image source={require('../assets/img/Profile-icon.png')} style={styles.footerIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('IntroductionScreen')}>
        <Image source={require('../assets/img/check.png')} style={styles.footerIcon} />
      </TouchableOpacity>
    </View>
    <ViewShot ref={viewShotRef} style={styles.container} options={{ format: 'jpg', quality: 0.9 }}>
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Text style={styles.namePlaceholder}>{suspectInfo.suspect_name} {suspectInfo.last_name}</Text>

      <View style={styles.gridContainer}>
        {pages.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            onPress={() => getQuestion(item)} 
            style={[styles.gridItem, { backgroundColor: item.colors }]} // Apply the dynamic background color
          >
            
          
              <Image source={item.image} style={styles.infoIcon} />
            
            <Text style={styles.gridItemText}>{item.title.replace(/_/g, ' ')}</Text>
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
                    inputRange: [0, 360], // Adjust input range if needed
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

      <Text style={styles.meterText}>METER OF EMERGING AGGRESSION</Text>
      <Text style={styles.meterTextInner}>
        This CAPS Mobile App is fully protected by Copyrights, Trademarks and Patents. Any unauthorized use of this app or its methodologies in whole or in part without prior written permission from the Center for Aggression Management, Inc. is a Federal offense and will be prosecuted to the fullest extent of the law.
      </Text>

      {/* Modal */}
      <Modal animationType="slide" transparent={true} visible={isModalVisible} onRequestClose={toggleModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>To advance to Best Practice Responses, you must first select elements in the Meter of Emerging Aggression.</Text>
            <TouchableOpacity style={styles.modalButton} onPress={toggleModal}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
    </ViewShot>
  </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#B22222',
    paddingVertical: 10,
    width:'100%',
  },
  footerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  footerIcon: {
    width: 22,
    height: 22,
    tintColor: 'white',
  },
  namePlaceholder: {
    fontSize: 14, // Updated font size
    color: '#737373', // Updated text color
    marginBottom: 10, // Updated margin bottom
    textAlign: 'center',
  },
  ratingText: {
    position: 'absolute',
    textAlign:'center',
    color: 'black', // React Native doesn't use 'color' for View components, it applies to Text components
    backgroundColor: 'white', // Use 'backgroundColor' instead of 'background'
    fontWeight: 'bold',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#b7bcc1',
    width: 27,
    height: 27,
    padding: 3,
    zIndex: 2500,
  bottom:72,
   left:13,
    marginHorizontal: 70,
  },
  
  gridContainer: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
   
  },
  gridItem: {
    width: '27%', // Updated width
    height: 90, // Updated height
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    backgroundColor: 'rgba(102, 102, 102, 0.5)', // Default color
  },
  infoIcon: {
    width: 31, // Updated width
    height: 31, // Updated height
    marginTop: 5,
    marginBottom: 10,
    tintColor: 'white',
  },
  gridItemText: {
    fontSize: 8.5, // Updated font size
    color: 'white',
    textTransform: 'uppercase', // Added text transform
  },
  meterContainer: {
    position: 'absolute',
    top: '40%', // Updated top position
    left: '30%', // Updated left position
    transform: [{ translateX: -50 }, { translateY: -50 }], // Added transform
    width: 270, // Updated width
    height: 157, // Updated height
  },
  meterImg: {
    width: 295, // Updated width
  },
  meterArrowContainer: {
    position: 'absolute',
    top: '65%', // Updated top position
    left: '30%', // Updated left position
  },
  arrowImg: {
    position: 'absolute',
    top: '135%', // Updated top position
    left: '40%',// Updated left position
    height: 93, // Updated height
    transform: [{ rotate: '-50deg' }], // Added transform
    transformOrigin: 'bottom', // Added transform origin
  },
  notification: {
    fontSize: 15, // Updated font size
    position: 'absolute',
    top: '186%', // Updated top position
    left: '53%',// Updated left position
    color: 'white', // Updated text color
  },
  meterText: {
    fontSize: 17, // Updated font size
    textAlign: 'center', // Updated text alignment
    textTransform: 'uppercase', // Added text transform
   
    bottom:55,
    color:'black'
  },
  meterTextInner: {
    fontSize: 10, // Updated font size
    color:'black',
    textAlign: 'center',// Updated text alignment
    padding: 5, // Updated padding
    bottom:30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#B22222',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default AggressionMeterScreen;