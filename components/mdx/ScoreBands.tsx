import { selScoreBands } from "@/data/sel";

const toneClasses: Record<string, string> = {
  Strength: "bg-accent text-white dark:bg-gold dark:text-ink",
  Typical: "bg-accent/20 text-accent dark:bg-gold/25 dark:text-gold",
  "Needs Instruction": "bg-black/10 text-ink/70 dark:bg-white/10 dark:text-paper/70",
};

export default function ScoreBands() {
  return (
    <div className="not-prose my-6">
      <div className="flex h-8 w-full overflow-hidden rounded-full">
        {selScoreBands.map((b) => (
          <div
            key={b.label}
            style={{ width: `${b.share}%` }}
            className={`flex items-center justify-center text-[11px] font-medium ${toneClasses[b.label]}`}
          >
            {b.share}%
          </div>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
        {selScoreBands.map((b) => (
          <div key={b.label} className="text-xs">
            <span className="font-medium text-ink dark:text-paper">{b.label}</span>
            <span className="text-ink/60 dark:text-paper/60"> · {b.range}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
