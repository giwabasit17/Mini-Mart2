// JavaScript code for slideshow functionality
$(document).ready(function () {
  // Activate the carousel
  $("#myCarousel").carousel();

  // Enable carousel indicators click event
  $(".carousel-indicators li").click(function () {
    var slideTo = $(this).attr("data-slide-to");
    $("#myCarousel").carousel(parseInt(slideTo));
  });

  // Enable carousel controls click event
  $(".carousel-control").click(function () {
    var direction = $(this).data("slide");
    $("#myCarousel").carousel(direction);
  });
});
