"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CssBaseline_1 = require("@material-ui/core/CssBaseline");
var Link_1 = require("@material-ui/core/Link");
var Paper_1 = require("@material-ui/core/Paper");
var Box_1 = require("@material-ui/core/Box");
var Grid_1 = require("@material-ui/core/Grid");
var Typography_1 = require("@material-ui/core/Typography");
var styles_1 = require("@material-ui/core/styles");
var register_jpg_1 = require("../../assets/register.jpg");
var logo_png_1 = require("../../assets/logo.png");
var core_1 = require("@material-ui/core");
var RegisterTabs_1 = require("./RegisterTabs");
function Copyright() {
    return (react_1["default"].createElement(Typography_1["default"], { variant: "body2", color: "textSecondary", align: "center" },
        'Copyright © ',
        react_1["default"].createElement(Link_1["default"], { color: "inherit", href: "https://material-ui.com/" }, "Maximus"),
        ' ',
        new Date().getFullYear(),
        '.'));
}
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        height: '100vh'
    },
    image: {
        backgroundImage: "url(" + register_jpg_1["default"] + ")",
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        width: theme.spacing(7),
        height: theme.spacing(7)
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
    login: {
        backgroundColor: theme.palette.grey[50]
    }
}); });
function SignInSide() {
    var classes = useStyles();
    return (react_1["default"].createElement(Grid_1["default"], { container: true, component: "main", className: classes.root },
        react_1["default"].createElement(CssBaseline_1["default"], null),
        react_1["default"].createElement(Grid_1["default"], { item: true, xs: false, sm: 4, md: 7, className: classes.image }),
        react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12, sm: 8, md: 5, component: Paper_1["default"], elevation: 6, square: true, className: classes.login },
            react_1["default"].createElement("div", { className: classes.paper },
                react_1["default"].createElement(core_1.Avatar, { className: classes.avatar, src: logo_png_1["default"] }),
                react_1["default"].createElement(Typography_1["default"], { component: "h1", variant: "h5" }, "MAXIMUS"),
                react_1["default"].createElement("form", { className: classes.form, noValidate: true },
                    react_1["default"].createElement(RegisterTabs_1["default"], null),
                    react_1["default"].createElement(Box_1["default"], { mt: 5 },
                        react_1["default"].createElement(Copyright, null)))))));
}
exports["default"] = SignInSide;
