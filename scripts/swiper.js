// Swiper js
var swiper = new Swiper(".qouteSwiper", {
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
  780:{
    pagination:{
      el: '.swiper-pagination',
      type: 'bullets',
    }
  }
});
// Swiper js