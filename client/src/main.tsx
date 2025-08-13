
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx'
import './index.css'

// Add ripple effect for buttons
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const el = target.closest('.fx-rippleBlue');
  if (!el) return;
  
  const r = document.createElement('span');
  r.className = 'r';
  const rect = el.getBoundingClientRect();
  r.style.left = (e.clientX - rect.left) + 'px';
  r.style.top = (e.clientY - rect.top) + 'px';
  el.appendChild(r);
  setTimeout(() => r.remove(), 500);
});

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
