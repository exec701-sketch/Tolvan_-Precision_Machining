import { Container, Section } from "@/components/ui/Section";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  facts?: readonly { label: string; value: string }[];
};

/** Ink header band for inner pages. */
export function PageHero({ eyebrow, title, intro, facts }: PageHeroProps) {
  return (
    <Section tone="ink" labelledBy="page-title">
      <Container className="py-16 lg:py-20">
        <p className="font-mono text-sm uppercase tracking-widest text-sky">{eyebrow}</p>
        <h1 id="page-title" className="mt-4 max-w-4xl text-balance text-4xl font-bold text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-steel-300">{intro}</p>
        {facts && (
          <dl className="mt-10 grid grid-cols-2 gap-px border border-ink-line bg-ink-line md:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="flex flex-col-reverse bg-ink-raised px-5 py-4">
                <dt className="mt-1 text-sm text-steel-300">{f.label}</dt>
                <dd className="font-mono text-xl font-medium text-white">{f.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </Container>
    </Section>
  );
}
