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