import { AxiosResponse } from 'axios';
import { api } from './BackendAPI';
import { Device } from './BackendInterfaces';

export default {
  getDevice: (deviceData: any): Promise<AxiosResponse<void>> => {
    return api.get('/device', deviceData);
  },
  getDevices: (): Promise<AxiosResponse<void>> => {
    return api.get('/device/all');
  },
  registerDevice: (deviceData: any): Promise<AxiosResponse<void>> => api.post('/device', deviceData),
  
  getPersonalData: (): Promise<AxiosResponse<Device>> => {
    return api.get('/device/report');
  },
};