# Meroo-potato - Cleaned site structure

This branch reorganizes the repository into a clearer structure while preserving exact visual and functional parity with the original site.

What changed
- index.html — cleaned, annotated, and now points to css/style.css and js/app.js as wrappers.
- css/style.css — small wrapper that imports the original /index.css. Add your CSS overrides here.
- js/app.js — small wrapper that dynamically loads the original /index.js as a module. Replace if you want a different entrypoint.

Files left untouched
- /index.css and /index.js are left in place and are still used (imported/loaded) to guarantee the site looks and behaves exactly like before.
- /favicon.svg, /CNAME, /robots.txt, and /assets/ remain unchanged.

How to add your own content
- Edit index.html's <div id="root"></div> to include static content, or modify/replace js/app.js to bootstrap your own client-side code.
- For styles: either edit index.css directly or remove the @import in css/style.css and write your styles there.

Preview locally
- You can run a simple static server from the repo root. Example using Python 3:

  python -m http.server 8000

  Then open http://localhost:8000 in your browser.

Branch
- All changes are committed to the branch: refactor-clean-site
