"use strict";
exports.__esModule = true;
exports.createDoctor = exports.loadDoctor = exports.loadDoctors = void 0;
var DoctorService_1 = require("../../integration/DoctorService");
var doctorReducers_1 = require("./doctorReducers");
var _a = doctorReducers_1.doctorSlice.actions, setLoadingDoctor = _a.setLoadingDoctor, setLoadingDoctorSuccess = _a.setLoadingDoctorSuccess, setLoadingDoctorFail = _a.setLoadingDoctorFail, setSavingDoctor = _a.setSavingDoctor, setSavingDoctorSuccess = _a.setSavingDoctorSuccess, setSavingDoctorFail = _a.setSavingDoctorFail;
exports.loadDoctors = function () {
    return function (dispatch) {
        dispatch(setLoadingDoctor());
        DoctorService_1["default"]
            .getDoctors()
            .then(function (result) {
            dispatch(setLoadingDoctorSuccess(result.data));
        })["catch"](function (error) {
            dispatch(setLoadingDoctorFail(error));
        });
    };
};
exports.loadDoctor = function () {
    return function (dispatch) {
        dispatch(setLoadingDoctor());
        DoctorService_1["default"]
            .getPersonalData()
            .then(function (result) {
            dispatch(setLoadingDoctorSuccess(result.data));
        })["catch"](function (error) {
            dispatch(setLoadingDoctorFail(error));
        });
    };
};
exports.createDoctor = function (userData) {
    return function (dispatch) {
        dispatch(setSavingDoctor());
        DoctorService_1["default"]
            .registerDoctor(userData)
            .then(function (result) {
            dispatch(setSavingDoctorSuccess(result.data));
        })["catch"](function (error) {
            dispatch(setSavingDoctorFail(error));
        });
    };
};
