import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { getActiveProducts, getProductBySlug } from "@/lib/products";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getActiveProducts().map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="mx-auto w-full max-w-7xl space-y-6 px-4 py-6 md:space-y-10 md:px-8 md:py-16">
      <Link
        href="/collection"
        className="text-[10px] uppercase tracking-[0.22em] text-brand-gray transition-colors hover:text-brand-cream md:text-xs"
      >
        Retour
      </Link>

      <div className="grid gap-7 xl:grid-cols-[1.2fr_1fr] xl:gap-8">
        <ProductGallery product={product} />
        <ProductInfo product={product} />
      </div>
    </section>
  );
}
