import { AxiosResponse } from 'axios';
import { api } from './BackendAPI';
import { Institution } from './BackendInterfaces';

export default {
  getInstitutions: (): Promise<AxiosResponse<void>> => {
    return api.get('/institutions');
  },
  registerInstitution: (userData: any): Promise<AxiosResponse<void>> => 
    api.post('/institution', userData),
};