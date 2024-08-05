// src/services/forgotPasswordService.ts
import { Api } from '../api/api';

const api = new Api();

export const forgotPassword = (data: { emailid: string }) => {
  return api.post('forgot_password', data);
};

export const changePassword = (data: { old_password: string; new_password: string }) => {
  return api.post('change_password', data);
};
