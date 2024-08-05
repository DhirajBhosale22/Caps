import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const countries = ['Afghanistan','Albania','Algeria','American Samoa',
                   'Andorra','Angola','Antigua and Barbuda','Antarctica',
                   'Argentina','Aruba','Australia','Austria','Azerbaijan',
                   'Bahamas The','Bahrain','Bangladesh','Barbados','Belarus',
                   'Belgium','Belize','Benin','Bermuda','Bhutan',
                   'Bolivia','Bosnia and Herzegovina','Botswana','Bouvet Island',
                   'Brazil','British Indian Ocean Territory','Brunei','Bulgaria',
                   'Burkina Faso','Burundi','Cambodia','Cameroon','Canada',
                   'Cape Verde','Cayman Islands','Central African Republic','Chad',
                   'Chile','China','Christmas Island','Cocos (Keeling) Islands',
                   'Colombia','Comoros','Republic Of The Congo','Democratic Republic Of The Congo',
                   'Cook Islands','Costa Rice','Cote DIvoire(Ivory Coast)','Croatia(Hrvatska)','Cuba',
                   'Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic',
                   'East Timor','Ecuador','Egypt','EI Salvador','Eritrea','Estonia','Ethiopia',
                   'External Territories of Australia','Falkland Islands',
                   'Faroe Islands','Fiji Islands','Finland','France','French Guiana','French Polynesia',
                   'French Southern Territories','Gabon','Gambia The','Georgia','Germany',
                   'Ghana','Gibraltar','Greece','Greenland','Grenada','Guadeloupe',
                   'Guam','Guatemala','Guernsey and Alderney','Guinea','Guinea-Bissau','Guyana',
                   'Haiti','Heard and McDonald Islands','Honduras','Hong Kong S.A.R.','Hungary','Iceland','India',
                   'Indonesia','Iran','Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jersey','Jordan',
                   'Kazakhstan','Kenya','Kiribati','Korea North','Korea South','Kuwait',
                   'Kyrgyzstan','Laos','Latvia','Lebanon','lesotho','Liberia','Libya',
                   'Liechtenstein','Lithuania','Luxembourg','Macau S.A.R.','Macedonia','Madagascar',
                   'Malawi','Malaysia','Maldives','Mali','Malta','Man (Isle of)','Marshall Islands',
                   'Martinique','Mauritania','Mauritius','Mayotte','Mexico','Micronesia',
                   'Moldova','Monaco','Mongolia','Montenegro','Montserrat','Morocco','Mozambique',
                   'Myanmar (Burma)','Namibia','Nauru','Nepal','Netherlands Antilles',
                   'Netherlands The','New Caledonia','New Zealand','Nicaragua','Niger',
                   'Nigeria','Niue','Norfolk','Island','Northern Mariana Islands','Norway',
                   'Oman','Pakistan','Palau','Palestinian Territory Occupied','Panama',
                   'Papua new Guinea','Paraguay','Peru','Philippines','Pitcairn Island',
                   'Poland','Portugal','Puerto Rico','Qatar','Reunion','Romania',
                   'Russia','Rwanda','Saint Helena','Saint Kitts And Nevis','Saint Lucia',
                   'Saint Pierre and Miquelon','Saint Vincent And The Grenadines','Samoa',
                   'San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia','Seychelles',
                   'Sierra Leone','Singapore','Slovakia','Slovenia','Smaller Territories of the UK',
                   'Solomon Islands','Somalia','South Africa','South Georgia',
                   'South Sudan','Spain','Sri Lanka','Sudan','Suriname','Svalbard And Jan Mayen Islands','Swaziland',
                   'Swedan','Switzerland','Syria','Talwan','Tajikistan','Tanzania',
                   'Thailand','Togo','Tokelau','Tonga','Trinidad And Tobago','Tunisia',
                   'Turkey','Turkmenistan','Turks And Caicos Islands','Tuvalu','Uganda','Ukraine','United Arab Emirates',
                   'United Kingdom','United States','United States Minor Outlying Islands','Uruguay',
                   'Uzbekistan','Vanuatu','Vatician City State(Holy See)','Venezuela',
                   'Vietnam','Virgin Islands(British)','Virgin Islands(US)',
                   'Wallis And Futuna Islands','Western Sahara','Yemen','Yugoslavia',
                   'Zambia','Zbabwe'
];
const CountrySelectionScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const navigation = useNavigation();
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    navigation.navigate('RegistrationForm', { selectedCountry: country });
  };
  const handleCrossPress = () => {
    navigation.navigate('RegistrationForm');
  };
  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <View style={styles.container}>
      {/* Header View */}
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>Country</Text>
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
        <TouchableOpacity onPress={handleCrossPress} style={styles.crossButton}>
          <Image source={require('../assets/img/cross.png')} style={styles.crossIcon} />
        </TouchableOpacity>
      </View>
      {/* Countries List View */}
      <View style={styles.listContainer}>
        <FlatList
          data={filteredCountries}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.countryItem} onPress={() => handleCountrySelect(item)}>
              <View style={styles.radioButtonContainer}>
                <View style={[styles.radioButton, selectedCountry === item && styles.radioButtonSelected]} />
              </View>
              <Text style={styles.countryText}>{item}</Text>
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
  headerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#DC3545', // Background color for the header
   
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
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  radioButtonContainer: {
    marginRight: 20,
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: 'black'
  },
  radioButtonSelected: {
    backgroundColor: '#DC3545',
  },
  countryText: {
    fontSize: 18
  },
});
export default CountrySelectionScreen;