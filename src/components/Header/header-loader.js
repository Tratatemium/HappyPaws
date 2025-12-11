const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = '../../components/Header/header.css';
document.head.appendChild(link);

fetch('../../components/Header/header.html')
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML('afterbegin', html);
    
    // Load the JavaScript AFTER the HTML is inserted
    const script = document.createElement('script');
    script.type = 'module';
    script.src = '../../components/Header/header.js';    
    document.body.appendChild(script);
  })
  .catch(err => console.error('Header yüklenemedi:', err));
