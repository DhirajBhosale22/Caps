// src/providers/SubscriptionProvider.tsx
import { Api } from "../api/api";

class SubscriptionProvider {
  private api: Api;

  constructor() {
    this.api = new Api();
  }

  // Subscription function
  public async subscription(forgotInfo: any) {
    try {
      const response = await this.api.post<any>('validate_serial_key', JSON.stringify(forgotInfo));
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Get subscription type
  public async subscription_type() {
    try {
      const response = await this.api.get<any>('subscription');
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Add subscription
  public async add_subscription(sub_info: any) {
    try {
      const response = await this.api.post<any>('add_subscription', JSON.stringify(sub_info));
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new SubscriptionProvider();
