import type { Metadata } from "next";
import { site, whatsappHref } from "@/lib/site";
import { PageHero } from "@/components/page-hero";
import { InquiryForm } from "@/components/inquiry-form";
import { Card, Prose, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact PinkLove79 in Takeo Province, Cambodia about donating, volunteering, fundraising, visiting our projects or becoming a partner.",
};

const reasons = [
  "Donating",
  "Volunteering",
  "Fundraising",
  "Visiting our projects",
  "Becoming a partner",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title={
          <>
            We would love to{" "}
            <span className="text-brand-600">hear from you</span>
          </>
        }
        lead="We welcome individuals, organizations and partners who would like to learn more about PinkLove79 or support our community projects in Cambodia."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading
              title="PinkLove79 — Cambodia"
              lead="Whether you are interested in donating, volunteering, fundraising, visiting our projects, or becoming a partner, please contact us."
            />

            <ul className="mt-8 flex flex-wrap gap-2">
              {reasons.map((reason) => (
                <li
                  key={reason}
                  className="rounded-full bg-brand-100 px-4 py-2 text-sm font-bold text-brand-700"
                >
                  {reason}
                </li>
              ))}
            </ul>

            <Card className="mt-9">
              <dl className="space-y-6">
                <div>
                  <dt className="text-xs font-bold tracking-[0.14em] text-brand-700 uppercase">
                    📍 Address
                  </dt>
                  <dd className="mt-2">
                    <address className="space-y-1 leading-relaxed text-ink not-italic">
                      {site.address.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </address>
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-bold tracking-[0.14em] text-brand-700 uppercase">
                    📧 Email
                  </dt>
                  <dd className="mt-2 leading-relaxed text-ink">
                    {site.email ? (
                      <a
                        href={`mailto:${site.email}`}
                        className="font-semibold text-brand-700 hover:text-brand-800"
                      >
                        {site.email}
                      </a>
                    ) : (
                      <span className="text-ink-soft">
                        Coming soon — please use the form and we will reply by
                        email.
                      </span>
                    )}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-bold tracking-[0.14em] text-brand-700 uppercase">
                    📱 Phone / WhatsApp
                  </dt>
                  <dd className="mt-2 leading-relaxed text-ink">
                    {site.phone ? (
                      <a
                        href={whatsappHref || `tel:${site.phone}`}
                        className="font-semibold text-brand-700 hover:text-brand-800"
                      >
                        {site.phone}
                      </a>
                    ) : (
                      <span className="text-ink-soft">
                        Coming soon — please use the form to reach our team.
                      </span>
                    )}
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-bold tracking-[0.14em] text-brand-700 uppercase">
                    🌐 Website
                  </dt>
                  <dd className="mt-2 font-semibold text-ink">
                    {site.websiteLabel}
                  </dd>
                </div>
              </dl>
            </Card>

            <Prose className="mt-9 text-base">
              <p>
                We look forward to hearing from you and working together to
                create hope and better opportunities for children, families and
                communities.
              </p>
              <p className="font-bold text-ink">Thank you for caring. ❤️</p>
            </Prose>
          </div>

          <div>
            <h2 className="sr-only">Send us a message</h2>
            <InquiryForm showOrganization />
          </div>
        </div>
      </Section>
    </>
  );
}
