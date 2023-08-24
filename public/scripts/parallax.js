let secondary_front_bg = document.getElementById("secondary-front-bg");
let tertiary_front_bg = document.getElementById("tertiary-front-bgs");
let shadow_front_bg = document.getElementById("shadow-front-bg");
let shadow_front_bground = document.getElementById("shadow-front-bground");
let primary_front_bg = document.getElementById("secondary-front-bgs");
let primary_front_bgs = document.getElementById("primary-front-bgs");
let finalbg = document.getElementById("finalbg");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  secondary_front_bg.style.top = value * 0.1 + "px";
  tertiary_front_bg.style.top = value * -0.05 + "px";
  primary_front_bg.style.top = value * 0.05 + "px";
  primary_front_bgs.style.top = value * -0.1 + "px";
  shadow_front_bg.style.top = value * 0.4 + "px";
  shadow_front_bground.style.top = value * -0.1 + "px";
  finalbg.style.top = value * 0.2 + "px";
});

// Add active class to the current button (highlight it)
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

    let meow = document.getElementById("header");
    let bus = document.getElementById("bus");
    // let dog = document.querySelector(".active");
    // let dog = document.getElementById("secondary-front-bg");
    if (scrollTop > curDiv.offsetTop - heightBefore) {
      color = curDiv.getAttribute("data-color");

      meow.style.backgroundColor = color;
      bus.style.backgroundColor = color;
      // dog.style.color = color;
      // dog.style.backgroundColor = color;
    }
  }
};

$(function () {
  $(document).scroll(function () {
    var $nav = $(".home-welcome-message");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".reflect-nav");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav-main");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav-bar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

var addClassOnScroll = function () {
  var windowTop = $(window).scrollTop();
  $("section[id]").each(function (index, elem) {
    var offsetTop = $(elem).offset().top;
    var outerHeight = $(this).outerHeight(true);

    if (windowTop > offsetTop - 50 && windowTop < offsetTop + outerHeight) {
      var elemId = $(elem).attr("id");
      $("div span a.actives").removeClass("actives");
      $("div span a[href='#" + elemId + "']").addClass("actives");
    }
  });
};

$(function () {
  $(window).on("scroll", function () {
    addClassOnScroll();
  });
});
