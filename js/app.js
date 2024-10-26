$(document).ready(function(){


    // When you click on logo or home button it will take you to the 
    /// top of the page 
  $('.home-link').click(function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'fast');
});


// Navigation Bar 

$(window).on('scroll', function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $(".home-link").removeClass("navbar-brand")
      $(".sticky").addClass("stickyadd");
      // Add the black-border class to the menu links
      $(".menu1 li a").addClass("black-border");
  } else {
      $(".sticky").removeClass("stickyadd");
      // Remove the black-border class from the menu links
      $(".menu1 li a").removeClass("black-border");
      $(".home-link").addClass("navbar-brand")
  }
});




  // Hamburger menu in navigatin bar
  // This function make the links inside the navbar to be shown vertically 
  function hamburgerMenu() {
    $(".navbar-toggler").click(function() {
      var hamMenu = $(this).hasClass("flex-column");
      if (!hamMenu) {
        $(this).addClass("flex-column");
      } else {
        $(this).removeClass("flex-column");
      }
    });
  }
  
  //Introduction of Page 
  //Used type.js 
  var typed = new Typed(".element",{
    strings: ["Kourosh Moradi","a Software Engineer","a Designer"],
    smartBackspace:true,
    typeSpeed: 95,
    backSpeed: 60,
    loop:true,
    loopCount:Infinity,
    startDelay:500
  });

  // Progress Bars 
  // Here we used Waypoint.js which is a js library to animate 
  // the progress bar one after each other on a certain time 

  var waypoint = new Waypoint({
    element: document.getElementById('exp-id'),
    handler: function() {
      var p = document.querySelectorAll('.progress-bar');
        p[0].setAttribute ("style","width:92.34%;transition: 1.3s all");
        p[1].setAttribute ("style","width:51.01%;transition: 1.5s all");
        p[2].setAttribute ("style","width:60%;transition: 2s all");
        p[3].setAttribute ("style","width:32%;transition: 2.3s all");
        p[4].setAttribute ("style","width:12%;transition: 2.5s all");
    }, offset:'90%'
  });


/*
  // Owl Carousel
  // Here we used a js library called owl carousel for our
  // testimony section to make a loop of comments to be desplayed 
  $(".owl-carousel").owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,
    items:1
  });
*/
// Here we defined an function using jquery to collpase the menu 
// wherever we click our finger or whats so ever on screen

  $(document).click(function(event) {
    var clickOver = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("show");
    if (_opened === true && !clickOver.hasClass("navbar-toggler") && !clickOver.parents('.navbar-collapse').length) {
        $(".navbar-toggler").click();
    }
});



$(window).on('scroll', function() {
  var scroll2 = $(window).scrollTop();
  if (scroll2 >= 100) {
    $(".img-thumbnail").addClass("animate__animated animate__fadeInLeft");
    $(".aboutme").addClass("animate__animated animate__fadeInRight");
  } else {
    $(".img-thumbnail").removeClass("animate__animated animate__fadeInLeft");
    $(".aboutme").removeClass("animate__animated animate__fadeInRight");
  }
});

$(window).on('scroll',function() {
  var scroll3 = $(window).scrollTop();
  if (350 > scroll3 > 300) {
    $(".app").addClass("animate__animated animate__fadeInTopLeft");
  }
  else {
    $(".app").removeClass("animate__animated animate__fadeInTopLeft");
  }
});

});