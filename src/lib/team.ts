export type Person = {
  slug: string;
  name: string;
  role: string;
  country: string;
  flag: string;
  /** Short paragraphs, in order. */
  bio: string[];
  quote?: string;
  /**
   * The source content left these as placeholders. Fill them in here and the
   * matching row appears on the Team page automatically; leave one blank and it
   * is simply omitted rather than shown as an empty field.
   */
  contact: {
    whatsapp?: string;
    phone?: string;
    email?: string;
  };
};

export const founders: Person[] = [
  {
    slug: "mei-lan-gee",
    name: "Ms. Mei Lan Gee",
    role: "Co-Founder",
    country: "United States",
    flag: "🇺🇸",
    bio: [
      "Ms. Mei Lan Gee is an American woman and one of the founders of PinkLove79. Her connection to Cambodia grew from a genuine desire to care for people and make a meaningful difference in the lives of children and families who need support.",
      "She helps PinkLove79 by reaching out to people around the world, raising funds, sharing the needs of the community, and connecting caring individuals and organizations with opportunities to help.",
      "For Mei Lan Gee, distance does not have to prevent compassion. She believes that people from different countries, cultures, and backgrounds can come together with one heart — to care, encourage, and create opportunities for others.",
    ],
    quote:
      "When we care about someone, we can find a way to help — even from far away. Together, our kindness can travel across borders and bring hope where it is needed most.",
    contact: { whatsapp: "", phone: "", email: "" },
  },
  {
    slug: "samnang",
    name: "Samnang",
    role: "Co-Founder",
    country: "Cambodia",
    flag: "🇰🇭",
    bio: [
      "Samnang is a Cambodian entrepreneur and one of the founders of PinkLove79. His journey began with a simple desire to help people around him who were facing difficult circumstances.",
      "Through his small business selling Cambodian lemongrass oil and agarwood oil, Samnang has chosen to share what he earns to support children, families, and people in his community.",
      "For him, helping others is not simply a project — it is a personal responsibility and something close to his heart. He believes that even a small act of kindness can bring encouragement, dignity, and hope to another person.",
    ],
    quote:
      "I believe we do not need to be rich to help others. We can begin with what we have, and together, small acts of kindness can change lives.",
    contact: { whatsapp: "", phone: "", email: "" },
  },
];

export const team: Person[] = [
  {
    slug: "yoeun-yan",
    name: "Yoeun Yan",
    role: "Administration & Web Design Specialist",
    country: "Cambodia",
    flag: "🇰🇭",
    bio: [
      "Yoeun Yan supports PinkLove79 through administration and website development. He helps organize important information, maintain the website, and support the day-to-day administrative work of the organization.",
      "His work helps PinkLove79 communicate clearly with supporters, volunteers, partners, and people around the world.",
    ],
    contact: { whatsapp: "", phone: "", email: "" },
  },
  {
    slug: "peap-sreynit",
    name: "Peap Sreynit",
    role: "Accountant",
    country: "Cambodia",
    flag: "🇰🇭",
    bio: [
      "Peap Sreynit supports PinkLove79 by helping manage financial records, budgets, and accounting responsibilities. Her careful work helps the organization keep its finances organized and transparent.",
      "She plays an important role in ensuring that financial information is properly recorded and that resources are managed responsibly to support children, families, and community projects.",
    ],
    contact: { whatsapp: "", phone: "", email: "" },
  },
  {
    slug: "bora",
    name: "Bora",
    role: "Church & Community Coordinator",
    country: "Cambodia",
    flag: "🇰🇭",
    bio: [
      "Bora helps PinkLove79 connect with children, families, the church, and the wider local community. He supports community activities, helps coordinate church programs, and works closely with local people to understand their needs and encourage participation.",
      "Through his work, Bora helps create a welcoming and caring environment where children and families can feel supported, connected, and valued.",
    ],
    contact: { whatsapp: "", phone: "", email: "" },
  },
];

/** Initials for the placeholder avatar, e.g. "Ms. Mei Lan Gee" → "ML". */
export function initials(name: string) {
  const words = name
    .replace(/^(Ms\.|Mr\.|Mrs\.|Dr\.)\s+/i, "")
    .split(/\s+/)
    .filter(Boolean);
  return words
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");
}
