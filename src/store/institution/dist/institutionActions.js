"use strict";
exports.__esModule = true;
exports.createInstitution = exports.loadInstitutions = void 0;
var InstitutionService_1 = require("../../integration/InstitutionService");
var institutionReducers_1 = require("./institutionReducers");
var _a = institutionReducers_1.institutionSlice.actions, setLoadingInstitution = _a.setLoadingInstitution, setLoadingInstitutionSuccess = _a.setLoadingInstitutionSuccess, setLoadingInstitutionFail = _a.setLoadingInstitutionFail, setSavingInstitution = _a.setSavingInstitution, setSavingInstitutionSuccess = _a.setSavingInstitutionSuccess, setSavingInstitutionFail = _a.setSavingInstitutionFail;
exports.loadInstitutions = function () {
    return function (dispatch) {
        dispatch(setLoadingInstitution());
        InstitutionService_1["default"]
            .getInstitutions()
            .then(function (result) {
            dispatch(setLoadingInstitutionSuccess(result.data));
        })["catch"](function (error) {
            dispatch(setLoadingInstitutionFail(error));
        });
    };
};
exports.createInstitution = function (userData) {
    return function (dispatch) {
        dispatch(setSavingInstitution());
        InstitutionService_1["default"]
            .registerInstitution(userData)
            .then(function (result) {
            dispatch(setSavingInstitutionSuccess(result.data));
        })["catch"](function (error) {
            dispatch(setSavingInstitutionFail(error));
        });
    };
};
