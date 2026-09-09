"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitInquiry } from "@/app/actions";
import { emptyInquiryState, inquiryTopics } from "@/lib/inquiry";
import { Button } from "@/components/ui";

const fieldClass =
  "w-full rounded-2xl border-0 bg-white px-4 py-3 text-base text-ink ring-1 ring-brand-200 transition-shadow placeholder:text-ink-soft/55 focus:ring-2 focus:ring-brand-500";

function Label({
  htmlFor,
  children,
  optional,
}: {
  htmlFor: string;
  children: string;
  optional?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-bold text-ink">
      {children}
      {optional ? (
        <span className="ml-1.5 font-medium text-ink-soft">(optional)</span>
      ) : null}
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-sm font-semibold text-brand-700">
      {message}
    </p>
  );
}

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="px-8">
      {pending ? "Sending…" : label}
    </Button>
  );
}

export function InquiryForm({
  defaultTopic,
  submitLabel = "Send message",
  showOrganization = false,
}: {
  defaultTopic?: string;
  submitLabel?: string;
  showOrganization?: boolean;
}) {
  const [state, formAction] = useActionState(submitInquiry, emptyInquiryState);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="rounded-3xl bg-[var(--surface)] p-8 ring-1 ring-[color:var(--surface-ring)] shadow-soft"
      >
        <p className="text-4xl" aria-hidden>
          🙏
        </p>
        <h3 className="mt-4 font-display text-2xl text-ink">Thank you!</h3>
        <p className="mt-3 text-lg leading-relaxed text-ink-soft">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="rounded-3xl bg-[var(--surface)] p-6 ring-1 ring-[color:var(--surface-ring)] shadow-soft sm:p-8"
      noValidate
    >
      {state.status === "error" && state.message ? (
        <p
          role="alert"
          className="mb-6 rounded-2xl bg-brand-100 px-4 py-3 text-sm font-semibold text-brand-800"
        >
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Your name</Label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            defaultValue={state.values.name}
            aria-invalid={state.errors.name ? true : undefined}
            aria-describedby={state.errors.name ? "name-error" : undefined}
            className={fieldClass}
            placeholder="e.g. Sophea Chan"
          />
          <FieldError id="name-error" message={state.errors.name} />
        </div>

        <div>
          <Label htmlFor="email">Email address</Label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            defaultValue={state.values.email}
            aria-invalid={state.errors.email ? true : undefined}
            aria-describedby={state.errors.email ? "email-error" : undefined}
            className={fieldClass}
            placeholder="you@example.com"
          />
          <FieldError id="email-error" message={state.errors.email} />
        </div>

        <div>
          <Label htmlFor="country" optional>
            Where are you from?
          </Label>
          <input
            id="country"
            name="country"
            type="text"
            autoComplete="country-name"
            defaultValue={state.values.country}
            className={fieldClass}
            placeholder="Country or city"
          />
          <FieldError id="country-error" message={state.errors.country} />
        </div>

        <div>
          <Label htmlFor="topic">I would like to talk about</Label>
          <select
            id="topic"
            name="topic"
            defaultValue={
              state.values.topic ?? defaultTopic ?? inquiryTopics[6]
            }
            className={fieldClass}
          >
            {inquiryTopics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>

        {showOrganization ? (
          <div className="sm:col-span-2">
            <Label htmlFor="organization" optional>
              Organization
            </Label>
            <input
              id="organization"
              name="organization"
              type="text"
              autoComplete="organization"
              defaultValue={state.values.organization}
              className={fieldClass}
              placeholder="Church, school, hotel, company…"
            />
            <FieldError
              id="organization-error"
              message={state.errors.organization}
            />
          </div>
        ) : null}

        <div className="sm:col-span-2">
          <Label htmlFor="message">Your message</Label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            defaultValue={state.values.message}
            aria-invalid={state.errors.message ? true : undefined}
            aria-describedby={
              state.errors.message ? "message-error" : undefined
            }
            className={`${fieldClass} resize-y`}
            placeholder="Tell us a little about yourself and how you would like to help."
          />
          <FieldError id="message-error" message={state.errors.message} />
        </div>
      </div>

      {/* Honeypot — hidden from people, tempting to bots. */}
      <div aria-hidden className="hidden">
        <label htmlFor="nickname">Nickname</label>
        <input id="nickname" name="nickname" type="text" tabIndex={-1} />
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <SubmitButton label={submitLabel} />
        <p className="text-sm text-ink-soft">
          We only use your details to reply to you.
        </p>
      </div>
    </form>
  );
}
