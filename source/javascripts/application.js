//= require "_jquery"

$(document).ready(function(){

// SMOOTH SCROLL
$("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    }
  });

$('.hamburger').click(function(e) { // TOGGLE MOBILE NAV ON HAMBURGER CLICK
	  e.preventDefault();
	  $('header nav .main').toggleClass('active');
	  $(this).toggleClass('active');
	});

$('header nav .main li a').click(function() { // TOGGLE MOBILE NAV ON NAV ITEM CLICK
	  $('header nav .main').toggleClass('active');
	  $('.hamburger').toggleClass('active');
	});

});
