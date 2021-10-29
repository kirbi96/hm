import axios, {AxiosError} from 'axios';

import {appConfig} from '../../appConfig';
import infoAPI from './info';

export interface ApiResponse<T> {
  status: number;
  data: T;
  message: string;
}

axios.interceptors.request.use(
  async config => {
    return {
      ...config,
      baseURL: appConfig.apiUrl,
      headers: {'Content-Type': 'application/json', ...config.headers},
    };
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  async response => {
    return response;
  },
  async (error: AxiosError) => {
    if (__DEV__) {
      console.log('ResponseError', error.message);
      console.log('ResponseErrorData', error.response?.data);
    }

    switch (error.response?.status) {
      case 401: {
        // console.log('Ошибка - 401');
        // stores.authStore.clearToken();

        throw error;
      }
      case 400: {
        // console.log('Ошибка - 400');
        throw error;
      }
      default: {
        // console.log('Ошибка на сервере');
        throw error;
      }
    }
  },
);

class APIService {
  info = infoAPI;
}

const API = new APIService();
export default API;
