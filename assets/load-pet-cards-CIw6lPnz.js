const y="modulepreload",H=function(e){return"/HappyPaws/"+e},h={},k=function(t,r,d){let c=Promise.resolve();if(r&&r.length>0){let g=function(s){return Promise.all(s.map(i=>Promise.resolve(i).then(l=>({status:"fulfilled",value:l}),l=>({status:"rejected",reason:l}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),n=o?.nonce||o?.getAttribute("nonce");c=g(r.map(s=>{if(s=H(s),s in h)return;h[s]=!0;const i=s.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${l}`))return;const a=document.createElement("link");if(a.rel=i?"stylesheet":y,i||(a.as="script"),a.crossOrigin="",a.href=s,n&&a.setAttribute("nonce",n),document.head.appendChild(a),i)return new Promise((f,w)=>{a.addEventListener("load",f),a.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${s}`)))})}))}function v(o){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=o,window.dispatchEvent(n),!n.defaultPrevented)throw o}return c.then(o=>{for(const n of o||[])n.status==="rejected"&&v(n.reason);return t().catch(v)})},C=`<header class="header">\r
    <nav class="navbar">\r
        <a href="../../../index.html" class="logo">\r
            <img src="/HappyPaws/icons/paw-like-icon.png" alt="HappyPaws Logo">\r
            <h1>Happy Paws</h1>\r
        </a>\r
        <div class="header-right">\r
            <span class="theme-button"></span>\r
            <div class="burger-menu">\r
                <span></span>\r
                <span></span>\r
                <span></span>\r
            </div>\r
        </div>\r
    </nav>\r
    <div class="off-screen-menu">\r
        <button class="close-menu"></button>\r
        <ul>\r
            <li>\r
                <a href="../../pages/Gallery/gallery.html">\r
                    <img src="/HappyPaws/icons/home.svg" alt="Home" class="icon">\r
                    Home\r
                </a>\r
            </li>\r
            <li>\r
                <a href="">\r
                    <img src="/HappyPaws/icons/gallery.svg" alt="Gallery" class="icon">\r
                    Gallery\r
                </a>\r
            </li>\r
            <li>\r
                <a href="../../pages/Favorites/favorites.html">\r
                    <img src="/HappyPaws/icons/heart.svg" alt="Favorites" class="icon">\r
                    Favorites\r
                </a>\r
            </li>\r
            <li>\r
                <a href="">\r
                    <img src="/HappyPaws/icons/dog.svg" alt="Adopt" class="icon">\r
                    Adopt\r
                </a>\r
            </li>\r
            <li>\r
                <a href="../../pages/Chat/chat.html">\r
                    <img src="/HappyPaws/icons/chat.svg" alt="Chat" class="icon">\r
                    Chat\r
                </a>\r
            </li>\r
        </ul>\r
    </div>\r
</header>`;function m(){const e=document.querySelector(".burger-menu"),t=document.querySelector(".off-screen-menu"),r=document.querySelector(".close-menu");t.classList.remove("open"),e.addEventListener("click",()=>{t.classList.add("open")}),r.addEventListener("click",()=>{t.classList.remove("open")})}document.body.insertAdjacentHTML("afterbegin",C);typeof m=="function"?m():console.warn("header.js did not export a default function.");k(()=>import("./lightdark-BG4u5sHh.js"),[]);const Z=`
<a href="../Landing/landing.html" class="footer-button home-button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
  <span>Home</span>
</a>
<a href="../Gallery/gallery.html" class="footer-button galley-button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z"/></svg> 
  <span>Gallery</span>
</a>
<a href="../Favorites/favorites.html" class="footer-button favorites-button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
  <span>Favorites</span>
</a>
<a href="../Chat/chat.html" class="footer-button chat-button">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>
  <span>Chat</span>
</a>
<span class="theme-button">
          <script type="module" src="../accessibility-practices/lightdark.js"><\/script>
      </span>
`;document.querySelector(".sidebar").innerHTML=Z;const u="favoritePetIds";function p(){try{const e=localStorage.getItem(u);return e?JSON.parse(e):[]}catch{return[]}}function b(e){localStorage.setItem(u,JSON.stringify(e))}function q(e){const t=p(),r=t.indexOf(e);r===-1?t.push(e):t.splice(r,1),b(t)}function L(e){return p().includes(e)}function S(e){const t=e.urgent===!0,r=L(e.id),d=e.gender==="Male"?"♂":"♀";return`
    <article class="pet-card ${t?"urgent":""} ${e.species}" data-pet-id="${e.id}">
      <div class="pet-image">
        <img src="${e.image_urls[0]}" alt="${e.name}">
        ${t?'<span class="urgent-badge">Urgent</span>':""}
        <div class="paw-badge ${r?"is-liked":""}">
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
          <h3>${e.name}</h3>
          <p>${d} · ${e.age.value} ${e.age.unit}</p>
        </div>
      </div>
    </article>
  `}function x(){document.querySelectorAll(".paw-badge, .fav-btn").forEach(t=>{t.addEventListener("click",r=>{r.stopPropagation(),t.querySelector("img");const c=t.closest(".pet-card")?.dataset.petId;t.classList.toggle("is-liked")&&(t.classList.add("animate"),setTimeout(()=>{t.classList.remove("animate")},600)),c&&q(c)})})}function E(){document.querySelectorAll(".pet-card").forEach(t=>{t.addEventListener("click",()=>{const r=t.dataset.petId;r&&(window.location.href=`../Pet-Card-Detail/pet-card-detail.html?petId=${r}`)}),t.style.cursor="pointer"})}export{x as a,E as b,S as c,p as g,q as t};
