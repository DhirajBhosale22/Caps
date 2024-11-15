// // import React, { useState, useEffect, useCallback } from 'react';
// // import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Alert, StyleSheet, Modal, ScrollView } from 'react-native';
// // import { useRoute } from '@react-navigation/native';
// // import { Api } from '../providers/api/api';
// // import AgressionMeterQuestionProvider from '../providers/agressionmeter-question/agressionmeter-question';
// // import ProfileProvider from '../providers/profile/profile';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import RenderHTML from 'react-native-render-html'; // Import RenderHTML

// // const api = new Api('http://aggressionmanagement.com/api');
// // const aggressionMeterProvider = new AgressionMeterQuestionProvider(api);
// // const profileProvider = new ProfileProvider(api);

// // const QuestionPage: React.FC = () => {
// //   const route = useRoute();
// //   const [questions, setQuestions] = useState<any[]>([]);
// //   const [loading, setLoading] = useState<boolean>(false);
// //   const [error, setError] = useState<string | null>(null);
// //   const [firstName, setFirstName] = useState<string | null>(null);
// //   const [pageType, setPageType] = useState<string>(''); 
 
// //   const [modalVisible, setModalVisible] = useState<boolean>(false);
// //   const [selectedExplanation, setSelectedExplanation] = useState<string | null>(null);

// //   useEffect(() => {
// //     fetchQuestions();
// //   }, [fetchQuestions]);

// //   const fetchQuestions = useCallback(async () => {
// //     try {
// //       setLoading(true);

// //       const userData = await AsyncStorage.getItem('user');
// //       if (!userData) {
// //         Alert.alert('Error', 'User not authenticated.');
// //         return;
// //       }

// //       const { user_id: storedUserId, token: storedToken } = JSON.parse(userData);
// //       if (!storedUserId || !storedToken) {
// //         Alert.alert('Error', 'User not authenticated.');
// //         return;
// //       }

// //       const userInfoResponse = await profileProvider.user_info({
// //         token: storedToken,
// //         user_id: storedUserId,
// //       });

// //       setFirstName(userInfoResponse?.data?.firstname || 'Guest');

// //       const params = route as any;
// //       const { token, user_id, type } = params.params.data;

// //       const pageTypeValue = getPageType(type);
// //       setPageType(pageTypeValue);
// //       const response = await aggressionMeterProvider.emergencyMeterQuestion({
// //         token,
// //         type: pageTypeValue,
// //         user_id,
// //       });

// //       if (response && response.result !== 'failed') {
// //         const updatedQuestions = response.map((item: any) => ({
// //           ...item,
// //           is_selected: isSelected(item) ? '1' : '0',
// //         }));
// //         setQuestions(updatedQuestions);
// //         // setComponentName(params.params.data.name); // Setting the component name
// //       } else {
// //         showAlert('Error', response.msg || 'Failed to load questions');
// //       }
// //     } catch (err) {
// //       setError('No internet connection, make sure Wi-Fi or cellular data is turned on, then try again.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, [route.params]);

// //   const getPageType = (typeId: string) => {
// //     const pageTypes: any = {
// //       behavior: 'behavior',
// //       communication: 'communication',
// //       interaction: 'interaction',
// //       demeanor: 'demeanor',
// //       facial_expression: 'facial_expression',
// //     tactical_movement: 'tactical_movement',
// //     other_concerning_factors: 'tactical_clothing', 
  
// //     };
// //     return pageTypes[typeId] || '';
// //   };

// //   const isSelected = (item: any) => {
// //     return item.is_selected === '1';
// //   };

// //   const showAlert = (title: string, message: string) => {
// //     Alert.alert(title, message);
// //   };

// //   const handleSkip = () => {
// //     console.log("Skip button pressed");
// //   };

// //   const handleQuestionSelect = (qes: any) => {
// //     console.log('Question selected:', qes);
// //   };

// //   const handleInfoPress = (explanation: string) => {
// //     setSelectedExplanation(explanation);
// //     setModalVisible(true);
// //   };

// //   const closeModal = () => {
// //     setModalVisible(false);
// //     setSelectedExplanation(null);
// //   };

// //   if (loading) {
// //     return <ActivityIndicator size="large" color="#0000ff" />;
// //   }

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.header}>Welcome, {firstName}</Text>
// //       <Text style={styles.title}>Select Level of Aggression</Text>
// //       <Text style={styles.subtitle}>{pageType} Options</Text>
      
// //       {error && <Text style={styles.errorText}>{error}</Text>}

// //       <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
// //         <Text style={styles.skipButtonText}>Skip</Text>
// //       </TouchableOpacity>

// //       <FlatList
// //         data={questions}
// //         keyExtractor={(item) => item.id.toString()}
// //         renderItem={({ item }) => (
// //           <View style={styles.questionItem}>
// //             <Text style={styles.questionText}>{item.text || 'No question available'}</Text>
// //             <View style={styles.questionActions}>
// //               <TouchableOpacity
// //                 style={item.is_selected === '1' ? styles.selectedButton : styles.selectButton}
// //                 onPress={() => handleQuestionSelect(item)}
// //               >
// //                 <Text>{item.is_selected === '1' ? 'Selected' : 'Select'}</Text>
// //               </TouchableOpacity>
// //               <Text style={styles.ratingBadge}>{item.rating}</Text>
// //               <TouchableOpacity onPress={() => handleInfoPress(item.explanation)}>
// //                 <Text style={styles.infoIcon}>ℹ️</Text>
// //               </TouchableOpacity>
// //             </View>
// //             <Text style={styles.aggressionType}>{item.aggression_type}</Text>
// //           </View>
// //         )}
// //       />

// //       {/* Modal for Explanation */}
// //       <Modal
// //         animationType="slide"
// //         transparent={true}
// //         visible={modalVisible}
// //         onRequestClose={closeModal}
// //       >
// //         <View style={styles.modalContainer}>
// //           <View style={styles.modalContent}>
          
// //             <ScrollView>
// //             <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
// //               <Text style={styles.closeButtonText}>Close</Text>
// //             </TouchableOpacity>
// //             <Text style={styles.modalheading}>Explore This Stage of Aggression!</Text>
// //               <RenderHTML contentWidth={300} source={{ html: selectedExplanation }} />
// //             </ScrollView>
           
// //           </View>
// //         </View>
// //       </Modal>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 16,
// //   },
// //   header: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginBottom: 16,
// //   },
// //   modalheading:{
// // color:'black',
// // textAlign:'center',
// // fontSize: 20,
// //   },
// //   title: {
// //     fontSize: 18,
// //     textAlign: 'center',
// //     marginBottom: 8,
// //   },
// //   subtitle: {
// //     fontSize: 16,
// //     textAlign: 'center',
// //     marginBottom: 16,
// //   },
// //   skipButton: {
// //     alignSelf: 'flex-end',
// //     backgroundColor: 'red',
// //     paddingHorizontal: 16,
// //     paddingVertical: 8,
// //     borderRadius: 5,
// //   },
// //   skipButtonText: {
// //     color: 'white',
// //   },
// //   questionItem: {
// //     padding: 10,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#ccc',
// //   },
// //   questionText: {
// //     fontSize: 16,
// //     color: 'black',
// //   },
// //   questionActions: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginTop: 8,
// //   },
// //   selectButton: {
// //     backgroundColor: 'blue',
// //     padding: 8,
// //     borderRadius: 5,
// //   },
// //   selectedButton: {
// //     backgroundColor: 'red',
// //     padding: 8,
// //     borderRadius: 5,
// //   },
// //   ratingBadge: {
// //     marginLeft: 16,
// //     fontSize: 16,
// //     color: '#000',
// //   },
// //   infoIcon: {
// //     marginLeft: 16,
// //     fontSize: 22,
// //     color: '#9d0808',
// //   },
// //   aggressionType: {
// //     fontSize: 14,
// //     color: '#555',
// //     marginTop: 4,
// //   },
// //   errorText: {
// //     color: 'red',
// //     marginBottom: 16,
// //   },
// //   modalContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
// //   },
// //   modalContent: {
// //     width: '100%',
// //     height: '100%',
// //     backgroundColor: 'white',
// //     borderRadius: 10,
// //     padding: 20,
// //     alignItems: 'center',
// //   },
// //   closeButton: {
// //     backgroundColor: 'blue',
// //     padding: 10,
// //     borderRadius: 5,
// //   },
// //   closeButtonText: {
// //     color: 'white',
// //   },
// // });

// // export default QuestionPage;
// // import React, { useState, useEffect, useCallback } from 'react';
// // import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Alert, StyleSheet, Modal, ScrollView } from 'react-native';
// // import { useRoute, useNavigation } from '@react-navigation/native'; // Import useNavigation
// // import { Api } from '../providers/api/api';
// // import AgressionMeterQuestionProvider from '../providers/agressionmeter-question/agressionmeter-question';
// // import ProfileProvider from '../providers/profile/profile';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import RenderHTML from 'react-native-render-html'; // Import RenderHTML

// // const api = new Api('http://aggressionmanagement.com/api');
// // const aggressionMeterProvider = new AgressionMeterQuestionProvider(api);
// // const profileProvider = new ProfileProvider(api);

// // const QuestionPage: React.FC = () => {
// //   const route = useRoute();
// //   const navigation = useNavigation(); // Use navigation for navigation actions
// //   const [questions, setQuestions] = useState<any[]>([]);
// //   const [loading, setLoading] = useState<boolean>(false);
// //   const [error, setError] = useState<string | null>(null);
// //   const [firstName, setFirstName] = useState<string | null>(null);
// //   const [pageType, setPageType] = useState<string>(''); 
// //   const [modalVisible, setModalVisible] = useState<boolean>(false);
// //   const [selectedExplanation, setSelectedExplanation] = useState<string | null>(null);

// //   useEffect(() => {
// //     fetchQuestions();
// //   }, [fetchQuestions]);

// //   const fetchQuestions = useCallback(async () => {
// //     try {
// //       setLoading(true);
// //       const userData = await AsyncStorage.getItem('user');
// //       if (!userData) {
// //         Alert.alert('Error', 'User not authenticated.');
// //         return;
// //       }

// //       const { user_id: storedUserId, token: storedToken } = JSON.parse(userData);
// //       if (!storedUserId || !storedToken) {
// //         Alert.alert('Error', 'User not authenticated.');
// //         return;
// //       }

// //       const userInfoResponse = await profileProvider.user_info({
// //         token: storedToken,
// //         user_id: storedUserId,
// //       });

// //       setFirstName(userInfoResponse?.data?.firstname || 'Guest');

// //       const params = route as any;
// //       const { token, user_id, type } = params.params.data;

// //       const pageTypeValue = getPageType(type);
// //       setPageType(pageTypeValue);
// //       const response = await aggressionMeterProvider.emergencyMeterQuestion({
// //         token,
// //         type: pageTypeValue,
// //         user_id,
// //       });

// //       if (response && response.result !== 'failed') {
// //         const updatedQuestions = response.map((item: any) => ({
// //           ...item,
// //           is_selected: isSelected(item) ? '1' : '0',
// //         }));
// //         setQuestions(updatedQuestions);
// //       } else {
// //         showAlert('Error', response.msg || 'Failed to load questions');
// //       }
// //     } catch (err) {
// //       setError('No internet connection, make sure Wi-Fi or cellular data is turned on, then try again.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, [route.params]);

// //   const getPageType = (typeId: string) => {
// //     const pageTypes: any = {
// //       behavior: 'behavior',
// //       communication: 'communication',
// //       interaction: 'interaction',
// //       demeanor: 'demeanor',
// //       facial_expression: 'facial_expression',
// //       tactical_movement: 'tactical_movement',
// //       other_concerning_factors: 'tactical_clothing', 
// //     };
// //     return pageTypes[typeId] || '';
// //   };

// //   const isSelected = (item: any) => {
// //     return item.is_selected === '1';
// //   };

// //   const showAlert = (title: string, message: string) => {
// //     Alert.alert(title, message);
// //   };

// //   const handleQuestionSelect = (qes: any) => {
// //     // Mark the question as selected
// //     const updatedQuestions = questions.map((item) =>
// //       item.id === qes.id ? { ...item, is_selected: '1' } : item
// //     );
// //     setQuestions(updatedQuestions);

// //     // Navigate back to the previous screen and pass the selected rating and text
// //     navigation.navigate('AggressionMeterScreen', {
// //       selectedRating: qes.rating,
// //       selectedText: qes.text,
// //     });
// //   };

// //   const handleInfoPress = (explanation: string) => {
// //     setSelectedExplanation(explanation);
// //     setModalVisible(true);
// //   };

// //   const closeModal = () => {
// //     setModalVisible(false);
// //     setSelectedExplanation(null);
// //   };

// //   if (loading) {
// //     return <ActivityIndicator size="large" color="#0000ff" />;
// //   }

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.header}>Welcome, {firstName}</Text>
// //       <Text style={styles.title}>Select Level of Aggression</Text>
// //       <Text style={styles.subtitle}>{pageType} Options</Text>
      
// //       {error && <Text style={styles.errorText}>{error}</Text>}

// //       <FlatList
// //         data={questions}
// //         keyExtractor={(item) => item.id.toString()}
// //         renderItem={({ item }) => (
// //           <View style={styles.questionItem}>
// //             <Text style={styles.questionText}>{item.text || 'No question available'}</Text>
// //             <View style={styles.questionActions}>
// //               <TouchableOpacity
// //                 style={item.is_selected === '1' ? styles.selectedButton : styles.selectButton}
// //                 onPress={() => handleQuestionSelect(item)} // Pass item to handleQuestionSelect
// //               >
// //                 <Text>{item.is_selected === '1' ? 'Selected' : 'Select'}</Text>
// //               </TouchableOpacity>
// //               <Text style={styles.ratingBadge}>{item.rating}</Text>
// //               <TouchableOpacity onPress={() => handleInfoPress(item.explanation)}>
// //                 <Text style={styles.infoIcon}>ℹ️</Text>
// //               </TouchableOpacity>
// //             </View>
// //             <Text style={styles.aggressionType}>{item.aggression_type}</Text>
// //           </View>
// //         )}
// //       />

// //       {/* Modal for Explanation */}
// //       <Modal
// //         animationType="slide"
// //         transparent={true}
// //         visible={modalVisible}
// //         onRequestClose={closeModal}
// //       >
// //         <View style={styles.modalContainer}>
// //           <View style={styles.modalContent}>
// //             <ScrollView>
// //               <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
// //                 <Text style={styles.closeButtonText}>Close</Text>
// //               </TouchableOpacity>
// //               <Text style={styles.modalheading}>Explore This Stage of Aggression!</Text>
// //               <RenderHTML contentWidth={300} source={{ html: selectedExplanation }} />
// //             </ScrollView>
// //           </View>
// //         </View>
// //       </Modal>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 16,
// //   },
// //   header: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginBottom: 16,
// //   },
// //   modalheading:{
// // color:'black',
// // textAlign:'center',
// // fontSize: 20,
// //   },
// //   title: {
// //     fontSize: 18,
// //     textAlign: 'center',
// //     marginBottom: 8,
// //   },
// //   subtitle: {
// //     fontSize: 16,
// //     textAlign: 'center',
// //     marginBottom: 16,
// //   },
// //   skipButton: {
// //     alignSelf: 'flex-end',
// //     backgroundColor: 'red',
// //     paddingHorizontal: 16,
// //     paddingVertical: 8,
// //     borderRadius: 5,
// //   },
// //   skipButtonText: {
// //     color: 'white',
// //   },
// //   questionItem: {
// //     padding: 10,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#ccc',
// //   },
// //   questionText: {
// //     fontSize: 16,
// //     color: 'black',
// //   },
// //   questionActions: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginTop: 8,
// //   },
// //   selectButton: {
// //     backgroundColor: 'blue',
// //     padding: 8,
// //     borderRadius: 5,
// //   },
// //   selectedButton: {
// //     backgroundColor: 'red',
// //     padding: 8,
// //     borderRadius: 5,
// //   },
// //   ratingBadge: {
// //     marginLeft: 16,
// //     fontSize: 16,
// //     color: '#000',
// //   },
// //   infoIcon: {
// //     marginLeft: 16,
// //     fontSize: 22,
// //     color: '#9d0808',
// //   },
// //   aggressionType: {
// //     fontSize: 14,
// //     color: '#555',
// //     marginTop: 4,
// //   },
// //   errorText: {
// //     color: 'red',
// //     marginBottom: 16,
// //   },
// //   modalContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
// //   },
// //   modalContent: {
// //     width: '100%',
// //     height: '100%',
// //     backgroundColor: 'white',
// //     borderRadius: 10,
// //     padding: 20,
// //     alignItems: 'center',
// //   },
// //   closeButton: {
// //     backgroundColor: 'blue',
// //     padding: 10,
// //     borderRadius: 5,
// //   },
// //   closeButtonText: {
// //     color: 'white',
// //   },
// // });

// // export default QuestionPage;   newwwwwwwwwwwwwwwwww




// // import React, { useState, useEffect, useCallback } from 'react';
// // import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Alert, StyleSheet, Modal, ScrollView } from 'react-native';
// // import { useRoute } from '@react-navigation/native';
// // import { Api } from '../providers/api/api';
// // import AgressionMeterQuestionProvider from '../providers/agressionmeter-question/agressionmeter-question';
// // import ProfileProvider from '../providers/profile/profile';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import RenderHTML from 'react-native-render-html'; // Import RenderHTML

// // const api = new Api('http://aggressionmanagement.com/api');
// // const aggressionMeterProvider = new AgressionMeterQuestionProvider(api);
// // const profileProvider = new ProfileProvider(api);

// // const QuestionPage: React.FC = () => {
// //   const route = useRoute();
// //   const [questions, setQuestions] = useState<any[]>([]);
// //   const [loading, setLoading] = useState<boolean>(false);
// //   const [error, setError] = useState<string | null>(null);
// //   const [firstName, setFirstName] = useState<string | null>(null);
// //   const [pageType, setPageType] = useState<string>(''); 
 
// //   const [modalVisible, setModalVisible] = useState<boolean>(false);
// //   const [selectedExplanation, setSelectedExplanation] = useState<string | null>(null);

// //   useEffect(() => {
// //     fetchQuestions();
// //   }, [fetchQuestions]);

// //   const fetchQuestions = useCallback(async () => {
// //     try {
// //       setLoading(true);

// //       const userData = await AsyncStorage.getItem('user');
// //       if (!userData) {
// //         Alert.alert('Error', 'User not authenticated.');
// //         return;
// //       }

// //       const { user_id: storedUserId, token: storedToken } = JSON.parse(userData);
// //       if (!storedUserId || !storedToken) {
// //         Alert.alert('Error', 'User not authenticated.');
// //         return;
// //       }

// //       const userInfoResponse = await profileProvider.user_info({
// //         token: storedToken,
// //         user_id: storedUserId,
// //       });

// //       setFirstName(userInfoResponse?.data?.firstname || 'Guest');

// //       const params = route as any;
// //       const { token, user_id, type } = params.params.data;

// //       const pageTypeValue = getPageType(type);
// //       setPageType(pageTypeValue);
// //       const response = await aggressionMeterProvider.emergencyMeterQuestion({
// //         token,
// //         type: pageTypeValue,
// //         user_id,
// //       });

// //       if (response && response.result !== 'failed') {
// //         const updatedQuestions = response.map((item: any) => ({
// //           ...item,
// //           is_selected: isSelected(item) ? '1' : '0',
// //         }));
// //         setQuestions(updatedQuestions);
// //         // setComponentName(params.params.data.name); // Setting the component name
// //       } else {
// //         showAlert('Error', response.msg || 'Failed to load questions');
// //       }
// //     } catch (err) {
// //       setError('No internet connection, make sure Wi-Fi or cellular data is turned on, then try again.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, [route.params]);

// //   const getPageType = (typeId: string) => {
// //     const pageTypes: any = {
// //       behavior: 'behavior',
// //       communication: 'communication',
// //       interaction: 'interaction',
// //       demeanor: 'demeanor',
// //       facial_expression: 'facial_expression',
// //     tactical_movement: 'tactical_movement',
// //     other_concerning_factors: 'tactical_clothing', 
  
// //     };
// //     return pageTypes[typeId] || '';
// //   };

// //   const isSelected = (item: any) => {
// //     return item.is_selected === '1';
// //   };

// //   const showAlert = (title: string, message: string) => {
// //     Alert.alert(title, message);
// //   };

// //   const handleSkip = () => {
// //     console.log("Skip button pressed");
// //   };

// //   const handleQuestionSelect = (qes: any) => {
// //     console.log('Question selected:', qes);
// //   };

// //   const handleInfoPress = (explanation: string) => {
// //     setSelectedExplanation(explanation);
// //     setModalVisible(true);
// //   };

// //   const closeModal = () => {
// //     setModalVisible(false);
// //     setSelectedExplanation(null);
// //   };

// //   if (loading) {
// //     return <ActivityIndicator size="large" color="#0000ff" />;
// //   }

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.header}>Welcome, {firstName}</Text>
// //       <Text style={styles.title}>Select Level of Aggression</Text>
// //       <Text style={styles.subtitle}>{pageType} Options</Text>
      
// //       {error && <Text style={styles.errorText}>{error}</Text>}

// //       <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
// //         <Text style={styles.skipButtonText}>Skip</Text>
// //       </TouchableOpacity>

// //       <FlatList
// //         data={questions}
// //         keyExtractor={(item) => item.id.toString()}
// //         renderItem={({ item }) => (
// //           <View style={styles.questionItem}>
// //             <Text style={styles.questionText}>{item.text || 'No question available'}</Text>
// //             <View style={styles.questionActions}>
// //               <TouchableOpacity
// //                 style={item.is_selected === '1' ? styles.selectedButton : styles.selectButton}
// //                 onPress={() => handleQuestionSelect(item)}
// //               >
// //                 <Text>{item.is_selected === '1' ? 'Selected' : 'Select'}</Text>
// //               </TouchableOpacity>
// //               <Text style={styles.ratingBadge}>{item.rating}</Text>
// //               <TouchableOpacity onPress={() => handleInfoPress(item.explanation)}>
// //                 <Text style={styles.infoIcon}>ℹ️</Text>
// //               </TouchableOpacity>
// //             </View>
// //             <Text style={styles.aggressionType}>{item.aggression_type}</Text>
// //           </View>
// //         )}
// //       />

// //       {/* Modal for Explanation */}
// //       <Modal
// //         animationType="slide"
// //         transparent={true}
// //         visible={modalVisible}
// //         onRequestClose={closeModal}
// //       >
// //         <View style={styles.modalContainer}>
// //           <View style={styles.modalContent}>
          
// //             <ScrollView>
// //             <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
// //               <Text style={styles.closeButtonText}>Close</Text>
// //             </TouchableOpacity>
// //             <Text style={styles.modalheading}>Explore This Stage of Aggression!</Text>
// //               <RenderHTML contentWidth={300} source={{ html: selectedExplanation }} />
// //             </ScrollView>
           
// //           </View>
// //         </View>
// //       </Modal>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 16,
// //   },
// //   header: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginBottom: 16,
// //   },
// //   modalheading:{
// // color:'black',
// // textAlign:'center',
// // fontSize: 20,
// //   },
// //   title: {
// //     fontSize: 18,
// //     textAlign: 'center',
// //     marginBottom: 8,
// //   },
// //   subtitle: {
// //     fontSize: 16,
// //     textAlign: 'center',
// //     marginBottom: 16,
// //   },
// //   skipButton: {
// //     alignSelf: 'flex-end',
// //     backgroundColor: 'red',
// //     paddingHorizontal: 16,
// //     paddingVertical: 8,
// //     borderRadius: 5,
// //   },
// //   skipButtonText: {
// //     color: 'white',
// //   },
// //   questionItem: {
// //     padding: 10,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#ccc',
// //   },
// //   questionText: {
// //     fontSize: 16,
// //     color: 'black',
// //   },
// //   questionActions: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginTop: 8,
// //   },
// //   selectButton: {
// //     backgroundColor: 'blue',
// //     padding: 8,
// //     borderRadius: 5,
// //   },
// //   selectedButton: {
// //     backgroundColor: 'red',
// //     padding: 8,
// //     borderRadius: 5,
// //   },
// //   ratingBadge: {
// //     marginLeft: 16,
// //     fontSize: 16,
// //     color: '#000',
// //   },
// //   infoIcon: {
// //     marginLeft: 16,
// //     fontSize: 22,
// //     color: '#9d0808',
// //   },
// //   aggressionType: {
// //     fontSize: 14,
// //     color: '#555',
// //     marginTop: 4,
// //   },
// //   errorText: {
// //     color: 'red',
// //     marginBottom: 16,
// //   },
// //   modalContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
// //   },
// //   modalContent: {
// //     width: '100%',
// //     height: '100%',
// //     backgroundColor: 'white',
// //     borderRadius: 10,
// //     padding: 20,
// //     alignItems: 'center',
// //   },
// //   closeButton: {
// //     backgroundColor: 'blue',
// //     padding: 10,
// //     borderRadius: 5,
// //   },
// //   closeButtonText: {
// //     color: 'white',
// //   },
// // });

// // export default QuestionPage;

// // in above code after click on select make it selected and navigate to previous screen with item.rating. Display that item.rating on top of that page. Below code is previous screen of above code. Also from below code if i again click on that page navigate to above page and selected item.text show on top of flat list. Do changes as per requirement without any problem

// // import React from 'react';
// // import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// // import { Api } from '../providers/api/api';
// // import { DistributionlistProvider } from '../providers/distributionlist/distributionlist';
// // import { AggressionlevelProvider } from '../providers/aggressionlevel/aggressionlevel'; // Import AggressionlevelProvider
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import ProfileProvider from '../providers/profile/profile';
// // import { useRoute } from '@react-navigation/native';

// // // Import all images
// // import info from '../assets/img/info.png';
// // import meter from '../assets/img/meter.png';
// // import back from '../assets/img/back.png';
// // import green_ar from '../assets/img/green_ar.png';

// // interface Props {
// //   navigation: any;
// // }

// // interface State {
// //   suspectInfo: any;
// //   pages: any[];
// //   number: number;
// //   state: string;
// //   shareShow: boolean;
// //   corporate: boolean;
// //   agressionResult: any;
// //   level: any[];
// //   otherFactor: any[];
// //   maxRating: any[];
// //   showColor: string;
// //   tabBarElement: any;
// //   storage: any;
// //   userName: string;
// //   colors: string; // To track colors for meter display
// // }

// // class AggressionMeterScreen extends React.Component<Props, State> {
// //   private api: Api;
// //   private distributionProvider: DistributionlistProvider;
// //   private profileProvider: ProfileProvider;
// //   private aggressionProvider: AggressionlevelProvider; // Add aggression provider

// //   constructor(props: Props) {
// //     super(props);
// //     this.api = new Api();
// //     this.distributionProvider = new DistributionlistProvider(this.api);
// //     this.profileProvider = new ProfileProvider(this.api);
// //     this.aggressionProvider = new AggressionlevelProvider(this.api); // Initialize provider

// //     this.state = {
// //       suspectInfo: {},
// //       pages: [
// //         { title: 'behavior', icon: 'info', rating: '', select: '', colors: '', type_id: '' },
// //         { title: 'communication', icon: 'info', rating: '', select: '', colors: '', type_id: '' },
// //         { title: 'interaction', icon: 'info', rating: '', select: '', colors: '', type_id: '' },
// //         { title: 'demeanor', icon: 'info', rating: '', select: '', colors: '', type_id: '' },
// //         { title: 'facial_expression', icon: 'info', rating: '', select: '', colors: '', type_id: '' },
// //         { title: 'tactical_movement', icon: 'info', rating: '', select: '', colors: '', type_id: '' },
// //         { title: 'other_concerning_factors', icon: 'info', rating: '', select: '', colors: '', type_id: '' },
// //         { title: 'Files', icon: 'info', rating: '', select: '', colors: '', type_id: '' },
// //         { title: 'best practices', icon: 'info', rating: '', select: '', colors: '', type_id: '' },
// //       ],
// //       number: 0,
// //       state: '0',
// //       shareShow: false,
// //       corporate: false,
// //       agressionResult: {},
// //       level: [],
// //       otherFactor: [],
// //       maxRating: [],
// //       showColor: '',
// //       tabBarElement: null,
// //       userName: '',
// //       colors: 'rgba(102, 102, 102, 0.5)', // Default color for the meter
// //     };
// //   }

// //   componentDidMount() {
// //     this.fetchUserName();
// //   }

// //   fetchUserName = async () => {
// //     try {
// //       const userData = await AsyncStorage.getItem('user');
// //       const { user_id, token } = userData ? JSON.parse(userData) : {};

// //       if (!user_id || !token) {
// //         Alert.alert('Error', 'User not authenticated.');
// //         return;
// //       }

// //       const response = await this.profileProvider.user_info({ user_id, token });
// //       const userDataResponse = response.data;

// //       this.setState({ userName: userDataResponse.firstname });
// //     } catch (error) {
// //       console.error('Error fetching user info:', error);
// //       Alert.alert('Error', 'Failed to fetch user information.');
// //     }
// //   };

// //   getQuestion = async (item: any) => {
 
// //     try {
// //       const userData = await AsyncStorage.getItem('user');
// //       const { user_id, token } = userData ? JSON.parse(userData) : {};

// //       if (!user_id || !token) {
// //         Alert.alert('Error', 'User not authenticated.');
// //         return;
// //       }

// //       const myModalData = {
// //         token: token,
// //         user_id: user_id,
// //         type: item.title,
// //       };

// //       // Call aggression level function before navigating if needed
// //       const aggressionInfo = { user_id, type: item.title };
// //       const aggressionResponse = await this.aggressionProvider.aggression_level(aggressionInfo);
// //       console.log('Aggression Level Response:', aggressionResponse.data); // Handle the response as needed

// //       this.props.navigation.navigate('QuestionPage', {
// //         data: myModalData,
// //         // onDismiss: this.handleModalDismiss,
// //       });
// //     } catch (error) {
// //       console.error('Error getting token or user_id:', error);
// //       Alert.alert('Error', 'Failed to get token or user_id.');
// //     }
// //   };

// //   handleModalDismiss = (data: any) => {
// //     if (data && data.qes[0]) {
// //       this.setState({ hide_: true });

// //       const { name, case_id, qes } = data;
// //       const { rating } = qes[0];

// //       if (name === 'other concerning factors') {
// //         this.setState((prevState) => ({
// //           otherFactor: [...prevState.otherFactor, { case_id, type_id: qes[0].id, type: name, rating }],
// //         }));
// //       } else {
// //         this.setState((prevState) => ({
// //           level: [...prevState.level, { case_id, type_id: qes[0].id, type: name, rating }],
// //         }));
// //       }

// //       this.updateMaxRating(name, rating);
// //       this.saveData();
// //     }
// //   };

// //   saveData = async () => {
// //     try {
// //       const { otherFactor, level } = this.state;
// //       await AsyncStorage.setItem('other_factor', JSON.stringify(otherFactor));
// //       await AsyncStorage.setItem('level', JSON.stringify(level));
// //     } catch (error) {
// //       console.error('Error saving data:', error);
// //     }
// //   };

// //   updateMaxRating = (pageName: string, rating: number) => {
// //     this.setState(
// //       (prevState) => {
// //         const maxRatingExists = prevState.maxRating.find((item) => item.page === pageName);

// //         if (maxRatingExists) {
// //           return {
// //             maxRating: prevState.maxRating.map((item) =>
// //               item.page === pageName ? { ...item, data: rating } : item
// //             ),
// //           };
// //         } else {
// //           return {
// //             maxRating: [...prevState.maxRating, { page: pageName, data: rating }],
// //           };
// //         }
// //       },
// //       () => {
// //         this.updateNumberAndColor();
// //       }
// //     );
// //   };

// //   updateNumberAndColor = () => {
// //     const max = this.state.maxRating.reduce(
// //       (prev, current) => (prev.data > current.data ? prev : current),
// //       { data: 0 }
// //     );
// //     const { data: maxRating } = max;

// //     this.setState({ number: maxRating }, this.updateColor);
// //   };

// //   updateColor = () => {
// //     const { number } = this.state;

// //     if (number < 30) {
// //       this.setState({ showColor: 'rgba(0, 255, 0, 0.5)' }); // Green
// //     } else if (number < 60) {
// //       this.setState({ showColor: 'rgba(255, 255, 0, 0.5)' }); // Yellow
// //     } else {
// //       this.setState({ showColor: 'rgba(255, 0, 0, 0.5)' }); // Red
// //     }
// //   };

// //   render() {
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

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //     alignItems: 'center',
// //   },
// //   userNameText: {
// //     fontSize: 20,
// //     marginBottom: 20,
// //   },
// //   meterContainer: {
// //     position: 'relative',
// //   },
// //   meterImage: {
// //     width: 200,
// //     height: 100,
// //   },
// //   colorOverlay: {
// //     position: 'absolute',
// //     top: 0,
// //     left: 0,
// //     right: 0,
// //     bottom: 0,
// //     opacity: 0.5,
// //   },
// //   ratingText: {
// //     fontSize: 18,
// //     marginVertical: 20,
// //   },
// //   backButton: {
// //     width: 50,
// //     height: 50,
// //   },
// //   infoIcon: {
// //     width: 30,
// //     height: 30,
// //   },
// // });

// // export default AggressionMeterScreen;




// import React, { useState, useEffect, useCallback } from 'react';
// import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Alert, StyleSheet, Modal, ScrollView, Image } from 'react-native';
// import { useRoute } from '@react-navigation/native';
// import { Api } from '../providers/api/api';
// import AgressionMeterQuestionProvider from '../providers/agressionmeter-question/agressionmeter-question';
// import { useNavigation } from '@react-navigation/native';
// import ProfileProvider from '../providers/profile/profile';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import RenderHTML from 'react-native-render-html'; // Import RenderHTML
// import { useLoader } from '../providers/loader/loader';

// const api = new Api('https://aggressionmanagement.com/api');
// const aggressionMeterProvider = new AgressionMeterQuestionProvider(api);
// const profileProvider = new ProfileProvider(api);

// const QuestionPage: React.FC = () => {
//   const route = useRoute();
//   const [questions, setQuestions] = useState<any[]>([]);
//   const [selectedItemId, setSelectedItemId] = useState<string>('');
//   const { showLoader, hideLoader } = useLoader();
//   const [error, setError] = useState<string | null>(null);
//   const [firstName, setFirstName] = useState<string | null>(null);
//   const [pageType, setPageType] = useState<string>(''); 
//   const navigation = useNavigation();
//   const [modalVisible, setModalVisible] = useState<boolean>(false);
//   const [selectedExplanation, setSelectedExplanation] = useState<string | null>(null);

//   useEffect(() => {
//     fetchQuestions();
//   }, [fetchQuestions]);

//   useEffect(() => {
//     if (route.params && route.params.selectedItemId) {
//       setSelectedItemId(route.params.selectedItemId);
//     }
//   }, [route.params]);

//   const fetchQuestions = useCallback(async () => {
//     try {
//       showLoader(); 
//       const userData = await AsyncStorage.getItem('user');
//       if (!userData) {
//         Alert.alert('Error', 'User not authenticated.');
//         return;
//       }

//       const { user_id: storedUserId, token: storedToken } = JSON.parse(userData);
//       if (!storedUserId || !storedToken) {
//         Alert.alert('Error', 'User not authenticated.');
//         return;
//       }

//       const userInfoResponse = await profileProvider.user_info({
//         token: storedToken,
//         user_id: storedUserId,
//       });

//       setFirstName(userInfoResponse?.data?.firstname || 'Guest');

//       const params = route as any;
//       const { token, user_id, type, case_id, rating } = params.params.data;

//       const pageTypeValue = getPageType(type);
//       setPageType(pageTypeValue);
//       const response = await aggressionMeterProvider.emergencyMeterQuestion({
//         token,
//         type: pageTypeValue,
//         user_id,
//         case_id,
//       });

      

//       if (response && response.result !== 'failed') {
//         const updatedQuestions = response.map((item: any) => {
//           let is_selected = '0';
//           if (item.rating === rating) {
//             is_selected = '1';
//           }
//           return { ...item, is_selected };
//         });

//         updatedQuestions.sort((a, b) => {
//           if (a.is_selected === '1' && b.is_selected === '0') {
//             return -1;
//           } else if (a.is_selected === '0' && b.is_selected === '1') {
//             return 1;
//           } else {
//             return 0;
//           }
//         });

//         setQuestions(updatedQuestions);
//       } else {
//         showAlert('Error', response.msg || 'Failed to load questions');
//       }
//     } catch (err) {
//       setError(' ');
//     } finally {
//       hideLoader();
//     }
//   }, [route.params]);

//   const getPageType = (typeId: string) => {
//     const pageTypes: any = {
//       behavior: 'behavior',
//       communication: 'communication',
//       interaction: 'interaction',
//       demeanor: 'demeanor',
//       facial_expression: 'facial_expression',
//     tactical_movement: 'tactical_movement',
//     other_concerning_factors: 'tactical_clothing', 
  
//     };
//     return pageTypes[typeId] || '';
//   };

//   const isSelected = (item: any) => {
//     return item.is_selected === '1';
//   };

//   const showAlert = (title: string, message: string) => {
//     Alert.alert(title, message);
//   };

//   const handleSkip = () => {
//     navigation.goBack();
//   };

//   const handleQuestionSelect = (selectedQuestion) => {
//     setQuestions((prevQuestions) => {
//       const updatedQuestions = prevQuestions.map((q) => ({
//         ...q,
//         is_selected: q.id === selectedQuestion.id ? '1' : '0', // Mark only the selected question
//       }));

//       // Find the selected question and move it to the top
//       const selected = updatedQuestions.find(q => q.id === selectedQuestion.id);
//       const others = updatedQuestions.filter(q => q.id !== selectedQuestion.id);

//       return [selected, ...others];
//     });
//     // Navigate back to AggressionMeterScreen with the selected item's rating and aggression type
//     navigation.navigate('AggressionMeterScreen', {
//       avg_rating: selectedQuestion.rating,
//       aggression_type: selectedQuestion.aggression_type,
//     });
//   };

//   const handleInfoPress = (explanation: string) => {
//     setSelectedExplanation(explanation);
//     setModalVisible(true);
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//     setSelectedExplanation(null);
//   };

 

//   return (
    
//     <View style={styles.container}>

//       <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
//         <Text style={styles.skipButtonText}>SKIP</Text>
//       </TouchableOpacity>

 
//       <Text style={styles.title}>SELECT LEVEL OF AGGRESSION</Text>
//       <Text style={styles.subtitle}>{pageType} Options</Text>
      
//       {error && <Text style={styles.errorText}>{error}</Text>}

      
//       <FlatList
//            data={questions.sort((a, b) => {
//             if (a.is_selected === '1' && b.is_selected === '0') {
//               return -1;
//             } else if (a.is_selected === '0' && b.is_selected === '1') {
//               return 1;
//             } else {
//               return 0;
//             }
//           })}
//             keyExtractor={(item) => item.id.toString()}
//             renderItem={({ item }) => (
//           <View style={styles.questionContainer}>
//           <View style={styles.questionItem}>
//             <Text style={styles.questionText}>{item.text || 'No question available'}</Text>
            
//             <View style={styles.questionActions}>
//           <TouchableOpacity
//             onPress={() => {
//               handleQuestionSelect(item);
//               navigation.navigate('AggressionMeterScreen', {
//                 avg_rating: item.rating,
//                 aggression_type: item.aggression_type,
//               });
//             }}
//   style={[
//     item.is_selected === '1' ? styles.selectedButton : styles.selectButton,
    
//   ]}
// >
//            <Text style={item.is_selected === '1' ? styles.selectedButtonText : styles.selectButtonText}>
//              {item.is_selected === '1' ? 'Selected' : 'SELECT'}
//            </Text>
//      </TouchableOpacity>
//             <Text style={styles.ratingBadge}>{item.rating}</Text>
//           <TouchableOpacity onPress={() => handleInfoPress(item.explanation)}>
//               <Image source={require('../assets/img/info.png')} style={styles.infoIcon} />
//           </TouchableOpacity>
//           </View>
//             <Text style={styles.aggressionType}>{item.aggression_type}</Text>
//           </View>
//           </View>
//         )}
//       />


//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={closeModal}
//       >
//           <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
          
//   <ScrollView>
//         <TouchableOpacity style={styles.closeButton1} onPress={closeModal}>
//               <Text style={styles.closeButtonText1}>SKIP</Text>
        

//         </TouchableOpacity>
//               <Text style={styles.modalheading1}>EXPLORE THIS STAGE OF AGGRESSION!</Text>
//               <RenderHTML contentWidth={400} source={{ html: selectedExplanation }} baseStyle={{ fontSize: 18 }} />
//   </ScrollView>
           
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   header: {
//     fontSize: 70,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
  
//   modalheading:{
//    color:'white',
//    fontSize: 20,
//   },
//   modalheading1:{
//     color:'black',
//     textAlign:'center',
//     fontSize: 28,
//     marginBottom: 15,
//       },
//   title: {
//     fontSize: 20,
//     textAlign: 'center',
//     marginBottom: 10,
//     marginVertical:20,
//     fontWeight:'bold'
//   },
//   titleContainer: {
//     marginBottom: 10, // Adds spacing below the title
//     alignItems: 'center',
//   },
//   subtitle: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginBottom: 30,
//     marginTop:-10,
//     fontWeight:'bold'
//   },
//   questionContainer: {
//     backgroundColor: '#f9f9f9', // Light background for each item
//     borderRadius: 10, // Add border radius for the container
//     padding: 10, // Padding inside the box
//     marginBottom: 8,// Space between items
//     borderColor: 'white', // Optional: Border color
//     borderWidth: 1, // Optional: Border width
//     shadowColor: 'grey', // Shadow color
    
//     shadowOffset: { width: 2, height: 3 }, // Shadow offset
//     shadowOpacity: 20, // Shadow opacity
//     shadowRadius: 15, // Shadow blur radius
//     elevation: 40, // Elevation for Android shadow

//   },
 
//   skipButton: {
//     alignSelf: 'flex-end',
//     backgroundColor: 'white',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 2,
//     borderWidth:1,
//     borderColor:'red'
    

   
    
//   },
//   skipButtonText: {
//     color: 'red',
//   },
//   questionItem: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   questionText: {
//     fontSize: 16,
//     color: 'black',
//     marginBottom:10,
//   },
//   questionActions: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 5,
//       borderTopStyle: 'solid',
//       borderBottomStyle: 'solid',
//       borderTopWidth: 0.5,
//       borderBottomWidth:0.5,
//       borderColor: '#ccc', 
     
     
//   },
//   selectButton: {
//     backgroundColor: 'brown',
//     padding: 8,
//     borderRadius: 10,
//     paddingHorizontal: 20,
//     color:'white',
//     marginTop:15,
//     marginBottom:15,
    
//   },
//   selectedButton: {
//      backgroundColor: 'white',
//      padding: 8,
//      borderRadius: 10,
//      borderColor:'red',
//      borderWidth:1,
//      marginTop:15,
//      marginBottom:15,
    
//   },
//   ratingBadge: {
//     marginLeft: 90,
//     fontSize: 16,
//     marginTop:15,
//     color: 'brown',
//     paddingHorizontal:8,
    
//     // paddingVertical:8,
//     marginBottom:15,
   
//    borderRadius:10,
//     borderColor: 'brown',
//     borderWidth:1,
//   },
    
    
//   infoIcon: {
//     position: 'absolute',
//     // left: 15,
//     marginLeft:90,
//     width: 10,
//     height: 20,
//     marginTop:-15,
//     tintColor:'brown',
//     padding:15,
//     textAlign:'center',
    
    
//   },
//   aggressionType: {
//     fontSize: 16,
//     color: '#555',
   
    
    
//      // fontWeight:'bold',
   
    

//   },
//   errorText: {
//     color: 'red',
//     marginBottom: 16,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'white',
//     borderRadius: 10,
//     padding: 20,
//     alignItems: 'center',
//   },
//   closeButton: {
//     backgroundColor: 'white',
//     padding: 10,
//     borderRadius: 5,
//   },
//   closeButtonText: {
//     color: 'white',
//   },
//   closeButton1: {
//     alignSelf: 'flex-end',
//     backgroundColor: 'white',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 2,
//     borderWidth:1,
//     borderColor:'red',
//     marginBottom:15,
//   },
//   closeButtonText1: {
//     color: 'red',
//   },
//    selectButtonText: {
//     color: 'white', // Text color for "SELECT" button
//   },
  
//   selectedButtonText: {
//     color: 'red', // Text color for "Selected" button
//   },
// });

// export default QuestionPage;


import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Alert, StyleSheet, Modal, ScrollView, Image,  Appearance} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Api } from '../providers/api/api';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AgressionMeterQuestionProvider from '../providers/agressionmeter-question/agressionmeter-question';
import { useNavigation } from '@react-navigation/native';
import ProfileProvider from '../providers/profile/profile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RenderHTML from 'react-native-render-html'; // Import RenderHTML
import { useLoader } from '../providers/loader/loader';

const api = new Api('https://aggressionmanagement.com/api');
const aggressionMeterProvider = new AgressionMeterQuestionProvider(api);
const profileProvider = new ProfileProvider(api);

const QuestionPage: React.FC = () => {
  const route = useRoute();
  const [questions, setQuestions] = useState<any[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<string>('');
  const { showLoader, hideLoader } = useLoader();
  const [error, setError] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string | null>(null);
  const [pageType, setPageType] = useState<string>(''); 
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedExplanation, setSelectedExplanation] = useState<string | null>(null);
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  const caseId = route.params?.data?.case_id; 
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme);
    });
    return () => subscription.remove();
  }, []);


  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  useEffect(() => {
    if (route.params && route.params.selectedItemId) {
      setSelectedItemId(route.params.selectedItemId);
    }
  }, [route.params]);

  const fetchQuestions = useCallback(async () => {
    try {
      showLoader(); 
      const userData = await AsyncStorage.getItem('user');
      if (!userData) {
        Alert.alert('Error', 'User not authenticated.');
        return;
      }

      const { user_id: storedUserId, token: storedToken } = JSON.parse(userData);
      if (!storedUserId || !storedToken) {
        Alert.alert('Error', 'User not authenticated.');
        return;
      }

      const userInfoResponse = await profileProvider.user_info({
        token: storedToken,
        user_id: storedUserId,
      });

      setFirstName(userInfoResponse?.data?.firstname || 'Guest');

      const params = route as any;
      const { token, user_id, type, rating } = params.params.data;

      const pageTypeValue = getPageType(type);
      setPageType(pageTypeValue);
      const response = await aggressionMeterProvider.emergencyMeterQuestion({
        token,
        type: pageTypeValue,
        user_id,
        case_id:caseId,
      });

      

      if (response && response.result !== 'failed') {
        const updatedQuestions = response.map((item: any) => {
          let is_selected = '0';
          if (item.rating === rating) {
            is_selected = '1';
          }
          return { ...item, is_selected };
        });

        updatedQuestions.sort((a, b) => {
          if (a.is_selected === '1' && b.is_selected === '0') {
            return -1;
          } else if (a.is_selected === '0' && b.is_selected === '1') {
            return 1;
          } else {
            return 0;
          }
        });

        setQuestions(updatedQuestions);
      } else {
        showAlert('Error', response.msg || 'Failed to load questions');
      }
    } catch (err) {
      setError(' ');
    } finally {
      hideLoader();
    }
  }, [route.params]);

  const getPageType = (typeId: string) => {
    const pageTypes: any = {
      behavior: 'behavior',
      communication: 'communication',
      interaction: 'interaction',
      demeanor: 'demeanor',
      facial_expression: 'facial_expression',
    tactical_movement: 'tactical_movement',
    other_concerning_factors: 'tactical_clothing', 
  
    };
    return pageTypes[typeId] || '';
  };

  const isSelected = (item: any) => {
    return item.is_selected === '1';
  };

  const showAlert = (title: string, message: string) => {
    Alert.alert(title, message);
  };

  const handleSkip = () => {
    navigation.goBack();
  };
 
  const mapPageType = (type) => {
    switch (type) {
        case 'facial_expression':
            return 'facial expression';
        case 'tactical_clothing':
            return 'other concerning factors';
        default:
            return type; // Return the original type if no mapping is needed
    }
};
const mappedPageType = mapPageType(pageType);
  const handleQuestionSelect = (selectedQuestion) => {
    console.log('Selected Question:', selectedQuestion); // Log the selected question details
    setQuestions((prevQuestions) => {
      const updatedQuestions = prevQuestions.map((q) => ({
        ...q,
        is_selected: q.id === selectedQuestion.id ? '1' : '0', // Mark only the selected question
      }));

      // Find the selected question and move it to the top
      const selected = updatedQuestions.find(q => q.id === selectedQuestion.id);
      const others = updatedQuestions.filter(q => q.id !== selectedQuestion.id);

      return [selected, ...others];
    });
    console.log('Navigating to AggressionMeterScreen with values:', {
      rating: selectedQuestion.rating,
      pageType: mappedPageType,
       case_id: caseId, 
    });
    // Navigate back to AggressionMeterScreen with the selected item's rating and aggression type
    navigation.navigate('AggressionMeterScreen', {
      rating: selectedQuestion.rating,
      pageType: mappedPageType,
       case_id: caseId, 
    });
  };
  

  const handleInfoPress = (explanation: string) => {
    setSelectedExplanation(explanation);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedExplanation(null);
  };

 

  return (
    
    <View style={styles.container}>

      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipButtonText}>SKIP</Text>
      </TouchableOpacity>

 
      <Text style={theme === 'dark' ? styles.titleDark : styles.title}>SELECT LEVEL OF AGGRESSION</Text>
<Text style={theme === 'dark' ? styles.subtitleDark : styles.subtitle}>{pageType} Options</Text>
      {error && <Text style={styles.errorText}>{error}</Text>}

      
      <FlatList
           data={questions.sort((a, b) => {
            if (a.is_selected === '1' && b.is_selected === '0') {
              return -1;
            } else if (a.is_selected === '0' && b.is_selected === '1') {
              return 1;
            } else {
              return 0;
            }
          })}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
          <View style={styles.questionContainer}>
          <View style={styles.questionItem}>
            <Text style={styles.questionText}>{item.text || 'No question available'}</Text>
            
            <View style={styles.questionActions}>
            <TouchableOpacity
  onPress={() => handleQuestionSelect(item)} // Call the updated function
  style={[
    item.is_selected === '1' ? styles.selectedButton : styles.selectButton,
  ]}
>
  <Text style={item.is_selected === '1' ? styles.selectedButtonText : styles.selectButtonText}>
    {item.is_selected === '1' ? 'Selected' : 'Select'}
  </Text>
</TouchableOpacity>
            <Text style={styles.ratingBadge}>{item.rating}</Text>
          <TouchableOpacity onPress={() => handleInfoPress(item.explanation)}>
              <Image source={require('../assets/img/info.png')} style={styles.infoIcon} />
          </TouchableOpacity>
          </View>
            <Text style={styles.aggressionType}>{item.aggression_type}</Text>
          </View>
          </View>
        )}
      />


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
          <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          
  <ScrollView>
        <TouchableOpacity style={styles.closeButton1} onPress={closeModal}>
              <Text style={styles.closeButtonText1}>SKIP</Text>
        

        </TouchableOpacity>
              <Text style={styles.modalheading1}>EXPLORE THIS STAGE OF AGGRESSION!</Text>
              <RenderHTML contentWidth={400} source={{ html: selectedExplanation }} baseStyle={{  fontSize: wp('4%'), color:'#666'}} />
  </ScrollView>
           
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('4%'), // Responsive padding
    backgroundColor: '#F7F7F7',
  },
  containerDark: { flex: 1, backgroundColor: '#121212' },
   divider: {
    width: '100%', // Full width
    height: 1,     // Height of the line
    backgroundColor: '#ccc', // Gray line color
    marginBottom: 10, // Space between the line and the next element
  },
  header: {
    fontSize: 70,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  
  modalheading:{
   color:'white',
   fontSize: 20,
  },
  modalheading1:{
    color:'rgba(77, 77, 77, 1)',
    textAlign:'center',
    fontSize: wp('7%'),
    fontFamily:'robotoblack', 
    marginBottom: 15,
      },
      title: {
        fontSize: wp('5%'), // Responsive font size
        textAlign: 'center',
        marginBottom: hp('2%'), // Responsive margin
        marginVertical: hp('2%'),
        color: Appearance.getColorScheme() === 'dark' ? 'white' : '#000',
      },
titleDark: {
  fontSize: wp('5%'), // Responsive font size
  textAlign: 'center',
  marginBottom: hp('2%'), // Responsive margin
  marginVertical: hp('2%'),
  color: 'black',
},
  titleContainer: {
    marginBottom: 10, // Adds spacing below the title
    alignItems: 'center',
  },
  subtitle: {
    fontSize: wp('4%'), // Responsive font size
    textAlign: 'center',
    marginBottom: hp('3%'), // Responsive margin
    marginTop: hp('-1%'),
    color: '#000',
  },
  subtitleDark: {
    fontSize: wp('4%'), // Responsive font size
    textAlign: 'center',
    marginBottom: hp('3%'), // Responsive margin
    marginTop: hp('-1%'),
    color: 'black',
  },
  questionContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: wp('3%'), // Responsive padding
    marginBottom: hp('1%'), // Responsive margin
    borderColor: 'white',
    borderWidth: 1,
    shadowColor: 'grey',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 4,
  },
 
  skipButton: {
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    paddingHorizontal: wp('5%'), // Responsive padding
    paddingVertical: hp('1.5%'), // Responsive padding
    borderRadius: 2,
    borderWidth: 1,
    borderColor: 'red',
  },
  skipButtonText: {
    color: 'red',
    fontSize: wp('4%'),
  },
  questionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  questionText: {
    fontSize: wp('4%'), // Responsive font size
    color: 'black',
    marginBottom: hp('1%'), // Responsive margin
  },
  questionActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp('1%'), // Responsive margin
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  selectButton: {
    backgroundColor: 'brown',
    padding: hp('1%'), // Responsive padding
    borderRadius: 10,
    paddingHorizontal: wp('5%'), // Responsive padding
    color: 'white',
    marginTop: hp('1%'), // Responsive margin
    marginBottom: hp('1%'), // Responsive margin
  },
  selectedButton: {
    backgroundColor: 'white',
    padding: hp('1%'), // Responsive padding
    borderRadius: 10,
    borderColor: 'red',
    borderWidth: 1,
    
    marginTop: hp('1%'), // Responsive margin
    marginBottom: hp('1%'), // Responsive margin
  },
  ratingBadge: {
    marginLeft: wp('10%'), // Responsive margin
    fontSize: wp('4%'), // Responsive font size
    marginTop: hp('1%'), // Responsive margin
    color: 'brown',
    paddingHorizontal: wp('2%'), // Responsive padding
    marginBottom: hp('1%'), // Responsive margin
    borderRadius: 10,
    borderColor: 'brown',
    borderWidth: 1,
  },
    
    
  infoIcon: {
    width: wp('6%'), // Responsive size
    height: wp('6%'), // Responsive size
    marginLeft: wp('10%'), // Responsive margin
    tintColor: 'brown',
    alignSelf: 'center',
  },
  aggressionType: {
    color: '#555',
   
    
    
     // fontWeight:'bold',
   
    

  },
  errorText: {
    color: 'red',
    marginBottom: hp('2%'), // Responsive margin
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: wp('5%'), // Responsive padding
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
  },
  closeButton1: {
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    paddingHorizontal: wp('4%'), // Responsive padding
    paddingVertical: hp('1.5%'), // Responsive padding
    borderRadius: 2,
    borderWidth: 1,
    borderColor: 'red',
    marginBottom: hp('2%'), // Responsive margin
  },
  closeButtonText1: {
    color: 'red',
    fontSize: wp('4%'),
    
  },
   selectButtonText: {
    color: 'white',
    fontSize: wp('4%'), // Text color for "SELECT" button
  },
  
  selectedButtonText: {
    color: 'red',
    fontSize: wp('4%'), // Text color for "Selected" button
  },
});

export default QuestionPage;