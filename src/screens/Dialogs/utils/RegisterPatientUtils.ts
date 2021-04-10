import { Doctor } from "../../../integration/BackendInterfaces";

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
    doctorsAssigned: Doctor[];
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
    doctorsAssigned: []
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
        doctorsAssigned: patientData.doctorsAssigned
    }
}