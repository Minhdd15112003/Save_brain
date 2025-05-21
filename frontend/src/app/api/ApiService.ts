import Axios, { AxiosError } from 'axios';
import { Constants } from '../../constants';
import toast from 'react-hot-toast';

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

export const handeApiError = (error: AxiosError) => {
  const message = error.response?.data || error.message || 'Something went wrong';
  const status = error.response?.status;
  console.log('API error:', error);
  toast.error(message as any, {
    duration: 3000,
    position: 'top-right',
  });
  if (status === 401) {
    // Handle unauthorized error
    toast.error('Unauthorized access. Please log in again.', {
      duration: 3000,
      position: 'top-right',
    });
  }
  throw error;
};

export default apiService;
