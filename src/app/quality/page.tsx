import type { Metadata } from "next";
import { Check, ShieldCheck } from "lucide-react";
import { qualityPage as p } from "@/content/quality";
import { PageHero } from "@/components/sections/PageHero";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Photo } from "@/components/ui/Photo";

export const metadata: Metadata = p.meta;

export default function QualityPage() {
  return (
    <>
      <PageHero {...p.hero} />

      <Section tone="surface" labelledBy="certs-title">
        <Container className="py-20 lg:py-24">
          <SectionHeading id="certs-title" title={p.certs.title} />
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {p.certs.items.map((c) => (
              <li key={c.code} className="flex gap-5 border border-steel-200 bg-subtle p-7">
                <ShieldCheck aria-hidden="true" className="size-10 shrink-0 text-blueprint" />
                <div>
                  <h3 className="font-mono text-2xl font-medium">{c.code}</h3>
                  <p className="mt-1 font-semibold text-blueprint">{c.name}</p>
                  <p className="mt-3 leading-relaxed text-steel-700">{c.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-steel-700">{p.certs.note}</p>
        </Container>
      </Section>

      <Section tone="ink" id="lab" labelledBy="lab-title">
        <Container className="py-20 lg:py-24">
          <SectionHeading id="lab-title" title={p.lab.title} intro={p.lab.intro} dark />
          <Photo name="inspection" className="mt-12" sizes="(min-width: 1280px) 1200px, 100vw" />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {p.lab.items.map((item) => (
              <li key={item.title} className="border border-ink-line bg-ink-raised p-6">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-steel-300">{item.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="subtle" id="documentation" labelledBy="docs-title">
        <Container className="py-20 lg:py-24">
          <SectionHeading id="docs-title" title={p.docs.title} intro={p.docs.intro} />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <DocList heading="Included with every order" items={p.docs.standard} />
            <DocList heading="Available on request" items={p.docs.onRequest} />
          </div>
        </Container>
      </Section>

      <QuoteBand />
    </>
  );
}

function DocList({ heading, items }: { heading: string; items: readonly string[] }) {
  return (
    <div className="border border-steel-200 bg-surface p-7">
      <h3 className="font-mono text-sm uppercase tracking-widest text-blueprint">{heading}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-blueprint" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
