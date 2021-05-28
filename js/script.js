$(".autoplay").slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});


$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})



$('.numscroller').counterUp({
  delay: 10,
  time: 2000,
  offset: 70,
  beginAt: 100,
  formatter: function (n) {
    return n.replace(/,/g, '.');
  }
});