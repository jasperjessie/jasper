import { downloads } from "@/data/downloads";
import { site } from "@/data/site";

export const metadata = { title: `Downloads — ${site.name}` };

export default function DownloadsPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="mb-10 font-serif text-3xl font-semibold">Downloads</h1>
      <div className="divide-y divide-black/5 rounded-2xl border border-black/5 bg-white">
        {downloads.map((d) => (
          <a
            key={d.file}
            href={d.file}
            download
            className="flex items-center justify-between px-6 py-5 transition hover:bg-black/[0.02]"
          >
            <div>
              <p className="font-medium">{d.title}</p>
              <p className="text-sm text-ink/60">{d.description}</p>
            </div>
            <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              {d.sizeLabel ?? "Download"}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
