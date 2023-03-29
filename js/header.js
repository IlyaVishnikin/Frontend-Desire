
// ********************* //
// *** HEADER SCRIPT *** //
// ********************* //

$(function() {
  $('button.navigation__submenu').click(function() {;
    $('.header__popup-menu').css('visibility', 'visible');
  });

  $('button.popup-menu__close').click(function() {
    $('.header__popup-menu').css('visibility', 'hidden');
  });
});
