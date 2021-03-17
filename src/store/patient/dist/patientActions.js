"use strict";
exports.__esModule = true;
exports.createPatient = exports.loadPatients = exports.loadPatient = void 0;
var PatientService_1 = require("../../integration/PatientService");
var patientReducers_1 = require("./patientReducers");
var _a = patientReducers_1.patientSlice.actions, setLoadingPatient = _a.setLoadingPatient, setLoadingPatientSuccess = _a.setLoadingPatientSuccess, setLoadingPatientFail = _a.setLoadingPatientFail, setSavingPatient = _a.setSavingPatient, setSavingPatientSuccess = _a.setSavingPatientSuccess, setSavingPatientFail = _a.setSavingPatientFail;
exports.loadPatient = function () {
    return function (dispatch) {
        dispatch(setLoadingPatient());
        PatientService_1["default"]
            .getPatient()
            .then(function (result) {
            dispatch(setLoadingPatientSuccess(result.data));
        })["catch"](function (error) {
            dispatch(setLoadingPatientFail(error));
        });
    };
};
exports.loadPatients = function () {
    return function (dispatch) {
        dispatch(setLoadingPatient());
        PatientService_1["default"]
            .getPatientList()
            .then(function (result) {
            dispatch(setLoadingPatientSuccess(result.data));
        })["catch"](function (error) {
            dispatch(setLoadingPatientFail(error));
        });
    };
};
exports.createPatient = function (userData) {
    return function (dispatch) {
        dispatch(setSavingPatient());
        PatientService_1["default"]
            .registerPatient(userData)
            .then(function (result) {
            dispatch(setSavingPatientSuccess(result.data));
        })["catch"](function (error) {
            dispatch(setSavingPatientFail(error));
        });
    };
};
