if (window.innerWidth >= 768) {
  // Swiper js
  var swiper = new Swiper(".qouteSwiper", {
    effect: "cards",
    grabCursor: true,
    autoplay: {
      delay: 3500,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
    780: {
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
    },
  });
} else {
  var swiper = new Swiper(".qouteSwiper768", {
    slidesPerView: 1,
    spaceBetween: 30,
    watchSlidesVisibility: true,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-b-next",
      prevEl: ".swiper-b-prev",
    },
    autoplay:{
      delay: 3500,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    }
  });
  // Swiper js
}
