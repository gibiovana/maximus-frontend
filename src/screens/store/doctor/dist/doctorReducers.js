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
exports.doctorSlice = void 0;
var types_1 = require("store/types");
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    loadingStatus: types_1.LOAD_STATUS.NONE,
    savingStatus: types_1.SAVE_STATUS.NONE,
    personalData: null,
    existingDoctor: false
};
var setLoadingDoctor = function (state) {
    return __assign(__assign({}, state), { loadingStatus: types_1.LOAD_STATUS.LOADING, loadingError: null });
};
var setLoadingDoctorFail = function (state, action) {
    return __assign(__assign({}, state), { loadingStatus: types_1.LOAD_STATUS.ERROR, loadingError: action.payload });
};
var setLoadingDoctorSuccess = function (state, action) {
    return __assign(__assign({}, state), { loadingStatus: types_1.LOAD_STATUS.SUCCESS, loadingError: null, existingDoctor: action.payload != null && action.payload.firstAccess });
};
var setSavingDoctor = function (state) {
    return __assign(__assign({}, state), { savingStatus: types_1.SAVE_STATUS.SAVING, savingError: null });
};
var setSavingDoctorFail = function (state, action) {
    return __assign(__assign({}, state), { savingStatus: types_1.SAVE_STATUS.ERROR, savingError: action.payload });
};
var setSavingDoctorSuccess = function (state, action) {
    return __assign(__assign({}, state), { savingStatus: types_1.SAVE_STATUS.SUCCESS, savingError: null, existingDoctor: action.payload != null && action.payload.firstAccess });
};
var setLoadingPersonalDataSuccess = function (state, action) {
    return __assign(__assign({}, state), { personalData: action.payload, loadingStatus: types_1.LOAD_STATUS.SUCCESS, loadingError: null });
};
exports.doctorSlice = toolkit_1.createSlice({
    initialState: initialState,
    name: 'doctor',
    reducers: {
        setLoadingDoctor: setLoadingDoctor,
        setLoadingDoctorSuccess: setLoadingDoctorSuccess,
        setLoadingDoctorFail: setLoadingDoctorFail,
        setSavingDoctor: setSavingDoctor,
        setSavingDoctorSuccess: setSavingDoctorSuccess,
        setSavingDoctorFail: setSavingDoctorFail
    }
});
exports["default"] = exports.doctorSlice.reducer;
