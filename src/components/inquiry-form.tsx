"use client";

import type { ReactNode } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitInquiry } from "@/app/actions";
import { emptyInquiryState, inquiryTopics } from "@/lib/inquiry";
import { Icon } from "@/components/icons";
import { Button, Glyph } from "@/components/ui";

/*
 * A fixed height rather than vertical padding, so a text input and a native
 * `<select>` — which pads itself differently — end up the same size when
 * they share a row. The fill is pushed a step away from the card behind it
 * so the field reads as somewhere you can type.
 */
const fieldBase =
  "block w-full rounded-2xl border-0 bg-white text-base text-ink ring-1 ring-brand-200 transition-shadow placeholder:text-ink-soft/55 focus:ring-2 focus:ring-brand-500";

/** Single-line controls share a fixed height; the textarea sets its own. */
const fieldClass = `${fieldBase} h-13 px-4`;
const areaClass = `${fieldBase} resize-y p-4 leading-relaxed`;

/*
 * Fields are laid out in a two-column grid, and a label that wraps to two
 * lines used to push its own input half a line below its neighbour's —
 * "Where are you from? (optional)" against "I would like to talk about" was
 * visibly out of step. Each field is now a column-flex box whose label grows
 * to absorb the slack, so the inputs sit on the bottom edge of the row and
 * line up however long the labels are.
 */
function Field({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`flex flex-col ${className ?? ""}`}>{children}</div>;
}

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
    <label
      htmlFor={htmlFor}
      className="mb-2 flex grow flex-wrap items-baseline gap-x-1.5 text-sm leading-snug font-bold text-ink"
    >
      {children}
      {optional ? (
        <span className="font-medium text-ink-soft">(optional)</span>
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
        <Glyph size="lg">🙏</Glyph>
        <h3 className="mt-5 font-display text-2xl text-ink">Thank you!</h3>
        <p className="mt-3 text-read text-ink-body sm:text-read-lg">
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
        <Field>
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
        </Field>

        <Field>
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
        </Field>

        <Field>
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
        </Field>

        <Field>
          <Label htmlFor="topic">I would like to talk about</Label>
          {/*
           * The native arrow is drawn at the platform's own size and colour,
           * which made the select the one control on the form that did not
           * look like it belonged. Ours is positioned in the padding the
           * field reserves for it on the end side.
           */}
          <div className="relative">
            <select
              id="topic"
              name="topic"
              defaultValue={
                state.values.topic ?? defaultTopic ?? inquiryTopics[6]
              }
              className={`${fieldClass} cursor-pointer appearance-none pe-11`}
            >
              {inquiryTopics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
            <Icon
              name="arrow-right"
              className="pointer-events-none absolute inset-y-0 end-4 my-auto h-4 w-4 rotate-90 text-brand-500"
            />
          </div>
        </Field>

        {showOrganization ? (
          <Field className="sm:col-span-2">
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
          </Field>
        ) : null}

        <Field className="sm:col-span-2">
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
            className={areaClass}
            placeholder="Tell us a little about yourself and how you would like to help."
          />
          <FieldError id="message-error" message={state.errors.message} />
        </Field>
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
