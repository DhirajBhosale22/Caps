
import { Api } from '../api/api'; // Import the Api class
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage for token management

class CaseProvider {
  private api: Api;

  constructor(api: Api) {
    this.api = api; // Initialize the Api instance
  }

  // Retrieve token from AsyncStorage and include it in headers
  private async getHeaders() {
    const token = await AsyncStorage.getItem('user'); // Retrieve the token
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
    };
  }

  // Fetch user-created cases with authentication token
  async myCases(userInfo: any, token: any): Promise<any> {
    const headers = await this.getHeaders(); // Get headers with token
    try {
      const response = await this.api.post('user_created_cases', userInfo, { headers });
      console.log('myCases response:', response.data); // Log response data
      return response.data;
    } catch (error) {
      console.error('Error fetching user-created cases:', error);
      throw error;
    }
  }
  
  async sharedCases(userInfo: any, token: any): Promise<any> {
    const headers = await this.getHeaders(); // Get headers with token
    try {
      const response = await this.api.post('shared_cases', userInfo, { headers });
      console.log('sharedCases response:', response.data); // Log response data
      return response.data;
    } catch (error) {
      console.error('Error fetching shared cases:', error);
      throw error;
    }
  }

  // Share case via email with authentication token
  async nocaps_shareCase(userInfo: any): Promise<any> {
    const headers = await this.getHeaders(); // Get headers with token
    try {
      const response = await this.api.post('shareCase_byEmail', userInfo, { headers });
      console.log('nocapsShareCase response:', response.data); // Log response data
      return response.data;
    } catch (error) {
      console.error('Error sharing case via email:', error);
      throw error;
    }
  }

  // Share case contact details with authentication token
  


}

export default CaseProvider;