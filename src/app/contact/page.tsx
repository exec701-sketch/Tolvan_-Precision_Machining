import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { contactPage as p } from "@/content/contact";
import { contact } from "@/content/site";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { PageHero } from "@/components/sections/PageHero";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { Container, Section } from "@/components/ui/Section";

export const metadata: Metadata = p.meta;

export default function ContactPage() {
  return (
    <>
      <PageHero {...p.hero} />

      <Section tone="surface" id="quote" labelledBy="quote-form-title">
        <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-8">
            <h2 id="quote-form-title" className="text-3xl font-bold">
              {p.form.heading}
            </h2>
            <div className="mt-6">
              <QuoteForm />
            </div>
          </div>

          <div className="space-y-6 lg:col-span-4">
            <div className="border border-steel-200 bg-subtle p-6">
              <h2 className="text-xl font-bold">{p.details.heading}</h2>
              <ul className="mt-5 space-y-4">
                <li className="flex gap-3">
                  <Phone aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-blueprint" />
                  <a href={contact.phoneHref} className="prose-link">
                    {contact.phoneDisplay}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-blueprint" />
                  <a href={`mailto:${contact.email}`} className="prose-link break-all">
                    {contact.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-blueprint" />
                  <span>
                    <span className="sr-only">{p.details.hoursLabel}: </span>
                    {contact.hours}
                  </span>
                </li>
              </ul>
            </div>
            <div className="border border-steel-200 bg-subtle p-6">
              <h2 className="text-xl font-bold">{p.details.visitHeading}</h2>
              <address className="mt-4 flex gap-3 not-italic">
                <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-blueprint" />
                <span>
                  {contact.street}
                  <br />
                  {contact.city}, {contact.region} {contact.postal}
                </span>
              </address>
              <p className="mt-4 text-steel-700">{p.details.visitBody}</p>
            </div>
          </div>
        </Container>
      </Section>

      <QuoteBand eyebrow={p.band.eyebrow} title={p.band.title} body={p.band.body} showQuoteButton={false} />
    </>
  );
}
