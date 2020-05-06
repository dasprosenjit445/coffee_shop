//owlcarousel
$(".welcome-area").owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    nav: false,
    dots: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplayTimeout:5000
  });


  $(".reviews").owlCarousel({
    items: 3,
    autoplay: true,
    loop: true,
    nav: false,
    dots: true,
    animateOut:'fadeOutLeft',
    animateIn: 'fadeInRight',
    autoplayTimeout:5000,
    responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{

      },
      1000:{
        
      }
  }
  });

  

  $('.hover-gallery').magnificPopup({
    type: 'image',
    gallery: {
        enabled:true
    }
  })

  $('#nav').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
  });

  /* Sticky Header
    ============================*/
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 20) {
          $('.header-area').addClass("sticky");
      } else {
          $('.header-area').removeClass("sticky");
      }
  });

  
  $.scrollUp({
    scrollText: '<i class="fas fa-arrow-alt-circle-up"></i>',
    easingType: 'linear',
    scrollSpeed: 1000,
    animation: 'fade'
});