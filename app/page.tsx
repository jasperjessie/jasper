import Link from "next/link";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { clients } from "@/data/clients";
import { getAllPosts } from "@/lib/blog";
import ServiceCard from "@/components/ServiceCard";
import BlogCard from "@/components/BlogCard";

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-24 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          {site.tagline}
        </p>
        <h1 className="mx-auto max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
          {site.name}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink/70">
          {site.summary}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={site.resumeFile}
            download
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition hover:bg-accent-dark"
          >
            Download Resume
          </a>
          <Link
            href="/#contact"
            className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium transition hover:border-accent hover:text-accent"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-serif text-2xl font-semibold">What I do</h2>
          <Link href="/services" className="text-sm text-accent hover:underline">
            View all services →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 4).map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
      </section>

      {/* Latest blog posts */}
      {latestPosts.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 pb-20">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-serif text-2xl font-semibold">From the blog</h2>
            <Link href="/blog" className="text-sm text-accent hover:underline">
              Read all posts →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {latestPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Clients */}
      {clients.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 pb-20">
          <h2 className="mb-8 text-center font-serif text-2xl font-semibold">
            I have worked with
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-70">
            {clients.map((c) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={c.name} src={c.logo} alt={c.name} className="h-10 w-auto grayscale" />
            ))}
          </div>
        </section>
      )}

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-2xl px-6 pb-24 text-center">
        <h2 className="mb-4 font-serif text-2xl font-semibold">Let's talk</h2>
        <p className="mb-8 text-ink/70">
          Reach out about consulting, workshops, or speaking engagements.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="inline-block rounded-full bg-accent px-8 py-3 text-sm font-medium text-white transition hover:bg-accent-dark"
        >
          {site.email}
        </a>
      </section>
    </>
  );
}
