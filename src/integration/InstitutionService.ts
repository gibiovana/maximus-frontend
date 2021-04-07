import { AxiosResponse } from 'axios';
import { api } from './BackendAPI';
import { Institution } from './BackendInterfaces';

export default {
  getInstitutions: (): Promise<AxiosResponse<void>> => {
    return api.get('/institution/all');
  },
  getInstitution: (userData: any): Promise<AxiosResponse<Institution>> => {
    return api.get('/institution/login/', userData);
  },
  registerInstitution: (userData: any): Promise<AxiosResponse<void>> => 
    api.post('/institution/register', userData),
};