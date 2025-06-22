import Axios from 'axios';
import { Constants } from '../../constants';
import Cookies from 'js-cookie';
const apiService = Axios.create({
  baseURL: Constants.BACKEND_URL, // Replace with your API base URL
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true, // Để gửi cookie cùng với yêu cầu
  withXSRFToken: true, // Để gửi token CSRF cùng với yêu cầu
  timeout: Constants.API_TIMEOUT,
});

export const getAuthToken = () => {
  const accessToken = Cookies.get('access_token') || null;
  return accessToken;
};

export const setAuthCookies = (name: string, token: string, expires: number) => {
  if (token) {
    Cookies.set(name, token, { expires: expires || 7 });
  } else {
    Cookies.remove(name);
  }
};

apiService.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
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
