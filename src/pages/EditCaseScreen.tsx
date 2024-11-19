// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   Alert,
//   ScrollView,
// } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import CheckBox from '@react-native-community/checkbox';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Api } from '../providers/api/api';
// import User from '../providers/user/User';
// import { useLoader } from '../providers/loader/loader';
// import { CreateCaseProvider } from '../providers/createcase/createcase';

// const apiInstance = new Api(); 
// const userProvider = new User(apiInstance, AsyncStorage); 
// const createCaseProvider = new CreateCaseProvider(apiInstance); 

// const EditCaseScreen = ({ navigation, route }) => {
//   const { showLoader, hideLoader } = useLoader();
//   const case_id = route.params.case_id;
  
//   const [editForm, setEditForm] = useState({
//     name: '',
//     last_name: '',
//     gender: '',
//     race: '',
//     height: '',
//     inch: '',
//     weight: '',
//     age: '',
//     // mark: false,
//     place: '',
//     clothing: '',
//     accent: '',
//     date: '',
//     know: false,
//     unknow: false,
//     visible_marks: false,
//     visible_marks_desc:'',
//     additional_info: '',
//     hair_color: '',
//     eye_color: '',
//   });
  
//   const [person, setPerson] = useState(0);
//   const [visibleMark, setVisibleMark] = useState(false);
//   const [heightOptions] = useState([...Array(11).keys()].map(i => ({ height: i + 1 })));
//   const [inchOptions] = useState([...Array(11).keys()].map(i => ({ inch: i + 1 })));

//   useEffect(() => {
//     loadData();
//   }, []);

//   const loadData = async () => {
//     const userInfo = await AsyncStorage.getItem('user');
//     if (!userInfo) {
//       navigation.navigate('LoginPage');
//       return;
//     }

//     const parsedUser = JSON.parse(userInfo);
//     const case_info = { token: parsedUser.token, user_id: parsedUser.user_id, case_id };
//     showLoader(); 
    
//     try {
//       const res = await createCaseProvider.caseInfo(case_info);
//       console.log('API Response:', res);
//       console.log('res.visible_marks:', res.visible_marks); // Add this line
//       hideLoader();

//       if (res.result === "failed") {
//         if (res.msg === "Your account is deactivated, please contact support.") {
//           AsyncStorage.setItem('user', null);
//           navigation.navigate('LoginPage');
//         }
//      } else {
//       const date = res.date_time.substring(0, 10);
//       const [height, inch] = res.height.split(',');
//       const visibleMarks = res.visible_marks === "1" ? true : false;

//       setEditForm(prev => ({ 
//         ...prev, 
//         ...res, 
//         date, 
//         height: parseInt(height), 
//         inch: parseInt(inch), 
//         visible_marks: visibleMarks 
//       }));
//       setPerson(parseInt(res.known) === 1 ? 1 : 0);
//       setVisibleMark(visibleMarks);
//     }
//     } catch (err) {
//       hideLoader();
//       console.error('Error loading case data:', err);
//       Alert.alert('No internet connection', 'Make sure Wi-Fi or cellular data is turned on, then try again.', [
//         { text: 'Retry', onPress: loadData },
//       ]);
//     }
//   };

//   const handleInputChange = (name, value) => {
//     setEditForm(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSave = async () => {
//     const userInfo = await AsyncStorage.getItem('user');
//     if (!userInfo) {
//       navigation.navigate('LoginPage');
//       return;
//     }

//     const parsedUser = JSON.parse(userInfo);
//     const case_info = {
//       token: parsedUser.token,
//       user_id: parsedUser.user_id,
//       case_id,
//       suspect_name: editForm.name,
//       last_name: editForm.last_name,
//       gender: editForm.gender,
//       race: editForm.race,
//       height: `${editForm.height},${editForm.inch}`,  // Combine height and inch as needed by API
//       weight: editForm.weight,
//       age: editForm.age,
//       place_of_incident: editForm.place,
//       distinguishing_clothing: editForm.clothing, // Update property name
//       accent: editForm.accent,
//       date: editForm.date,
//       known: person === 1 ? "1" : "0",  // Ensure known is passed correctly
//       visible_marks: editForm.visible_marks ? "1" : "0",  // Convert boolean to expected string
//       visible_marks_desc: editForm.visible_marks_desc,
//       additional_info: editForm.additional_info,
//       hair_color: editForm.hair_color,
//       eye_color: editForm.eye_color
//     };
  
//     showLoader();
//     try {
//       const res = await createCaseProvider.editCase(case_info);
//       hideLoader();
//       if (res.result === "failed") {
//         if (res.msg === "Your account is deactivated, please contact support.") {
//           await AsyncStorage.removeItem('user');
//           navigation.navigate('LoginPage');
//         }
//       } else {
//         if (res.msg === "Case edited successfully.") {
//           navigation.goBack();
//         }
//       }
//     } catch (err) {
//       hideLoader();
//       console.error('Error saving case data:', err);
//       Alert.alert('Error', 'Something went wrong.');
//     }
//   };


//   return (
//     <ScrollView>
//       <View>
//         {/* <Text>Known Person</Text>
//         <CheckBox value={person === 1} onValueChange={() => setPerson(1)} />
        
//         <Text>Unknown Person</Text>
//         <CheckBox value={person === 0} onValueChange={() => setPerson(0)} /> */}

//         <Text>First Name</Text>
//         <TextInput
//           placeholder="Subject first Name"
//           value={editForm.name}
//           onChangeText={value => handleInputChange('name', value)}
//         />

//         <Text>Last Name</Text>
//         <TextInput
//           placeholder="Subject’s Last Name"
//           value={editForm.last_name}
//           onChangeText={value => handleInputChange('last_name', value)}
//         />

//         <Text>Gender</Text>
//         <Picker
//           selectedValue={editForm.gender}
//           onValueChange={value => handleInputChange('gender', value)}
//         >
//           <Picker.Item label="Male" value="0" />
//           <Picker.Item label="Female" value="1" />
//         </Picker>

//         <Text>Date of Birth</Text>
//         <TextInput
//           placeholder="YYYY-MM-DD"
//           value={editForm.date}
//           editable={false}

//           onChangeText={value => handleInputChange('date', value)}
//         />

//         <Text>Skin Tone</Text>
//         <TextInput
//           placeholder="Skin Tone"
//           value={editForm.race}
//           onChangeText={value => handleInputChange('race', value)}
//         />

//         <Text>Eye Color</Text>
//         <TextInput
//           placeholder="Eye Color"
//           value={editForm.eye_color}
//           onChangeText={value => handleInputChange('eye_color', value)}
//         />

//         <Text>Hair Color</Text>
//         <TextInput
//           placeholder="Hair Color"
//           value={editForm.hair_color}
//           onChangeText={value => handleInputChange('hair_color', value)}
//         />

//         <Text>Height</Text>
//         <Picker
//           selectedValue={editForm.height}
//           onValueChange={value => handleInputChange('height', value)}
//         >
//           {heightOptions.map(item => (
//             <Picker.Item key={item.height} label={`${item.height}`} value={item.height} />
//           ))}
//         </Picker>

//         <Text>Inch</Text>
//         <Picker
//           selectedValue={editForm.inch}
//           onValueChange={value => handleInputChange('inch', value)}
//         >
//           {inchOptions.map(item => (
//             <Picker.Item key={item.inch} label={`${item.inch}`} value={item.inch} />
//           ))}
//         </Picker>

//         <Text>Weight</Text>
//         <TextInput
//           placeholder="Approximate weight (in pounds)"
//           keyboardType="numeric"
//           value={editForm.weight}
//           onChangeText={value => handleInputChange('weight', value)}
//         />

//         <Text>Age</Text>
//         <TextInput
//           placeholder="Approximate age"
//           keyboardType="numeric"
//           value={editForm.age}
//           onChangeText={value => handleInputChange('age', value)}
//         />

//         <Text>Visible scars, marks, tattoos</Text>
//         <CheckBox
//           value={visibleMark}
//           onValueChange={() => {
//             setVisibleMark(!visibleMark);
//             handleInputChange('visible_marks', !visibleMark);
//           }}
//         />

//         {visibleMark && (
//           <TextInput
//             placeholder="Visible marks"
//             value={editForm.visible_marks_desc}
//             onChangeText={value => handleInputChange('visible_marks_desc', value)}
//           />
//         )}

//         <TextInput
//           placeholder="Place of incident"
//           value={editForm.place}
//           onChangeText={value => handleInputChange('place', value)}
//         />

//         <TextInput
//           placeholder="Distinguishing clothing"
//           value={editForm.clothing}
//           onChangeText={value => handleInputChange('clothing', value)}
//         />

//         <TextInput
//           placeholder="Accent"
//           value={editForm.accent}
//           onChangeText={value => handleInputChange('accent', value)}
//         />

//         <TextInput
//           placeholder="Additional Information"
//           value={editForm.additional_info}
//           onChangeText={value => handleInputChange('additional_info', value)}
//         />

//         <Button title="Save" onPress={handleSave} />
//       </View>
//     </ScrollView>
//   );
// };

// export default EditCaseScreen;



import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Api } from '../providers/api/api';
import User from '../providers/user/User';
import { useLoader } from '../providers/loader/loader';
import { CreateCaseProvider } from '../providers/createcase/createcase';
import { RadioButton } from 'react-native-paper';
import { Controller, useForm } from 'react-hook-form';


const apiInstance = new Api();
const userProvider = new User(apiInstance, AsyncStorage);
const createCaseProvider = new CreateCaseProvider(apiInstance);


const EditCaseScreen = ({ navigation, route }) => {
  const { showLoader, hideLoader } = useLoader();
  const case_id = route.params.case_id;
  const { control } = useForm({ defaultValues: { name: '', } })
  const [editForm, setEditForm] = useState({
    name: '',
    last_name: '',
    gender: '',
    race: '',
    height: '',
    inch: '',
    weight: '',
    age: '',
    // mark: false,
    place: '',
    clothing: '',
    accent: '',
    date: '',
    know: false,
    unknow: false,
    visible_marks: false,
    visible_marks_desc: '',
    additional_info: '',
    hair_color: '',
    eye_color: '',
  });


  const [person, setPerson] = useState(0);
  const [visibleMark, setVisibleMark] = useState(false);
  const [heightOptions] = useState([...Array(11).keys()].map(i => ({ height: i + 1 })));
  const [inchOptions] = useState([...Array(11).keys()].map(i => ({ inch: i + 1 })));


  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    loadData();
  }, []);


  const loadData = async () => {
    const userInfo = await AsyncStorage.getItem('user');
    if (!userInfo) {
      navigation.navigate('LoginPage');
      return;
    }

    const parsedUser = JSON.parse(userInfo);
    const case_info = { token: parsedUser.token, user_id: parsedUser.user_id, case_id };
    showLoader();
    setLoading(true);

    try {
      const res = await createCaseProvider.caseInfo(case_info);
      console.log('API Response:', res);
      console.log('res.visible_marks:', res.visible_marks); // Add this line
      hideLoader();
      setLoading(false);


      if (res.result === "failed") {
        if (res.msg === "Your account is deactivated, please contact support.") {
          AsyncStorage.setItem('user', null);
          navigation.navigate('LoginPage');
        }
      } else {
        const date = res.date_time.substring(0, 10);
        const [height, inch] = res.height.split(',');
        const visibleMarks = res.visible_marks === "1" ? true : false;

        setEditForm(prev => ({
          ...prev,
          ...res,
          date,
          height: parseInt(height),
          inch: parseInt(inch),
          visible_marks: visibleMarks
        }));
        setPerson(parseInt(res.known) === 1 ? 1 : 0);
        setVisibleMark(visibleMarks);
      }
    } catch (err) {
      hideLoader();
      console.error('Error loading case data:', err);
      Alert.alert('No internet connection', 'Make sure Wi-Fi or cellular data is turned on, then try again.', [
        { text: 'Retry', onPress: loadData },
      ]);
    }
  };


  const validateInput = (name, value) => {
    if (!value) return "This field cannot be empty."; // Check if field is empty
    switch (name) {
      case 'name':
      case 'last_name':
        return /^[a-zA-Z\s]+$/.test(value) ? '' : "This field contain only letters.";
      case 'age':
        return value && !isNaN(value) ? '' : 'Age must be a number.';
      // Add additional field validations here
      default:
        return '';
    }
  };

  const handleInputChange = (name, value) => {

    const error = validateInput(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));

    setEditForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {

    


    const userInfo = await AsyncStorage.getItem('user');
    if (!userInfo) {
      navigation.navigate('LoginPage');
      return;
    }

    const parsedUser = JSON.parse(userInfo);
    const case_info = {
      token: parsedUser.token,
      user_id: parsedUser.user_id,
      case_id,
      suspect_name: editForm.name,
      last_name: editForm.last_name,
      gender: editForm.gender,
      race: editForm.race,
      height: `${editForm.height},${editForm.inch}`, // Combine height and inch as needed by API
      weight: editForm.weight,
      age: editForm.age,
      place_of_incident: editForm.place,
      distinguishing_clothing: editForm.clothing, // Update property name
      accent: editForm.accent,
      date: editForm.date,
      known: person === 1 ? "1" : "0", // Ensure known is passed correctly
      visible_marks: editForm.visible_marks ? "1" : "0", // Convert boolean to expected string
      visible_marks_desc: editForm.visible_marks_desc,
      additional_info: editForm.additional_info,
      hair_color: editForm.hair_color,
      eye_color: editForm.eye_color
    };
    

    showLoader();
    setLoading(true);
    try {
      const res = await createCaseProvider.editCase(case_info);
      hideLoader();
      if (res.result === "failed") {
        if (res.msg === "Your account is deactivated, please contact support.") {
          await AsyncStorage.removeItem('user');
          navigation.navigate('LoginPage');
        }
      } else {
        if (res.msg === "Case edited successfully.") {
          navigation.goBack();
        }
      }
    } catch (err) {
      hideLoader();
      console.error('Error saving case data:', err);
      Alert.alert('Error', 'Something went wrong.');
    }
  };


  const GenderSelection = () => {
    const [gender, setGender] = useState('male');

    return (
      <View style={styles.row1}>
        {/* <Text style={styles.label}>Gender</Text> */}
        <View style={styles.row}>
          <Text style={[styles.pickerLabel1, { color: gender === 'male' ? '#FF5733' : '#888888' }]}>
            Male
          </Text>
          <View style={styles.halfInput1}>

            <RadioButton
              value="male"
              status={gender === 'male' ? 'checked' : 'unchecked'}
              onPress={() => setGender('male')}

              color={gender === 'male' ? '#FF5733' : '#888888'}
            />
          </View>
        </View>


        <View style={styles.row}>
          <Text style={[styles.pickerLabel1, { color: gender === 'female' ? '#FF5733' : '#888888' }]}>
            Female
          </Text>
          <View style={styles.halfInput1}>
            <RadioButton
              value="female"
              status={gender === 'female' ? 'checked' : 'unchecked'}
              onPress={() => setGender('female')}
              color={gender === 'female' ? '#FF5733' : '#888888'}
            />

          </View>
        </View>
      </View>

    );
  };


  return (

    <View style={styles.container}>
      <View style={styles.head}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.pIcon1}
            source={require('../assets/img/backarrow.png')}
          />
        </TouchableOpacity>
        <Text style={styles.headText}>Edit Case</Text>
      </View>
      <ScrollView style={styles.container1}>
        <View style={styles.input}>

          <Image
            style={styles.pIcon}
            source={require('../assets/img/profile_icon.png')}
          />

          <TextInput
            placeholder="Subject first Name"
            placeholderTextColor="#888888"
            value={editForm.name}
            onChangeText={value => handleInputChange('name', value)}
            style={styles.textinput}
          />

        </View>
        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

        <View style={styles.input}>
          <Image
            style={styles.pIcon}
            source={require('../assets/img/profile_icon.png')}
          />
          <TextInput
            placeholder="Subject’s Last Name"
            placeholderTextColor="#888888"
            value={editForm.last_name}
            onChangeText={value => handleInputChange('last_name', value)}
            style={styles.textinput}

          />
        </View>
        {errors.last_name && <Text style={styles.errorText}>{errors.last_name}</Text>}

        <GenderSelection />

        <View style={[styles.input, { marginTop: -0 }]}>

          <Image
            style={[styles.pIcon, { marginRight: 240 }]}
            source={require('../assets/img/calender.png')}
          />
          <TextInput
            style={styles.textinput}
            placeholder="YYYY-MM-DD"
            placeholderTextColor="#888888"
            value={editForm.date}
            editable={false}
          // onChangeText={value => handleInputChange('date', value)}
          />
        </View>


        <View style={styles.input}>
          {/* <Text style={styles.label}>Skin Tone</Text> */}
          <Image
            style={styles.pIcon}
            source={require('../assets/img/profile_icon.png')}
          />
          <TextInput

            style={styles.textinput}
            placeholder="Skin Tone"
            placeholderTextColor="#888888"
            value={editForm.race}
            onChangeText={value => handleInputChange('race', value)}
          />

        </View>
        <View style={styles.input}>
          {/* <Text style={styles.label}>Eye Color</Text> */}
          <Image
            style={styles.pIcon}
            source={require('../assets/img/profile_icon.png')}
          />
          <TextInput
            style={styles.textinput}
            placeholder="Eye Color"
            placeholderTextColor="#888888"
            value={editForm.eye_color}
            onChangeText={value => handleInputChange('eye_color', value)}
          />
        </View>
        <View style={styles.input}>
          <Image
            style={styles.pIcon}
            source={require('../assets/img/profile_icon.png')}
          />

          {/* <Text style={styles.label}>Hair Color</Text> */}
          <TextInput
            style={styles.textinput}
            placeholder="Hair Color"
            placeholderTextColor="#888888"
            value={editForm.hair_color}
            onChangeText={value => handleInputChange('hair_color', value)}
          />
        </View>

        <View style={[styles.row1, { marginTop: -8 }]}>
          <View style={styles.halfInput}>
            {/* <View style={styles.input2}> */}
            <View style={styles.pickerContainer}>
              <Text style={styles.pickerLabel}>Height</Text>
              <Picker
                selectedValue={editForm.height}
                style={styles.pickerHalf}
                onValueChange={value => handleInputChange('height', value)}
              >
                {heightOptions.map(item => (
                  <Picker.Item key={item.height} label={`${item.height}`} value={item.height} />
                ))}

              </Picker>


            </View>
          </View>

          {/* <View style={styles.input2}> */}
          <View style={styles.halfInput}>
            <View style={styles.pickerContainer}>
              <Text style={styles.pickerLabel}>Inch</Text>
              <Picker
                selectedValue={editForm.inch}
                style={styles.pickerHalf}
                onValueChange={value => handleInputChange('inch', value)}
              >
                {inchOptions.map(item => (
                  <Picker.Item key={item.inch} label={`${item.inch}`} value={item.inch} />
                ))}

              </Picker>
            </View>
          </View>
        </View>


        <View style={[styles.input, { marginTop: -0 }]}>

          <Image
            style={styles.pIcon}
            source={require('../assets/img/profile_icon.png')}
          />
          <TextInput
            style={styles.textinput}
            placeholder="Approximate weight (in pounds)"
            placeholderTextColor="#888888"
            keyboardType="numeric"
            value={editForm.weight}
            onChangeText={value => handleInputChange('weight', value)}
            style={styles.textinput}
          />
        </View>

        <View style={styles.input}>

          <Image
            style={styles.pIcon}
            source={require('../assets/img/profile_icon.png')}
          />
          <TextInput
            style={styles.textinput}
            placeholder="Approximate age"
            placeholderTextColor="#888888"
            keyboardType="numeric"
            value={editForm.age}
            onChangeText={value => handleInputChange('age', value)}
          />
        </View>


        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            onPress={() => {
              setVisibleMark(!visibleMark);
              handleInputChange('visible_marks', !visibleMark);
            }}
            style={[styles.checkboxButton, visibleMark && styles.checkboxButtonClicked]}
          >
            {visibleMark && <Text style={styles.checkmark}>✓</Text>}
            <Text style={[styles.checkboxLabel, visibleMark && styles.checkboxLabelClicked]}>

            </Text>


          </TouchableOpacity>
          <Text style={{ marginLeft: 30, fontWeight: 'bold', color: 'black' }}>Visible scars, marks, tattoos</Text>
        </View>

        {visibleMark && (
          <View style={styles.input1}>
            <Image
              style={styles.pIcon}
              source={require('../assets/img/word.png')}
            />
            <TextInput
              placeholder="Visible marks"
              placeholderTextColor="#888888"
              value={editForm.visible_marks_desc}
              onChangeText={value => handleInputChange('visible_marks_desc', value)}
              style={styles.textinput}

            />
          </View>
        )}


        <View style={styles.input1}>
          <Image
            style={styles.pIcon}
            source={require('../assets/img/word.png')}
          />
          <TextInput
            placeholder="Place of incident"
            placeholderTextColor="#888888"
            value={editForm.place}
            onChangeText={value => handleInputChange('place', value)}
            style={styles.textinput}
          />
        </View>

        <View style={styles.input1}>
          <Image
            style={styles.pIcon}
            source={require('../assets/img/clothing.png')}
          />
          <TextInput
            style={styles.textinput}
            placeholder=" Distinguishing Clothing"
            placeholderTextColor="#888888"
            value={editForm.clothing}
            onChangeText={value => handleInputChange('clothing', value)}
          />
        </View>

        <View style={styles.input1}>
          <Image
            style={styles.pIcon}
            source={require('../assets/img/profile_icon.png')}
          />
          <TextInput
            style={styles.textinput}
            placeholder="Accent"
            placeholderTextColor="#888888"
            value={editForm.accent}
            onChangeText={value => handleInputChange('accent', value)}
          />
        </View>

        <View style={styles.input1}>
          <Image
            style={styles.pIcon}
            source={require('../assets/img/profile_icon.png')}
          />
          <TextInput
            style={styles.textinput}
            placeholder="Additional Information"
            placeholderTextColor="#888888"
            value={editForm.additional_info}
            onChangeText={value => handleInputChange('additional_info', value)}
          />
        </View>

        <View style={styles.saveButtonContainer}>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>



  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',


  },
  container1: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  head: {
    backgroundColor: '#990000',
    padding: 14,
    flexDirection: 'row',

  },
  headText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 120,
  },
  pIcon1: {
    tintColor: 'white',
    height: 25,
    width: 25,
    marginTop: 2,
    marginLeft: 2,
    marginRight: 10,


  },
  formGroup: {
    // borderWidth: 1,
    // borderColor: '#ccc',
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 10,
    flexDirection: 'row',
    flex: 1,

  },


  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#888888',
  },
  textinput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#505050'
  },
  input: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    marginTop: 20,
    flex: 1,

    // alignItems: 'center',
    // borderColor: '#ccc',
    // borderWidth: 1,
    // borderRadius: 5,
    // backgroundColor: '#f9f9f9',
    // width: '100%',
    // height: 50,
    // marginTop: 15,
    // paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ccc',
    width: '50%',
    height: 50,
    marginTop: 20,
    borderRadius: 5,
    gap: 60,


  },
  input1: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    marginTop: 25,
    // width:370,
    height: 100,
    alignItems: 'flex-start',

  },
  pIcon: {
    tintColor: '#990000',
    height: 15,
    width: 15,
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,

  },
  input2: {
    flex: 1,
    marginHorizontal: 0,

  },
  halfInput: {
    flex: 0.5,
  },
  halfInput1: {
    flex: 0.5,
    flexDirection: 'row-reverse',
    marginRight: -15,

  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,

  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
    marginLeft: 15,
  },
  radioButton: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginLeft: 20,
    alignContent: 'flex-end',

  },
  saveButton: {
    backgroundColor: '#990000',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    alignContent: 'center',
    height: 50,
    width: 160,
    marginBottom: 60,
  },
  saveButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',

  },
  pickerHalf: {
    flex: 1,
    color: '#333',
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    // padding: 2,
    marginTop: 25,

  },
  pickerLabel: {
    fontSize: 16,
    marginRight: 10,
    color: '#333',
    marginLeft: 10,

  },
  pickerLabel1: {
    fontSize: 16,
    marginRight: 10,
    color: '#333',
    flexDirection: 'row',

  },
  text: {
    fontSize: 16,
    marginRight: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 10,
    color: '#990000',
    marginTop: 15,
    // justifyContent: 'space-between',
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 16,  // Set the font size for the label
    color: 'black',
    fontWeight: '400',  // Optional: Define the text color
  },
  checkboxButton: {
    flexDirection: 'row',  // Row layout for text and icon
    alignItems: 'center',
    // padding: 10,
    borderColor: '#ccc',  // Initial border color
    borderWidth: 2,
    borderRadius: 3,
    width: 25,
    height: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',  // Initial background color
  },
  checkboxButtonClicked: {
    backgroundColor: '#990000',  // Change to red when clicked
    borderColor: '#990000',
    flexDirection: 'row',  // Row layout for text and icon
    alignItems: 'center',
    borderWidth: 2,

  },
  checkmark: {
    color: 'white',  // White color for the checkmark on red background
    fontWeight: 'bold',
    // marginRight: 1, 
    fontSize: 15, // Space between checkmark and label

  },
  checkboxLabelClicked: {
    color: 'white',  // Change text color to white when clicked
  },
});
export default EditCaseScreen;


