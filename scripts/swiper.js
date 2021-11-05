// Swiper js
var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
  autoplay: {
    delay: 3500,
    pauseOnMouseEnter:true,
    disableOnInteraction:false,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});
// Swiper js