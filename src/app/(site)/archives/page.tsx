import { ArchiveGrid } from "@/components/sections/ArchiveGrid";

export default function ArchivesPage() {
  return (
    <section className="mx-auto w-full max-w-7xl space-y-10 px-6 py-16 md:px-8 md:py-20">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.24em] text-brand-gray">Archives</p>
        <h1 className="font-serif text-5xl md:text-6xl">Archives</h1>
        <p className="max-w-2xl text-brand-cream/80">
          Images, fragments et paysages autour de RIEN DE GRAVE.
        </p>
      </header>
      <ArchiveGrid />
    </section>
  );
}
