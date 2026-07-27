import type { ReactNode } from "react";

export default function ImageRow({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose my-6 flex flex-wrap gap-4 [&>img]:min-w-[260px] [&>img]:flex-1 [&>img]:rounded-lg [&>img]:border [&>img]:border-black/5 [&>img]:object-contain dark:[&>img]:border-white/10">
      {children}
    </div>
  );
}
