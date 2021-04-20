import { AxiosResponse } from 'axios';
import { Action, Store } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import apiCalls from '../../integration/DiagnosisService';
import { diagnosisSlice } from './diagnosisReducers';

const {
  setLoadingDiagnosis,
  setLoadingDiagnosisSuccess,
  setLoadingDiagnosisFail,
  setSavingDiagnosis,
  setSavingDiagnosisSuccess,
  setSavingDiagnosisFail,
} = diagnosisSlice.actions;

export const loadDiagnosiss = () => {
  return (dispatch: ThunkDispatch<Store, void, Action>) => {
    dispatch(setLoadingDiagnosis());
    apiCalls
      .getDiagnosiss()
      .then((result: AxiosResponse) => {
        dispatch(setLoadingDiagnosisSuccess(result.data));
      })
      .catch(error => {
        dispatch(setLoadingDiagnosisFail(error));
      });
  };
};

export const loadDiagnosis = (diagnosisData: Response) => {
  return (dispatch: ThunkDispatch<Store, void, Action>) => {
    dispatch(setLoadingDiagnosis());
    apiCalls
      .getDiagnosis(diagnosisData)
      .then((result: AxiosResponse) => {
        dispatch(setLoadingDiagnosisSuccess(result.data));
      })
      .catch(error => {
        dispatch(setLoadingDiagnosisFail(error));
      });
  };
};

export const createDiagnosis = (diagnosisData: Response) => {
  return (dispatch: ThunkDispatch<Store, void, Action>) => {
    dispatch(setSavingDiagnosis());
    apiCalls
      .registerDiagnosis(diagnosisData)
      .then((result: AxiosResponse) => {
        dispatch(setSavingDiagnosisSuccess(result.data));
      })
      .catch(error => {
        dispatch(setSavingDiagnosisFail(error));
      });
  };
};

export const loadDiagnosisByPatientId = (patientId: number) => {
  return (dispatch: ThunkDispatch<Store, void, Action>) => {
    dispatch(setLoadingDiagnosis());
    apiCalls
      .getDeviceByPatientId(patientId)
      .then((result: AxiosResponse) => {
        dispatch(setLoadingDiagnosisSuccess(result.data));
      })
      .catch(error => {
        dispatch(setLoadingDiagnosisFail(error));
      });
  };
};