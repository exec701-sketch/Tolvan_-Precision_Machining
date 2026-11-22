import { Check } from "lucide-react";
import { standard } from "@/content/home";
import { Container, Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Photo, hasPhoto } from "@/components/ui/Photo";

/** Commitments, set beside a shop-floor photo when one exists; otherwise three columns. */
export function Standard() {
  const withPhoto = hasPhoto("floor");
  return (
    <Section tone="ink" labelledBy="standard-title">
      <Container className={`grid gap-12 py-20 lg:py-24 ${withPhoto ? "lg:grid-cols-12 lg:items-center" : ""}`}>
        <div className={withPhoto ? "lg:col-span-6" : ""}>
          <SectionHeading id="standard-title" title={standard.title} dark />
          <ul className={`mt-10 grid gap-8 ${withPhoto ? "" : "md:grid-cols-3"}`}>
            {standard.points.map((p) => (
              <li key={p.title} className="flex gap-4">
                <span className="mt-1 flex size-7 shrink-0 items-center justify-center bg-amber">
                  <Check aria-hidden="true" className="size-4 text-ink" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-1 leading-relaxed text-steel-300">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Photo name="floor" className="lg:col-span-6" />
      </Container>
    </Section>
  );
}
