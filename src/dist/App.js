"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var SignInPage_1 = require("./screens/Login/SignInPage");
var SignUpPage_1 = require("./screens/Register/SignUpPage");
function App() {
    return (React.createElement(React.Fragment, null,
        React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { path: "/register", component: SignUpPage_1["default"] }),
                React.createElement(react_router_dom_1.Route, { path: "/", component: SignInPage_1["default"] })))));
}
exports["default"] = App;
