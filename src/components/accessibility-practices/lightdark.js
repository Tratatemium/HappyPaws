
    const themeButton = `
        <ul class="lilinks">
          <li>
            <div class="toggle" id="themeToggle">
              <div class="dot"></div>
            </div>
          </li>
        </ul>`;

        
document.querySelector(".theme-button").innerHTML = themeButton;
const toggle = document.getElementById('themeToggle');
    toggle.addEventListener('click', () => {
      document.body.dataset.theme =
        document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    });