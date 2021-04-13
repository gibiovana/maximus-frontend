import { AxiosResponse } from 'axios';
import { Action, Store } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import apiCalls from '../../integration/DeviceService';
import { deviceSlice } from './deviceReducers';

const {
  setLoadingDevice,
  setLoadingDeviceSuccess,
  setLoadingDeviceFail,
  setSavingDevice,
  setSavingDeviceSuccess,
  setSavingDeviceFail,
} = deviceSlice.actions;

export const loadDevices = () => {
  return (dispatch: ThunkDispatch<Store, void, Action>) => {
    dispatch(setLoadingDevice());
    apiCalls
      .getDevices()
      .then((result: AxiosResponse) => {
        dispatch(setLoadingDeviceSuccess(result.data));
      })
      .catch(error => {
        dispatch(setLoadingDeviceFail(error));
      });
  };
};

export const loadDevice = (deviceData: Response) => {
  return (dispatch: ThunkDispatch<Store, void, Action>) => {
    dispatch(setLoadingDevice());
    apiCalls
      .getDevice(deviceData)
      .then((result: AxiosResponse) => {
        dispatch(setLoadingDeviceSuccess(result.data));
      })
      .catch(error => {
        dispatch(setLoadingDeviceFail(error));
      });
  };
};

export const createDevice = (deviceData: Response) => {
  return (dispatch: ThunkDispatch<Store, void, Action>) => {
    dispatch(setSavingDevice());
    apiCalls
      .registerDevice(deviceData)
      .then((result: AxiosResponse) => {
        dispatch(setSavingDeviceSuccess(result.data));
      })
      .catch(error => {
        dispatch(setSavingDeviceFail(error));
      });
  };
};
