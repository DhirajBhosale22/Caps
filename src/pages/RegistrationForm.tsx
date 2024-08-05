import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { CheckBox } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CountryProvider from '../providers/country/country';
import User from '../providers/user/User';
import { Api } from '../providers/api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = new Api();
const countryProvider = new CountryProvider(api);
const userProvider = new User(api, AsyncStorage);

const PasswordValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required('Required')
    .min(8, 'Too Short!')
    .max(30, 'Too Long!')
    .matches(/(?=.*[a-z])(?=.*[0-9])(?=.*[$@$#!%*?&])/, 'Password must contain at least one lowercase letter, one number, and one special character.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

class RegistrationForm extends Component {
  state = {
    passwordVisible: false,
    confirmPasswordVisible: false,
    countries: [],
    states: [],
    isEnabled: true,
    share: false,
  };

  componentDidMount() {
    this.loadCountries();
  }

  loadCountries = async () => {
    try {
      const response = await countryProvider.country();
      const countries = response.data.map(country => ({
        id: country.country_id,
        name: country.country_name,
      }));
      console.log('Countries loaded:', countries);
      this.setState({ countries });
    } catch (error) {
      console.error(error);
    }
  };

  handleCountryChange = async (selectedItem) => {
    try {
      const response = await countryProvider.state(selectedItem.id);
      const states = response.data.map(state => ({
        id: state.state_id,
        name: state.state_name,
      }));
      console.log('States loaded for country:', selectedItem, states);
      this.setState({ states, isEnabled: false });
    } catch (error) {
      console.error(error);
    }
  };

  handleSignup = async (values) => {
    try {
      const response = await userProvider.check_email(values.email);
      if (response.data.result === 'success') {
        const account = {
          firstname: values.fname,
          surname: values.lname,
          email: values.email,
          password: values.confirmPassword,
          title: values.title,
          organization: values.organization,
          state: values.state.id,
          country: values.country.id,
          profession: values.profession,
          share_data: values.share ? '1' : '0',
        };
        this.props.navigation.navigate('credit', { account });
      } else {
        Alert.alert(response.data.result, response.data.msg);
      }
    } catch (error) {
      console.error(error);
    }
  };

  openTermsConditions = async () => {
    try {
      const response = await api.get('terms_conditions');
      const url = response.data.terms_and_conditions;
      if (await InAppBrowser.isAvailable()) {
        InAppBrowser.open(url, {
          dismissButtonStyle: 'close',
          preferredBarTintColor: '#453AA4',
          preferredControlTintColor: 'white',
          readerMode: false,
          animated: true,
          modalPresentationStyle: 'fullScreen',
          modalTransitionStyle: 'coverVertical',
          modalEnabled: true,
          enableBarCollapsing: false,
          showTitle: true,
          toolbarColor: '#6200EE',
          secondaryToolbarColor: 'black',
          navigationBarColor: 'black',
          navigationBarDividerColor: 'white',
          enableDefaultShare: true,
          forceCloseOnRedirection: false,
          animations: {
            startEnter: 'slide_in_right',
            startExit: 'slide_out_left',
            endEnter: 'slide_in_left',
            endExit: 'slide_out_right',
          },
          headers: {
            'my-custom-header': 'my custom header value',
          },
        });
      } else {
        Alert.alert('Error', 'Browser is not available.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  togglePasswordVisibility = () => {
    this.setState(prevState => ({
      passwordVisible: !prevState.passwordVisible,
    }));
  };

  toggleConfirmPasswordVisibility = () => {
    this.setState(prevState => ({
      confirmPasswordVisible: !prevState.confirmPasswordVisible,
    }));
  };

  render() {
    console.log('Component state:', this.state);
    return (
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Formik
          initialValues={{
            fname: '',
            lname: '',
            email: '',
            password: '',
            confirmPassword: '',
            title: '',
            organization: '',
            state: '',
            country: '',
            share: false,
            profession: '',
          }}
          validationSchema={Yup.object().shape({
            fname: Yup.string()
              .required('Required')
              .min(2, 'Too Short!')
              .max(30, 'Too Long!')
              .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed.'),
            lname: Yup.string()
              .required('Required')
              .min(2, 'Too Short!')
              .max(30, 'Too Long!')
              .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed.'),
            email: Yup.string()
              .required('Required')
              .min(5, 'Too Short!')
              .max(50, 'Too Long!')
              .email('Invalid email address'),
            password: Yup.string()
              .required('Required')
              .min(8, 'Too Short!')
              .max(30, 'Too Long!')
              .matches(/(?=.*[a-z])(?=.*[0-9])(?=.*[$@$#!%*?&])/, 'Password must contain at least one lowercase letter, one number, and one special character.'),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref('password'), null], 'Passwords must match')
              .required('Required'),
            title: Yup.string()
              .required('Required')
              .min(2, 'Too Short!')
              .max(30, 'Too Long!')
              .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed.'),
            organization: Yup.string()
              .required('Required')
              .min(2, 'Too Short!')
              .max(30, 'Too Long!')
              .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed.'),
            country: Yup.object().required('Required'),
            state: Yup.object().required('Required'),
            profession: Yup.string()
              .required('Required')
              .min(2, 'Too Short!')
              .max(30, 'Too Long!')
              .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed.'),
          })}
          onSubmit={this.handleSignup}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <View>
              <Text style={styles.label}>First Name</Text>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('fname')}
                  onBlur={handleBlur('fname')}
                  value={values.fname}
                />
              </View>
              {touched.fname && errors.fname && <Text style={styles.warningtext}>{errors.fname}</Text>}

              <Text style={styles.label}>Last Name</Text>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('lname')}
                  onBlur={handleBlur('lname')}
                  value={values.lname}
                />
              </View>
              {touched.lname && errors.lname && <Text style={styles.warningtext}>{errors.lname}</Text>}

              <Text style={styles.label}>Email</Text>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
              </View>
              {touched.email && errors.email && <Text style={styles.warningtext}>{errors.email}</Text>}

              <Text style={styles.label}>Password</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  secureTextEntry={!this.state.passwordVisible}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                <TouchableOpacity onPress={this.togglePasswordVisibility}>
                  <Text style={styles.passwordToggle}>{this.state.passwordVisible ? 'Hide' : 'Show'}</Text>
                </TouchableOpacity>
              </View>
              {touched.password && errors.password && <Text style={styles.warningtext}>{errors.password}</Text>}

              <Text style={styles.label}>Confirm Password</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  secureTextEntry={!this.state.confirmPasswordVisible}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                />
                <TouchableOpacity onPress={this.toggleConfirmPasswordVisibility}>
                  <Text style={styles.passwordToggle}>{this.state.confirmPasswordVisible ? 'Hide' : 'Show'}</Text>
                </TouchableOpacity>
              </View>
              {touched.confirmPassword && errors.confirmPassword && <Text style={styles.warningtext}>{errors.confirmPassword}</Text>}

              <Text style={styles.label}>Title</Text>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('title')}
                  onBlur={handleBlur('title')}
                  value={values.title}
                />
              </View>
              {touched.title && errors.title && <Text style={styles.warningtext}>{errors.title}</Text>}

              <Text style={styles.label}>Organization</Text>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('organization')}
                  onBlur={handleBlur('organization')}
                  value={values.organization}
                />
              </View>
              {touched.organization && errors.organization && <Text style={styles.warningtext}>{errors.organization}</Text>}

              <Text style={styles.label}>Country</Text>
              <View style={styles.inputRow}>
                <Picker
                  style={styles.picker}
                  selectedValue={values.country}
                  onValueChange={(itemValue) => {
                    setFieldValue('country', itemValue);
                    this.handleCountryChange(itemValue);
                  }}
                >
                  <Picker.Item label="Select a country" value="" />
                  {this.state.countries.map((country) => (
                    <Picker.Item key={country.id} label={country.name} value={country} />
                  ))}
                </Picker>
              </View>
              {touched.country && errors.country && <Text style={styles.warningtext}>{errors.country}</Text>}

              <Text style={styles.label}>State</Text>
              <View style={styles.inputRow}>
                <Picker
                  style={styles.picker}
                  selectedValue={values.state}
                  onValueChange={(itemValue) => setFieldValue('state', itemValue)}
                  enabled={!this.state.isEnabled}
                >
                  <Picker.Item label="Select a state" value="" />
                  {this.state.states.map((state) => (
                    <Picker.Item key={state.id} label={state.name} value={state} />
                  ))}
                </Picker>
              </View>
              {touched.state && errors.state && <Text style={styles.warningtext}>{errors.state}</Text>}

              <Text style={styles.label}>Profession</Text>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('profession')}
                  onBlur={handleBlur('profession')}
                  value={values.profession}
                />
              </View>
              {touched.profession && errors.profession && <Text style={styles.warningtext}>{errors.profession}</Text>}

              <View style={styles.checkboxContainer}>
                <CheckBox
                  checked={values.share}
                  onPress={() => setFieldValue('share', !values.share)}
                />
                <Text style={styles.checkboxLabel}>Share data</Text>
              </View>

              <Text style={styles.link} onPress={this.openTermsConditions}>
                Terms and Conditions
              </Text>

              <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    padding: 8,
  },
  warningtext: {
    color: 'red',
    fontSize: 12,
    marginBottom: 8,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  passwordInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    padding: 8,
  },
  passwordToggle: {
    fontSize: 16,
    color: '#007BFF',
    marginHorizontal: 8,
  },
  picker: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  checkboxLabel: {
    fontSize: 16,
  },
  link: {
    color: '#007BFF',
    textDecorationLine: 'underline',
    marginVertical: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegistrationForm;
