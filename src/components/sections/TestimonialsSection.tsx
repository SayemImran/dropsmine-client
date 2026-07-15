const testimonials = [
  {
    quote: "The fit is incredible and the quality feels premium from the first wear.",
    author: "Mina R.",
  },
  {
    quote: "My go-to brand for clean essentials that still feel bold and unique.",
    author: "Jules T.",
  },
  {
    quote: "The design details are so sharp, and the shipping was faster than expected.",
    author: "Drew K.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-violet-950 to-slate-800 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Loved by our community
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            What people are saying about Dropsmine.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.author} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-7 shadow-lg shadow-black/20 backdrop-blur">
              <p className="text-sm leading-7 text-slate-200">“{item.quote}”</p>
              <p className="mt-6 font-semibold text-amber-300">{item.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
