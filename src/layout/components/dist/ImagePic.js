"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var ImagePicker = function () {
    var allImages = [
        'https://metrix.place/plc/chunks/1-1.png',
        'https://metrix.place/plc/chunks/2-2.png',
        'https://metrix.place/plc/chunks/3-3.png',
        'https://metrix.place/plc/chunks/4-4.png',
        'https://metrix.place/plc/chunks/5-5.png',
        'https://metrix.place/plc/chunks/6-6.png',
        'https://metrix.place/plc/chunks/7-7.png',
        'https://metrix.place/plc/chunks/8-8.png',
        'https://metrix.place/plc/chunks/9-9.png',
        'https://metrix.place/plc/chunks/10-10.png',
        'https://metrix.place/plc/chunks/11-11.png',
        'https://metrix.place/plc/chunks/12-12.png',
        'https://metrix.place/plc/chunks/13-13.png',
        'https://metrix.place/plc/chunks/14-14.png',
        'https://metrix.place/plc/chunks/15-15.png',
    ];
    var _a = react_1.useState([]), selectedImages = _a[0], setSelectedImages = _a[1];
    react_1.useEffect(function () {
        var _a;
        var shuffledImages = __spreadArrays(allImages);
        for (var i = shuffledImages.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [shuffledImages[j], shuffledImages[i]], shuffledImages[i] = _a[0], shuffledImages[j] = _a[1];
        }
        var selected = shuffledImages.slice(0, 5);
        setSelectedImages(selected);
    }, []); // Empty dependency array ensures the effect runs only once, on component mount
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: 'gallery' },
            react_1["default"].createElement(image_1["default"], { src: "/images/metrixboard.webp", alt: "mrx", width: "1100", height: "1100" }),
            selectedImages.map(function (imagePath) { return (react_1["default"].createElement(image_1["default"], { key: imagePath, src: imagePath, alt: "Randomly picked", width: "1100", height: "1100" })); }))));
};
exports["default"] = ImagePicker;
