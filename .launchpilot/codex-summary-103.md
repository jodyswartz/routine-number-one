Implemented `Routine No. 1` as a complete React + Vite micro app.

What changed:
- Added Vite/React project scaffold: `index.html`, `package.json`, `vite.config.js`, `src/`
- Built reusable `FlipCounter` and `Button` components
- Added localStorage persistence with counter floor at zero
- Added 260ms flip animation with reduced-motion support
- Added warm cream/dusty pink/mustard/burgundy styling via CSS modules
- Added GitHub Pages deployment setup with `gh-pages` and production base handling
- Expanded `README.md` with install, build, preview, and deploy instructions

Verification:
- `npm run build` passes
- `npm audit` passes with `0 vulnerabilities`
- Dev server is running at `http://localhost:5173/`

I left the pre-existing untracked `.launchpilot/` files alone.