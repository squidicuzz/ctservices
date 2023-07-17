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
var Landing = /** @class */ (function (_super) {
    __extends(Landing, _super);
    function Landing() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    Landing.prototype.render = function () {
        return (react_1["default"].createElement("section", { className: "landing-container" },
            react_1["default"].createElement("div", { className: "to-width to-height to-center home-specs" },
                react_1["default"].createElement("div", { "data-aos": "fade-right", "data-aos-duration": "1500", "data-aos-anchor-placement": "bottom-bottom", className: 'home-welcome-border' },
                    react_1["default"].createElement("div", { className: 'home-welcome-message' },
                        react_1["default"].createElement("div", { className: 'color-effect' }, " \u2756 "),
                        " Welcome to ",
                        react_1["default"].createElement("div", { className: 'color-effect' }, "Cryptech Services. ")))),
            react_1["default"].createElement(image_1["default"], { className: "front-land-pic", alt: 'front-logo', src: "/images/frontss.png", width: "3620", height: "1671" })));
    };
    ;
    return Landing;
}(react_1.Component));
exports["default"] = Landing;
