import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  title: ReactNode;
  intro?: ReactNode;
  dark?: boolean;
  as?: "h1" | "h2";
  className?: string;
};

/** Section heading and optional intro. No kicker label: the heading carries the section on its own. */
export function SectionHeading({ id, title, intro, dark = false, as: Tag = "h2", className = "" }: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <Tag id={id} className={`text-balance text-3xl font-bold sm:text-4xl ${dark ? "text-white" : "text-ink"}`}>
        {title}
      </Tag>
      {intro && (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-steel-300" : "text-steel-700"}`}>{intro}</p>
      )}
    </div>
  );
}
