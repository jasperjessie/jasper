import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-10 text-sm text-ink/60">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} {site.name}</p>
        <div className="flex gap-5">
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
            LinkedIn
          </a>
          <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-accent">
            GitHub
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-accent">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
