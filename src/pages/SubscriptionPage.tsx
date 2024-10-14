import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { SubscriptionProvider } from '../../src/providers/subscription/SubscriptionProvider'; // Adjust the import path
import { Api } from '../providers/api/api'; // Importing the API class

// Define the structure of a Subscription object
interface Subscription {
  duration: string;
  discount: string;
  price: string;
  normal_txt: string;
}

const SubscriptionPage = () => {
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
  const handleAddSubscription = (sub_info: Subscription) => {
    const apiInstance = new SubscriptionProvider(new Api());

    // Call the add_subscription method with the subscription info and token
    if (token) {
      apiInstance.add_subscription(sub_info, token)
        .then(response => {
          console.log('Subscription added successfully:', response);
          // Perform any further actions based on the response, e.g., navigate to a confirmation page
        })
        .catch(err => {
          console.error('Error adding subscription:', err);
          setError('Failed to add subscription');
        });
    } else {
      setError('User token is not available');
    }
  };

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
            onPress={() => handleAddSubscription(subscription)}
          >
            <Text style={styles.buttonText}>Continue ({subscription.price}$)</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f0eff5',
  },
  subscriptionCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  subscriptionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  durationText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4f4f4f',
  },
  discountText: {
    fontSize: 16,
    color: '#9d0808',
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 14,
    color: 'black',
    marginBottom: 12,
    fontWeight:'400',
    marginTop:20,
  },
  buttonContainer: {
    backgroundColor: '#9d0808',
    borderRadius: 30,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
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
    fontSize: 18,
  },
});

export default SubscriptionPage;