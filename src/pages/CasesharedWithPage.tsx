import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import { Api } from '../providers/api/api';
import CaseProvider from '../providers/case/case';
import shareCaseProvider from '../providers/case/shareCase';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CasesharedWith = ({ route, navigation }) => {
  const { case_id } = route.params;
  const api = new Api();
  const caseProvider = new CaseProvider(api);
  const sharecaseProvider = new shareCaseProvider(api);

  const [userData, setUserData] = useState({});
  const [sharedWith, setSharedWith] = useState([]);
  const [allCases, setAllCases] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [noContentMessage, setNoContentMessage] = useState(''); // Add state for no content message

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const storedUserData = await AsyncStorage.getItem('user');
        const parsedUserData = storedUserData ? JSON.parse(storedUserData) : {};
        setUserData(parsedUserData);
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };
    fetchToken();
  }, []);

  const fetchSharedDetails = useCallback(() => {
    if (userData.token) {
      const info = {
        token: userData.token,
        user_id: userData.user_id,
        case_id: case_id,
      };
      sharecaseProvider.shareCase_contact_details(info)
        .then(response => {
          console.log('shareCaseContactDetails response:', response); // Log response
          if (response.result === 'success') {
            setSharedWith(response.contact_details);
            setAllCases(response.contact_details);
          } else if (response.result === 'failed' && response.msg === 'No content') {
            setNoContentMessage('This case is shared with one'); // Set the message when no content
          } else {
            console.error('Error:', response.msg);
          }
        })
        .catch(error => console.error(error));
    }
  }, [userData, case_id]);

  useEffect(() => {
    if (userData.token) {
      fetchSharedDetails();
    }
  }, [fetchSharedDetails]);

  const getItems = useCallback(
    (val) => {
      if (val && val.trim() !== '') {
        const filteredItems = allCases.filter(item => {
          return (
            item.name?.toLowerCase().includes(val.toLowerCase()) ||
            item.emailid?.toLowerCase().includes(val.toLowerCase())
          );
        });
        setSharedWith(filteredItems);
      } else {
        fetchSharedDetails();
      }
    },
    [allCases, fetchSharedDetails]
  );

  const handleSearchChange = (text) => {
    setSearchValue(text);
    getItems(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image 
            source={require('../assets/img/back-arrow.png')} 
            style={{ width: 22, height: 22 }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Case Shared With</Text>
      </View>

      <View style={styles.container1}>
        <Text style={styles.interaction}>SHARED USERS</Text> 
        <Text style={styles.interaction1}>Users Shared With This Case</Text>
        <TextInput
          style={styles.searchInput}
          value={searchValue}
          onChangeText={handleSearchChange}
          placeholder="Search"
        />

        {/* Show the no content message if available */}
        {noContentMessage ? (
          <Text style={styles.noContentMessage}>{noContentMessage}</Text>
        ) : (
          <FlatList
            data={sharedWith}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <View style={styles.iconContainer}>
                    <Image
                      source={require('../assets/img/userc.png')}
                      style={{ width: 22, height: 22 }}
                    />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.caseType}>{item.name}</Text>
                    <Text style={styles.case}>{item.emailid}</Text>
                  </View>
                  <View style={styles.iconContainer}>
                    <Image
                      source={require('../assets/img/share.png')}
                      style={{ width: 22, height: 22, tintColor: 'brown' }}
                    />
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  container1: {
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  header: {
    height: 60,
    backgroundColor: '#9d0808',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  interaction: {
    fontSize: 20,
    color: '#323232',
    marginBottom: 5,
    textAlign: 'center',
  },
  interaction1: {
    fontSize: 16,
    color: '#323232',
    marginBottom: 25,
  },
  searchInput: {
    height: 40,
    borderColor: '#9d0808',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 16,
    color: '#494f6d',
  },
  noContentMessage: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
  card: {
    marginBottom: 10,
    borderRadius: 2,
    width: '100%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  caseType: {
    fontSize: 20,
    fontWeight: '600',
    color: '#9d0808',
  },
  case: {
    fontSize: 14,
    color: '#323232',
  },
});

export default CasesharedWith;
