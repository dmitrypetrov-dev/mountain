"use strict";

var header = document.querySelector('.header');
var burgerMenu = document.querySelector('.header-burger__menu');
var headerMenu = document.querySelector('.header-nav');
var body = document.querySelector('body');
var headerMenuLinks = document.querySelectorAll('.header-nav__link');

(function () {
  window.onscroll = function () {
    if (window.pageYOffset > 50) {
      header.classList.add('header_active');
      headerMenu.classList.add('scroll');
    } else {
      header.classList.remove('header_active');
      headerMenu.classList.remove('scroll');
    }
  };

  burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active');
    headerMenu.classList.toggle('active');
    body.classList.toggle('lock');
  });
})(); // Scroll to anchors


(function () {
  var smoothScroll = function smoothScroll(targetEl, duration) {
    var headerElHeight = document.querySelector('.header').clientHeight;
    var target = document.querySelector(targetEl);
    var targetPosition = target.getBoundingClientRect().top - headerElHeight;
    var startPosition = window.pageYOffset;
    var startTime = null;

    var ease = function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    var animation = function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  var scrollTo = function scrollTo() {
    var links = document.querySelectorAll('.js-scroll');
    links.forEach(function (each) {
      each.addEventListener('click', function () {
        var currentTarget = this.getAttribute('href');
        smoothScroll(currentTarget, 1000);
      });
    });
  };

  scrollTo();
})();

(function () {
  if (window.innerWidth <= 990) {
    for (var i = 0; i < headerMenuLinks.length; i += 1) {
      headerMenuLinks[i].addEventListener('click', function () {
        burgerMenu.classList.toggle('active');
        headerMenu.classList.toggle('active');
        body.classList.toggle('lock');
      });
    }
  }
})();