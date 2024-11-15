import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { SubscriptionProvider } from '../../src/providers/subscription/SubscriptionProvider'; // Adjust the import path
import { Api } from '../providers/api/api'; // Importing the API class
import { useNavigation } from '@react-navigation/native';
// Define the structure of a Subscription object
interface Subscription {
  duration: string;
  discount: string;
  price: string;
  normal_txt: string;
}

const SubscriptionPage = () => {
  const navigation = useNavigation();
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null); // State for token

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setToken(parsedUser.token); // Set the token state
          
          const apiInstance = new SubscriptionProvider(new Api());
          const response = await apiInstance.subscription_type(parsedUser.token);
          
          if (response.status === 200) {
            setSubscriptions(response.data as Subscription[]);          } else {
            setError('Failed to fetch subscriptions');
          }
        } else {
          Alert.alert('Error', 'User not found. Please log in.');
        }
      } catch (error) {
        console.error('Failed to retrieve user from storage:', error);
        setError('Error fetching subscriptions');
      } finally {
        setLoading(false);
      }
    };

    fetchSubscriptions();
  }, []);

  console.log(token);


  if (loading) {
    return <ActivityIndicator size="large" color="#9d0808" style={styles.loader} />;
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {subscriptions.map((subscription, index) => (
        <View key={index} style={styles.subscriptionCard}>
          <View style={styles.subscriptionHeader}>
            <Text style={styles.durationText}>{subscription.duration}</Text>
            <Text style={styles.discountText}>{subscription.discount}% OFF</Text>
          </View>
          <Text style={styles.descriptionText}>{subscription.normal_txt}</Text>
          <TouchableOpacity 
            style={styles.buttonContainer}
            
            onPress={() => {
              console.log('Navigating to credit');
              navigation.navigate('credit');
            }}>
          
            <Text style={styles.buttonText}>Continue ({subscription.price} $)</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};



import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: wp('4%'), // Responsive padding
    backgroundColor: '#f0eff5',
  },
  subscriptionCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: wp('4%'), // Responsive padding
    marginBottom: hp('2%'), // Responsive margin
    elevation: 2,
  },
  subscriptionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('1%'), // Responsive margin
  },
  durationText: {
    fontSize: wp('5%'), // Responsive font size
    fontWeight: 'bold',
    color: '#4f4f4f',
  },
  discountText: {
    fontSize: wp('4.5%'), // Responsive font size
    color: '#9d0808',
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: wp('3.5%'), // Responsive font size
    color: 'black',
    marginBottom: hp('1.5%'), // Responsive margin
    fontWeight: '400',
    marginTop: hp('2%'), // Responsive margin
  },
  buttonContainer: {
    backgroundColor: '#9d0808',
    borderRadius: 30,
    paddingVertical: hp('2%'), // Responsive padding
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: wp('4%'), // Responsive font size
    fontWeight: 'bold',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: wp('5%'), // Responsive font size
  },
});

export default SubscriptionPage; // Ensure you export the styles