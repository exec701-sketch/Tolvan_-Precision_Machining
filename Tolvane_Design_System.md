# DESIGN.md: Tolvane Precision Machining

> Fictional brand for design-system demonstration. Colors only (no red). All text pairings meet WCAG 2.1 AA.

**Brand:** Tolvane Precision Machining
**Tagline:** Tolerances held. Deadlines kept.
**Palette concept:** Graphite, steel and blueprint blue, with one machined-amber accent.

---

## 1. Core Tokens

| Token | Hex | Role |
|---|---|---|
| `--ink` | `#14181D` | Inverse sections, headings on light |
| `--surface` | `#FFFFFF` | Base section background |
| `--subtle` | `#EEF1F4` | Alternate light section, card fills |
| `--steel-700` | `#4A5663` | Body and secondary text on light |
| `--steel-400` | `#8A96A3` | Input and control borders (3:1) |
| `--steel-300` | `#B8C2CC` | Body text on dark |
| `--steel-200` | `#CBD3DB` | Decorative dividers, card borders |
| `--blueprint` | `#1F4E79` | Primary brand, links, primary button on light |
| `--sky` | `#6FB1E0` | Links and highlights on dark |
| `--amber` | `#F2A900` | Accent and CTA on dark. Never text on light. |

## 2. Status Colors (no red)

| Token | Hex | Role |
|---|---|---|
| `--success` | `#2E7D4F` | Confirmations |
| `--warning` | `#9A5B00` | Cautions |
| `--error` | `#B34700` | Burnt orange. Always pair with icon and text. |

## 3. Verified Contrast

| Foreground | Background | Ratio | Result |
|---|---|---|---|
| Ink `#14181D` | Surface `#FFFFFF` | 17.82:1 | AAA |
| Steel-700 `#4A5663` | Surface | 7.49:1 | AAA |
| Steel-700 | Subtle `#EEF1F4` | 6.61:1 | AA |
| Blueprint `#1F4E79` | Surface | 8.66:1 | AAA |
| Blueprint | Subtle | 7.64:1 | AAA |
| White | Blueprint | 8.66:1 | AAA |
| Steel-300 `#B8C2CC` | Ink | 9.87:1 | AAA |
| Sky `#6FB1E0` | Ink | 7.67:1 | AAA |
| Ink | Amber `#F2A900` | 8.87:1 | AAA |
| Warning `#9A5B00` | Surface | 5.43:1 | AA |
| Error `#B34700` | Surface | 5.50:1 | AA |
| Success `#2E7D4F` | Surface | 5.05:1 | AA |
| Steel-400 `#8A96A3` | Surface | 3.01:1 | AA (UI components only) |

**Do not use:** amber text on blueprint (4.31:1) or on white. Steel-200 as a control border (1.51:1).

## 4. Section Rhythm (Atomic Design)

Alternate backgrounds. No two same-tone sections ever touch.

| # | Section | Background | Text |
|---|---|---|---|
| 1 | Hero | `--ink` | White / steel-300 |
| 2 | Capabilities | `--surface` | Ink / steel-700 |
| 3 | Certifications and industries | `--ink` | White / steel-300 |
| 4 | Equipment and process | `--subtle` | Ink / steel-700 |
| 5 | Quote CTA | `--ink` | White / steel-300 |
| 6 | Footer | `--surface` or `--ink` (opposite of the section above it) | Per background |

## 5. Components

**Buttons**
- Primary on light: fill `--blueprint`, text white, hover `#173B5C`.
- Primary on dark: fill `--amber`, text `--ink`, hover `#FFC233`.
- Secondary: 2px border, `--blueprint` on light or `--sky` on dark, transparent fill.

**Links**
- On light: `--blueprint`, underlined.
- On dark: `--sky`, underlined.

**Forms**
- Border: 1px `--steel-400`. Label: `--ink`. Helper text: `--steel-700`.
- Error: `--error` border and message, with an icon. Never color alone.

**Cards**
- On `--surface`: fill `--subtle`, border `--steel-200`.
- On `--subtle`: fill `--surface`, border `--steel-200`.
- On `--ink`: fill `#1E252D`, border `#2E3844`.

**Focus ring:** 3px, `--amber` on dark and `--blueprint` on light, 2px offset.

## 6. CSS Variables

```css
:root {
  --ink: #14181D;
  --surface: #FFFFFF;
  --subtle: #EEF1F4;
  --steel-700: #4A5663;
  --steel-400: #8A96A3;
  --steel-300: #B8C2CC;
  --steel-200: #CBD3DB;
  --blueprint: #1F4E79;
  --sky: #6FB1E0;
  --amber: #F2A900;
  --success: #2E7D4F;
  --warning: #9A5B00;
  --error: #B34700;
}
```

## 7. Tailwind Extension

```js
colors: {
  ink: '#14181D',
  surface: '#FFFFFF',
  subtle: '#EEF1F4',
  steel: { 200: '#CBD3DB', 300: '#B8C2CC', 400: '#8A96A3', 700: '#4A5663' },
  blueprint: '#1F4E79',
  sky: '#6FB1E0',
  amber: '#F2A900',
  success: '#2E7D4F',
  warning: '#9A5B00',
  danger: '#B34700',
}
```
