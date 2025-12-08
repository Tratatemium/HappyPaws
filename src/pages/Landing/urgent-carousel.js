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
}

renderCarousel();