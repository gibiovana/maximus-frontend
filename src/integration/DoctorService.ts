import { AxiosResponse } from 'axios';
import { api } from './BackendAPI';
import { Doctor } from './BackendInterfaces';

export default {
  getDoctors: (): Promise<AxiosResponse<void>> => {
    return api.get('/doctor/all');
  },
  registerDoctor: (userData: any): Promise<AxiosResponse<void>> => api.post('/doctors', userData),
  
  getPersonalData: (): Promise<AxiosResponse<Doctor>> => {
    return api.get('/doctor/report');
  },
};