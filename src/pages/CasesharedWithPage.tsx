import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet, Image, Modal, Linking } from 'react-native';
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
  const [noContentMessage, setNoContentMessage] = useState('');
  const [showFooter, setShowFooter] = useState(true);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);


  const handleLogout = () => {
    setLogoutModalVisible(false);
    
  };

  const handleLogoutCancel = () => {
    setLogoutModalVisible(false);
  };
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
          console.log('shareCaseContactDetails response:', response);
          if (response.result === 'success') {
            setSharedWith(response.contact_details);
            setAllCases(response.contact_details);
          } else if (response.result === 'failed' && response.msg === 'No content') {
            setNoContentMessage('This case is shared with no one');
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
            source={require('../assets/img/backarrow.png')} 
            style={{ width: 27, height: 25, tintColor:'white' }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Case Shared With</Text>
      </View>

      <FlatList
        data={sharedWith}
        ListHeaderComponent={() => (
          <View style={styles.container1}>
            <Text style={styles.interaction}>SHARED USERS</Text> 
            <Text style={styles.interaction1}>Users Shared With This Case</Text>
            <TextInput
              style={styles.searchInput}
              value={searchValue}
              onChangeText={handleSearchChange}
              placeholder="Search"
              placeholderTextColor={'grey'}
            />
            {noContentMessage ? (
              <Text style={styles.noContentMessage}>{noContentMessage}</Text>
            ) : null}
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.iconContainer}>
                <Image
                  source={require('../assets/img/userc.png')}
                  style={{ width: 18, height: 18 }}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.caseType}>{item.name}</Text>
                <Text style={styles.case}>{item.emailid}</Text>
              </View>
              <View style={styles.iconContainer}>
                <Image
                  source={require('../assets/img/share.png')}
                  style={{ width: 18, height: 18, tintColor: 'brown' }}
                />
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
        contentContainerStyle={styles.flatListContainer}
      />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  container1: {
    paddingHorizontal: 10,
    backgroundColor: '#f7f7f7',
  },
  header: {
    height: 50,
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
    textAlign: 'center',
    flex: 1,
  },
  interaction: {
    fontSize: 25,
    fontFamily: "Roboto-Black",
    color: '#4d4d4d',
    textTransform: 'uppercase',
    marginBottom: 5,
    textAlign: 'center',
    marginTop: 10,
  },
  interaction1: {
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: '#323232',
    marginBottom: 25,
    textAlign: 'center',
    marginTop: 5,
  },
  searchInput: {
    height: 40,
    borderColor: '#9d0808',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
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
    borderRadius: 2,
    backgroundColor: 'white',
    marginBottom: 6,
    padding: 9,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 9,
  },
  iconContainer: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  caseType: {
    fontSize: 18,
    fontWeight: '600',
    color: '#9d0808',
    marginBottom: 4,
  },
  case: {
    fontSize: 14,
    color: '#323232',
    marginBottom: 10,
  },
  flatListContainer: {
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1000,
  },
  modalTitles: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'black',

  },
  modalText: {
    fontSize: 16,
    marginBottom: 15,
    color: 'grey',

  },
  modalButtonContainer: {
    flexDirection: 'row',
  },
  modalButton: {
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: '#9d0808',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
  footer: {
    height: 60,
    backgroundColor: '#9d0808',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerIcon: {
    width: 22,
    height: 22,
    tintColor: 'white',
  },
});

export default CasesharedWith;
