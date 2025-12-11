const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = '../../components/Footer/footer.css';
document.head.appendChild(link);

fetch('../../components/Footer/footer.html')
    .then(response => response.text())
    .then(html => {
        document.querySelector("footer").innerHTML = html;
    });