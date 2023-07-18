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
var Team = /** @class */ (function (_super) {
    __extends(Team, _super);
    function Team() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    Team.prototype.render = function () {
        return (react_1["default"].createElement("section", { className: 'team-container' },
            react_1["default"].createElement("div", { className: "to-width to-height to-center to-flex-column" },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", { className: 'text-motion section-title-logo' }, " \u2756 "),
                    react_1["default"].createElement("div", { className: 'text-motion section-title' }, " CRYPTECH SERVICES TEAM ")),
                react_1["default"].createElement("div", { className: 'to-flex' },
                    react_1["default"].createElement("div", { "data-aos": "fade-up", "data-aos-duration": "1000", "data-aos-anchor-placement": "bottom-bottom", className: 'contacts-container' },
                        react_1["default"].createElement(image_1["default"], { className: 'contact-mug', alt: 'front-logo', src: "/images/squid.png", width: "512", height: "512" }),
                        react_1["default"].createElement("div", { className: 'details-bg' },
                            react_1["default"].createElement("div", { className: 'contact-name squid-name' }, " Squidicuz "),
                            react_1["default"].createElement("div", { className: 'contact-description' },
                                " ",
                                react_1["default"].createElement("ul", null,
                                    " ",
                                    react_1["default"].createElement("li", { className: 'squid-list' }, " Developer "),
                                    " ",
                                    react_1["default"].createElement("li", { className: 'squid-list' }, " Bot Admin "),
                                    " ",
                                    react_1["default"].createElement("li", { className: 'squid-list' }, " Site Admin ")),
                                " "),
                            react_1["default"].createElement("a", { className: "contact-button squid", href: "https://discord.com/users/294414250376429569", target: '_blank' },
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement("button", { type: "button", className: "home-button-txt" }, "Contact"))))),
                    react_1["default"].createElement("div", { "data-aos": "fade-down", "data-aos-duration": "1500", "data-aos-anchor-placement": "bottom-bottom", className: 'contacts-container' },
                        react_1["default"].createElement(image_1["default"], { className: 'contact-mug', alt: 'front-logo', src: "/images/valor.png", width: "512", height: "512" }),
                        react_1["default"].createElement("div", { className: 'details-bg' },
                            react_1["default"].createElement("div", { className: 'contact-name valor-name' }, " Valor "),
                            react_1["default"].createElement("div", { className: 'contact-description' },
                                " ",
                                react_1["default"].createElement("ul", null,
                                    " ",
                                    react_1["default"].createElement("li", { className: 'valor-list' }, " Research "),
                                    " ",
                                    react_1["default"].createElement("li", { className: 'valor-list' }, " Support "),
                                    " ",
                                    react_1["default"].createElement("li", { className: 'valor-list' }, " Admin "))),
                            react_1["default"].createElement("a", { className: "contact-button valor", href: "https://discord.com/users/305452127034277899", target: '_blank' },
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement("button", { type: "button", className: "home-button-txt" }, "Contact"))))),
                    react_1["default"].createElement("div", { "data-aos": "fade-up", "data-aos-duration": "2000", "data-aos-anchor-placement": "bottom-bottom", className: 'contacts-container' },
                        react_1["default"].createElement(image_1["default"], { className: 'contact-mug', alt: 'front-logo', src: "/images/seqsee.png", width: "512", height: "512" }),
                        react_1["default"].createElement("div", { className: 'details-bg' },
                            react_1["default"].createElement("div", { className: 'contact-name seq-name' }, " SeqSee "),
                            react_1["default"].createElement("div", { className: 'contact-description' },
                                " ",
                                react_1["default"].createElement("ul", null,
                                    " ",
                                    react_1["default"].createElement("li", { className: 'seqsee-list' }, " Developer "),
                                    " ",
                                    react_1["default"].createElement("li", { className: 'seqsee-list' }, " Support "),
                                    " ",
                                    react_1["default"].createElement("li", { className: 'seqsee-list' }, " Admin "))),
                            react_1["default"].createElement("a", { className: "contact-button seqsee", href: "https://discord.com/users/412122437954830337", target: '_blank' },
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement("button", { type: "button", className: "home-button-txt" }, "Contact"))))),
                    react_1["default"].createElement("div", { "data-aos": "fade-down", "data-aos-duration": "2500", "data-aos-anchor-placement": "bottom-bottom", className: 'contacts-container' },
                        react_1["default"].createElement(image_1["default"], { className: 'contact-mug', alt: 'front-logo', src: "/images/jekz.png", width: "512", height: "512" }),
                        react_1["default"].createElement("div", { className: 'details-bg' },
                            react_1["default"].createElement("div", { className: 'contact-name jekz-name' }, " Jekz "),
                            react_1["default"].createElement("div", { className: 'contact-description' },
                                " ",
                                react_1["default"].createElement("ul", null,
                                    " ",
                                    react_1["default"].createElement("li", { className: 'jekz-list' }, " Security Researcher "),
                                    " ",
                                    react_1["default"].createElement("li", { className: 'jekz-list' }, "Graphic Artist  "),
                                    " ",
                                    react_1["default"].createElement("li", { className: 'jekz-list' }, "Penetration Tester")),
                                " "),
                            react_1["default"].createElement("a", { className: "contact-button jekz", href: "https://discord.com/users/294414250376429569", target: '_blank' },
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement("button", { type: "button", className: "home-button-txt" }, "Contact"))))),
                    react_1["default"].createElement("div", { "data-aos": "fade-up", "data-aos-duration": "3000", "data-aos-anchor-placement": "bottom-bottom", className: 'contacts-container' },
                        react_1["default"].createElement(image_1["default"], { className: 'contact-mug', alt: 'front-logo', src: "/images/ercknard.png", width: "512", height: "512" }),
                        react_1["default"].createElement("div", { className: 'details-bg' },
                            react_1["default"].createElement("div", { className: 'contact-name ercknard-name' }, " Ercknard "),
                            react_1["default"].createElement("div", { className: 'contact-description' },
                                " ",
                                react_1["default"].createElement("ul", null,
                                    " ",
                                    react_1["default"].createElement("li", { className: 'ercknard-list' }, " Web Developer "),
                                    " ",
                                    react_1["default"].createElement("li", { className: 'ercknard-list' }, " UX/UI Designer"),
                                    " ",
                                    react_1["default"].createElement("li", { className: 'ercknard-list' }, " "))),
                            react_1["default"].createElement("a", { className: "contact-button ercknard", href: "https://discord.com/users/412122437954830337", target: '_blank' },
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement("button", { type: "button", className: "home-button-txt" }, "Contact"))))))),
            react_1["default"].createElement(image_1["default"], { className: "team-land-pic reflect", alt: 'front-logo', src: "/images/team-1.png", width: "3620", height: "1670" })));
    };
    return Team;
}(react_1.Component));
exports["default"] = Team;
