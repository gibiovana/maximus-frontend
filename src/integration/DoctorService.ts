import { AxiosResponse } from 'axios';
import { api } from './BackendAPI';
import { Doctor } from './BackendInterfaces';

export default {
  getDoctors: (): Promise<AxiosResponse<Doctor[]>> => {
    return api.get('/doctor/all');
  },
  registerDoctor: (userData: any): Promise<AxiosResponse<void>> => api.post('/doctor/register', userData),
  
  getPersonalData: (userData: any): Promise<AxiosResponse<Doctor>> => {
    return api.get('/doctor/login/', userData);
  },
};