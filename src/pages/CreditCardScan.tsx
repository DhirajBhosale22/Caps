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
          <Image source={require('../assets/img/pointer.png')} style={styles.backIcon} />
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
    width: '93%',
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
  boldText: {
    fontWeight: 'bold',
    color:'black',
    fontSize: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  modalMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButton: {
    padding: 10,
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
    fontSize: 16,
  },
  errorText1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  noteText: {
    textAlign: 'center',
    marginTop: 16,
    color:'black',
    fontSize: 14,
  },
});

export default CreditCardScan;
