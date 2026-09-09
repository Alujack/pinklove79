# PinkLove79

The website for **PinkLove79** — a community project in Chang-Ke Village, Tra-Lach
Commune, Traing District, Takeo Province, Cambodia — supporting 79 children,
around 500 villagers and their families, and one community church.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

```bash
npm run build        # production build
npm start            # serve the production build
npm run lint         # eslint
npx tsc --noEmit     # typecheck
```

## Pages

| Route        | Content                                                          |
| ------------ | ---------------------------------------------------------------- |
| `/`          | Hero, the three projects, why we care, ways to help              |
| `/children`  | គំរោង ចិញ្ចឹម ក្មេង 79 នាក់ — 79 children, 79 stories, one hope   |
| `/villagers` | គំរោង ជួយអ្នកភូមិ 500 គ្រួសារ — lemongrass, business, skills, home |
| `/church`    | គំរោង ព្រះវិហារ — a place to learn, grow and serve                |
| `/team`      | Founders, team and specialists                                   |
| `/volunteer` | Volunteering in Cambodia or from home, with an application form   |
| `/partner`   | Who can partner, hotels, airlines, project areas, enquiry form    |
| `/donate`    | Where donations help, ways to give, donate call-to-action         |
| `/contact`   | Address, email, phone/WhatsApp and a contact form                 |

`robots.txt` and `sitemap.xml` are generated from the nav in `src/lib/site.ts`.

## Configuration

Copy `.env.example` to `.env.local` and fill in what you have. Everything is
optional — the site is built so that a missing value degrades gracefully
instead of showing an empty field or a broken link.

| Variable                    | Effect when set                                                      |
| --------------------------- | -------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`      | Canonical URL used for metadata and the sitemap                       |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Shows the email address on Contact, Donate and in the footer          |
| `NEXT_PUBLIC_CONTACT_PHONE` | Shows the phone number, linked as a `wa.me` WhatsApp deep link        |
| `NEXT_PUBLIC_DONATE_URL`    | Donate page links straight to your giving page instead of the form    |
| `RESEND_API_KEY`            | Form submissions are emailed via [Resend](https://resend.com)          |
| `CONTACT_TO_EMAIL`          | Mailbox that receives form submissions                                |
| `CONTACT_FROM_EMAIL`        | Verified sender address for those emails                              |

> **Until `RESEND_API_KEY`, `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` are all
> set, form submissions are written to the server console and no email is
> sent.** The visitor still sees a thank-you message, so set these before
> launch or you will not see the enquiries people send.

### Content still to be filled in

The source document left some details as placeholders:

- **Organization email and phone** — set via the env vars above. Until then the
  Contact page reads "Coming soon — please use the form" rather than showing a
  made-up address.
- **Per-person WhatsApp / phone / email** for the founders and team — edit the
  `contact` fields in [`src/lib/team.ts`](src/lib/team.ts). Any field left
  blank is omitted, and a person with no contact details shows a link to the
  contact form instead.
- **Photographs** — the design deliberately works without photos (large type,
  pink gradients, initial avatars). Drop real photos into `public/` and they
  will slot into the project cards and team cards nicely.
- **Donation method** — either point `NEXT_PUBLIC_DONATE_URL` at a giving page,
  or leave it unset and the Donate page invites people to request the details.

## Project structure

```
src/
  app/
    layout.tsx          Fonts, metadata, header/footer shell, skip link
    globals.css         Theme tokens (pink palette, surfaces, fonts)
    actions.ts          "use server" form handler + email delivery
    page.tsx            Home
    children/ villagers/ church/ team/ volunteer/ partner/ donate/ contact/
    sitemap.ts robots.ts not-found.tsx
  components/
    ui.tsx              Container, Section, headings, Card, IconGrid, buttons…
    site-header.tsx     Sticky nav + mobile menu
    site-footer.tsx
    page-hero.tsx       Shared inner-page hero
    cta-band.tsx        Closing call-to-action
    inquiry-form.tsx    Contact / volunteer / partner / donate form
    heart-mark.tsx      Logo
  lib/
    site.ts             Site config, nav, project summaries
    team.ts             Founders and team members
    inquiry.ts          Form types and validation
```

### Design notes

- The palette is pink throughout (`--color-brand-*` in `globals.css`), per the
  brief: *background website យកពណ៌ Pink*.
- Sections alternate between the pink page background, solid white and a warm
  sand band. Cards read their fill from a `--surface` variable set by the band
  they sit in, so a card is never white-on-white — see the `band-white` class.
- Khmer text uses Noto Sans Khmer with a taller line-height via the `.khmer`
  class; Latin text uses Manrope with DM Serif Display for headings.
- Every page is statically prerendered; the only dynamic part is the form's
  server action.
