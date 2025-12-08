let link = document.createElement('link');
link.rel = 'stylesheet';
link.href = '/src/pages/Gallery/gallery.css';
document.head.appendChild(link);

link = document.createElement('link');
link.rel = 'stylesheet';
link.href = '/src/pages/Landing/urgent-carousel.css';
document.head.appendChild(link);

import pets from '../../assets/pet-data.json';
import { createPetCard, attachLikeEvents } from '../../load-pet-cards.js';

export const urgentContainer = document.querySelector('.urgent-carousel-container');
console.log(urgentContainer);

// Render pets by urgency
function renderCarousel() {
  pets.forEach(pet => {
    const cardHTML = createPetCard(pet);
    if (pet.urgent === true) {
      urgentContainer.innerHTML += cardHTML;
    } 
  });

  attachLikeEvents();
  setupScrollButtons();
}

// Setup scroll button functionality
function setupScrollButtons() {
  const scrollLeftBtn = document.getElementById('scrollLeft');
  const scrollRightBtn = document.getElementById('scrollRight');
  
  if (!scrollLeftBtn || !scrollRightBtn || !urgentContainer) return;

  const scrollAmount = 300; // Pixels to scroll

  // Left scroll button
  scrollLeftBtn.addEventListener('click', () => {
    urgentContainer.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  // Right scroll button
  scrollRightBtn.addEventListener('click', () => {
    urgentContainer.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  // Update button visibility based on scroll position
  function updateButtonVisibility() {
    const { scrollLeft, scrollWidth, clientWidth } = urgentContainer;
    
    // Hide left button if at the start
    if (scrollLeft <= 0) {
      scrollLeftBtn.classList.add('hidden');
    } else {
      scrollLeftBtn.classList.remove('hidden');
    }
    
    // Hide right button if at the end
    if (scrollLeft >= scrollWidth - clientWidth - 10) {
      scrollRightBtn.classList.add('hidden');
    } else {
      scrollRightBtn.classList.remove('hidden');
    }
  }

  // Initial button visibility check
  updateButtonVisibility();

  // Update button visibility on scroll
  urgentContainer.addEventListener('scroll', updateButtonVisibility);

  // Update button visibility on window resize
  window.addEventListener('resize', updateButtonVisibility);
}

renderCarousel();