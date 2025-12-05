// Load pets data
import pets from '../../assets/pet-data.json';


// Select containers
const urgentContainer = document.getElementById('urgentPetsContainer');
const availableContainer = document.getElementById('availablePetsContainer');

// Create card element
function createPetCard(pet) {
  const isUrgent = pet.urgent === true;

  return `
    <article class="pet-card ${isUrgent ? 'urgent' : ''}">
      <div class="pet-image">
        <img src="${pet.image_urls[0]}" alt="${pet.name}">
        ${isUrgent ? `<span class="urgent-badge">Urgent</span>` : ''}
        <div class="paw-badge">
          <img src="../../assets/icons/paw-like-icon.png">
        </div>
        <div class="image-gradient"></div>
        <div class="info info--overlay">
          <h3>${pet.name}</h3>
          <p>${pet.breed} · ${pet.age}</p>
        </div>
      </div>
    </article>
  `;
}

// Render pets by urgency
function renderPets() {
  pets.forEach(pet => {
    const cardHTML = createPetCard(pet);
    if (pet.urgent === true) {
      urgentContainer.innerHTML += cardHTML;
    } else {
      availableContainer.innerHTML += cardHTML;
    }
  });

  attachLikeEvents();
}

// Laura: toggle paw like icon on click for both urgent paw badges and fav buttons
function attachLikeEvents() {
  const favButtons = document.querySelectorAll(".paw-badge, .fav-btn");

  favButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const img = btn.querySelector("img");

      const isLiked = btn.classList.toggle("is-liked");

      img.src = isLiked
      ? "../../assets/icons/paw-liked-red-icon.png"
      : "../../assets/icons/paw-like-icon.png";
    });
  });
}

// Category button active state
const chips = document.querySelectorAll(".chip");

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((c) => c.classList.remove("chip--active"));
    chip.classList.add("chip--active");
  });
});

// Run load
renderPets();
