/** Capabilities page copy. Rhythm: hero (ink) → services (surface) → tolerances (ink) → materials (subtle) → finishes (ink) → FAQ (surface) → quote (ink) */

export const capabilitiesPage = {
  meta: {
    title: "Capabilities",
    description: "5-axis milling, CNC turning, mill-turn, wire and sinker EDM, micro machining and finish machining of printed metal parts.",
  },
  hero: {
    eyebrow: "Capabilities",
    title: "Machining, EDM and inspection under one roof.",
    intro:
      "Most critical parts need more than one process. Keeping them in one building gives you one quality system, one schedule and one team that knows your part.",
    facts: [
      { label: "Tightest tolerance", value: "±0.0001 in" },
      { label: "Best surface finish", value: "4 Ra µin" },
      { label: "Largest milled part", value: "32 × 24 × 20 in" },
      { label: "Prototype lead time", value: "5 days" },
    ],
  },
  services: {
    eyebrow: "Processes",
    title: "What we run on the floor",
    items: [
      {
        id: "five-axis",
        title: "5-axis milling",
        body: "Simultaneous 5-axis lets us reach five faces in one clamping. Fewer setups means features hold their relationship to datums, and the part spends less time on the floor.",
        bullets: ["Impellers, housings, manifolds and brackets", "Pallet systems for lights-out production", "Probing for in-machine verification"],
      },
      {
        id: "turning",
        title: "CNC turning",
        body: "Twin-spindle lathes with live tooling and bar feeders handle everything from one-off shafts to repeat orders in the thousands.",
        bullets: ["Bar work to 3.25 in diameter", "Chucked work to 14 in diameter", "Threads, grooves and knurls held to class 3"],
      },
      {
        id: "mill-turn",
        title: "Mill-turn",
        body: "B-axis mill-turn centers complete turned parts with off-axis features in one cycle, so you are not paying for a second operation.",
        bullets: ["Sub-spindle for back-side work", "Cross-drilled and angled ports", "Ideal for hydraulic and valve components"],
      },
      {
        id: "edm",
        title: "Wire and sinker EDM",
        body: "Electrical discharge machining cuts hardened steel, carbide and exotic alloys with no tool pressure, holding tight tolerances on thin walls and sharp internal corners.",
        bullets: ["Wire down to 0.004 in diameter", "Taper cutting to 30°", "Sinker EDM for blind cavities and ribs"],
      },
      {
        id: "micro",
        title: "Micro machining",
        body: "High-speed spindles and tools down to 0.005 in let us produce small features for medical and electronics work, verified on optical measurement.",
        bullets: ["Micro holes and slots", "Burr-free edges under magnification", "Vision CMM inspection"],
      },
      {
        id: "additive",
        title: "Metal additive and finish machining",
        body: "We source DMLS printed parts in titanium and nickel alloys from qualified partners, then machine the critical features and sealing faces to final tolerance in house.",
        bullets: ["Ti-6Al-4V, Inconel 718 and 17-4 PH", "Support removal and stress relief coordinated", "Combined inspection report"],
      },
    ],
  },
  tolerances: {
    eyebrow: "Tolerances",
    title: "What we hold, by process",
    intro: "Typical values for production. Tighter is possible on specific features: send the drawing and we'll tell you honestly.",
    columns: ["Process", "Max part size", "Standard tolerance", "Precision tolerance", "Typical finish"],
    rows: [
      ["5-axis milling", "32 × 24 × 20 in", "±0.0010 in", "±0.0002 in", "32 Ra µin"],
      ["CNC turning", "Ø14 × 24 in", "±0.0010 in", "±0.0002 in", "16 Ra µin"],
      ["Mill-turn", "Ø10 × 20 in", "±0.0010 in", "±0.0003 in", "32 Ra µin"],
      ["Wire EDM", "24 × 16 × 12 in", "±0.0005 in", "±0.0001 in", "8 Ra µin"],
      ["Micro machining", "4 × 4 × 2 in", "±0.0005 in", "±0.0001 in", "8 Ra µin"],
    ],
  },
  materials: {
    eyebrow: "Materials",
    title: "Materials we machine every week",
    intro: "Mill certs ship with every order, and full traceability is maintained from bar to box.",
    groups: [
      { name: "Aluminum", grades: ["6061-T6", "7075-T7351", "2024-T351", "MIC-6"] },
      { name: "Stainless steel", grades: ["303", "304/304L", "316/316L", "17-4 PH", "15-5 PH"] },
      { name: "Titanium", grades: ["Grade 2", "Ti-6Al-4V (Grade 5)", "Ti-6Al-4V ELI (Grade 23)"] },
      { name: "Nickel alloys", grades: ["Inconel 625", "Inconel 718", "Hastelloy C-276", "Monel 400"] },
      { name: "Tool and alloy steel", grades: ["4140", "4340", "A2", "D2", "H13", "S7"] },
      { name: "Copper alloys", grades: ["C101 copper", "C360 brass", "Beryllium copper", "Aluminum bronze"] },
      { name: "Engineering plastics", grades: ["PEEK", "Delrin (acetal)", "Ultem", "PTFE"] },
      { name: "Specialty", grades: ["Invar 36", "Kovar", "Tungsten heavy alloy"] },
    ],
  },
  finishes: {
    eyebrow: "Finishing",
    title: "Finished, marked and ready to install",
    intro: "We manage outside processing with approved vendors and own the schedule, so parts arrive complete.",
    items: [
      "Type II and Type III hard anodize",
      "Chem film (MIL-DTL-5541)",
      "Passivation (AMS 2700)",
      "Electroless nickel",
      "Black oxide",
      "Bead and media blast",
      "Electropolish",
      "Laser marking and engraving",
      "Heat treat and stress relief",
      "Powder coat",
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Common questions",
    items: [
      {
        q: "What files do you need for a quote?",
        a: "A 3D model (STEP or Parasolid) plus a PDF drawing with tolerances, material, finish and quantities. If you only have a drawing, we can still quote it.",
      },
      {
        q: "Do you have minimum order quantities?",
        a: "No. We run single prototypes and production lots alike. Unit price drops as quantity rises because setup cost is shared across more parts.",
      },
      {
        q: "Can you work to my inspection plan?",
        a: "Yes. We follow customer inspection plans and sampling levels, and can supply AS9102 first article reports, CMM data and PPAP documentation.",
      },
      {
        q: "Do you handle export-controlled drawings?",
        a: "Yes. We are ITAR registered, and controlled data is stored and accessed only by U.S. persons on restricted systems.",
      },
      {
        q: "How fast can you turn around a prototype?",
        a: "Simple prototypes can ship in five business days. Expedited options are available. Ask when you request a quote.",
      },
    ],
  },
} as const;
