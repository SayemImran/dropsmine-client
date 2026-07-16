import Link from "next/link";

type Product = {
  date: string;
  fullDescription: string;
  id: string;
  imageUrl: string;
  price: string;
  priority: string;
  shortDescription: string;
  title: string;
};

type ProductDetailsProps = {
  product: Product;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-950 via-slate-900 to-slate-800 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[32px] border border-white/20 bg-white/20 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:flex-row lg:p-10">
        <div className="lg:w-[45%]">
          <div className="overflow-hidden rounded-[28px] border border-slate-200/70 bg-slate-100">
            <img src={product.imageUrl} alt={product.title} className="h-[420px] w-full object-cover" />
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between lg:w-[55%]">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white">
                {product.priority}
              </span>
              <span className="text-sm font-medium text-white">#{product.id.slice(0, 8)}</span>
            </div>

            <h1 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">{product.title}</h1>
            <p className="mt-3 text-lg text-blue-300">{product.shortDescription}</p>

            <p className="mt-6 text-base leading-8 text-white">{product.fullDescription}</p>

            <div className="mt-8 grid gap-4 rounded-[24px] border border-slate-200 bg-slate-50/80 p-5 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Price</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900">{product.price}</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Release date</p>
                <p className="mt-2 text-lg font-medium text-slate-700">{product.date}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Add to cart
            </button>
            <Link href="/products" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100">
              Back to products
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
