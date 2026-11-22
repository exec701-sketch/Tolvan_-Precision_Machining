import { ArrowRight } from "lucide-react";
import { hero } from "@/content/home";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";

/** Ink hero with a blueprint grid and an inspection-readout panel instead of a photo. */
export function Hero() {
  return (
    <Section tone="ink" grid labelledBy="hero-title" className="relative overflow-hidden">
      <Container className="grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-7">
          <p className="font-mono text-sm uppercase tracking-widest text-sky">{hero.eyebrow}</p>
          <h1 id="hero-title" className="mt-5 text-balance text-4xl font-bold text-white sm:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel-300">{hero.body}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <ButtonLink href={hero.primary.href} tone="dark">
              {hero.primary.label}
              <ArrowRight aria-hidden="true" className="size-5" />
            </ButtonLink>
            <ButtonLink href={hero.secondary.href} tone="dark" variant="secondary">
              {hero.secondary.label}
            </ButtonLink>
          </div>
        </div>

        <div className="lg:col-span-5">
          <ReadoutPanel />
        </div>
      </Container>
    </Section>
  );
}

function ReadoutPanel() {
  return (
    <figure className="relative border border-ink-line bg-ink-raised">
      {/* Corner registration marks */}
      <span aria-hidden="true" className="absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-amber" />
      <span aria-hidden="true" className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-amber" />

      <figcaption className="flex items-center justify-between border-b border-ink-line px-5 py-3 font-mono text-xs uppercase tracking-widest text-steel-300">
        <span>Capability sheet</span>
        <span>Rev. 2026</span>
      </figcaption>

      <DimensionGraphic />

      <dl className="divide-y divide-ink-line">
        {hero.specs.map((s) => (
          <div key={s.label} className="flex items-baseline justify-between gap-4 px-5 py-4">
            <dt className="text-steel-300">{s.label}</dt>
            <dd className="font-mono text-xl font-medium text-white">{s.value}</dd>
          </div>
        ))}
      </dl>
    </figure>
  );
}

/** A simple turned-part profile with dimension callouts, drawn in tokens. Decorative. */
function DimensionGraphic() {
  return (
    <svg viewBox="0 0 360 140" aria-hidden="true" className="block w-full border-b border-ink-line px-5 py-4">
      <g fill="none" stroke="var(--color-steel-300)" strokeWidth="1.5">
        <path d="M30 50 h60 v-15 h120 v25 h60 v-10 h60 v40 h-60 v-10 h-60 v25 h-120 v-15 h-60 z" />
      </g>
      <g stroke="var(--color-sky)" strokeWidth="1" strokeDasharray="6 4">
        <line x1="20" y1="70" x2="340" y2="70" />
      </g>
      <g stroke="var(--color-amber)" strokeWidth="1" fill="var(--color-amber)">
        <line x1="90" y1="120" x2="210" y2="120" />
        <line x1="90" y1="105" x2="90" y2="128" />
        <line x1="210" y1="105" x2="210" y2="128" />
        <path d="M90 120 l7 -3 v6 z M210 120 l-7 -3 v6 z" stroke="none" />
      </g>
      <text x="150" y="114" textAnchor="middle" fill="var(--color-amber)" fontFamily="var(--font-mono)" fontSize="11">
        2.5000 ±.0001
      </text>
      <text x="300" y="22" textAnchor="middle" fill="var(--color-sky)" fontFamily="var(--font-mono)" fontSize="11">
        Ø .7500
      </text>
      <line x1="300" y1="28" x2="300" y2="50" stroke="var(--color-sky)" strokeWidth="1" />
    </svg>
  );
}
