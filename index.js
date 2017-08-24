$(document).ready(function() {
  $("a").on('click', function(event) {


    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {


        window.location.hash = hash;
      });
    }
  });



  $(document).on("scroll", function() {
    if ($(document).scrollTop() > 100) {
      $(".navbar-inverse .navbar-nav>li>a").addClass("shrink");
      $(".image-logo").addClass("shrink1");

    } else {
      $(".navbar-inverse .navbar-nav>li>a").removeClass("shrink");
      $(".image-logo").removeClass("shrink1");

    }
  });
});
