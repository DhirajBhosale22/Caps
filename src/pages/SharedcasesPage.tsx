import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CaseProvider from '../providers/case/case';
import ProfileProvider from '../providers/profile/profile';
import {Api} from '../providers/api/api';
import {useNavigation} from '@react-navigation/native';

// Initialize API and providers
const api = new Api('https://aggressionmanagement.com/api');
const profileProvider = new ProfileProvider(api);
const caseProvider = new CaseProvider(api);

const Sharedcases = () => {
  const [loading, setLoading] = useState(true);
  const [myCases, setMyCases] = useState<any[]>([]);
  const [userInfo, setUserInfo] = useState(null);
  const [token, setToken] = useState(null);
  const [item, setItem] = useState(null);
  const [colors, setColors] = useState('rgba(102, 102, 102, 0.5)');
  const [select, setSelect] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    loadUserData();
  }, []);

  // Function to load cases and user info
  const loadUserData = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');

      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        const token = {token: parsedUser.token, user_id: parsedUser.user_id};

        // Fetch user profile info
        const userProfileResponse = await profileProvider.user_info(token);
        console.log('userProfileResponse:', userProfileResponse.data);
        setUserInfo(userProfileResponse.data);

        // Fetch cases created by the user
        const mysharedCasesResponse = await caseProvider.sharedCases(token);
        console.log('myCasesResponse:', mysharedCasesResponse);

        // Ensure myCases is always an array
        setMyCases(Array.isArray(mysharedCasesResponse) ? mysharedCasesResponse : []);
      } else {
        Alert.alert('Error', 'User token not found. Please log in again.');
      }
    } catch (error) {
      console.error('Error loading data:', error);
      Alert.alert('Error', 'Failed to load data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={120} color="#a42f2d" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {userInfo && (
        <View style={styles.userInfo}>
          {/* <Text style={styles.welcomeText}>Welcome, {userInfo.firstname}</Text> */}
          {/* <Text>Email: {userInfo.email}</Text> */}
        </View>
      )}

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.back}
            source={require('../assets/img/backarrow.png')}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 20, color: 'white'}}>Shared Case</Text>
        <View style={styles.icons}>
          <Image
            style={styles.iconsdownload}
            source={require('../assets/img/download.png')}
          />
          <Image
            style={styles.iconsearch}
            source={require('../assets/img/search.png')}
          />
        </View>
      </View>

      {/* Show a message if no cases are available */}
      {myCases.length === 0 ? (
        <Text style={styles.noCasesText}>No Shared cases available</Text>
      ) : (
        <FlatList
          data={myCases}
          keyExtractor={item => item.case_id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.caseCard}
              onPress={() => navigation.navigate('AggressionMeterScreen', {
                              case_id: item.case_id,
                              suspect_info: {
                                suspect_name: item.name,
                                last_name: item.last_name,
                              },
                              token: token, 
                            })}
                          >
              <View style={styles.caseContent}>
                {/* Container to hold the image and the text in a row */}
                <View style={styles.caseHeader}>
                  <Image
                    style={styles.pad}
                    source={require('../assets/img/escolaimg.png')}
                  />
                  <Text style={styles.caseName}>
                    {item.name} {item.last_name}
                  </Text>
                </View>

                <Text style={styles.caseDate}>{item.date_time}</Text>
                <Text style={styles.caseId}>Case ID: {item.case_id}</Text>
                <Text style={styles.caseDetails}>
                  P: {item.Primal}/C: {item.Cognitive}
                </Text>
                <View
                  style={[
                    styles.separator,
                    {
                      backgroundColor:
                        item.color_code === 'green'
                          ? 'rgb(58, 186, 128)'
                          : item.color_code === 'red'
                          ? 'rgb(216, 108, 107)'
                          : item.color_code === 'yellow'
                          ? 'rgb(232, 185, 106)'
                          : '#000000',
                    },
                  ]}
                />
              </View>
            </TouchableOpacity>
          )}
          contentContainerStyle={{paddingBottom: 20}}
          style={styles.flatList}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  caseHeader: {
    flexDirection: 'row', // Align items in a row
    alignItems: 'center', // Vertically align the image and text
    marginBottom: 8, // Add space below the image and name
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInfo: {
    marginBottom: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Distribute items with space between
    backgroundColor: '#a42f2d',
    paddingHorizontal: 15,
    paddingVertical: 13,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',

    width: 100,
    gap: 25,
  },
  back: {
    width: 27,
    height: 22,
    tintColor: 'white',
  },
  headerTitle: {
    flex: 1, // Ensure title takes available space
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconsdownload: {
    height: 19,
    width: 20,
    tintColor: 'white',
    fontWeight: '900',
  },
  iconsearch: {
    height: 20,
    width: 20,
    tintColor: 'white',
    fontWeight: 'bold',
  },
  caseCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  caseContent: {
    flex: 1,
  },
  caseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#a42f2d',
    marginLeft: 14,
  },
  caseDate: {
    fontSize: 12,
    color: '#555',
    marginBottom: 14,
    marginLeft: 40,
  },
  caseId: {
    fontSize: 12,
    color: '#555',
    marginBottom: 14,
    marginLeft: 40,
  },
  caseDetails: {
    fontSize: 12,
    color: '#555',
    marginBottom: 14,
    marginLeft: 40,
  },
  separator: {
    height: 4,
    // backgroundColor: '#4caf50',
    marginTop: 8,
    marginLeft: 40,
    width: 335,
  },
  flatList: {
    flex: 1,
  },
  noCasesText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginTop: 20,
  },
  pad: {
    height: 19,
    width: 15,
    marginRight: 10,
  },
});

export default Sharedcases;
