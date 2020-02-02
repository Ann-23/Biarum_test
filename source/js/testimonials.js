$('.testimonials__slider').slick({
  dots: false,
  infinite: true,
  mobileFirst: true,
  prevArrow: document.querySelector('.testimonials__arrow--left'),
  nextArrow: document.querySelector('.testimonials__arrow--right'),
  responsive: [{
      settings: {
        breakpoint: 320,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 660,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 959,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
});
