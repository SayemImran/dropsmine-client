"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    name: "Itachi Uchiha drops design",
    price: "$34",
    image: "/assets/itachi.png",
  },
  {
    name: "Madara Uchiha drops design",
    price: "$54",
    image: "/assets/madara.png",
  },
  {
    name: "Obito drops design",
    price: "$24",
    image: "/assets/obito.png",
  },
];

const positions = [
  {
    x: "-120%",
    rotate: -10,
  },
  {
    x: "0%",
    rotate: 0,
  },
  {
    x: "120%",
    rotate: 10,
  },
];

export default function BestsellersSection() {
  return (
    <section className="bg-slate-950 py-24 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="uppercase tracking-[0.35em] text-amber-300 text-sm font-semibold">
              Best Sellers
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Fan favorites that keep selling out.
            </h2>
          </div>

          <Link
            href="/products"
            className="text-amber-300 hover:text-amber-200 transition"
          >
            View all →
          </Link>
        </div>

        <div className="relative h-[520px] flex justify-center items-center">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{
                x: 0,
                y: 0,
                scale: 0.82,
                rotate: 0,
                opacity: 0,
              }}
              whileInView={{
                x: positions[index].x,
                y: 0,
                scale: 1,
                rotate: positions[index].rotate,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 16,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -20,
                rotate: 0,
                scale: 1.05,
                zIndex: 100,
              }}
              className="absolute w-80 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-lg shadow-2xl"
              style={{
                zIndex: products.length - index,
              }}
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-72 w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>

              <div className="mt-6 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">
                    {product.name}
                  </h3>
                </div>

                <span className="text-amber-300 font-bold">
                  {product.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}