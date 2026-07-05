export type Association = {
  name: string;
  logo?: string; // optional: drop a file in /public/logos and set e.g. "/logos/amazon.svg"
};

// Highlighted in the landing-page hero strip — keep this to 3 for impact.
export const heroHighlights: Association[] = [
  { name: "Amazon", logo: "/logos/amazon.png" },
  { name: "Educational Initiatives (Ei)", logo: "/logos/ei.png" },
  { name: "Teach For India", logo: "/logos/teach-for-india.png" },
];

// Tier 1 — organizations worked with directly.
export const directAssociations: Association[] = [
  { name: "Amazon", logo: "/logos/amazon.png" },
  { name: "Educational Initiatives (Ei)", logo: "/logos/ei.png" },
  { name: "Teach For India", logo: "/logos/teach-for-india.png" },
  { name: "Next Education", logo: "/logos/next-education.png" },
];

// Tier 2 — schools consulted for as part of Educational Initiatives (Ei).
export const consultingAssociations: Association[] = [
  { name: "Delhi Public School", logo: "/logos/dps.png" },
  { name: "Global Indian International School", logo: "/logos/giis.png" },
  { name: "Silver Oaks International School", logo: "/logos/silver-oaks.png" },
  { name: "Edu-GIRLS", logo: "/logos/edu-girls.png" },
  { name: "Sri Kumaran Group of Institutions", logo: "/logos/sri-kumaran.png" },
];
