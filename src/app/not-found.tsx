import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-24 text-center sm:py-32">
      <p className="text-5xl" aria-hidden>
        🌸
      </p>
      <h1 className="mt-6 font-display text-4xl text-ink sm:text-5xl">
        We couldn&apos;t find that page
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
        The page you were looking for may have moved. Let&apos;s get you back to
        the children, families and communities we serve.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/contact" tone="secondary">
          Contact us
        </ButtonLink>
      </div>
    </Container>
  );
}
