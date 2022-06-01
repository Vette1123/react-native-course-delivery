import axios from 'axios';

const API_URL = 'http://www.omdbapi.com';
const API_KEY = '3c93bf24';

export const client = axios.create({
  baseURL: API_URL,
  timeout: 30000,
});

client.interceptors.request.use(config => {
  const _config = {
    ...config,
    params: {
      ...config.params,
      apikey: API_KEY,
      type: 'movie',
    },
  };
  return _config;
});
