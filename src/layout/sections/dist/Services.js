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
                    react_1["default"].createElement("div", { className: 'text-motion section-title-logo to-quaternary' }, " \u2756 "),
                    react_1["default"].createElement("div", { className: 'text-motion section-title to-quaternary' }, " SECURITY SERVICES "),
                    react_1["default"].createElement("div", { className: 'section-desc-1' },
                        " For ",
                        react_1["default"].createElement("span", { className: 'we-logo-fourth to-bold' }, "SECURITY"),
                        " services we offer: ")),
                react_1["default"].createElement("div", { className: 'packages' },
                    react_1["default"].createElement("div", { "data-aos": "fade-right", "data-aos-duration": "1000", "data-aos-anchor-placement": "bottom-bottom", className: 'service-package-1' },
                        react_1["default"].createElement("div", { className: 'service-package-sub' },
                            react_1["default"].createElement("div", { className: 'contact-name-1 to-bold' },
                                " Standard (1 time\u00B9) \u21D2 ",
                                react_1["default"].createElement("span", { className: 'we-logo-first to-bold' }, " 0.015 BTC\u2074 ")),
                            react_1["default"].createElement("div", { className: 'contact-description' },
                                react_1["default"].createElement("ul", null,
                                    react_1["default"].createElement("li", { className: 'squid-list' }, " Report of Website Vulnerabilities and some basic resources to self-remedy any issues. "),
                                    react_1["default"].createElement("li", { className: 'squid-list' }, " VPS Pentest and some basic resources to self-remedy any issues. "),
                                    react_1["default"].createElement("li", { className: 'squid-list' }),
                                    react_1["default"].createElement("li", { className: 'squid-list' }))))),
                    react_1["default"].createElement("div", { "data-aos": "fade-right", "data-aos-duration": "1500", "data-aos-anchor-placement": "bottom-bottom", className: 'service-package-2' },
                        react_1["default"].createElement("div", { className: 'service-package-sub' },
                            react_1["default"].createElement("div", { className: 'contact-name-1 to-bold' },
                                " Deluxe (1 time\u00B9) \u21D2 ",
                                react_1["default"].createElement("span", { className: 'we-logo-second to-bold' }, " 0.02 BTC\u2074 ")),
                            react_1["default"].createElement("div", { className: 'contact-description' },
                                react_1["default"].createElement("ul", null,
                                    react_1["default"].createElement("li", { className: 'valor-list' }, " Report of Website Vulnerabilities and some basic resources to self-remedy any issues. "),
                                    react_1["default"].createElement("li", { className: 'valor-list' }, " VPS Pentest and some basic resources to self-remedy any issues. "),
                                    react_1["default"].createElement("li", { className: 'valor-list' }, " Additional One on One support in remedying the security issues\u00B3. "),
                                    react_1["default"].createElement("li", { className: 'valor-list' }))))),
                    react_1["default"].createElement("div", { "data-aos": "fade-right", "data-aos-duration": "2000", "data-aos-anchor-placement": "bottom-bottom", className: 'service-package-3' },
                        react_1["default"].createElement("div", { className: 'service-package-sub' },
                            react_1["default"].createElement("div", { className: 'contact-name-1 to-bold' },
                                " Deluxe LTS (1 year\u00B2) \u21D2 ",
                                react_1["default"].createElement("span", { className: 'we-logo-third to-bold' }, " 0.04 BTC\u2074 ")),
                            react_1["default"].createElement("div", { className: 'contact-description' },
                                react_1["default"].createElement("ul", null,
                                    react_1["default"].createElement("li", { className: 'seqsee-list' }, " Monthly Report of Website Vulnerabilities and some basic resources to self-remedy. "),
                                    react_1["default"].createElement("li", { className: 'seqsee-list' }, " Monthly VPS Pentest. "),
                                    react_1["default"].createElement("li", { className: 'seqsee-list' }, " Monthly list of CVEs for your server. "),
                                    react_1["default"].createElement("li", { className: 'seqsee-list' }, " Monthly One on One support in remedying web-server and security issues\u00B3. "))))))),
            react_1["default"].createElement(image_1["default"], { className: "sales-land-pic reflect", alt: 'front-logo', src: "/images/sales12.png", width: "3620", height: "1377" })));
    };
    return Services;
}(react_1.Component));
exports["default"] = Services;
