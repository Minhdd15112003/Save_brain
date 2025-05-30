import Axios from 'axios';
import { Constants } from '../../constants';

const apiService = Axios.create({
  baseURL: Constants.BACKEND_URL, // Replace with your API base URL
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true, // Để gửi cookie cùng với yêu cầu
  withXSRFToken: true, // Để gửi token CSRF cùng với yêu cầu
  timeout: Constants.API_TIMEOUT,
});

export const setAuthToken = (token: string) => {
  if (token) {
    localStorage.setItem('access_token', token);
  } else {
    localStorage.removeItem('access_token');
  }
};

apiService.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  },
);

export default apiService;
