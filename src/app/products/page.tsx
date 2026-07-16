import ProductCard from "@/components/ProductCard";

interface Product {
    date: string;
    fullDescription: string;
    id: string;
    imageUrl: string;
    price: string;
    priority: string;
    shortDescription: string;
    title: string;
}

export default async function ProductsPage() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/products`);
    const products: Product[] = await res.json();

    return (
        <main className="min-h-screen bg-gradient-to-br from-violet-950 via-slate-900 to-slate-800 px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto w-10/12">
                <div className="mb-10 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white">
                        Featured Product
                    </p>
                    <h1 className="mt-3 text-4xl text-white font-semibold text-slate-900 sm:text-5xl">
                        Premium essentials, elevated
                    </h1>
                </div>

                <div className="mx-auto w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {products.map(product => <ProductCard key={product.id} product={product} />)}

                </div>
            </div>
        </main>
    );
}