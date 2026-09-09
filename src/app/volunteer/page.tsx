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
  title: "Volunteers Needed",
  description:
    "Volunteer with PinkLove79 in Cambodia or from your own home — teaching, creative activities, farming projects, storytelling, fundraising and awareness.",
};

const inCambodia = [
  "👧 Supporting and spending time with children",
  "📚 Teaching English or other useful subjects",
  "🎨 Art, painting and creative activities",
  "🌱 Helping with gardening and agricultural projects",
  "🧑‍🌾 Supporting our farming and community projects",
  "🏫 Helping with educational activities",
  "❤️ Helping with community activities",
  "📸 Photography, video and storytelling",
  "💻 Helping with online communication and social media",
];

const fromHome = [
  "Share our projects with friends and family",
  "Organize a small fundraising activity",
  "Introduce our work to your local community",
  "Help us tell the stories of the children and families we support",
  "Share our website and social-media pages",
  "Help connect us with people or organizations interested in supporting community projects",
];

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Volunteers needed"
        title={
          <>
            Your time can{" "}
            <span className="text-brand-600">make a difference</span>
          </>
        }
        lead="Our community projects are growing, and we are looking for kind-hearted volunteers from around the world who would like to join us in helping children, families and local communities in Cambodia."
        actions={
          <>
            <ButtonLink href="#apply">Apply to volunteer</ButtonLink>
            <ButtonLink href="/partner" tone="secondary">
              Bring a group
            </ButtonLink>
          </>
        }
      />

      <Lead>
        <p className="font-bold text-ink">
          You do not have to live in Cambodia to make a difference.
        </p>
        <p>
          You can volunteer from your own home, or come and volunteer with us in
          person.
        </p>
      </Lead>

      <Section tone="paper">
        <SectionHeading
          emoji="🤝"
          title="Volunteer with us in Cambodia"
          lead="If you are able to visit Cambodia, you can volunteer your time and skills to support our community projects. Depending on your skills and interests, you may be able to help with:"
        />
        <div className="mt-10">
          <IconGrid items={inCambodia} columns={3} />
        </div>
        <p className="mt-9 measure text-read leading-relaxed text-ink-body">
          Our goal is to create meaningful experiences where volunteers can
          share their skills while learning from the local community.
        </p>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              emoji="🏠"
              title="Volunteer from your home"
              lead="You can also help without travelling to Cambodia."
            />
            <Prose className="mt-6">
              <p>
                We welcome volunteers who would like to help us raise awareness
                or fundraise from their own homes and communities. You could:
              </p>
            </Prose>
            <Verses className="mt-7" lines={fromHome} />
            <p className="mt-8 measure text-read font-bold text-ink">
              Every volunteer can choose what they are comfortable doing.
            </p>
          </div>
          <Card className="self-start lg:mt-6">
            <SectionHeading
              emoji="🌍"
              title="You don't need special qualifications"
            />
            <Prose className="mt-5 text-base">
              <p>
                Sometimes, your time, your skills, your voice, or simply sharing
                our story can make a difference.
              </p>
            </Prose>
            <ul className="mt-7 space-y-3">
              {[
                "Come and serve.",
                "Come and learn.",
                "Come and share.",
                "Come and make a difference.",
              ].map((line) => (
                <li key={line} className="font-display text-xl text-brand-700">
                  {line}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section id="apply" tone="sand">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              emoji="✍️"
              title="Tell us about yourself"
              lead="If you would like to volunteer with us, please tell us a little about yourself, where you are from, and how you would like to help."
            />
            <div className="mt-8">
              <Pledge
                tone="quiet"
                lines={[
                  "Together, we can help create hope and better opportunities for children, families and communities in Cambodia.",
                ]}
              />
            </div>
          </div>
          <InquiryForm
            defaultTopic="Volunteering in Cambodia"
            submitLabel="Send my application"
          />
        </div>
      </Section>
    </>
  );
}
