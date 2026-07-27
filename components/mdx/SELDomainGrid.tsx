import { selDomains } from "@/data/sel";

export default function SELDomainGrid() {
  return (
    <div className="not-prose my-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {selDomains.map((d) => (
        <div
          key={d.name}
          className="rounded-xl border border-black/5 bg-white p-5 dark:border-white/10 dark:bg-white/5"
        >
          <h4 className="mb-1.5 font-serif text-base font-semibold text-accent dark:text-gold">
            {d.name}
          </h4>
          <p className="mb-3 text-sm leading-relaxed text-ink/70 dark:text-paper/70">
            {d.description}
          </p>
          <ul className="space-y-1">
            {d.sampleIndicators.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-xs text-ink/60 dark:text-paper/60"
              >
                <span aria-hidden className="text-gold">
                  •
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
