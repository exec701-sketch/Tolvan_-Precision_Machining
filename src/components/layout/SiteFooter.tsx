import Image from "next/image";
import Link from "next/link";
import { brand, contact, footerColumns, footerNote, quoteCta } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";

/** Footer sits on surface: every page ends on an ink band (the quote CTA). */
export function SiteFooter() {
  const year = 2026;
  return (
    <footer data-tone="light" aria-labelledby="footer-heading" className="border-t-4 border-amber bg-surface text-ink">
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>
      <div className="mx-auto grid max-w-page gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <Link href="/" aria-label={`${brand.name}, home`} className="inline-block">
            <Image src={brand.logo.src} width={brand.logo.width} height={brand.logo.height} alt="" className="h-12 w-auto" />
          </Link>
          <p className="mt-5 max-w-sm text-steel-700">{brand.description}</p>
          <address className="mt-6 space-y-1 not-italic text-steel-700">
            <p>{contact.street}</p>
            <p>
              {contact.city}, {contact.region} {contact.postal}
            </p>
            <p>
              <a href={contact.phoneHref} className="prose-link">
                {contact.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={`mailto:${contact.email}`} className="prose-link">
                {contact.email}
              </a>
            </p>
          </address>
        </div>

        <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
          {footerColumns.map((col) => (
            <nav key={col.heading} aria-label={`Footer: ${col.heading}`}>
              <h3 className="font-mono text-sm uppercase tracking-widest text-blueprint">{col.heading}</h3>
              <ul className="mt-4 space-y-1">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="inline-block py-1.5 text-steel-700 underline-offset-4 hover:text-blueprint hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div className="sm:col-span-3">
            <ButtonLink href={quoteCta.href} tone="light">
              {quoteCta.label}
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="border-t border-steel-200">
        <div className="mx-auto flex max-w-page flex-col gap-3 px-4 py-6 text-sm text-steel-700 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
          <p>
            © {year} {brand.name}. {brand.tagline}
          </p>
          <p className="max-w-xl lg:text-right">{footerNote}</p>
        </div>
      </div>
    </footer>
  );
}
