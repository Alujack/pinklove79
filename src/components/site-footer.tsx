import Link from "next/link";
import { nav, site, whatsappHref } from "@/lib/site";
import { Container } from "@/components/ui";
import { Icon, type IconName } from "@/components/icons";
import { HeartMark } from "@/components/heart-mark";

const support = [
  { href: "/donate", label: "Make a donation" },
  { href: "/volunteer", label: "Volunteer with us" },
  { href: "/partner", label: "Partner with us" },
  { href: "/contact", label: "Contact us" },
];

function FooterHeading({ children }: { children: string }) {
  return (
    <h2 className="text-xs font-bold tracking-[0.14em] text-brand-700 uppercase">
      {children}
    </h2>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="-mx-2 inline-block rounded-lg px-2 py-1.5 font-medium text-ink-body transition-colors hover:bg-brand-50 hover:text-brand-700"
    >
      {label}
    </Link>
  );
}

/** Contact row: icon in its own column so the values line up under each other. */
function ContactRow({
  icon,
  href,
  children,
}: {
  icon: IconName;
  href?: string;
  children: string;
}) {
  const body = (
    <>
      <Icon name={icon} className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
      <span>{children}</span>
    </>
  );

  return (
    <li>
      {href ? (
        <a
          href={href}
          className="-mx-2 flex items-start gap-2.5 rounded-lg px-2 py-1.5 font-medium text-ink-body transition-colors hover:bg-brand-50 hover:text-brand-700"
        >
          {body}
        </a>
      ) : (
        <span className="flex items-start gap-2.5 px-0 py-1.5 font-medium text-ink-body">
          {body}
        </span>
      )}
    </li>
  );
}

/*
 * The footer used to be `bg-white/70` over a pink page, which meant the page
 * simply dissolved rather than ending. A solid white ground with a defined
 * top edge gives the site a floor, and the link lists drop to the compact
 * `leading-ui` line-height — the reading line-height is generous for
 * paragraphs and much too loose for a column of eight links.
 */
export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-brand-200/70 bg-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <div className="flex items-center gap-3 font-display text-2xl text-ink">
              <HeartMark className="h-10 w-10 shrink-0" />
              <span translate="no">
                PinkLove<span className="text-brand-600">79</span>
              </span>
            </div>
            <p className="measure mt-4 leading-relaxed text-ink-body">
              Helping children, families and communities in Cambodia — one
              meal, one school bag, one opportunity at a time.
            </p>
          </div>

          <nav aria-label="Pages">
            <FooterHeading>Explore</FooterHeading>
            <ul className="leading-ui mt-3 space-y-0.5">
              {nav.slice(1).map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href} label={item.label} />
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Ways to help">
            <FooterHeading>Get involved</FooterHeading>
            <ul className="leading-ui mt-3 space-y-0.5">
              {support.map((item) => (
                <li key={item.href}>
                  <FooterLink href={item.href} label={item.label} />
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <FooterHeading>PinkLove79 — Cambodia</FooterHeading>
            <ul className="leading-ui mt-3 space-y-0.5">
              <ContactRow icon="pin">
                {site.address.lines.join(", ")}
              </ContactRow>
              {site.email ? (
                <ContactRow icon="mail" href={`mailto:${site.email}`}>
                  {site.email}
                </ContactRow>
              ) : null}
              {site.phone ? (
                <ContactRow
                  icon="phone"
                  href={whatsappHref || `tel:${site.phone}`}
                >
                  {site.phone}
                </ContactRow>
              ) : null}
              <ContactRow icon="globe">{site.websiteLabel}</ContactRow>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-brand-100 pt-7 text-base text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-1.5">
            © {new Date().getFullYear()} {site.name}. Thank you for caring.
            <Icon name="heart" className="h-3.5 w-3.5 text-brand-400" />
          </p>
          <p>One community. One hope for a better future.</p>
        </div>
      </Container>
    </footer>
  );
}
