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
exports.institutionSlice = void 0;
var types_1 = require("../types");
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    loadingStatus: types_1.LOAD_STATUS.NONE,
    savingStatus: types_1.SAVE_STATUS.NONE,
    deletingStatus: types_1.DELETE_STATUS.NONE,
    institutionList: [],
    institutionData: null
};
var setLoadingInstitution = function (state) {
    return __assign(__assign({}, state), { loadingStatus: types_1.LOAD_STATUS.LOADING, loadingError: null });
};
var setLoadingInstitutionFail = function (state, action) {
    return __assign(__assign({}, state), { loadingStatus: types_1.LOAD_STATUS.ERROR, loadingError: action.payload });
};
var setLoadingInstitutionSuccess = function (state, action) {
    return __assign(__assign({}, state), { loadingStatus: types_1.LOAD_STATUS.SUCCESS, loadingError: null });
};
var setSavingInstitution = function (state) {
    return __assign(__assign({}, state), { savingStatus: types_1.SAVE_STATUS.SAVING, savingError: null });
};
var setSavingInstitutionFail = function (state, action) {
    return __assign(__assign({}, state), { savingStatus: types_1.SAVE_STATUS.ERROR, savingError: action.payload });
};
var setSavingInstitutionSuccess = function (state, action) {
    return __assign(__assign({}, state), { savingStatus: types_1.SAVE_STATUS.SUCCESS, savingError: null });
};
exports.institutionSlice = toolkit_1.createSlice({
    initialState: initialState,
    name: 'institution',
    reducers: {
        setLoadingInstitution: setLoadingInstitution,
        setLoadingInstitutionSuccess: setLoadingInstitutionSuccess,
        setLoadingInstitutionFail: setLoadingInstitutionFail,
        setSavingInstitution: setSavingInstitution,
        setSavingInstitutionSuccess: setSavingInstitutionSuccess,
        setSavingInstitutionFail: setSavingInstitutionFail
    }
});
exports["default"] = exports.institutionSlice.reducer;
