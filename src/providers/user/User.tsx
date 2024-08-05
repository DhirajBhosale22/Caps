import { AsyncStorage } from 'react-native';
import { Api } from '../api/api';

class User {
  private _user: any;
  private api: Api;
  private storage: AsyncStorage;

  constructor(api: Api, storage: AsyncStorage) {
    this.api = api;
    this.storage = storage;
  }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  login(accountInfo: any) {
    const headers = {
      'Content-Type': 'application/json',
    };
    return this.api.post('login', JSON.stringify(accountInfo), { headers: headers }).then((response: any) => response);
  }

  /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  signup(accountInfo: any) {
    const headers = {
      'Content-Type': 'application/json',
    };
    return this.api.post('registration', JSON.stringify(accountInfo), { headers: headers }).then((response: any) => response);
  }

  check_email(email: string) {
    const emailInfo = {
      email: email,
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    return this.api.post('checkEmail', JSON.stringify(emailInfo), { headers: headers }).then((response: any) => response);
  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this.storage.removeItem('user');
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp: any) {
    this._user = resp.user;
  }

  user_information() {
    return this.storage.getItem('user').then((res: any) => {
      console.log('res', res);
      return res;
    });
  }
}

export default User;