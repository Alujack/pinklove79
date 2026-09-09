export const site = {
  name: "PinkLove79",
  tagline: "Hope for children, families and communities in Cambodia",
  description:
    "PinkLove79 supports 79 children, around 500 villagers and their families, and one community church in Takeo Province, Cambodia — through meals, education, livelihoods, skills and care.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://pinklove79.org",
  websiteLabel: "PinkLove79.org",
  address: {
    lines: [
      "Chang-Ke Village",
      "Tra-Lach Commune, Traing District",
      "Takeo Province, Kingdom of Cambodia",
    ],
    short: "Takeo Province, Cambodia",
  },
  /**
   * Contact details were left as placeholders in the source content.
   * Set these in `.env.local` to publish them across the site.
   */
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "",
  /** Optional hosted giving page (Stripe, PayPal, GoFundMe, bank portal…). */
  donateUrl: process.env.NEXT_PUBLIC_DONATE_URL ?? "",
  social: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "",
  },
} as const;

/** Digits only, for a `wa.me` deep link. */
export const whatsappHref = site.phone
  ? `https://wa.me/${site.phone.replace(/[^0-9]/g, "")}`
  : "";

/**
 * `label` is used wherever the pages are listed as a menu (the mobile menu,
 * the footer); `short` is the desktop bar, where nine items at this type size
 * need the tighter wording to stay on one line.
 *
 * Home stays first for the desktop bar, and both menus list `nav.slice(1)` —
 * the wordmark is already the way home, so a "Home" row would only push the
 * eight pages that matter further down the screen.
 */
export const nav = [
  { href: "/", label: "Home", short: "Home" },
  { href: "/team", label: "Our Founders", short: "Founders" },
  { href: "/children", label: "Help 79 Children", short: "Children" },
  { href: "/villagers", label: "Help 500 Villagers", short: "Villagers" },
  { href: "/church", label: "Our Church", short: "Church" },
  { href: "/volunteer", label: "Volunteers", short: "Volunteer" },
  { href: "/partner", label: "Partners With Us", short: "Partner" },
  { href: "/donate", label: "Donation", short: "Donate" },
  { href: "/contact", label: "Contact Us", short: "Contact" },
] as const;

export type Project = {
  href: string;
  emoji: string;
  title: string;
  kicker: string;
  blurb: string;
  points: string[];
};

export const projects: Project[] = [
  {
    href: "/children",
    emoji: "👧",
    title: "79 Children",
    kicker: "79 children, 79 stories, one hope",
    blurb:
      "Behind the number 79 are 79 children, each with a story, a family, and a dream for the future. We help with daily meals, education, school supplies, clothing and healthcare.",
    points: ["Daily meals", "School & supplies", "Clothing", "Healthcare"],
  },
  {
    href: "/villagers",
    emoji: "🌾",
    title: "500 Villagers & Families",
    kicker: "From assistance to opportunity",
    blurb:
      "We help around 500 villagers and their families build a more stable, independent and dignified life — through lemongrass farming, small businesses, skills and household support.",
    points: [
      "Lemongrass & agriculture",
      "Small start-up capital",
      "Skills & training",
      "Clean drinking water",
    ],
  },
  {
    href: "/church",
    emoji: "⛪",
    title: "One Community Church",
    kicker: "A place to learn, grow and serve",
    blurb:
      "One local church that welcomes children, families and community members to learn about the Bible, pray together, and encourage one another.",
    points: [
      "Bible lessons",
      "Prayer together",
      "Community gatherings",
      "Positive values",
    ],
  },
];
