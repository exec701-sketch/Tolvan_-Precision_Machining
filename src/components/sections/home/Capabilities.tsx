import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { capabilities } from "@/content/home";
import { capabilityIcons } from "@/components/ui/icons";
import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Capabilities() {
  return (
    <Section tone="surface" labelledBy="capabilities-title">
      <Container className="py-20 lg:py-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="capabilities-title"
            index="01"
            eyebrow={capabilities.eyebrow}
            title={capabilities.title}
            intro={capabilities.intro}
          />
          <Link href={capabilities.link.href} className="prose-link inline-flex shrink-0 items-center gap-2 py-2 font-semibold">
            {capabilities.link.label}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        <ul className="mt-12 grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.items.map((item, i) => {
            const Icon = capabilityIcons[item.icon];
            return (
              <li key={item.id} className="flex flex-col bg-subtle p-7">
                <div className="flex items-start justify-between">
                  <Icon aria-hidden="true" className="size-8 text-blueprint" strokeWidth={1.5} />
                  <span aria-hidden="true" className="font-mono text-sm text-steel-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-tight">
                  <Link href={`/capabilities#${item.id}`} className="hover:text-blueprint hover:underline underline-offset-4">
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-steel-700">{item.summary}</p>
                <p className="mt-6 border-t border-steel-200 pt-4 font-mono text-sm text-ink">{item.spec}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
