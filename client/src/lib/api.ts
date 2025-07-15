import { config } from './config';

export const api = {
  baseURL: config.apiBaseUrl,
  
  async get(endpoint: string) {
    const response = await fetch(`${this.baseURL}${endpoint}`);
    return response.json();
  },
  
  async post(endpoint: string, data: any) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}; 