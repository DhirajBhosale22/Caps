import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import countryStates from './countryStates.json';

const StateSelectionScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStates, setFilteredStates] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const navigation = useNavigation();
  const route = useRoute();
  const { selectedCountry, onSelect } = route.params;
  useEffect(() => {
    if (selectedCountry) {
      setFilteredStates(countryStates[selectedCountry] || []);
    }
  }, [selectedCountry]);
  const handleStateSelect = (state) => {
    setSelectedState(state);
    onSelect(state);
    navigation.goBack();
  };
  const filteredStateList = filteredStates.filter((state) =>
    state.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <View style={styles.container}>
      {/* Header View */}
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>State</Text>
          <View style={styles.searchBarContainer}>
            <Image source={require('../assets/img/search.png')} style={styles.searchIcon} />
            <TextInput
              style={styles.searchBar}
              placeholder="Search"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.crossButton}>
          <Image source={require('../assets/img/cross.png')} style={styles.crossIcon} />
        </TouchableOpacity>
      </View>
      {/* States List View */}
      <View style={styles.listContainer}>
        <FlatList
          data={filteredStateList}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.stateItem} onPress={() => handleStateSelect(item)}>
              <View style={styles.radioButtonContainer}>
                <View style={[styles.radioButton, selectedState === item && styles.radioButtonSelected]} />
              </View>
              <Text style={styles.stateText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    backgroundColor: '#fff',
  },
  radioButtonContainer: {
    marginRight: 20,
  },
  headerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#DC3545', // Background color for the header
  
  },
  radioButtonSelected: {
    backgroundColor: 'black',
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#DC3545',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContent: {
    alignItems: 'center', // Center the content within the header
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 10, // Space between title and search bar
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff', // White background for the search bar
    borderRadius: 3,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  searchIcon: {
    width: 15,
    height: 15,
    marginHorizontal: 10,
    tintColor: '#000',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#fff', // White background for the search bar
    borderRadius: 3,
    borderColor: '#ccc',
  },
  crossButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  crossIcon: {
    width: 12,
    height: 12,
    tintColor: '#fff',
  },
  listContainer: {
    flex: 1,
  },
  stateItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  stateText: {
    fontSize: 18,
  },
});
export default StateSelectionScreen;