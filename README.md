# Kinetic Insurance Brokers — Website

A production-ready React site built from Kinetic Insurance Brokers Limited's
corporate profile document. Vite + React, no UI framework dependency —
hand-built design system tuned for an institutional insurance/risk-advisory
brand (see `TASTE.md` for the design rationale).

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build      # production build -> dist/
npm run preview    # serve the production build locally
```

## Structure

```
src/
  data/content.js       All real copy from the corporate profile,
                         in one place — edit this file to update content.
  components/            One component + one scoped CSS file per section:
    Header, Hero, Philosophy (vision/mission/values), Services,
    RiskExposures, ValueProps, CoreDuties, Products, Board, CTA, Footer
  index.css               Design tokens (color, type, spacing) and base styles
  assets/logo.png          The firm's mark, extracted from the source document
```

## Design system

- **Colors** — `--ink` (#000098, sampled directly from the firm's logo),
  `--ink-deep` (near-black navy for dark sections/text), `--paper` (warm
  off-white), `--gold` (restrained brass accent for numbering/emphasis).
- **Type** — Fraunces (serif, display/headlines) + Inter (sans, body/UI),
  loaded via Google Fonts in `index.css`.
- **Content is real** — every numbered list (services, risk categories,
  value propositions, broker duties, products, board bios) uses the actual
  content and actual counts from the source document; nothing was invented
  to fill a template shape.

## Editing content

Everything text-based lives in `src/data/content.js` as plain exported
objects/arrays — update names, bios, products, or contact details there
without touching any component.

## Deploying

`npm run build` outputs a static `dist/` folder — deploy it to Vercel,
Netlify, Cloudflare Pages, or any static host / your own server.
