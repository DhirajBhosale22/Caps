// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/pages/LoginScreen';
import ForgotPasswordScreen from './src/pages/ForgetPasswordScreen';
import EmergencyProceduresPage from './src/pages/EmergencyProceduresPage';
import RegistrationForm from './src/pages/RegistrationForm';
import CountrySelectionScreen from './src/pages/CountrySelectionScreen';
import StateSelectionScreen from './src/pages/StateSelectionScreen';
import CreditCardScan from './src/pages/CreditCardScan';
import { LoaderProvider } from './src/providers/loader/loader';
const Stack = createStackNavigator();

const App = () => {
  return (

    <LoaderProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ 
            headerShown: false, 
            cardStyle: { backgroundColor: 'red' } 
          }}  
        />
        <Stack.Screen name="EmergencyProceduresPage" component={EmergencyProceduresPage} options={{ 
            headerShown: false, 
            cardStyle: { backgroundColor: 'red' } 
          }}  
        />
        <Stack.Screen name="RegistrationForm" component={RegistrationForm} options={{ 
            headerShown: false, 
            cardStyle: { backgroundColor: 'red' } 
          }}  
        />
         <Stack.Screen name="country" component={CountrySelectionScreen} options={{ 
            headerShown: false, 
            cardStyle: { backgroundColor: 'red' } 
          }}  
          
        />
         <Stack.Screen name="state" component={StateSelectionScreen} options={{ 
            headerShown: false, 
            cardStyle: { backgroundColor: 'red' } 
          }}  
          
        />
         <Stack.Screen name="credit" component={CreditCardScan} options={{ 
            headerShown: false, 
            cardStyle: { backgroundColor: 'red' } 
          }}  
          
        />
      </Stack.Navigator>
    </NavigationContainer>
    </LoaderProvider>
  );
};

export default App;