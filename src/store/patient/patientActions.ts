import { AxiosResponse } from 'axios';
import { Action, Store } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import apiCalls from './integration/PatientService';
import { patientSlice } from './patientReducers';
import FileDownloader from 'js-file-download';

const {
  setLoadingPatient,
  setLoadingPatientSuccess,
  setLoadingPatientFail,
  setSavingPatient,
  setSavingPatientSuccess,
  setSavingPatientFail,
} = userSlice.actions;

export const loadPatient = () => {
  return (dispatch: ThunkDispatch<Store, void, Action>) => {
    dispatch(setLoadingPatient());
    apiCalls
      .getPatient()
      .then((result: AxiosResponse) => {
        dispatch(setLoadingPatientSuccess(result.data));
      })
      .catch(error => {
        dispatch(setLoadingPatientFail(error));
      });
  };
};

export const deletePatientData = () => {
  return (dispatch: ThunkDispatch<Store, void, Action>) => {
    dispatch(setLoadingPatient());
    apiCalls
      .deletePatientData()
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

};
