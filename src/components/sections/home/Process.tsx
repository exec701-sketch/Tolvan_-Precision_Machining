import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { process } from "@/content/home";
import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <Section tone="subtle" labelledBy="process-title">
      <Container className="grid gap-14 py-20 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-7">
          <SectionHeading id="process-title" index="03" eyebrow={process.eyebrow} title={process.title} intro={process.intro} />
          <ol className="mt-10 space-y-0">
            {process.steps.map((step, i) => (
              <li key={step.title} className="relative grid grid-cols-[3rem_1fr] gap-4 pb-8 last:pb-0">
                {/* Connector rule */}
                {i < process.steps.length - 1 && (
                  <span aria-hidden="true" className="absolute left-6 top-12 bottom-0 w-px bg-steel-400" />
                )}
                <span className="relative flex size-12 items-center justify-center border-2 border-blueprint bg-surface font-mono font-medium text-blueprint">
                  <span className="sr-only">Step </span>
                  {i + 1}
                </span>
                <div className="pt-2">
                  <h3 className="text-lg font-bold tracking-tight">{step.title}</h3>
                  <p className="mt-1 leading-relaxed text-steel-700">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="lg:col-span-5">
          <div className="border border-steel-200 bg-surface p-7 lg:sticky lg:top-28">
            <h3 id="equipment-heading" className="font-mono text-sm uppercase tracking-widest text-blueprint">
              {process.equipmentHeading}
            </h3>
            <dl className="mt-6 grid grid-cols-2 gap-px border border-steel-200 bg-steel-200">
              {process.equipment.map((e) => (
                <div key={e.label} className="flex flex-col-reverse bg-surface p-5">
                  <dt className="mt-2 text-sm leading-snug text-steel-700">{e.label}</dt>
                  <dd className="font-mono text-4xl font-medium text-ink">{e.count}</dd>
                </div>
              ))}
            </dl>
            <Link href={process.link.href} className="prose-link mt-6 inline-flex items-center gap-2 py-2 font-semibold">
              {process.link.label}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
