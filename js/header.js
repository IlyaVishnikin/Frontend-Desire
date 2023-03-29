
// ********************* //
// *** HEADER SCRIPT *** //
// ********************* //

var submenu = document.querySelector('.header__popup-menu'); 
document.querySelector('button.navigation__submenu').addEventListener('click', function() {
  submenu.style.display = 'block';
});

document.querySelector('button.popup-menu__close').addEventListener('click', function() {
  submenu.style.display = 'none'
});
