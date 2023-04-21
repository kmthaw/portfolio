var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {

    // when window width is >= 600px
    400: {
      slidesPerView: 1.0,
     },

    // when window width is >= 600px
    650: {
      slidesPerView: 1.5,
     
     },
    // when window width is >= 800px
    800: {
      slidesPerView: 2,
  
     },
    // when window width is >= 320px
    1000: {
      slidesPerView: 2.5,

      },
    1200: {
      slidesPerView: 3,
      
      },
    1500: {
      slidesPerView: 3.5,
      
      },
     },
  loop: true,
  mousewheel: {
  releaseOnEdges: true,
  },
  pagination: {el: ".swiper-pagination",
  clickable: true,
},
});