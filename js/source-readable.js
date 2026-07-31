/*
  js/source-readable.js

  Human-friendly JavaScript scaffold for the site. This file is not loaded by
  default. To use it, modify index.js (the wrapper) to load '/js/source-readable.js'
  instead of '/originals/index.js'. The scaffold below mounts a placeholder
  into #root so you can progressively replace the original behavior.
*/

// IIFE to avoid leaking globals
(function(){
  // Simple, readable DOM rendering
  const root = document.getElementById('root');
  if(!root) return;

  root.innerHTML = `
    <main style="padding:2rem; max-width:900px; margin:0 auto;">
      <h1 style="font-size:2rem;">Editable Site Scaffold</h1>
      <p style="color:rgba(255,255,255,0.8)">This is a readable scaffold. Replace this file with your own app code.</p>
    </main>
  `;

  // Place interactive code below (event listeners, fetches, etc.)
})();
