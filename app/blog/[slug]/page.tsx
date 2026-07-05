import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { site } from "@/data/site";

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
    <article className="mx-auto max-w-2xl px-6 py-20">
      <p className="mb-3 text-xs uppercase tracking-wide text-accent">
        {new Date(post!.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        {" · "}
        {post!.readingTime}
      </p>
      <h1 className="mb-8 font-serif text-3xl font-semibold leading-tight">{post!.title}</h1>
      <div className="prose prose-neutral max-w-none prose-headings:font-serif prose-a:text-accent">
        <MDXRemote source={post!.content} />
      </div>
    </article>
  );
}
