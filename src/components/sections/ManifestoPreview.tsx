import Link from "next/link";

export function ManifestoPreview() {
  return (
    <section className="mx-auto w-full max-w-7xl border-y border-white/10 px-4 py-16 md:px-8 md:py-24">
      <div className="home-reveal max-w-4xl space-y-7">
        <p className="text-[10px] uppercase tracking-[0.22em] text-brand-gray md:text-xs">
          Manifeste
        </p>
        <p className="font-serif text-3xl leading-tight md:text-5xl">
          Nous creons des vetements pour ceux qui gardent un lieu, une phrase, une
          scene, une lumiere.
        </p>
        <Link
          href="/manifeste"
          className="inline-block border-b border-white/40 pb-1 text-sm uppercase tracking-[0.18em] text-brand-cream/90 hover:text-brand-cream"
        >
          Lire le manifeste
        </Link>
      </div>
    </section>
  );
}
