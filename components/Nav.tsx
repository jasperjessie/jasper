import Link from "next/link";
import { site } from "@/data/site";
import ThemeToggle from "@/components/ThemeToggle";
import MobileMenu from "@/components/MobileMenu";

const links = [
  { href: "/bio", label: "Bio" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/resources", label: "Resources" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-paper/90 backdrop-blur transition-colors dark:border-white/10 dark:bg-ink/90">
      <nav className="relative mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="font-serif text-base font-semibold tracking-tight sm:text-lg"
        >
          {site.name}
        </Link>
        <div className="flex items-center gap-2 sm:gap-6">
          <ul className="hidden items-center gap-6 text-sm md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="relative pb-1 text-ink/70 transition-colors duration-300 hover:text-accent after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full dark:text-paper/70 dark:hover:text-gold dark:after:bg-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <MobileMenu links={links} />
        </div>
      </nav>
    </header>
  );
}
