export default function CustomerDashboardPage() {
    return (
        <section className="space-y-6">
            <div>
                <p className="text-sm font-medium uppercase tracking-[0.35em] text-fuchsia-300">Customer workspace</p>
                <h1 className="mt-2 text-3xl font-semibold text-white">Welcome back</h1>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                    Review your cart, track orders, and keep your favorite pieces close at hand.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-slate-400">Cart items</p>
                    <p className="mt-2 text-2xl font-semibold text-white">3 items</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-slate-400">Open orders</p>
                    <p className="mt-2 text-2xl font-semibold text-white">1 order</p>
                </div>
            </div>
        </section>
    );
}
