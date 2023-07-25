"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var aos_1 = require("aos");
require("aos/dist/aos.css");
var AOScall = function () {
    react_1.useEffect(function () {
        aos_1["default"].init({
            offset: 50,
            disable: 'tablet'
        });
    }, []);
    return [];
};
exports["default"] = AOScall;
