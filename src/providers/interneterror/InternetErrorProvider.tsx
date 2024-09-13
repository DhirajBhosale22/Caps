import React from 'react';
import { Alert } from 'react-native';

export class InterneterrorProvider {
  constructor() {}

  error() {
    Alert.alert(
      '', // Title, can add an icon or text if needed
      'Slow or no internet connection, please check your internet connection',
      [
        {
          text: 'Ok',
          onPress: () => {
            // Handle the OK button press if needed
          },
          style: 'cancel', // Styling for the button
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {
          // Handle dismissal of the alert if needed
        },
      }
    );
  }
}
