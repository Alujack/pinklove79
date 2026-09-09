import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { MediaSlideshow } from "@/components/media-slideshow";
import { churchMedia } from "@/lib/church-media";
import {
  ButtonLink,
  Card,
  Glyph,
  IconGrid,
  Lead,
  Pledge,
  Prose,
  Section,
  SectionHeading,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "One Community Church",
  description:
    "One local church in Takeo Province welcoming children, families and community members to learn about the Bible, pray together and serve one another.",
};

const teachings = [
  "❤️ Love and compassion",
  "🤝 Helping and caring for others",
  "🙏 Faith and prayer",
  "🌱 Forgiveness and personal growth",
  "🕊️ Peace and kindness",
  "👨‍👩‍👧 Respect for family and community",
  "❤️ Serving people who are in need",
];

const welcome = [
  {
    emoji: "🙋",
    title: "Welcomed",
    body: "Anyone who wants to come and learn is welcome here.",
  },
  {
    emoji: "🫱",
    title: "Respected",
    body: "Children and adults alike are treated with dignity.",
  },
  {
    emoji: "🤗",
    title: "Cared for",
    body: "People look out for one another in practical ways.",
  },
  {
    emoji: "🌤️",
    title: "Supported",
    body: "Encouragement for families through difficult seasons.",
  },
];

export default function ChurchPage() {
  return (
    <>
      {/* Same flow as the other two project pages: the place and the people
          first, then the words. */}
      <div className="mx-auto w-full max-w-4xl px-3 pt-3 sm:px-8 sm:pt-6">
        <MediaSlideshow
          items={churchMedia}
          label="Photographs and video from the community church"
        />
      </div>

      <PageHero
        title={
          <>
            One church — a place to{" "}
            <span className="text-brand-600">learn, grow and serve</span>
          </>
        }
        lead="Our community also runs one local church that welcomes children, families and community members who wish to come together to learn and grow in faith."
        actions={
          <>
            <ButtonLink href="/contact">Visit or connect</ButtonLink>
            <ButtonLink href="/partner" tone="secondary">
              Church partnerships
            </ButtonLink>
          </>
        }
      />

      <Lead>
        <p>
          The church provides a place where people can learn about the Bible,
          understand Christian teachings, pray together, and encourage one
          another.
        </p>
      </Lead>

      <Section tone="paper">
        <SectionHeading
          emoji="📖"
          title="Learning about the Bible"
          lead="We provide opportunities for children and adults to learn about the Bible in a simple and understandable way."
        />
        <Prose className="mt-6">
          <p>
            Through Bible lessons, discussions, activities and community
            gatherings, we encourage people to discover teachings about:
          </p>
        </Prose>
        <div className="mt-9">
          <IconGrid items={teachings} columns={3} />
        </div>
        <p className="mt-9 measure text-read leading-relaxed text-ink-body">
          For children especially, we want learning to be{" "}
          <span className="font-bold text-ink">
            safe, welcoming and encouraging
          </span>
          , giving them an opportunity to learn positive values while growing
          together with others.
        </p>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <SectionHeading
              emoji="🏠"
              title="A place for the community"
              lead="The church is more than a place for worship."
            />
            <Prose className="mt-6">
              <p>
                It is also a place where community members can come together,
                build friendships, encourage one another, and learn how to serve
                their community.
              </p>
              <p className="font-bold text-ink">
                We hope it can become a place where people feel welcomed,
                respected, cared for and supported.
              </p>
            </Prose>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2">
            {welcome.map((item) => (
              <Card as="li" key={item.title}>
                <Glyph>{item.emoji}</Glyph>
                <h3 className="mt-3 font-display text-xl text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-ink-body">
                  {item.body}
                </p>
              </Card>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading
          emoji="🌍"
          title="Growing together"
          lead="Our vision is to bring children, families and community members together to learn, share, serve and grow."
        />
        <Prose className="mt-6">
          <p>
            Through the church and our wider community projects, we hope to
            encourage people to care for one another and make a positive
            difference in the lives of others.
          </p>
        </Prose>
        <div className="mt-12">
          <Pledge
            lines={[
              "One church. One community. Many lives.",
              "A shared hope for a better future.",
            ]}
          />
        </div>
      </Section>

      <CtaBand
        title="Come and learn. Come and serve."
        lead="If your church or Christian organization would like to walk with our community, we would love to hear from you."
        primary={{ href: "/partner", label: "Partner with us" }}
        secondary={{ href: "/volunteer", label: "Volunteer with us" }}
      />
    </>
  );
}
