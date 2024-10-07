import axios from 'axios';
const baseURL = '';
function ensureBaseUrl(endpoint) {
  if (endpoint.startsWith('http')) {
    return endpoint;
  }
  return baseURL;
}
const apiClient = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = 'auth-token';
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
    }
    return Promise.reject(error);
  }
);

export const getCall = async (endpoint, params = {}) => {
  try {
    const response = await apiClient.get(ensureBaseUrl(endpoint), { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postCall = async (endpoint, data) => {
  try {
    const response = await apiClient.post(ensureBaseUrl(endpoint), data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const putCall = async (endpoint, data) => {
  try {
    const response = await apiClient.put(ensureBaseUrl(endpoint), data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCall = async (endpoint, params = {}) => {
  try {
    const response = await apiClient.delete(ensureBaseUrl(endpoint), {
      params,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
