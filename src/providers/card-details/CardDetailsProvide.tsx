// src/providers/card-details/CardDetailsProvider.ts
import { Api } from "../api/api"; // Ensure this path is correct

class CardDetailsProvider {
  api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  cardDetails(userInfo: any) {
    const headers = { 'Content-Type': 'application/json' };
    return this.api.post('creditcard_info', userInfo, { headers }); // Removed JSON.stringify
  }

  payment(userInfo: any) {
    const headers = { 'Content-Type': 'application/json' };
    return this.api.post('charge_credit_card', userInfo, { headers }); // Removed JSON.stringify
  }
}

export default new CardDetailsProvider(new Api());
