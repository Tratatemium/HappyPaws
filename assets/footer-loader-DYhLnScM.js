fetch("/src/components/footer/footer.html").then(e=>e.text()).then(e=>{document.querySelector("footer").innerHTML=e});
