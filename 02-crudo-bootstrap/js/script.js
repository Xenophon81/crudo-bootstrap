// var header = document.querySelector('header');
// var hoogte_header = header.offsetTop;
// var logo = document.querySelector('img.logo');

// window.onscroll = function () {
//     // https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset
//     if (window.pageYOffset > hoogte_header) {
//         header.classList.add("stick-to-top");
//         logo.src = "./img/logo_black.svg";
//     } else {
//         header.classList.remove("stick-to-top");
//         logo.src = "./img/logo_white.svg";
//     }
// };

var images = document.querySelectorAll('.img-parallax');
// documentation: https://simpleparallax.com/#example-scale
new simpleParallax(image, {
    scale: 1.2
});