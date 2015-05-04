'use strict';

(function () {
  var navMenu = $('nav ul'),
      isCollapsed = 'is-collapsed-mobile';
  var menuToggle = function () {
    if(navMenu.hasClass(isCollapsed)){
      navMenu.removeClass(isCollapsed);
    } else {
      navMenu.addClass(isCollapsed);
    }
  };


  $('#toggle').click(menuToggle);
  $('.nav__item').click(function () {
    menuToggle();
  });

})();
