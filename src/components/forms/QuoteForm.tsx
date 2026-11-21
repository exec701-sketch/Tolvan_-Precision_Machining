"use client";

import { useActionState, useEffect, useRef } from "react";
import { CircleAlert, CircleCheck } from "lucide-react";
import { submitQuote, type QuoteFieldErrors, type QuoteState } from "@/app/contact/actions";
import { contactPage } from "@/content/contact";
import { buttonClass } from "@/components/ui/Button";

const f = contactPage.form;
const initial: QuoteState = { status: "idle", errors: {}, values: {} };

const inputClass =
  "mt-2 block w-full min-h-11 border bg-surface px-3 py-2 text-ink placeholder:text-steel-700 aria-[invalid=true]:border-2 aria-[invalid=true]:border-danger";

export function QuoteForm() {
  const [state, action, pending] = useActionState(submitQuote, initial);
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  // Move focus to the error summary or success message after submit.
  useEffect(() => {
    if (state.status === "error") summaryRef.current?.focus();
    if (state.status === "success") successRef.current?.focus();
  }, [state]);

  if (state.status === "success") {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="flex gap-4 border-2 border-success bg-surface p-6">
        <CircleCheck aria-hidden="true" className="size-6 shrink-0 text-success" />
        <div>
          <p className="text-lg font-bold">{f.success.title}</p>
          <p className="mt-1 text-steel-700">{f.success.body}</p>
        </div>
      </div>
    );
  }

  const errors = state.errors;
  const errorList = Object.entries(errors) as [keyof QuoteFieldErrors, string][];
  const v = state.values;

  return (
    <form action={action} noValidate aria-describedby="form-note" className="space-y-6">
      <p id="form-note" className="text-steel-700">
        {f.note}
      </p>

      {errorList.length > 0 && (
        <div ref={summaryRef} tabIndex={-1} role="alert" className="border-2 border-danger bg-surface p-5">
          <p className="flex items-center gap-2 font-bold text-danger">
            <CircleAlert aria-hidden="true" className="size-5" />
            Please fix {errorList.length === 1 ? "1 field" : `${errorList.length} fields`}:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            {errorList.map(([key, msg]) => (
              <li key={key}>
                <a href={`#${key}`} className="prose-link">
                  {msg}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label={f.fields.name.label} required error={errors.name}>
          <input id="name" name="name" type="text" autoComplete={f.fields.name.autoComplete} defaultValue={v.name} {...invalid("name", errors)} className={`${inputClass} border-steel-400`} />
        </Field>
        <Field id="company" label={f.fields.company.label} required error={errors.company}>
          <input id="company" name="company" type="text" autoComplete={f.fields.company.autoComplete} defaultValue={v.company} {...invalid("company", errors)} className={`${inputClass} border-steel-400`} />
        </Field>
        <Field id="email" label={f.fields.email.label} required error={errors.email}>
          <input id="email" name="email" type="email" autoComplete={f.fields.email.autoComplete} defaultValue={v.email} {...invalid("email", errors)} className={`${inputClass} border-steel-400`} />
        </Field>
        <Field id="phone" label={f.fields.phone.label} hint={f.fields.phone.hint}>
          <input id="phone" name="phone" type="tel" autoComplete={f.fields.phone.autoComplete} defaultValue={v.phone} aria-describedby="phone-hint" className={`${inputClass} border-steel-400`} />
        </Field>
        <Field id="process" label={f.fields.process.label}>
          <select id="process" name="process" defaultValue={v.process || f.fields.process.options[0]} className={`${inputClass} border-steel-400`}>
            {f.fields.process.options.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </Field>
        <Field id="quantity" label={f.fields.quantity.label} hint={f.fields.quantity.hint}>
          <input id="quantity" name="quantity" type="text" defaultValue={v.quantity} aria-describedby="quantity-hint" className={`${inputClass} border-steel-400`} />
        </Field>
      </div>

      <Field id="message" label={f.fields.message.label} required hint={f.fields.message.hint} error={errors.message}>
        <textarea id="message" name="message" rows={6} defaultValue={v.message} {...invalid("message", errors, true)} className={`${inputClass} border-steel-400`} />
      </Field>

      <div className="flex items-start gap-3">
        <input id="itar" name="itar" type="checkbox" defaultChecked={v.itar === "on"} className="mt-0.5 size-5 shrink-0 accent-blueprint" />
        <label htmlFor="itar" className="font-medium">
          {f.fields.itar.label}
        </label>
      </div>

      <p className="border-l-4 border-blueprint bg-subtle px-4 py-3 text-steel-700">{f.filesNote}</p>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
        <button type="submit" disabled={pending} className={`${buttonClass("primary", "light")} disabled:cursor-wait`}>
          {pending ? f.pending : f.submit}
        </button>
        <p className="text-sm text-steel-700">{f.demoNote}</p>
      </div>
    </form>
  );
}

function invalid(key: keyof QuoteFieldErrors, errors: QuoteFieldErrors, hasHint = false) {
  const describedBy = [hasHint ? `${key}-hint` : null, errors[key] ? `${key}-error` : null].filter(Boolean).join(" ");
  return {
    required: true,
    "aria-required": true as const,
    "aria-invalid": errors[key] ? (true as const) : undefined,
    "aria-describedby": describedBy || undefined,
  };
}

function Field({
  id,
  label,
  required = false,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="font-semibold text-ink">
        {label}
        {required && <span className="font-normal text-steel-700"> (required)</span>}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="mt-1 text-sm text-steel-700">
          {hint}
        </p>
      )}
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-center gap-2 text-sm font-medium text-danger">
          <CircleAlert aria-hidden="true" className="size-4 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}
