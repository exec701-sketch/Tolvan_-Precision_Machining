/** Industries page copy. Rhythm: hero (ink) → industry list (surface) → quote (ink) */

export const industriesPage = {
  meta: {
    title: "Industries",
    description: "Precision machined parts for aerospace, defense, medical device, space, energy, semiconductor, optics and automation programs.",
  },
  hero: {
    eyebrow: "Industries",
    title: "Parts for programs where failure isn't an option.",
    intro:
      "Each industry has its own paperwork, materials and inspection habits. We've built our process around the strictest of them, so the rest come easily.",
  },
  listHeading: { eyebrow: "Who we build for", title: "Industries we serve" },
  items: [
    {
      id: "aerospace",
      label: "Aerospace",
      body: "Flight hardware brackets, actuator housings and fittings in aluminum, titanium and nickel alloys, built under AS9100 with full lot traceability.",
      parts: ["Actuator housings", "Structural fittings", "Fuel system components"],
    },
    {
      id: "defense",
      label: "Defense",
      body: "ITAR-controlled components for guidance, communications and vehicle systems, handled by U.S. persons on restricted data systems.",
      parts: ["Optical mounts", "RF enclosures", "Weapon system components"],
    },
    {
      id: "medical",
      label: "Medical devices",
      body: "Surgical instrument parts and implant-grade components machined under ISO 13485 with lot control and cleanliness requirements.",
      parts: ["Surgical instrument components", "Orthopedic trial parts", "Diagnostic equipment housings"],
    },
    {
      id: "space",
      label: "Space and satellite",
      body: "Lightweighted structures and thermal hardware where every gram counts and outgassing-friendly materials matter.",
      parts: ["Satellite brackets", "Thermal straps and plates", "Propulsion fittings"],
    },
    {
      id: "energy",
      label: "Energy",
      body: "Wear-resistant valve, pump and downhole tool components in stainless, duplex and nickel alloys that survive heat and pressure.",
      parts: ["Valve bodies and seats", "Pump components", "Sensor housings"],
    },
    {
      id: "semiconductor",
      label: "Semiconductor",
      body: "Vacuum chamber parts and wafer-handling components with tight flatness and clean-room-ready finishes.",
      parts: ["Chamber components", "End effectors", "Gas distribution plates"],
    },
    {
      id: "optics",
      label: "Optics and photonics",
      body: "Stable mounts and housings in Invar, aluminum and stainless where thermal behavior and flatness drive the design.",
      parts: ["Lens cells", "Laser mounts", "Kinematic bases"],
    },
    {
      id: "automation",
      label: "Industrial automation",
      body: "Robotic end-of-arm tooling, gearbox components and fixtures built fast so production lines keep moving.",
      parts: ["End-of-arm tooling", "Precision shafts", "Fixture plates"],
    },
  ],
} as const;
