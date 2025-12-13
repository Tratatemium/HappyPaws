const e=`
  <div class="toggle" id="themeToggle">
    <div class="dot"></div>
  </div>`;document.querySelector(".theme-button").innerHTML=e;const t=document.getElementById("themeToggle");t.addEventListener("click",()=>{document.body.dataset.theme=document.body.dataset.theme==="dark"?"light":"dark"});
