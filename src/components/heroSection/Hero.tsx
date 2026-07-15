"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const slides = ["/assets/itachi.png", "/assets/madara.png", "/assets/obito.png"];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-violet-500 via-blue-800 to-purple-300 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 lg:flex-row lg:px-8 lg:py-28">
        <div className="max-w-2xl flex-1">
          <span className="inline-flex rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-300">
            Fresh drop • Limited release
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Wear your vibe with a bold new tee.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
            Build your signature look with premium comfort, clean design, and a statement that stands out.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 ">
            <Link
              href="#"
              className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-white border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-lg rounded-full"
            >
              Shop now
            </Link>
            <Link
              href="#"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View designs
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-300">
            <div>
              <div className="text-2xl font-semibold text-white">50k+</div>
              <div>happy customers</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">4.9/5</div>
              <div>average rating</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">24h</div>
              <div>fast dispatch</div>
            </div>
          </div>
        </div>

        <div className="w-full flex-1">
          <div className="relative mx-auto max-w-xl rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-amber-400/20 via-transparent to-cyan-400/20" />
            <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-900/70 p-3 sm:p-4">
              <div className="relative h-[420px] overflow-hidden rounded-[1.25rem]">
                {slides.map((slide, index) => (
                  <img
                    key={slide}
                    src={slide}
                    alt={`Hero slide ${index + 1}`}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                      index === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                  />
                ))}
              </div>

              <div className="mt-4 flex justify-center gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide}
                    type="button"
                    aria-label={`Show slide ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      index === activeIndex ? "w-8 bg-amber-400" : "w-2.5 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}