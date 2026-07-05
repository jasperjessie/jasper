export type Downloadable = {
  title: string;
  description: string;
  file: string; // path under /public/downloads
  sizeLabel?: string;
};

// Publish guides, frameworks, or handouts here — not personal documents like a resume.
// Drop the file into /public/downloads and add an entry below.
export const downloads: Downloadable[] = [];
