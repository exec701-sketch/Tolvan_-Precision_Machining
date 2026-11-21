import type { ReactNode } from "react";

export type Tone = "ink" | "surface" | "subtle";

const toneClass: Record<Tone, string> = {
  ink: "bg-ink text-white",
  surface: "bg-surface text-ink",
  subtle: "bg-subtle text-ink",
};

export function isDark(tone: Tone) {
  return tone === "ink";
}

type SectionProps = {
  tone: Tone;
  id?: string;
  labelledBy?: string;
  className?: string;
  grid?: boolean;
  children: ReactNode;
};

/** Full-width band. Sets background, base text color and data-tone for focus and link styling. */
export function Section({ tone, id, labelledBy, className = "", grid = false, children }: SectionProps) {
  const gridClass = grid ? (isDark(tone) ? "bg-grid" : "bg-grid-light") : "";
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      data-tone={isDark(tone) ? "dark" : "light"}
      className={`${toneClass[tone]} ${gridClass} scroll-mt-24 ${className}`}
    >
      {children}
    </section>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-page px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}
