"use strict";
exports.__esModule = true;
var WithRedux_1 = require("./decorators/WithRedux");
var store_1 = require("./store/store");
var redux_1 = require("redux");
var Maximus_1 = require("./screens/Maximus");
var App = function () {
    return React.createElement(Maximus_1["default"], null);
};
var composeApp = redux_1.compose(WithRedux_1.withRedux(store_1.store))(App);
exports["default"] = composeApp;
