import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { StripeProvider, useStripe } from '@stripe/stripe-react-native';
import UserService from '../providers/user/User';
import CardDetailsProvider from '../providers/card-details/CardDetailsProvide';
import SubscriptionProvider from '../providers/subscription/SubscriptionProvider';

const validationSchema = yup.object().shape({
  cardNumber: yup.string().required('Card number is required'),
  expiryDate: yup.string().required('Expiry date is required'),
  cvv: yup.string().required('CVV is required'),
});

const CreditCardScan = ({ navigation, route }) => {
  const [buttonName, setButtonName] = useState('Register');
  const [showRegister, setShowRegister] = useState(true);
  const [disPrice, setDisPrice] = useState(0);
  const { control, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const stripe = useStripe();

  const { subs, subscribe, cardDeta } = route.params || {};

  useEffect(() => {
    if (subs) {
      setButtonName('Subscription');
      setShowRegister(false);
      setDisPrice(subscribe.price - (subscribe.price * (subscribe.discount / 100)));
      UserService.getUserInformation().then(userInfo => {
        if (userInfo) {
          CardDetailsProvider.cardDetails(userInfo).then(res => {
            // handle card details if needed
          });
        }
      });
    }
    if (cardDeta) {
      const carNo = cardDeta.card_number.replace(/\s/g, '');
      setValue('cardNumber', carNo);
      setValue('expiryDate', `${cardDeta.expiry_month}/${cardDeta.expiry_year}`);
      setValue('cvv', cardDeta.cvv);
    }
  }, [subs, cardDeta]);

  const handleRegister = async (data) => {
    const [DD, MM] = data.expiryDate.split('/');
    try {
      await stripe.validateCardNumber(data.cardNumber);
      await stripe.validateExpiryDate(DD, MM);
      await stripe.validateCVC(data.cvv);
  
      const userInfo = {
        card_number: data.cardNumber,
        expiry_month: DD,
        cvv: data.cvv,
      };
  
      const userResponse = await UserService.signup(userInfo);
      if (userResponse) {
        Alert.alert('Success', 'User registered successfully');
        navigation.navigate('LoginPage');
      } else {
        Alert.alert('Error', 'Registration failed');
      }
    } catch (error) {
      Alert.alert('Error', 'Validation failed');
    }
  };

  const handleSubscription = async (data) => {
    const [MM, YY] = data.expiryDate.split('/');
    try {
      await stripe.createToken({ type: 'card', number: data.cardNumber, exp_month: MM, exp_year: YY, cvc: data.cvv });

      const userInfo = await UserService.getUserInformation();
      if (userInfo) {
        const payment = {
          ...userInfo,
          card_number: data.cardNumber,
          cvv: data.cvv,
          expiry_date: `${MM}/${YY}`,
          currency: subscribe.currency,
          amount: disPrice,
        };

        await CardDetailsProvider.payment(payment);
        await SubscriptionProvider.add_subscription({
          token: userInfo.token,
          user_id: userInfo.user_id,
          subscription_id: subscribe.pk_id,
        });

        Alert.alert('Success', 'Subscription added successfully');
        navigation.navigate('TabsPage', { sub_hide: true });
      }
    } catch (error) {
      Alert.alert('Error', 'Payment or subscription failed');
    }
  };

  return (
    <StripeProvider publishableKey="pk_live_UkeTD22l0zlkDM9nllsyWLMQ002BaNcvAn">
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#9d0808" />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
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
            <Text style={styles.title}>Set up your payment</Text>
            <Controller
              control={control}
              name="cardNumber"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Card Number"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="numeric"
                />
              )}
            />
            {errors.cardNumber && <Text style={styles.error}>{errors.cardNumber.message}</Text>}

            <Controller
              control={control}
              name="expiryDate"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Expiry Date (MM/YY)"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="numeric"
                />
              )}
            />
            {errors.expiryDate && <Text style={styles.error}>{errors.expiryDate.message}</Text>}

            <Controller
              control={control}
              name="cvv"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="CVV"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry
                  keyboardType="numeric"
                />
              )}
            />
            {errors.cvv && <Text style={styles.error}>{errors.cvv.message}</Text>}

            <TouchableOpacity onPress={handleSubmit(subs ? handleSubscription : handleRegister)} style={styles.button}>
              <Text style={styles.buttonText}>{buttonName}</Text>
            </TouchableOpacity>
            {showRegister && (
              <Text style={styles.note}>
                Note: You will be charged after your 1 free month
              </Text>
            )}
            <View style={styles.extraScrollArea} />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </StripeProvider>
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
    zIndex: 1,
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
    height: 60,
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
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    flex: 1,
    textAlign: 'center',
  },
  backIcon: {
    width: 25,
    height: 25,
    padding: 10,
    tintColor: 'white',
  },
  cardImage: {
    width: '95%',
    height: 250,
    resizeMode: 'contain',
    margin: 15,
  },
  title: {
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
    marginLeft: 15,
  },
  note: {
    marginVertical: 20,
    textAlign: 'center',
    color: 'black',
  },
});

export default CreditCardScan;
