export type SELDomain = {
  name: string;
  description: string;
  sampleIndicators: string[];
};

// The 5 SEL competency domains, adapted from the DESSA
// (Devereux Student Strengths Assessment) framework.
export const selDomains: SELDomain[] = [
  {
    name: "Self-Awareness",
    description:
      "A realistic understanding of one's own strengths and limitations, and a consistent desire for self-improvement.",
    sampleIndicators: [
      "Shows awareness of personal strengths",
      "Asks somebody for feedback",
      "Describes how they were feeling",
    ],
  },
  {
    name: "Social Awareness",
    description:
      "The capacity to interact with others in a way that shows respect for their ideas and behaviors, and uses cooperation and tolerance in social situations.",
    sampleIndicators: [
      "Gets along with different types of people",
      "Respects another person's opinion",
      "Contributes to group efforts",
    ],
  },
  {
    name: "Self-Management",
    description:
      "Success in controlling emotions and behaviors to complete a task or succeed in a new or challenging situation.",
    sampleIndicators: [
      "Focuses on a task despite a distraction",
      "Stays calm when faced with a challenge",
      "Adjusts well moving between settings",
    ],
  },
  {
    name: "Relationship Skills",
    description:
      "Consistent performance of socially acceptable actions that promote and maintain positive connections with others.",
    sampleIndicators: [
      "Offers to help somebody",
      "Expresses concern for another person",
      "Responds to another person's feelings",
    ],
  },
  {
    name: "Responsible Decision Making",
    description:
      "Care and reliability in one's actions, combined with a problem-solving approach that learns from experience and accepts responsibility for decisions.",
    sampleIndicators: [
      "Uses available resources to solve a problem",
      "Accepts responsibility for their actions",
      "Follows through on tasks without reminders",
    ],
  },
];

export const selScoreBands = [
  { label: "Strength", range: "T-score ≥ 60", share: 16 },
  { label: "Typical", range: "T-score 41–59", share: 68 },
  { label: "Needs Instruction", range: "T-score ≤ 40", share: 16 },
];
