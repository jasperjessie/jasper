export type Association = {
  name: string;
  logo?: string; // optional: drop a file in /public/logos and set e.g. "/logos/amazon.svg"
};

// Tier 1 — organizations worked with directly.
export const directAssociations: Association[] = [
  { name: "Amazon" },
  { name: "Educational Initiatives (Ei)" },
  { name: "Teach For India" },
  { name: "Next Education" },
];

// Tier 2 — schools consulted for as part of Educational Initiatives (Ei).
export const consultingAssociations: Association[] = [
  { name: "DPS Core Schools, Delhi" },
  { name: "Global Indian International School" },
  { name: "Silver Oaks International School" },
  { name: "Edu-GIRLS" },
];
