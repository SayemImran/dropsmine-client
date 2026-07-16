import NavLink from "@/components/NavLink";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_rgba(248,250,252,1)_45%,_rgba(226,232,240,1))] px-6 py-20 text-slate-800 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-slate-200 bg-white/70 p-8 shadow-[0_25px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Let’s talk about your next drop.</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Reach out for product questions, partnerships, or support. We’re always happy to hear from the community.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <NavLink href="/products" className="bg-slate-900 px-5 py-3 text-white hover:bg-slate-800">
            Browse products
          </NavLink>
          <NavLink href="/blog" className="border border-slate-300 bg-white px-5 py-3 text-slate-700 hover:bg-slate-100">
            Read our blog
          </NavLink>
        </div>
      </div>
    </main>
  );
}
