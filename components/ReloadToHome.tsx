"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

// If the user hits a hard refresh (not a link click) on any page other than
// the homepage, send them back to the landing page.
export default function ReloadToHome() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const entries = performance.getEntriesByType(
      "navigation"
    ) as PerformanceNavigationTiming[];
    const isReload = entries.length > 0 && entries[0].type === "reload";
    if (isReload && pathname !== "/") {
      router.replace("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
