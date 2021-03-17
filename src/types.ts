import {
  Doctor,
  Patient,
  Institution,
  Diagnosis,
  Device,
  CommonErrors
} from './integration/BackendInterfaces';
import { UserState as AuthState } from 'redux-oidc';

export enum LOAD_STATUS {
  NONE,
  LOADING,
  SUCCESS,
  ERROR,
}

export enum SAVE_STATUS {
  NONE,
  SAVING,
  SUCCESS,
  ERROR,
}

export enum DELETE_STATUS {
  NONE,
  SAVING,
  SUCCESS,
  ERROR,
}

export interface LoadedState {
  loadingStatus: LOAD_STATUS;
  loadingError?: CommonErrors | null;
}

export interface SaveState {
  savingStatus: SAVE_STATUS;
  savingError?: CommonErrors | null;
}
export interface DeleteState {
  deletingStatus: DELETE_STATUS;
  deletingError?: CommonErrors | null;
}
export interface DoctorState extends LoadedState, SaveState, DeleteState {
  doctorsList: Doctor[];
}

export interface Store {
  auth: AuthState;
  patient: PatientState;
  doctor: DoctorState;
  institution: InstitutionState;
  diagnosis: DiagnosisState;
  device: DeviceState;
}

export interface PatientState extends LoadedState, SaveState {
  patientList: Patient[];
  patientData: Patient | null;
  existingPatient: boolean;
}

export interface InstitutionState extends LoadedState, SaveState {
  institutionList: Institution[];
  institutionData: Institution | null;
}

export interface DiagnosisState extends LoadedState, SaveState {
  diagnosisList: Diagnosis[];
  diagnosisData: Diagnosis | null;
}

export interface DeviceState extends LoadedState, SaveState {
  devicesList: Device[];
  deviceData: Device | null;
}
