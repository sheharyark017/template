var lastScroll = 0;

jQuery(document).ready(function($) {
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > lastScroll) {
            $(".navbar-top").addClass("sticky");
        } else if (scrollY < 20) {
            $(".navbar-top").removeClass("sticky");
        }
        lastScroll = scroll;
    });

    $(".menu-toggler").click(function(){
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });
});

$(".home").on("click",function(){
  $(".menu-toggler").removeClass("active");
  $(".navbar-menu").removeClass("active");
});

$(".click").on("click",function(){
  $(".menu-toggler").removeClass("active");
  $(".navbar-menu").removeClass("active");
});

$(".navbar-menu a").on("click",function(){
  $(".menu-toggler").removeClass("active");
  $(".navbar-menu").removeClass("active");
});





var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      540: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    }
  });