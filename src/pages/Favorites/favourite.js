import pets from "../../assets/pet-data.json";
import { createPetCard, getFavoriteIds, toggleFavorite } from "../../load-pet-cards.js";

function attachFavoriteEvents() {
  const favButtons = document.querySelectorAll(
    "#favoritesContainer .paw-badge"
  );

  favButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".pet-card");
      const petId = card?.dataset.petId;

      if (!petId) return;

      // Toggle in storage and re-render list
      toggleFavorite(petId);
      renderFavorites();
    });
  });
}

function renderFavorites() {
  const favoritesContainer = document.getElementById("favoritesContainer");
  const emptyMessage = document.getElementById("favoritesEmptyMessage");

  if (!favoritesContainer || !emptyMessage) return;

  const favoriteIds = getFavoriteIds();
  const favoritePets = pets.filter((pet) => favoriteIds.includes(pet.id));

  if (favoritePets.length === 0) {
    favoritesContainer.innerHTML = "";
    emptyMessage.style.display = "block";
    return;
  }

  emptyMessage.style.display = "none";
  favoritesContainer.innerHTML = favoritePets.map(createPetCard).join("");

  attachFavoriteEvents();
}

document.addEventListener("DOMContentLoaded", renderFavorites);
