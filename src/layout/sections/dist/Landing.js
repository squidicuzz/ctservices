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
var image_1 = require("next/image");
var react_1 = require("react");
var scripts_1 = require("@/layout/components/scripts");
var Landing = /** @class */ (function (_super) {
    __extends(Landing, _super);
    function Landing() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    Landing.prototype.render = function () {
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("section", { id: "particles-js" },
                react_1["default"].createElement(scripts_1["default"], null)),
            react_1["default"].createElement("section", { id: "home", className: "landing-container", "data-color": "rgb(44, 104, 208)" },
                react_1["default"].createElement(image_1["default"], { priority: true, className: "back-land-pic", alt: 'front-logo', src: "/images/back-65.webp", width: "3620", height: "1671" }),
                react_1["default"].createElement("div", { className: "to-width to-height to-center home-specs" },
                    react_1["default"].createElement("div", { "data-aos": "fade-up", "data-aos-duration": "1500", "data-aos-anchor-placement": "bottom-bottom", className: 'home-welcome-border' },
                        react_1["default"].createElement("div", { className: 'home-welcome-message' },
                            react_1["default"].createElement("div", { className: 'text-motion' }, " \u2756 "),
                            "Welcome to",
                            react_1["default"].createElement("div", { className: 'color-effect' }, "CRYPTECH SERVICES. ")))),
                react_1["default"].createElement(image_1["default"], { priority: true, className: "front-land-pic reflect-v2", alt: 'front-logo', src: "/images/frontsss.webp", width: "3620", height: "1671" }),
                react_1["default"].createElement(image_1["default"], { priority: true, id: "secondary-front-bg", className: "mids-land-pic to-glow", alt: 'front-logo', src: "/images/moon-1.webp", width: "3620", height: "1671" }),
                react_1["default"].createElement(image_1["default"], { priority: true, id: "tertiary-front-bg", className: "mids-land-pic to-ser", alt: 'front-logo', src: "/images/bgs.webp", width: "3620", height: "1671" }),
                react_1["default"].createElement(scripts_1["default"], null))));
    };
    ;
    return Landing;
}(react_1.Component));
exports["default"] = Landing;
