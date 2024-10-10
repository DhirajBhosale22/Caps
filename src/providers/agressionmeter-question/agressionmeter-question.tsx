import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosResponse } from 'axios';

class AgressionMeterQuestionProvider {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  async emergencyMeterQuestion(question: any): Promise<any> {
    try {
        console.log('Question Object:', question);
        const user = JSON.parse(await AsyncStorage.getItem('user'));

        const token = user.token;
        console.log('Retrieved Token:', token);

        if (!token) {
            throw new Error('No token found. Please log in again.');
        }

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        };
        const data = {
            token: token,
            type: question.type,
            user_id: user.user_id,
            case_id: question.case_id, // Add the case_id to the API call
          };
      

        console.log('Sending Request to API:', {
            url: 'meter_of_aggression',
            method: 'POST',
            headers,
            data,
        });

        const response = await this.api.post('meter_of_aggression', question, {
            headers,
            timeout: 10000,
        });

        console.log('API Response:', response);

        if (response.data.result === 'failed') {
            throw new Error(response.data.msg || 'Request failed');
        }

        // Ensure we're returning the actual data from the response
        return response.data; 
    } catch (error: any) {
        if (error.response) {
            console.error('API Error Details:', error.response);
            throw new Error(`API Error: ${error.response.status} - ${error.response.statusText}`);
        } else if (error.request) {
            console.error('Network Error Details:', error.request);
            throw new Error('Network Error: No response received from the server.');
        } else {
            console.error('Request Error Details:', error.message);
            throw new Error(`Request Error: ${error.message}`);
        }
    }
}

}

export default AgressionMeterQuestionProvider;
