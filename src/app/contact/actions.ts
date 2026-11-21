"use server";

export type QuoteFieldErrors = Partial<Record<"name" | "company" | "email" | "message", string>>;

export type QuoteState = {
  status: "idle" | "error" | "success";
  errors: QuoteFieldErrors;
  values: Record<string, string>;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates the quote request. Portfolio demo: nothing is stored or sent.
 * Wire this to email or a CRM before using it on a real site.
 */
export async function submitQuote(_prev: QuoteState, formData: FormData): Promise<QuoteState> {
  const get = (k: string) => String(formData.get(k) ?? "").trim();
  const values = {
    name: get("name"),
    company: get("company"),
    email: get("email"),
    phone: get("phone"),
    process: get("process"),
    quantity: get("quantity"),
    itar: formData.get("itar") ? "on" : "",
    message: get("message"),
  };

  const errors: QuoteFieldErrors = {};
  if (!values.name) errors.name = "Enter your full name.";
  if (!values.company) errors.company = "Enter your company name.";
  if (!values.email) errors.email = "Enter your work email.";
  else if (!EMAIL.test(values.email)) errors.email = "Enter an email address like name@company.com.";
  if (values.message.length < 10) errors.message = "Describe the part in at least a few words.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, values };
  }
  return { status: "success", errors: {}, values: {} };
}
