import { Api } from "../api/api";

class shareCaseProvider {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  async shareCase_contact_details(info: any) {
    const headers = {
      'Content-Type': 'application/json',
    };
    try {
      const response = await this.api.post('shareCase_contact_details',JSON.stringify(info), { headers });
      console.log('shareCaseContactDetails response:', response.data); // Log response data
      return response.data;
    } catch (error) {
      console.error('Error sharing case contact details:', error);
      throw error;
    }
  }
}

export default shareCaseProvider;


