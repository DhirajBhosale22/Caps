// import React from 'react';
// import { View, Image, ActivityIndicator, StyleSheet } from 'react-native';

// const Apploder = () => {
//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../assets/img/logoMain.png')} // replace with your image URL
//         style={styles.image}
//         resizeMode="contain"
//       />
//       <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: '80%',
//     height: '40%',
//     marginBottom: 20,
//   },
//   loader: {
//     marginTop: 20,
//   },
// });

// export default Apploder;


import React, { useState, useEffect } from 'react';
import { View, Image, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Apploder = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'home' }],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      }
      setLoading(false);
    }, 3000); // wait for 3 seconds
    return () => clearTimeout(timeout);
  }, [navigation]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/img/logoMain.png')} // replace with your image URL
          style={styles.image}
          resizeMode="contain"
        />
        <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '40%',
    marginBottom: 20,
  },
  loader: {
    marginTop: 20,
  },
});

export default Apploder;