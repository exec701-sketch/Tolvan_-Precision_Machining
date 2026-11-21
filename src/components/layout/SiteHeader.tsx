import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { brand, contact, primaryNav, quoteCta } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { NavLinks, MobileMenu } from "./NavClient";

export function SiteHeader() {
  return (
    <header>
      {/* Utility strip: ink */}
      <div data-tone="dark" className="bg-ink text-steel-300">
        <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-2 text-sm sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-widest">{brand.tagline}</p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <li>
              <a href={contact.phoneHref} className="inline-flex items-center gap-1.5 py-1 hover:text-white">
                <Phone aria-hidden="true" className="size-4 text-amber" />
                {contact.phoneDisplay}
              </a>
            </li>
            <li className="hidden sm:block">
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-1.5 py-1 hover:text-white">
                <Mail aria-hidden="true" className="size-4 text-amber" />
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main bar: surface */}
      <div data-tone="light" className="sticky top-0 z-40 border-b border-steel-200 bg-surface">
        <div className="mx-auto flex max-w-page items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="shrink-0" aria-label={`${brand.name}, home`}>
            <Image
              src={brand.logo.src}
              width={brand.logo.width}
              height={brand.logo.height}
              alt=""
              priority
              className="h-10 w-auto sm:h-12"
            />
          </Link>
          <nav aria-label="Primary" className="hidden lg:block">
            <NavLinks items={primaryNav} />
          </nav>
          <div className="hidden lg:block">
            <ButtonLink href={quoteCta.href} tone="light">
              {quoteCta.label}
            </ButtonLink>
          </div>
          <MobileMenu items={primaryNav} cta={quoteCta} />
        </div>
      </div>
    </header>
  );
}
