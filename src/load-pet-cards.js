export function createPetCard(pet) {
  const isUrgent = pet.urgent === true;

  return `
    <article class="pet-card ${isUrgent ? 'urgent' : ''} ${pet.species}">
      <div class="pet-image">
        <img src="${pet.image_urls[0]}" alt="${pet.name}">
        ${isUrgent ? `<span class="urgent-badge">Urgent</span>` : ''}
        <div class="paw-badge">
          <img src="../../assets/icons/paw-like-icon.png">
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

      const isLiked = btn.classList.toggle("is-liked");

      img.src = isLiked
      ? "../../assets/icons/paw-liked-red-icon.png"
      : "../../assets/icons/paw-like-icon.png";
    });
  });
}