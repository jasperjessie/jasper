"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-sm transition hover:border-accent hover:text-accent dark:border-white/15 dark:hover:border-gold dark:hover:text-gold"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
