import { ButtonLink, Container } from "@/components/ui";

export function CtaBand({
  title = "Together, we can build a better future",
  lead = "Give a gift, offer your time, or bring your organization alongside ours. Every contribution makes a difference.",
  primary = { href: "/donate", label: "Donate today ❤️" },
  secondary = { href: "/contact", label: "Contact our team" },
}: {
  title?: string;
  lead?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="pb-16 sm:pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-600 px-7 py-12 text-white shadow-lift sm:px-14 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -right-16 h-72 w-72 rounded-full bg-brand-400/40 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-brand-800/40 blur-3xl"
          />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl leading-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-50">{lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={primary.href} tone="onBrand">
                {primary.label}
              </ButtonLink>
              <ButtonLink
                href={secondary.href}
                className="bg-brand-700/60 text-white ring-1 ring-white/35 hover:bg-brand-700"
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
