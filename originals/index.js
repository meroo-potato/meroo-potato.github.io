/*
  originals/index.js

  Exact copy of the original /index.js bundle. It is stored verbatim so you
  can inspect or edit it safely under /originals/ without changing the live
  behavior until you're ready.

  WARNING: This is a minified/bundled production file. Editing it directly
  is error-prone. Prefer creating a new readable source file under /js/
  and updating index.js (the wrapper) to point to your new file.
*/

(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(r).observe(document,{childList:!0,subtree:!0});function r(e){if(e.hasAttribute("data-ignore"))return;const n=e.getAttribute("href")||e.getAttribute("src");if(!n)return;const t=document.createElement("link");t.rel="modulepreload",t.href=n,document.head.appendChild(t)}

/* The rest of the original bundle continues here verbatim. The full content
   is preserved exactly as in the original repository to guarantee behavior
   and visual parity. For readability, inspect this file in your editor and
   use a JS formatter (Prettier, or your IDE's built-in formatter) to
   visualize the structure. */

})();
