import React, { useState }  from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, StyleSheet, Image, StatusBar, KeyboardAvoidingView, Platform, Modal } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import User from '../providers/user/User';
import { Api } from '../providers/api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLoader } from '../providers/loader/loader';

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

const CreditCardScan = ({ navigation, route }) => {
  const { showLoader, hideLoader } = useLoader(); 
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState<'success' | 'error'>('success');


  const handlePayment = async (values) => {
    const account = route.params.account;

    try {
      showLoader(); // Show loader when the payment starts
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
          hideLoader(); // Hide loader after successful payment
          navigation.navigate('Login', {
            modalVisible: true,
            modalMessage: 'Thanks for Signing Up! You will receive an email for account confirmation, Please confirm your account!!!',
            modalType: 'success',
          });
        } else {
          hideLoader(); // Hide loader if payment fails
          setModalType('error');
          setModalMessage(paymentResponse.data.msg || 'Payment failed');
          setModalVisible(true);
        }
      } else {
        hideLoader();
        navigation.navigate('Login', {
          modalVisible: true,
          modalMessage: 'Thanks for Signing Up! You will receive an email for account confirmation, Please confirm your account!!!',
          modalType: 'success',
        });
      }
    } catch (error) {
      hideLoader();
      setModalType('error');
      setModalMessage('An error occurred during the registration process');
      setModalVisible(true);
    }
  };

  const formatExpiryDate = (text) => {
    const cleaned = text.replace(/\D+/g, '');
    let formatted = cleaned;

    if (cleaned.length >= 2) {
      formatted = cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4);
    }

    return formatted;
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#9d0808" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={require('../assets/img/backarrow.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Credit Card</Text>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboardAvoidingView}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer} style={styles.scrollView}>
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
            onSubmit={handlePayment}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
              <View>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('cardNumber')}
                  onBlur={handleBlur('cardNumber')}
                  value={values.cardNumber}
                  keyboardType="numeric"
                  placeholder="Card number"
                  placeholderTextColor={'grey'}
                />
                {touched.cardNumber && errors.cardNumber && <Text style={styles.error}>{errors.cardNumber}</Text>}

                <TextInput
                  style={styles.input}
                  onChangeText={(text) => {
                    const formattedText = formatExpiryDate(text);
                    setFieldValue('expiryDate', formattedText);
                  }}
                  onBlur={handleBlur('expiryDate')}
                  value={values.expiryDate}
                  placeholder="Expiry Date (MM/YY)"
                  placeholderTextColor={'grey'}
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
                  placeholderTextColor={'grey'}
                />
                {touched.cvv && errors.cvv && <Text style={styles.error}>{errors.cvv}</Text>}

                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                  <Text style={styles.buttonText}>REGISTER</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
          <Text style={styles.noteText}>
            <Text style={styles.boldText}>Note:</Text> You will be charged after your 1 free month
          </Text>
          <View style={styles.extraScrollArea} />
        </ScrollView>
      </KeyboardAvoidingView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={[styles.modalText, modalType === 'error' && styles.errorText1]}>{modalType === 'error' ? 'Failed' : 'Success'}</Text>
            <Text style={styles.modalMessage}>{modalMessage}</Text>
            <TouchableOpacity
              style={[styles.modalButton, modalType === 'error' ? styles.errorButton : styles.successButton]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};


import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
    padding: hp('2%'), // Adjusted padding to be responsive
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
    height: hp('7%'), // Adjusted height to be responsive
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    width: wp('7%'), // Adjusted width to be responsive
    height: wp('7%'), // Adjusted height to be responsive
    tintColor: 'white',
  },
  headerTitle: {
    color: '#fff',
    fontSize: wp('5.5%'), // Adjusted font size to be responsive
    flex: 1,
    textAlign: 'center',
  },
  cardImage: {
    width: wp('94%'), // Responsive width
    height: hp('33%'), // Adjusted height to be responsive
    resizeMode: 'contain', // Ensure image maintains aspect ratio
    margin: wp('4%'), // Adjusted margin to be responsive
  },
  paymentText: {
    fontSize: wp('4.5%'), // Adjusted font size to be responsive
    marginVertical: hp('1%'), // Adjusted vertical margin to be responsive
    textAlign: 'center',
    color: 'black',
  },
  input: {
    width: wp('92%'), // Responsive width
    height: hp('7%'), // Adjusted height to be responsive
    borderColor: '#cccccc',
    borderWidth: 1,
    color: 'black',
    borderRadius: 10,
    paddingHorizontal: wp('2.5%'), // Adjusted padding to be responsive
    margin: wp('2%'), // Adjusted margin to be responsive
    marginLeft: wp('4%'), // Adjusted margin to be responsive
  },
  error: {
    color: '#ed1c24',
    fontSize: wp('3%'), // Adjusted font size to be responsive
    marginLeft: wp('4%'),
    paddingVertical: hp('0.5%'), // Adjusted vertical padding to be responsive
  },
  button: {
    width: wp('35%'), // Responsive width
    borderRadius: 7,
    height: hp('7%'), // Adjusted height to be responsive
    backgroundColor: '#9d0808',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp('30%'), // Adjusted margin to be responsive
    marginTop: hp('2%'), // Adjusted margin to be responsive
  },
  buttonText: {
    color: '#fff',
    fontSize: wp('4.5%'), // Adjusted font size to be responsive
  },
  boldText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: wp('4%'), // Adjusted font size to be responsive
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: wp('80%'), // Adjusted width to be responsive
    backgroundColor: 'white',
    borderRadius: 10,
    padding: wp('5%'), // Adjusted padding to be responsive
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    fontSize: wp('4.5%'), // Adjusted font size to be responsive
 fontWeight: 'bold',
    marginBottom: hp('1%'), // Adjusted margin to be responsive
    color: 'black',
  },
  modalMessage: {
    fontSize: wp('4%'), // Adjusted font size to be responsive
    textAlign: 'center',
    marginBottom: hp('2%'), // Adjusted margin to be responsive
    color: 'grey',
  },
  modalButton: {
    padding: hp('1%'), // Adjusted padding to be responsive
    borderRadius: 5,
  },
  errorButton: {
    backgroundColor: '#9d0808',
  },
  successButton: {
    backgroundColor: '#9d0808',
  },
  modalButtonText: {
    color: 'white',
    fontSize: wp('4%'), // Adjusted font size to be responsive
  },
  errorText1: {
    fontSize: wp('4.5%'), // Adjusted font size to be responsive
    fontWeight: 'bold',
    marginBottom: hp('1%'), // Adjusted margin to be responsive
    color: 'black',
  },
  noteText: {
    textAlign: 'center',
    marginTop: hp('2%'), // Adjusted margin to be responsive
    color: 'black',
    fontSize: wp('4%'), // Adjusted font size to be responsive
  },
});

export default CreditCardScan;