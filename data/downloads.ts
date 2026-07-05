export type Downloadable = {
  title: string;
  description: string;
  file: string; // path under /public/downloads
  sizeLabel?: string;
};

// Drop files into /public/downloads and add an entry here to publish them.
export const downloads: Downloadable[] = [
  {
    title: "Resume",
    description: "Full resume, updated regularly.",
    file: "/downloads/jasper-jessie-resume.pdf",
    sizeLabel: "PDF",
  },
];
