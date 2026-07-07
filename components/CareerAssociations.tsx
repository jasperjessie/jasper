import {
  directAssociations,
  consultingAssociations,
  type Association,
} from "@/data/career";

function initialsOf(name: string) {
  return name
    .replace(/[()],?/g, "")
    .split(/[\s-]+/)
    .filter((w) => w.length > 1 || /[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function Monogram({ name, size }: { name: string; size: "lg" | "sm" }) {
  const dims = size === "lg" ? "h-12 w-12 text-lg" : "h-7 w-7 text-[10px]";
  return (
    <span
      aria-hidden
      className={`${dims} flex shrink-0 items-center justify-center rounded-xl bg-accent/10 font-serif font-semibold text-accent dark:bg-gold/15 dark:text-gold`}
    >
      {initialsOf(name)}
    </span>
  );
}

function LogoOrMonogram({ a, size }: { a: Association; size: "lg" | "sm" }) {
  if (a.logo) {
    // White plate keeps dark logos legible on dark-mode card surfaces.
    if (size === "lg") {
      return (
        <span className="flex h-12 w-full items-center justify-center rounded-xl bg-white px-3 sm:h-16 sm:px-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={a.logo} alt={a.name} className="max-h-8 w-auto object-contain sm:max-h-11" />
        </span>
      );
    }
    return (
      <span className="flex shrink-0 items-center justify-center rounded-md bg-white px-1.5 py-1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={a.logo} alt={a.name} className="h-6 w-auto object-contain" />
      </span>
    );
  }
  return <Monogram name={a.name} size={size} />;
}

export default function CareerAssociations() {
  return (
    <section id="career" className="mx-auto max-w-5xl px-6 pb-14 sm:pb-20">
      <p className="mb-2 text-center text-xs font-medium uppercase tracking-widest text-gold">
        Career Associations
      </p>
      <h2 className="mb-8 text-center font-serif text-2xl font-semibold sm:mb-10">
        Organizations I&apos;ve worked with
      </h2>

      {/* Tier 1 — direct associations */}
      <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {directAssociations.map((a) => (
          <div
            key={a.name}
            className="flex flex-col items-center gap-3 rounded-2xl border border-black/5 bg-white p-4 text-center shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5 sm:gap-4 sm:p-6"
          >
            <LogoOrMonogram a={a} size="lg" />
            <span className="font-serif text-sm font-medium leading-snug">
              {a.name}
            </span>
          </div>
        ))}
      </div>

      {/* Tier 2 — consulting engagements via Ei */}
      <p className="mb-5 mt-12 text-center text-sm text-ink/60 dark:text-paper/60">
        School consulting engagements&nbsp;·&nbsp;via Educational Initiatives (Ei)
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {consultingAssociations.map((a) => (
          <div
            key={a.name}
            className="flex items-center gap-2.5 rounded-full border border-black/5 bg-white py-2 pl-2.5 pr-5 shadow-sm transition hover:border-accent/30 dark:border-white/10 dark:bg-white/5 dark:hover:border-gold/40"
          >
            <LogoOrMonogram a={a} size="sm" />
            <span className="text-sm text-ink/80 dark:text-paper/80">{a.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
