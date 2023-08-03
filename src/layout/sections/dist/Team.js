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
var ContactPageOutlined_1 = require("@mui/icons-material/ContactPageOutlined");
var AlternateEmailOutlined_1 = require("@mui/icons-material/AlternateEmailOutlined");
var image_1 = require("next/image");
var Team = /** @class */ (function (_super) {
    __extends(Team, _super);
    function Team() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    Team.prototype.render = function () {
        return (react_1["default"].createElement("section", { id: "team", className: 'team-container', "data-color": "rgb(176, 117, 248)" },
            react_1["default"].createElement("div", { className: "to-width to-height to-center to-flex-column" },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", { className: 'text-motion section-title-logo to-secondary' }, " \u2756 "),
                    react_1["default"].createElement("div", { className: 'title-team to-center' },
                        react_1["default"].createElement("div", { className: 'text-motion section-title to-secondary' }, " CRYPTECH SERVICES TEAM ")),
                    react_1["default"].createElement("div", { className: 'section-desc' },
                        " Please contact ",
                        react_1["default"].createElement("a", { href: "mailto:squid@cryptech.services569", target: '_blank' },
                            react_1["default"].createElement("span", { className: 'we-logo-second to-bold' }, "SQUIDICUZ")),
                        " if it is urgent, or contact another admin to attempt to resolve your issue. Thank you.")),
                react_1["default"].createElement("div", { className: 'to-flex to-flex-evenly width-team koto' },
                    react_1["default"].createElement("div", { "data-aos": "fade-up", "data-aos-duration": "1000", "data-aos-anchor-placement": "bottom-bottom", className: 'contacts-container' },
                        react_1["default"].createElement(image_1["default"], { className: 'contact-mug', alt: 'front-logo', src: "/images/squid.webp", width: "512", height: "512" }),
                        react_1["default"].createElement("div", { className: 'details-bg' },
                            react_1["default"].createElement("div", { className: 'contact-name squid-name' }, " Squidicuz "),
                            react_1["default"].createElement("div", { className: 'contact-description' },
                                react_1["default"].createElement("ul", null,
                                    react_1["default"].createElement("li", { className: 'squid-list' }, " Developer "),
                                    react_1["default"].createElement("li", { className: 'squid-list' }, " Bot Admin "),
                                    react_1["default"].createElement("li", { className: 'squid-list' }, " Site Admin "))),
                            react_1["default"].createElement("div", { className: 'to-flex to-gap' },
                                react_1["default"].createElement("a", { className: "contact-button squid", href: "https://discord.com/users/294414250376429569", target: '_blank' },
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement("button", { type: "button", className: "home-button-txt" },
                                            react_1["default"].createElement(ContactPageOutlined_1["default"], null),
                                            " ",
                                            "Discord"))),
                                react_1["default"].createElement("a", { className: "contact-button squid", href: "mailto:squid@cryptech.services", target: '_blank' },
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement("button", { type: "button", className: "home-button-txt" },
                                            react_1["default"].createElement(AlternateEmailOutlined_1["default"], null),
                                            " ",
                                            "Email")))))),
                    react_1["default"].createElement("div", { "data-aos": "fade-down", "data-aos-duration": "1500", "data-aos-anchor-placement": "bottom-bottom", className: 'contacts-container' },
                        react_1["default"].createElement(image_1["default"], { className: 'contact-mug', alt: 'front-logo', src: "/images/ercknard.webp", width: "512", height: "512" }),
                        react_1["default"].createElement("div", { className: 'details-bg' },
                            react_1["default"].createElement("div", { className: 'contact-name valor-name' }, " Ercknard "),
                            react_1["default"].createElement("div", { className: 'contact-description' },
                                react_1["default"].createElement("ul", null,
                                    react_1["default"].createElement("li", { className: 'valor-list' }, " Developer "),
                                    react_1["default"].createElement("li", { className: 'valor-list' }, " Front-End"),
                                    react_1["default"].createElement("li", { className: 'valor-list' }, " "))),
                            react_1["default"].createElement("div", { className: 'to-flex to-gap' },
                                react_1["default"].createElement("a", { className: "contact-button valor", href: "https://discord.com/users/615741889366458369", target: '_blank' },
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement("button", { type: "button", className: "home-button-txt" },
                                            react_1["default"].createElement(ContactPageOutlined_1["default"], null),
                                            " ",
                                            "Discord"))),
                                react_1["default"].createElement("a", { className: "contact-button valor", href: "mailto:ercknard@cryptech.services", target: '_blank' },
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement("button", { type: "button", className: "home-button-txt" },
                                            react_1["default"].createElement(AlternateEmailOutlined_1["default"], null),
                                            " ",
                                            "Email")))))),
                    react_1["default"].createElement("div", { "data-aos": "fade-up", "data-aos-duration": "2000", "data-aos-anchor-placement": "bottom-bottom", className: 'contacts-container' },
                        react_1["default"].createElement(image_1["default"], { className: 'contact-mug', alt: 'front-logo', src: "/images/seqsee.webp", width: "512", height: "512" }),
                        react_1["default"].createElement("div", { className: 'details-bg' },
                            react_1["default"].createElement("div", { className: 'contact-name seq-name' }, " SeqSee "),
                            react_1["default"].createElement("div", { className: 'contact-description' },
                                react_1["default"].createElement("ul", null,
                                    react_1["default"].createElement("li", { className: 'seqsee-list' }, " Developer "),
                                    react_1["default"].createElement("li", { className: 'seqsee-list' }, " Support "),
                                    react_1["default"].createElement("li", { className: 'seqsee-list' }, " Admin "))),
                            react_1["default"].createElement("div", { className: 'to-flex to-gap' },
                                react_1["default"].createElement("a", { className: "contact-button seqsee", href: "https://discord.com/users/412122437954830337", target: '_blank' },
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement("button", { type: "button", className: "home-button-txt" },
                                            react_1["default"].createElement(ContactPageOutlined_1["default"], null),
                                            " ",
                                            "Discord"))),
                                react_1["default"].createElement("a", { className: "contact-button seqsee", href: "mailto:seqsee@cryptech.services", target: '_blank' },
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement("button", { type: "button", className: "home-button-txt" },
                                            react_1["default"].createElement(AlternateEmailOutlined_1["default"], null),
                                            " ",
                                            "Email")))))),
                    react_1["default"].createElement("div", { "data-aos": "fade-down", "data-aos-duration": "2500", "data-aos-anchor-placement": "bottom-bottom", className: 'contacts-container' },
                        react_1["default"].createElement(image_1["default"], { className: 'contact-mug', alt: 'front-logo', src: "/images/valor.webp", width: "512", height: "512" }),
                        react_1["default"].createElement("div", { className: 'details-bg' },
                            react_1["default"].createElement("div", { className: 'contact-name jekz-name' }, " Jekz "),
                            react_1["default"].createElement("div", { className: 'contact-description' },
                                react_1["default"].createElement("ul", null,
                                    react_1["default"].createElement("li", { className: 'jekz-list' }, " Security Researcher "),
                                    react_1["default"].createElement("li", { className: 'jekz-list' }, " Graphic Artist  "),
                                    react_1["default"].createElement("li", { className: 'jekz-list' }, " Penetration Tester"))),
                            react_1["default"].createElement("div", { className: 'to-flex to-gap' },
                                react_1["default"].createElement("a", { className: "contact-button jekz", href: "https://discord.com/users/943186466744463421", target: '_blank' },
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement("button", { type: "button", className: "home-button-txt" },
                                            react_1["default"].createElement(ContactPageOutlined_1["default"], null),
                                            " ",
                                            "Discord"))),
                                react_1["default"].createElement("a", { className: "contact-button jekz", href: "mailto:jekz@cryptech.services", target: '_blank' },
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement("button", { type: "button", className: "home-button-txt" },
                                            react_1["default"].createElement(AlternateEmailOutlined_1["default"], null),
                                            " ",
                                            "Email")))))))),
            react_1["default"].createElement(image_1["default"], { className: "team-land-pic", alt: 'front-logo', src: "/images/team3.webp", width: "3620", height: "1670" }),
            react_1["default"].createElement(image_1["default"], { className: "sales-1-land-pic", alt: 'front-logo', src: "/images/to-center-up.webp", width: "3620", height: "1377" })));
    };
    return Team;
}(react_1.Component));
exports["default"] = Team;
