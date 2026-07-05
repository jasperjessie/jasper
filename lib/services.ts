import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SERVICES_DIR = path.join(process.cwd(), "content/services");

// Controls display order on /services and the homepage preview — lower numbers first.
export type ServiceMeta = {
  slug: string;
  title: string;
  icon: string;
  summary: string;
  order: number;
};

export type ServiceEntry = ServiceMeta & { content: string };

function ensureDir() {
  if (!fs.existsSync(SERVICES_DIR)) fs.mkdirSync(SERVICES_DIR, { recursive: true });
}

export function getAllServiceSlugs(): string[] {
  ensureDir();
  return fs
    .readdirSync(SERVICES_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getServiceBySlug(slug: string): ServiceEntry {
  const filePath = path.join(SERVICES_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    icon: data.icon ?? "📌",
    summary: data.summary ?? "",
    order: data.order ?? 0,
    content,
  };
}

export function getAllServices(): ServiceMeta[] {
  return getAllServiceSlugs()
    .map((slug) => {
      const { content, ...meta } = getServiceBySlug(slug);
      return meta;
    })
    .sort((a, b) => a.order - b.order);
}
