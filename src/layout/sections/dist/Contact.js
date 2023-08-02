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
var LayersOutlined_1 = require("@mui/icons-material/LayersOutlined");
var DesignServicesOutlined_1 = require("@mui/icons-material/DesignServicesOutlined");
var CurrencyBitcoinOutlined_1 = require("@mui/icons-material/CurrencyBitcoinOutlined");
var CodeOutlined_1 = require("@mui/icons-material/CodeOutlined");
var DrawOutlined_1 = require("@mui/icons-material/DrawOutlined");
var SupportAgentOutlined_1 = require("@mui/icons-material/SupportAgentOutlined");
var ImageSlider_1 = require("@/layout/components/ImageSlider");
var images = [
    "/images/undraw_building_websites_i78t.svg",
    "/images/undraw_nakamoto_-2-iv6.svg",
    "/images/undraw_ethereum_re_0m68.svg",
    "/images/undraw_heatmap_uyye.svg",
    "/images/undraw_image_viewer_re_7ejc.svg",
    "/images/undraw_instant_support_re_s7un.svg",
];
var Support = /** @class */ (function (_super) {
    __extends(Support, _super);
    function Support() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    Support.prototype.render = function () {
        return (react_1["default"].createElement("section", { className: 'support-container', id: "sales", "data-color": "rgb(92, 194, 228)" },
            react_1["default"].createElement("div", { className: "to-width to-height to-center to-flex-column" },
                react_1["default"].createElement("div", { className: 'to-left' },
                    react_1["default"].createElement("div", { className: 'text-motion section-title-logo to-quaternary' }, " \u2756 "),
                    react_1["default"].createElement("div", { className: 'text-motion section-title to-quaternary' }, " CRYPTECH SERVICES "),
                    react_1["default"].createElement("div", { className: 'section-desc-1' },
                        " For ",
                        react_1["default"].createElement("span", { className: 'we-logo-fourth to-bold' }, "DEVELOPMENT"),
                        " services we offer: ")),
                react_1["default"].createElement(ImageSlider_1["default"], { images: images }),
                react_1["default"].createElement("div", { className: 'lest' },
                    react_1["default"].createElement("ul", null,
                        react_1["default"].createElement("li", { "data-aos": "fade-up", "data-aos-duration": "500", "data-aos-anchor-placement": "bottom-bottom", className: 'icos' },
                            react_1["default"].createElement("div", { className: "icon" },
                                react_1["default"].createElement(LayersOutlined_1["default"], { className: 'we-logo-first ico' })),
                            react_1["default"].createElement("div", { className: "title" }, "Full-Stack Web Development")),
                        react_1["default"].createElement("li", { "data-aos": "fade-up", "data-aos-duration": "1000", "data-aos-anchor-placement": "bottom-bottom", className: 'icos' },
                            react_1["default"].createElement("div", { className: "icon" },
                                react_1["default"].createElement(CurrencyBitcoinOutlined_1["default"], { className: 'we-logo-second ico' })),
                            react_1["default"].createElement("div", { className: "title" }, "Web3 and DAPP Development")),
                        react_1["default"].createElement("li", { "data-aos": "fade-up", "data-aos-duration": "1500", "data-aos-anchor-placement": "bottom-bottom", className: 'icos' },
                            react_1["default"].createElement("div", { className: "icon" },
                                react_1["default"].createElement(CodeOutlined_1["default"], { className: 'we-logo-third ico' })),
                            react_1["default"].createElement("div", { className: "title" }, "Solidity smart contract Development")),
                        react_1["default"].createElement("li", { "data-aos": "fade-up", "data-aos-duration": "2000", "data-aos-anchor-placement": "bottom-bottom", className: 'icos' },
                            react_1["default"].createElement("div", { className: "icon" },
                                react_1["default"].createElement(DesignServicesOutlined_1["default"], { className: 'we-logo-fourth ico' })),
                            react_1["default"].createElement("div", { className: "title" }, "Web Design")),
                        react_1["default"].createElement("li", { "data-aos": "fade-up", "data-aos-duration": "2500", "data-aos-anchor-placement": "bottom-bottom", className: 'icos' },
                            react_1["default"].createElement("div", { className: "icon" },
                                react_1["default"].createElement(DrawOutlined_1["default"], { className: 'we-logo-fifth ico' })),
                            react_1["default"].createElement("div", { className: "title" }, "Graphic Design")),
                        react_1["default"].createElement("li", { "data-aos": "fade-up", "data-aos-duration": "3000", "data-aos-anchor-placement": "bottom-bottom", className: 'icos' },
                            react_1["default"].createElement("div", { className: "icon" },
                                react_1["default"].createElement(SupportAgentOutlined_1["default"], { className: 'we-logo-first ico' })),
                            react_1["default"].createElement("div", { className: "title" }, "Technical Consultation")))))));
    };
    return Support;
}(react_1.Component));
exports["default"] = Support;
