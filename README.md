## Aether — Luxury Michelin Restaurant (Next.js)

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
- `public/` — SVG assets

## Troubleshooting (Windows PowerShell)
If `npm` fails with “running scripts is disabled”, use `npm.cmd`:
```bash
npm.cmd run dev
npm.cmd run build
npm.cmd run start
```

## Tech
- Next.js 16 (Turbopack)
- React 19
- Tailwind CSS v4
