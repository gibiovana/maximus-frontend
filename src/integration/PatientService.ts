import { AxiosResponse } from 'axios';
import { api } from './BackendAPI';
import { Patient } from './BackendInterfaces';

export default {
  getPatientList: (): Promise<AxiosResponse<void>> => {
    return api.get('/patient/all');
  },
  registerPatient: (userData: any): Promise<AxiosResponse<void>> => api.post('/patient/register', userData),

  getPatientById: (id: number): Promise<AxiosResponse<Patient>> => {
    return api.get('/patient/' + id)
  },
  
  getPatient: (userData: any): Promise<AxiosResponse<Patient>> => {
    return api.get('/patient/login', userData);
  },

  getPatientDetails: (userId: any): Promise<AxiosResponse<Patient>> => {
    return api.get('/patient/', userId);
  },

  getPatientFromInstitution: (institutionData: any): Promise<AxiosResponse<Patient>> => {
    return api.get('/patient/', institutionData);
  },
};