import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Image, 
  Alert, 
  Platform, 
  FlatList, 
  TouchableOpacity, 
  StyleSheet, Linking, Modal
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DistributionlistProvider } from '../providers/distributionlist/distributionlist';
import { Api } from '../providers/api/api';
import { useLoader } from '../providers/loader/loader';

const SharecontactPage = () => {
  const [contactItems, setContactItems] = useState([]);
  const [allContact, setAllContact] = useState([]);
  const [showNotFound, setShowNotFound] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [caseId, setCaseId] = useState('');
  const [userInfo, setUserInfo] = useState(null); // Store userInfo
  const [searchQuery, setSearchQuery] = useState(''); // **Added searchQuery state**
  const [showFooter, setShowFooter] = useState(true);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [shareModalVisible, setShareModalVisible] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const { showLoader, hideLoader } = useLoader();
  const apiInstance = new Api();
  const distributionlistProvider = new DistributionlistProvider(apiInstance);


  
  const handleLogout = () => {
    setLogoutModalVisible(false);
    
  };

  const handleLogoutCancel = () => {
    setLogoutModalVisible(false);
  };
  useEffect(() => {
    const initialize = async () => {
      await fetchStoredUserInfo();
      await fetchCaseId();
    };
    initialize();
    return () => {
      hideLoader();
    };
  }, []);

  const fetchStoredUserInfo = async () => {
    try {
      showLoader();
      const storedUser = await AsyncStorage.getItem('user'); 
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser); 
        setUserInfo(parsedUser); // Store userInfo in state
        const response = await distributionlistProvider.group_info(parsedUser); 
        hideLoader();
        if (!response || response.result === 'failed') {
          setContactItems([]);
          setShowNotFound(true);
        } else {
          const data = response.data;
          const formattedData = data.map(item => ({
            id: item.dl_id,
            name: item.name,
            email: item.emailid,
            phone: item.phone,
            selected: false,
          }));
          setContactItems(formattedData);
          setAllContact(formattedData);
          setShowNotFound(false);
        }
      } else {
        hideLoader();
        Alert.alert('Error', 'User information not found. Please log in again.');
        navigation.navigate('Login');
      }
    } catch (error) {
      hideLoader();
      console.error('Error fetching user info:', error);
      Alert.alert('Error', 'Failed to fetch user information.');
    }
  };

  const fetchCaseId = async () => {
    try {
      const storedCaseId = await AsyncStorage.getItem('caseId'); 
      if (storedCaseId) {
        setCaseId(storedCaseId);
      } else if (route.params && route.params.case_id) {
        setCaseId(route.params.case_id);
      } else {
        hideLoader(); // Ensure loader is hidden
        Alert.alert('Error', 'Case ID not found. Please try again.');
      }
    } catch (error) {
      hideLoader();
      console.error('Error fetching case ID:', error);
      Alert.alert('Error', 'Failed to fetch case ID.');
    }
  };

  const handleSelectItem = (id) => {
    const updatedItems = contactItems.map((item) => {
      if (item.id === id) {
        return { ...item, selected: !item.selected };
      }
      return item;
    });
    setContactItems(updatedItems);
    const selectedIds = updatedItems.filter((item) => item.selected).map((item) => item.id);
    setSelectedItems(selectedIds);
  };

  const handleShare = async () => {
    try {
      showLoader();
      if (userInfo) {
        const shareList = contactItems.filter((item) => item.selected).map((item) => ({
          dl_id: item.id,
          name: item.name,
          emailid: item.email,
          mobile_number: item.phone,
        }));
        const caseInfo = {
          user_id: userInfo.user_id,
          token: userInfo.token,
          case_id: caseId,
          share_list: shareList,
        };
        const response = await distributionlistProvider.shareGroup_case(caseInfo); 
        hideLoader();
        if (!response || response.result === 'failed') {
          setModalMessage('Error: Failed to share case.');
        } else {
          setModalMessage('Success: Case shared successfully.');
        }
      } else {
        hideLoader();
        setModalMessage('Error: User information not found. Please log in again.');
        navigation.navigate('Login');
      }
      
    } 
    catch (error) {
      hideLoader();
     
      setModalMessage('Success: Case shared successfully.');
    } finally {
      setShareModalVisible(true); // Ensure modal is shown in the finally block
    }
  
  };
  const closeShareModal = () => {
    setShareModalVisible(false);
  };

  // Navigation to AggressionMeterScreen with necessary parameters
  const navigateToAggressionMeter = () => {
    if (userInfo && caseId) {
      navigation.navigate('AggressionMeterScreen', {
        case_id: caseId,
        suspect_info: {
          suspect_name: userInfo.name,
          last_name: userInfo.last_name,
        },
        token: userInfo.token, 
      });
    } else {
      Alert.alert('Error', 'Required information is missing to navigate.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateToAggressionMeter} style={styles.goBackButton}>
          <Image source={require('../assets/img/backarrow.png')} style={styles.goBackImage} />
        </TouchableOpacity>
        <Text style={styles.title}>Share Contact</Text>
      </View>
      <View style={styles.container1}>
      <View style={styles.searchContainer}>
      <Image 
    source={require('../assets/img/search.png')} 
    style={styles.searchIcon}
  />
      <TextInput
      
        placeholder="Search"
        placeholderTextColor={'grey'}
        style={styles.searchInput}
        value={searchQuery} // **Uses searchQuery state**
        onChangeText={(text) => {
          setSearchQuery(text); // **Update searchQuery state**
          const filteredData = allContact.filter(
            item =>
              item.name.toLowerCase().includes(text.toLowerCase()) ||
              item.phone.includes(text) ||
              item.email.toLowerCase().includes(text.toLowerCase())
          );
          setContactItems(filteredData);
        }}
      />
      </View>
      </View>
      <FlatList
  data={contactItems}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => (
    <TouchableOpacity 
      style={styles.contactItem} 
      onPress={() => handleSelectItem(item.id)}
    >
      <View style={styles.contactRow}>
        <Image 
          source={require('../assets/img/userc.png')} 
          style={styles.userIcon} // Updated image style
        />
        <View style={styles.contactDetails}>
          <Text style={styles.settingName}>{item.name}</Text>
          <Text style={styles.contact}>{item.phone}</Text>
          <Text style={styles.contact}>{item.email}</Text>
        </View>
        <View style={styles.selectionIndicator}>
          {item.selected ? (
            <View style={styles.selectedIndicator} />
          ) : (
            <View style={styles.unselectedIndicator} />
          )}
        </View>
      </View>
    </TouchableOpacity>
  )}
/>

      
      {showNotFound && <Text style={styles.notFoundText}>We could not find what you were looking for.</Text>}
      
      {selectedItems.length > 0 && (
        <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
          <Text style={styles.shareButtonText}>Share</Text>
        </TouchableOpacity>
      )}
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
        visible={shareModalVisible}
        onRequestClose={closeShareModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitles}>Share Status</Text>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={closeShareModal}
            >
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

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
    backgroundColor: '#fff',
  },
  container1: {
    
    backgroundColor: 'grey',
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
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  userIcon: {
    width: 30,
    height: 30,
    marginRight: 10, // Adds spacing between the image and the text
    tintColor: '#9d0808',
  },
  
  contactDetails: {
    flex: 1, // Takes up the remaining space
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9d0808',
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    paddingHorizontal: 10,
    marginVertical: 15,
  },
  searchIcon: {
    width: 15,
    height: 15,
    tintColor: 'grey',
    marginRight: 10,
  },
  
  searchInput: {
    flex: 1,
    height: 35,
    color:'black',
  },
  goBackButton: {
    position: 'absolute',
    left: 10,
  },
  goBackImage: {
    width: 27,
    height: 27,
    tintColor: 'white',
  },
  title: {
    fontSize: 24,
    color: 'white',
  },
 
  contactItem: {
    backgroundColor: '#efeff4',
    borderBottomWidth: 0.5,
    borderColor: '#dedede',
    padding: 15,
    marginBottom: 5,
    borderRadius: 5,
    position: 'relative',
  },
  settingName: {
    fontSize: 19,
    color: '#4d4d4d',
    textTransform: 'capitalize',
  },
  contact: {
    marginTop: 2,
    color: '#4d4d4d',
  },
  notFoundText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
  },
  shareButton: {
    backgroundColor: '#9d0808',
    borderRadius: 7,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width:'35%',
    left:'30%',
    marginBottom:25
  },
  shareButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  selectedIndicator: {
    width: 20, 
    height: 20, 
    borderRadius: 10, 
    backgroundColor: '#9d0808',
  },
  unselectedIndicator: {
    width: 20, 
    height: 20, 
    borderRadius: 10, 
    backgroundColor: '#fff', 
    borderWidth: 1, 
    borderColor: '#dedede',
  },
  selectionIndicator: {
    position: 'absolute', 
    right: 10, 
    top: 10,
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

});

export default SharecontactPage;
