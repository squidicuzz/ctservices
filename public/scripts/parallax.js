let secondary_front_bg = document.getElementById("secondary-front-bg");
let primary_front_bg = document.getElementById("primary-front-bg");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  secondary_front_bg.style.left = value * 0.3 + "px";
  primary_front_bg.style.left = value * -0.1 + "px";
});
