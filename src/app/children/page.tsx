import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { MediaSlideshow } from "@/components/media-slideshow";
import { childrenMedia } from "@/lib/children-media";
import {
  ButtonLink,
  Card,
  IconGrid,
  Pledge,
  Prose,
  Section,
  SectionHeading,
  Verses,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "79 Children",
  description:
    "Behind the number 79 are 79 children, each with a story, a family and a dream. PinkLove79 provides meals, education, school supplies, clothing and healthcare.",
};

const circumstances = [
  "Some are growing up in families living in poverty.",
  "Some come from families who survive by collecting recyclable materials.",
  "Some have experienced the separation or divorce of their parents.",
  "Some have parents who are serving prison sentences and are unable to provide the care their children need.",
  "Others are being cared for by elderly grandparents or relatives who have very limited resources.",
];

const deserve = [
  "They deserve a chance.",
  "They deserve to have enough food to eat.",
  "They deserve to go to school.",
  "They deserve clean clothes and school supplies.",
  "They deserve healthcare and someone who cares when they are struggling.",
  "And most importantly, they deserve to grow up knowing that they are not forgotten.",
];

const support = [
  "🍚 Daily meals and nutrition",
  "🏫 Education and school fees",
  "🎒 School supplies and school bags",
  "👕 Clean clothing",
  "🩺 Healthcare when they are unwell",
  "❤️ Other essential daily needs",
];

const whyWeCare = [
  "A child may be born into poverty, but poverty should not take away their dreams.",
  "A child may come from a broken family, but they still deserve love and encouragement.",
  "A child may have parents who cannot care for them, but they should still have people around them who believe in them.",
];

const changeSomething = [
  "🍚 A meal can give a child strength for another day of learning.",
  "🎒 A school bag can help a child walk into school with confidence.",
  "📚 An education can open a door to a different future.",
  "🤝 And a caring community can remind a child that they matter.",
];

export default function ChildrenPage() {
  return (
    <>
      {/*
       * The pictures open the page, ahead of the title block. These are the
       * children everything below is about, and a reader who meets them first
       * reads the rest differently.
       */}
      <div className="mx-auto w-full max-w-4xl px-3 pt-3 sm:px-8 sm:pt-6">
        <MediaSlideshow
          items={childrenMedia}
          label="Photographs and video from the 79 Children project"
        />
      </div>

      <PageHero
        title={
          <>
            79 children, 79 stories,{" "}
            <span className="text-brand-600">one hope</span>
          </>
        }
        lead="Behind the number 79 are 79 children, each with a story, a family, and a dream for the future."
        actions={
          <>
            <ButtonLink href="/donate">Support a child</ButtonLink>
            <ButtonLink href="/volunteer" tone="secondary">
              Volunteer with children
            </ButtonLink>
          </>
        }
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              title="Different circumstances, one thing in common"
              lead="These children come from different and difficult circumstances."
            />
            <Verses className="mt-8" lines={circumstances} />
          </div>
          <Card className="lg:mt-4">
            <p className="text-sm font-bold tracking-[0.14em] text-brand-700 uppercase">
              What they share
            </p>
            <ul className="mt-6 space-y-4">
              {deserve.map((line) => (
                <li
                  key={line}
                  className="font-display text-xl leading-snug text-ink"
                >
                  {line}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading
          emoji="🤲"
          title="That is why we support these 79 children"
          lead="We provide help with their daily meals, education, school supplies, clothing, healthcare, and other essential needs."
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <IconGrid items={support} />
          <Prose>
            <p>
              But our support is about more than providing things. We want to
              create a safe and caring environment where children can learn,
              grow, build confidence, and look toward the future with hope.
            </p>
            <p className="font-bold text-ink">
              A difficult beginning does not have to determine a child&apos;s
              future.
            </p>
          </Prose>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading emoji="❤️" title="Why we care" />
            <Verses className="mt-8" lines={whyWeCare} />
          </div>
          <Card className="self-start lg:mt-16">
            <p className="font-display text-2xl leading-snug text-ink">
              We cannot change everything in their lives, but together, we can
              change something.
            </p>
            <ul className="mt-7 space-y-4 text-lg leading-relaxed text-ink-body">
              {changeSomething.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading
          emoji="🌱"
          title="Building a better future"
          lead="Our hope is that these children will not simply receive help today, but will have opportunities to become healthy, educated, confident, and independent adults tomorrow."
        />
        <Prose className="mt-8">
          <p>
            We invite caring people from around the world to join us in this
            journey.
          </p>
          <p className="font-bold text-ink">
            You don&apos;t have to change the whole world to make a difference.
            Sometimes, helping one child is enough to change one life.
          </p>
          <p>
            And when we come together, 79 children can have 79 more reasons to
            hope.
          </p>
        </Prose>
        <div className="mt-12">
          <Pledge
            tone="quiet"
            lines={[
              "79 children. 79 stories.",
              "One community. One hope for a better future.",
            ]}
          />
        </div>
      </Section>

      <CtaBand
        title="Help us keep 79 promises"
        lead="A gift toward meals, school supplies or healthcare reaches a child by name — not a number."
        primary={{ href: "/donate", label: "Donate today" }}
        secondary={{ href: "/partner", label: "Partner with us" }}
      />
    </>
  );
}
