import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { InquiryForm } from "@/components/inquiry-form";
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
  title: "Partner With Us",
  description:
    "Churches, charities, schools, universities, hotels, airlines, tour companies, businesses and factories — partner with PinkLove79 to support communities in Cambodia.",
};

const partnerTypes = [
  "⛪ Churches and Christian organizations",
  "❤️ Charities and foundations",
  "🏫 Private and international schools",
  "🎓 Universities and colleges",
  "🏨 Hotels, resorts and hospitality companies",
  "✈️ Airlines and aviation companies",
  "🚌 Tour companies and travel organizations",
  "🏢 Private companies and businesses",
  "🏭 Factories and local industries",
  "🌍 Community and volunteer organizations",
  "👥 Groups and individuals who want to make a difference",
];

const hotelWays = [
  "Providing accommodation support for volunteers",
  "Supporting visiting students and community groups",
  "Donating essential supplies",
  "Sponsoring meals or community activities",
  "Creating fundraising programs for guests",
  "Supporting children and families through CSR programs",
  "Offering special arrangements for volunteers and project visitors",
];

const airlineWays = [
  "Volunteer travel support",
  "Special travel arrangements for approved community groups",
  "Supporting educational or charity delegations",
  "Fundraising campaigns",
  "Corporate social responsibility programs",
  "Assistance with transporting approved educational or humanitarian supplies, where appropriate",
];

const projectAreas = [
  {
    emoji: "👧",
    title: "79 Children",
    body: "Meals, education, school supplies, clothing, healthcare and essential needs.",
  },
  {
    emoji: "🌾",
    title: "500 Villagers & Families",
    body: "Lemongrass farming, small agriculture, skills development, small-business opportunities and basic household support.",
  },
  {
    emoji: "⛪",
    title: "One Community Church",
    body: "A place where children and community members can learn about the Bible, faith, compassion and serving others.",
  },
  {
    emoji: "🤝",
    title: "Volunteer Program",
    body: "Opportunities for individuals, students, groups and organizations to come and serve, or support our work from their own communities.",
  },
];

const contributions = [
  "You may be able to provide funding.",
  "You may be able to provide services.",
  "Your employees may volunteer.",
  "Your students may come and serve.",
  "Your hotel may help accommodate volunteers.",
  "Your airline may help connect people with Cambodia.",
  "Your company may support a community project.",
];

export default function PartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner with us"
        title={
          <>
            Lasting change happens when we{" "}
            <span className="text-brand-600">work together</span>
          </>
        }
        lead="We are looking for churches, charities, schools, universities and colleges, hotels, airlines, tour companies, private companies, factories, community organizations and other groups who would like to partner with us to support children, families and communities in Cambodia."
        actions={
          <>
            <ButtonLink href="#enquire">Start a conversation</ButtonLink>
            <ButtonLink href="/donate" tone="secondary">
              Corporate giving
            </ButtonLink>
          </>
        }
      />

      <Lead>
        <p>
          Whether you can contribute time, skills, resources, services, funding,
          or help connect us with others,{" "}
          <span className="font-bold text-ink">
            your partnership can make a meaningful difference.
          </span>
        </p>
      </Lead>

      <Section tone="white" className="border-y border-brand-100">
        <SectionHeading
          emoji="🤝"
          title="Who can partner with us?"
          lead="We welcome partnerships with:"
        />
        <div className="mt-10">
          <IconGrid items={partnerTypes} columns={3} />
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              emoji="🏨"
              title="Hotels & hospitality partners"
              lead="Hotels and resorts can support our projects in many meaningful ways, including:"
            />
            <Verses className="mt-7" lines={hotelWays} />
            <p className="mt-8 leading-relaxed text-ink-soft">
              A hotel partnership can help make it easier for people from around
              the world to visit Cambodia, serve the community, and experience
              local life.
            </p>
          </div>
          <div>
            <SectionHeading
              emoji="✈️"
              title="Airline partners"
              lead="We would also welcome partnerships with airlines and aviation companies. Airline partners may be able to support our work through:"
            />
            <Verses className="mt-7" lines={airlineWays} />
            <p className="mt-8 leading-relaxed text-ink-soft">
              We hope to build relationships with airlines that share our vision
              of connecting people with communities and creating opportunities
              to help others.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="sand" className="border-y border-brand-100">
        <SectionHeading
          emoji="🌱"
          title="Support our community projects"
          lead="Partners can choose an area that matches their interests and resources."
        />
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {projectAreas.map((area) => (
            <Card as="li" key={area.title}>
              <span aria-hidden className="text-3xl">
                {area.emoji}
              </span>
              <h3 className="mt-4 font-display text-2xl text-ink">
                {area.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{area.body}</p>
            </Card>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              emoji="🌍"
              title="A partnership for good"
              lead="We understand that every organization has different resources and abilities."
            />
            <Verses className="mt-7" lines={contributions} />
            <p className="mt-8 font-bold text-lg text-ink">
              Every partnership can create an opportunity to help someone.
            </p>
          </div>
          <div className="self-start lg:mt-6">
            <Card>
              <SectionHeading emoji="❤️" title="Let's work together" />
              <Prose className="mt-5 text-base">
                <p>
                  Our vision is to build a network of caring organizations from
                  Cambodia and around the world working together to help
                  children, strengthen families, create livelihoods and serve
                  communities.
                </p>
                <p className="font-bold text-ink">
                  One partner can make a difference. Many partners can transform
                  a community.
                </p>
              </Prose>
            </Card>
            <div className="mt-6">
              <Pledge
                lines={[
                  "Let's work together.",
                  "Let's serve together.",
                  "Let's build hope together.",
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section id="enquire" tone="white" className="border-t border-brand-100">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            emoji="✉️"
            title="Tell us about your organization"
            lead="If your church, charity, school, university, hotel, airline, tour company, business, factory or organization would like to partner with us, we would love to hear from you."
          />
          <InquiryForm
            defaultTopic="Partnering with us"
            submitLabel="Send partnership enquiry"
            showOrganization
          />
        </div>
      </Section>
    </>
  );
}
