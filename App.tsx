// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/pages/LoginScreen';
import ForgotPasswordScreen from './src/pages/ForgetPasswordScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ 
            headerShown: false  , 
            cardStyle: { backgroundColor: 'red' } 
          }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
