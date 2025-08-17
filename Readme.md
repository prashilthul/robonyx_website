# Robonyx Website

A modern web landing experience for the Robonyx (comET) club featuring smooth motion, interactive 3D, and modular sections.

## Tech Stack
- Next.js (App Router) + React
- TypeScript
- Tailwind CSS (utility styling)
- GSAP (timeline + entrance animations)
- Custom cursor + section reveal logic
- Spline 3D scene (embedded via `<spline-viewer>`)
- AOS (progressive scroll fade/zoom on static HTML variant)

## 3D & Animation
- Hero 3D model loaded from Spline CDN (lightweight runtime viewer).
- GSAP orchestrates navbar + hero staggered entrance via refs.
- Custom cursor component (spin + target highlighting).
- Additional scroll polish from AOS in the static HTML prototype (`index.html`).

## Structure (key)
- /app/page.tsx: Main composed landing (Next.js version).
- /components/*: Section + UI building blocks (Hero, Timeline, Bento, etc.).
- /index.html + style.css: Original static prototype.
- /public/icons, assets, and Spline runtime (loaded via external script).

## Getting Started
```bash
pnpm install        # or npm / yarn
pnpm dev            # start local dev server
pnpm build && pnpm start
```

## Customization
- Replace Spline scene: update url prop on <spline-viewer>.
- Adjust animation timing: edit GSAP timelines in components using refs.
- Tailwind design tokens: configure in tailwind.config.js (not shown here).

## Deployment
Any Node-hosting or static export friendly platform (e.g. Vercel). Ensure external Spline + AOS scripts are allowed.

## License
Internal / club use (add a license if broader distribution is intended).
