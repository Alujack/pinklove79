import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import {
  ButtonLink,
  Card,
  IconGrid,
  Lead,
  Pledge,
  Prose,
  Section,
  SectionHeading,
  Verses,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "500 Villagers & Families",
  description:
    "Lemongrass farming, small businesses, skills training, clean drinking water and household support for around 500 villagers and their families in Takeo Province, Cambodia.",
};

const farmingSupport = [
  "🌱 Lemongrass seeds and planting materials",
  "🌾 Other suitable small agricultural crops",
  "🧑‍🌾 Basic farming tools and supplies",
  "💧 Support for basic water and irrigation needs",
  "💰 Small starting capital",
  "📚 Basic farming knowledge and guidance",
  "🛒 Helping connect farmers with local markets",
  "🤝 Purchasing their agricultural products, where appropriate, to help create a reliable market",
];

const businessIdeas = [
  "👕 Small mobile clothing-selling businesses",
  "👟 Mobile shoe-selling businesses",
  "🛍️ Small household-goods businesses",
  "🥬 Selling vegetables or agricultural products",
  "🍚 Small food or local-product businesses",
  "🧺 Other simple businesses suitable for their community",
];

const skills = [
  "Basic farming skills",
  "Small-business skills",
  "Selling and customer-service skills",
  "Basic financial management",
  "Handicrafts and practical skills",
  "Food preparation and small food businesses",
  "Other locally useful vocational skills",
];

const household = [
  "🌀 Fans",
  "🍚 Rice cookers and basic cooking equipment",
  "💧 Clean drinking-water dispensers and related water supplies",
  "🏠 Other essential household items",
];

const visionAreas = [
  { emoji: "🌱", label: "Lemongrass & Agriculture" },
  { emoji: "💰", label: "Small Start-up Capital" },
  { emoji: "🛍️", label: "Small Business Opportunities" },
  { emoji: "📚", label: "Skills & Training" },
  { emoji: "💧", label: "Clean Drinking Water" },
  { emoji: "🏠", label: "Basic Household Support" },
  { emoji: "🤝", label: "Community Care" },
];

const pathForward = [
  "A family may receive small capital to start a lemongrass farm.",
  "Another family may receive support to begin selling clothes or shoes.",
  "Someone else may learn a practical skill that helps them find work.",
];

export default function VillagersPage() {
  return (
    <>
      <PageHero
        eyebrow="Project two"
        khmer="គំរោង ជួយអ្នកភូមិ 500 គ្រួសារ"
        title={
          <>
            Supporting 500 villagers{" "}
            <span className="text-brand-600">and their families</span>
          </>
        }
        lead="Our community work extends beyond supporting children. We also want to help around 500 villagers and their families who are facing financial difficulties and limited opportunities."
        actions={
          <>
            <ButtonLink href="/donate">Support a family</ButtonLink>
            <ButtonLink href="/partner" tone="secondary">
              Partner on livelihoods
            </ButtonLink>
          </>
        }
      />

      <Lead>
        <p>
          Many families in rural communities depend on small farming,
          agricultural work, or daily labour. With limited capital, skills and
          resources, it can be difficult to create a stable source of income.
        </p>
        <p className="font-bold text-ink">
          That is why we want to provide practical support that can help
          families build a more stable, independent and dignified life.
        </p>
      </Lead>

      <Section tone="paper">
        <SectionHeading
          emoji="🌱"
          title="Lemongrass farming & small agriculture"
          lead="One of our community initiatives is to help families start or expand small lemongrass farms and other suitable agricultural crops. Depending on each family's needs, support may include:"
        />
        <div className="mt-10">
          <IconGrid items={farmingSupport} columns={2} />
        </div>
        <p className="mt-9 measure font-display text-2xl leading-snug text-brand-700">
          Our goal is to help families grow, sell, earn, and gradually become
          more self-reliant.
        </p>
      </Section>

      <Section>
        <SectionHeading
          emoji="🛍️"
          title="Helping families start small businesses"
          lead="Not every family has suitable land for farming, and not everyone wants to become a farmer."
        />
        <Prose className="mt-6">
          <p>
            Some people may have the ability to earn a living through small
            businesses or selling products. We want to help them develop
            practical skills and, where appropriate, provide small start-up
            support. For example, we may help families explore opportunities
            such as:
          </p>
        </Prose>
        <div className="mt-9">
          <IconGrid items={businessIdeas} columns={3} />
        </div>
        <Prose className="mt-9">
          <p>
            We can also encourage people to learn basic business skills, such as
            buying products, setting prices, keeping simple records,
            communicating with customers, and managing their small business.
          </p>
          <p className="font-bold text-ink">
            The purpose is not simply to give money. It is to help create an
            opportunity to earn an income.
          </p>
        </Prose>
      </Section>

      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              emoji="📚"
              title="Skills for a better future"
              lead="We believe that skills can be just as valuable as financial support."
            />
            <Prose className="mt-6">
              <p>
                Where possible, we want to connect villagers with opportunities
                to learn useful skills that can help them find work or start
                something of their own. This may include:
              </p>
            </Prose>
            <Verses className="mt-7" lines={skills} />
            <p className="mt-8 measure text-read font-bold text-ink">
              Our hope is that a person who learns a skill today can use that
              skill to support their family for many years.
            </p>
          </div>
          <div>
            <SectionHeading
              emoji="🏠"
              title="Helping families live with dignity"
              lead="We also recognize that a family's quality of life depends on more than income."
            />
            <Prose className="mt-6">
              <p>
                When there is a genuine need, we hope to support families with
                practical household necessities such as:
              </p>
            </Prose>
            <div className="mt-7">
              <IconGrid items={household} columns={2} />
            </div>
            <p className="mt-8 leading-relaxed text-ink-body">
              These may be simple things, but for families with very limited
              resources, they can make everyday life safer, healthier and more
              comfortable.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          emoji="❤️"
          title="From assistance to opportunity"
          lead="Our vision is not to create long-term dependence. We want to help people build a path forward."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pathForward.map((line) => (
            <Card key={line} as="article">
              <p className="text-lg leading-relaxed text-ink">{line}</p>
            </Card>
          ))}
        </div>
        <Prose className="mt-10">
          <p>
            Every family has different needs, abilities and dreams. Our role is
            to listen, encourage, and provide support where we can.
          </p>
        </Prose>
      </Section>

      <Section tone="paper">
        <SectionHeading
          emoji="🌍"
          title="Our vision for 500 villagers"
          lead="We hope to support approximately 500 villagers and their families through a combination of:"
        />
        <ul className="mt-10 flex flex-wrap gap-3">
          {visionAreas.map((area) => (
            <li
              key={area.label}
              className="flex items-center gap-2.5 rounded-full bg-brand-50 px-5 py-3 text-sm font-bold text-brand-800 ring-1 ring-brand-200"
            >
              <span aria-hidden className="text-lg">
                {area.emoji}
              </span>
              {area.label}
            </li>
          ))}
        </ul>
        <Prose className="mt-10">
          <p>
            We believe that true community development is not only about giving
            someone something today. It is about helping them gain the skills,
            opportunity, confidence and resources to build a better tomorrow.
          </p>
        </Prose>
        <div className="mt-10">
          <Pledge
            tone="quiet"
            lines={[
              "One family can become stronger.",
              "One small business can support a household.",
              "One farm can create income.",
              "One skill can open a door.",
              "And when many families move forward together, an entire community can grow.",
            ]}
          />
        </div>
      </Section>

      <Section className="pb-0">
        <Pledge
          tone="quiet"
          lines={["❤️ 500 villagers. Many stories. One hope."]}
        />
        <Prose className="mt-8">
          <p>
            We may not be able to solve every problem, but together we can make
            a meaningful difference — one family, one opportunity, and one
            village at a time.
          </p>
        </Prose>
      </Section>

      <div className="pt-16 sm:pt-24">
        <CtaBand
          title="Help a family take the next step"
          lead="Seeds, tools, a water dispenser, a first stall of goods, or a week of training — practical support that turns into income."
          primary={{ href: "/donate", label: "Support livelihoods" }}
          secondary={{ href: "/contact", label: "Ask us a question" }}
        />
      </div>
    </>
  );
}
