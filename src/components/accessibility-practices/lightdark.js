const themeButton = `
  <div class="toggle" id="themeToggle">
    <div class="dot"></div>
  </div>`;

document.querySelector(".theme-button").innerHTML = themeButton;
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
  document.body.dataset.theme =
    document.body.dataset.theme === 'dark' ? 'light' : 'dark';
});