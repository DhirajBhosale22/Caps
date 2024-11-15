// // src/providers/SubscriptionProvider.tsx
// import { Api } from "../api/api";

// export class SubscriptionProvider {
//   api: Api;

//   constructor(api: Api) {
//     this.api = api;
//   }

//   //*************subscription********************************/
//   subscription(forgotInfo: any) {
//     const headers = {
//       'Content-Type': 'application/json'
//     };
//     return this.api.post('validate_serial_key', JSON.stringify(forgotInfo), { headers }).then(response => response).catch(error => {
//       throw new Error(error);
//     });
//   }
  
//   subscription_type() {
//     return this.api.get('subscription', {}).then(response => response).catch(error => {
//       throw new Error(error);
//     });
//   }

//   add_subscription(sub_info: any) {
//     const headers = {
//       'Content-Type': 'application/json'
//     };
//     return this.api.post('add_subscription', JSON.stringify(sub_info), { headers }).then(response => response).catch(error => {
//       throw new Error(error);
//     });
//   }
// }

// // Example usage
// const apiInstance = new Api();
// const subscriptionProvider = new SubscriptionProvider(apiInstance);
// src/providers/SubscriptionProvider.tsx
import { Api } from "../api/api";

export class SubscriptionProvider {
  api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  //*************subscription********************************/
  subscription(forgotInfo: any) {
    const headers = {
      'Content-Type': 'application/json'
    };
    return this.api.post('validate_serial_key', JSON.stringify(forgotInfo), { headers })
      .then(response => response)
      .catch(error => {
        throw new Error(error);
      });
  }
  
  subscription_type(token: string) {
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
    return this.api.get('subscription', { headers })
      .then(response => response)
      .catch(error => {
        throw new Error(error);
      });
  }

  add_subscription(sub_info: any, token: string) {
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
    return this.api.post('add_subscription', JSON.stringify(sub_info), { headers })
      .then(response => response)
      .catch(error => {
        throw new Error(error);
      });
  }
}

// Example usage
const apiInstance = new Api();
const subscriptionProvider = new SubscriptionProvider(apiInstance);