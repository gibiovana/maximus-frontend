"use strict";
exports.__esModule = true;
var BackendAPI_1 = require("./BackendAPI");
exports["default"] = {
    getInstitutions: function () {
        return BackendAPI_1.api.get('/institutions');
    },
    registerInstitution: function (userData) {
        return BackendAPI_1.api.post('/institution', userData);
    }
};
