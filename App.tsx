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
import SubscriptionPage from './src/pages/SubscriptionPage';
import ProfileScreen from './src/pages/ProfileScreen';
import EditProfileScreen from './src/pages/EditProfileScreen';
import HomePage from './src/pages/HomePage';
import CreateCaseScreen from './src/pages/CreateCaseScree';
import AggressionMeterScreen from './src/pages/AggressionMeterScreen';
import QuestionPage from './src/pages/QuestionPage';
import BestPracticeScreen from './src/pages/BestPracticeScreen';
import AggressionStageZeroScreen from './src/pages/AggressionStageZeroScreen';
import AggressionStageOneScreen from './src/pages/AggressionStageOneScreen';
import Behaviour from './src/pages/Behaviour';
import AgressionExplainPage from './src/pages/AgressionExplainPage';
import MyCasePage from './src/pages/MyCasePage';
import ContactUsScreen from './src/pages/ContactUsPage';
import ChangePasswordScreen from './src/pages/ChangePasswordScreen';
import SharegroupPage from './src/pages/SharegroupPage';
import { handleNextAction } from '@stripe/stripe-react-native';

const Stack = createStackNavigator();

const App = () => {
  return (

    <LoaderProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
        <Stack.Screen name="EmergencyProceduresPage" component={EmergencyProceduresPage} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
         <Stack.Screen name="SharegroupPage" component={SharegroupPage} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />

<Stack.Screen name="AggressionStageOneScreen" component={AggressionStageOneScreen} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />

<Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
        <Stack.Screen name="ContactUsScreen" component={ContactUsScreen} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
        <Stack.Screen name="AgressionExplainPage" component={AgressionExplainPage} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
        <Stack.Screen name="MyCasePage" component={MyCasePage} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
        <Stack.Screen name="AggressionStageZeroScreen" component={AggressionStageZeroScreen} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
         <Stack.Screen name="Behaviour" component={Behaviour} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
         <Stack.Screen name="BestPracticeScreen" component={BestPracticeScreen} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
          <Stack.Screen name="AggressionMeterScreen" component={AggressionMeterScreen} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
        <Stack.Screen name="QuestionPage" component={QuestionPage} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
        <Stack.Screen name="RegistrationForm" component={RegistrationForm} options={{ 
            headerShown: false, 
            cardStyle: { backgroundColor: 'red' } 
          }}  
        />
        <Stack.Screen name="CreateCaseScreen" component={CreateCaseScreen} options={{ 
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
         <Stack.Screen name="sub" component={SubscriptionPage} options={{ 
            headerShown: false, 
            cardStyle: { backgroundColor: 'red' } 
          }}  
          
        />
        <Stack.Screen name="profile" component={ProfileScreen} options={{ 
            headerShown: false, 
            cardStyle: { backgroundColor: 'red' } 
          }}  
          
        />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
          
        />
        <Stack.Screen name="home" component={HomePage} options={{ 
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