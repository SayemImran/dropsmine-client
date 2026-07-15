const benefits = [
  {
    title: "Premium feel",
    description: "Soft-touch fabric that stays comfortable from morning to midnight.",
  },
  {
    title: "Made to last",
    description: "Durable construction and premium finishing for everyday styling.",
  },
  {
    title: "Fast shipping",
    description: "Your order is packed and sent with care within 24 hours.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-gradient-to-br from-violet-950 via-slate-900 to-slate-800 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Why dropsmine
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Crafted for comfort, built for confidence.
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Every piece brings together modern design, everyday comfort, and a sharp aesthetic that feels effortless.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {benefits.map((item) => (
            <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-7 shadow-lg shadow-black/20">
              <div className="mb-4 h-12 w-12 rounded-full bg-amber-400/20" />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
