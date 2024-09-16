import { Api } from '../api/api';
import { AxiosRequestConfig } from 'axios';

export class ContactProvider {
  api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  // Contact method to send feedback
  contact(contactInfo: any): Promise<any> {
    const headers: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // Sending a POST request using the Api class
    return this.api.post('feedback', JSON.stringify(contactInfo), headers)
      .then((response) => {
        console.log('Response:', response.data);
        return response.data;
      })
      .catch((error) => {
        console.error('Error:', error);
        throw error;
      });
  }
}
