fetch('/src/components/Header/header.html')
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML('afterbegin', html);

    const script = document.createElement('script');
    script.src = '/src/components/Header/header.js';
    script.type = 'module';
    document.body.appendChild(script);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/src/components/Header/header.css';
    document.head.appendChild(link);
  })
  .catch(err => console.error('Header yüklenemedi:', err));
