import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css                  */const i=document.getElementById("toggle"),r=document.getElementById("submit-adoption");document.querySelector("form");const s=document.querySelectorAll(".input");document.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("div");t.classList.add("generated-terms"),t.classList.add("hidden");const e=document.querySelector(".term-list");t.innerHTML=`     <div class='ul-list'>
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
          
        `,i.addEventListener("click",()=>{i.classList.toggle("active");const o=e.querySelector(".generated-terms");o?o.classList.toggle("hidden"):(e.innerHTML=t,i.classList.toggle("active"))}),e.appendChild(t)});r.addEventListener("click",t=>{let e=!0;document.querySelectorAll(".error-text").forEach(o=>{o.textContent=""}),s.forEach(o=>{const l=document.getElementById(o.id+"-error");if(o.value.trim()===""){t.preventDefault(),e=!1;const n=document.createElement("p");n.classList.add("error-text"),n.textContent=`PLease fill in your ${o.id.toUpperCase()} `,n.style.color="red",l&&l.appendChild(n)}e&&(console.log("valid"),t.preventDefault(),a("Application Submitted Successfully!"))})});function a(t){const e=document.getElementById("toast"),o=document.createElement("p");e&&(e.textContent=t,e.classList.add("show"),e.style.display="block",e.appendChild(o),setTimeout(()=>{e.classList.remove("show"),e.style.display="none"},3e3))}
