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
var react_2 = require("react");
function NavLink(_a) {
    var to = _a.to, children = _a.children;
    return react_1["default"].createElement("a", { href: to, className: "mx-4" }, children);
}
function MobileNav(_a) {
    var open = _a.open, setOpen = _a.setOpen;
    return (react_1["default"].createElement("div", { className: "absolute top-0 left-0 h-screen w-screen bg-white transform " + (open ? "-translate-x-0" : "-translate-x-full") + " transition-transform duration-300 ease-in-out filter drop-shadow-md " },
        react_1["default"].createElement("div", { className: "flex items-center justify-center filter drop-shadow-md bg-white h-20" },
            " ",
            react_1["default"].createElement("a", { className: "text-xl font-semibold", href: "/" }, "LOGO")),
        react_1["default"].createElement("div", { className: "flex flex-col ml-4" },
            react_1["default"].createElement("a", { className: "text-xl font-medium my-4", href: "/about", onClick: function () { return setTimeout(function () { setOpen(!open); }, 100); } }, "About"),
            react_1["default"].createElement("a", { className: "text-xl font-normal my-4", href: "/contact", onClick: function () { return setTimeout(function () { setOpen(!open); }, 100); } }, "Contact"))));
}
var Navbar = /** @class */ (function (_super) {
    __extends(Navbar, _super);
    function Navbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    Navbar.prototype.render = function () {
        var _a = react_2.useState(false), open = _a[0], setOpen = _a[1];
        return (react_1["default"].createElement("nav", { className: "flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center" },
            react_1["default"].createElement(MobileNav, { open: open, setOpen: setOpen }),
            react_1["default"].createElement("div", { className: "w-3/12 flex items-center" },
                react_1["default"].createElement("a", { className: "text-2xl font-semibold", href: "/" }, "LOGO")),
            react_1["default"].createElement("div", { className: "w-9/12 flex justify-end items-center" },
                react_1["default"].createElement("div", { className: "z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden", onClick: function () {
                        setOpen(!open);
                    } },
                    react_1["default"].createElement("span", { className: "h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out " + (open ? "rotate-45 translate-y-3.5" : "") }),
                    react_1["default"].createElement("span", { className: "h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out " + (open ? "w-0" : "w-full") }),
                    react_1["default"].createElement("span", { className: "h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out " + (open ? "-rotate-45 -translate-y-3.5" : "") })),
                react_1["default"].createElement("div", { className: "hidden md:flex" },
                    react_1["default"].createElement(NavLink, { to: "/contact" }, "CONTACT"),
                    react_1["default"].createElement(NavLink, { to: "/about" }, "ABOUT")))));
    };
    return Navbar;
}(react_1.Component));
exports["default"] = Navbar;
