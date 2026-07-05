"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const el = document.querySelector(hash);
    if (!el) return;
    const timer = setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
