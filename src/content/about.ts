/** About page copy. Rhythm: hero (ink) → story (surface) → values (ink) → careers (subtle) → quote (ink) */

export const aboutPage = {
  meta: {
    title: "About the shop",
    description: "A family-owned precision machine shop in Grand Rapids, Michigan, founded in 2004, now 70 people across two shifts.",
  },
  hero: {
    eyebrow: "About Tolvane",
    title: "A machine shop run by machinists.",
    intro:
      "Tolvane started in 2004 with two used lathes and a promise to hold the print. Today we're 70 people, but the people answering your calls still know how to run the machines.",
  },
  story: {
    eyebrow: "Our story",
    title: "From a rented bay to 38,000 square feet",
    paragraphs: [
      "Founders Dana and Luis Tolvane opened the shop in a rented bay after years of watching good parts fail inspection because nobody owned the details. Their rule was simple: if the drawing says it, we hold it, and if we can't, we say so before we start.",
      "That rule brought repeat work from aerospace suppliers, then medical OEMs, then defense primes. The shop moved to Foundry Row in 2015 and added a dedicated inspection lab in 2019.",
      "We are still family owned. We reinvest in equipment and training every year, and we'd rather turn down a job than miss a date we promised.",
    ],
    timeline: [
      { year: "2004", event: "Shop opens with two CNC lathes" },
      { year: "2009", event: "First 5-axis machining center; ISO 9001 registration" },
      { year: "2013", event: "AS9100 registration and ITAR registration" },
      { year: "2015", event: "Move to the 38,000 ft² Foundry Row facility" },
      { year: "2019", event: "Climate-controlled metrology lab opens" },
      { year: "2023", event: "ISO 13485 registration; EDM department expands" },
    ],
  },
  values: {
    eyebrow: "How we work",
    title: "What we hold ourselves to",
    items: [
      { title: "Say it before we start", body: "Concerns about a tolerance, material or date get raised at quote time, not at shipping time." },
      { title: "Own the whole job", body: "Every order has a named project manager accountable from first call to final delivery." },
      { title: "Measure twice", body: "Inspectors are independent of production, and their sign-off is final." },
      { title: "Invest in people", body: "Paid apprenticeships, tuition support and training on every new machine we buy." },
    ],
  },
  careers: {
    eyebrow: "Careers",
    title: "Work at Tolvane",
    intro:
      "We offer competitive pay, health and retirement benefits, a shift differential, and a clean, climate-controlled shop. Send a résumé to the address below, or call and ask for a shop tour.",
    benefitsHeading: "What you get",
    benefits: [
      "Medical, dental and vision from day one",
      "401(k) with 5% match",
      "Paid apprenticeship program",
      "Tuition reimbursement",
      "Second-shift differential",
    ],
    rolesHeading: "Open roles",
    roles: [
      { title: "5-axis CNC machinist", shift: "Day or second shift", type: "Full-time" },
      { title: "CAM programmer", shift: "Day shift", type: "Full-time" },
      { title: "CMM inspector", shift: "Second shift", type: "Full-time" },
      { title: "Machinist apprentice", shift: "Day shift", type: "Full-time, paid training" },
    ],
    applyEmail: "careers@tolvane.example",
  },
} as const;
