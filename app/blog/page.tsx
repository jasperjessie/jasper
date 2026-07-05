import { getAllPosts } from "@/lib/blog";
import { site } from "@/data/site";
import BlogCard from "@/components/BlogCard";

export const metadata = { title: `Blog — ${site.name}` };

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="mb-10 font-serif text-3xl font-semibold">Blog</h1>
      {posts.length === 0 ? (
        <p className="text-ink/60">
          No posts yet. Add an .mdx file to <code>content/blog</code>.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
