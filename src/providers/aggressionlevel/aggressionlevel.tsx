// import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
// import { Api } from '../api/api';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Define the AggressionlevelProvider class
// export class AggressionlevelProvider {
//   private api: Api;

//   constructor(api: Api) {
//     this.api = api;
//   }

//   // Helper method to get token from storage
//   // private async getToken(): Promise<string | null> {
//   //   try {
//   //     const token = await AsyncStorage.getItem('user_token'); // Use the same key as in CreateCaseProvider
//   //     return token;
//   //   } catch (error) {
//   //     console.error('Error retrieving token:', error);
//   //     return null;
//   //   }
//   // }

//   // // Helper method to set headers with token
//   // private async getHeaders() {
//   //   const token = await this.getToken();
//   //   return {
//   //     'Content-Type': 'application/json',
//   //     'Authorization': `Bearer ${token}`, // Include the token if it exists
//   //   };
//   // }

// // Method to get aggression level
// async aggression_level(info: any) {
//   try {
//     const token = await AsyncStorage.getItem('user'); // Retrieve the token

//     if (!token) {
//       throw new Error('Token is null or undefined');
//     }

//     const headers = {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
//     };

//     try {
//       const response = await this.api.post('aggression_level_show_case', info, { headers });
//       return response;
//     } catch (error) {
//       throw error;
//     }
//   } catch (error) {
//     console.error('Error retrieving token:', error);
//     throw error;
//   }
// }
  
//   // Method to create case aggression level
//   async create_case_aggression_level(info: any) {
//     const token = await AsyncStorage.getItem('user_token'); // Retrieve the token
//     const headers = {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
//     };

//     try {
//       const response = await this.api.post('create_case_aggression_level', JSON.stringify(info), { headers });
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   }
   
// }


import { Api } from "../api/api";

class AggressionLevelProvider {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  async aggressionLevel(info: any) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const response = await this.api.post('aggression_level_show_case', JSON.stringify(info), { headers });
      return response.data;
    } catch (error) {
      console.error('Error fetching aggression level:', error);
      return null;
    }
  }

  async createCaseAggressionLevel(caseAggressionLevelInfo: any) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const response = await this.api.post('create_case_aggression_level', JSON.stringify(caseAggressionLevelInfo), { headers });
      return response.data;
    } catch (error) {
      console.error('Error creating case aggression level:', error);
      return null;
    }
  }
}

export default AggressionLevelProvider;


