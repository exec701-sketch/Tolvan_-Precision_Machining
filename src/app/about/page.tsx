import type { Metadata } from "next";
import { Check, Mail } from "lucide-react";
import { aboutPage as p } from "@/content/about";
import { PageHero } from "@/components/sections/PageHero";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = p.meta;

export default function AboutPage() {
  return (
    <>
      <PageHero {...p.hero} />

      <Section tone="surface" labelledBy="story-title">
        <Container className="grid gap-12 py-20 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <SectionHeading id="story-title" index="01" eyebrow={p.story.eyebrow} title={p.story.title} />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-steel-700">
              {p.story.paragraphs.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <h3 className="font-mono text-sm uppercase tracking-widest text-blueprint">Milestones</h3>
            <ol className="mt-6 border-l-2 border-steel-200">
              {p.story.timeline.map((t) => (
                <li key={t.year} className="relative pb-6 pl-6 last:pb-0">
                  <span aria-hidden="true" className="absolute -left-[7px] top-1.5 size-3 border-2 border-blueprint bg-surface" />
                  <p className="font-mono font-medium text-blueprint">{t.year}</p>
                  <p className="mt-1 text-steel-700">{t.event}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section tone="ink" grid labelledBy="values-title">
        <Container className="py-20 lg:py-24">
          <SectionHeading id="values-title" index="02" eyebrow={p.values.eyebrow} title={p.values.title} dark />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {p.values.items.map((v) => (
              <li key={v.title} className="border border-ink-line border-t-2 border-t-amber bg-ink-raised p-6">
                <h3 className="text-lg font-bold text-white">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-steel-300">{v.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="subtle" id="careers" labelledBy="careers-page-title">
        <Container className="grid gap-12 py-20 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <SectionHeading id="careers-page-title" index="03" eyebrow={p.careers.eyebrow} title={p.careers.title} intro={p.careers.intro} />
            <h3 className="mt-10 font-mono text-sm uppercase tracking-widest text-blueprint">{p.careers.benefitsHeading}</h3>
            <ul className="mt-4 space-y-2">
              {p.careers.benefits.map((b) => (
                <li key={b} className="flex gap-3">
                  <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-blueprint" strokeWidth={3} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h3 className="text-2xl font-bold tracking-tight">{p.careers.rolesHeading}</h3>
            <ul className="mt-6 space-y-3">
              {p.careers.roles.map((r) => (
                <li key={r.title} className="flex flex-col gap-1 border border-steel-200 bg-surface p-5 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-lg font-semibold">{r.title}</span>
                  <span className="font-mono text-sm text-steel-700">
                    {r.shift} · {r.type}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink href={`mailto:${p.careers.applyEmail}`} tone="light">
                <Mail aria-hidden="true" className="size-5" />
                Apply: {p.careers.applyEmail}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      <QuoteBand />
    </>
  );
}
