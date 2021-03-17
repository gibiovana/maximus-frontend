import { AxiosResponse } from 'axios';
import { Action, Store } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import apiCalls from './integration/InstitutionService';
import { institutionSlice } from './institutionReducers';
import FileDownloader from 'js-file-download';

const {
  setLoadingInstitution,
  setLoadingInstitutionSuccess,
  setLoadingInstitutionFail,
  setSavingInstitution,
  setSavingInstitutionSuccess,
  setSavingInstitutionFail,
} = userSlice.actions;

export const loadInstitution = () => {
  return (dispatch: ThunkDispatch<Store, void, Action>) => {
    dispatch(setLoadingInstitution());
    apiCalls
      .getInstitution()
      .then((result: AxiosResponse) => {
        dispatch(setLoadingInstitutionSuccess(result.data));
      })
      .catch(error => {
        dispatch(setLoadingInstitutionFail(error));
      });
  };
};

export const deleteInstitutionData = () => {
  return (dispatch: ThunkDispatch<Store, void, Action>) => {
    dispatch(setLoadingInstitution());
    apiCalls
      .deleteInstitutionData()
      .then((result: AxiosResponse) => {
        dispatch(setLoadingInstitutionSuccess(result.data));
      })
      .catch(error => {
        dispatch(setLoadingInstitutionFail(error));
      });
  };
};

export const createInstitution = (userData: any) => {
  return (dispatch: ThunkDispatch<Store, void, Action>) => {
    dispatch(setSavingInstitution());
    apiCalls
      .registerInstitution(userData)
      .then((result: AxiosResponse) => {
        dispatch(setSavingInstitutionSuccess(result.data));
      })
      .catch(error => {
        dispatch(setSavingInstitutionFail(error));
      });
  };
};

};
