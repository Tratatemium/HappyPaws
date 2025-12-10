// --- Favorites helpers ---
const FAVORITES_STORAGE_KEY = "favoritePetIds";

export function getFavoriteIds() {
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

export function toggleFavorite(petId) {
  const ids = getFavoriteIds();
  const index = ids.indexOf(petId);

  if (index === -1) {
    ids.push(petId);
  } else {
    ids.splice(index, 1);
  }

  saveFavoriteIds(ids);
}

function isFavorite(petId) {
  return getFavoriteIds().includes(petId);
}

export function createPetCard(pet) {
  const isUrgent = pet.urgent === true;

  const liked = isFavorite(pet.id);

  // gender icon
  const genderIcon = pet.gender === "Male" ? "♂" : "♀";

  return `
    <article class="pet-card ${isUrgent ? "urgent" : ""} ${pet.species}" data-pet-id="${pet.id}">
      <div class="pet-image">
        <img src="${pet.image_urls[0]}" alt="${pet.name}">
        ${isUrgent ? `<span class="urgent-badge">Urgent</span>` : ""}
        <div class="paw-badge ${liked ? "is-liked" : ""}">
          <img src="${
            liked
              ? "../../assets/icons/paw-liked-red-icon.png"
              : "../../assets/icons/paw-like-icon.png"
          }">
        </div>
        <div class="image-gradient"></div>
        <div class="info info--overlay">
          <h3>${pet.name}</h3>
          <p>${genderIcon} · ${pet.age.value} ${pet.age.unit}</p>
        </div>
      </div>
    </article>
  `;
}

// Laura: toggle paw like icon on click for both urgent paw badges and fav buttons
export function attachLikeEvents() {
  const favButtons = document.querySelectorAll(".paw-badge, .fav-btn");

  favButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const img = btn.querySelector("img");
      const card = btn.closest(".pet-card");
      const petId = card?.dataset.petId;

      const isLiked = btn.classList.toggle("is-liked");

      img.src = isLiked
        ? "../../assets/icons/paw-liked-red-icon.png"
        : "../../assets/icons/paw-like-icon.png";

      if (petId) {
        toggleFavorite(petId);
      }
    });
  });
}