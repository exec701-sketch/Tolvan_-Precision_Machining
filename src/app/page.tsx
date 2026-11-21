import { Hero } from "@/components/sections/home/Hero";
import { Capabilities } from "@/components/sections/home/Capabilities";
import { Certifications } from "@/components/sections/home/Certifications";
import { Process } from "@/components/sections/home/Process";
import { Standard } from "@/components/sections/home/Standard";
import { Careers } from "@/components/sections/home/Careers";
import { QuoteBand } from "@/components/sections/QuoteBand";

// Rhythm: ink → surface → ink → subtle → ink → surface → ink → (footer) surface
export default function HomePage() {
  return (
    <>
      <Hero />
      <Capabilities />
      <Certifications />
      <Process />
      <Standard />
      <Careers />
      <QuoteBand />
    </>
  );
}
