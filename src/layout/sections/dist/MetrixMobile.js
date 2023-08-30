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
var GitHub_1 = require("@mui/icons-material/GitHub");
var Android_1 = require("@mui/icons-material/Android");
var MetrixMobile = /** @class */ (function (_super) {
    __extends(MetrixMobile, _super);
    function MetrixMobile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    MetrixMobile.prototype.render = function () {
        return (react_1["default"].createElement("section", { id: "metrimask", className: "metrix-container", "data-color": "rgb(182, 67, 174)" },
            react_1["default"].createElement("div", { className: "to-width to-center to-column" },
                react_1["default"].createElement("div", { className: "to-flex to-height to-align" },
                    react_1["default"].createElement("div", { "data-aos": "fade-right", "data-aos-duration": "1500", "data-aos-anchor-placement": "bottom-bottom" },
                        react_1["default"].createElement("div", { className: "title-metrix-mobile" },
                            react_1["default"].createElement("div", { className: "text-motion section-title project-title to-primary" },
                                " ",
                                "METRIMASK MOBILE",
                                " ")),
                        react_1["default"].createElement("div", { "data-aos": "fade-right", "data-aos-duration": "1500", "data-aos-anchor-placement": "bottom-bottom", className: "section-desc" },
                            " ",
                            "Metrixcoin Web3 wallet with embedded browser. Use to send/receive MRX and MRC20 based tokens. Interact with Web3 websites that support the",
                            react_1["default"].createElement("a", { href: "https://www.metrixcoin.com/", target: "_blank" },
                                react_1["default"].createElement("span", { className: "we-logo-first to-bold" }, " Metrix chain"),
                                "."),
                            " ",
                            "Use MetriMask to interact with Metrixcoin Web3 apps from your mobile device."),
                        react_1["default"].createElement("div", { className: "to-flex to-gap-1" },
                            react_1["default"].createElement("a", { className: "project-button to-primary", href: "https://play.google.com/store/apps/details?id=com.metrimask_mobile", target: "_blank" },
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement("button", { type: "button", className: "home-button-txt" },
                                        react_1["default"].createElement(Android_1["default"], null),
                                        " Playstore"))),
                            react_1["default"].createElement("a", { className: "project-button to-primary", href: "https://github.com/TheLindaProjectInc/MetriMask-Mobile", target: "_blank" },
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement("button", { type: "button", className: "home-button-txt" },
                                        react_1["default"].createElement(GitHub_1["default"], null),
                                        " Github"))))),
                    react_1["default"].createElement("div", { className: "we-do-container" },
                        react_1["default"].createElement("div", { className: "gallery-1" },
                            react_1["default"].createElement(image_1["default"], { src: "/images/unnamed0.webp", alt: "mrx", width: "810", height: "1440" }),
                            react_1["default"].createElement(image_1["default"], { src: "/images/unnamed1.webp", alt: "mrx", width: "810", height: "1440" }),
                            react_1["default"].createElement(image_1["default"], { src: "/images/unnamed2.webp", alt: "mrx", width: "810", height: "1440" }),
                            react_1["default"].createElement(image_1["default"], { src: "/images/unnamed3.webp", alt: "mrx", width: "810", height: "1440" }),
                            react_1["default"].createElement(image_1["default"], { src: "/images/unnamed4.webp", alt: "mrx", width: "810", height: "1440" }),
                            react_1["default"].createElement(image_1["default"], { src: "/images/unnamed3.webp", alt: "mrx", width: "810", height: "1440" })))),
                react_1["default"].createElement("div", null)),
            react_1["default"].createElement(image_1["default"], { className: "team-land-pic", alt: "front-logo", src: "/images/metrixbs.webp", width: "3620", height: "1670" }),
            react_1["default"].createElement(image_1["default"], { className: "sales-1-land-pic", alt: "front-logo", src: "/images/team3-up.webp", width: "3620", height: "1671" })));
    };
    return MetrixMobile;
}(react_1.Component));
exports["default"] = MetrixMobile;
