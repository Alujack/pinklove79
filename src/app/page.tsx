import Link from "next/link";
import { projects, site } from "@/lib/site";
import { CtaBand } from "@/components/cta-band";
import {
  ButtonLink,
  Card,
  Container,
  Section,
  SectionHeading,
  Stat,
  Verses,
} from "@/components/ui";

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
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-brand-200/50 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-10 -right-28 h-[26rem] w-[26rem] rounded-full bg-brand-300/35 blur-3xl"
        />
        <Container className="relative py-16 sm:py-24 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-1.5 text-xs font-bold tracking-[0.14em] text-brand-700 uppercase ring-1 ring-brand-200">
                🇰🇭 Takeo Province, Cambodia
              </p>
              <h1 className="mt-6 font-display text-[2.6rem] leading-[1.08] text-ink sm:text-6xl lg:text-[4.1rem]">
                79 children.
                <br />
                <span className="text-brand-600">79 stories.</span>
                <br />
                One hope.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
                PinkLove79 walks alongside children, families and a whole
                village community in Cambodia — with daily meals, education,
                livelihoods, skills, and a place to belong.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink href="/donate">Donate today ❤️</ButtonLink>
                <ButtonLink href="/volunteer" tone="secondary">
                  Become a volunteer
                </ButtonLink>
              </div>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-soft">
                <span className="font-bold text-ink">
                  You don&apos;t have to change the whole world to make a
                  difference.
                </span>{" "}
                Sometimes, helping one child is enough to change one life.
              </p>
            </div>

            <Card className="relative lg:p-9">
              <h2 className="font-display text-2xl text-ink">
                Our three projects
              </h2>
              <ul className="mt-6 space-y-5">
                {projects.map((project) => (
                  <li key={project.href}>
                    <Link
                      href={project.href}
                      className="group flex items-start gap-4 rounded-2xl p-3 -m-3 transition-colors hover:bg-brand-50"
                    >
                      <span
                        aria-hidden
                        className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-100 text-2xl"
                      >
                        {project.emoji}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-bold text-ink group-hover:text-brand-700">
                          {project.title}
                        </span>
                        <span className="khmer mt-1 block text-sm text-ink-soft">
                          {project.khmer}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-7 grid grid-cols-3 gap-3 border-t border-brand-100 pt-7">
                <Stat value="79" label="Children" />
                <Stat value="500" label="Villagers" />
                <Stat value="1" label="Church" />
              </div>
            </Card>
          </div>
        </Container>
      </div>

      {/* -------------------------------------------------------- projects -- */}
      <Section id="projects" tone="white" className="border-y border-brand-100">
        <SectionHeading
          align="center"
          title="Where our work is focused"
          lead="Three projects, one community — supporting children today while helping families build a future they can stand on."
        />
        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              as="li"
              key={project.href}
              className="flex flex-col transition-shadow hover:shadow-lift"
            >
              <span
                aria-hidden
                className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-100 text-3xl"
              >
                {project.emoji}
              </span>
              <h3 className="mt-5 font-display text-2xl text-ink">
                {project.title}
              </h3>
              <p className="mt-1.5 text-sm font-bold tracking-wide text-brand-600 uppercase">
                {project.kicker}
              </p>
              <p className="mt-4 flex-1 leading-relaxed text-ink-soft">
                {project.blurb}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.points.map((point) => (
                  <li
                    key={point}
                    className="rounded-full bg-white/85 px-3 py-1.5 text-xs font-bold text-brand-700 ring-1 ring-brand-200"
                  >
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href={project.href}
                className="mt-7 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-800"
              >
                Learn more
                <span aria-hidden>→</span>
              </Link>
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
          <div className="lg:pt-24">
            <div className="rounded-3xl bg-white/85 p-8 ring-1 ring-brand-100 shadow-soft">
              <p className="font-display text-2xl leading-snug text-ink">
                We cannot change everything in their lives, but together, we can
                change something.
              </p>
              <ul className="mt-7 space-y-4 text-lg leading-relaxed text-ink-soft">
                <li>
                  🍚 A meal can give a child strength for another day of
                  learning.
                </li>
                <li>
                  🎒 A school bag can help a child walk into school with
                  confidence.
                </li>
                <li>📚 An education can open a door to a different future.</li>
                <li>
                  🤝 And a caring community can remind a child that they matter.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------- ways to help -- */}
      <Section tone="sand" className="border-y border-brand-100">
        <SectionHeading
          align="center"
          title="Three ways you can help"
          lead="You don't need to be wealthy or have special qualifications. Your time, your skills, your voice, or simply sharing our story can make a difference."
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {waysToHelp.map((way) => (
            <Card as="li" key={way.href} className="flex flex-col">
              <span aria-hidden className="text-3xl">
                {way.emoji}
              </span>
              <h3 className="mt-4 font-display text-2xl text-ink">
                {way.title}
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-ink-soft">
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
        <div className="rounded-[2rem] bg-white/85 px-7 py-12 ring-1 ring-brand-100 shadow-soft sm:px-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <SectionHeading
                emoji="🌱"
                title="Building a better future, together"
                lead="Our hope is that these children and families will not simply receive help today, but will have opportunities to become healthy, educated, confident and independent tomorrow."
              />
              <p className="mt-5 font-display text-2xl leading-snug text-brand-700">
                79 children. 79 stories. One community. One hope for a better
                future.
              </p>
            </div>
            <div className="lg:pl-10">
              <p className="text-xs font-bold tracking-[0.14em] text-brand-700 uppercase">
                Find us
              </p>
              <address className="mt-4 space-y-1 leading-relaxed text-ink-soft not-italic">
                {site.address.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>
              <ButtonLink href="/contact" tone="secondary" className="mt-6">
                Get in touch
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
