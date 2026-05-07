## Aether — Luxury Fine‑Dining Restaurant (Next.js)

## Disclaimer (Portfolio Project)
- This repository is a **portfolio/demo project** for showcasing UI/UX and frontend engineering.
- The restaurant, branding, and content are **fictional** and for demonstration only.
- Not affiliated with or endorsed by the Michelin Guide or any other brand.

## Getting Started

### Prerequisites
- Node.js (LTS recommended)
- npm (this repo includes `package-lock.json`)

### Install
```bash
npm install
```

### Run (dev)
```bash
npm run dev
```
Open `http://localhost:3000`.

### Build / Start (production)
```bash
npm run build
npm run start
```

### Lint
```bash
npm run lint
```

## Notes
- The hero and desktop sections use GSAP/ScrollTrigger; mobile uses lightweight viewport-reveal animations.
- Gallery visuals are bundled in `public/` (no external image hotlinks).

## Project Structure
- `app/` — Next.js App Router pages/layout
- `components/` — UI sections
- `public/` — static assets

## Troubleshooting (Windows PowerShell)
If `npm` fails with "running scripts is disabled", use `npm.cmd`:
```bash
npm.cmd run dev
npm.cmd run build
npm.cmd run start
```

## Tech
- Next.js 16 (Turbopack)
- React 19
- Tailwind CSS v4
