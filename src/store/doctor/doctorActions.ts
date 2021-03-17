import { AxiosResponse } from 'axios';
import { Action, Store } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import apiCalls from '../../integration/DoctorService';
import { doctorSlice } from './doctorReducers';

const {
  setLoadingDoctor,
  setLoadingDoctorSuccess,
  setLoadingDoctorFail,
  setSavingDoctor,
  setSavingDoctorSuccess,
  setSavingDoctorFail,
} = doctorSlice.actions;

export const loadDoctors = () => {
  return (dispatch: ThunkDispatch<Store, void, Action>) => {
    dispatch(setLoadingDoctor());
    apiCalls
      .getDoctors()
      .then((result: AxiosResponse) => {
        dispatch(setLoadingDoctorSuccess(result.data));
      })
      .catch(error => {
        dispatch(setLoadingDoctorFail(error));
      });
  };
};

export const loadDoctor = () => {
  return (dispatch: ThunkDispatch<Store, void, Action>) => {
    dispatch(setLoadingDoctor());
    apiCalls
      .getPersonalData()
      .then((result: AxiosResponse) => {
        dispatch(setLoadingDoctorSuccess(result.data));
      })
      .catch(error => {
        dispatch(setLoadingDoctorFail(error));
      });
  };
};

export const createDoctor = (userData: any) => {
  return (dispatch: ThunkDispatch<Store, void, Action>) => {
    dispatch(setSavingDoctor());
    apiCalls
      .registerDoctor(userData)
      .then((result: AxiosResponse) => {
        dispatch(setSavingDoctorSuccess(result.data));
      })
      .catch(error => {
        dispatch(setSavingDoctorFail(error));
      });
  };
};
