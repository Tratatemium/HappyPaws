// --- Favorites helpers ---
const FAVORITES_STORAGE_KEY = "favoritePetIds";
import pawRedIcon from '/icons/paw-outline-red.svg';
import pawIcon from '/icons/paw-outline.svg';

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
          <svg width="800px" height="800px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier">
            <path d="M457.74,170.1a30.26,30.26,0,0,0-11.16-2.1h-.4c-20.17.3-42.79,19.19-54.66,47.76-14.23,34.18-7.68,69.15,14.74,78.14a30.21,30.21,0,0,0,11.15,2.1c20.27,0,43.2-19,55.17-47.76C486.71,214.06,480.06,179.09,457.74,170.1Z" style="stroke-miterlimit:10;stroke-width:32px"/>
            <path d="M327.6,303.48C299.8,257.35,287.8,240,256,240s-43.9,17.46-71.7,63.48c-23.8,39.36-71.9,42.64-83.9,76.07a50.91,50.91,0,0,0-3.6,19.25c0,27.19,20.8,49.2,46.4,49.2,31.8,0,75.1-25.39,112.9-25.39S337,448,368.8,448c25.6,0,46.3-22,46.3-49.2a51,51,0,0,0-3.7-19.25C399.4,346,351.4,342.84,327.6,303.48Z" style="stroke-miterlimit:10;stroke-width:32px"/>
            <path d="M192.51,196a26.53,26.53,0,0,0,4-.3c23.21-3.37,37.7-35.53,32.44-71.85C224,89.61,203.22,64,181.49,64a26.53,26.53,0,0,0-4,.3c-23.21,3.37-37.7,35.53-32.44,71.85C150,170.29,170.78,196,192.51,196Z" style="stroke-miterlimit:10;stroke-width:32px"/>
            <path d="M366.92,136.15c5.26-36.32-9.23-68.48-32.44-71.85a26.53,26.53,0,0,0-4-.3c-21.73,0-42.47,25.61-47.43,59.85-5.26,36.32,9.23,68.48,32.44,71.85a26.53,26.53,0,0,0,4,.3C341.22,196,362,170.29,366.92,136.15Z" style="stroke-miterlimit:10;stroke-width:32px"/>
            <path d="M105.77,293.9c22.39-9,28.93-44,14.72-78.14C108.53,187,85.62,168,65.38,168a30.21,30.21,0,0,0-11.15,2.1c-22.39,9-28.93,44-14.72,78.14C51.47,277,74.38,296,94.62,296A30.21,30.21,0,0,0,105.77,293.9Z" style="stroke-miterlimit:10;stroke-width:32px"/>
            </g>
          </svg>
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
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent triggering card click
      const img = btn.querySelector("img");
      const card = btn.closest(".pet-card");
      const petId = card?.dataset.petId;

      const isLiked = btn.classList.toggle("is-liked");

      if (isLiked) {
        btn.classList.add("animate");
        setTimeout(() => {
          btn.classList.remove("animate");
        }, 600);
      }     

      if (petId) {
        toggleFavorite(petId);
      }
    });
  });
}

// -------------------------------- takes to pet detail page on --> click
export function attachCardClickEvents() {
  const cards = document.querySelectorAll(".pet-card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const petId = card.dataset.petId;
      if (petId) {
        window.location.href = `../Pet-Card-Detail/pet-card-detail.html?petId=${petId}`;
      }
    });

    // Add pointer style
    card.style.cursor = "pointer";
  });
}