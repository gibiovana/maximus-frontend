"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.patientSlice = void 0;
var types_1 = require("../types");
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    loadingStatus: types_1.LOAD_STATUS.NONE,
    savingStatus: types_1.SAVE_STATUS.NONE,
    deletingStatus: types_1.DELETE_STATUS.NONE,
    patientList: [],
    patientData: null,
    existingPatient: false
};
var setLoadingPatient = function (state) {
    return __assign(__assign({}, state), { loadingStatus: types_1.LOAD_STATUS.LOADING, loadingError: null });
};
var setLoadingPatientFail = function (state, action) {
    return __assign(__assign({}, state), { loadingStatus: types_1.LOAD_STATUS.ERROR, loadingError: action.payload });
};
var setLoadingPatientSuccess = function (state, action) {
    return __assign(__assign({}, state), { loadingStatus: types_1.LOAD_STATUS.SUCCESS, loadingError: null, existingPatient: action.payload != null && action.payload.firstAccess });
};
var setSavingPatient = function (state) {
    return __assign(__assign({}, state), { savingStatus: types_1.SAVE_STATUS.SAVING, savingError: null });
};
var setSavingPatientFail = function (state, action) {
    return __assign(__assign({}, state), { savingStatus: types_1.SAVE_STATUS.ERROR, savingError: action.payload });
};
var setSavingPatientSuccess = function (state, action) {
    return __assign(__assign({}, state), { savingStatus: types_1.SAVE_STATUS.SUCCESS, savingError: null, existingPatient: action.payload != null && action.payload.firstAccess });
};
exports.patientSlice = toolkit_1.createSlice({
    initialState: initialState,
    name: 'patient',
    reducers: {
        setLoadingPatient: setLoadingPatient,
        setLoadingPatientSuccess: setLoadingPatientSuccess,
        setLoadingPatientFail: setLoadingPatientFail,
        setSavingPatient: setSavingPatient,
        setSavingPatientSuccess: setSavingPatientSuccess,
        setSavingPatientFail: setSavingPatientFail
    }
});
exports["default"] = exports.patientSlice.reducer;
