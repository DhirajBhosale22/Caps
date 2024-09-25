import { Api } from "../api/api";

export class OptOutProvider {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  //*************subscription********************************/
  async opt_out(userInfo: any): Promise<any> {
    try {
      const headers = { 'Content-Type': 'application/json' };
      const response = await this.api.post('optout_user', JSON.stringify(userInfo), { headers });
      return response.data;
    } catch (error) {
      console.error('Error during opt_out:', error);
      throw error;
    }
  }
}
