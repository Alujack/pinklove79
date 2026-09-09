"use server";

import {
  readInquiry,
  validateInquiry,
  type InquiryFields,
  type InquiryState,
} from "@/lib/inquiry";

/**
 * Delivers an inquiry by email through Resend (https://resend.com) when the
 * environment is configured. Without credentials the submission is logged so
 * nothing is silently lost while the mailbox is still being set up.
 */
async function deliver(fields: InquiryFields) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  const summary = [
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    fields.country && `Country: ${fields.country}`,
    fields.organization && `Organization: ${fields.organization}`,
    `Topic: ${fields.topic || "Not specified"}`,
    "",
    fields.message,
  ]
    .filter(Boolean)
    .join("\n");

  if (!apiKey || !to || !from) {
    console.warn(
      "[pinklove79] Email delivery is not configured " +
        "(RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL). " +
        "Logging the inquiry instead:\n" +
        summary,
    );
    return;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: fields.email,
      subject: `PinkLove79 — ${fields.topic || "New message"} from ${fields.name}`,
      text: summary,
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Resend responded ${response.status}: ${await response.text()}`,
    );
  }
}

export async function submitInquiry(
  _prev: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  // Bots fill hidden fields; humans leave them empty.
  if (String(formData.get("nickname") ?? "")) {
    return {
      status: "success",
      message: "Thank you — your message has been sent.",
      errors: {},
      values: {},
    };
  }

  const fields = readInquiry(formData);
  const errors = validateInquiry(fields);

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please check the highlighted fields and try again.",
      errors,
      values: fields,
    };
  }

  try {
    await deliver(fields);
  } catch (error) {
    console.error("[pinklove79] Failed to deliver inquiry", error);
    return {
      status: "error",
      message:
        "Sorry — we couldn't send your message just now. Please try again, or email us directly.",
      errors: {},
      values: fields,
    };
  }

  return {
    status: "success",
    message:
      "Thank you for reaching out. We have received your message and our team will reply as soon as we can. ❤️",
    errors: {},
    values: {},
  };
}
