import type { Metadata } from "next";
import { Check, ChevronDown } from "lucide-react";
import { capabilitiesPage as c } from "@/content/capabilities";
import { capabilityIcons } from "@/components/ui/icons";
import { PageHero } from "@/components/sections/PageHero";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Photo } from "@/components/ui/Photo";

export const metadata: Metadata = c.meta;

const iconKeys = ["axis", "lathe", "millturn", "edm", "micro", "additive"];

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero {...c.hero} />

      {/* Services: surface */}
      <Section tone="surface" labelledBy="services-title">
        <Container className="py-20 lg:py-24">
          <SectionHeading id="services-title" title={c.services.title} />
          <Photo name="parts" className="mt-12" sizes="(min-width: 1280px) 1200px, 100vw" />
          <div className="mt-12 divide-y divide-steel-200 border-y border-steel-200">
            {c.services.items.map((s, i) => {
              const Icon = capabilityIcons[iconKeys[i]];
              return (
                <article key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className="grid scroll-mt-28 gap-6 py-10 lg:grid-cols-12">
                  <div className="flex items-start gap-4 lg:col-span-4">
                    <Icon aria-hidden="true" className="size-8 shrink-0 text-blueprint" />
                    <h3 id={`${s.id}-title`} className="text-2xl font-bold">
                      {s.title}
                    </h3>
                  </div>
                  <p className="leading-relaxed text-steel-700 lg:col-span-4">{s.body}</p>
                  <ul className="space-y-2 lg:col-span-4">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-blueprint" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Tolerances: ink */}
      <Section tone="ink" id="tolerances" labelledBy="tolerances-title">
        <Container className="py-20 lg:py-24">
          <SectionHeading id="tolerances-title" title={c.tolerances.title} intro={c.tolerances.intro} dark />
          <div
            role="region"
            aria-label="Tolerance table (scrolls horizontally on small screens)"
            tabIndex={0}
            className="mt-10 overflow-x-auto border border-ink-line"
          >
            <table className="w-full min-w-[44rem] border-collapse text-left">
              <caption className="sr-only">Typical tolerances and finishes by machining process</caption>
              <thead className="bg-ink-raised">
                <tr>
                  {c.tolerances.columns.map((col, i) => (
                    <th key={col} scope="col" className={`px-5 py-4 ${i > 0 ? "text-right" : ""} font-mono text-sm font-medium uppercase tracking-wider text-sky`}>
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-line">
                {c.tolerances.rows.map(([process, ...cells]) => (
                  <tr key={process}>
                    <th scope="row" className="px-5 py-4 font-semibold text-white">
                      {process}
                    </th>
                    {cells.map((cell, i) => (
                      <td key={i} className="px-5 py-4 text-right font-mono tabular-nums text-steel-300">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* Materials: subtle */}
      <Section tone="subtle" id="materials" labelledBy="materials-title">
        <Container className="py-20 lg:py-24">
          <SectionHeading id="materials-title" title={c.materials.title} intro={c.materials.intro} />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.materials.groups.map((g) => (
              <li key={g.name} className="border border-steel-200 bg-surface p-6">
                <h3 className="text-lg font-bold">{g.name}</h3>
                <ul className="mt-3 space-y-1 font-mono text-sm text-steel-700">
                  {g.grades.map((grade) => (
                    <li key={grade}>{grade}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Finishes: ink */}
      <Section tone="ink" id="finishes" labelledBy="finishes-title">
        <Container className="grid gap-10 py-20 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <SectionHeading id="finishes-title" title={c.finishes.title} intro={c.finishes.intro} dark />
          </div>
          <ul className="grid content-start gap-px bg-ink-line sm:grid-cols-2 lg:col-span-7">
            {c.finishes.items.map((f) => (
              <li key={f} className="flex items-center gap-3 bg-ink-raised px-5 py-4 text-white">
                <span aria-hidden="true" className="size-2 shrink-0 bg-amber" />
                {f}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* FAQ: surface */}
      <Section tone="surface" id="faq" labelledBy="faq-title">
        <Container className="grid gap-10 py-20 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-4">
            <SectionHeading id="faq-title" title={c.faq.title} />
          </div>
          <div className="divide-y divide-steel-200 border-y border-steel-200 lg:col-span-8">
            {c.faq.items.map((item) => (
              <details key={item.q} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <ChevronDown aria-hidden="true" className="size-5 shrink-0 text-blueprint transition-transform group-open:rotate-180" />
                </summary>
                <p className="pb-6 leading-relaxed text-steel-700">{item.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <QuoteBand />
    </>
  );
}
