// import { AsyncStorage } from 'react-native';
// import { Api } from '../api/api';

// class User {
//   private api: Api;
//   private storage: AsyncStorage;

//   constructor(api: Api, storage: AsyncStorage) {
//     this.api = api;
//     this.storage = storage;
//   }

//   login(accountInfo: any) {
//     const headers = {
//       'Content-Type': 'application/json',
//     };
//     return this.api.post('login', accountInfo, { headers: headers })
//       .then((response: any) => response)
//       .catch((error: any) => {
//         console.error('Login Error:', error); // Log the error
//         throw error;
//       });
//   }

  

//   /**
//    * Send a POST request to our signup endpoint with the data
//    * the user entered on the form.
//    */
//   signup(accountInfo: any) {
//     const headers = {
//       'Content-Type': 'application/json',
//     };

//     return this.api.post('registration', JSON.stringify(accountInfo), { headers })
//       .then((response: any) => response)
//       .catch((error: any) => {
//         if (error.response && error.response.data) {
//           throw new Error(error.response.data.message || 'Validation error');
//         } else {
//           throw new Error('An error occurred during registration');
//         }
//       });
//   }

//   check_email(email: string) {
//     const emailInfo = {
//       email: email,
//     };
//     const headers = {
//       'Content-Type': 'application/json',
//     };
//     return this.api.post('checkEmail', JSON.stringify(emailInfo), { headers: headers }).then((response: any) => response);
//   }

//   /**
//    * Log the user out, which forgets the session
//    */
//   logout() {
//     this.storage.removeItem('user');
//   }

//   /**
//    * Process a login/signup response to store user data
//    */
//   _loggedIn(resp: any) {
//     this._user = resp.user;
//   }

//   user_information() {
//     return this.storage.getItem('user').then((res: any) => {
//       console.log('res', res);
//       return res;
//     });
//   }
// }

// export default User;


import AsyncStorage from '@react-native-async-storage/async-storage';
import { Api } from '../api/api';

class User {
  private api: Api;
  private storage: AsyncStorage;

  constructor(api: Api) {
    this.api = api;
    this.storage = AsyncStorage;
  }

  login(accountInfo: any) {
    const headers = {
      'Content-Type': 'application/json',
    };
    return this.api.post('login', accountInfo, { headers })
      .then((response: any) => {
        if (response.success) {
          // Store user data
          this.storage.setItem('user', JSON.stringify(response.data));
        }
        return response;
      })
      .catch((error: any) => {
        console.error('Login Error:', error);
        throw error;
      });
  }

  signup(accountInfo: any) {
    const headers = {
      'Content-Type': 'application/json',
    };
    return this.api.post('registration', JSON.stringify(accountInfo), { headers })
      .then((response: any) => {
        if (response.success) {
          // Store user data
          this.storage.setItem('user', JSON.stringify(response.data));
        }
        return response;
      })
      .catch((error: any) => {
        if (error.response && error.response.data) {
          throw new Error(error.response.data.message || 'Validation error');
        } else {
          throw new Error('An error occurred during registration');
        }
      });
  }

  check_email(email: string) {
    const emailInfo = {
      email: email,
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    return this.api.post('checkEmail', JSON.stringify(emailInfo), { headers });
  }

  logout() {
    this.storage.removeItem('user');
  }

  user_information() {
    return this.storage.getItem('user').then((res: any) => {
      console.log('res', res);
      return JSON.parse(res);
    });
  }

  is_logged_in() {
    return this.storage.getItem('user').then((res: any) => {
      return res !== null;
    });
  }
}

export default User;