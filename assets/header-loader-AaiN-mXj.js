const s=`<header class="header">\r
<nav class="navbar">\r
    <a href="../../../index.html" class="logo">\r
        <img src="/HappyPaws/icons/paw-like-icon.png" alt="HappyPaws Logo">\r
        <h1>Happy Paws</h1>\r
    </a>\r
    <div class="burger-menu">\r
    <span></span>\r
    <span></span>\r
    <span></span>\r
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
        <a href="#">\r
        <img src="/HappyPaws/icons/heart.svg" alt="Favorites" class="icon">\r
        Favorites\r
        </a>\r
    </li>\r
    <li>\r
        <a href="#">\r
        <img src="/HappyPaws/icons/dog.svg" alt="Adopt" class="icon">\r
        Adopt\r
        </a>\r
    </li>\r
    <li>\r
        <a href="#">\r
        <img src="/HappyPaws/icons/chat.svg" alt="Chat" class="icon">\r
        Chat\r
        </a>\r
    </li>\r
    </ul>\r
</div>\r
</header>`;function r(){const a=document.querySelector(".burger-menu"),n=document.querySelector(".off-screen-menu"),e=document.querySelector(".close-menu");n.classList.remove("open"),a.addEventListener("click",()=>{n.classList.add("open")}),e.addEventListener("click",()=>{n.classList.remove("open")})}document.body.insertAdjacentHTML("afterbegin",s);typeof r=="function"?r():console.warn("header.js did not export a default function.");
