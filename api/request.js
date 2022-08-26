import axios from 'axios';
import { getFromLocalStorage } from '@/utils/functions';

export const requestWithJwt = axios.create({
  baseURL: process.env.API_URL || process.env.apiUrl,
  timeout: 10000,
  withCredentials: false,
});

export const requestWithoutJwt = axios.create({
  baseURL: process.env.API_URL || process.env.apiUrl,
  timeout: 10000,
  withCredentials: false,
});

requestWithJwt.interceptors.request.use(async (config) => {
  const personalInfo = getFromLocalStorage('personal-info');

  return {
    ...config,
    headers: {
      Authorization: `Bearer ${personalInfo?.tokens?.access.token || ''}`,
      ...config.headers,
    },
  };
});

requestWithJwt.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (!error.response || !error.response?.data) {
      return Promise.reject({
        code: 'Unknown',
        errors: {
          code: 'Unknown',
          message: 'Server error',
          status: 500,
        },
        message: 'Server error',
      });
    }
    return Promise.reject({
      ...error.response?.data,
    });
  },
);

requestWithoutJwt.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject({
      ...error.response?.data,
    });
  },
);
