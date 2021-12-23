$(".sl__visual--main").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        arrows: false,
      },
    },
  ],
  asNavFor: ".sl__visual--miniature",
});
$(".sl__visual--miniature").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "40px",
  arrows: false,
  dots: false,
  asNavFor: ".sl__visual--main",
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        arrows: false,
      },
    },
  ],
});

$(window).scroll(function () {
  var docscroll = $(document).scrollTop();
  if (window.pageYOffset > 250) {
    $(".header").addClass("fixed");
  } else {
    $(".header").removeClass("fixed");
  }
});

$(function () {
  $('.header a[href^="#"]').on("click", function (event) {
    // отменяем стандартное действие
    event.preventDefault();

    var sc = $(this).attr("href"),
      dn = $(sc).offset().top;
    /*
     * sc - в переменную заносим информацию о том, к какому блоку надо перейти
     * dn - определяем положение блока на странице
     */

    $("html, body").animate({ scrollTop: dn - 100 }, 1000);

    /*
     * 1000 скорость перехода в миллисекундах
     */
  });
});

$(function () {
  $('.header a[href^="#"] , #about a , #price a').on("click", function (event) {
    // отменяем стандартное действие
    event.preventDefault();

    var sc = $(this).attr("href"),
      dn = $(sc).offset().top;

    $("html, body").animate({ scrollTop: dn - 100 }, 1000);
  });
});

$(window).scroll(function () {
  var docscroll = $(document).scrollTop();
  if (window.pageYOffset > 250) {
    $(".header__menu").addClass("fix_position");
  } else {
    $(".header__menu").removeClass("fix_position");
  }
});
