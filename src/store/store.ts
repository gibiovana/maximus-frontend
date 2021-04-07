
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import doctorReducers from './doctor/doctorReducers';
import { DoctorState, InstitutionState } from './types';
import { reducer as authReducers, UserState as AuthState, UserState } from 'redux-oidc';
import institutionReducers from './institution/institutionReducers';

export interface Store {
  doctor: DoctorState;
  institution: InstitutionState;
  user: UserState;
  auth: AuthState;
}

export const store = configureStore({
  reducer: {
    doctor: doctorReducers,
    institution: institutionReducers,
    auth: authReducers
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});