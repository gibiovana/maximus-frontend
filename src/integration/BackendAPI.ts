import axios from 'axios';
import { config } from '../config';

const api = axios.create({ baseURL: config.backendUrl });

api.interceptors.request.use((requestConfig: { headers: { Authorization: any; }; }) => {
  // eslint-disable-next-line no-param-reassign
  return requestConfig;
});

export { api };
