import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, StyleSheet, Image, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import User from '../providers/user/User';
import { Api } from '../providers/api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = new Api();
const userProvider = new User(api, AsyncStorage);

const CreditCardValidationSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .required('Required')
    .matches(/^\d{16}$/, 'Card number is not valid'),
  expiryDate: Yup.string()
    .required('Required')
    .matches(/^\d{2}\/\d{2}$/, 'Expiry date is not valid (MM/YY)'),
  cvv: Yup.string()
    .required('Required')
    .matches(/^\d{3}$/, 'CVV is not valid'),
});

class CreditCardScan extends Component {
  handlePayment = async (values) => {
    const account = this.props.route.params.account;
  
    try {
      const userResponse = await userProvider.signup(account);
      if (userResponse.data.result === 'success') {
        const paymentInfo = {
          cardNumber: values.cardNumber,
          expiryDate: values.expiryDate,
          cvv: values.cvv,
        };
  
        const paymentResponse = await api.post('charge_credit_card', JSON.stringify(paymentInfo), {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (paymentResponse.data.result === 'success') {
          Alert.alert('Success', 'User account created and payment successful');
          this.props.navigation.navigate('Login'); // Navigate to home page or another screen after successful registration
        } else {
          Alert.alert('Payment failed', paymentResponse.data.msg);
        }
      } else {
        Alert.alert('Success', 'Thanks for Signing Up ! You will receive an email for account confirmation, Please confirm your account !!!');
        this.props.navigation.navigate('Login');
      
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred during the registration process');
    }
  };

  formatExpiryDate = (text) => {
    const cleaned = text.replace(/\D+/g, '');
    let formatted = cleaned;

    if (cleaned.length >= 2) {
      formatted = cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4);
    }

    return formatted;
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#9d0808" />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.backButton}>
            <Image source={require('../assets/img/pointer.png')} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Credit Card Scan</Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardAvoidingView}
        >
          <ScrollView
            contentContainerStyle={styles.scrollViewContainer}
            style={styles.scrollView}
          >
            <View style={styles.extraScrollArea} />
            <Image source={require('../assets/img/creditcard.png')} style={styles.cardImage} />
            <Text style={styles.paymentText}>Set up your payment</Text>
            <Formik
              initialValues={{
                cardNumber: '',
                expiryDate: '',
                cvv: '',
              }}
              validationSchema={CreditCardValidationSchema}
              onSubmit={this.handlePayment}
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
                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('cardNumber')}
                    onBlur={handleBlur('cardNumber')}
                    value={values.cardNumber}
                    keyboardType="numeric"
                    placeholder="Card number"
                  />
                  {touched.cardNumber && errors.cardNumber && <Text style={styles.error}>{errors.cardNumber}</Text>}

                  <TextInput
                    style={styles.input}
                    onChangeText={(text) => {
                      const formattedText = this.formatExpiryDate(text);
                      setFieldValue('expiryDate', formattedText);
                    }}
                    onBlur={handleBlur('expiryDate')}
                    value={values.expiryDate}
                    placeholder="Expiry Date (MM/YY)"
                    keyboardType="numeric"
                  />
                  {touched.expiryDate && errors.expiryDate && <Text style={styles.error}>{errors.expiryDate}</Text>}

                  <TextInput
                    style={styles.input}
                    onChangeText={handleChange('cvv')}
                    onBlur={handleBlur('cvv')}
                    value={values.cvv}
                    keyboardType="numeric"
                    placeholder="CVV"
                  />
                  {touched.cvv && errors.cvv && <Text style={styles.error}>{errors.cvv}</Text>}

                  <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Register</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
            <Text style={styles.noteText}>Note: You will be charged after your 1 free month</Text>
            <View style={styles.extraScrollArea} />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#9d0808',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1, // Ensure header stays above other content
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  extraScrollArea: {
    height: 60, // Adjust the height as needed
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    width: 25,
    height: 25,
    tintColor: 'white',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    flex: 1,
    textAlign: 'center',
  },
  cardImage: {
    width: '95%',
    height: 250, // Fixed height
    resizeMode: 'contain', // Ensure image maintains aspect ratio
    margin: 15,
  },
  paymentText: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
    color: 'black',
  },
  input: {
    width: '92%',
    height: 50,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    margin: 10,
    marginLeft: 15,
  },
  error: {
    color: '#ed1c24',
    fontSize: 12,
    paddingVertical: 2,
  },
  button: {
    width: '35%',
    borderRadius: 7,
    height: 50,
    backgroundColor: '#9d0808',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '30%',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
  },
  noteText: {
    textAlign: 'center',
    marginTop: 16,
  },
});

export default CreditCardScan;
