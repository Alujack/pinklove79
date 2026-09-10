import { existsSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
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

/*
 * Only render a portrait we can actually serve.
 *
 * This page is prerendered, so the lookup runs once at build time and costs
 * nothing per request. It means a portrait can be listed in `lib/team.ts`
 * before the file has been added without the page shipping a broken image —
 * the avatar falls back to initials until the file lands in `public/team/`,
 * and appears the next time the site is built.
 */
function resolvePhoto(person: Person) {
  if (!person.photo) return null;
  const file = path.join(process.cwd(), "public", person.photo.src);
  return existsSync(file) ? person.photo : null;
}

/**
 * Portrait, or initials where there is no photo yet.
 *
 * The initials are painted underneath the photo rather than instead of it, so
 * the avatar still reads as an avatar while the image is loading. It is
 * decorative either way — the person's name is right beside it in the
 * heading.
 */
function Avatar({ person, size = "lg" }: { person: Person; size?: "lg" | "sm" }) {
  const lg = size === "lg";
  const photo = resolvePhoto(person);

  return (
    <span
      aria-hidden
      className={`relative grid shrink-0 place-items-center overflow-hidden rounded-full bg-brand-100 font-display text-brand-700 ring-1 ring-brand-200 ${
        lg
          ? "h-28 w-28 text-3xl sm:h-32 sm:w-32"
          : "h-16 w-16 text-lg"
      }`}
    >
      {initials(person.name)}
      {photo ? (
        <Image
          src={photo.src}
          alt=""
          width={lg ? 256 : 128}
          height={lg ? 256 : 128}
          sizes={lg ? "128px" : "64px"}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: photo.position }}
        />
      ) : null}
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
      href: `tel:${phone.replace(/\s/g, "")}`,
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
                <Avatar person={person} />
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

                  <div className="measure mt-6 space-y-4 text-read text-ink-body">
                    {person.bio.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                    ))}
                  </div>

                  {/*
                   * A left rule rather than a tinted panel: the panel fill sat
                   * within a couple of percent of the card behind it on some
                   * bands, and the decorative quote mark landed on top of the
                   * first line of the quote itself.
                   */}
                  {person.quote ? (
                    <blockquote className="measure mt-7 border-l-2 border-brand-300 pl-5 sm:pl-6">
                      <p className="font-display text-xl leading-snug text-ink sm:text-2xl">
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
              <Avatar person={person} size="sm" />
              <h3 className="mt-5 font-display text-2xl text-ink">
                {person.name}
              </h3>
              <p className="mt-1.5 text-sm font-semibold text-brand-600">
                {person.role}
              </p>
              <p className="mt-1 text-sm text-ink-soft">
                <span aria-hidden className="mr-1.5">
                  {person.flag}
                </span>
                {person.country}
              </p>
              <div className="mt-5 flex-1 space-y-3.5 text-base leading-relaxed text-ink-body">
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
