import Link from "next/link";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { getAllPosts } from "@/lib/blog";
import ServiceCard from "@/components/ServiceCard";
import BlogCard from "@/components/BlogCard";
import CareerAssociations from "@/components/CareerAssociations";
import Reveal from "@/components/Reveal";

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 2);

  return (
    <>
      {/* Hero — topographic contour motif, evokes systems/frameworks */}
      <section className="bg-topo w-full">
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-24 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent dark:text-gold">
            {site.tagline}
          </p>
          <h1 className="mx-auto max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            {site.name}
          </h1>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gold" />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink/70 dark:text-paper/70">
            {site.summary}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/services"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition duration-300 ease-out hover:bg-accent-dark dark:bg-gold dark:text-ink dark:hover:bg-gold-light"
            >
              Explore Services
            </Link>
            <Link
              href="/#contact"
              className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium transition duration-300 ease-out hover:border-accent hover:text-accent dark:border-white/15 dark:hover:border-gold dark:hover:text-gold"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-4">
        <Reveal>
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-gold">
            Expertise
          </p>
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-serif text-2xl font-semibold">What I do</h2>
            <Link href="/services" className="text-sm text-accent hover:underline dark:text-gold">
              View all services →
            </Link>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 4).map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Career associations */}
      <Reveal>
        <CareerAssociations />
      </Reveal>

      {/* Latest blog posts */}
      {latestPosts.length > 0 && (
        <Reveal className="block">
          <section className="mx-auto max-w-5xl px-6 pb-20">
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-gold">
              Insights
            </p>
            <div className="mb-8 flex items-end justify-between">
              <h2 className="font-serif text-2xl font-semibold">From the blog</h2>
              <Link href="/blog" className="text-sm text-accent hover:underline dark:text-gold">
                Read all posts →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {latestPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        </Reveal>
      )}

      {/* Contact */}
      <Reveal className="block">
        <section id="contact" className="mx-auto max-w-2xl px-6 pb-24 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-gold">
            Contact
          </p>
          <h2 className="mb-4 font-serif text-2xl font-semibold">Let&apos;s talk</h2>
          <p className="mb-8 text-ink/70 dark:text-paper/70">
            Reach out about consulting, workshops, or speaking engagements.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="inline-block rounded-full bg-accent px-8 py-3 text-sm font-medium text-white transition duration-300 ease-out hover:bg-accent-dark dark:bg-gold dark:text-ink dark:hover:bg-gold-light"
          >
            {site.email}
          </a>
        </section>
      </Reveal>
    </>
  );
}
