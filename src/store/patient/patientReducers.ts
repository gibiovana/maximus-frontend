import { LOAD_STATUS, SAVE_STATUS, DELETE_STATUS, PatientState } from '../types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Patient } from '../../integration/BackendInterfaces';

const initialState: PatientState = {
  loadingStatus: LOAD_STATUS.NONE,
  savingStatus: SAVE_STATUS.NONE,
  deletingStatus: DELETE_STATUS.NONE,
  patientList: [],
  patientData: null,
  existingPatient: false,
};
const setLoadingPatient = (state: PatientState): PatientState => {
  return {
    ...state,
    loadingStatus: LOAD_STATUS.LOADING,
    loadingError: null,
  };
};
const setLoadingPatientFail = (state: PatientState, action: PayloadAction<any>): PatientState => {
  return {
    ...state,
    loadingStatus: LOAD_STATUS.ERROR,
    loadingError: action.payload,
  };
};
const setLoadingPatientSuccess = (state: PatientState, action: PayloadAction<any>): PatientState => {
  return {
    ...state,
    loadingStatus: LOAD_STATUS.SUCCESS,
    loadingError: null,
    existingPatient: action.payload != null && action.payload.firstAccess, //if we received the user data from the backend it means it exists, or we would have gotten 'null'
  };
};
const setSavingPatient = (state: PatientState): PatientState => {
  return {
    ...state,
    savingStatus: SAVE_STATUS.SAVING,
    savingError: null,
  };
};
const setSavingPatientFail = (state: PatientState, action: PayloadAction<any>): PatientState => {
  return {
    ...state,
    savingStatus: SAVE_STATUS.ERROR,
    savingError: action.payload,
  };
};
const setSavingPatientSuccess = (state: PatientState, action: PayloadAction<any>): PatientState => {
  return {
    ...state,
    savingStatus: SAVE_STATUS.SUCCESS,
    savingError: null,
    existingPatient: action.payload != null && action.payload.firstAccess,
  };
};

const setSelectedPatient = (state: PatientState, action: PayloadAction<Patient | null>) : PatientState => {
  return {
    ...state,
    patientData: action.payload,
  };
};

export const patientSlice = createSlice({
  initialState,
  name: 'patient',
  reducers: {
    setLoadingPatient,
    setLoadingPatientSuccess,
    setLoadingPatientFail,
    setSavingPatient,
    setSavingPatientSuccess,
    setSavingPatientFail,
    setSelectedPatient
  },
});
export default patientSlice.reducer;
