"use strict";
exports.__esModule = true;
exports.metadata = void 0;
require("@/styles/globals.css");
var google_1 = require("next/font/google");
require("@fontsource/ysabeau");
var Aos_1 = require("@/layout/components/Aos");
var head_1 = require("next/head");
var inter = google_1.Inter({ subsets: ['latin'] });
exports.metadata = {
    title: 'Cryptech Services',
    description: 'We provide web3 and fullstack development services and support, primarily focusing on cryptocurrency, blockchain technology and cyber security.'
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement(head_1["default"], null,
            React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
            React.createElement("link", { rel: "icon", href: "favicon.ico" })),
        React.createElement("body", { className: inter.className }, children),
        React.createElement(Aos_1["default"], null)));
}
exports["default"] = RootLayout;
