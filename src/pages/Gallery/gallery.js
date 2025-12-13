// Load pets data
import pets from "../../assets/pet-data.json";
import { onPetSpeciesButtonClick } from "../../filter-pets.js";
import { createPetCard, attachLikeEvents, attachCardClickEvents } from "../../load-pet-cards.js";

// Select containers
const urgentContainer = document.getElementById("urgentPetsContainer");
const availableContainer = document.getElementById("availablePetsContainer");

// Render pets by urgency
function renderPets() {
  pets.forEach((pet) => {
    const cardHTML = createPetCard(pet);
    if (pet.urgent === true) {
      urgentContainer.innerHTML += cardHTML;
    } else {
      availableContainer.innerHTML += cardHTML;
    }
  });

  attachLikeEvents();
  attachCardClickEvents();
}

// Category button active state
const chips = document.querySelectorAll(".chip");

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((c) => c.classList.remove("chip--active"));
    chip.classList.add("chip--active");
    onPetSpeciesButtonClick(chip);
  });
});

// Run load
renderPets();
