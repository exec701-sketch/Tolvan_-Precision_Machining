"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import type { NavItem } from "@/content/site";
import { buttonClass } from "@/components/ui/Button";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavLinks({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  return (
    <ul className="flex items-center gap-1">
      {items.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`relative block px-3 py-2 font-medium transition-colors hover:text-blueprint ${
                active
                  ? "text-blueprint after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:bg-blueprint"
                  : "text-steel-700"
              }`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function MobileMenu({ items, cta }: { items: NavItem[]; cta: NavItem }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape and return focus to the toggle.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 border border-steel-400 px-3 font-medium text-ink"
      >
        {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        <span>Menu</span>
      </button>
      <nav
        id={panelId}
        aria-label="Primary"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-steel-200 bg-surface shadow-lg"
      >
        <ul className="mx-auto max-w-page px-4 py-3 sm:px-6">
          {items.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href} className="border-b border-steel-200 last:border-b-0">
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-lg font-medium ${active ? "text-blueprint" : "text-ink"}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-4 pb-2">
            <Link href={cta.href} onClick={() => setOpen(false)} className={`${buttonClass("primary", "light")} w-full`}>
              {cta.label}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
