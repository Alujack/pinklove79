import type { Metadata } from "next";
import { site, whatsappHref } from "@/lib/site";
import { Icon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { InquiryForm } from "@/components/inquiry-form";
import {
  ArrowLink,
  ButtonLink,
  Card,
  Container,
  Glyph,
  Lead,
  Prose,
  Section,
  SectionHeading,
  Verses,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Make a Donation",
  description:
    "Every contribution, large or small, helps PinkLove79 support children, families and communities in Cambodia — meals, education, livelihoods and essential household needs.",
};

const destinations = [
  {
    emoji: "👧",
    title: "Support 79 Children",
    body: "Help provide daily meals, education, school supplies, clothing, healthcare and other essential needs.",
    href: "/children",
  },
  {
    emoji: "🌾",
    title: "Support 500 Villagers & Families",
    body: "Help provide small agricultural capital, lemongrass farming opportunities, skills development, small-business opportunities, clean drinking water and essential household items.",
    href: "/villagers",
  },
  {
    emoji: "⛪",
    title: "Support Our Community Church",
    body: "Help maintain a place where children and community members can gather, learn about the Bible, grow in faith and serve others.",
    href: "/church",
  },
  {
    emoji: "🌱",
    title: "Support Livelihood Projects",
    body: "Help families develop opportunities to grow crops, learn skills and start small businesses so they can work toward a more stable income.",
    href: "/villagers",
  },
];

const giftTypes = [
  "A one-time donation",
  "A monthly donation",
  "A project-specific donation",
  "A donation of supplies or equipment",
  "A donation through your church, school, company or organization",
];

const becomes = [
  "Your kindness can become a meal.",
  "Your generosity can become a school opportunity.",
  "Your support can help a family start a small business.",
  "Your partnership can help build a stronger community.",
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        title={
          <>
            Your kindness can{" "}
            <span className="text-[#ffb3cf]">make a difference</span>
          </>
        }
        lead="Every contribution, large or small, can help us support children, families and communities in Cambodia."
        actions={
          site.donateUrl ? (
            <>
              <ButtonLink href={site.donateUrl}>Donate today</ButtonLink>
              <ButtonLink href="#other-ways" tone="secondary">
                Other ways to give
              </ButtonLink>
            </>
          ) : (
            <ButtonLink href="#give">Start your donation</ButtonLink>
          )
        }
      />

      <Lead>
        <p>
          Your donation can help provide a child with a meal, help a student
          receive school supplies, help a family start a small agricultural
          project, or provide essential items that improve daily life.
        </p>
      </Lead>

      <Section tone="paper">
        <SectionHeading
          emoji="❤️"
          title="Where your donation can help"
          lead="You can give toward our general work, or choose the project closest to your heart."
        />
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {destinations.map((item) => (
            <Card as="li" key={item.title} className="flex flex-col">
              <Glyph size="lg">{item.emoji}</Glyph>
              <h3 className="mt-4 font-display text-2xl text-ink">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-ink-body">
                {item.body}
              </p>
              <ArrowLink href={item.href} className="mt-4">
                About this project
              </ArrowLink>
            </Card>
          ))}
        </ul>
      </Section>

      <Section id="other-ways">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              emoji="💛"
              title="Every contribution matters"
              lead="You can choose to make:"
            />
            <Verses className="mt-7" lines={giftTypes} />
            <p className="mt-8 leading-relaxed text-ink-body">
              You can also help by organizing a fundraising campaign with your
              family, friends, church, school, company or local community.
            </p>
            <ButtonLink href="/volunteer" tone="secondary" className="mt-7">
              Fundraise for us
            </ButtonLink>
          </div>
          <div>
            <SectionHeading
              emoji="🌍"
              title="Give with purpose"
              lead="We want donations to create meaningful and practical support."
            />
            <Prose className="mt-6">
              <p>
                Our goal is not only to provide help today, but to create hope,
                opportunity, education and a better future for the people we
                serve.
              </p>
            </Prose>
            <ul className="mt-7 space-y-3">
              {becomes.map((line) => (
                <li key={line} className="font-display text-xl text-[color:var(--band-accent)]">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------ donate now -- */}
      <section id="give" className="py-16 sm:py-24">
        <Container>
          <div className="glow band-deep brand-fill overflow-hidden rounded-3xl px-7 py-12 text-white shadow-lift sm:px-14 sm:py-16">
            <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="text-xs font-bold tracking-[0.16em] uppercase text-white/80">
                  Thank you
                </p>
                <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                  Donate today
                </h2>
                <p className="mt-5 measure text-read leading-relaxed text-white">
                  Whether you give a little or a lot, your kindness can become
                  part of a bigger story of hope, compassion and positive change
                  in Cambodia.
                </p>
                <p className="mt-6 font-display text-2xl leading-snug">
                  Together, we can help.
                  <br />
                  Together, we can care.
                  <br />
                  Together, we can build a better future.
                </p>
              </div>

              <div className="rounded-3xl bg-berry-900/45 p-7 ring-1 ring-white/25 backdrop-blur-sm">
                {site.donateUrl ? (
                  <>
                    <h3 className="font-display text-2xl">
                      Give securely online
                    </h3>
                    <p className="mt-3 leading-relaxed text-white">
                      One-time or monthly — every contribution makes a
                      difference.
                    </p>
                    <ButtonLink
                      href={site.donateUrl}
                      tone="onBrand"
                      className="mt-6 w-full"
                    >
                      Donate now
                    </ButtonLink>
                  </>
                ) : (
                  <>
                    <h3 className="font-display text-2xl">
                      How to make your gift
                    </h3>
                    <p className="mt-3 leading-relaxed text-white">
                      Our online giving page is being set up. In the meantime,
                      please contact our team and we will send you the donation
                      details right away.
                    </p>
                    <ul className="mt-6 space-y-2.5 text-sm font-semibold">
                      {site.email ? (
                        <li>
                          <a
                            className="flex items-center gap-2 underline decoration-white/40 underline-offset-4 hover:decoration-white"
                            href={`mailto:${site.email}?subject=Donation%20to%20PinkLove79`}
                          >
                            <Icon name="mail" className="h-4 w-4 shrink-0" />
                            {site.email}
                          </a>
                        </li>
                      ) : null}
                      {site.phone ? (
                        <li>
                          <a
                            className="flex items-center gap-2 underline decoration-white/40 underline-offset-4 hover:decoration-white"
                            href={whatsappHref || `tel:${site.phone}`}
                          >
                            <Icon name="phone" className="h-4 w-4 shrink-0" />
                            {site.phone}
                          </a>
                        </li>
                      ) : null}
                      <li className="flex items-center gap-2">
                        <Icon name="pin" className="h-4 w-4 shrink-0" />
                        {site.address.short}
                      </li>
                    </ul>
                    <ButtonLink
                      href="#donation-form"
                      tone="onBrand"
                      className="mt-6 w-full"
                    >
                      Request donation details
                    </ButtonLink>
                  </>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section
        id="donation-form"
        tone="sand"
        className="border-y border-white/15"
      >
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            emoji="✉️"
            title="Talk to us about giving"
            lead="Tell us how you would like to help — a one-time gift, a monthly commitment, supplies and equipment, or a fundraising campaign — and we will reply with everything you need."
          />
          <InquiryForm
            defaultTopic="Making a donation"
            submitLabel="Send my message"
            showOrganization
          />
        </div>
      </Section>

      <Section className="py-14">
        <p className="text-center font-display text-2xl text-[color:var(--band-accent)]">
          Every contribution makes a difference.
        </p>
      </Section>
    </>
  );
}
