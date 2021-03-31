import { LOAD_STATUS, SAVE_STATUS, DELETE_STATUS, DoctorState } from '../types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: DoctorState = {
  loadingStatus: LOAD_STATUS.NONE,
  savingStatus: SAVE_STATUS.NONE,
  deletingStatus: DELETE_STATUS.NONE,
  doctorsList: [],
  doctorData: null,
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
