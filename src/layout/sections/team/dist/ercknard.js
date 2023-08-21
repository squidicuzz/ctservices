"use client";
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var ContactPageOutlined_1 = require("@mui/icons-material/ContactPageOutlined");
var AlternateEmailOutlined_1 = require("@mui/icons-material/AlternateEmailOutlined");
var Ercknard = /** @class */ (function (_super) {
    __extends(Ercknard, _super);
    function Ercknard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    Ercknard.prototype.render = function () {
        return (react_1["default"].createElement("div", { "data-aos": "fade-down", "data-aos-duration": "1500", "data-aos-anchor-placement": "bottom-bottom", className: "contacts-container" },
            react_1["default"].createElement(image_1["default"], { className: "contact-mug", alt: "front-logo", src: "/images/ercknard.webp", width: "512", height: "512" }),
            react_1["default"].createElement("div", { className: "details-bg" },
                react_1["default"].createElement("div", { className: "contact-name valor-name" }, " Ercknard "),
                react_1["default"].createElement("div", { className: "contact-description" },
                    react_1["default"].createElement("ul", null,
                        react_1["default"].createElement("li", { className: "valor-list" }, " Web Designer"),
                        react_1["default"].createElement("li", { className: "valor-list" }, " Graphic Designer"),
                        react_1["default"].createElement("li", { className: "valor-list" }, " Developer"))),
                react_1["default"].createElement("div", { className: "to-flex to-gap" },
                    react_1["default"].createElement("a", { className: "contact-button valor", href: "https://discord.com/users/615741889366458369", target: "_blank" },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("button", { type: "button", className: "home-button-txt" },
                                react_1["default"].createElement(ContactPageOutlined_1["default"], null),
                                " Discord"))),
                    react_1["default"].createElement("a", { className: "contact-button valor", href: "mailto:ercknard@cryptech.services", target: "_blank" },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("button", { type: "button", className: "home-button-txt" },
                                react_1["default"].createElement(AlternateEmailOutlined_1["default"], null),
                                " Email")))))));
    };
    return Ercknard;
}(react_1.Component));
exports["default"] = Ercknard;
