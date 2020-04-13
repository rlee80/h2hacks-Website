(function ($) {
  "use strict";

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 0)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  navbarCollapse();
  $(window).scroll(navbarCollapse);

  $(".dayTwo").click(function () {
    $(".dayOneContent").removeClass("is-active");
    $(".one").removeClass("is-active");
    $(".dayTwoContent").addClass("is-active")
    $(".two").addClass("is-active")
  });

  $(".dayOne").click(function () {
    $(".dayTwoContent").removeClass("is-active");
    $(".two").removeClass("is-active");
    $(".dayOneContent").addClass("is-active")
    $(".one").addClass("is-active")
  });


  $(".cardOne").click(function () {

    $(".cardbodyOne").toggle('slow');

  });

  $(".cardTwo").click(function () {

    $(".cardbodyTwo").toggle('slow');

  });

  $(".cardThree").click(function () {

    $(".cardbodyThree").toggle('slow');

  });

  $(".cardFour").click(function () {

    $(".cardbodyFour").toggle('slow');

  });

  $(".cardFive").click(function () {

    $(".cardbodyFive").toggle('slow');

  });
  $(".cardSix").click(function () {

    $(".cardbodySix").toggle('slow');

  });

})(jQuery);



var day;
var sec;
var ticker;

function getSeconds() {var now = new Date();
  var days = -1;
  var next = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 7, 60, 0);

  var current = now.getTime();
  var nextTime = next.getTime();
  var diff = parseInt((nextTime - current) / 1000);

  if (diff > 0) {
    day = days - now.getDay();
  } else {
    day = days - now.getDay() - 1;
  }

  if (day < 0) {
    day += 7;
  }

  if (diff <= 0) {
    diff += (86400 * 7)
  }

  startTimer(diff);
}

function startTimer(secs) {
  sec = parseInt(secs);
  ticker = setInterval("tick()", 1000);
  tick();
}

function tick() {
  var secs = sec;

  if (secs > 0) {
    sec--;
  } else {
    clearInterval(ticker);
    getSeconds();
  }

  var days = Math.floor(secs / 86400);
  secs %= 86400;
   hours = Math.floor(secs / 3600);
  secs %= 3600;
   mins = Math.floor(secs / 60);
  secs %= 60;

  $('#days').text(day);
  $('#hours').text(((hours < 10) ? '0' : '') + hours);
  $('#minutes').text(((mins < 10) ? '0' : '') + mins);
  $('#seconds').text(((secs < 10) ? '0' : '') + secs);
}

$(document).ready(function () {
  getSeconds();
})



const items = document.querySelectorAll(".accordion a");

function toggleAccordion() {
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));