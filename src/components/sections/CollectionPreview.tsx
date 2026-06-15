import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import type { HomeContent } from "@/lib/content";
import type { Product } from "@/types/product";

interface CollectionPreviewProps {
  products: Product[];
  content: HomeContent;
}

export function CollectionPreview({ products, content }: CollectionPreviewProps) {
  const items = products.slice(0, 3);

  return (
    <section className="mx-auto w-full max-w-7xl space-y-8 px-4 py-16 md:space-y-10 md:px-8 md:py-24">
      <div className="home-reveal flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gray md:text-xs">
            {content.collectionPreviewEyebrow}
          </p>
          <h2 className="font-serif text-4xl leading-none md:text-5xl">
            {content.collectionPreviewTitle}
          </h2>
          <p className="max-w-xl text-sm leading-6 text-brand-cream/68">
            {content.collectionPreviewText}
          </p>
        </div>
        <Link
          href="/collection"
          className="w-fit border-b border-white/40 pb-1 text-[11px] uppercase tracking-[0.2em] text-brand-cream/80 hover:text-brand-cream"
        >
          Toute la collection
        </Link>
      </div>
      <div className="grid gap-8 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
        {items.map((product) => (
          <div key={product.id} className="home-reveal">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
