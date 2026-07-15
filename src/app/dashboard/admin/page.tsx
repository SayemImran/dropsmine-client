export default function AdminDashboardPage() {
    return (
        <section className="space-y-6">
            <div>
                <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">Admin workspace</p>
                <h1 className="mt-2 text-3xl font-semibold text-white">Manage products and store activity</h1>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                    Use this space to oversee inventory, launch new products, and keep the storefront running smoothly.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-slate-400">Active products</p>
                    <p className="mt-2 text-2xl font-semibold text-white">128</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-slate-400">Pending orders</p>
                    <p className="mt-2 text-2xl font-semibold text-white">14</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-slate-400">Customer growth</p>
                    <p className="mt-2 text-2xl font-semibold text-white">+12%</p>
                </div>
            </div>
        </section>
    );
}
