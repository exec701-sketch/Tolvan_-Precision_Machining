import { careers } from "@/content/home";
import { ButtonLink } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Careers() {
  return (
    <Section tone="surface" labelledBy="careers-title">
      <Container className="py-20 lg:py-24">
        <div className="grid gap-10 border-l-4 border-blueprint pl-6 sm:pl-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <SectionHeading id="careers-title" index="05" eyebrow={careers.eyebrow} title={careers.title} intro={careers.body} />
            <div className="mt-8">
              <ButtonLink href={careers.cta.href} tone="light" variant="secondary">
                {careers.cta.label}
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="font-mono text-sm uppercase tracking-widest text-steel-700">Now hiring</p>
            <ul className="mt-4 divide-y divide-steel-200 border-y border-steel-200">
              {careers.roles.map((r) => (
                <li key={r} className="py-3 font-semibold">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
