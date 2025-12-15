import pets from "../../assets/pet-data.json";
import { toggleFavorite, getFavoriteIds } from "../../load-pet-cards.js";






// Get pet ID from URL parameters
function getPetIdFromURL() {
 const params = new URLSearchParams(window.location.search);
 return params.get("petId");
}


// Find pet in data by ID
function getPetById(petId) {
 return pets.find((pet) => pet.id === petId);
}


// Initialize detail page
function initDetailPage() {
 const petId = getPetIdFromURL();
 if (!petId) {
   console.error("No pet ID provided");
   return;
 }


 const pet = getPetById(petId);
 if (!pet) {
   console.error("Pet not found");
   return;
 }


 renderPetDetails(pet);
 setupCarousel(pet);
 attachFavoriteButton(pet);


redirectAdoptMeButton(pet.id);


}


// Render pet details
function renderPetDetails(pet) {
 const genderIcon = pet.gender === "Male" ? "♂" : "♀";
 const isFavorite = getFavoriteIds().includes(pet.id);


 // Header
 const headerSection = document.querySelector(".pet-detail-header");
 headerSection.innerHTML = `
   <div class="pet-header-content">
     <button class="back-btn" onclick="window.history.back()" title="Go back">
       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
         <path d="M19 12H5M12 19l-7-7 7-7"/>
       </svg>
       Back
     </button>
     <div class="pet-meta">
       <span class="pet-species">${pet.species}</span>
       ${pet.urgent ? '<span class="urgent-badge">Urgent</span>' : ""}
     </div>
     <h1>${pet.name}</h1>
     <p class="pet-short-info">${genderIcon} · ${pet.age.value} ${pet.age.unit} · ${pet.breed}</p>
     <div class="pet-header-actions">
       <button class="fav-btn ${isFavorite ? "is-liked" : ""}">
         <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
           <g><path d="M457.74,170.1a30.26,30.26,0,0,0-11.16-2.1h-.4c-20.17.3-42.79,19.19-54.66,47.76-14.23,34.18-7.68,69.15,14.74,78.14a30.21,30.21,0,0,0,11.15,2.1c20.27,0,43.2-19,55.17-47.76C486.71,214.06,480.06,179.09,457.74,170.1Z" style="stroke-miterlimit:10;stroke-width:32px"/><path d="M327.6,303.48C299.8,257.35,287.8,240,256,240s-43.9,17.46-71.7,63.48c-23.8,39.36-71.9,42.64-83.9,76.07a50.91,50.91,0,0,0-3.6,19.25c0,27.19,20.8,49.2,46.4,49.2,31.8,0,75.1-25.39,112.9-25.39S337,448,368.8,448c25.6,0,46.3-22,46.3-49.2a51,51,0,0,0-3.7-19.25C399.4,346,351.4,342.84,327.6,303.48Z" style="stroke-miterlimit:10;stroke-width:32px"/><path d="M192.51,196a26.53,26.53,0,0,0,4-.3c23.21-3.37,37.7-35.53,32.44-71.85C224,89.61,203.22,64,181.49,64a26.53,26.53,0,0,0-4,.3c-23.21,3.37-37.7,35.53-32.44,71.85C150,170.29,170.78,196,192.51,196Z" style="stroke-miterlimit:10;stroke-width:32px"/><path d="M366.92,136.15c5.26-36.32-9.23-68.48-32.44-71.85a26.53,26.53,0,0,0-4-.3c-21.73,0-42.47,25.61-47.43,59.85-5.26,36.32,9.23,68.48,32.44,71.85a26.53,26.53,0,0,0,4,.3C341.22,196,362,170.29,366.92,136.15Z" style="stroke-miterlimit:10;stroke-width:32px"/><path d="M105.77,293.9c22.39-9,28.93-44,14.72-78.14C108.53,187,85.62,168,65.38,168a30.21,30.21,0,0,0-11.15,2.1c-22.39,9-28.93,44-14.72,78.14C51.47,277,74.38,296,94.62,296A30.21,30.21,0,0,0,105.77,293.9Z" style="stroke-miterlimit:10;stroke-width:32px"/></g>
         </svg>
         Add to Favorites
       </button>
       <button id='adopt-btn'  class="adopt-btn-header">Adopt Me</button>
     </div>
   </div>
 `;


 // Story section
 const storySection = document.querySelector(".pet-detail-story");
 storySection.innerHTML = `
   <div class="story-content">
     <h2>Story</h2>
     <p class="story-summary"><strong>${pet.story.summary}</strong></p>
     <p class="story-details">${pet.story.details}</p>
   </div>
 `;


 // Traits section
 const traitsSection = document.querySelector(".pet-detail-traits");
 const traitsHTML = pet.traits
   .map((trait) => `<span class="trait-tag">${trait}</span>`)
   .join("");
 traitsSection.innerHTML = `
   <div class="traits-content">
     <h2>Personality Traits</h2>
     <div class="traits-grid">${traitsHTML}</div>
   </div>
 `;


 // Health & Care section
 const healthSection = document.querySelector(".pet-detail-health");
 healthSection.innerHTML = `
   <div class="health-content">
     <h2>Health & Care</h2>
     <ul class="health-list">
       <li><span class="check">✓</span> Vaccinated: ${pet.vaccinated ? "Yes" : "No"}</li>
       <li><span class="check">✓</span> Microchip: ${pet.chip_inserted ? "Yes" : "No"}</li>
       <li><span class="check">✓</span> Spayed/Neutered: ${pet.spayedNeutered ? "Yes" : "No"}</li>
       ${pet.specialNeeds ? `<li><span class="info">ℹ</span> Special Needs: ${pet.specialNeeds}</li>` : ""}
     </ul>
   </div>
 `;


 // Urgent reason
 if (pet.urgent && pet.urgent_reason) {
   const urgentSection = document.querySelector(".pet-detail-urgent");
   urgentSection.innerHTML = `
     <div class="urgent-content">
       <h2>Why Urgent?</h2>
       <p>${pet.urgent_reason}</p>
     </div>
   `;
 }
}


// Setup image carousel
function setupCarousel(pet) {
 const galleryContainer = document.querySelector(".pet-gallery-container");
 if (pet.image_urls.length === 0) return;


 // Create main image
 const mainImageHTML = `
   <img
     class="pet-gallery-main"
     src="${pet.image_urls[0]}"
     alt="${pet.name}"
   />
 `;


 // Create thumbnails
 const thumbnailsHTML = pet.image_urls
   .map(
     (url, index) => `
   <img
     class="pet-gallery-thumb ${index === 0 ? "active" : ""}"
     src="${url}"
     alt="Image ${index + 1}"
     data-index="${index}"
   />
 `
   )
   .join("");


 galleryContainer.innerHTML = `
   <div class="gallery-main">${mainImageHTML}</div>
   <div class="gallery-thumbnails">${thumbnailsHTML}</div>
 `;


 // Attach thumbnail click handlers
 const thumbnails = galleryContainer.querySelectorAll(".pet-gallery-thumb");
 const mainImage = galleryContainer.querySelector(".pet-gallery-main");


 thumbnails.forEach((thumb) => {
   thumb.addEventListener("click", () => {
     const index = parseInt(thumb.dataset.index);
     mainImage.src = pet.image_urls[index];


     thumbnails.forEach((t) => t.classList.remove("active"));
     thumb.classList.add("active");
   });
 });
}


// Attach favorite button handler
function attachFavoriteButton(pet) {
 const favBtn = document.querySelector(".fav-btn");
 if (!favBtn) return;


 favBtn.addEventListener("click", (e) => {
   e.preventDefault();
   favBtn.classList.toggle("is-liked");


   if (favBtn.classList.contains("is-liked")) {
     favBtn.classList.add("animate");
     setTimeout(() => {
       favBtn.classList.remove("animate");
     }, 600);
   }


   toggleFavorite(pet.id);
 });
}


// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", initDetailPage);




function redirectAdoptMeButton(petId){
 const adoptBtn = document.getElementById('adopt-btn');


if(adoptBtn){
 adoptBtn.addEventListener('click', ()=>{
 window.location.href = `../Checkout/checkout.html?petId=${petId}`;
 })
}
}
