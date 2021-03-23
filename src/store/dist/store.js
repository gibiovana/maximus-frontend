"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var doctorReducers_1 = require("./doctor/doctorReducers");
var redux_oidc_1 = require("redux-oidc");
exports.store = toolkit_1.configureStore({
    reducer: {
        doctor: doctorReducers_1["default"],
        auth: redux_oidc_1.reducer,
        user: userReducers
    },
    middleware: toolkit_1.getDefaultMiddleware({
        serializableCheck: false
    })
});
