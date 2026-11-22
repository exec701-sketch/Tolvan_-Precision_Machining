/** Quality page copy. Rhythm: hero (ink) → certifications (surface) → inspection lab (ink) → documentation (subtle) → quote (ink) */

export const qualityPage = {
  meta: {
    title: "Quality and certifications",
    description: "AS9100D, ISO 9001:2015 and ISO 13485:2016 registered, ITAR registered, with a climate-controlled CMM lab and full documentation on every order.",
  },
  hero: {
    eyebrow: "Quality",
    title: "We inspect during the run as well as at the end.",
    intro:
      "Our quality system is audited by third-party registrars and by the customers who rely on us. Every part is measured against the drawing before it leaves.",
  },
  certs: {
    eyebrow: "Certifications",
    title: "Current registrations",
    items: [
      {
        code: "AS9100D",
        name: "Aerospace quality management",
        body: "The aerospace standard for configuration control, risk management, counterfeit-part prevention and first article inspection.",
      },
      {
        code: "ISO 9001:2015",
        name: "Quality management",
        body: "Covers our documented processes, corrective action system and continual improvement program.",
      },
      {
        code: "ISO 13485:2016",
        name: "Medical device manufacturing",
        body: "Adds lot traceability, cleanliness controls and process validation required by medical device OEMs.",
      },
      {
        code: "ITAR",
        name: "Registered with the U.S. State Department (DDTC)",
        body: "Export-controlled technical data is stored on restricted systems and accessed only by U.S. persons.",
      },
    ],
    note: "Certificates available on request.",
  },
  lab: {
    eyebrow: "Inspection lab",
    title: "Measured in a room built for measuring",
    intro:
      "Our metrology lab is temperature- and humidity-controlled, isolated from floor vibration and staffed by dedicated inspectors who don't report to production.",
    items: [
      { title: "Bridge CMMs", body: "Three CMMs with scanning probes for full-feature reports against the CAD model." },
      { title: "Vision measurement", body: "Optical and multisensor inspection for small features and soft materials." },
      { title: "Surface and form", body: "Profilometer, roundness tester and optical comparator for finish and form callouts." },
      { title: "Calibrated hand gauging", body: "Gauge blocks, pin gauges and thread gauges on a tracked calibration schedule." },
    ],
  },
  docs: {
    eyebrow: "Documentation",
    title: "The paperwork ships with the parts",
    intro: "Choose what your receiving team needs. Standard items ship free with every order.",
    standard: ["Certificate of conformance", "Material certifications", "Final inspection report", "Outside process certs"],
    onRequest: ["AS9102 first article report", "Full CMM data", "PPAP (levels 1 to 5)", "Customer-specific source inspection"],
  },
} as const;
