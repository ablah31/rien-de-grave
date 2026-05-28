import Link from "next/link";

export default function SuccessPage() {
  return (
    <section className="mx-auto flex min-h-[65vh] w-full max-w-4xl flex-col items-start justify-center gap-6 px-6 py-16 md:px-8">
      <p className="text-xs uppercase tracking-[0.24em] text-brand-gray">Paiement</p>
      <h1 className="font-serif text-5xl md:text-6xl">Commande confirmee.</h1>
      <p className="text-brand-cream/85">Merci d&apos;avoir rejoint quelque part.</p>
      <Link href="/collection" className="text-sm uppercase tracking-[0.2em] underline">
        Retour a la collection
      </Link>
    </section>
  );
}
