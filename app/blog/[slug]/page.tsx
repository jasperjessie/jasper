import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { site } from "@/data/site";
import ImageRow from "@/components/mdx/ImageRow";
import ReadingLink from "@/components/mdx/ReadingLink";

const mdxComponents = { ImageRow, ReadingLink };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const post = getPostBySlug(params.slug);
    return { title: `${post.title} — ${site.name}`, description: post.excerpt };
  } catch {
    return {};
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  let post;
  try {
    post = getPostBySlug(params.slug);
  } catch {
    notFound();
  }

  return (
    <>
      {post!.cover && (
        <div className="mx-auto max-w-4xl px-6 pt-10 sm:pt-16">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post!.cover}
            alt=""
            className="aspect-[21/9] w-full rounded-2xl border border-black/5 object-cover dark:border-white/10"
          />
        </div>
      )}
      <article className="mx-auto max-w-2xl px-6 pb-12 pt-10 sm:pb-20 sm:pt-16">
        <p className="mb-3 text-xs uppercase tracking-wide text-accent dark:text-gold">
          {new Date(post!.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          {" · "}
          {post!.readingTime}
        </p>
        <h1 className="mb-8 font-serif text-3xl font-semibold leading-tight">{post!.title}</h1>
        <div className="prose prose-neutral max-w-none prose-headings:font-serif prose-a:text-accent dark:prose-invert dark:prose-a:text-gold">
          <MDXRemote source={post!.content} components={mdxComponents} />
        </div>
      </article>
    </>
  );
}
