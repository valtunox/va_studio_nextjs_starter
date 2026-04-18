<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 15" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind v4" />
  <img src="https://img.shields.io/badge/App_Router-Server_Components-8B5CF6?style=for-the-badge" alt="App Router" />
  <img src="https://img.shields.io/badge/Studio_Builder-Ready-8B5CF6?style=for-the-badge" alt="Studio Builder Ready" />
  <img src="https://img.shields.io/badge/AI-Ready-F59E0B?style=for-the-badge" alt="AI Ready" />
</p>

<h1 align="center">VA Studio Next.js Starter — Lumina</h1>

<p align="center">
  <strong>A production-ready Next.js 15 + React 19 + Tailwind v4 business/marketing landing page.</strong>
</p>

<p align="center">
  Ships as a full SaaS landing ("Lumina — the customer intelligence platform") that you can re-theme<br/>
  into a product, agency, or marketing site in minutes. Server-rendered by default, interactive<br/>
  where it counts, and fully integrated with the VA Studio Builder.
</p>

<p align="center">
  <a href="#quick-start">Quick Start</a> &bull;
  <a href="#sections">Sections</a> &bull;
  <a href="#studio-builder-integration">Studio Integration</a> &bull;
  <a href="#project-structure">Structure</a> &bull;
  <a href="#customizing">Customizing</a>
</p>

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3011](http://localhost:3011).

```bash
npm run build     # Production build
npm run start     # Run the built output
```

## Sections

1. **Sticky navbar** — scroll-aware backdrop, mobile drawer with body-scroll lock
2. **Hero** — grid background with radial mask, triple glow orbs, announcement pill, gradient headline, dual CTAs, framed product screenshot with floating live-data chips
3. **Logo cloud** — infinite marquee (pauses on hover), 10 wordmarks
4. **Bento features** — 5 cards in a 6-col grid with mixed spans
5. **Stats strip** — 12,480+ teams · 3.2× revenue lift · <90s query · 99.99% SLA
6. **Deep features** — two alternating image/copy blocks with Unsplash imagery
7. **Integrations** — 12 tool tiles in a rounded showcase
8. **Testimonials** — 3 cards with pravatar avatars, G2 star rating
9. **Pricing** — Starter / Growth (featured with violet glow) / Enterprise
10. **FAQ** — 2-column layout with client-side accordion + "book demo" sidecard
11. **Final CTA** — gradient banner with trust chips
12. **Footer** — 5 columns, newsletter signup, status indicator, social icons

## Studio Builder Integration

- **Server-first** — the landing page is a server component by default; only Navbar and Faq are `'use client'`
- **Path alias** — `@/*` → `src/*` is configured in `jsconfig.json` for consistent Studio imports
- **Design tokens** — shared palette and fonts live in `globals.css` so the Studio theme engine can re-skin in one place
- **AI-edit friendly** — content arrays (`LOGOS`, `BENTO`, `DEEP_FEATURES`, `STATS`, `TESTIMONIALS`, `PLANS`) are declared at the top of `page.jsx` for predictable AI edits
- **Backend proxy** — `next.config.js` rewrites `/api/*` to `http://127.0.0.1:5112/api/*` (VA Studio FastAPI default)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 15 (App Router) |
| **Runtime** | React 19 |
| **Styling** | Tailwind CSS v4 (CSS-based config) |
| **Fonts** | Inter, Playfair Display, JetBrains Mono (Google Fonts) |
| **Icons** | Lucide React |
| **Images** | Unsplash (stable photo IDs) |
| **Avatars** | pravatar.cc |
| **Path alias** | `@/*` → `src/*` |

## Project Structure

```
va_studio_nextjs_starter/
├── src/
│   ├── app/
│   │   ├── layout.jsx      # RootLayout + metadata + fonts
│   │   ├── page.jsx        # Landing page (server component)
│   │   └── globals.css     # Tailwind v4 + design tokens + utilities
│   └── components/
│       ├── Navbar.jsx      # Client — sticky + mobile drawer
│       ├── Footer.jsx      # Server — newsletter form, 5-col grid
│       └── Faq.jsx         # Client — accordion state
├── jsconfig.json           # @/* path aliases
├── next.config.js          # API proxy to FastAPI
├── postcss.config.js       # Tailwind v4 plugin
└── package.json
```

## Customizing

- **Brand:** replace `Lumina` in `Navbar.jsx`, `Footer.jsx`, and `layout.jsx` metadata
- **Palette:** edit CSS vars in `globals.css` (`--accent`, `--background`, `--surface`, `--border`)
- **Content:** the data arrays at the top of `page.jsx` — add/remove items and the grid reflows
- **FAQ:** the `ITEMS` array in `components/Faq.jsx`
- **Hero image:** swap the Unsplash URL in the hero visual block
- **SEO:** `metadata` export in `layout.jsx` controls title/description/OG/Twitter

## Deployment

Deploy to Vercel with zero config:

```bash
npx vercel
```

Or build + run anywhere Node 20+ is available:

```bash
npm run build && npm run start
```

## License

MIT

---

<p align="center">
  Part of the <strong>VA Studio</strong> starter family · Built for rapid prototyping with an AI copilot.
</p>
