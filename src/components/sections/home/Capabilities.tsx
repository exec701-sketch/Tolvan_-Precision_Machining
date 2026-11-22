import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { capabilities } from "@/content/home";
import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Photo, hasPhoto } from "@/components/ui/Photo";

/** Capabilities as a ruled spec list (title + envelope on one line), not a card grid. */
export function Capabilities() {
  const withPhoto = hasPhoto("parts");
  return (
    <Section tone="surface" labelledBy="capabilities-title">
      <Container className="py-20 lg:py-24">
        <div className={`grid gap-10 ${withPhoto ? "lg:grid-cols-12 lg:items-end" : ""}`}>
          <div className={withPhoto ? "lg:col-span-5" : ""}>
            <SectionHeading id="capabilities-title" title={capabilities.title} intro={capabilities.intro} />
            <Link href={capabilities.link.href} className="prose-link mt-6 inline-flex items-center gap-2 py-2 font-semibold">
              {capabilities.link.label}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
          <Photo name="parts" className="lg:col-span-7" sizes="(min-width: 1024px) 60vw, 100vw" />
        </div>

        <ul className="mt-14 grid gap-x-14 md:grid-cols-2">
          {capabilities.items.map((item) => (
            <li key={item.id} className="border-t border-steel-200 py-7">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="text-xl font-bold">
                  <Link href={`/capabilities#${item.id}`} className="underline-offset-4 hover:text-blueprint hover:underline">
                    {item.title}
                  </Link>
                </h3>
                <p className="font-mono text-sm text-blueprint">{item.spec}</p>
              </div>
              <p className="mt-2 max-w-prose leading-relaxed text-steel-700">{item.summary}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
