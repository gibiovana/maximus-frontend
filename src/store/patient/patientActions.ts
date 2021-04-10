import { AxiosResponse } from 'axios';
import { Action, Store } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import apiCalls from '../../integration/PatientService';
import { patientSlice } from './patientReducers';

const {
  setLoadingPatient,
  setLoadingPatientSuccess,
  setLoadingPatientFail,
  setSavingPatient,
  setSavingPatientSuccess,
  setSavingPatientFail,
} = patientSlice.actions;

export const loadPatient = (userData: Response) => {
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