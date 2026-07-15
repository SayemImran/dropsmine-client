const collections = [
  {
    title: "Neon City",
    description: "Clean graphics with a street-ready edge.",
    image: "/assets/itachi.png",
  },
  {
    title: "Sunset Drift",
    description: "Warm tones and relaxed silhouettes.",
    image: "/assets/madara.png",
  },
  {
    title: "Midnight Pulse",
    description: "Bold contrast and premium comfort.",
    image: "/assets/obito.png",
  },
];

export default function FeaturedCollectionSection() {
  return (
    <section className="bg-slate-950/95 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
              New arrivals
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Drop into the latest looks.
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Fresh graphics, premium fabric, and standout color stories built for everyday wear.
            </p>
          </div>
          <a href="#" className="text-sm font-semibold text-amber-300 transition hover:text-amber-200">
            Browse all styles →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {collections.map((item) => (
            <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 shadow-xl shadow-black/20 backdrop-blur">
              <div className="overflow-hidden rounded-[1.25rem]">
                <img src={item.image} alt={item.title} className="h-40 w-full object-cover" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
