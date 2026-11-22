/**
 * Equipment page copy. Machine descriptions are generic by design: Tolvane is fictional,
 * so no real manufacturer models are listed.
 * Rhythm: hero (ink) → machining (surface) → metrology (ink) → support equipment (subtle) → quote (ink)
 */

export const equipmentPage = {
  meta: {
    title: "Equipment",
    description: "5-axis machining centers, CNC lathes, mill-turn centers, wire and sinker EDM, CMMs and supporting equipment.",
  },
  hero: {
    eyebrow: "Equipment",
    title: "Twenty CNC machines, checked for accuracy every quarter.",
    intro:
      "Between those checks, every machine runs on a preventive maintenance schedule.",
  },
  machining: {
    eyebrow: "Machining",
    title: "Production equipment",
    columns: ["Machine type", "Qty", "Travel / capacity", "Notes"],
    groups: [
      {
        name: "Milling",
        rows: [
          ["5-axis trunnion machining center", "5", "26 × 22 × 18 in", "20 k rpm, 12-pallet automation"],
          ["5-axis large-envelope machining center", "2", "32 × 24 × 20 in", "Through-spindle coolant"],
          ["High-speed 5-axis micro machining center", "2", "12 × 12 × 10 in", "42 k rpm spindle"],
        ],
      },
      {
        name: "Turning",
        rows: [
          ["Twin-spindle CNC lathe with live tooling", "3", "Ø3.25 in bar / Ø14 in chuck", "Bar feed, Y-axis"],
          ["B-axis mill-turn center", "2", "Ø10 × 20 in", "Sub-spindle, tool changer"],
          ["Swiss-type CNC lathe", "2", "Ø1.25 in bar", "Long, slender parts"],
        ],
      },
      {
        name: "EDM",
        rows: [
          ["Wire EDM", "3", "24 × 16 × 12 in", "Taper to 30°, submerged cutting"],
          ["Sinker EDM", "1", "20 × 14 × 12 in", "Orbiting, graphite and copper electrodes"],
        ],
      },
    ],
  },
  metrology: {
    eyebrow: "Metrology",
    title: "Inspection equipment",
    intro: "Housed in our climate-controlled lab and calibrated to standards traceable to NIST.",
    items: [
      { qty: "3", name: "Bridge CMMs with scanning probes" },
      { qty: "1", name: "Multisensor vision measurement system" },
      { qty: "1", name: "Surface profilometer" },
      { qty: "1", name: "Roundness and form tester" },
      { qty: "1", name: "Optical comparator" },
      { qty: "1", name: "Hardness tester" },
    ],
  },
  support: {
    eyebrow: "Support",
    title: "Supporting equipment",
    items: [
      "Fiber laser marking station",
      "Ultrasonic parts washer",
      "Thermal deburring and vibratory finishing",
      "Surface grinder",
      "Horizontal band saws",
      "Manual mills and lathes for fixtures",
      "CAM workstations with machine simulation",
      "Tool presetter",
    ],
  },
} as const;
