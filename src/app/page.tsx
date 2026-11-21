import { Container, Section } from "@/components/ui/Section";

export default function HomePage() {
  return (
    <Section tone="ink" grid labelledBy="home-title">
      <Container className="py-24">
        <h1 id="home-title" className="text-4xl font-bold">
          Homepage sections coming next.
        </h1>
      </Container>
    </Section>
  );
}
