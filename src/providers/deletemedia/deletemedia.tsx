import { Api } from "../api/api";


class DeletemediaProvider {
  api: Api;

  constructor() {
    this.api = new Api(); // Initialize the Api instance
  }

  // Method to delete media
  async deletemedia(deletemedia: any) {
    try {
      const headers = {
        'Content-Type': 'application/json',
      };

      // Make a POST request using the Api instance
      const response = await this.api.post(
        'delete_case_attachment',
        deletemedia, // Pass the object directly; no need to stringify manually
        { headers, timeout: 10000 } // Custom headers and timeout
      );

      return response.data; // Return the response data
    } catch (error: any) {
      console.error('Error deleting media:', error?.message || error);
      throw error; // Re-throw error to handle it in the calling code
    }
  }
}

export default DeletemediaProvider;
