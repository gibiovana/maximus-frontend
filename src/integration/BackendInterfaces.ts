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
  height: string,
  weight: string,
  birthday: Date,
  institution: Institution,
  diagnosis: Diagnosis[],
  doctorsAssigned: Doctor[],
  device: Device
}

export interface Diagnosis {
  diagnosisId: number,
  date: Date,
  description: string,
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