export const inquiryTopics = [
  "Making a donation",
  "Volunteering in Cambodia",
  "Volunteering from home",
  "Fundraising for PinkLove79",
  "Partnering with us",
  "Visiting our projects",
  "General question",
] as const;

export type InquiryTopic = (typeof inquiryTopics)[number];

export type InquiryFields = {
  name: string;
  email: string;
  country: string;
  organization: string;
  topic: string;
  message: string;
};

export type InquiryState = {
  status: "idle" | "success" | "error";
  message: string;
  /** Field name → problem, rendered under the input. */
  errors: Partial<Record<keyof InquiryFields, string>>;
  /** Echoed back so the form keeps what was typed after a failed submit. */
  values: Partial<InquiryFields>;
};

export const emptyInquiryState: InquiryState = {
  status: "idle",
  message: "",
  errors: {},
  values: {},
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function readInquiry(formData: FormData): InquiryFields {
  const get = (key: keyof InquiryFields) =>
    String(formData.get(key) ?? "").trim();

  return {
    name: get("name"),
    email: get("email"),
    country: get("country"),
    organization: get("organization"),
    topic: get("topic"),
    message: get("message"),
  };
}

export function validateInquiry(fields: InquiryFields) {
  const errors: InquiryState["errors"] = {};

  if (fields.name.length < 2) {
    errors.name = "Please tell us your name.";
  } else if (fields.name.length > 120) {
    errors.name = "Please use 120 characters or fewer.";
  }

  if (!fields.email) {
    errors.email = "Please add an email so we can reply.";
  } else if (!EMAIL_RE.test(fields.email) || fields.email.length > 200) {
    errors.email = "That email address doesn't look right.";
  }

  if (fields.message.length < 10) {
    errors.message = "Please tell us a little more (at least 10 characters).";
  } else if (fields.message.length > 4000) {
    errors.message = "Please keep your message under 4000 characters.";
  }

  if (fields.country.length > 80) errors.country = "That looks too long.";
  if (fields.organization.length > 160) {
    errors.organization = "That looks too long.";
  }

  return errors;
}
