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
var ExtensionOutlined_1 = require("@mui/icons-material/ExtensionOutlined");
var GitHub_1 = require("@mui/icons-material/GitHub");
var Metrix = /** @class */ (function (_super) {
    __extends(Metrix, _super);
    function Metrix() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    Metrix.prototype.render = function () {
        return (react_1["default"].createElement("section", { id: "metrix", className: 'metrix-container' },
            react_1["default"].createElement("div", { className: "to-width to-center to-column" },
                react_1["default"].createElement("div", { className: 'to-flex to-height to-align' },
                    react_1["default"].createElement("div", { "data-aos": "fade-right", "data-aos-duration": "1500", "data-aos-anchor-placement": "bottom-bottom" },
                        react_1["default"].createElement("div", { className: 'text-motion section-title project-title to-primary' }, " METRIX.PLACE "),
                        react_1["default"].createElement("div", { "data-aos": "fade-right", "data-aos-duration": "1500", "data-aos-anchor-placement": "bottom-bottom", className: 'section-desc' },
                            " metrix.place is a communal grafitti board called a place, which any address can set a single pixel per ",
                            react_1["default"].createElement("a", { href: "https://www.metrixcoin.com/", target: '_blank' },
                                react_1["default"].createElement("span", { className: 'we-logo-first to-bold' }, "Metrix Coin")),
                            " transaction by paying the gas fee for the transaction."),
                        react_1["default"].createElement("div", { className: 'to-flex to-gap-1' },
                            react_1["default"].createElement("a", { className: "project-button to-primary", href: "https://test.metrix.place/", target: '_blank' },
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement("button", { type: "button", className: "home-button-txt" },
                                        react_1["default"].createElement(ExtensionOutlined_1["default"], null),
                                        " ",
                                        "Play!"))),
                            react_1["default"].createElement("a", { className: "project-button to-primary", href: "https://github.com/SeqSEE/metrix.place", target: '_blank' },
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement("button", { type: "button", className: "home-button-txt" },
                                        react_1["default"].createElement(GitHub_1["default"], null),
                                        " ",
                                        "Github"))))),
                    react_1["default"].createElement("div", { className: 'we-do-container' },
                        react_1["default"].createElement(image_1["default"], { className: 'ships skew', "data-aos": "fade", "data-aos-duration": "1500", "data-aos-anchor-placement": "bottom-bottom", alt: 'ships', src: "/images/metrixboard.png", width: "1100", height: "1100" }))),
                react_1["default"].createElement("div", null)),
            react_1["default"].createElement(image_1["default"], { className: "team-land-pic", alt: 'front-logo', src: "/images/metrixbs.png", width: "3620", height: "1670" })));
    };
    return Metrix;
}(react_1.Component));
exports["default"] = Metrix;
