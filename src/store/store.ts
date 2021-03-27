
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import doctorReducers from './doctor/doctorReducers';
import { DoctorState } from './types';
import { reducer as authReducers, UserState as AuthState, UserState } from 'redux-oidc';

export interface Store {
  doctor: DoctorState;
  user: UserState;
}

export const store = configureStore({
  reducer: {
    doctor: doctorReducers,
    auth: authReducers
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});