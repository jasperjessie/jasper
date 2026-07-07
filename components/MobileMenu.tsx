"use client";

import { useState } from "react";
import Link from "next/link";

type NavLink = { href: string; label: string };

export default function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="flex h-11 w-11 items-center justify-center rounded-full text-ink/70 transition hover:text-accent dark:text-paper/70 dark:hover:text-gold"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {open && (
        <ul className="absolute inset-x-0 top-full border-b border-black/5 bg-paper px-6 pb-4 pt-2 shadow-sm dark:border-white/10 dark:bg-ink">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-base text-ink/80 transition hover:text-accent dark:text-paper/80 dark:hover:text-gold"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
