import Image from "next/image";
import Link from "next/link";
import { CollectionPreview } from "@/components/sections/CollectionPreview";
import { HeroSection } from "@/components/sections/HeroSection";
import { HomeExperience } from "@/components/sections/HomeExperience";
import { ManifestoPreview } from "@/components/sections/ManifestoPreview";
import { mapHomeContent } from "@/lib/content";
import { getActiveProducts, getHomeContent } from "@/lib/products";
import { fallbackProducts } from "@/lib/products-fallback";

export default async function HomePage() {
  const [home, products] = await Promise.all([getHomeContent(), getActiveProducts()]);
  const homeContent = mapHomeContent(home);
  const displayProducts = products.length > 0 ? products : fallbackProducts;
  const collectionHref =
    displayProducts.length === 1
      ? `/collection/${displayProducts[0].slug}`
      : "/collection";
  const collectionLabel =
    displayProducts.length === 1 ? "Voir la piece" : "Voir la collection";
  const chapterNames = displayProducts.map(
    (product) => `${product.chapterNumber} - ${product.name}`,
  );

  return (
    <HomeExperience>
      <HeroSection content={homeContent} />

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.85fr_1.15fr] md:px-8 md:py-24">
        <div className="home-reveal space-y-4">
          <p className="text-[10px] uppercase tracking-[0.26em] text-brand-gray md:text-xs">
            Univers
          </p>
          <h2 className="font-serif text-4xl leading-[1.05] md:text-6xl">
            La collection, pensee comme une archive.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {homeContent.universeBlocks.map((item) => (
            <article
              key={item.step}
              className="home-reveal border-t border-white/10 pt-5 md:border md:border-white/10 md:p-6"
            >
              <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-brand-sand">
                {item.step}
              </p>
              <h3 className="mb-3 font-serif text-3xl leading-none">{item.title}</h3>
              <p className="text-sm leading-6 text-brand-cream/68">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-4 px-4 pb-16 md:grid-cols-[1.2fr_0.8fr] md:px-8 md:pb-24">
        <div className="home-reveal relative aspect-[4/5] overflow-hidden bg-brand-paper md:aspect-[16/10]">
          <Image
            src={homeContent.collectionSectionImage}
            alt="Paysage imprime RIEN DE GRAVE"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 65vw"
          />
        </div>

        <div className="home-reveal flex flex-col justify-between border-y border-white/10 py-6 md:border md:p-8">
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.26em] text-brand-gray">
              {homeContent.collectionSectionEyebrow}
            </p>
            <h3 className="font-serif text-4xl leading-none md:text-5xl">
              {homeContent.collectionSectionTitle}
            </h3>
            <p className="text-sm leading-6 text-brand-cream/70">
              {homeContent.collectionSectionText}
            </p>
          </div>
          <div className="mt-8 grid gap-3 text-[11px] uppercase tracking-[0.2em] text-brand-gray">
            {chapterNames.map((chapter) => (
              <p key={chapter}>{chapter}</p>
            ))}
          </div>
          <Link
            href={collectionHref}
            className="mt-8 inline-flex w-fit border-b border-white/40 pb-1 text-[11px] uppercase tracking-[0.22em] text-brand-cream/85 transition-colors hover:text-brand-cream"
          >
            {collectionLabel}
          </Link>
        </div>
      </section>

      <CollectionPreview products={products} content={homeContent} />
      <ManifestoPreview content={homeContent} />
    </HomeExperience>
  );
}
