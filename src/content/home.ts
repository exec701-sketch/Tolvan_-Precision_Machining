/**
 * Homepage copy. Section order (and background rhythm):
 * hero (ink) → capabilities (surface) → certifications + industries (ink)
 * → equipment + process (subtle) → the Tolvane standard (ink) → careers (surface)
 * → quote CTA (ink) → footer (surface)
 */

export const hero = {
  eyebrow: "Contract CNC machining · Grand Rapids, MI",
  title: "Parts that measure right the first time.",
  body: "Tolvane mills, turns and EDMs critical components for aerospace, defense and medical OEMs. Send a drawing, get a quote you can plan around, and receive parts with the inspection data to prove them.",
  primary: { label: "Request a quote", href: "/contact#quote" },
  secondary: { label: "See capabilities", href: "/capabilities" },
  specs: [
    { label: "Tightest tolerance", value: "±0.0001 in" },
    { label: "Quote turnaround", value: "48 hr" },
    { label: "Order quantities", value: "1 to 10,000" },
    { label: "On-time delivery, trailing 12 mo", value: "98.6%" },
  ],
} as const;

export type Capability = {
  id: string;
  title: string;
  summary: string;
  spec: string;
  icon: "axis" | "lathe" | "millturn" | "edm" | "micro" | "additive";
};

export const capabilities = {
  eyebrow: "Capabilities",
  title: "One shop, every operation your part needs.",
  intro:
    "Keeping milling, turning, EDM and inspection under one roof means fewer handoffs, one quality system and one accountable schedule.",
  items: [
    {
      id: "five-axis",
      title: "5-axis milling",
      summary: "Complex prismatic parts in a single setup, so features stay true to each other.",
      spec: "Envelope 32 × 24 × 20 in",
      icon: "axis",
    },
    {
      id: "turning",
      title: "CNC turning",
      summary: "Shafts, bushings and fittings with live tooling and bar feed for production runs.",
      spec: "Up to 3.25 in bar · 14 in chuck",
      icon: "lathe",
    },
    {
      id: "mill-turn",
      title: "Mill-turn",
      summary: "Turn, mill, drill and tap in one cycle for parts that would otherwise take four setups.",
      spec: "B-axis head · sub-spindle",
      icon: "millturn",
    },
    {
      id: "edm",
      title: "Wire and sinker EDM",
      summary: "Hardened tool steels and exotic alloys cut without force, burrs or heat distortion.",
      spec: "Wire to 0.004 in · taper to 30°",
      icon: "edm",
    },
    {
      id: "micro",
      title: "Micro machining",
      summary: "Features too small for standard tooling, verified on vision measurement.",
      spec: "Tools down to 0.005 in",
      icon: "micro",
    },
    {
      id: "additive",
      title: "Metal additive + finish machining",
      summary: "Printed near-net shapes in titanium and Inconel, machined to final tolerance.",
      spec: "DMLS partner network",
      icon: "additive",
    },
  ] satisfies Capability[],
  link: { label: "Full capabilities, materials and tolerances", href: "/capabilities" },
};

export const certifications = {
  eyebrow: "Certified and industry-proven",
  title: "Built for programs that audit their suppliers.",
  intro:
    "Our quality system is registered to aerospace and medical standards, and we're cleared to handle export-controlled drawings.",
  certs: [
    { code: "AS9100D", detail: "Aerospace quality management" },
    { code: "ISO 9001:2015", detail: "Quality management" },
    { code: "ISO 13485:2016", detail: "Medical device manufacturing" },
    { code: "ITAR", detail: "Registered with DDTC" },
  ],
  industriesHeading: "Industries we serve",
  industries: [
    { id: "aerospace", label: "Aerospace" },
    { id: "defense", label: "Defense" },
    { id: "medical", label: "Medical devices" },
    { id: "space", label: "Space and satellite" },
    { id: "energy", label: "Energy" },
    { id: "semiconductor", label: "Semiconductor" },
    { id: "optics", label: "Optics and photonics" },
    { id: "automation", label: "Industrial automation" },
  ],
  link: { label: "How we serve each industry", href: "/industries" },
};

export const process = {
  eyebrow: "Equipment and process",
  title: "From drawing to dock in five checkpoints.",
  intro:
    "Every job follows the same documented path, so you know what happens to your part and when.",
  steps: [
    {
      title: "Quote and DFM review",
      body: "An engineer reviews your model, flags cost drivers and sends a quote within two business days.",
    },
    {
      title: "Programming and fixturing",
      body: "CAM programs are verified in simulation; fixtures are designed for repeatability, not just the first part.",
    },
    {
      title: "First article inspection",
      body: "The first part is measured on CMM against every callout before the run continues. AS9102 reports on request.",
    },
    {
      title: "Production with in-process checks",
      body: "Operators check critical features at set intervals and log them, so drift is caught before scrap.",
    },
    {
      title: "Final inspection and ship",
      body: "Parts ship with a C of C, material certs and the inspection data your receiving team needs.",
    },
  ],
  equipmentHeading: "On the floor",
  equipment: [
    { count: "9", label: "5-axis machining centers" },
    { count: "7", label: "CNC lathes and mill-turns" },
    { count: "4", label: "Wire and sinker EDMs" },
    { count: "3", label: "CMMs in a climate-controlled lab" },
  ],
  link: { label: "View the equipment list", href: "/equipment" },
};

export const standard = {
  eyebrow: "The Tolvane standard",
  title: "A supplier you don't have to chase.",
  points: [
    {
      title: "One named contact",
      body: "Your project manager owns the job from quote to delivery and answers the phone.",
    },
    {
      title: "Honest lead times",
      body: "We quote dates we can hit. If something changes, you hear it from us first, with a plan.",
    },
    {
      title: "Data with every shipment",
      body: "Inspection results travel with the parts, not on request weeks later.",
    },
  ],
  stats: [
    { value: "98.6%", label: "On-time delivery" },
    { value: "0.21%", label: "Customer reject rate" },
    { value: "22 yr", label: "Average machinist tenure" },
  ],
};

export const careers = {
  eyebrow: "Careers",
  title: "Good machinists build good parts. We're hiring both.",
  body: "We hire CNC machinists, programmers and quality inspectors who care about the last tenth. Day and second shifts, paid training on new equipment and a climate-controlled shop.",
  cta: { label: "See open roles", href: "/about#careers" },
  roles: ["5-axis CNC machinist", "CAM programmer", "CMM inspector"],
};

export const quoteBand = {
  eyebrow: "Request a quote",
  title: "Have a drawing? Get a firm quote in 48 hours.",
  body: "Send a STEP file and PDF drawing with quantities. An engineer, not a form bot, replies with pricing, lead time and any DFM notes.",
  primary: { label: "Start a quote", href: "/contact#quote" },
};
