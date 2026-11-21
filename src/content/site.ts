/**
 * Site-wide content: brand, contact details, navigation, footer.
 * Tolvane is a fictional brand built as a portfolio concept. Contact details are placeholders.
 */

export const brand = {
  name: "Tolvane Precision Machining",
  shortName: "Tolvane",
  tagline: "Tolerances held. Deadlines kept.",
  description:
    "Tolvane Precision Machining is a contract CNC shop for tight-tolerance milled, turned and EDM parts, from first article to production runs.",
  logo: {
    src: "/brand/tolvane-logo.png",
    width: 2049,
    height: 585,
    alt: "Tolvane Precision Machining",
  },
} as const;

export const contact = {
  street: "2280 Foundry Row, Suite B",
  city: "Grand Rapids",
  region: "MI",
  postal: "49504",
  phoneDisplay: "(616) 555-0148",
  phoneHref: "tel:+16165550148",
  email: "rfq@tolvane.example",
  hours: "Mon to Fri, 6:00 am to 6:00 pm ET",
} as const;

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "Quality", href: "/quality" },
  { label: "Equipment", href: "/equipment" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const quoteCta: NavItem = { label: "Request a quote", href: "/contact#quote" };

export const footerColumns: { heading: string; links: NavItem[] }[] = [
  {
    heading: "Capabilities",
    links: [
      { label: "5-axis milling", href: "/capabilities#five-axis" },
      { label: "CNC turning", href: "/capabilities#turning" },
      { label: "Mill-turn", href: "/capabilities#mill-turn" },
      { label: "Wire and sinker EDM", href: "/capabilities#edm" },
      { label: "Micro machining", href: "/capabilities#micro" },
      { label: "Materials and finishes", href: "/capabilities#materials" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Aerospace", href: "/industries#aerospace" },
      { label: "Defense", href: "/industries#defense" },
      { label: "Medical devices", href: "/industries#medical" },
      { label: "Energy", href: "/industries#energy" },
      { label: "All industries", href: "/industries" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Quality and certifications", href: "/quality" },
      { label: "Equipment list", href: "/equipment" },
      { label: "About the shop", href: "/about" },
      { label: "Careers", href: "/about#careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const footerNote =
  "Tolvane Precision Machining is a fictional company created as a web design portfolio concept. Certifications, equipment and contact details shown are illustrative.";
