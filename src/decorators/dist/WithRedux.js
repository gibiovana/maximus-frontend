"use strict";
exports.__esModule = true;
exports.withRedux = void 0;
var react_redux_1 = require("react-redux");
var react_1 = require("react");
exports.withRedux = function (store) { return function (Component) {
    var WrappedComponent = function () { return (react_1["default"].createElement(react_redux_1.Provider, { store: store },
        react_1["default"].createElement(Component, null))); };
    WrappedComponent.displayName = "withRedux";
    return WrappedComponent;
}; };
