import { AxiosResponse } from 'axios';
import { Action, Store } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import apiCalls from './integration/DoctorService';
import { doctorSlice } from './doctorReducers';
import FileDownloader from 'js-file-download';

const {
  setLoadingDoctor,
  setLoadingDoctorSuccess,
  setLoadingDoctorFail,
  setSavingDoctor,
  setSavingDoctorSuccess,
  setSavingDoctorFail,
} = userSlice.actions;

export const loadDoctor = () => {
  return (dispatch: ThunkDispatch<Store, void, Action>) => {
    dispatch(setLoadingDoctor());
    apiCalls
      .getDoctor()
      .then((result: AxiosResponse) => {
        dispatch(setLoadingDoctorSuccess(result.data));
      })
      .catch(error => {
        dispatch(setLoadingDoctorFail(error));
      });
  };
};

export const deleteDoctorData = () => {
  return (dispatch: ThunkDispatch<Store, void, Action>) => {
    dispatch(setLoadingDoctor());
    apiCalls
      .deleteDoctorData()
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

};
