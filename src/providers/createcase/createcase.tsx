import { Api } from '../api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class CreateCaseProvider {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  async createCase(suspectInfo: any) {
    const token = await AsyncStorage.getItem('user_token'); // Retrieve the token
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
    };

    try {
      const response = await this.api.post('create_case', JSON.stringify(suspectInfo), { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async caseInfo(suspectInfo: any) {
  const token = await AsyncStorage.getItem('user_token'); // Retrieve the token
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
  };

  try {
    const response = await this.api.post('show_case', JSON.stringify(suspectInfo), { headers });
    return response.data;
  } catch (error) {
    throw error;
  }
}

  async editCase(suspectInfo: any) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const response = await this.api.post('edit_case', JSON.stringify(suspectInfo), { headers, timeout: 10000 });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
