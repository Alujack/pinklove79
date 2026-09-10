import type { Metadata } from "next";
import { Icon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Brand } from "@/components/brand";
import { CtaBand } from "@/components/cta-band";
import {
  ButtonLink,
  Card,
  Glyph,
  Lead,
  Pledge,
  Section,
  SectionHeading,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Emergency Needs",
  description:
    "PinkLove79 has urgent needs for our 79 children and 500 villagers — a toilet and shower facility, an emergency rice supply, Khmer Bibles and household fans.",
};

type Need = {
  emoji: string;
  title: string;
  /** The short form used in the summary, where the row has to fit on a line. */
  summary: string;
  body: string[];
  target: string;
  /** How the figure was arrived at — shown only where there is one to show. */
  breakdown?: string[];
  /**
   * The amount still to be raised. Left undefined where a price has not been
   * confirmed yet: the page then says so plainly rather than showing a figure
   * nobody has stood behind, and that need is kept out of the total.
   */
  amount?: number;
};

const needs: Need[] = [
  {
    emoji: "🚻",
    title: "Toilet & Shower for 79 Children",
    summary: "Toilet & shower for 79 children",
    body: [
      "Our 79 children urgently need a proper toilet and shower facility.",
      "This facility will provide the children with a safer, cleaner and more comfortable place for their daily needs.",
    ],
    target: "One toilet and shower facility",
    amount: 1000,
  },
  {
    emoji: "🍚",
    title: "Emergency Rice Supply",
    summary: "1 tonne of rice",
    body: [
      "We need to keep a supply of rice available for cooking daily meals for our children.",
      "This rice supply will help us continue preparing daily meals for the children.",
    ],
    target: "1,000 kg of rice",
    breakdown: ["50 kg × 20 bags = 1,000 kg", "$30 × 20 bags = $600"],
    amount: 600,
  },
  {
    emoji: "📖",
    title: "500 Khmer Bibles for 500 Villagers",
    summary: "500 Khmer Bibles",
    body: [
      "We hope to provide 500 Bibles in the Khmer language to 500 villagers.",
      "These Bibles will be given to villagers as part of our church and community activities, helping people who wish to learn more about the Bible and Christian faith.",
    ],
    target: "500 Khmer Bibles",
  },
  {
    emoji: "🌀",
    title: "500 Fans for 500 Villagers",
    summary: "500 fans",
    body: [
      "We want to provide fans to 500 villagers who need basic household support.",
      "This support will help families have a more comfortable living environment, especially during Cambodia’s hot weather.",
    ],
    target: "500 fans",
    breakdown: ["$37 × 500 fans = $18,500"],
    amount: 18500,
  },
];

const money = (value: number) => `$${value.toLocaleString("en-US")}`;

/*
 * Both figures are derived, not typed out. A fundraising total that is
 * maintained by hand goes wrong the first time one of the needs above is
 * edited, and a wrong number on this page is the one mistake that would cost
 * the trust the page is asking for.
 */
const confirmedTotal = needs.reduce((sum, need) => sum + (need.amount ?? 0), 0);
const unconfirmed = needs.filter((need) => need.amount === undefined);

/** A quiet label over a value — used for the target/goal foot of each card. */
function Figure({
  label,
  children,
  align = "left",
}: {
  label: string;
  children: React.ReactNode;
  align?: "left" | "right";
}) {
  return (
    <div className={align === "right" ? "text-right" : undefined}>
      <p className="text-xs font-bold tracking-[0.14em] text-[color:var(--band-soft)] uppercase">
        {label}
      </p>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}

export default function EmergencyPage() {
  return (
    <>
      <PageHero
        title="Our Emergency Needs Now"
        lead="These are the things our community needs most urgently. Each one is listed with what it costs, so you can see exactly what your gift would pay for."
        actions={
          <>
            <ButtonLink href="/donate">
              Donate today
              <Icon name="heart" className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/contact" tone="secondary">
              Talk to our team
            </ButtonLink>
          </>
        }
      />

      <Lead>
        <p>
          <Brand /> currently has several urgent needs for our 79 children and
          500 villagers. We are asking friends, supporters, donors and partners
          to help us meet these immediate needs.
        </p>
      </Lead>

      {/* ------------------------------------------------------------ needs -- */}
      <Section tone="paper">
        <SectionHeading
          title="What we need right now"
          lead="Four needs, in the order we are trying to meet them."
        />
        <ol className="mt-12 grid gap-6 lg:grid-cols-2">
          {needs.map((need, index) => (
            <Card as="li" key={need.title} className="flex flex-col">
              <Glyph size="lg">{need.emoji}</Glyph>
              <p className="mt-5 text-xs font-bold tracking-[0.14em] text-[color:var(--band-accent)] uppercase">
                Need {index + 1}
              </p>
              <h3 className="mt-2 font-display text-2xl text-ink">
                {need.title}
              </h3>

              <div className="mt-4 space-y-3 leading-relaxed text-[color:var(--band-body)]">
                {need.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>

              {need.breakdown ? (
                /* The arithmetic, shown rather than asserted — it is short
                   enough to check, and a donor who can check it will. */
                <ul className="mt-5 space-y-1.5 rounded-2xl bg-white/10 px-4 py-3.5 text-sm ring-1 ring-white/15">
                  {need.breakdown.map((line) => (
                    <li
                      key={line}
                      className="flex gap-2.5 tabular-nums text-[color:var(--band-body)]"
                    >
                      <Icon
                        name="check"
                        className="mt-[0.4em] h-3.5 w-3.5 shrink-0 text-[color:var(--band-accent)]"
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {/* `mt-auto` pins the figures to the foot of every card, so the
                  amounts line up across the row however long the copy runs. */}
              <div className="mt-auto flex items-end justify-between gap-6 border-t border-white/15 pt-6">
                <Figure label="Target">
                  <p className="leading-snug font-semibold text-ink">
                    {need.target}
                  </p>
                </Figure>
                <Figure label="Goal" align="right">
                  {need.amount === undefined ? (
                    <p className="leading-snug font-semibold text-[color:var(--band-body)]">
                      Price to be
                      <br />
                      confirmed
                    </p>
                  ) : (
                    <p className="font-display text-3xl leading-none text-ink tabular-nums">
                      {money(need.amount)}
                    </p>
                  )}
                </Figure>
              </div>
            </Card>
          ))}
        </ol>
      </Section>

      {/* ---------------------------------------------------------- summary -- */}
      <Section tone="blush">
        <SectionHeading
          emoji="❤️"
          title="Our current emergency fundraising goals"
          lead="Everything above, in one place."
        />

        <Card className="mt-10 sm:p-8">
          <dl className="divide-y divide-white/15">
            {needs.map((need) => (
              <div
                key={need.title}
                className="flex items-baseline justify-between gap-6 py-4 first:pt-0"
              >
                <dt className="flex items-baseline gap-3 font-semibold text-ink">
                  <span aria-hidden>{need.emoji}</span>
                  {need.summary}
                </dt>
                <dd className="shrink-0 font-display text-xl tabular-nums text-ink">
                  {need.amount === undefined ? (
                    <span className="text-base font-sans font-semibold text-[color:var(--band-body)]">
                      To be confirmed
                    </span>
                  ) : (
                    money(need.amount)
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 rounded-2xl bg-white/12 px-5 py-4 ring-1 ring-white/20">
            <p className="text-xs font-bold tracking-[0.14em] text-[color:var(--band-soft)] uppercase">
              Total confirmed needs
            </p>
            <p className="font-display text-4xl leading-none text-ink tabular-nums">
              {money(confirmedTotal)}
            </p>
          </div>

          {unconfirmed.length > 0 ? (
            <p className="mt-4 text-sm text-[color:var(--band-soft)]">
              Plus the cost of{" "}
              {unconfirmed.map((need) => need.summary).join(", ")}, which we
              will add here once the price is confirmed.
            </p>
          ) : null}
        </Card>

        <div className="mt-10">
          <Pledge
            lines={[
              "Every contribution matters.",
              "Every act of kindness brings hope.",
            ]}
          />
        </div>
      </Section>

      <CtaBand
        title="Help us meet these needs"
        lead="Your support can help us provide practical assistance to the children and families in our community — a safer place to wash, a meal on the table, a fan through the hot season."
        primary={{ href: "/donate", label: "Donate today" }}
        secondary={{ href: "/contact", label: "Ask us a question" }}
      />
    </>
  );
}
