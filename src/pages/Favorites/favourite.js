import pets from "../../assets/pet-data.json";

const FAVORITES_STORAGE_KEY = "favoritePetIds";

function getFavoriteIds() {
  try {
    const stored = localStorage.getItem(FAVORITES_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveFavoriteIds(ids) {
  localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(ids));
}

function toggleFavorite(petId) {
  const ids = getFavoriteIds();
  const index = ids.indexOf(petId);

  if (index === -1) {
    ids.push(petId);
  } else {
    ids.splice(index, 1);
  }

  saveFavoriteIds(ids);
}

function createPetCard(pet) {
  const isUrgent = pet.urgent === true;

  return `
    <article class="pet-card ${isUrgent ? "urgent" : ""}" data-pet-id="${
    pet.id
  }">
      <div class="pet-image">
        <img src="${pet.image_urls[0]}" alt="${pet.name}">
        ${isUrgent ? `<span class="urgent-badge">Urgent</span>` : ""}
        <div class="paw-badge is-liked">
          <img src="../../assets/icons/paw-liked-red-icon.png" alt="Remove from favorites">
        </div>
        <div class="image-gradient"></div>
        <div class="info info--overlay">
          <h3>${pet.name}</h3>
          <p>${pet.breed} · ${pet.age.value} ${pet.age.unit}</p>
        </div>
      </div>
    </article>
  `;
}

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
