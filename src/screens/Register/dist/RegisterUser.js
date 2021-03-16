"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("@material-ui/core/styles");
var TextField_1 = require("@material-ui/core/TextField");
var Grid_1 = require("@material-ui/core/Grid");
var Button_1 = require("@material-ui/core/Button");
var core_1 = require("@material-ui/core");
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        margin: {
            margin: theme.spacing(1)
        },
        submit: {
            margin: theme.spacing(3, 0, 2)
        }
    });
});
function Login() {
    var classes = useStyles();
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: classes.margin },
            react_1["default"].createElement(Grid_1["default"], null,
                react_1["default"].createElement(TextField_1["default"], { id: "input-with-icon-grid", label: "Nome completo", fullWidth: true }))),
        react_1["default"].createElement("div", { className: classes.margin },
            react_1["default"].createElement(Grid_1["default"], null,
                react_1["default"].createElement(TextField_1["default"], { id: "input-with-icon-grid", label: "CRM", fullWidth: true }))),
        react_1["default"].createElement("div", { className: classes.margin },
            react_1["default"].createElement(Grid_1["default"], null,
                react_1["default"].createElement(TextField_1["default"], { id: "input-with-icon-grid", label: "E-mail institucional", fullWidth: true }))),
        react_1["default"].createElement("div", { className: classes.margin },
            react_1["default"].createElement(Grid_1["default"], null,
                react_1["default"].createElement(TextField_1["default"], { id: "input-with-icon-grid", label: "Senha", fullWidth: true })),
            react_1["default"].createElement(Button_1["default"], { type: "submit", fullWidth: true, variant: "contained", color: "primary", className: classes.submit }, "Cadastrar"),
            react_1["default"].createElement(Grid_1["default"], { item: true },
                react_1["default"].createElement(core_1.Link, { href: "/", variant: "body2" }, "Já possui uma conta? Efetue login")))));
}
exports["default"] = Login;
