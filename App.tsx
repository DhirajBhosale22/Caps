// App.tsx
import React, { useEffect } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useColorScheme } from 'react-native';
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
import SettingsPage from './src/pages/settings';
import IntrductionPage from './src/pages/IntroductionToCaps';
import AggressionStageTwoScreen from './src/pages/AggressionStageTwoScreen';
import AggressionStageThreeScreen from './src/pages/AggressionStageThreeScreen';
import AggressionStageFourScreen from './src/pages/AggressionStageFourScreen';
import AggressionStageFiveScreen from './src/pages/AggressionStageFiveScreen';
import AggressionStageSixScreen from './src/pages/AggressionStageSixScreen';
import AggressionStageSevenScreen from './src/pages/AggressionStageSevenScreen';
import AggressionStageEightScreen from './src/pages/AggressionStageEightScreen';
import AggressionStageNineScreen from './src/pages/AggressionStageNineScreen';
import RpTestBestPracticeResponseScreen from './src/pages/RpTestBestPracticeResponseScreen';
import EmergencyProcedure from './src/pages/EmergencyProcedure';
import Sharedcases from './src/pages/SharedcasesPage';
import EditCaseScreen from './src/pages/EditCaseScreen';
import SharecontactPage from './src/pages/Sharecontact';
import ImagePage from './src/pages/ImagePage';
import AudioPage from './src/pages/AudioPage';
import DocumentPage from './src/pages/DocumentPage';
import VideoPage from './src/pages/VideoPage';
import { handleNextAction } from '@stripe/stripe-react-native';
import CasesharedWith from './src/pages/CasesharedWithPage';
import FilesPage from './src/pages/FilePage';
import Apploder from './src/pages/Apploder';
import ExistingCases from './src/pages/ExistingCases';
import InternetConnection from './src/pages/InternetConnection';

import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createStackNavigator();

const App = () => {
  const scheme = useColorScheme(); // Detect the current theme (light or dark)
 
  return (

    <LoaderProvider>
    <NavigationContainer   theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <InternetConnection/>
      <Stack.Navigator initialRouteName="Apploder">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
         <Stack.Screen name="Apploder" component={Apploder} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
           <Stack.Screen name="ImagePage" component={ImagePage} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
          <Stack.Screen name="VideoPage" component={VideoPage} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
        <Stack.Screen name="AudioPage" component={AudioPage} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
 <Stack.Screen name="DocumentPage" component={DocumentPage} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
        <Stack.Screen name="SharecontactPage" component={SharecontactPage} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
        <Stack.Screen name="EmergencyProceduresPage" component={EmergencyProceduresPage} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
        <Stack.Screen name="FilesPage" component={FilesPage} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
          <Stack.Screen name="CasesharedWith" component={CasesharedWith} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
          <Stack.Screen name="Sharedcases" component={Sharedcases} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
         <Stack.Screen name="ExistingCases" component={ExistingCases} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
         <Stack.Screen name="IntrductionPage" component={IntrductionPage} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
         <Stack.Screen name="AggressionStageTwoScreen" component={AggressionStageTwoScreen} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
         <Stack.Screen name="AggressionStageThreeScreen" component={AggressionStageThreeScreen} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
         <Stack.Screen name="AggressionStageFourScreen" component={AggressionStageFourScreen} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
         <Stack.Screen name="AggressionStageFiveScreen" component={AggressionStageFiveScreen} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
         <Stack.Screen name="AggressionStageSixScreen" component={AggressionStageSixScreen} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
         <Stack.Screen name="AggressionStageSevenScreen" component={AggressionStageSevenScreen} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
         <Stack.Screen name="AggressionStageEightScreen" component={AggressionStageEightScreen} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
         <Stack.Screen name="AggressionStageNineScreen" component={AggressionStageNineScreen} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
         <Stack.Screen name="RpTestBestPracticeResponseScreen" component={RpTestBestPracticeResponseScreen} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
         <Stack.Screen name="EmergencyProcedure" component={EmergencyProcedure} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
         <Stack.Screen name="SharegroupPage" component={SharegroupPage} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
        <Stack.Screen name="SettingsPage" component={SettingsPage} options={{ 
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
         <Stack.Screen name="EditCaseScreen" component={EditCaseScreen} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } EditCaseScreen
          }}  
        />
        <Stack.Screen name="RegistrationForm" component={RegistrationForm} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
        <Stack.Screen name="CreateCaseScreen" component={CreateCaseScreen} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
        />
         <Stack.Screen name="country" component={CountrySelectionScreen} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
          
        />
         <Stack.Screen name="state" component={StateSelectionScreen} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
          
        />
         <Stack.Screen name="credit" component={CreditCardScan} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
          
        />
         <Stack.Screen name="sub" component={SubscriptionPage} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
          
        />
        <Stack.Screen name="profile" component={ProfileScreen} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
          
        />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
          
        />
        <Stack.Screen name="home" component={HomePage} options={{ 
            headerShown: false, 
            // cardStyle: { backgroundColor: 'red' } 
          }}  
          
        />
      </Stack.Navigator>
    </NavigationContainer>
    </LoaderProvider>
  );
};

export default App;