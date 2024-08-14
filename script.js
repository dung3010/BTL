window.onload=function(){
  // Swiper news
  var swiper = new Swiper(".button-container", {
    slidesPerView: 3,
    spaceBetween: 20,
    grabCursor: 'true',
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".news-container .swiper-button-next",
      prevEl: ".news-container .swiper-button-prev",
    },
    breakpoints:{
      0:{
        slidesPerView: 1,
      },
      768:{
        slidesPerView: 2,
      },
      950:{
        slidesPerView: 3,
      },
    }
  });



  //  Swiper research
  var swiper = new Swiper(".container-swiper", {
    grabCursor: 'true',
    spaceBetween: 1,
    navigation: {
      nextEl: ".right-container .swiper-button-next",
      prevEl: ".right-container .swiper-button-prev",
    },
  });
