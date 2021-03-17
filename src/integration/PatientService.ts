import { AxiosResponse } from 'axios';
import { api } from './BackendAPI';
import { Patient } from './BackendInterfaces';

export default {
  getPatient: (): Promise<AxiosResponse<void>> => {
    return api.get('/patient');
  },
  getPatientList: (): Promise<AxiosResponse<void>> => {
    return api.get('/patients');
  },
  registerPatient: (userData: any): Promise<AxiosResponse<void>> => api.post('/patients', userData),
  
  getPersonalData: (): Promise<AxiosResponse<Patient>> => {
    return api.get('/patient/report');
  },
};