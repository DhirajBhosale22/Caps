// DistributionlistProvider.tsx
import axios from 'axios';
import { Api } from '../api/api';

export class DistributionlistProvider {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  // Helper method to set headers
  private getHeaders() {
    return {
      'Content-Type': 'application/json',
    };
  }

  // Method to handle distribution
  distribution(userInfo: any) {
    return this.api.post('distribution_list', JSON.stringify(userInfo), {
      headers: this.getHeaders(),
      timeout: 10000, // Set timeout for the request
    });
  }

  // Method to get group information
  group_info(userInfo: any) {
    return this.api.post('group_info', JSON.stringify(userInfo), {
      headers: this.getHeaders(),
    });
  }

  // Method to delete group contact
  delete_group_contact(distri_delete_info: any) {
    return this.api.post('delete_group_contact', JSON.stringify(distri_delete_info), {
      headers: this.getHeaders(),
    });
  }

  // Method to share group case
  shareGroup_case(case_info: any) {
    return this.api.post('shareGroup_case', JSON.stringify(case_info), {
      headers: this.getHeaders(),
    });
  }

  // Method to edit distribution list
  edit_list(edit_contact: any) {
    return this.api.post('edit_distribution_list', JSON.stringify(edit_contact), {
      headers: this.getHeaders(),
    });
  }
}
