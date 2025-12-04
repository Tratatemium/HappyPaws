document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger-menu');
  const menu = document.querySelector('.off-screen-menu');
  const closeBtn = document.querySelector('.close-menu');

  menu.classList.remove('open'); // Kapalı başlasın

  burger.addEventListener('click', () => {
    menu.classList.add('open');
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.remove('open');
  });
});
