import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Stripe } from '@stripe/stripe-react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TextInput } from 'react-native-paper';

import { InternetErrorProvider } from '../providers/interneterror/InternetErrorProvider';
import { LoaderProvider } from '../providers/loader/loader';
import { SubscriptionProvider } from '../providers/subscription/SubscriptionProvider';
import User from '../providers/user/User';
import { useStorage } from '@react-native-async-storage/async-storage';
import Api from './../../providers/api/Api';

const SubscriptionPage = () => {
  const [subscriptions, setSubscriptions] = useState<any[]>([]);
  const [subHide, setSubHide] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const storage = useStorage();
  
  const initialValues = { Searial_key: '' };
  const validationSchema = Yup.object().shape({
    Searial_key: Yup.string().required('Serial key is required'),
  });

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const result = await SubscriptionProvider.subscription_type();
        setSubscriptions(result);
      } catch (error) {
        console.error(error);
      }
    };

    Stripe.setOptions({ publishableKey: 'pk_test_RgXyKuy7aBs9A0f1EAcxTfPb00Zm1vsZCh' });
    setSubHide(route.params?.sub_hide);
    fetchSubscriptions();
  }, [route.params?.sub_hide]);

  const handleSubscription = async (values: any) => {
    try {
      LoaderProvider.presentLoading();
      const userInfo = await User.user_information();
      LoaderProvider.dismiss_loader();
      const subInfo = {
        email: userInfo.email,
        serial_key: values.Searial_key.toUpperCase(),
      };
      const res = await SubscriptionProvider.subscription(subInfo);
      if (res.result === 'failed' || !res) {
        showAlert(res.result, res.msg);
      } else {
        if (res.msg === 'Serial key found') {
          await storage.setItem('client_id', res.client_id);
          await storage.setItem('user_type', res.user_type);
          Event.publish('profile');
          navigation.reset({ index: 0, routes: [{ name: 'TabsPage' }] });
        }
      }
    } catch (error) {
      LoaderProvider.dismiss_loader();
      InterneterrorProvider.error();
    }
  };

  const showAlert = (title: string, sub_tit: string) => {
    Alert.alert(title, sub_tit, [{ text: 'Ok' }]);
  };

  const individualSubscription = (subscription: any) => {
    navigation.navigate('AllCardsPage', { sub: 'subs', subscribe: subscription });
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      {subscriptions.map((subscription, index) => (
        <View key={index} style={{ marginBottom: 16 }}>
          <Text>{subscription.duration}</Text>
          {subscription.discount !== '0' && <Text style={{ color: '#9d0808' }}>{subscription.discount}% OFF</Text>}
          <Text>{subscription.normal_txt}</Text>
          <Button title={`Continue (${subscription.price} $)`} onPress={() => individualSubscription(subscription)} />
        </View>
      ))}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubscription}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <TextInput
              label="Serial Key"
              onChangeText={handleChange('Searial_key')}
              onBlur={handleBlur('Searial_key')}
              value={values.Searial_key}
              error={touched.Searial_key && errors.Searial_key}
            />
            {touched.Searial_key && errors.Searial_key && (
              <Text style={{ color: 'red' }}>{errors.Searial_key}</Text>
            )}
            <Button onPress={handleSubmit as any} title="Submit" />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default SubscriptionPage;
