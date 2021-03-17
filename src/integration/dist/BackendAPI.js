"use strict";
exports.__esModule = true;
exports.api = void 0;
var axios_1 = require("axios");
var config_1 = require("../config");
var api = axios_1["default"].create({ baseURL: config_1.config.backendUrl });
exports.api = api;
api.interceptors.request.use(function (requestConfig) {
    // eslint-disable-next-line no-param-reassign
    return requestConfig;
});
