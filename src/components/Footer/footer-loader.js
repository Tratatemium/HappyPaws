fetch('/src/components/footer/footer.html')
    .then(response => response.text())
    .then(html => {
        document.querySelector("footer").innerHTML = html;
    });