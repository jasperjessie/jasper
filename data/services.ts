export type Service = {
  title: string;
  description: string;
  icon: string; // emoji keeps this dependency-free; swap for an icon component later if you want
};

export const services: Service[] = [
  {
    title: "Designing Learning Systems",
    description:
      "End-to-end architecture for how an organization learns — from onboarding to mastery.",
    icon: "🧩",
  },
  {
    title: "Faculty & Trainer Development",
    description:
      "Upskilling the people who teach: pedagogy, delivery, and feedback loops that stick.",
    icon: "🎓",
  },
  {
    title: "Competency Framework Design",
    description:
      "Defining what 'good' looks like at every level, and how to measure it fairly.",
    icon: "🗺️",
  },
  {
    title: "Curriculum Designing",
    description:
      "Structured, sequenced content that moves learners from zero to competent.",
    icon: "📚",
  },
  {
    title: "Assessment & Learning Analytics",
    description:
      "Turning learning data into decisions — not just dashboards.",
    icon: "📊",
  },
  {
    title: "Workshop Facilitation",
    description:
      "Live sessions designed for engagement and retention, not just attendance.",
    icon: "🗣️",
  },
  {
    title: "AI for Education",
    description:
      "Practical integration of AI tools into teaching and institutional workflows.",
    icon: "🤖",
  },
  {
    title: "Instructional Designing",
    description:
      "Translating expertise into learning experiences people actually finish.",
    icon: "✏️",
  },
];
