import Link from "next/link";
import { nav, site, whatsappHref } from "@/lib/site";
import { Container } from "@/components/ui";
import { HeartMark } from "@/components/heart-mark";

const support = [
  { href: "/donate", label: "Make a donation" },
  { href: "/volunteer", label: "Volunteer with us" },
  { href: "/partner", label: "Partner with us" },
  { href: "/contact", label: "Contact us" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-brand-100 bg-white/70">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 font-display text-xl text-ink">
              <HeartMark className="h-10 w-10 shrink-0" />
              <span>
                PinkLove<span className="text-brand-600">79</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Helping children, families and communities in Cambodia — one meal,
              one school bag, one opportunity at a time.
            </p>
          </div>

          <nav aria-label="Pages">
            <h2 className="text-xs font-bold tracking-[0.14em] text-brand-700 uppercase">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {nav.slice(1).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-ink-soft transition-colors hover:text-brand-700"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Ways to help">
            <h2 className="text-xs font-bold tracking-[0.14em] text-brand-700 uppercase">
              Get involved
            </h2>
            <ul className="mt-4 space-y-2.5">
              {support.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-ink-soft transition-colors hover:text-brand-700"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-bold tracking-[0.14em] text-brand-700 uppercase">
              PinkLove79 — Cambodia
            </h2>
            <address className="mt-4 space-y-1 text-sm leading-relaxed text-ink-soft not-italic">
              {site.address.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
            <ul className="mt-4 space-y-2 text-sm">
              {site.email ? (
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="font-medium text-ink-soft transition-colors hover:text-brand-700"
                  >
                    📧 {site.email}
                  </a>
                </li>
              ) : null}
              {site.phone ? (
                <li>
                  <a
                    href={whatsappHref || `tel:${site.phone}`}
                    className="font-medium text-ink-soft transition-colors hover:text-brand-700"
                  >
                    📱 {site.phone}
                  </a>
                </li>
              ) : null}
              <li className="font-medium text-ink-soft">
                🌐 {site.websiteLabel}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-brand-100 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-soft">
            © {new Date().getFullYear()} {site.name}. Thank you for caring. ❤️
          </p>
          <p className="text-sm text-ink-soft">
            One community. One hope for a better future.
          </p>
        </div>
      </Container>
    </footer>
  );
}
