"use strict";
exports.__esModule = true;
var BackendAPI_1 = require("./BackendAPI");
exports["default"] = {
    getDoctors: function () {
        return BackendAPI_1.api.get('/doctor/all');
    },
    registerDoctor: function (userData) { return BackendAPI_1.api.post('/doctors', userData); },
    getPersonalData: function () {
        return BackendAPI_1.api.get('/doctor/report');
    }
};
