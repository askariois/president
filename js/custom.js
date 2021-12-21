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
