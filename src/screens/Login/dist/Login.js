"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("@material-ui/core/styles");
var TextField_1 = require("@material-ui/core/TextField");
var Grid_1 = require("@material-ui/core/Grid");
var Button_1 = require("@material-ui/core/Button");
var FormControlLabel_1 = require("@material-ui/core/FormControlLabel");
var Checkbox_1 = require("@material-ui/core/Checkbox");
var Link_1 = require("@material-ui/core/Link");
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
                react_1["default"].createElement(TextField_1["default"], { id: "input-with-icon-grid", label: "E-mail", fullWidth: true }))),
        react_1["default"].createElement("div", { className: classes.margin },
            react_1["default"].createElement(Grid_1["default"], null,
                react_1["default"].createElement(TextField_1["default"], { id: "input-with-icon-grid", label: "Senha", fullWidth: true })),
            react_1["default"].createElement(FormControlLabel_1["default"], { control: react_1["default"].createElement(Checkbox_1["default"], { value: "remember", color: "primary" }), label: "Lembrar meu usu\u00E1rio e senha" }),
            react_1["default"].createElement(Button_1["default"], { type: "submit", fullWidth: true, variant: "contained", color: "primary", className: classes.submit }, "Entrar"),
            react_1["default"].createElement(Grid_1["default"], { container: true },
                react_1["default"].createElement(Grid_1["default"], { item: true, xs: true },
                    react_1["default"].createElement(Link_1["default"], { href: "#", variant: "body2" }, "Esqueceu sua senha?")),
                react_1["default"].createElement(Grid_1["default"], { item: true },
                    react_1["default"].createElement(Link_1["default"], { href: "/register", variant: "body2" }, "Não tem uma conta? Cadastre-se"))))));
}
exports["default"] = Login;
