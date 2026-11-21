import type { Metadata } from "next";
import { equipmentPage as p } from "@/content/equipment";
import { PageHero } from "@/components/sections/PageHero";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = p.meta;

export default function EquipmentPage() {
  return (
    <>
      <PageHero {...p.hero} />

      <Section tone="surface" labelledBy="machining-title">
        <Container className="py-20 lg:py-24">
          <SectionHeading id="machining-title" index="01" eyebrow={p.machining.eyebrow} title={p.machining.title} />
          <div className="mt-12 space-y-10">
            {p.machining.groups.map((g) => {
              const tableId = `equip-${g.name.toLowerCase()}`;
              return (
                <div key={g.name}>
                  <h3 id={tableId} className="text-xl font-bold">
                    {g.name}
                  </h3>
                  <div role="region" aria-labelledby={tableId} tabIndex={0} className="mt-4 overflow-x-auto border border-steel-200">
                    <table className="w-full min-w-[42rem] border-collapse text-left">
                      <caption className="sr-only">{g.name} equipment</caption>
                      <thead className="bg-subtle">
                        <tr>
                          {p.machining.columns.map((col) => (
                            <th key={col} scope="col" className="px-5 py-3 font-mono text-sm font-medium uppercase tracking-wider text-blueprint">
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-steel-200">
                        {g.rows.map(([name, qty, travel, notes]) => (
                          <tr key={name}>
                            <th scope="row" className="px-5 py-4 font-semibold">
                              {name}
                            </th>
                            <td className="px-5 py-4 font-mono">{qty}</td>
                            <td className="px-5 py-4 font-mono text-steel-700">{travel}</td>
                            <td className="px-5 py-4 text-steel-700">{notes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section tone="ink" grid id="metrology" labelledBy="metrology-title">
        <Container className="py-20 lg:py-24">
          <SectionHeading id="metrology-title" index="02" eyebrow={p.metrology.eyebrow} title={p.metrology.title} intro={p.metrology.intro} dark />
          <ul className="mt-12 grid gap-px bg-ink-line sm:grid-cols-2 lg:grid-cols-3">
            {p.metrology.items.map((m) => (
              <li key={m.name} className="flex items-baseline gap-4 bg-ink-raised px-6 py-5">
                <span className="font-mono text-3xl font-medium text-amber">
                  {m.qty}
                  <span className="sr-only"> ×</span>
                </span>
                <span className="text-white">{m.name}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="subtle" labelledBy="support-title">
        <Container className="py-20 lg:py-24">
          <SectionHeading id="support-title" index="03" eyebrow={p.support.eyebrow} title={p.support.title} />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {p.support.items.map((item) => (
              <li key={item} className="border border-steel-200 bg-surface px-5 py-4">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <QuoteBand />
    </>
  );
}
