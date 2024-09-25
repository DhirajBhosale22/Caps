import { Api } from "../api/api";

export class TermsConditionProvider {
  api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  terms_conditions() {
    const headers = {
      'Content-Type': 'application/json',
    };

    return this.api
      .get('terms_and_conditions', {}, { headers })
      .then((response) => response)
      .catch((error) => {
        console.error('Error fetching terms and conditions:', error);
        throw error;
      });
  }
}
