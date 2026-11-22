import type { Metadata } from "next";
import { industriesPage as p } from "@/content/industries";
import { industryIcons } from "@/components/ui/icons";
import { PageHero } from "@/components/sections/PageHero";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = p.meta;

export default function IndustriesPage() {
  return (
    <>
      <PageHero {...p.hero} />

      <Section tone="surface" labelledBy="industries-title">
        <Container className="py-20 lg:py-24">
          <SectionHeading id="industries-title" title={p.listHeading.title} />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {p.items.map((ind) => {
              const Icon = industryIcons[ind.id];
              return (
                <article
                  key={ind.id}
                  id={ind.id}
                  aria-labelledby={`${ind.id}-title`}
                  className="flex scroll-mt-28 flex-col border border-steel-200 bg-subtle p-7"
                >
                  <div className="flex items-center gap-3">
                    <Icon aria-hidden="true" className="size-7 text-blueprint" />
                    <h3 id={`${ind.id}-title`} className="text-2xl font-bold">
                      {ind.label}
                    </h3>
                  </div>
                  <p className="mt-4 flex-1 leading-relaxed text-steel-700">{ind.body}</p>
                  <h4 className="mt-6 font-mono text-sm uppercase tracking-widest text-blueprint">Typical parts</h4>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {ind.parts.map((part) => (
                      <li key={part} className="border border-steel-200 bg-surface px-3 py-1 text-sm text-ink">
                        {part}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <QuoteBand title="Building for a regulated program? Send the requirements with your drawing." />
    </>
  );
}
