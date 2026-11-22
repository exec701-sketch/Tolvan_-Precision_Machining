import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { certifications } from "@/content/home";
import { industryIcons } from "@/components/ui/icons";
import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Certifications() {
  return (
    <Section tone="ink" labelledBy="certs-title">
      <Container className="py-20 lg:py-24">
        <SectionHeading
          id="certs-title"
         
         
          title={certifications.title}
          intro={certifications.intro}
          dark
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.certs.map((c) => (
            <li key={c.code} className="flex items-start gap-4 border border-ink-line bg-ink-raised p-5">
              <ShieldCheck aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-amber" />
              <div>
                <p className="font-mono text-lg font-medium text-white">{c.code}</p>
                <p className="mt-1 text-sm text-steel-300">{c.detail}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-16 border-t border-ink-line pt-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-2xl font-bold text-white">{certifications.industriesHeading}</h3>
            <Link href={certifications.link.href} className="prose-link inline-flex items-center gap-2 py-2 font-semibold">
              {certifications.link.label}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-px bg-ink-line min-[420px]:grid-cols-2 md:grid-cols-4">
            {certifications.industries.map((ind) => {
              const Icon = industryIcons[ind.id];
              return (
                <li key={ind.id} className="bg-ink">
                  <Link
                    href={`/industries#${ind.id}`}
                    className="group flex h-full items-center gap-3 p-5 text-white transition-colors hover:bg-ink-raised"
                  >
                    <Icon aria-hidden="true" className="size-6 shrink-0 text-sky" />
                    <span className="font-semibold group-hover:underline underline-offset-4">{ind.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
