interface ArchiveGridProps {
  blocks: string[];
}

export function ArchiveGrid({ blocks }: ArchiveGridProps) {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      {blocks.map((text, index) => (
        <article
          key={`${index}-${text}`}
          className={`min-h-56 border border-white/10 p-8 ${
            index % 2 === 0 ? "bg-brand-brown/20" : "bg-brand-green/20"
          }`}
        >
          <p className="font-serif text-2xl leading-tight md:text-3xl">{text}</p>
        </article>
      ))}
    </section>
  );
}
