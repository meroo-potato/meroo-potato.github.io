/*
  js/app.js (wrapper)

  - This small module dynamically loads the original /index.js bundle as a module.
  - Keeping the original bundle unchanged preserves exact visual and functional parity.
  - If you want to replace the app with your own source, change this file to import your script instead, or update index.html to point to your entry file.
*/

// Dynamically append the original module script so the bundle behavior remains identical.
const script = document.createElement('script');
script.type = 'module';
// Keep crossorigin to match the original loading behavior
script.crossOrigin = 'anonymous';
script.src = '/index.js';
// Append to head so it executes with the same timing as an inline module tag
document.head.appendChild(script);
