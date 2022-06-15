var swiper = new Swiper(".slider-container", { //객체타입
  pagination: { //하단부분 슬라이더
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: { //좌우 화살표
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

var mySwiper = new Swiper(".my-container", { //객체타입
  pagination: { //하단부분 슬라이더
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },
});
