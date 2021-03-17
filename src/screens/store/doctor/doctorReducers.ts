import { LOAD_STATUS, SAVE_STATUS, DoctorState } from 'store/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PersonalData } from 'integration/BackendInterfaces';

const initialState: DoctorState = {
  loadingStatus: LOAD_STATUS.NONE,
  savingStatus: SAVE_STATUS.NONE,
  personalData: null,
  existingDoctor: false,
};
const setLoadingDoctor = (state: DoctorState): DoctorState => {
  return {
    ...state,
    loadingStatus: LOAD_STATUS.LOADING,
    loadingError: null,
  };
};
const setLoadingDoctorFail = (state: DoctorState, action: PayloadAction<any>): DoctorState => {
  return {
    ...state,
    loadingStatus: LOAD_STATUS.ERROR,
    loadingError: action.payload,
  };
};
const setLoadingDoctorSuccess = (state: DoctorState, action: PayloadAction<any>): DoctorState => {
  return {
    ...state,
    loadingStatus: LOAD_STATUS.SUCCESS,
    loadingError: null,
    existingDoctor: action.payload != null && action.payload.firstAccess, //if we received the user data from the backend it means it exists, or we would have gotten 'null'
  };
};
const setSavingDoctor = (state: DoctorState): DoctorState => {
  return {
    ...state,
    savingStatus: SAVE_STATUS.SAVING,
    savingError: null,
  };
};
const setSavingDoctorFail = (state: DoctorState, action: PayloadAction<any>): DoctorState => {
  return {
    ...state,
    savingStatus: SAVE_STATUS.ERROR,
    savingError: action.payload,
  };
};
const setSavingDoctorSuccess = (state: DoctorState, action: PayloadAction<any>): DoctorState => {
  return {
    ...state,
    savingStatus: SAVE_STATUS.SUCCESS,
    savingError: null,
    existingDoctor: action.payload != null && action.payload.firstAccess,
  };
};

const setLoadingPersonalDataSuccess = (
  state: DoctorState,
  action: PayloadAction<PersonalData>
): DoctorState => {
  return {
    ...state,
    personalData: action.payload,
    loadingStatus: LOAD_STATUS.SUCCESS,
    loadingError: null,
  };
};

export const doctorSlice = createSlice({
  initialState,
  name: 'doctor',
  reducers: {
    setLoadingDoctor,
    setLoadingDoctorSuccess,
    setLoadingDoctorFail,
    setSavingDoctor,
    setSavingDoctorSuccess,
    setSavingDoctorFail,
  },
});
export default doctorSlice.reducer;
