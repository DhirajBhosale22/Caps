// import React, { useState, useEffect, useCallback } from 'react';
// import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Alert, StyleSheet, Modal, ScrollView } from 'react-native';
// import { useRoute } from '@react-navigation/native';
// import { Api } from '../providers/api/api';
// import AgressionMeterQuestionProvider from '../providers/agressionmeter-question/agressionmeter-question';
// import ProfileProvider from '../providers/profile/profile';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import RenderHTML from 'react-native-render-html'; // Import RenderHTML

// const api = new Api('http://aggressionmanagement.com/api');
// const aggressionMeterProvider = new AgressionMeterQuestionProvider(api);
// const profileProvider = new ProfileProvider(api);

// const QuestionPage: React.FC = () => {
//   const route = useRoute();
//   const [questions, setQuestions] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);
//   const [firstName, setFirstName] = useState<string | null>(null);
//   const [pageType, setPageType] = useState<string>(''); 
 
//   const [modalVisible, setModalVisible] = useState<boolean>(false);
//   const [selectedExplanation, setSelectedExplanation] = useState<string | null>(null);

//   useEffect(() => {
//     fetchQuestions();
//   }, [fetchQuestions]);

//   const fetchQuestions = useCallback(async () => {
//     try {
//       setLoading(true);

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
//       const { token, user_id, type } = params.params.data;

//       const pageTypeValue = getPageType(type);
//       setPageType(pageTypeValue);
//       const response = await aggressionMeterProvider.emergencyMeterQuestion({
//         token,
//         type: pageTypeValue,
//         user_id,
//       });

//       if (response && response.result !== 'failed') {
//         const updatedQuestions = response.map((item: any) => ({
//           ...item,
//           is_selected: isSelected(item) ? '1' : '0',
//         }));
//         setQuestions(updatedQuestions);
//         // setComponentName(params.params.data.name); // Setting the component name
//       } else {
//         showAlert('Error', response.msg || 'Failed to load questions');
//       }
//     } catch (err) {
//       setError('No internet connection, make sure Wi-Fi or cellular data is turned on, then try again.');
//     } finally {
//       setLoading(false);
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
//     console.log("Skip button pressed");
//   };

//   const handleQuestionSelect = (qes: any) => {
//     console.log('Question selected:', qes);
//   };

//   const handleInfoPress = (explanation: string) => {
//     setSelectedExplanation(explanation);
//     setModalVisible(true);
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//     setSelectedExplanation(null);
//   };

//   if (loading) {
//     return <ActivityIndicator size="large" color="#0000ff" />;
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Welcome, {firstName}</Text>
//       <Text style={styles.title}>Select Level of Aggression</Text>
//       <Text style={styles.subtitle}>{pageType} Options</Text>
      
//       {error && <Text style={styles.errorText}>{error}</Text>}

//       <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
//         <Text style={styles.skipButtonText}>Skip</Text>
//       </TouchableOpacity>

//       <FlatList
//         data={questions}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.questionItem}>
//             <Text style={styles.questionText}>{item.text || 'No question available'}</Text>
//             <View style={styles.questionActions}>
//               <TouchableOpacity
//                 style={item.is_selected === '1' ? styles.selectedButton : styles.selectButton}
//                 onPress={() => handleQuestionSelect(item)}
//               >
//                 <Text>{item.is_selected === '1' ? 'Selected' : 'Select'}</Text>
//               </TouchableOpacity>
//               <Text style={styles.ratingBadge}>{item.rating}</Text>
//               <TouchableOpacity onPress={() => handleInfoPress(item.explanation)}>
//                 <Text style={styles.infoIcon}>ℹ️</Text>
//               </TouchableOpacity>
//             </View>
//             <Text style={styles.aggressionType}>{item.aggression_type}</Text>
//           </View>
//         )}
//       />

//       {/* Modal for Explanation */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={closeModal}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
          
//             <ScrollView>
//             <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
//               <Text style={styles.closeButtonText}>Close</Text>
//             </TouchableOpacity>
//             <Text style={styles.modalheading}>Explore This Stage of Aggression!</Text>
//               <RenderHTML contentWidth={300} source={{ html: selectedExplanation }} />
//             </ScrollView>
           
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
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   modalheading:{
// color:'black',
// textAlign:'center',
// fontSize: 20,
//   },
//   title: {
//     fontSize: 18,
//     textAlign: 'center',
//     marginBottom: 8,
//   },
//   subtitle: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginBottom: 16,
//   },
//   skipButton: {
//     alignSelf: 'flex-end',
//     backgroundColor: 'red',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 5,
//   },
//   skipButtonText: {
//     color: 'white',
//   },
//   questionItem: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   questionText: {
//     fontSize: 16,
//     color: 'black',
//   },
//   questionActions: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 8,
//   },
//   selectButton: {
//     backgroundColor: 'blue',
//     padding: 8,
//     borderRadius: 5,
//   },
//   selectedButton: {
//     backgroundColor: 'red',
//     padding: 8,
//     borderRadius: 5,
//   },
//   ratingBadge: {
//     marginLeft: 16,
//     fontSize: 16,
//     color: '#000',
//   },
//   infoIcon: {
//     marginLeft: 16,
//     fontSize: 22,
//     color: '#9d0808',
//   },
//   aggressionType: {
//     fontSize: 14,
//     color: '#555',
//     marginTop: 4,
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
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//   },
//   closeButtonText: {
//     color: 'white',
//   },
// });

// export default QuestionPage;
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Alert, StyleSheet, Modal, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native'; // Import useNavigation
import { Api } from '../providers/api/api';
import AgressionMeterQuestionProvider from '../providers/agressionmeter-question/agressionmeter-question';
import ProfileProvider from '../providers/profile/profile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RenderHTML from 'react-native-render-html'; // Import RenderHTML

const api = new Api('http://aggressionmanagement.com/api');
const aggressionMeterProvider = new AgressionMeterQuestionProvider(api);
const profileProvider = new ProfileProvider(api);

const QuestionPage: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation(); // Use navigation for navigation actions
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string | null>(null);
  const [pageType, setPageType] = useState<string>(''); 
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedExplanation, setSelectedExplanation] = useState<string | null>(null);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  const fetchQuestions = useCallback(async () => {
    try {
      setLoading(true);
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
      const { token, user_id, type } = params.params.data;

      const pageTypeValue = getPageType(type);
      setPageType(pageTypeValue);
      const response = await aggressionMeterProvider.emergencyMeterQuestion({
        token,
        type: pageTypeValue,
        user_id,
      });

      if (response && response.result !== 'failed') {
        const updatedQuestions = response.map((item: any) => ({
          ...item,
          is_selected: isSelected(item) ? '1' : '0',
        }));
        setQuestions(updatedQuestions);
      } else {
        showAlert('Error', response.msg || 'Failed to load questions');
      }
    } catch (err) {
      setError('No internet connection, make sure Wi-Fi or cellular data is turned on, then try again.');
    } finally {
      setLoading(false);
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

  const handleQuestionSelect = (qes: any) => {
    // Mark the question as selected
    const updatedQuestions = questions.map((item) =>
      item.id === qes.id ? { ...item, is_selected: '1' } : item
    );
    setQuestions(updatedQuestions);

    // Navigate back to the previous screen and pass the selected rating and text
    navigation.navigate('AggressionMeterScreen', {
      selectedRating: qes.rating,
      selectedText: qes.text,
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

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome, {firstName}</Text>
      <Text style={styles.title}>Select Level of Aggression</Text>
      <Text style={styles.subtitle}>{pageType} Options</Text>
      
      {error && <Text style={styles.errorText}>{error}</Text>}

      <FlatList
        data={questions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.questionItem}>
            <Text style={styles.questionText}>{item.text || 'No question available'}</Text>
            <View style={styles.questionActions}>
              <TouchableOpacity
                style={item.is_selected === '1' ? styles.selectedButton : styles.selectButton}
                onPress={() => handleQuestionSelect(item)} // Pass item to handleQuestionSelect
              >
                <Text>{item.is_selected === '1' ? 'Selected' : 'Select'}</Text>
              </TouchableOpacity>
              <Text style={styles.ratingBadge}>{item.rating}</Text>
              <TouchableOpacity onPress={() => handleInfoPress(item.explanation)}>
                <Text style={styles.infoIcon}>ℹ️</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.aggressionType}>{item.aggression_type}</Text>
          </View>
        )}
      />

      {/* Modal for Explanation */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
              <Text style={styles.modalheading}>Explore This Stage of Aggression!</Text>
              <RenderHTML contentWidth={300} source={{ html: selectedExplanation }} />
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
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalheading:{
color:'black',
textAlign:'center',
fontSize: 20,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  skipButton: {
    alignSelf: 'flex-end',
    backgroundColor: 'red',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 5,
  },
  skipButtonText: {
    color: 'white',
  },
  questionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  questionText: {
    fontSize: 16,
    color: 'black',
  },
  questionActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  selectButton: {
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 5,
  },
  ratingBadge: {
    marginLeft: 16,
    fontSize: 16,
    color: '#000',
  },
  infoIcon: {
    marginLeft: 16,
    fontSize: 22,
    color: '#9d0808',
  },
  aggressionType: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
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
    padding: 20,
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
  },
});

export default QuestionPage;




// import React, { useState, useEffect, useCallback } from 'react';
// import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Alert, StyleSheet, Modal, ScrollView } from 'react-native';
// import { useRoute } from '@react-navigation/native';
// import { Api } from '../providers/api/api';
// import AgressionMeterQuestionProvider from '../providers/agressionmeter-question/agressionmeter-question';
// import ProfileProvider from '../providers/profile/profile';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import RenderHTML from 'react-native-render-html'; // Import RenderHTML

// const api = new Api('http://aggressionmanagement.com/api');
// const aggressionMeterProvider = new AgressionMeterQuestionProvider(api);
// const profileProvider = new ProfileProvider(api);

// const QuestionPage: React.FC = () => {
//   const route = useRoute();
//   const [questions, setQuestions] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);
//   const [firstName, setFirstName] = useState<string | null>(null);
//   const [pageType, setPageType] = useState<string>(''); 
 
//   const [modalVisible, setModalVisible] = useState<boolean>(false);
//   const [selectedExplanation, setSelectedExplanation] = useState<string | null>(null);

//   useEffect(() => {
//     fetchQuestions();
//   }, [fetchQuestions]);

//   const fetchQuestions = useCallback(async () => {
//     try {
//       setLoading(true);

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
//       const { token, user_id, type } = params.params.data;

//       const pageTypeValue = getPageType(type);
//       setPageType(pageTypeValue);
//       const response = await aggressionMeterProvider.emergencyMeterQuestion({
//         token,
//         type: pageTypeValue,
//         user_id,
//       });

//       if (response && response.result !== 'failed') {
//         const updatedQuestions = response.map((item: any) => ({
//           ...item,
//           is_selected: isSelected(item) ? '1' : '0',
//         }));
//         setQuestions(updatedQuestions);
//         // setComponentName(params.params.data.name); // Setting the component name
//       } else {
//         showAlert('Error', response.msg || 'Failed to load questions');
//       }
//     } catch (err) {
//       setError('No internet connection, make sure Wi-Fi or cellular data is turned on, then try again.');
//     } finally {
//       setLoading(false);
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
//     console.log("Skip button pressed");
//   };

//   const handleQuestionSelect = (qes: any) => {
//     console.log('Question selected:', qes);
//   };

//   const handleInfoPress = (explanation: string) => {
//     setSelectedExplanation(explanation);
//     setModalVisible(true);
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//     setSelectedExplanation(null);
//   };

//   if (loading) {
//     return <ActivityIndicator size="large" color="#0000ff" />;
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Welcome, {firstName}</Text>
//       <Text style={styles.title}>Select Level of Aggression</Text>
//       <Text style={styles.subtitle}>{pageType} Options</Text>
      
//       {error && <Text style={styles.errorText}>{error}</Text>}

//       <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
//         <Text style={styles.skipButtonText}>Skip</Text>
//       </TouchableOpacity>

//       <FlatList
//         data={questions}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.questionItem}>
//             <Text style={styles.questionText}>{item.text || 'No question available'}</Text>
//             <View style={styles.questionActions}>
//               <TouchableOpacity
//                 style={item.is_selected === '1' ? styles.selectedButton : styles.selectButton}
//                 onPress={() => handleQuestionSelect(item)}
//               >
//                 <Text>{item.is_selected === '1' ? 'Selected' : 'Select'}</Text>
//               </TouchableOpacity>
//               <Text style={styles.ratingBadge}>{item.rating}</Text>
//               <TouchableOpacity onPress={() => handleInfoPress(item.explanation)}>
//                 <Text style={styles.infoIcon}>ℹ️</Text>
//               </TouchableOpacity>
//             </View>
//             <Text style={styles.aggressionType}>{item.aggression_type}</Text>
//           </View>
//         )}
//       />

//       {/* Modal for Explanation */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={closeModal}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
          
//             <ScrollView>
//             <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
//               <Text style={styles.closeButtonText}>Close</Text>
//             </TouchableOpacity>
//             <Text style={styles.modalheading}>Explore This Stage of Aggression!</Text>
//               <RenderHTML contentWidth={300} source={{ html: selectedExplanation }} />
//             </ScrollView>
           
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
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   modalheading:{
// color:'black',
// textAlign:'center',
// fontSize: 20,
//   },
//   title: {
//     fontSize: 18,
//     textAlign: 'center',
//     marginBottom: 8,
//   },
//   subtitle: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginBottom: 16,
//   },
//   skipButton: {
//     alignSelf: 'flex-end',
//     backgroundColor: 'red',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 5,
//   },
//   skipButtonText: {
//     color: 'white',
//   },
//   questionItem: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   questionText: {
//     fontSize: 16,
//     color: 'black',
//   },
//   questionActions: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 8,
//   },
//   selectButton: {
//     backgroundColor: 'blue',
//     padding: 8,
//     borderRadius: 5,
//   },
//   selectedButton: {
//     backgroundColor: 'red',
//     padding: 8,
//     borderRadius: 5,
//   },
//   ratingBadge: {
//     marginLeft: 16,
//     fontSize: 16,
//     color: '#000',
//   },
//   infoIcon: {
//     marginLeft: 16,
//     fontSize: 22,
//     color: '#9d0808',
//   },
//   aggressionType: {
//     fontSize: 14,
//     color: '#555',
//     marginTop: 4,
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
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//   },
//   closeButtonText: {
//     color: 'white',
//   },
// });

// export default QuestionPage;

// in above code after click on select make it selected and navigate to previous screen with item.rating. Display that item.rating on top of that page. Below code is previous screen of above code. Also from below code if i again click on that page navigate to above page and selected item.text show on top of flat list. Do changes as per requirement without any problem

// import React from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { Api } from '../providers/api/api';
// import { DistributionlistProvider } from '../providers/distributionlist/distributionlist';
// import { AggressionlevelProvider } from '../providers/aggressionlevel/aggressionlevel'; // Import AggressionlevelProvider
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import ProfileProvider from '../providers/profile/profile';
// import { useRoute } from '@react-navigation/native';

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
// }

// class AggressionMeterScreen extends React.Component<Props, State> {
//   private api: Api;
//   private distributionProvider: DistributionlistProvider;
//   private profileProvider: ProfileProvider;
//   private aggressionProvider: AggressionlevelProvider; // Add aggression provider

//   constructor(props: Props) {
//     super(props);
//     this.api = new Api();
//     this.distributionProvider = new DistributionlistProvider(this.api);
//     this.profileProvider = new ProfileProvider(this.api);
//     this.aggressionProvider = new AggressionlevelProvider(this.api); // Initialize provider

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
//       showColor: '',
//       tabBarElement: null,
//       userName: '',
//       colors: 'rgba(102, 102, 102, 0.5)', // Default color for the meter
//     };
//   }

//   componentDidMount() {
//     this.fetchUserName();
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
//     return (
//       <View style={styles.container}>
//         {/* Render content based on the state */}
//         <Text style={styles.userNameText}>{this.state.userName}</Text>
//         <View style={styles.meterContainer}>
//           <Image source={meter} style={styles.meterImage} />
//           <View style={[styles.colorOverlay, { backgroundColor: this.state.showColor }]} />
//         </View>
//         <Text style={styles.ratingText}>Aggression Level: {this.state.number}</Text>
//         <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
//           <Image source={back} style={styles.backButton} />
//         </TouchableOpacity>
//         {/* Map through the pages to render buttons */}
//         {this.state.pages.map((item, index) => (
//           <TouchableOpacity key={index} onPress={() => this.getQuestion(item)}>
//             <Image source={info} style={styles.infoIcon} />
//             <Text>{item.title}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     alignItems: 'center',
//   },
//   userNameText: {
//     fontSize: 20,
//     marginBottom: 20,
//   },
//   meterContainer: {
//     position: 'relative',
//   },
//   meterImage: {
//     width: 200,
//     height: 100,
//   },
//   colorOverlay: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     opacity: 0.5,
//   },
//   ratingText: {
//     fontSize: 18,
//     marginVertical: 20,
//   },
//   backButton: {
//     width: 50,
//     height: 50,
//   },
//   infoIcon: {
//     width: 30,
//     height: 30,
//   },
// });

// export default AggressionMeterScreen;
