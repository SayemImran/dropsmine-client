import ProductDetails from "@/components/ProductDetails";

interface PageProps{
    params:{
        id: string,
    };
}
export default async function ProductDetailsPage({params}:PageProps) {
    const {id} = await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/products/${id}`);
    const product = await res.json();
  return <ProductDetails product={product} />;
}