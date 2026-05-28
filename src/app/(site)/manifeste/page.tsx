export default function ManifestePage() {
  return (
    <section className="mx-auto w-full max-w-5xl space-y-8 px-6 py-16 md:px-8 md:py-24">
      <p className="text-xs uppercase tracking-[0.22em] text-brand-gray">Manifeste</p>
      <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">RIEN DE GRAVE</h1>
      <div className="space-y-8 font-serif text-2xl leading-tight text-brand-cream/90 md:text-4xl">
        <p>
          RIEN DE GRAVE est une marque de vetements nee entre l&apos;image, le voyage et le
          silence.
        </p>
        <p>
          Chaque piece porte un paysage au dos. Pas comme une carte postale. Plutot comme
          un souvenir qu&apos;on n&apos;arrive pas a expliquer.
        </p>
        <p>
          Nous creons des vetements pour ceux qui gardent quelque chose en eux: un lieu,
          une phrase, une scene, une lumiere.
        </p>
      </div>
      <p className="text-sm uppercase tracking-[0.2em] text-brand-gray">
        Fabrique en France. Pense comme une archive. Porte comme une phrase.
      </p>
    </section>
  );
}
