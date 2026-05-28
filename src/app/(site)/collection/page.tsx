import { ProductCard } from "@/components/product/ProductCard";
import { collectionTitle, getActiveProducts } from "@/lib/products";

export default function CollectionPage() {
  const products = getActiveProducts();

  return (
    <section className="mx-auto w-full max-w-7xl space-y-8 px-4 py-8 md:space-y-10 md:px-8 md:py-16">
      <header className="max-w-3xl space-y-3 md:space-y-4">
        <p className="text-[10px] uppercase tracking-[0.24em] text-brand-gray md:text-xs">
          Collection
        </p>
        <h1 className="font-serif text-4xl leading-none md:text-6xl">{collectionTitle}</h1>
        <p className="max-w-2xl text-sm leading-6 text-brand-cream/70 md:text-base md:text-brand-cream/80">
          Cinq pieces. Cinq paysages. Cinq phrases. Une premiere collection pensee comme
          une archive.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
