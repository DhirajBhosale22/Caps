// src/providers/CardDetailsProvider.tsx
import { Api } from "../api/api";


export class CardDetailsProvider {
  api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  async card_details(user_info: any) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const response = await this.api.post(
        'creditcard_info',
        JSON.stringify(user_info),
        { headers: headers, timeout: 10000 }
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  async payment(user_info: any) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const response = await this.api.post(
        'charge_credit_card',
        JSON.stringify(user_info),
        { headers: headers, timeout: 10000 }
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
}
