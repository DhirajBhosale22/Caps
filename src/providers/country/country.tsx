import { Api } from "../api/api";

class CountryProvider {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  country() {
    return this.api.get('countrylist', '');
  }

  state(id: any) {
    return this.api.get('statelist/' + id);
  }
}

export default CountryProvider;