import { config } from './config';

export interface ConsultationRequest {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  company?: string;
  inquiry_type: string;
  message: string;
  newsletter?: boolean;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}

export const api = {
  baseURL: config.apiBaseUrl,

  async get(endpoint: string): Promise<any> {
    try {
      const response = await fetch(`${api.baseURL}${endpoint}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('API GET Error:', error);
      throw error;
    }
  },

  async post(endpoint: string, data: any): Promise<ApiResponse> {
    try {
      const response = await fetch(`${api.baseURL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || `HTTP error! status: ${response.status}`);
      }
      
      return result;
    } catch (error) {
      console.error('API POST Error:', error);
      throw error;
    }
  },

  // Consultation Request specific methods
  consultations: {
    async create(data: ConsultationRequest): Promise<ApiResponse> {
      return api.post('/api/consultations/', data);
    },

    async list(params?: { is_processed?: boolean }): Promise<ApiResponse> {
      const queryString = params ? `?${new URLSearchParams(params as any).toString()}` : '';
      return api.get(`/api/consultations/list/${queryString}`);
    },

    async markProcessed(id: number): Promise<ApiResponse> {
      return api.post(`/api/consultations/${id}/process/`, {});
    }
  },

  // Product methods
  products: {
    async list(): Promise<any[]> {
      return api.get('/api/products/');
    }
  }
};