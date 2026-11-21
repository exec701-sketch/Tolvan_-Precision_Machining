import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <Section tone="ink" grid labelledBy="nf-title">
      <Container className="py-24 lg:py-32">
        <p className="font-mono text-sm uppercase tracking-widest text-sky">Error 404 · Out of tolerance</p>
        <h1 id="nf-title" className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          This page isn&apos;t on the drawing.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-steel-300">The link may be old or mistyped. Try the homepage or send us a quote request.</p>
        <div className="mt-9 flex flex-wrap gap-4">
          <ButtonLink href="/" tone="dark">
            Back to home
          </ButtonLink>
          <ButtonLink href="/contact#quote" tone="dark" variant="secondary">
            Request a quote
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
