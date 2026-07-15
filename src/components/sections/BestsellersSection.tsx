const products = [
  { name: "Itachi Uchiha drops design", price: "$34", image: "/assets/itachi.png" },
  { name: "Madara Uchiha drops design", price: "$54", image: "/assets/madara.png" },
  { name: "Obito drops design", price: "$24", image: "/assets/obito.png" },
];

export default function BestsellersSection() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
              Best sellers
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Fan favorites that keep selling out.
            </h2>
          </div>
          <a href="#" className="text-sm font-semibold text-amber-300 transition hover:text-amber-200">
            View bestsellers →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <div key={product.name} className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6">
              <div className="overflow-hidden rounded-[1.25rem]">
                <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
              </div>
              <div className="mt-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <span className="text-sm font-medium text-amber-300">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
