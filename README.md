# Tolvane Precision Machining

Portfolio concept site for a fictional contract CNC shop. Tagline: *Tolerances held. Deadlines kept.*

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

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

- The quote form (`src/app/contact/actions.ts`) only validates input. Connect it to email or a CRM.
- Contact details, certifications and equipment are placeholders.
