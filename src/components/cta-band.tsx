import { Icon } from "@/components/icons";
import { ButtonLink, Container } from "@/components/ui";

/**
 * The closing call to action.
 *
 * This is the loudest thing on any page and it should stay that way — it is
 * the one moment the site asks for something. The two decorative blobs are
 * now the shared `.glow` helper, and the secondary button is a hairline
 * outline rather than a second filled shape, so the eye lands on "Donate"
 * first instead of having to choose.
 */
export function CtaBand({
  title = "Together, we can build a better future",
  lead = "Give a gift, offer your time, or bring your organization alongside ours. Every contribution makes a difference.",
  primary = { href: "/donate", label: "Donate today" },
  secondary = { href: "/contact", label: "Contact our team" },
}: {
  title?: string;
  lead?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="py-16 sm:py-24">
      <Container className="reveal">
        <div className="glow band-deep overflow-hidden rounded-3xl bg-brand-600 px-7 py-12 text-white shadow-lift sm:px-14 sm:py-16">
          <div className="measure">
            <h2 className="font-display text-3xl leading-[1.15] text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-read text-brand-50 sm:text-read-lg">
              {lead}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={primary.href} tone="onBrand">
                {primary.label}
                <Icon name="heart" className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href={secondary.href}
                className="bg-transparent text-white ring-1 ring-white/45 hover:bg-white/12 hover:ring-white/70"
              >
                {secondary.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
