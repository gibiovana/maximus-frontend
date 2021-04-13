import { LOAD_STATUS, SAVE_STATUS, DELETE_STATUS, DeviceState } from '../types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: DeviceState = {
  loadingStatus: LOAD_STATUS.NONE,
  savingStatus: SAVE_STATUS.NONE,
  deletingStatus: DELETE_STATUS.NONE,
  devicesList: [],
  deviceData: null,
};

const setLoadingDevice = (state: DeviceState): DeviceState => {
  return {
    ...state,
    loadingStatus: LOAD_STATUS.LOADING,
    loadingError: null,
  };
};
const setLoadingDeviceFail = (state: DeviceState, action: PayloadAction<any>): DeviceState => {
  return {
    ...state,
    loadingStatus: LOAD_STATUS.ERROR,
    loadingError: action.payload,
  };
};
const setLoadingDeviceSuccess = (state: DeviceState, action: PayloadAction<any>): DeviceState => {
  return {
    ...state,
    loadingStatus: LOAD_STATUS.SUCCESS,
    loadingError: null,
  };
};
const setSavingDevice = (state: DeviceState): DeviceState => {
  return {
    ...state,
    savingStatus: SAVE_STATUS.SAVING,
    savingError: null,
  };
};
const setSavingDeviceFail = (state: DeviceState, action: PayloadAction<any>): DeviceState => {
  return {
    ...state,
    savingStatus: SAVE_STATUS.ERROR,
    savingError: action.payload,
  };
};
const setSavingDeviceSuccess = (state: DeviceState, action: PayloadAction<any>): DeviceState => {
  return {
    ...state,
    savingStatus: SAVE_STATUS.SUCCESS,
    savingError: null,
  };
};


export const deviceSlice = createSlice({
  initialState,
  name: 'device',
  reducers: {
    setLoadingDevice,
    setLoadingDeviceSuccess,
    setLoadingDeviceFail,
    setSavingDevice,
    setSavingDeviceSuccess,
    setSavingDeviceFail,
  },
});
export default deviceSlice.reducer;
