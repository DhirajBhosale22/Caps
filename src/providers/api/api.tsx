// // src/api/Api.tsx
// import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// export class Api {
//   private axiosInstance: AxiosInstance;
//   private url: string = 'http://aggressionmanagement.com/api';

//   constructor() {
//     this.axiosInstance = axios.create({
//       baseURL: this.url,
//       timeout: 10000, // Set a default timeout
//     });
//   }

//   private buildParams(params: any): string {
//     const urlParams = new URLSearchParams();
//     for (const key in params) {
//       if (params.hasOwnProperty(key)) {
//         urlParams.append(key, params[key]);
//       }
//     }
//     return urlParams.toString();
//   }

//   public get<T>(endpoint: string, params?: any, reqOpts?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
//     const queryString = params ? `?${this.buildParams(params)}` : '';
//     return this.axiosInstance.get<T>(`${endpoint}${queryString}`, reqOpts);
//   }

//   public post<T>(endpoint: string, body: any, reqOpts?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
//     return this.axiosInstance.post<T>(endpoint, body, reqOpts);
//   }

//   public put<T>(endpoint: string, body: any, reqOpts?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
//     return this.axiosInstance.put<T>(endpoint, body, reqOpts);
//   }

//   public delete<T>(endpoint: string, reqOpts?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
//     return this.axiosInstance.delete<T>(endpoint, reqOpts);
//   }

//   public patch<T>(endpoint: string, body: any, reqOpts?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
//     return this.axiosInstance.patch<T>(endpoint, body, reqOpts);
//   }
// }
// src/api/Api.tsx
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class Api {
  private axiosInstance: AxiosInstance;
  private url: string = 'https://aggressionmanagement.com/api';

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.url,
      timeout: 10000, // Set a default timeout
    });

    // Add request interceptor to log requests
    this.axiosInstance.interceptors.request.use((config) => {
      console.log('Request:', config);
      return config;
    });

    // Add response interceptor to log responses
    this.axiosInstance.interceptors.response.use(
      (response) => {
        console.log('Response:', response);
        return response;
      },
      (error) => {
        console.log('Error response:', error.response);
        return Promise.reject(error);
      }
    );
  }

  private buildParams(params: any): string {
    const urlParams = new URLSearchParams();
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        urlParams.append(key, params[key]);
      }
    }
    return urlParams.toString();
  }

  public get<T>(endpoint: string, params?: any, reqOpts?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    const queryString = params ? `?${this.buildParams(params)}` : '';
    return this.axiosInstance.get<T>(`${endpoint}${queryString}`, reqOpts);
  }

  public post<T>(endpoint: string, body: any, reqOpts?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.post<T>(endpoint, body, reqOpts);
  }

  public put<T>(endpoint: string, body: any, reqOpts?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.put<T>(endpoint, body, reqOpts);
  }

  public delete<T>(endpoint: string, reqOpts?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.delete<T>(endpoint, reqOpts);
  }

  public patch<T>(endpoint: string, body: any, reqOpts?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.patch<T>(endpoint, body, reqOpts);
  }
}
