import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icons";
import { Brand } from "@/components/brand";
import { withNames } from "@/components/names";
import {
  Card,
  Glyph,
  IconGrid,
  Pledge,
  Section,
  SectionHeading,
} from "@/components/ui";

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
      {/* ---------------------------------------------------------- history -- */}
      <Section id="history">
        <SectionHeading
          level={1}
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

      {/* -------------------------------------------------- mission/vision -- */}
      <Section tone="paper">
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

      <CtaBand />
    </>
  );
}
