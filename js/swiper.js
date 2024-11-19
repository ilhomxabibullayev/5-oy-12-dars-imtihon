const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },

    autoplay: {
        delay: 4000,
    },
  
    navigation: {
      nextEl: '.swiper__btn-next',
      prevEl: '.swiper__btn-prev',
    },
  });