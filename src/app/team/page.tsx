import type { Metadata } from "next";
import Link from "next/link";
import { founders, initials, team, type Person } from "@/lib/team";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Icon, type IconName } from "@/components/icons";
import { Card, Lead, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Meet Our Founders & Team",
  description:
    "The founders and team behind PinkLove79 — in the United States and in Takeo Province, Cambodia — caring for children, families and communities.",
};

function Avatar({ name, size = "lg" }: { name: string; size?: "lg" | "sm" }) {
  return (
    <span
      aria-hidden
      className={
        size === "lg"
          ? "grid h-20 w-20 shrink-0 place-items-center rounded-full bg-brand-100 font-display text-2xl text-brand-700 ring-1 ring-brand-200"
          : "grid h-14 w-14 shrink-0 place-items-center rounded-full bg-brand-100 font-display text-lg text-brand-700 ring-1 ring-brand-200"
      }
    >
      {initials(name)}
    </span>
  );
}

function ContactRows({ person }: { person: Person }) {
  const { whatsapp, phone, email } = person.contact;
  const rows = [
    whatsapp && {
      icon: "phone",
      label: "WhatsApp",
      value: whatsapp,
      href: `https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`,
    },
    phone && {
      icon: "phone",
      label: "Phone",
      value: phone,
      href: `tel:${phone}`,
    },
    email && {
      icon: "mail",
      label: "Email",
      value: email,
      href: `mailto:${email}`,
    },
  ].filter(Boolean) as Array<{
    icon: IconName;
    label: string;
    value: string;
    href: string;
  }>;

  if (rows.length === 0) {
    return (
      <p className="text-sm text-ink-soft">
        To reach {person.name.replace(/^Ms\.\s+/, "")}, please{" "}
        <Link
          href="/contact"
          className="font-bold text-brand-700 underline decoration-brand-300 underline-offset-4 hover:text-brand-800"
        >
          contact our team
        </Link>
        .
      </p>
    );
  }

  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
      {rows.map((row) => (
        <li key={row.label}>
          <a
            href={row.href}
            className="flex items-center gap-2 font-semibold text-ink-soft transition-colors hover:text-brand-700"
          >
            <Icon name={row.icon} className="h-4 w-4 shrink-0 text-brand-500" />
            <span className="sr-only">{row.label}: </span>
            {row.value}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our people"
        title={
          <>
            Meet our founders <span className="text-brand-600">&amp; team</span>
          </>
        }
        lead="PinkLove79 is the work of people in Cambodia and around the world who share one heart — to care, encourage, and create opportunities for others."
      />

      <Lead>
        <p>
          Our founders began in different countries and from different
          circumstances. What they share is a belief that helping others does
          not have to wait for distance to close or for wealth to arrive.
        </p>
      </Lead>

      {/* -------------------------------------------------------- founders -- */}
      <Section tone="paper">
        <SectionHeading
          emoji="🤝"
          title="Our founders"
          lead="Two countries, two very different starting points, one shared purpose."
        />
        <div className="mt-12 space-y-8">
          {founders.map((person) => (
            <Card key={person.slug} as="article" className="sm:p-9">
              <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
                <Avatar name={person.name} />
                <div className="min-w-0">
                  <h3 className="font-display text-3xl text-ink">
                    {person.name}
                  </h3>
                  <p className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm font-bold tracking-wide text-brand-600 uppercase">
                    <span>{person.role}</span>
                    <span aria-hidden className="text-brand-300">
                      |
                    </span>
                    <span className="text-ink-soft">
                      <span aria-hidden className="mr-1.5">
                        {person.flag}
                      </span>
                      {person.country}
                    </span>
                  </p>

                  <div className="measure mt-6 space-y-4 text-read leading-relaxed text-ink-body">
                    {person.bio.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                  </div>

                  {person.quote ? (
                    <blockquote className="measure relative mt-7 rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-100">
                      <Icon
                        name="quote"
                        className="absolute top-3 right-4 h-10 w-10 text-brand-200"
                      />
                      <p className="relative font-display text-xl leading-snug text-ink sm:text-2xl">
                        &ldquo;{person.quote}&rdquo;
                      </p>
                      <footer className="mt-3 text-sm font-bold text-brand-700">
                        — {person.name}
                      </footer>
                    </blockquote>
                  ) : null}

                  <div className="mt-7 border-t border-brand-100 pt-5">
                    <ContactRows person={person} />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------------ team -- */}
      <Section>
        <SectionHeading
          emoji="👥"
          title="Our team & specialists"
          lead="The people who keep our records straight, our doors open, and our community connected."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {team.map((person) => (
            <Card key={person.slug} as="article" className="flex flex-col">
              <Avatar name={person.name} size="sm" />
              <h3 className="mt-5 font-display text-2xl text-ink">
                {person.name}
              </h3>
              <p className="mt-2 text-sm font-bold tracking-wide text-brand-600 uppercase">
                {person.role}
              </p>
              <p className="mt-1 text-sm font-semibold text-ink-soft">
                <span aria-hidden className="mr-1.5">
                  {person.flag}
                </span>
                {person.country}
              </p>
              <div className="mt-5 flex-1 space-y-4 leading-relaxed text-ink-body">
                {person.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-6 border-t border-brand-100 pt-5">
                <ContactRows person={person} />
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Come and be part of this"
        lead="Our team is small and our community is growing. Whether you give, volunteer, or partner with us, there is a place for you here."
        primary={{ href: "/volunteer", label: "Volunteer with us" }}
        secondary={{ href: "/contact", label: "Contact our team" }}
      />
    </>
  );
}
