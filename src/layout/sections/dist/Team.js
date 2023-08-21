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
var squid_1 = require("./team/squid");
var ercknard_1 = require("./team/ercknard");
var seqsee_1 = require("./team/seqsee");
var image_1 = require("next/image");
var jekz_1 = require("./team/jekz");
var boehmerang_1 = require("./team/boehmerang");
var loma_1 = require("./team/loma");
var Team = /** @class */ (function (_super) {
    __extends(Team, _super);
    function Team() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    Team.prototype.render = function () {
        return (react_1["default"].createElement("section", { id: "team", className: "team-container", "data-color": "rgb(176, 117, 248)" },
            react_1["default"].createElement("div", { className: "to-width to-height to-center to-flex-column" },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", { className: "text-motion section-title-logo to-secondary" },
                        " ",
                        "\u2756",
                        " "),
                    react_1["default"].createElement("div", { className: "title-team to-center" },
                        react_1["default"].createElement("div", { className: "text-motion section-title to-secondary" },
                            " ",
                            "CRYPTECH SERVICES TEAM",
                            " ")),
                    react_1["default"].createElement("div", { className: "section-desc" },
                        " ",
                        "Please contact an",
                        " ",
                        react_1["default"].createElement("a", { href: "#contact" },
                            react_1["default"].createElement("span", { className: "we-logo-second to-bold" }, "Admin")),
                        " ",
                        "team member if you have an urgent request. Thank you.")),
                react_1["default"].createElement("div", { className: "to-flex to-flex-evenly width-team koto" },
                    react_1["default"].createElement(squid_1["default"], null),
                    react_1["default"].createElement(ercknard_1["default"], null),
                    react_1["default"].createElement(seqsee_1["default"], null),
                    react_1["default"].createElement(loma_1["default"], null),
                    react_1["default"].createElement(jekz_1["default"], null),
                    react_1["default"].createElement(boehmerang_1["default"], null))),
            react_1["default"].createElement(image_1["default"], { className: "team-land-pic", alt: "front-logo", src: "/images/team3.webp", width: "3620", height: "1670" }),
            react_1["default"].createElement(image_1["default"], { className: "sales-1-land-pic", alt: "front-logo", src: "/images/to-center-up.webp", width: "3620", height: "1377" })));
    };
    return Team;
}(react_1.Component));
exports["default"] = Team;
