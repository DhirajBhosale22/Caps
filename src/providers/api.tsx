import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
export default class Api {
  url: string = 'http://aggressionmanagement.com/api';

  constructor() {}

  async get(endpoint: string, params?: any, reqOpts?: AxiosRequestConfig): Promise<AxiosResponse> {
    let url = `${this.url}/${endpoint}`;
    if (params) {
      url += '?' + new URLSearchParams(params).toString();
    }
    return await axios.get(url, reqOpts);
  }

  async post(endpoint: string, body: any, reqOpts?: AxiosRequestConfig): Promise<AxiosResponse> {
    return await axios.post(`${this.url}/${endpoint}`, body, reqOpts);
  }

  async put(endpoint: string, body: any, reqOpts?: AxiosRequestConfig): Promise<AxiosResponse> {
    return await axios.put(`${this.url}/${endpoint}`, body, reqOpts);
  }

  async delete(endpoint: string, reqOpts?: AxiosRequestConfig): Promise<AxiosResponse> {
    return await axios.delete(`${this.url}/${endpoint}`, reqOpts);
  }

  async patch(endpoint: string, body: any, reqOpts?: AxiosRequestConfig): Promise<AxiosResponse> {
    return await axios.patch(`${this.url}/${endpoint}`, body, reqOpts);
  }
}
