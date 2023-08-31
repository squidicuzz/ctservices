"use strict";
exports.__esModule = true;
var react_1 = require("react");
var MetrixModal_1 = require("../components/MetrixModal");
var GitHub_1 = require("@mui/icons-material/GitHub");
var Modals = function () {
    var _a = react_1.useState(false), modalIsOpen = _a[0], setModalIsOpen = _a[1];
    var openModal = function () {
        setModalIsOpen(true);
    };
    var closeModal = function () {
        setModalIsOpen(false);
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "project-button to-primary", onClick: openModal },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("button", { type: "button", className: "home-button-txt" },
                    react_1["default"].createElement(GitHub_1["default"], null),
                    " Github"))),
        react_1["default"].createElement(MetrixModal_1["default"], { isOpen: modalIsOpen, onRequestClose: closeModal })));
};
exports["default"] = Modals;
