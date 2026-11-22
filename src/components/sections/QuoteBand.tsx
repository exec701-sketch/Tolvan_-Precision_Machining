import { ArrowRight, Phone } from "lucide-react";
import { quoteBand } from "@/content/home";
import { contact } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";

type QuoteBandProps = {
  eyebrow?: string;
  title?: string;
  body?: string;
  showQuoteButton?: boolean;
};

/** Ink call-to-action band. Every page ends with it so the surface footer always follows a dark band. */
export function QuoteBand({ eyebrow = quoteBand.eyebrow, title = quoteBand.title, body = quoteBand.body, showQuoteButton = true }: QuoteBandProps) {
  return (
    <Section tone="ink" labelledBy="quote-band-title" className="relative overflow-hidden">
      <Container className="grid gap-10 py-16 lg:grid-cols-12 lg:items-center lg:py-20">
        <div className="lg:col-span-8">
          <p className="font-mono text-sm uppercase tracking-widest text-sky">{eyebrow}</p>
          <h2 id="quote-band-title" className="mt-4 text-balance text-3xl font-bold text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-steel-300">{body}</p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row lg:col-span-4 lg:flex-col lg:items-stretch">
          {showQuoteButton && (
            <ButtonLink href={quoteBand.primary.href} tone="dark">
            {quoteBand.primary.label}
            <ArrowRight aria-hidden="true" className="size-5" />
          </ButtonLink>
          )}
          <ButtonLink href={contact.phoneHref} tone="dark" variant="secondary">
            <Phone aria-hidden="true" className="size-5" />
            {contact.phoneDisplay}
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
