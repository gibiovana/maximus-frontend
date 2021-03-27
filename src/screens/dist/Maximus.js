"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var SignInPage_1 = require("./Login/SignInPage");
var SignUpPage_1 = require("./Register/SignUpPage");
var react_1 = require("react");
var doctorActions = require("../store/doctor/doctorActions");
var react_redux_1 = require("react-redux");
var Maximus = function (props) {
    var loadDoctors = props.loadDoctors;
    react_1.useEffect(function () { loadDoctors(); }, [loadDoctors]);
    return (React.createElement(React.Fragment, null,
        React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { path: "/register", component: SignUpPage_1["default"] }),
                React.createElement(react_router_dom_1.Route, { path: "/", component: SignInPage_1["default"] })))));
};
var mapDispatchToProps = function (dispatch) {
    return {
        loadDoctors: function () { return dispatch(doctorActions.loadDoctors()); }
    };
};
exports["default"] = react_redux_1.connect(null, mapDispatchToProps)(Maximus);
