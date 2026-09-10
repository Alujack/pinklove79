import Link from "next/link";
import { projects, site } from "@/lib/site";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icons";
import { Brand } from "@/components/brand";
import { withNames } from "@/components/names";
import {
  ArrowLink,
  ButtonLink,
  Card,
  Chip,
  Container,
  Glyph,
  IconGrid,
  Pledge,
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

/*
 * The founding story, as dated entries rather than three paragraphs of prose.
 * A charity's history is the one part of its copy where *when* carries as much
 * weight as *what* — the dates are the spine, so they are set as the spine.
 */
type HistoryEntry = {
  date: string;
  title: string;
  body: string[];
  points?: string[];
};

const history: HistoryEntry[] = [
  {
    date: "7 September 2024",
    title: "The Beginning",
    body: [
      "PinkLove79 was created on 7 September 2024 through the personal support of Mr. Samnang, together with a group of Cambodian volunteers.",
      "Our first goal was to help 79 children in need by providing food, supporting their education, and giving them care and opportunities for a better future.",
    ],
  },
  {
    date: "3 August 2026",
    title: "Growing Together",
    body: [
      "On 3 August 2026, Ms. Mei Lan Gee joined PinkLove79 as a Co-Founder.",
      "She began helping to raise funds through her friends, family, and supporters around the world. Through this support, PinkLove79 can provide more assistance, including:",
    ],
    points: [
      "🚲 Bicycles for children",
      "🎒 School bags and school clothes",
      "🌀 Fans and cookers for families",
      "🤝 Support for villagers in need",
      "🌱 Additional assistance for children and community projects",
    ],
  },
  {
    date: "2026",
    title: "Skills Supporting Our Mission",
    body: [
      "In 2026, Mr. Yoeurn Yan, who holds a Bachelor’s Degree in Information Technology, donated his professional skills to PinkLove79 by helping us build and develop our website.",
      "His contribution helps us share our work with people in Cambodia and around the world.",
    ],
  },
];

/*
 * Mission and vision are parallel statements — what we do now, and what we are
 * building toward — so they are set side by side rather than stacked, where
 * the second would read as an afterthought to the first.
 */
const missionVision = [
  {
    emoji: "🎯",
    title: "Our Mission",
    body: [
      "Our mission is to support children and communities in need by providing essential food, education, care, and practical assistance.",
      "We believe every child deserves the opportunity to learn, grow, and build a better future, while every family deserves dignity, security, and hope.",
      "We also aim to strengthen communities through volunteering, education, church activities, skills development, and practical support.",
    ],
  },
  {
    emoji: "🌅",
    title: "Our Vision",
    body: [
      "Our vision is to build a stronger, more caring, and hopeful community where children can receive a good education, families can improve their living conditions, and communities can grow together.",
      "We want to connect caring people from Cambodia and around the world to create meaningful, long-term support for children, families, villagers, and communities.",
    ],
  },
];

const hopes = [
  {
    emoji: "🎓",
    title: "For Our Children",
    lead: "Our hope is that all of our children can continue their education through university level, or receive valuable vocational and special skills that can help them build independent and meaningful lives.",
    close:
      "We want every child to have the opportunity to discover their abilities, develop their talents, and become confident adults who can contribute to their families and communities.",
  },
  {
    emoji: "🏠",
    title: "For Our Villagers",
    lead: "We hope that the villagers we support can have:",
    points: [
      "A proper and safe house to live in",
      "Enough food for their families",
      "Essential household necessities",
      "Opportunities to earn a sustainable income",
      "Skills and small-business opportunities",
      "A healthier and better quality of life",
    ],
    close:
      "Our goal is not only to provide short-term assistance, but also to help families become stronger and more independent.",
  },
  {
    emoji: "⛪",
    title: "For Our Church",
    lead: "Our hope is to grow our church ministry and reach more communities throughout Cambodia. In the future, we hope to:",
    points: [
      "Build and support more churches in different places around Cambodia",
      "Create welcoming places where children, families and communities can learn about the Bible and grow together",
      "Support communities through faith, education, kindness and practical assistance",
      "Connect with people and supporters from Cambodia and around the world",
      "Encourage more people to join us in serving children, families and communities",
    ],
  },
];

/** A compact check-list — the reading size is for prose, not for six bullets. */
function Points({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed">
          <Icon
            name="check"
            className="mt-[0.45em] h-4 w-4 shrink-0 text-[color:var(--band-accent)]"
          />
          <span className="text-[color:var(--band-body)]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * One dated entry in the story.
 *
 * The rule runs down the whole column and the marker sits on it, so the eye
 * follows a single line from 2024 to today rather than reading three cards
 * that happen to be stacked.
 */
function Milestone({ entry }: { entry: HistoryEntry }) {
  return (
    <li className="relative pb-12 pl-10 last:pb-0 sm:pl-14">
      <span
        aria-hidden
        className="absolute top-2 bottom-0 left-[7px] w-px bg-white/25 sm:left-[11px]"
      />
      <span
        aria-hidden
        className="absolute top-1.5 left-0 h-4 w-4 rounded-full bg-white sm:h-6 sm:w-6 sm:border-4 sm:border-white/25"
      />
      <p className="text-xs font-bold tracking-[0.14em] text-[color:var(--band-accent)] uppercase">
        {entry.date}
      </p>
      <h3 className="mt-2 font-display text-2xl text-ink sm:text-3xl">
        {entry.title}
      </h3>
      <div className="measure mt-4 space-y-4 leading-relaxed text-[color:var(--band-body)]">
        {entry.body.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{withNames(paragraph)}</p>
        ))}
      </div>
      {entry.points ? (
        <div className="mt-6">
          <IconGrid items={entry.points} />
        </div>
      ) : null}
    </li>
  );
}

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
      <div className="hero-ground glow overflow-hidden border-b border-white/15">
        <Container className="py-14 sm:py-20 lg:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <h1 className="font-display text-[clamp(2.5rem,1.4rem+4vw,4.25rem)] leading-[1.04] text-ink">
                79 children.
                <br />
                <span className="text-[#ffb3cf]">79 stories.</span>
                <br />
                One hope.
              </h1>
              <p className="mt-7 measure text-read text-ink-body sm:text-read-lg">
                <Brand /> walks alongside children, families and a whole
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
                      className="group -mx-2 flex items-center gap-4 rounded-2xl p-2 transition-colors hover:bg-white/12"
                    >
                      <Glyph>{project.emoji}</Glyph>
                      <span className="min-w-0 font-bold text-ink group-hover:text-white">
                        {project.title}
                      </span>
                      <Icon
                        name="arrow-right"
                        className="ml-auto h-4 w-4 shrink-0 text-white/45 transition-all group-hover:translate-x-0.5 group-hover:text-white"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/15 pt-6">
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
          <p className="mt-12 border-t border-white/15 pt-8 text-read text-ink-body sm:mt-16 sm:text-read-lg">
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
              <p className="mt-1.5 text-sm font-semibold text-[color:var(--band-accent)]">
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

      {/* ---------------------------------------------------------- history -- */}
      <Section id="history">
        <SectionHeading
          emoji="🕊️"
          title="Our History"
          lead="PinkLove79 is a community initiative dedicated to supporting children in need, helping families and villagers, strengthening communities, and building a better future together."
        />
        <ol className="mt-12">
          {history.map((entry) => (
            <Milestone key={entry.date} entry={entry} />
          ))}
        </ol>

        {/* The volunteers are the reason the story has a present tense, so
            they close it rather than being listed somewhere further down. */}
        <Card className="mt-4 sm:mt-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <Glyph size="lg">🤝</Glyph>
            <div className="measure">
              <h3 className="font-display text-2xl text-ink">
                Our Cambodian Volunteers
              </h3>
              <p className="mt-3 leading-relaxed text-[color:var(--band-body)]">
                <Brand /> is supported by six Cambodian volunteers who give
                their time and energy to help children, families, villagers and
                community projects.
              </p>
              <p className="mt-3 leading-relaxed text-[color:var(--band-body)]">
                Together, our founders, volunteers, supporters and partners are
                working to create positive and lasting change.
              </p>
            </div>
          </div>
        </Card>
      </Section>

      {/* ------------------------------------------------------ why we care -- */}
      <Section tone="paper">
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

      {/* -------------------------------------------------- mission/vision -- */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {missionVision.map((panel) => (
            <Card as="article" key={panel.title} className="lg:p-8">
              <Glyph size="lg">{panel.emoji}</Glyph>
              <h2 className="mt-5 font-display text-3xl text-ink">
                {panel.title}
              </h2>
              <div className="mt-4 space-y-4 leading-relaxed text-[color:var(--band-body)]">
                {panel.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{withNames(paragraph)}</p>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------- hope for the future -- */}
      <Section tone="blush">
        <SectionHeading
          align="center"
          emoji="✨"
          title="Our Hope for the Future"
          lead="What we are working toward — for the children we walk with, for the families around them, and for the church at the centre of it."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {hopes.map((hope) => (
            <Card as="article" key={hope.title} className="flex flex-col">
              <Glyph size="lg">{hope.emoji}</Glyph>
              <h3 className="mt-5 font-display text-2xl text-ink">
                {hope.title}
              </h3>
              <p className="mt-4 leading-relaxed text-[color:var(--band-body)]">
                {hope.lead}
              </p>
              {hope.points ? <Points items={hope.points} /> : null}
              {hope.close ? (
                <p className="mt-5 leading-relaxed text-[color:var(--band-body)]">
                  {hope.close}
                </p>
              ) : null}
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <Pledge
            lines={[
              "Our dream is to see millions of people around the world connect with, support, or join our mission.",
              "Our Hope. Our Community. Our Future.",
            ]}
          />
        </div>
      </Section>

      {/* ---------------------------------------------------- ways to help -- */}
      <Section tone="paper">
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
        <div className="grid gap-10 rounded-3xl bg-[var(--surface)] p-7 ring-1 ring-[color:var(--surface-ring)] shadow-card sm:p-12 lg:grid-cols-[1fr_18rem] lg:gap-16">
          <div>
            <SectionHeading
              emoji="🌱"
              title="Building a better future, together"
              lead="Our hope is that these children and families will not simply receive help today, but will have opportunities to become healthy, educated, confident and independent tomorrow."
            />
            <p className="mt-6 measure font-display text-2xl leading-snug text-[color:var(--band-accent)]">
              79 children. 79 stories. One community. One hope for a better
              future.
            </p>
          </div>
          {/* A hairline separates the address from the copy on wide screens
              and stacks cleanly underneath it on narrow ones. */}
          <div className="border-t border-white/15 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
            <p className="flex items-center gap-2 text-xs font-bold tracking-[0.14em] text-[color:var(--band-accent)] uppercase">
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
