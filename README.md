# Tolvane Precision Machining

Portfolio concept site for a fictional contract CNC shop. Tagline: *Tolerances held. Deadlines kept.*

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Deploy (Cloudflare)

The site is a static export (`out/`) served as Cloudflare Workers static assets (`wrangler.jsonc`).

- Local check: `npm run preview`, then open http://localhost:8787
- Git-connected (Workers Builds): build command `npm run build`, deploy command `npx wrangler deploy`
- Manual: `npm run deploy` (runs `wrangler login` the first time)

## Structure

- `src/content/`: all copy, one file per page plus `site.ts` (brand, contact, nav, footer). Edit text here, not in components.
- `src/components/ui/`: primitives (Section, Container, Button, SectionHeading, icon maps).
- `src/components/sections/`: page sections; `home/` holds the homepage set.
- `src/app/`: routes: `/`, `/capabilities`, `/industries`, `/quality`, `/equipment`, `/about`, `/contact`.

## Design system

Tokens come from `Tolvane_Design_System.md` and live in `src/app/globals.css` under `@theme`. The default Tailwind palette is cleared, so only design-system colors exist as utilities.

Sections alternate dark and light. Every page starts with an ink hero and ends with the ink quote band, so the surface footer always follows a dark section.

## Accessibility

Every page is checked with axe-core (WCAG 2.1 A/AA plus best practices) and has no violations. Text over the blueprint grid was checked by hand, with a minimum of 5.12:1. Focus rings are blueprint on light sections and amber on dark ones, switched by `data-tone`.

## Before going live

- The quote form (`src/lib/quote.ts`) only validates input in the browser. Connect it to a form endpoint (for example a Cloudflare Worker) or a CRM.
- Contact details, certifications and equipment are placeholders.
- Add photos: save `parts-closeup.jpg`, `five-axis-machine.jpg`, `cmm-inspection.jpg` and `shop-floor.jpg` (3:2, 1800 px wide or more) in `public/images/`. Each appears on the site automatically at the next build. See `src/content/images.ts`.
