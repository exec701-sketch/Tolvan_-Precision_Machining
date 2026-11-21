import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  index?: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  dark?: boolean;
  as?: "h1" | "h2";
  className?: string;
};

/**
 * Section heading with a drawing-style label: "01 — CAPABILITIES" in mono,
 * a short dimension rule, then the heading and an optional intro.
 */
export function SectionHeading({
  id,
  index,
  eyebrow,
  title,
  intro,
  dark = false,
  as: Tag = "h2",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <p
        className={`flex items-center gap-3 font-mono text-sm uppercase tracking-widest ${
          dark ? "text-sky" : "text-blueprint"
        }`}
      >
        {index && <span aria-hidden="true">{index}</span>}
        <span aria-hidden="true" className={`h-px w-8 ${dark ? "bg-amber" : "bg-blueprint"}`} />
        <span>{eyebrow}</span>
      </p>
      <Tag
        id={id}
        className={`mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </Tag>
      {intro && (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-steel-300" : "text-steel-700"}`}>{intro}</p>
      )}
    </div>
  );
}
