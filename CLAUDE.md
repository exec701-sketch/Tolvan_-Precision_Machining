@AGENTS.md

## Design rules

- Before designing or building any UI, load and follow the `frontend-design-deslop` skill, and `frontend-design` when it is installed.
- `./DESIGN.md` is the single source of truth for color, section rhythm and components. Tokens in `src/app/globals.css` must match it.
- Where the deslop skill and DESIGN.md conflict on color, DESIGN.md wins. (Example: the skill prefers OKLCH authoring; DESIGN.md's hex tokens and verified contrast pairs stand.)
- Avoid generic AI-slop patterns: default fonts, gradient blobs, stock-style imagery, identical card grids and templated layouts. DESIGN.md sections 9 to 11 list the rules this project already follows and its audit log.
- After a design change, re-run the slop checklist and an axe WCAG 2.2 AA check, and add a row to the DESIGN.md audit log.
