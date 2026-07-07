import { getAllPosts } from "@/lib/blog";
import { site } from "@/data/site";
import BlogCard from "@/components/BlogCard";
import Reveal from "@/components/Reveal";

export const metadata = { title: `Blog — ${site.name}` };

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-5xl px-6 py-12 sm:py-20">
      <h1 className="mb-10 font-serif text-3xl font-semibold">Blog</h1>
      {posts.length === 0 ? (
        <p className="text-ink/60 dark:text-paper/60">
          No posts yet. Add an .mdx file to <code>content/blog</code>.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 60}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
