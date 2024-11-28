import { getAuthorizationHeaders } from '@/features/auth/lib/storage';
import Axios from 'axios';

export const axios = Axios.create({
  baseURL: 'http://localhost:3001',
  validateStatus: (status) => status >= 200 && status <= 299,
});

axios.interceptors.request.use((config) => {
  const authorizationHeaders = getAuthorizationHeaders() as any;

  if (authorizationHeaders) {
    config.headers = {
      ...config.headers,
      ...authorizationHeaders.headers,
    };
  }

  return config;
});
