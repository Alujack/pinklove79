import Link from "next/link";
import { projects, site } from "@/lib/site";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icons";
import {
  ArrowLink,
  ButtonLink,
  Card,
  Chip,
  Container,
  Glyph,
  Section,
  SectionHeading,
  Stat,
  Verses,
} from "@/components/ui";

const changeSomething = [
  "🍚 A meal can give a child strength for another day of learning.",
  "🎒 A school bag can help a child walk into school with confidence.",
  "📚 An education can open a door to a different future.",
  "🤝 And a caring community can remind a child that they matter.",
];

const waysToHelp = [
  {
    emoji: "❤️",
    title: "Give a donation",
    body: "One-time, monthly, or for a specific project. Your kindness can become a meal, a school bag, or a family's first small business.",
    href: "/donate",
    cta: "Ways to give",
  },
  {
    emoji: "🤝",
    title: "Volunteer your time",
    body: "Join us in Cambodia, or help from your own home by sharing our story, teaching online, or organizing a small fundraiser.",
    href: "/volunteer",
    cta: "Volunteer with us",
  },
  {
    emoji: "🌍",
    title: "Partner with us",
    body: "Churches, charities, schools, universities, hotels, airlines, tour companies, factories and businesses — there is a place for you here.",
    href: "/partner",
    cta: "Explore partnership",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ------------------------------------------------------------ hero -- */}
      {/*
       * `items-center` used to centre a short left column against a tall
       * card, which left a band of empty pink under the copy that read as a
       * mistake. Both columns now hang from the top, and the closing line
       * moved out of the column into a full-width rule beneath the fold, so
       * the two halves end together.
       */}
      <div className="glow overflow-hidden border-b border-brand-100">
        <Container className="py-14 sm:py-20 lg:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3.5 py-1.5 text-xs font-bold tracking-[0.12em] text-brand-700 uppercase ring-1 ring-brand-200">
                Takeo Province, Cambodia
              </p>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,1.4rem+4vw,4.25rem)] leading-[1.04] text-ink">
                79 children.
                <br />
                <span className="text-brand-600">79 stories.</span>
                <br />
                One hope.
              </h1>
              <p className="mt-7 measure text-read text-ink-body sm:text-read-lg">
                PinkLove79 walks alongside children, families and a whole
                village community in Cambodia — with daily meals, education,
                livelihoods, skills, and a place to belong.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/donate">
                  Donate today
                  <Icon name="heart" className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href="/volunteer" tone="secondary">
                  Become a volunteer
                </ButtonLink>
              </div>
            </div>

            <Card className="lg:p-8">
              <h2 className="font-display text-2xl text-ink">
                Our three projects
              </h2>
              <ul className="mt-5 space-y-1">
                {projects.map((project) => (
                  <li key={project.href}>
                    <Link
                      href={project.href}
                      className="group -mx-2 flex items-center gap-4 rounded-2xl p-2 transition-colors hover:bg-brand-50"
                    >
                      <Glyph size="lg">{project.emoji}</Glyph>
                      <span className="min-w-0">
                        <span className="block font-bold text-ink group-hover:text-brand-700">
                          {project.title}
                        </span>
                        <span className="khmer mt-0.5 block text-sm text-ink-soft">
                          {project.khmer}
                        </span>
                      </span>
                      <Icon
                        name="arrow-right"
                        className="ml-auto h-4 w-4 shrink-0 text-brand-300 transition-all group-hover:translate-x-0.5 group-hover:text-brand-600"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-brand-100 pt-6">
                <Stat value="79" label="Children" />
                <Stat value="500" label="Villagers" />
                <Stat value="1" label="Church" />
              </div>
            </Card>
          </div>

          {/*
           * The thesis of the whole site, given its own full-width line at
           * the foot of the hero rather than being buried as a fourth
           * paragraph in the left column.
           */}
          <p className="mt-12 border-t border-brand-200/70 pt-8 text-read text-ink-body sm:mt-16 sm:text-read-lg">
            <span className="font-bold text-ink">
              You don&apos;t have to change the whole world to make a
              difference.
            </span>{" "}
            Sometimes, helping one child is enough to change one life.
          </p>
        </Container>
      </div>

      {/* -------------------------------------------------------- projects -- */}
      <Section id="projects" tone="paper">
        <SectionHeading
          align="center"
          title="Where our work is focused"
          lead="Three projects, one community — supporting children today while helping families build a future they can stand on."
        />
        {/*
         * `flex-1` on the blurb used to push the tags to the bottom of each
         * card, so a shorter blurb opened a ragged hole above them. The
         * blurb now sits directly under the title and the *tag block* takes
         * the slack, which keeps the "Learn more" links on one line across
         * the row while the copy stays where the eye expects it.
         */}
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <Card as="li" key={project.href} interactive className="flex flex-col">
              <Glyph size="lg">{project.emoji}</Glyph>
              <h3 className="mt-5 font-display text-2xl text-ink">
                {project.title}
              </h3>
              {/* The kicker was a second all-caps heading fighting the first;
                  as a quiet single line it supports the title instead. */}
              <p className="mt-1.5 text-sm font-semibold text-brand-600">
                {project.kicker}
              </p>
              <p className="mt-4 leading-relaxed text-ink-body">
                {project.blurb}
              </p>
              <ul className="mt-5 flex flex-1 flex-wrap content-start gap-1.5">
                {project.points.map((point) => (
                  <li key={point}>
                    <Chip>{point}</Chip>
                  </li>
                ))}
              </ul>
              <ArrowLink href={project.href} className="mt-5">
                Learn more
              </ArrowLink>
            </Card>
          ))}
        </ul>
      </Section>

      {/* ------------------------------------------------------ why we care -- */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              emoji="❤️"
              title="Why we care"
              lead="We believe that a difficult beginning does not have to determine a child's future."
            />
            <Verses
              className="mt-8"
              lines={[
                "A child may be born into poverty, but poverty should not take away their dreams.",
                "A child may come from a broken family, but they still deserve love and encouragement.",
                "A child may have parents who cannot care for them, but they should still have people around them who believe in them.",
              ]}
            />
          </div>
          {/*
           * The card used to be pushed down by `lg:pt-24`, which aligned it
           * to nothing in particular. It now hangs from the same top edge as
           * the heading beside it.
           */}
          <Card className="self-start lg:p-8">
            <p className="font-display text-2xl leading-snug text-ink">
              We cannot change everything in their lives, but together, we can
              change something.
            </p>
            <ul className="mt-6 space-y-3.5">
              {changeSomething.map((line) => {
                const [emoji, ...rest] = line.split(" ");
                return (
                  <li key={line} className="flex items-start gap-3.5">
                    <Glyph size="sm">{emoji}</Glyph>
                    <span className="pt-1.5 leading-relaxed text-ink-body">
                      {rest.join(" ")}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Card>
        </div>
      </Section>

      {/* ---------------------------------------------------- ways to help -- */}
      <Section tone="sand">
        <SectionHeading
          align="center"
          title="Three ways you can help"
          lead="You don't need to be wealthy or have special qualifications. Your time, your skills, your voice, or simply sharing our story can make a difference."
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {waysToHelp.map((way) => (
            <Card as="li" key={way.href} interactive className="flex flex-col">
              <Glyph size="lg">{way.emoji}</Glyph>
              <h3 className="mt-5 font-display text-2xl text-ink">
                {way.title}
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-ink-body">
                {way.body}
              </p>
              <ButtonLink
                href={way.href}
                tone="secondary"
                className="mt-6 self-start"
              >
                {way.cta}
              </ButtonLink>
            </Card>
          ))}
        </ul>
      </Section>

      {/* ------------------------------------------------------- community -- */}
      <Section>
        <div className="grid gap-10 rounded-3xl bg-white p-7 ring-1 ring-brand-100 shadow-card sm:p-12 lg:grid-cols-[1fr_18rem] lg:gap-16">
          <div>
            <SectionHeading
              emoji="🌱"
              title="Building a better future, together"
              lead="Our hope is that these children and families will not simply receive help today, but will have opportunities to become healthy, educated, confident and independent tomorrow."
            />
            <p className="mt-6 measure font-display text-2xl leading-snug text-brand-700">
              79 children. 79 stories. One community. One hope for a better
              future.
            </p>
          </div>
          {/* A hairline separates the address from the copy on wide screens
              and stacks cleanly underneath it on narrow ones. */}
          <div className="border-t border-brand-100 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
            <p className="flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-brand-700 uppercase">
              <Icon name="pin" className="h-4 w-4" />
              Find us
            </p>
            <address className="leading-ui mt-4 space-y-1 text-ink-body not-italic">
              {site.address.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
            <ButtonLink href="/contact" tone="secondary" className="mt-6">
              Get in touch
            </ButtonLink>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
