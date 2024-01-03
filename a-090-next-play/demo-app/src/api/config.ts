import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const onRequest = async (config: InternalAxiosRequestConfig) => {
  return config;
};

const onResponse = (response: AxiosResponse) => {
  return response;
};

const onErrorResponce = async (error: AxiosError) => {
  if (error.status === 401) {
    // TODO
  }

  return Promise.reject(error);
};

const setupInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(onRequest);
  instance.interceptors.response.use(onResponse, onErrorResponce);
  return instance;
};

const CONFIG = {
  // DEFAULT_URL: 'http://localhost:3000/api',
  DEFAULT_URL: 'https://jsonplaceholder.typicode.com',
  TIME_OUT: 3000,
};

export const defaultInstance = setupInterceptors(axios.create({ baseURL: CONFIG.DEFAULT_URL, timeout: CONFIG.TIME_OUT }));

class HttpInstance {
  private static DEFAULT_URL = 'http://localhost:3000/api';
  private static TIME_OUT = 3000;

  static createInstance(baseUrl?: string) {
    return setupInterceptors(axios.create({ baseURL: baseUrl ? baseUrl : HttpInstance.DEFAULT_URL, timeout: HttpInstance.TIME_OUT }));
  }
}

export const httpInstance = HttpInstance.createInstance();
