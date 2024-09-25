// import { Api } from "../api/api";

// class CountryProvider {
//   private api: Api;

//   constructor(api: Api) {
//     this.api = api;
//   }

//   country() {
//     return this.api.get('countrylist', '');
//   }

//   state(id: any) {
//     return this.api.get('statelist/' + id);
//   }
// }

// export default CountryProvider;

// //convert above code as it is in react native code. I want .tsx file for above code. Use same Api link and api keys also and also use same import files. Convert as it is do not change any function I have same Api file also. I want exact copy. Do not use any angular only use react native. Make exact clone of it
// // path-to-CountryProvider.ts

// // import { Api } from "../api/api";

// // class CountryProvider {
// //   private api: Api;

// //   constructor(api: Api) {
// //     this.api = api;
// //   }

// //   async getCountries(token: string) {
// //     try {
// //       const response = await this.api.post('countries', {}, {
// //         headers: {
// //           'Authorization': `Bearer ${token}`
// //         }
// //       });
// //       return response.data;
// //     } catch (error) {
// //       console.error('Error fetching countries:', error.response ? error.response.data : error.message);
// //       throw new Error('Failed to fetch countries.');
// //     }
// //   }
  

// //   async getStates(countryId: string, token: string) {
// //     try {
// //       const response = await this.api.post(`states/${countryId}`, {}, { headers: { 'Authorization': `Bearer ${token}` } });
// //       return response.data;
// //     } catch (error) {
// //       throw new Error('Failed to fetch states.');
// //     }
// //   }
// // }

// // export default CountryProvider;
// import { Api } from "../api/api";

// class CountryProvider {
//   private api: Api;

//   constructor(api: Api) {
//     this.api = api;
//   }

//   async getCountries(token: string) {
//     try {
//       const response = await this.api.post('countries', {}, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching countries:', error.response ? error.response.data : error.message);
//       throw new Error('Failed to fetch countries.');
//     }
//   }

//   async getStates(countryId: string, token: string) {
//     try {
//       const response = await this.api.post(`states/${countryId}`, {}, { headers: { 'Authorization': `Bearer ${token}` } });
//       return response.data;
//     } catch (error) {
//       throw new Error('Failed to fetch states.');
//     }
//   }

//   // Newly added methods
//   async country() {
//     try {
//       const response = await this.api.get('countrylist', '');
//       if (response.data && Array.isArray(response.data)) {
//         return response.data;
//       } else {
//         throw new Error('Invalid response format for country list.');
//       }
//     } catch (error) {
//       console.error('Error fetching country list:', error.response ? error.response.data : error.message);
//       throw new Error('Failed to fetch country list.');
//     }
//   }
  
//   async state(id: any) {
//     try {
//       const response = await this.api.get('statelist/' + id);
//       if (response.data && Array.isArray(response.data)) {
//         return response.data;
//       } else {
//         throw new Error('Invalid response format for state list.');
//       }
//     } catch (error) {
//       console.error('Error fetching state list:', error.response ? error.response.data : error.message);
//       throw new Error('Failed to fetch state list.');
//     }
//   }
  
// }

// export default CountryProvider;

import { Api } from "../api/api";

class CountryProvider {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  // Fetch the country list
  async country(): Promise<any> {
    try {
      const response = await this.api.get('countrylist', '');
      return response; // Handle the successful response here
    } catch (error) {
      console.error("Error fetching countries:", error);
      throw new Error("Failed to fetch countries");
    }
  }

  // Fetch the state list based on the country ID
  async state(id: any): Promise<any> {
    try {
      const response = await this.api.get('statelist/' +id);
      return response; // Handle the successful response here
    } catch (error) {
      console.error("Error fetching states:", error);
      throw new Error("Failed to fetch states");
    }
  }
}

export default CountryProvider;
