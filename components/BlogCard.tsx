import Link from "next/link";
import type { PostMeta } from "@/lib/blog";

export default function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <p className="mb-2 text-xs uppercase tracking-wide text-accent">
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
        {" · "}
        {post.readingTime}
      </p>
      <h3 className="mb-2 font-serif text-xl font-semibold">{post.title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-ink/65">{post.excerpt}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
