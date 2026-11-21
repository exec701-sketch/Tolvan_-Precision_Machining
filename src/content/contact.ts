/** Contact page copy. Rhythm: hero (ink) → quote form + details (surface) → call band (ink) */

export const contactPage = {
  meta: {
    title: "Request a quote",
    description: "Request a quote for precision CNC machined parts. Firm pricing and lead time within 48 hours.",
  },
  hero: {
    eyebrow: "Contact",
    title: "Tell us about your part.",
    intro:
      "Fill in what you know and an estimator will reply within one business day. Firm quotes follow within 48 hours of receiving your drawings.",
  },
  form: {
    heading: "Request a quote",
    note: "Fields marked required must be filled in. Everything else helps us quote faster.",
    fields: {
      name: { label: "Full name", autoComplete: "name" },
      company: { label: "Company", autoComplete: "organization" },
      email: { label: "Work email", autoComplete: "email" },
      phone: { label: "Phone", autoComplete: "tel", hint: "Optional" },
      process: {
        label: "Primary process",
        options: ["Not sure yet", "5-axis milling", "CNC turning", "Mill-turn", "Wire or sinker EDM", "Micro machining", "Finish machining of printed parts"],
      },
      quantity: { label: "Quantity", hint: "For example: 5 prototypes, then 500 per year" },
      itar: { label: "This project includes ITAR or export-controlled data" },
      message: { label: "Project details", hint: "Material, critical tolerances, finish, target ship date" },
    },
    filesNote:
      "Don't attach drawings here. After you submit, we'll email a secure upload link for STEP and PDF files. Export-controlled data is handled only on ITAR-compliant systems.",
    submit: "Send request",
    pending: "Sending…",
    success: {
      title: "Request received.",
      body: "Thanks. An estimator will email you within one business day with a secure link for your drawings.",
    },
    demoNote: "Portfolio demo: submissions are validated but not stored or sent anywhere.",
  },
  details: {
    heading: "Reach us directly",
    hoursLabel: "Office hours",
    visitHeading: "Visit the shop",
    visitBody: "Customer audits and shop tours are welcome. Call ahead and we'll have your project manager meet you.",
  },
  band: {
    eyebrow: "Prefer to talk?",
    title: "Call an estimator directly.",
    body: "Weekdays from 6 am to 6 pm Eastern, you'll reach a person who can talk through your part.",
  },
} as const;
