import { AxiosResponse } from 'axios';
import { Action, Store } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Patient } from '../../integration/BackendInterfaces';
import apiCalls from '../../integration/PatientService';
import { patientSlice } from './patientReducers';

const {
  setLoadingPatient,
  setLoadingPatientSuccess,
  setLoadingPatientFail,
  setSavingPatient,
  setSavingPatientSuccess,
  setSavingPatientFail,
  setSelectedPatient,
} = patientSlice.actions;

export const loadPatient = (userData: any) => {
  return (dispatch: ThunkDispatch<Store, void, Action>) => {
    dispatch(setLoadingPatient());
    apiCalls
      .getPatient(userData)
      .then((result: AxiosResponse) => {
        dispatch(setLoadingPatientSuccess(result.data));
      })
      .catch(error => {
        dispatch(setLoadingPatientFail(error));
      });
  };
};

export const setPatient = (patient: Patient | null) => {
  return (dispatch: ThunkDispatch<Store, void, Action>) => {
    dispatch(setSelectedPatient(patient));
  }
}

export const loadPatientById = (patientId: number) => {
  return (dispatch: ThunkDispatch<Store, void, Action>) => {
    dispatch(setLoadingPatient());
    apiCalls
      .getPatientById(patientId)
      .then((result: AxiosResponse) => {
        dispatch(setSelectedPatient(result.data));
      })
      .catch(error => {
        dispatch(setLoadingPatientFail(error));
      });
  };
};


export const loadPatientDetails = (userData: Response) => {
  return (dispatch: ThunkDispatch<Store, void, Action>) => {
    dispatch(setLoadingPatient());
    apiCalls
      .getPatientDetails(userData)
      .then((result: AxiosResponse) => {
        dispatch(setLoadingPatientSuccess(result.data));
      })
      .catch(error => {
        dispatch(setLoadingPatientFail(error));
      });
  };
};

export const loadPatients = () => {
  return (dispatch: ThunkDispatch<Store, void, Action>) => {
    dispatch(setLoadingPatient());
    apiCalls
      .getPatientList()
      .then((result: AxiosResponse) => {
        dispatch(setLoadingPatientSuccess(result.data));
      })
      .catch(error => {
        dispatch(setLoadingPatientFail(error));
      });
  };
};

export const createPatient = (userData: any) => {
  return (dispatch: ThunkDispatch<Store, void, Action>) => {
    dispatch(setSavingPatient());
    apiCalls
      .registerPatient(userData)
      .then((result: AxiosResponse) => {
        dispatch(setSavingPatientSuccess(result.data));
      })
      .catch(error => {
        dispatch(setSavingPatientFail(error));
      });
  };
};