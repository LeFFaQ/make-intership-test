document.addEventListener('DOMContentLoaded', function() {
  const burgerMenuBtn = document.getElementById('burgerMenuBtn');
  const fullscreenMenuCloseBtn = document.querySelector('.fullscreen-menu-close-btn');
  const fullscreen = document.querySelector('.fullscreen');

  burgerMenuBtn.addEventListener('click', function() {
    fullscreen.classList.add('active');
  });

  fullscreenMenuCloseBtn.addEventListener('click', function() {
    fullscreen.classList.remove('active');
  });
});