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

type ProductCardProps = {
    product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/30 bg-white/10 p-4 shadow-[0_20px_80px_rgba(15,23,42,0.2)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-slate-900/20" />

            <div className="relative overflow-hidden rounded-[22px]">
                <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
                <span className="absolute left-3 top-3 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-blue-300 text-xs font-semibold uppercase tracking-[0.25em] backdrop-blur-md">
                    {product.priority}
                </span>
            </div>

            <div className="relative mt-4 flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <h3 className="text-lg font-semibold text-white">{product.title}</h3>
                        <p className="mt-1 text-sm text-blue-300">{product.shortDescription}</p>
                    </div>
                    <span className="rounded-full bg-slate-900/90 px-3 py-1 text-sm font-semibold text-white">
                        {product.price}
                    </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-white">{product.fullDescription}</p>

                <div className="mt-4 flex items-center justify-between border-t border-slate-200/70 pt-4 text-sm text-gray-500">
                    <span>Added {product.date}</span>
                    <Link
                        href={`/products/${product.id}`}
                        className="rounded-full bg-white/15 px-3 py-1.5 font-medium text-blue-300 transition hover:bg-white/25"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </article>
    );
}
