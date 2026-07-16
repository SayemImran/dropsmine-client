export default function NewsletterSection() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-amber-400/20 bg-gradient-to-br from-violet-950 via-slate-900 to-slate-800 p-8 shadow-2xl shadow-black/20 sm:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-100">
                Stay in the loop
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Get early access to new drops and exclusive offers.
              </h2>
              <p className="mt-4 text-lg text-slate-100/90">
                Join the list for first access, limited releases, and behind-the-scenes updates.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-200"
              />
              <button className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
