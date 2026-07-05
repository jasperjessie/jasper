import { downloads } from "@/data/downloads";
import { site } from "@/data/site";

export const metadata = { title: `Resources — ${site.name}` };

export default function ResourcesPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="mb-10 font-serif text-3xl font-semibold">Resources</h1>
      {downloads.length === 0 ? (
        <p className="text-ink/60 dark:text-paper/60">
          Guides and handouts will be published here soon.
        </p>
      ) : (
        <div className="divide-y divide-black/5 rounded-2xl border border-black/5 bg-white dark:divide-white/10 dark:border-white/10 dark:bg-white/5">
          {downloads.map((d) => (
            <a
              key={d.file}
              href={d.file}
              download
              className="flex items-center justify-between px-6 py-5 transition hover:bg-black/[0.02] dark:hover:bg-white/[0.04]"
            >
              <div>
                <p className="font-medium">{d.title}</p>
                <p className="text-sm text-ink/60 dark:text-paper/60">{d.description}</p>
              </div>
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent dark:bg-gold/10 dark:text-gold">
                {d.sizeLabel ?? "Download"}
              </span>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
