import { LOAD_STATUS, SAVE_STATUS, DELETE_STATUS, InstitutionState } from '../types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: InstitutionState = {
  loadingStatus: LOAD_STATUS.NONE,
  savingStatus: SAVE_STATUS.NONE,
  deletingStatus: DELETE_STATUS.NONE,
  institutionList: [], 
  institutionData: null
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
