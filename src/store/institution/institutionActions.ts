import { AxiosResponse } from 'axios';
import { Action, Store } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import apiCalls from '../../integration/InstitutionService';
import { institutionSlice } from './institutionReducers';

const {
  setLoadingInstitution,
  setLoadingInstitutionSuccess,
  setLoadingInstitutionFail,
  setSavingInstitution,
  setSavingInstitutionSuccess,
  setSavingInstitutionFail,
} = institutionSlice.actions;

export const loadInstitutions = () => {
  return (dispatch: ThunkDispatch<Store, void, Action>) => {
    dispatch(setLoadingInstitution());
    apiCalls
      .getInstitutions()
      .then((result: AxiosResponse) => {
        dispatch(setLoadingInstitutionSuccess(result.data));
      })
      .catch(error => {
        dispatch(setLoadingInstitutionFail(error));
      });
  };
};

export const loadInstitution = (userData: Response) => {
  return (dispatch: ThunkDispatch<Store, void, Action>) => {
    dispatch(setLoadingInstitution());
    apiCalls
      .getInstitution(userData)
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