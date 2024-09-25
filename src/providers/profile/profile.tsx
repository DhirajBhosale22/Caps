import axios, { AxiosResponse } from 'axios';

class Api {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  post(endpoint: string, data: any, options: any): Promise<AxiosResponse<any>> {
    return axios.post(`${this.baseUrl}/${endpoint}`, data, options);
  }
}

export class ProfileProvider {
  api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  //*************User INFO********************************/
  user_info(userInfo: any): Promise<AxiosResponse<any>> {
    return this.api.post('user_info', JSON.stringify(userInfo), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userInfo.token}`, // Ensure token is sent in headers
      },
      timeout: 10000,
    });
  }

  //*******************Edit Profile*************************/
  edit_info(editInfo: any): Promise<AxiosResponse<any>> {
    return this.api.post('edit_profile', JSON.stringify(editInfo), {
      headers: {
        'Content-Type': 'application/json',
        
      },
      timeout: 10000,
    });
  }
  
  upload_profile_picture(formData: FormData, token: string): Promise<AxiosResponse<any>> {
    return this.api.post('upload_profile_picture', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`, // Include the token in the header
      },
      timeout: 10000,
    });
  }
}



export default ProfileProvider;
