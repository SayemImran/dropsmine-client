import Link from "next/link";

const posts = [
  {
    title: "How to style oversized essentials",
    excerpt: "A quick guide to pairing relaxed fits with clean, confident silhouettes.",
  },
  {
    title: "Why premium cotton still matters",
    excerpt: "Discover the details that make a better tee feel better on every wear.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen  bg-[radial-gradient(circle_at_top_left,_rgba(192,132,252,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.18),_transparent_20%),linear-gradient(180deg,_#020617_0%,_#090b18_100%)] px-6 py-20 text-slate-800 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">Blog</p>
          <h1 className="mt-4 text-4xl text-white font-semibold sm:text-5xl">Stories, style notes, and product insights.</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.title} className="rounded-[24px] border border-slate-200 bg-white/70 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl">
              <h2 className="text-2xl font-semibold text-slate-900">{post.title}</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{post.excerpt}</p>
              <Link href="/products" className="mt-6 inline-flex text-sm font-semibold text-slate-900 transition hover:text-slate-700">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
