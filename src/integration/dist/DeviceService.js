"use strict";
exports.__esModule = true;
var BackendAPI_1 = require("./BackendAPI");
exports["default"] = {
    getDevice: function () {
        return BackendAPI_1.api.get('/device');
    },
    getDeviceList: function () {
        return BackendAPI_1.api.get('/devices');
    },
    registerDevice: function (userData) { return BackendAPI_1.api.post('/device', userData); },
    getPersonalData: function () {
        return BackendAPI_1.api.get('/device/report');
    }
};
