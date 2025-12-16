import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css                  */import{g as d,t as u}from"./load-pet-cards-DT6Cozp3.js";import"./footer-loader-Bpclrq5y.js";import{p as h}from"./pet-data-CYvtR2xC.js";function m(){return new URLSearchParams(window.location.search).get("petId")}function p(t){return h.find(e=>e.id===t)}function g(){const t=m();if(!t){console.error("No pet ID provided");return}const e=p(t);if(!e){console.error("Pet not found");return}v(e),y(e),k(e),f(e.id)}function v(t){const e=t.gender==="Male"?"♂":"♀",i=d().includes(t.id),o=document.querySelector(".pet-detail-header");o.innerHTML=`
   <div class="pet-header-content">
     <button class="back-btn" onclick="window.history.back()" title="Go back">
       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
         <path d="M19 12H5M12 19l-7-7 7-7"/>
       </svg>
       Back
     </button>
     <div class="pet-meta">
       <span class="pet-species">${t.species}</span>
       ${t.urgent?'<span class="urgent-badge">Urgent</span>':""}
     </div>
     <h1>${t.name}</h1>
     <p class="pet-short-info">${e} · ${t.age.value} ${t.age.unit} · ${t.breed}</p>
     <div class="pet-header-actions">
       <button class="fav-btn ${i?"is-liked":""}">
         <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
           <g><path d="M457.74,170.1a30.26,30.26,0,0,0-11.16-2.1h-.4c-20.17.3-42.79,19.19-54.66,47.76-14.23,34.18-7.68,69.15,14.74,78.14a30.21,30.21,0,0,0,11.15,2.1c20.27,0,43.2-19,55.17-47.76C486.71,214.06,480.06,179.09,457.74,170.1Z" style="stroke-miterlimit:10;stroke-width:32px"/><path d="M327.6,303.48C299.8,257.35,287.8,240,256,240s-43.9,17.46-71.7,63.48c-23.8,39.36-71.9,42.64-83.9,76.07a50.91,50.91,0,0,0-3.6,19.25c0,27.19,20.8,49.2,46.4,49.2,31.8,0,75.1-25.39,112.9-25.39S337,448,368.8,448c25.6,0,46.3-22,46.3-49.2a51,51,0,0,0-3.7-19.25C399.4,346,351.4,342.84,327.6,303.48Z" style="stroke-miterlimit:10;stroke-width:32px"/><path d="M192.51,196a26.53,26.53,0,0,0,4-.3c23.21-3.37,37.7-35.53,32.44-71.85C224,89.61,203.22,64,181.49,64a26.53,26.53,0,0,0-4,.3c-23.21,3.37-37.7,35.53-32.44,71.85C150,170.29,170.78,196,192.51,196Z" style="stroke-miterlimit:10;stroke-width:32px"/><path d="M366.92,136.15c5.26-36.32-9.23-68.48-32.44-71.85a26.53,26.53,0,0,0-4-.3c-21.73,0-42.47,25.61-47.43,59.85-5.26,36.32,9.23,68.48,32.44,71.85a26.53,26.53,0,0,0,4,.3C341.22,196,362,170.29,366.92,136.15Z" style="stroke-miterlimit:10;stroke-width:32px"/><path d="M105.77,293.9c22.39-9,28.93-44,14.72-78.14C108.53,187,85.62,168,65.38,168a30.21,30.21,0,0,0-11.15,2.1c-22.39,9-28.93,44-14.72,78.14C51.47,277,74.38,296,94.62,296A30.21,30.21,0,0,0,105.77,293.9Z" style="stroke-miterlimit:10;stroke-width:32px"/></g>
         </svg>
         Add to Favorites
       </button>
       <button id='adopt-btn'  class="adopt-btn-header">Adopt Me</button>
     </div>
   </div>
 `;const n=document.querySelector(".pet-detail-story");n.innerHTML=`
   <div class="story-content">
     <h2>Story</h2>
     <p class="story-summary"><strong>${t.story.summary}</strong></p>
     <p class="story-details">${t.story.details}</p>
   </div>
 `;const c=document.querySelector(".pet-detail-traits"),s=t.traits.map(l=>`<span class="trait-tag">${l}</span>`).join("");c.innerHTML=`
   <div class="traits-content">
     <h2>Personality Traits</h2>
     <div class="traits-grid">${s}</div>
   </div>
 `;const a=document.querySelector(".pet-detail-health");a.innerHTML=`
   <div class="health-content">
     <h2>Health & Care</h2>
     <ul class="health-list">
       <li><span class="check">✓</span> Vaccinated: ${t.vaccinated?"Yes":"No"}</li>
       <li><span class="check">✓</span> Microchip: ${t.chip_inserted?"Yes":"No"}</li>
       <li><span class="check">✓</span> Spayed/Neutered: ${t.spayedNeutered?"Yes":"No"}</li>
       ${t.specialNeeds?`<li><span class="info">ℹ</span> Special Needs: ${t.specialNeeds}</li>`:""}
     </ul>
   </div>
 `;const r=document.querySelector(".pet-detail-urgent");t.urgent&&t.urgent_reason?r.innerHTML=`
      <div class="urgent-content">
        <h2>Why Urgent?</h2>
        <p>${t.urgent_reason}</p>
      </div>
    `:r.classList.add("hidden")}function y(t){const e=document.querySelector(".pet-gallery-container");if(t.image_urls.length===0)return;const i=`
   <img
     class="pet-gallery-main"
     src="${t.image_urls[0]}"
     alt="${t.name}"
   />
 `,o=t.image_urls.map((s,a)=>`
   <img
     class="pet-gallery-thumb ${a===0?"active":""}"
     src="${s}"
     alt="Image ${a+1}"
     data-index="${a}"
   />
 `).join("");e.innerHTML=`
   <div class="gallery-main">${i}</div>
   <div class="gallery-thumbnails">${o}</div>
 `;const n=e.querySelectorAll(".pet-gallery-thumb"),c=e.querySelector(".pet-gallery-main");n.forEach(s=>{s.addEventListener("click",()=>{const a=parseInt(s.dataset.index);c.src=t.image_urls[a],n.forEach(r=>r.classList.remove("active")),s.classList.add("active")})})}function k(t){const e=document.querySelector(".fav-btn");e&&e.addEventListener("click",i=>{i.preventDefault(),e.classList.toggle("is-liked"),e.classList.contains("is-liked")&&(e.classList.add("animate"),setTimeout(()=>{e.classList.remove("animate")},600)),u(t.id)})}document.addEventListener("DOMContentLoaded",g);function f(t){const e=document.getElementById("adopt-btn");e&&e.addEventListener("click",()=>{window.location.href=`../Checkout/checkout.html?petId=${t}`})}
