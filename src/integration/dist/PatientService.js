"use strict";
exports.__esModule = true;
var BackendAPI_1 = require("./BackendAPI");
exports["default"] = {
    getPatient: function () {
        return BackendAPI_1.api.get('/patient');
    },
    getPatientList: function () {
        return BackendAPI_1.api.get('/patients');
    },
    registerPatient: function (userData) { return BackendAPI_1.api.post('/patients', userData); },
    getPersonalData: function () {
        return BackendAPI_1.api.get('/patient/report');
    }
};
