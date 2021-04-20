import { Diagnosis } from "../../../integration/BackendInterfaces";

export interface PatientData {
    patientId: any,
    name: string,
    username: string,
    password: string,
    prontuary: string,
    pathologicalCondition: string,
    patientHeight: string,
    patientWeight: string,
    birthdate: any,
    institution: Institution;
    doctorsAssigned: Doctor[];
}

export interface DeviceData {
    deviceId: any,
    model: string,
    operatingSystem: string;
    owner: PatientData | undefined;
}

export interface Institution {
    institutionId: any,
    institutionName: string,
    cnes: string,
    doctors: Doctor[],
}

export interface Doctor{
    doctorId: number,
    doctorName: string,
    doctorEmail: string,
    doctorCRM: string,
    password: string,
    patients: PatientData[],
    institution: Institution,
    diagnosis: Diagnosis[],
}

export const initialInstitutionData: Institution = {
    institutionId: null,
    institutionName: '',
    cnes: '',
    doctors: [],
}

export const initialPatientData: PatientData = {
    patientId: null,
    name: '',
    username: '',
    password: '',
    prontuary: '',
    pathologicalCondition: '',
    patientHeight: '',
    patientWeight: '',
    birthdate: +new Date(),
    institution: initialInstitutionData,
    doctorsAssigned: []
}

export const initialDeviceData: DeviceData = {
    deviceId: null,
    model: '',
    operatingSystem: '',
    owner: initialPatientData
}

export const buildPatient = (patientData: PatientData) => {
    return {
        patientId: patientData.patientId ? patientData.patientId : null,
        name: patientData.name,
        username: patientData.username,
        password: patientData.password,
        prontuary: patientData.prontuary,
        pathologicalCondition: patientData.pathologicalCondition,
        patientHeight: patientData.patientHeight,
        patientWeight: patientData.patientWeight,
        birthdate: patientData.birthdate,
        doctorsAssigned: patientData.doctorsAssigned,
        institution: patientData.institution
    }
}