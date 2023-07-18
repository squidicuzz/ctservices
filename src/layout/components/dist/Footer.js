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
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    Footer.prototype.render = function () {
        return (react_1["default"].createElement("footer", { className: "footer" },
            react_1["default"].createElement("div", { className: "waves" },
                react_1["default"].createElement("div", { className: "wave", id: "wave1" }),
                react_1["default"].createElement("div", { className: "wave", id: "wave2" }),
                react_1["default"].createElement("div", { className: "wave", id: "wave3" }),
                react_1["default"].createElement("div", { className: "wave", id: "wave4" })),
            react_1["default"].createElement("ul", { className: "menu" },
                react_1["default"].createElement("li", { className: "menu__item" },
                    react_1["default"].createElement("a", { className: "menu__link", href: "#home" }, "Home")),
                react_1["default"].createElement("li", { className: "menu__item" },
                    react_1["default"].createElement("a", { className: "menu__link", href: "#sales" }, "Sales")),
                react_1["default"].createElement("li", { className: "menu__item" },
                    react_1["default"].createElement("a", { className: "menu__link", href: "#services" }, "Services")),
                react_1["default"].createElement("li", { className: "menu__item" },
                    react_1["default"].createElement("a", { className: "menu__link", href: "#team" }, "Team")),
                react_1["default"].createElement("li", { className: "menu__item" },
                    react_1["default"].createElement("a", { className: "menu__link", href: "https://test.metrix.place/", target: '_blank' }, "Metrix.Place")),
                react_1["default"].createElement("li", { className: "menu__item" },
                    react_1["default"].createElement("a", { className: "menu__link", href: "https://cryptechtest.xyz/", target: '_blank' }, "CryptechTest")),
                react_1["default"].createElement("li", { className: "menu__item" },
                    react_1["default"].createElement("a", { className: "menu__link", href: "http://www.freepik.com", target: '_blank' }, "Attributes"))),
            react_1["default"].createElement("p", null, "\u00A92023 Cryptech Services | All Rights Reserved"),
            react_1["default"].createElement(image_1["default"], { className: "sales-land-pic", alt: 'front-logo', src: "/images/footer.png", width: "3620", height: "1671" })));
    };
    return Footer;
}(react_1.Component));
exports["default"] = Footer;
