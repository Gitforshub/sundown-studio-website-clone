const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function page4Animation() {
  var elemcon = document.querySelector("#elem-container");
  var fixed = document.querySelector("#fixed-img");
  elemcon.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });
  elemcon.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });
  fixed.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });

  var elems = document.querySelectorAll(".element");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
}

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}

function menuAnimation(){
var resnav = document.querySelector("nav")
var menu = document.querySelector("nav h3");
var full = document.querySelector("#full-scr");
var navimg = document.querySelector("nav img");
var flag = 0;
menu.addEventListener("click", function () {
  if (flag == 0) {
    full.style.top = 0;
    navimg.style.opacity = 0;
    resnav.style.borderBottom = "1px solid #969696";
    flag = 1;
  } else {
    full.style.top = "-100%";
    navimg.style.opacity = 1;
    resnav.style.borderBottom = "none"
    flag = 0;
  }
});
}

function loaderAnimation(){
  var loader = document.querySelector("#loader")
  setTimeout(function(){
       loader.style.top = "-100%"
  },4200)
  
}

loaderAnimation()
page4Animation();
swiperAnimation();
menuAnimation()

