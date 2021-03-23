"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("@material-ui/core/styles");
var AppBar_1 = require("@material-ui/core/AppBar");
var Tabs_1 = require("@material-ui/core/Tabs");
var Tab_1 = require("@material-ui/core/Tab");
var Typography_1 = require("@material-ui/core/Typography");
var Box_1 = require("@material-ui/core/Box");
var RegisterUser_1 = require("./RegisterUser");
var RegisterInstitution_1 = require("./RegisterInstitution");
function TabPanel(props) {
    var children = props.children, value = props.value, index = props.index, other = __rest(props, ["children", "value", "index"]);
    return (react_1["default"].createElement("div", __assign({ role: "tabpanel", hidden: value !== index, id: "scrollable-auto-tabpanel-" + index, "aria-labelledby": "scrollable-auto-tab-" + index }, other), value === index && (react_1["default"].createElement(Box_1["default"], { p: 3 },
        react_1["default"].createElement(Typography_1["default"], null, children)))));
}
function a11yProps(index) {
    return {
        id: "scrollable-auto-tab-" + index,
        'aria-controls': "scrollable-auto-tabpanel-" + index
    };
}
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.grey[50],
        boxShadow: '0'
    }
}); });
function ScrollableTabsButtonAuto() {
    var classes = useStyles();
    var _a = react_1["default"].useState(0), value = _a[0], setValue = _a[1];
    var handleChange = function (event, newValue) {
        setValue(newValue);
    };
    return (react_1["default"].createElement("div", { className: classes.root },
        react_1["default"].createElement(AppBar_1["default"], { position: "static", elevation: 0, color: 'transparent' },
            react_1["default"].createElement(Tabs_1["default"], { value: value, onChange: handleChange, indicatorColor: "primary", textColor: "primary", scrollButtons: "auto", centered: true },
                react_1["default"].createElement(Tab_1["default"], __assign({ label: "Pediatra" }, a11yProps(0))),
                react_1["default"].createElement(Tab_1["default"], __assign({ label: "Institui\u00E7\u00E3o" }, a11yProps(1))))),
        react_1["default"].createElement(TabPanel, { value: value, index: 0 },
            react_1["default"].createElement(RegisterUser_1["default"], null)),
        react_1["default"].createElement(TabPanel, { value: value, index: 1 },
            react_1["default"].createElement(RegisterInstitution_1["default"], null))));
}
exports["default"] = ScrollableTabsButtonAuto;
