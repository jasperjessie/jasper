"use client";

import { useState, type ReactNode } from "react";

type Props = {
  href: string;
  title: string;
  author: string;
  summary: string;
  children: ReactNode;
};

export default function ReadingLink({ href, title, author, summary, children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <span className="relative inline-block">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onClick={(e) => {
          if (!open && window.matchMedia("(hover: none)").matches) {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className="underline decoration-dotted underline-offset-4"
      >
        {children}
      </a>
      {open && (
        <span
          role="tooltip"
          className="not-prose absolute bottom-full left-0 z-20 mb-2 w-72 max-w-[80vw] rounded-xl border border-black/10 bg-white p-4 text-sm normal-case leading-snug shadow-lg dark:border-white/10 dark:bg-[#1f1f1f]"
        >
          <span className="mb-1 block font-serif text-base font-semibold text-ink dark:text-paper">
            {title}
          </span>
          <span className="mb-2 block text-xs text-ink/60 dark:text-paper/60">{author}</span>
          <span className="block text-ink/80 dark:text-paper/80">{summary}</span>
        </span>
      )}
    </span>
  );
}
