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

export const nav = [
  { href: "/", label: "Home" },
  { href: "/children", label: "79 Children" },
  { href: "/villagers", label: "500 Villagers" },
  { href: "/church", label: "Our Church" },
  { href: "/team", label: "Our Team" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/partner", label: "Partner" },
  { href: "/contact", label: "Contact" },
] as const;

export type Project = {
  href: string;
  emoji: string;
  khmer: string;
  title: string;
  kicker: string;
  blurb: string;
  points: string[];
};

export const projects: Project[] = [
  {
    href: "/children",
    emoji: "👧",
    khmer: "គំរោង ចិញ្ចឹម ក្មេង 79 នាក់",
    title: "79 Children",
    kicker: "79 children, 79 stories, one hope",
    blurb:
      "Behind the number 79 are 79 children, each with a story, a family, and a dream for the future. We help with daily meals, education, school supplies, clothing and healthcare.",
    points: ["Daily meals", "School & supplies", "Clothing", "Healthcare"],
  },
  {
    href: "/villagers",
    emoji: "🌾",
    khmer: "គំរោង ជួយអ្នកភូមិ 500 គ្រួសារ",
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
    khmer:
      "គំរោង ព្រះវិហារ ផ្តល់កន្លែង ដល់កុមារ និង មនុស្សគ្រប់រូប មកស្តាប់ មកសិក្សា ស្វែងយល់បន្ថែម អំពីព្រះយេស៊ូគ្រីស្ត.",
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
