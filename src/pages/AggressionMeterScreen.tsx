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


// React component
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Api } from '../providers/api/api';
import { DistributionlistProvider } from '../providers/distributionlist/distributionlist';
import { AggressionlevelProvider } from '../providers/aggressionlevel/aggressionlevel'; // Import AggressionlevelProvider
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfileProvider from '../providers/profile/profile';
import { useRoute } from '@react-navigation/native';

// Import all images
import info from '../assets/img/info.png';
import meter from '../assets/img/meter.png';
import back from '../assets/img/back.png';
import green_ar from '../assets/img/green_ar.png';

interface Props {
  navigation: any;
}

interface State {
  suspectInfo: any;
  pages: any[];
  number: number;
  state: string;
  shareShow: boolean;
  corporate: boolean;
  agressionResult: any;
  level: any[];
  otherFactor: any[];
  maxRating: any[];
  showColor: string;
  tabBarElement: any;
  storage: any;
  userName: string;
  colors: string; // To track colors for meter display
}

class AggressionMeterScreen extends React.Component<Props, State> {
  private api: Api;
  private distributionProvider: DistributionlistProvider;
  private profileProvider: ProfileProvider;
  private aggressionProvider: AggressionlevelProvider; // Add aggression provider

  constructor(props: Props) {
    super(props);
    this.api = new Api();
    this.distributionProvider = new DistributionlistProvider(this.api);
    this.profileProvider = new ProfileProvider(this.api);
    this.aggressionProvider = new AggressionlevelProvider(this.api); // Initialize provider

    this.state = {
      suspectInfo: {},
      pages: [
        { title: 'behavior', icon: 'info', rating: '', select: '', colors: '', type_id: '' },
        { title: 'communication', icon: 'info', rating: '', select: '', colors: '', type_id: '' },
        { title: 'interaction', icon: 'info', rating: '', select: '', colors: '', type_id: '' },
        { title: 'demeanor', icon: 'info', rating: '', select: '', colors: '', type_id: '' },
        { title: 'facial_expression', icon: 'info', rating: '', select: '', colors: '', type_id: '' },
        { title: 'tactical_movement', icon: 'info', rating: '', select: '', colors: '', type_id: '' },
        { title: 'other_concerning_factors', icon: 'info', rating: '', select: '', colors: '', type_id: '' },
        { title: 'Files', icon: 'info', rating: '', select: '', colors: '', type_id: '' },
        { title: 'best practices', icon: 'info', rating: '', select: '', colors: '', type_id: '' },
      ],
      number: 0,
      state: '0',
      shareShow: false,
      corporate: false,
      agressionResult: {},
      level: [],
      otherFactor: [],
      maxRating: [],
      showColor: '',
      tabBarElement: null,
      userName: '',
      colors: 'rgba(102, 102, 102, 0.5)', // Default color for the meter
    };
  }

  componentDidMount() {
    this.fetchUserName();
  }

  fetchUserName = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      const { user_id, token } = userData ? JSON.parse(userData) : {};

      if (!user_id || !token) {
        Alert.alert('Error', 'User not authenticated.');
        return;
      }

      const response = await this.profileProvider.user_info({ user_id, token });
      const userDataResponse = response.data;

      this.setState({ userName: userDataResponse.firstname });
    } catch (error) {
      console.error('Error fetching user info:', error);
      Alert.alert('Error', 'Failed to fetch user information.');
    }
  };

  getQuestion = async (item: any) => {
 
    try {
      const userData = await AsyncStorage.getItem('user');
      const { user_id, token } = userData ? JSON.parse(userData) : {};

      if (!user_id || !token) {
        Alert.alert('Error', 'User not authenticated.');
        return;
      }

      const myModalData = {
        token: token,
        user_id: user_id,
        type: item.title,
      };

      // Call aggression level function before navigating if needed
      const aggressionInfo = { user_id, type: item.title };
      const aggressionResponse = await this.aggressionProvider.aggression_level(aggressionInfo);
      console.log('Aggression Level Response:', aggressionResponse.data); // Handle the response as needed

      this.props.navigation.navigate('QuestionPage', {
        data: myModalData,
        // onDismiss: this.handleModalDismiss,
      });
    } catch (error) {
      console.error('Error getting token or user_id:', error);
      Alert.alert('Error', 'Failed to get token or user_id.');
    }
  };

  handleModalDismiss = (data: any) => {
    if (data && data.qes[0]) {
      this.setState({ hide_: true });

      const { name, case_id, qes } = data;
      const { rating } = qes[0];

      if (name === 'other concerning factors') {
        this.setState((prevState) => ({
          otherFactor: [...prevState.otherFactor, { case_id, type_id: qes[0].id, type: name, rating }],
        }));
      } else {
        this.setState((prevState) => ({
          level: [...prevState.level, { case_id, type_id: qes[0].id, type: name, rating }],
        }));
      }

      this.updateMaxRating(name, rating);
      this.saveData();
    }
  };

  saveData = async () => {
    try {
      const { otherFactor, level } = this.state;
      await AsyncStorage.setItem('other_factor', JSON.stringify(otherFactor));
      await AsyncStorage.setItem('level', JSON.stringify(level));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  updateMaxRating = (pageName: string, rating: number) => {
    this.setState(
      (prevState) => {
        const maxRatingExists = prevState.maxRating.find((item) => item.page === pageName);

        if (maxRatingExists) {
          return {
            maxRating: prevState.maxRating.map((item) =>
              item.page === pageName ? { ...item, data: rating } : item
            ),
          };
        } else {
          return {
            maxRating: [...prevState.maxRating, { page: pageName, data: rating }],
          };
        }
      },
      () => {
        this.updateNumberAndColor();
      }
    );
  };

  updateNumberAndColor = () => {
    const max = this.state.maxRating.reduce(
      (prev, current) => (prev.data > current.data ? prev : current),
      { data: 0 }
    );
    const { data: maxRating } = max;

    this.setState({ number: maxRating }, this.updateColor);
  };

  updateColor = () => {
    const { number } = this.state;

    if (number < 30) {
      this.setState({ showColor: 'rgba(0, 255, 0, 0.5)' }); // Green
    } else if (number < 60) {
      this.setState({ showColor: 'rgba(255, 255, 0, 0.5)' }); // Yellow
    } else {
      this.setState({ showColor: 'rgba(255, 0, 0, 0.5)' }); // Red
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {/* Render content based on the state */}
        <Text style={styles.userNameText}>{this.state.userName}</Text>
        <View style={styles.meterContainer}>
          <Image source={meter} style={styles.meterImage} />
          <View style={[styles.colorOverlay, { backgroundColor: this.state.showColor }]} />
        </View>
        <Text style={styles.ratingText}>Aggression Level: {this.state.number}</Text>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Image source={back} style={styles.backButton} />
        </TouchableOpacity>
        {/* Map through the pages to render buttons */}
        {this.state.pages.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => this.getQuestion(item)}>
            <Image source={info} style={styles.infoIcon} />
            <Text>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  userNameText: {
    fontSize: 20,
    marginBottom: 20,
  },
  meterContainer: {
    position: 'relative',
  },
  meterImage: {
    width: 200,
    height: 100,
  },
  colorOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.5,
  },
  ratingText: {
    fontSize: 18,
    marginVertical: 20,
  },
  backButton: {
    width: 50,
    height: 50,
  },
  infoIcon: {
    width: 30,
    height: 30,
  },
});

export default AggressionMeterScreen;