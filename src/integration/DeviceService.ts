import { AxiosResponse } from 'axios';
import { api } from './BackendAPI';
import { Device } from './BackendInterfaces';

export default {
  getDevice: (): Promise<AxiosResponse<void>> => {
    return api.get('/device');
  },
  getDeviceList: (): Promise<AxiosResponse<void>> => {
    return api.get('/devices');
  },
  registerDevice: (userData: any): Promise<AxiosResponse<void>> => api.post('/device', userData),
  
  getPersonalData: (): Promise<AxiosResponse<Device>> => {
    return api.get('/device/report');
  },
};