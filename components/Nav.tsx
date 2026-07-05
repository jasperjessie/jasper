import Link from "next/link";
import { site } from "@/data/site";

const links = [
  { href: "/bio", label: "Bio" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/downloads", label: "Downloads" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-lg font-semibold tracking-tight">
          {site.name}
        </Link>
        <ul className="flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-ink/70 transition hover:text-accent"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
