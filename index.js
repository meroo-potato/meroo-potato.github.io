(function(){
  // Wrapper index.js — human-readable and safe to edit.
  // This file intentionally keeps behavior identical by loading the original bundle
  // which is stored at /originals/index.js (an exact copy of the previous index.js).
  // Edit this file to add small bootstrapping logic. To change the app, replace
  // /originals/index.js with your own implementation (but ensure parity).

  // Create a module script element and append it to the document head.
  const script = document.createElement('script');
  script.type = 'module';
  script.crossOrigin = 'anonymous';
  script.src = '/originals/index.js';
  document.head.appendChild(script);

  // Helpful note for editing:
  // - If you want to develop your own readable JS, create /js/source.js and
  //   change script.src above to point to '/js/source.js'. Keep the originals
  //   in /originals/ as a backup until you're confident changes preserve parity.
})();
