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
var Services = /** @class */ (function (_super) {
    __extends(Services, _super);
    function Services() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    Services.prototype.render = function () {
        return (react_1["default"].createElement("section", { className: 'support-container', id: "services" },
            react_1["default"].createElement("div", { className: "to-width to-height to-center to-flex-column" },
                react_1["default"].createElement("div", { className: 'to-left' },
                    react_1["default"].createElement("div", { className: 'text-motion section-title-logo to-quinary' }, " \u2756 "),
                    react_1["default"].createElement("div", { className: 'text-motion section-title to-quinary' }, " SECURITY SERVICES "),
                    react_1["default"].createElement("div", { className: 'section-desc' },
                        " For the ",
                        react_1["default"].createElement("span", { className: 'text-motion to-quinary to-bold' }, "SECURITY"),
                        " services we can offer: "))),
            react_1["default"].createElement(image_1["default"], { className: "sales-land-pic reflect", alt: 'front-logo', src: "/images/sales12.png", width: "3620", height: "1377" })));
    };
    return Services;
}(react_1.Component));
exports["default"] = Services;
