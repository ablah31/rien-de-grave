import { ArchiveGrid } from "@/components/sections/ArchiveGrid";
import { mapSiteSettings } from "@/lib/content";
import { getArchives, getSiteSettings } from "@/lib/products";

const fallbackArchiveBlocks = [
  "Images, fragments et paysages autour de RIEN DE GRAVE.",
  "Des vetements comme des souvenirs.",
  "Une piece. Un paysage. Une phrase au dos.",
  "Futures collections, campagnes, notes de voyage.",
];

export default async function ArchivesPage() {
  const [archives, settings] = await Promise.all([getArchives(), getSiteSettings()]);
  const siteSettings = mapSiteSettings(settings);
  const blocks =
    archives.length > 0 ? archives.map((archive) => archive.text) : fallbackArchiveBlocks;

  return (
    <section className="mx-auto w-full max-w-7xl space-y-10 px-6 py-16 md:px-8 md:py-20">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.24em] text-brand-gray">Archives</p>
        <h1 className="font-serif text-5xl md:text-6xl">{siteSettings.archivesTitle}</h1>
        <p className="max-w-2xl text-brand-cream/80">{siteSettings.archivesIntro}</p>
      </header>
      <ArchiveGrid blocks={blocks} />
    </section>
  );
}
