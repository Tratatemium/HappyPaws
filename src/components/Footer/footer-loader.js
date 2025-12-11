const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'footer.css';
document.head.appendChild(link);

fetch('footer.html')
    .then(response => response.text())
    .then(html => {
        document.querySelector("footer").innerHTML = html;
    });