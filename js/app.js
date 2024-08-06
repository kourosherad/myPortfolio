$(document).ready(function(){


  $('.home-link').click(function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'slow');
});




    $(window).on('scroll',function(){
      var scroll = $(window).scrollTop();
      if (scroll>=50) {
        $(".sticky").addClass("stickyadd");
      }
    else{
        $(".sticky").removeClass("stickyadd");
    }
  })

  var typed = new Typed(".element",{
    strings: ["Kourosh  Moradi","a Developer","a Designer"],
    smartBackspace:true,
    typeSpeed: 100,
    backSpeed: 100,
    loop:true,
    loopCount:Infinity,
    startDelay:500
  });

  // Progress Bars 

  var waypoint = new Waypoint({
    element: document.getElementById('exp-id'),
    handler: function() {
      var p = document.querySelectorAll('.progress-bar');
        p[0].setAttribute ("style","width:99%;transition: 1s all");
        p[1].setAttribute ("style","width:99%;transition: 1.5s all");
        p[2].setAttribute ("style","width:70%;transition: l.7s all");
        p[3].setAttribute ("style","width:90%;transition: 2s all");
        p[4].setAttribute ("style","width:40%;transition: 2.3s all");
        p[5].setAttribute ("style","width:60%;transition: 2.5s all");
    }, offset:'90%'
  });



  // Owl Carousel
  
  $(".owl-carousel").owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,
    items:1
  });

});