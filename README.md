# Routine No. 1

A quiet single-screen push-up set counter for daily repetitions. The app is local-only, mobile-first, and inspired by vintage flip clocks with a warm Wes Anderson-leaning palette.

## Features

- Flip-clock style counter with a smooth 260ms transition
- Plus and minus controls with touch-friendly sizing
- Count cannot go below zero
- Reset control is separated, muted, and disabled at zero
- Local persistence with `localStorage`
- React + Vite with no backend and no database
- GitHub Pages deployment scripts included

## Getting Started

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## GitHub Pages Deployment

This project uses `gh-pages` and a Vite `base` that automatically reads the repository name from `GITHUB_REPOSITORY`. For manual deployments, it falls back to the package name, `routine-number-one`.

To deploy manually:

```bash
npm run deploy
```

The deploy script builds the app and publishes `dist` to the `gh-pages` branch.

If your Pages URL uses a custom domain or a non-repository path, set `VITE_BASE_PATH` before building or update `base` in `vite.config.js`.
