"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("@material-ui/core/styles");
var TextField_1 = require("@material-ui/core/TextField");
var Grid_1 = require("@material-ui/core/Grid");
var Button_1 = require("@material-ui/core/Button");
var FormControlLabel_1 = require("@material-ui/core/FormControlLabel");
var Checkbox_1 = require("@material-ui/core/Checkbox");
var Link_1 = require("@material-ui/core/Link");
var doctorActions = require("../../store/doctor/doctorActions");
var react_hook_form_1 = require("react-hook-form");
var Alert_1 = require("@material-ui/lab/Alert");
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
    var _this = this;
    var classes = useStyles();
    var _a = react_hook_form_1.useForm(), handleSubmit = _a.handleSubmit, errors = _a.errors;
    var _b = react_1.useState(false), submitting = _b[0], setSubmitting = _b[1];
    var _c = react_1.useState([]), serverErrors = _c[0], setServerErrors = _c[1];
    var _d = react_1.useState(""), loginUsername = _d[0], setLoginUsername = _d[1];
    var _e = react_1.useState(""), loginPassword = _e[0], setLoginPassword = _e[1];
    var mapServerErrors = function (serverErrors) {
        serverErrors.map(function (error) { return react_1["default"].createElement(Alert_1["default"], { severity: "error", variant: "filled" }, error); });
    };
    var mapInputErrors = function (inputErrorMessage) {
        react_1["default"].createElement(Alert_1["default"], { severity: "error", variant: "filled" }, inputErrorMessage);
    };
    var onButtonClick = handleSubmit(function (formData) { return __awaiter(_this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setSubmitting(true);
                    setServerErrors([]);
                    return [4 /*yield*/, fetch("/doctor/login/" + loginUsername + "?" + loginPassword, {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                                "Access-Control-Allow-Origin": 'http://127.0.0.1:3000',
                                "Access-Control-Allow-Methods": 'GET',
                                "Access-Control-Allow-Headers": 'Content-Type, Authorization'
                            }
                        })];
                case 1:
                    response = _a.sent();
                    doctorActions.loadDoctor(response);
                    setSubmitting(false);
                    return [2 /*return*/];
            }
        });
    }); });
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: classes.margin },
            serverErrors ? mapServerErrors(serverErrors) : null,
            react_1["default"].createElement(Grid_1["default"], null,
                react_1["default"].createElement(TextField_1["default"], { id: "input-with-icon-grid", label: "E-mail", onChange: function (e) { return setLoginUsername(e.target.value); }, fullWidth: true })),
            errors.doctorEmail ? mapInputErrors(errors.doctorEmail.message) : null),
        react_1["default"].createElement("div", { className: classes.margin },
            react_1["default"].createElement(Grid_1["default"], null,
                react_1["default"].createElement(TextField_1["default"], { id: "input-with-icon-grid", label: "Senha", onChange: function (e) { return setLoginPassword(e.target.value); }, fullWidth: true })),
            errors.password ? mapInputErrors(errors.password.message) : null,
            react_1["default"].createElement(FormControlLabel_1["default"], { control: react_1["default"].createElement(Checkbox_1["default"], { value: "remember", color: "primary" }), label: "Lembrar meu usu\u00E1rio e senha" }),
            react_1["default"].createElement(Button_1["default"], { type: "submit", fullWidth: true, variant: "contained", color: "primary", disabled: submitting, onClick: onButtonClick, className: classes.submit }, "Entrar"),
            react_1["default"].createElement(Grid_1["default"], { container: true },
                react_1["default"].createElement(Grid_1["default"], { item: true, xs: true },
                    react_1["default"].createElement(Link_1["default"], { href: "#", variant: "body2" }, "Esqueceu sua senha?")),
                react_1["default"].createElement(Grid_1["default"], { item: true },
                    react_1["default"].createElement(Link_1["default"], { href: "/register", variant: "body2" }, "Não tem uma conta? Cadastre-se"))))));
}
exports["default"] = Login;
