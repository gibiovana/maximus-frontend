import { AxiosResponse } from 'axios';
import { api } from './BackendAPI';
import { Diagnosis } from './BackendInterfaces';

export default {
  getDiagnosis: (diagnosisData: any): Promise<AxiosResponse<void>> => {
    return api.get('/diagnosis', diagnosisData);
  },
  getDiagnosiss: (): Promise<AxiosResponse<void>> => {
    return api.get('/diagnosis/all');
  },
  registerDiagnosis: (diagnosisData: any): Promise<AxiosResponse<void>> => api.post('/diagnosis', diagnosisData),
  
};