import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Api } from '../api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define the AggressionlevelProvider class
export class AggressionlevelProvider {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  // Helper method to get token from storage
  private async getToken(): Promise<string | null> {
    try {
      const token = await AsyncStorage.getItem('authToken');
      return token;
    } catch (error) {
      console.error('Error retrieving token:', error);
      return null;
    }
  }

  // Helper method to set headers with token
  private async getHeaders() {
    const token = await this.getToken();
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // Include the token if it exists
    };
  }

  // Method to get aggression level
  async aggression_level(info: any) {
    const config: AxiosRequestConfig = {
      headers: await this.getHeaders(),
      timeout: 10000, // Set timeout for the request
    };

    return this.api.post('aggression_level_show_case', JSON.stringify(info), config);
  }

  // Method to create case aggression level
  async create_case_aggression_level(info: any) {
    const config: AxiosRequestConfig = {
      headers: await this.getHeaders(),
    };

    return this.api.post('create_case_aggression_level', JSON.stringify(info), config);
  }
}