import { LOAD_STATUS, SAVE_STATUS, InstitutionState } from 'store/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PersonalData } from 'integration/BackendInterfaces';

const initialState: InstitutionState = {
  loadingStatus: LOAD_STATUS.NONE,
  savingStatus: SAVE_STATUS.NONE,
  personalData: null,
  existingInstitution: false,
};
const setLoadingInstitution = (state: InstitutionState): InstitutionState => {
  return {
    ...state,
    loadingStatus: LOAD_STATUS.LOADING,
    loadingError: null,
  };
};
const setLoadingInstitutionFail = (state: InstitutionState, action: PayloadAction<any>): InstitutionState => {
  return {
    ...state,
    loadingStatus: LOAD_STATUS.ERROR,
    loadingError: action.payload,
  };
};
const setLoadingInstitutionSuccess = (state: InstitutionState, action: PayloadAction<any>): InstitutionState => {
  return {
    ...state,
    loadingStatus: LOAD_STATUS.SUCCESS,
    loadingError: null,
    existingInstitution: action.payload != null && action.payload.firstAccess, //if we received the user data from the backend it means it exists, or we would have gotten 'null'
  };
};
const setSavingInstitution = (state: InstitutionState): InstitutionState => {
  return {
    ...state,
    savingStatus: SAVE_STATUS.SAVING,
    savingError: null,
  };
};
const setSavingInstitutionFail = (state: InstitutionState, action: PayloadAction<any>): InstitutionState => {
  return {
    ...state,
    savingStatus: SAVE_STATUS.ERROR,
    savingError: action.payload,
  };
};
const setSavingInstitutionSuccess = (state: InstitutionState, action: PayloadAction<any>): InstitutionState => {
  return {
    ...state,
    savingStatus: SAVE_STATUS.SUCCESS,
    savingError: null,
    existingInstitution: action.payload != null && action.payload.firstAccess,
  };
};

const setLoadingPersonalDataSuccess = (
  state: InstitutionState,
  action: PayloadAction<PersonalData>
): InstitutionState => {
  return {
    ...state,
    personalData: action.payload,
    loadingStatus: LOAD_STATUS.SUCCESS,
    loadingError: null,
  };
};

export const institutionSlice = createSlice({
  initialState,
  name: 'institution',
  reducers: {
    setLoadingInstitution,
    setLoadingInstitutionSuccess,
    setLoadingInstitutionFail,
    setSavingInstitution,
    setSavingInstitutionSuccess,
    setSavingInstitutionFail,
  },
});
export default institutionSlice.reducer;
