
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import doctorReducers from './doctor/doctorReducers';
import { DoctorState, InstitutionState, PatientState } from './types';
import { reducer as authReducers, UserState as AuthState, UserState } from 'redux-oidc';
import institutionReducers from './institution/institutionReducers';
import patientReducers from './patient/patientReducers';

export interface Store {
  doctor: DoctorState;
  institution: InstitutionState;
  patient: PatientState;
  user: UserState;
  auth: AuthState;
}

export const store = configureStore({
  reducer: {
    doctor: doctorReducers,
    institution: institutionReducers,
    patient: patientReducers,
    auth: authReducers
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});