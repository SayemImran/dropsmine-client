import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.15),_transparent_35%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-20">
        <div className="w-full max-w-3xl rounded-[2rem] border border-white/15 bg-white/10 px-8 py-12 shadow-2xl shadow-slate-950/40 backdrop-blur-2xl">
          <div className="mb-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-inner shadow-slate-950/25">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-slate-200/80">Oops, this page is missing</p>
            <h1 className="text-6xl font-black tracking-tight text-white sm:text-7xl">404</h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-slate-200/90">
              We couldn&apos;t find the page you were looking for. It may have been moved, deleted, or never existed.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-[1.5fr_1fr] items-center">
            <div>
              <p className="mb-6 text-slate-300">
                Return to the home page or explore our featured products from the navigation.
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-slate-900/80 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Go back home
              </Link>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-6 text-slate-300 shadow-lg shadow-slate-950/30 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80">Need help?</p>
              <p className="mt-4 text-sm leading-6">
                If you think this is an error, check the URL or contact support for assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
