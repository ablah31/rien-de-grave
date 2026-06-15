import { mapManifestoContent } from "@/lib/content";
import { getManifestoContent } from "@/lib/products";

export default async function ManifestePage() {
  const manifesto = await getManifestoContent();
  const content = mapManifestoContent(manifesto);

  return (
    <section className="mx-auto w-full max-w-5xl space-y-8 px-6 py-16 md:px-8 md:py-24">
      <p className="text-xs uppercase tracking-[0.22em] text-brand-gray">{content.eyebrow}</p>
      <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">{content.title}</h1>
      <div className="space-y-8 font-serif text-2xl leading-tight text-brand-cream/90 md:text-4xl">
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <p className="text-sm uppercase tracking-[0.2em] text-brand-gray">{content.footer}</p>
    </section>
  );
}
