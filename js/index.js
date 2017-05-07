$(window).scroll(function() {
  var height =  $(window).scrollTop();
  var portfolioHeight = $(".navbar").height() + $(".about-section").height() + 60;
  
  if (height > (portfolioHeight + $(".portfolio-section").height() + 40)) {
    $("#about-link").removeClass("active");
    $("#portfolio-link").removeClass("active");
    
    $("#contact-link").addClass("active");
  }
  else if (height > portfolioHeight) {
    $("#about-link").removeClass("active");
    $("#contact-link").removeClass("active");
    
    $("#portfolio-link").addClass("active");
  }
  else {
    $("#portfolio-link").removeClass("active");
    $("#contact-link").removeClass("active");

    $("#about-link").addClass("active");
  }
});