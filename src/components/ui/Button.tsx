import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";
type ButtonTone = "light" | "dark";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 px-5 py-2.5 text-base font-semibold transition-colors";

const styles: Record<ButtonTone, Record<Variant, string>> = {
  light: {
    primary: "bg-blueprint text-white hover:bg-blueprint-deep",
    secondary: "border-2 border-blueprint text-blueprint hover:bg-subtle",
  },
  dark: {
    primary: "bg-amber text-ink hover:bg-amber-bright",
    secondary: "border-2 border-sky text-sky hover:bg-ink-raised",
  },
};

export function buttonClass(variant: Variant, tone: ButtonTone) {
  return `${base} ${styles[tone][variant]}`;
}

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  tone: ButtonTone;
  children: ReactNode;
  className?: string;
};

export function ButtonLink({ href, variant = "primary", tone, children, className = "" }: ButtonLinkProps) {
  const cls = `${buttonClass(variant, tone)} ${className}`;
  if (href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
