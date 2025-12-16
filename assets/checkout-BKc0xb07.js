import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css                  */import{p as a}from"./pet-data-ule5Q2b5.js";const i=document.getElementById("toggle"),s=document.getElementById("submit-adoption");document.querySelector("form");const l=document.querySelectorAll(".input");function c(){return new URLSearchParams(window.location.search).get("petId")}function d(e){return a.find(t=>t.id===e)}function p(e){const t=document.querySelector(".pet-card");e&&(t.innerHTML=`
   <img src="${e.image_urls[0]}" alt="${e.name}" class="checkout-pet-img" />


   <div class="pet-info">
     <h3>${e.name}</h3>
     <p>${e.gender} , ${e.age.value} ${e.age.unit}</p>
     <p>${e.breed}</p>
     <p class="fee"> Loaction : Stockholm </strong></p>
   </div>
 `)}document.addEventListener("DOMContentLoaded",()=>{const e=document.createElement("div");e.classList.add("generated-terms"),e.classList.add("hidden");const t=document.querySelector(".term-list");e.innerHTML=`     <div class='ul-list'>
       <p> By adopting a pet from HappyPaws, you agree to:</p>
       <ul>
<li>
Provide proper veterinary care throughout the pet's life </li>
<li>
Keep the pet indoors and provide a safe environment </li>


<li>Never abandon, abuse, or neglect the animal</li>
<li>Spay/neuter the pet if not already done (age appropriate)</li>
 <li>Provide adequate food, water, shelter, and love</li>
<li>Allow HappyPaws to conduct follow-up welfare checks</li>
<li>Return the pet to HappyPaws if unable to care for them </li</ul>
<p>Adoption fee: 1500 SEK (includes vaccinations, microchip, and spay/neuter)*</p>
           </div>


 <div class='checkbox-container'>
   <input id="checkbox"  title="checkbox" type="checkbox" required/>
   <p>I accept the terms and conditions of adoption and understand the responsibilities involved in pet ownership </p>
      </div>
        
       `,i.addEventListener("click",()=>{i.classList.toggle("active");const n=t.querySelector(".generated-terms");n?n.classList.toggle("hidden"):(t.innerHTML=e,i.classList.toggle("active"))});const o=c();if(!o){console.error("No pet ID in URL");return}const r=d(o);if(!r){console.error("Pet not found");return}p(r),t.appendChild(e)});s.addEventListener("click",e=>{let t=!0;document.querySelectorAll(".error-text").forEach(o=>{o.textContent=""}),l.forEach(o=>{const r=document.getElementById(o.id+"-error");if(o.value.trim()===""){e.preventDefault(),t=!1;const n=document.createElement("p");n.classList.add("error-text"),n.textContent=`PLease fill in your ${o.id.toUpperCase()} `,n.style.color="red",r&&r.appendChild(n)}t&&(console.log("valid"),e.preventDefault(),u("Application Submitted Successfully!"))})});function u(e){const t=document.getElementById("toast"),o=document.createElement("p");t&&(t.textContent=e,t.classList.add("show"),t.style.display="block",t.appendChild(o),setTimeout(()=>{t.classList.remove("show"),t.style.display="none"},3e3))}
