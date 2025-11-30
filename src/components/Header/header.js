// Hamburger menu button click event
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', function() {
    // Menu open/close operations can be added here
    console.log('Menu button clicked');
    
    // Example: To open a sidebar menu
    // document.querySelector('.sidebar').classList.toggle('open');
});

// Logo click event (optional - already has href="/")
const logoLink = document.querySelector('.logo-link');

logoLink.addEventListener('click', function(e) {
    // If you want to perform a custom action
    console.log('Logo clicked, navigating to home page');
});

// Element seçimleri
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

// Menüyü açma fonksiyonu
function openMenu() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    hamburgerBtn.classList.add('active');
}

// Menüyü kapatma fonksiyonu
function closeMenu() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    hamburgerBtn.classList.remove('active');
}

// Hamburger butonuna tıklanınca
hamburgerBtn.addEventListener('click', function() {
    if (sidebar.classList.contains('active')) {
        closeMenu();
    } else {
        openMenu();
    }
});

// Kapatma butonuna tıklanınca
closeBtn.addEventListener('click', closeMenu);

// Overlay'e tıklanınca
overlay.addEventListener('click', closeMenu);

// Menü öğelerine tıklanınca (isteğe bağlı - menüyü kapatır)
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Tıklanan menü:', this.textContent.trim());
        closeMenu();
    });
});