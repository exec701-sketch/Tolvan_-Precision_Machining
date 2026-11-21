import { Check } from "lucide-react";
import { standard } from "@/content/home";
import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Standard() {
  return (
    <Section tone="ink" grid labelledBy="standard-title">
      <Container className="grid gap-12 py-20 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-6">
          <SectionHeading id="standard-title" index="04" eyebrow={standard.eyebrow} title={standard.title} dark />
          <ul className="mt-10 space-y-6">
            {standard.points.map((p) => (
              <li key={p.title} className="flex gap-4">
                <span className="mt-1 flex size-7 shrink-0 items-center justify-center bg-amber">
                  <Check aria-hidden="true" className="size-4 text-ink" strokeWidth={3} />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-1 leading-relaxed text-steel-300">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <dl className="grid content-center gap-px bg-ink-line lg:col-span-5 lg:col-start-8">
          {standard.stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse bg-ink-raised px-7 py-6">
              <dt className="mt-1 font-mono text-sm uppercase tracking-widest text-steel-300">{s.label}</dt>
              <dd className="text-5xl font-bold tracking-tight text-white">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
