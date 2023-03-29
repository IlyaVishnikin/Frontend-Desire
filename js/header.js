
// ********************* //
// *** HEADER SCRIPT *** //
// ********************* //

var submenu = document.querySelector('.header__popup-menu'); 
document.querySelector('button.navigation__submenu').addEventListener('click', function() {
  submenu.style.visibility = 'visible';
});

document.querySelector('button.popup-menu__close').addEventListener('click', function() {
  submenu.style.visibility = 'hidden';
});
