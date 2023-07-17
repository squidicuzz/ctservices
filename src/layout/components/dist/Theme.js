"use strict";
exports.__esModule = true;
var React = require("react");
var IconButton_1 = require("@mui/material/IconButton");
var Box_1 = require("@mui/material/Box");
var styles_1 = require("@mui/material/styles");
var Brightness4_1 = require("@mui/icons-material/Brightness4");
var Brightness7_1 = require("@mui/icons-material/Brightness7");
var ColorModeContext = React.createContext({ toggleColorMode: function () { } });
function MyApp() {
    var theme = styles_1.useTheme();
    var colorMode = React.useContext(ColorModeContext);
    return (React.createElement(Box_1["default"], { sx: {
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            color: 'text.primary',
            borderRadius: 1,
            p: 3
        } },
        theme.palette.mode,
        " mode",
        React.createElement(IconButton_1["default"], { sx: { ml: 1 }, onClick: colorMode.toggleColorMode, color: "inherit" }, theme.palette.mode === 'dark' ? React.createElement(Brightness7_1["default"], null) : React.createElement(Brightness4_1["default"], null))));
}
function ToggleColorMode() {
    var _a = React.useState('light'), mode = _a[0], setMode = _a[1];
    var colorMode = React.useMemo(function () { return ({
        toggleColorMode: function () {
            setMode(function (prevMode) { return (prevMode === 'light' ? 'dark' : 'light'); });
        }
    }); }, []);
    var theme = React.useMemo(function () {
        return styles_1.createTheme({
            palette: {
                mode: mode
            }
        });
    }, [mode]);
    return (React.createElement(ColorModeContext.Provider, { value: colorMode },
        React.createElement(styles_1.ThemeProvider, { theme: theme },
            React.createElement(MyApp, null))));
}
exports["default"] = ToggleColorMode;
