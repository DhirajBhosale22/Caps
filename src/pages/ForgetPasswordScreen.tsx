// src/screens/ForgotPasswordScreen.tsx
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator, StatusBar, Modal, Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { forgotPassword } from '../providers/forgotpassword/forgotpassword';
import { useNavigation } from '@react-navigation/native';
import { useLoader } from '../providers/loader/loader';

// Validation schema
const schema = yup.object().shape({
  email: yup.string()
    .required('Email is required')
    .email('Invalid email format')
    .max(50, 'Email must be less than 50 characters')
    .min(5, 'Email must be at least 5 characters'),
});

const ForgotPasswordScreen = () => {
  const { control, handleSubmit, formState: { errors, isValid }, watch } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange', // This ensures validation updates as the user types
  });
  const navigation = useNavigation();
  const { showLoader, hideLoader } = useLoader(); // Destructure showLoader and hideLoader
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState('');
  const [modalType, setModalType] = React.useState<'success' | 'error'>('success');

  const onSubmit = async (data: { email: string }) => {
    showLoader(); // Show loader
    try {
      const response = await forgotPassword({ emailid: data.email });
      hideLoader(); // Hide loader after request
      if (response.data.result === 'failed') {
        setModalType('error');
        setModalMessage(response.data.msg);
      } else {
        setModalType('success');
        setModalMessage('Password reset link sent to your email');
      }
      setModalVisible(true);
    } catch (error) {
      hideLoader(); // Hide loader after request
      setModalType('error');
      setModalMessage('An error occurred. Please try again.');
      setModalVisible(true);
    }
  };
  const email = watch('email');
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#9d0808" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={require('../assets/img/backarrow.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Welcome</Text>
      </View>
      <Text style={styles.welcomeText}>An email will be sent to your registered email id to reset your password</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputContainer}>
            <Image source={require('../assets/img/mail.png')} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={'grey'}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        )}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
      <TouchableOpacity
        style={[styles.button, !isValid && styles.buttonDisabled]} // Add disabled style if not valid
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid} // Disable the button if form is not valid
      >
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>

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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#9d0808',
    padding: hp('2%'), // Responsive padding
    width: '100%',
    flexDirection: 'row',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: wp('5.5%'), // Responsive font size
    flex: 1,
    textAlign: 'center',
  },
  backIcon: {
    width: wp('7%'), // Responsive width
    height: wp('7%'), // Responsive height
    padding: hp('1%'), // Responsive padding
    tintColor: 'white',
  },
  welcomeText: {
    fontFamily: 'robotoblack',
    color: 'black',
    fontSize: wp('4%'), // Responsive font size
    marginBottom: hp('1%'), // Responsive margin
    marginTop: hp('2%'), // Responsive margin
    textAlign: 'center',
    marginLeft: wp('1%'), // Responsive margin
    marginRight: wp('1%'), // Responsive margin
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#cccccc',
    borderWidth: 2,
    marginLeft: wp('4%'), // Responsive margin
    marginRight: wp('4%'), // Responsive margin
    marginTop: hp('2%'), // Responsive margin
    borderRadius: 4,
    paddingHorizontal: wp('3%'), // Responsive padding
    height: hp('7.2%'), // Responsive height
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  inputIcon: {
    width: wp('4%'), // Responsive width
    height: wp('4%'), // Responsive height
    marginRight: wp('2.5%'), // Responsive margin
  },
  input: {
    flex: 1,
    height: hp('6.25%'), // Responsive height
    paddingHorizontal: wp('3%'), // Responsive padding
    fontSize: wp('3.5%'), // Responsive font size
    color: 'black',
  },
  button: {
    backgroundColor: 'rgba(157, 8, 8, 0.9)',
    padding: hp('2%'), // Responsive padding
    borderRadius: 7,
    alignItems: 'center',
    width: wp('50%'), // Responsive width
    height: hp('7.5%'), // Responsive height
    alignSelf: 'center',
    marginTop: hp('2%'), // Responsive margin
  },
  buttonText: {
    color: '#fff',
    fontSize: wp('4.3%'), // Responsive font size
  },
  buttonDisabled: {
    opacity: 0.6, // Blur effect for disabled state
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: wp('75%'), // Responsive width
    backgroundColor: 'white',
    borderRadius: 10,
    padding: wp('5%'), // Responsive padding
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
    fontSize: wp('4.5%'), // Responsive font size
    fontWeight: 'bold',
    marginBottom: hp('1%'), // Responsive margin
    color: 'black',
  },
  modalMessage: {
    fontSize: wp('4%'), // Responsive font size
    textAlign: 'center',
    marginBottom: hp('2%'), // Responsive margin
  },
  modalButton: {
    padding: wp('2.5%'), // Responsive padding
    borderRadius: 5 },
  errorButton: {
    backgroundColor: '#9d0808',
  },
  successButton: {
    backgroundColor: '#9d0808',
  },
  modalButtonText: {
    color: 'white',
    fontSize: wp('4%'), // Responsive font size
  },
  errorText: {
    fontSize: wp('3%'), // Responsive font size
    marginLeft: wp('4%'), // Responsive margin
    marginBottom: hp('2%'), // Responsive margin
    color: 'red',
  },
  errorText1: {
    fontSize: wp('4.5%'), // Responsive font size
    fontWeight: 'bold',
    marginBottom: hp('1%'), // Responsive margin
    color: 'black',
  },
});

export default ForgotPasswordScreen;