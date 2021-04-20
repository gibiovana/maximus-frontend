export interface Doctor {
  doctorId: number,
  doctorName: string,
  doctorEmail: string,
  doctorCRM: string,
  password: string,
  patients: Patient[],
  institution: Institution | undefined,
  diagnosis: Diagnosis[],
}

export interface Patient {
  patientId: number,
  name: string,
  prontuary: string,
  pathologicalCondition: string,
  patientHeight: string,
  patientWeight: string,
  birthdate: Date,
  institution: Institution,
  diagnosis: Diagnosis[],
  doctorsAssigned: Doctor[],
  device: Device,
  username: string,
  password: string
}

export interface Diagnosis {
  diagnosisId: number,
  diagnosisDate: Date,
  diagnosisDescription: string,
  author: Doctor,
  patient: Patient
}

export interface Institution {
    institutionId: any,
    institutionName: string,
    cnes: string,
    doctors: Doctor[],
}

export interface Device {
  deviceId: number,
  operatingSystem: string,
  model: string,
  owner: Patient
}

export interface CommonErrors {
  status: number;
  message: string;
  error: string;
}