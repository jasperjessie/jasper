import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/services";
import { site } from "@/data/site";

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const service = getServiceBySlug(params.slug);
    return { title: `${service.title} — ${site.name}`, description: service.summary };
  } catch {
    return {};
  }
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  let service;
  try {
    service = getServiceBySlug(params.slug);
  } catch {
    notFound();
  }

  return (
    <article className="mx-auto max-w-2xl px-6 py-20">
      <Link
        href="/services"
        className="mb-8 inline-block text-sm text-accent hover:underline dark:text-gold"
      >
        ← All services
      </Link>
      <div className="mb-4 text-4xl">{service!.icon}</div>
      <h1 className="mb-4 font-serif text-3xl font-semibold leading-tight">
        {service!.title}
      </h1>
      <p className="mb-8 text-base text-ink/70 dark:text-paper/70">{service!.summary}</p>
      <div className="prose prose-neutral max-w-none prose-headings:font-serif prose-a:text-accent dark:prose-invert dark:prose-a:text-gold">
        <MDXRemote source={service!.content} />
      </div>
    </article>
  );
}
