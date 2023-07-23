"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var aos_1 = require("aos");
require("aos/dist/aos.css");
var AOScall = function () {
    react_1.useEffect(function () {
        aos_1["default"].init({
            disable: 'tablet',
            easing: "ease-out-cubic",
            offset: 50
        });
    }, []);
    return [];
};
exports["default"] = AOScall;
