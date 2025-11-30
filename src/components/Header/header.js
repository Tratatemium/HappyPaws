// Select menu button and sidebar elements
const menuButton = document.querySelector('.menu-button');
const sidebar = document.querySelector('.sidebar');
const closeButton = document.querySelector('.close-sidebar');

// Open sidebar when clicking burger menu
menuButton.addEventListener('click', () => {
    sidebar.classList.add('open');
});

// Close sidebar when clicking close button
closeButton.addEventListener('click', () => {
    sidebar.classList.remove('open');
});

// Close sidebar when clicking outside of it
document.addEventListener('click', (event) => {
    // Check if click is outside sidebar and burger button
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        sidebar.classList.remove('open');
    }
});
