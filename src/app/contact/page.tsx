import type { Metadata } from "next";
import { site, whatsappHref } from "@/lib/site";
import { PageHero } from "@/components/page-hero";
import { Brand } from "@/components/brand";
import { InquiryForm } from "@/components/inquiry-form";
import { Icon } from "@/components/icons";
import { Card, Chip, Prose, Section, SectionHeading } from "@/components/ui";

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
        title={
          <>
            We would love to{" "}
            <span className="text-[#ffb3cf]">hear from you</span>
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

            {/* Quiet metadata: these are things you can write to us about,
                not buttons, so they should not be shaped like buttons. */}
            <ul className="mt-8 flex flex-wrap gap-1.5">
              {reasons.map((reason) => (
                <li key={reason}>
                  <Chip>{reason}</Chip>
                </li>
              ))}
            </ul>

            <Card className="mt-9">
              <dl className="divide-y divide-white/15">
                <div className="py-5 first:pt-0 last:pb-0">
                  <dt className="flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-[color:var(--band-accent)] uppercase">
                    <Icon name="pin" className="h-4 w-4" />
                    Address
                  </dt>
                  <dd className="mt-2">
                    <address className="space-y-1 leading-relaxed text-ink not-italic">
                      {site.address.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </address>
                  </dd>
                </div>

                <div className="py-5 first:pt-0 last:pb-0">
                  <dt className="flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-[color:var(--band-accent)] uppercase">
                    <Icon name="mail" className="h-4 w-4" />
                    Email
                  </dt>
                  <dd className="mt-2 leading-relaxed text-ink">
                    {site.email ? (
                      <a
                        href={`mailto:${site.email}`}
                        className="font-semibold text-[color:var(--band-accent)] hover:text-white"
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

                <div className="py-5 first:pt-0 last:pb-0">
                  <dt className="flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-[color:var(--band-accent)] uppercase">
                    <Icon name="phone" className="h-4 w-4" />
                    Phone / WhatsApp
                  </dt>
                  <dd className="mt-2 leading-relaxed text-ink">
                    {site.phone ? (
                      <a
                        href={whatsappHref || `tel:${site.phone}`}
                        className="font-semibold text-[color:var(--band-accent)] hover:text-white"
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

                <div className="py-5 first:pt-0 last:pb-0">
                  <dt className="flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-[color:var(--band-accent)] uppercase">
                    <Icon name="globe" className="h-4 w-4" />
                    Website
                  </dt>
                  <dd className="mt-2 font-semibold text-ink">
                    <Brand>{site.websiteLabel}</Brand>
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
