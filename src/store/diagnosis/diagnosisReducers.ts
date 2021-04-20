import { LOAD_STATUS, SAVE_STATUS, DELETE_STATUS, DiagnosisState } from '../types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: DiagnosisState = {
  loadingStatus: LOAD_STATUS.NONE,
  savingStatus: SAVE_STATUS.NONE,
  deletingStatus: DELETE_STATUS.NONE,
  diagnosisList: [],
  diagnosisData: null,
};

const setLoadingDiagnosis = (state: DiagnosisState): DiagnosisState => {
  return {
    ...state,
    loadingStatus: LOAD_STATUS.LOADING,
    loadingError: null,
  };
};
const setLoadingDiagnosisFail = (state: DiagnosisState, action: PayloadAction<any>): DiagnosisState => {
  return {
    ...state,
    loadingStatus: LOAD_STATUS.ERROR,
    loadingError: action.payload,
  };
};
const setLoadingDiagnosisSuccess = (state: DiagnosisState, action: PayloadAction<any>): DiagnosisState => {
  return {
    ...state,
    loadingStatus: LOAD_STATUS.SUCCESS,
    loadingError: null,
  };
};
const setSavingDiagnosis = (state: DiagnosisState): DiagnosisState => {
  return {
    ...state,
    savingStatus: SAVE_STATUS.SAVING,
    savingError: null,
  };
};
const setSavingDiagnosisFail = (state: DiagnosisState, action: PayloadAction<any>): DiagnosisState => {
  return {
    ...state,
    savingStatus: SAVE_STATUS.ERROR,
    savingError: action.payload,
  };
};
const setSavingDiagnosisSuccess = (state: DiagnosisState, action: PayloadAction<any>): DiagnosisState => {
  return {
    ...state,
    savingStatus: SAVE_STATUS.SUCCESS,
    savingError: null,
  };
};


export const diagnosisSlice = createSlice({
  initialState,
  name: 'diagnosis',
  reducers: {
    setLoadingDiagnosis,
    setLoadingDiagnosisSuccess,
    setLoadingDiagnosisFail,
    setSavingDiagnosis,
    setSavingDiagnosisSuccess,
    setSavingDiagnosisFail,
  },
});
export default diagnosisSlice.reducer;
