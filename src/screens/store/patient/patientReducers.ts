import { LOAD_STATUS, SAVE_STATUS, PatientState } from 'store/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PersonalData } from 'integration/BackendInterfaces';

const initialState: PatientState = {
  loadingStatus: LOAD_STATUS.NONE,
  savingStatus: SAVE_STATUS.NONE,
  personalData: null,
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

const setLoadingPersonalDataSuccess = (
  state: PatientState,
  action: PayloadAction<PersonalData>
): PatientState => {
  return {
    ...state,
    personalData: action.payload,
    loadingStatus: LOAD_STATUS.SUCCESS,
    loadingError: null,
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
  },
});
export default patientSlice.reducer;
