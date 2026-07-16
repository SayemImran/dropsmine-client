import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_rgba(248,250,252,1)_45%,_rgba(226,232,240,1))] px-6 py-20 text-slate-800 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-slate-200 bg-white/70 p-8 shadow-[0_25px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
          About us
        </p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">We bring culture, craft, and comfort together.</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          DropsMine curates premium drops and modern essentials designed for people who value detail, comfort, and standout style.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/products" className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
            Browse products
          </Link>
          <Link href="/contact" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100">
            Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}
