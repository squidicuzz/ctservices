"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var secondary_front_bg = document.getElementById("secondary-front-bg");
var tertiary_front_bg = document.getElementById("tertiary-front-bgs");
var shadow_front_bg = document.getElementById("shadow-front-bg");
var shadow_front_bground = document.getElementById("shadow-front-bground");
var primary_front_bg = document.getElementById("secondary-front-bgs");
var primary_front_bgs = document.getElementById("primary-front-bgs");
var finalbg = document.getElementById("finalbg");
window.addEventListener("scroll", function () {
  var value = window.scrollY;
  secondary_front_bg.style.top = value * 0.1 + "px";
  tertiary_front_bg.style.top = value * -0.05 + "px";
  primary_front_bg.style.top = value * 0.05 + "px";
  primary_front_bgs.style.top = value * -0.1 + "px";
  shadow_front_bg.style.top = value * 0.4 + "px";
  shadow_front_bground.style.top = value * -0.1 + "px";
  finalbg.style.top = value * 0.2 + "px";
}); // Add active class to the current button (highlight it)
// var header = document.getElementById("toactive");
// var btns = header.getElementsByClassName("kek");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("active");
//     if (current.length > 0) {
//       current[0].className = current[0].className.replace(" active", "");
//     }
//     this.className += " active";
//   });
// }
// let slideIndex = 1;
// showSlides(slideIndex);
// // Next/previous controls
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }
// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }
// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex - 1].style.display = "block";
// }

document.onscroll = function () {
  scrollTop = document.documentElement.scrollTop;
  allDivs = document.getElementsByTagName("section");

  for (i = 0; i < allDivs.length; i++) {
    curDiv = allDivs[i];
    heightBefore = 0;

    if (i > 0) {
      heightBefore = allDivs[i - 1].offsetHeight / 3;
    }

    var meow = document.getElementById("header");
    var bus = document.getElementById("bus"); // let dog = document.querySelector(".active");
    // let dog = document.getElementById("secondary-front-bg");

    if (scrollTop > curDiv.offsetTop - heightBefore) {
      color = curDiv.getAttribute("data-color");
      meow.style.backgroundColor = color;
      bus.style.backgroundColor = color; // dog.style.color = color;
      // dog.style.backgroundColor = color;
    }
  }
};

var Jquity = function Jquity() {
  (0, _react.useEffect)(function () {
    (0, _jquery["default"])(function () {
      (0, _jquery["default"])(document).scroll(function () {
        var $nav = (0, _jquery["default"])(".home-welcome-message");
        $nav.toggleClass("scrolled", (0, _jquery["default"])(this).scrollTop() > $nav.height());
      });
    });
    (0, _jquery["default"])(function () {
      (0, _jquery["default"])(document).scroll(function () {
        var $nav = (0, _jquery["default"])(".reflect-nav");
        $nav.toggleClass("scrolled", (0, _jquery["default"])(this).scrollTop() > $nav.height());
      });
    });
    (0, _jquery["default"])(function () {
      (0, _jquery["default"])(document).scroll(function () {
        var $nav = (0, _jquery["default"])(".nav-main");
        $nav.toggleClass("scrolled", (0, _jquery["default"])(this).scrollTop() > $nav.height());
      });
    });
    (0, _jquery["default"])(function () {
      (0, _jquery["default"])(document).scroll(function () {
        var $nav = (0, _jquery["default"])(".nav-bar");
        $nav.toggleClass("scrolled", (0, _jquery["default"])(this).scrollTop() > $nav.height());
      });
    });

    var addClassOnScroll = function addClassOnScroll() {
      var windowTop = (0, _jquery["default"])(window).scrollTop();
      (0, _jquery["default"])("section[id]").each(function (index, elem) {
        var offsetTop = (0, _jquery["default"])(elem).offset().top;
        var outerHeight = (0, _jquery["default"])(this).outerHeight(true);

        if (windowTop > offsetTop - 50 && windowTop < offsetTop + outerHeight) {
          var elemId = (0, _jquery["default"])(elem).attr("id");
          (0, _jquery["default"])("div span a.actives").removeClass("actives");
          (0, _jquery["default"])("div span a[href='#" + elemId + "']").addClass("actives");
        }
      });
    };

    (0, _jquery["default"])(function () {
      (0, _jquery["default"])(window).on("scroll", function () {
        addClassOnScroll();
      });
    });
  }, []);
};

var _default = Jquity;
exports["default"] = _default;