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
var Support = /** @class */ (function (_super) {
    __extends(Support, _super);
    function Support() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    Support.prototype.render = function () {
        return (react_1["default"].createElement("section", { className: 'support-container', id: "sales" },
            react_1["default"].createElement("div", { className: "to-width to-height to-center to-flex-column" },
                react_1["default"].createElement("div", { className: 'to-left' },
                    react_1["default"].createElement("div", { className: 'text-motion section-title-logo to-quaternary' }, " \u2756 "),
                    react_1["default"].createElement("div", { className: 'text-motion section-title to-quaternary' }, " CRYPTECH SERVICES "),
                    react_1["default"].createElement("div", { className: 'section-desc' },
                        " For ",
                        react_1["default"].createElement("span", { className: 'we-logo-fourth to-bold' }, "non-SECURITY"),
                        " services we offer: "))),
            react_1["default"].createElement(image_1["default"], { className: "sales-land-pic reflect", alt: 'front-logo', src: "/images/sales11.png", width: "3620", height: "1377" })));
    };
    return Support;
}(react_1.Component));
exports["default"] = Support;
