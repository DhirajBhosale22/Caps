import React, { useState, useEffect } from 'react';
import { View, Modal, StyleSheet, Dimensions } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import NoInternetScreen from './NoInternetScreen';

const { width, height } = Dimensions.get('window');

const InternetConnection: React.FC = () => {
  const [isConnected, setIsConnected] = useState(true); // Default to connected

  useEffect(() => {
    // Listen for network status changes
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected ?? true); // Update connection status
    });

    // Check initial network state
    NetInfo.fetch().then((state) => {
      setIsConnected(state.isConnected ?? true);
    });

    // Cleanup listener on component unmount
    return () => unsubscribe();
  }, []);

  // Retry function to check connection status
  const handleRetry = () => {
    NetInfo.fetch().then((state) => {
      setIsConnected(state.isConnected ?? true);
    });
  };

  // Render NoInternetScreen if there is no internet connection
  if (!isConnected) {
    return <NoInternetScreen onRetry={handleRetry} />;
  }

  return null; // Don't render anything if connected
};

const styles = StyleSheet.create({
  // Add any necessary styles here
});

export default InternetConnection;