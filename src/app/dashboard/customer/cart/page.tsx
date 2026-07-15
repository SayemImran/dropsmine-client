export default function CustomerCartPage() {
    return (
        <section className="space-y-4">
            <div>
                <h1 className="text-2xl font-semibold text-white">My cart</h1>
                <p className="mt-2 text-sm text-slate-400">Your selected items are ready for checkout.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <ul className="space-y-3 text-sm text-slate-300">
                    <li className="flex items-center justify-between rounded-2xl bg-slate-900/60 px-4 py-3">
                        <span>Signature hoodie</span>
                        <span>$89</span>
                    </li>
                    <li className="flex items-center justify-between rounded-2xl bg-slate-900/60 px-4 py-3">
                        <span>Limited sneakers</span>
                        <span>$120</span>
                    </li>
                    <li className="flex items-center justify-between rounded-2xl bg-slate-900/60 px-4 py-3">
                        <span>Street cap</span>
                        <span>$35</span>
                    </li>
                </ul>
            </div>
        </section>
    );
}
