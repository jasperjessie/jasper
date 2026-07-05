import { site } from "@/data/site";

export const metadata = { title: `Bio — ${site.name}` };

export default function BioPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="mb-8 font-serif text-3xl font-semibold">Bio</h1>
      <div className="space-y-5 leading-relaxed text-ink/80 dark:text-paper/80">
        <p>{site.summary}</p>
        <p>
          Edit this page at <code>app/bio/page.tsx</code> — write your full bio here:
          background, philosophy, notable engagements, and what you're focused on now.
        </p>
      </div>
    </section>
  );
}
