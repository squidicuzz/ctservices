"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_modal_1 = require("react-modal");
var image_1 = require("next/image");
var CustomModal = function (_a) {
    var isOpen = _a.isOpen, onRequestClose = _a.onRequestClose;
    return (react_1["default"].createElement(react_modal_1["default"], { isOpen: isOpen, onRequestClose: onRequestClose, contentLabel: "Example Modal", className: "modal-metrix" },
        react_1["default"].createElement(image_1["default"], { src: "https://metrix.place/plc/latest.png?v=123456789", alt: "mrx", width: "1100", height: "1100" }),
        react_1["default"].createElement("button", { onClick: onRequestClose }, "Close Modal")));
};
exports["default"] = CustomModal;
