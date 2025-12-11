// const link = document.createElement('link');
// link.rel = 'stylesheet';
// link.href = '../../components/Header/header.css';
// document.head.appendChild(link);

// fetch('../../components/Header/header.html')
//   .then(res => res.text())
//   .then(html => {
//     document.body.insertAdjacentHTML('afterbegin', html);
    
//     // Load the JavaScript AFTER the HTML is inserted
//     const script = document.createElement('script');
//     script.type = 'module';
//     script.src = '../../components/Header/header.js';    
//     document.body.appendChild(script);
//   })
//   .catch(err => console.error('Header yüklenemedi:', err));


import headerHtml from './header.html?raw';
import './header.css';
import initHeader from './header.js';

document.body.insertAdjacentHTML('afterbegin', headerHtml);

// ---- Run the header JS after the HTML is added ----
if (typeof initHeader === 'function') {
  initHeader();
} else {
  console.warn("header.js did not export a default function.");
}