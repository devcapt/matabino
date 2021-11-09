var swiper = new Swiper(".dr--swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  watchSlidesVisibility: true,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-b-next",
    prevEl: ".swiper-b-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    120: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});