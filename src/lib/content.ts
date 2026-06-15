import type { Home, Manifesto, SiteSetting } from "@/payload-types";
import { resolveMedia } from "@/lib/map-product";

export const defaultHomeContent = {
  heroEyebrow: "Quelque part",
  heroTitle: "Couture d'ailleurs.",
  heroSubtitle:
    "Une image au dos. Une phrase qu'on garde. Une piece pensee comme une archive de voyage.",
  heroBackgroundImage: "/images/Dos fichier 2 Plus grand.png",
  heroArtImage: "/images/Dos fichier 2 Plus grand.png",
  heroArtQuote: "Parce qu'on vient tous de quelque part.",
  heroArtLabel: "Dos imprime",
  dropEyebrow: "En vente",
  dropTitle: "Des paysages au dos, pour ceux qui portent encore un lieu en eux.",
  ctaLabel: "Decouvrir la collection",
  ctaHref: "/collection",
  universeBlocks: [
    {
      step: "01",
      title: "Le lieu",
      text: "Un paysage au dos, comme une scene gardee en memoire.",
    },
    {
      step: "02",
      title: "La phrase",
      text: "Une citation courte, intime, presque cachee dans l'image.",
    },
    {
      step: "03",
      title: "La piece",
      text: "Un t-shirt epais, sobre, imprime en France, a porter comme un fragment.",
    },
  ],
  collectionSectionEyebrow: "Paysages interieurs",
  collectionSectionTitle: "Cinq chapitres. Pas une gamme.",
  collectionSectionText:
    "Chaque produit est traite comme un chapitre: un numero, un nom, une couleur, une image au dos et une phrase qui donne le ton.",
  collectionSectionImage: "/images/products/SS23-103T_WHITE_2.webp",
  collectionPreviewEyebrow: "Les pieces",
  collectionPreviewTitle: "Trois chapitres pour entrer dans l'univers.",
  collectionPreviewText:
    "Chaque fiche produit prolonge le recit: visuel, citation, coupe, matiere et details d'atelier.",
  manifestoPreviewEyebrow: "Manifeste",
  manifestoPreviewText:
    "Nous creons des vetements pour ceux qui gardent un lieu, une phrase, une scene, une lumiere.",
};

export type HomeContent = typeof defaultHomeContent;

export function mapHomeContent(home: Home | null): HomeContent {
  if (!home) {
    return defaultHomeContent;
  }

  return {
    heroEyebrow: home.heroEyebrow,
    heroTitle: home.heroTitle,
    heroSubtitle: home.heroSubtitle,
    heroBackgroundImage:
      resolveMedia(home.heroBackgroundImage) || defaultHomeContent.heroBackgroundImage,
    heroArtImage: resolveMedia(home.heroArtImage) || defaultHomeContent.heroArtImage,
    heroArtQuote: home.heroArtQuote,
    heroArtLabel: home.heroArtLabel,
    dropEyebrow: home.dropEyebrow,
    dropTitle: home.dropTitle,
    ctaLabel: home.ctaLabel,
    ctaHref: home.ctaHref,
    universeBlocks:
      home.universeBlocks && home.universeBlocks.length > 0
        ? home.universeBlocks.map((block) => ({
            step: block.step,
            title: block.title,
            text: block.text,
          }))
        : defaultHomeContent.universeBlocks,
    collectionSectionEyebrow: home.collectionSectionEyebrow,
    collectionSectionTitle: home.collectionSectionTitle,
    collectionSectionText:
      home.collectionSectionText || defaultHomeContent.collectionSectionText,
    collectionSectionImage:
      resolveMedia(home.collectionSectionImage) || defaultHomeContent.collectionSectionImage,
    collectionPreviewEyebrow: home.collectionPreviewEyebrow,
    collectionPreviewTitle: home.collectionPreviewTitle,
    collectionPreviewText:
      home.collectionPreviewText || defaultHomeContent.collectionPreviewText,
    manifestoPreviewEyebrow: home.manifestoPreviewEyebrow,
    manifestoPreviewText: home.manifestoPreviewText || defaultHomeContent.manifestoPreviewText,
  };
}

export const defaultManifestoContent = {
  eyebrow: "Manifeste",
  title: "RIEN DE GRAVE",
  paragraphs: [
    "RIEN DE GRAVE est une marque de vetements nee entre l'image, le voyage et le silence.",
    "Chaque piece porte un paysage au dos. Pas comme une carte postale. Plutot comme un souvenir qu'on n'arrive pas a expliquer.",
    "Nous creons des vetements pour ceux qui gardent quelque chose en eux: un lieu, une phrase, une scene, une lumiere.",
  ],
  footer: "Fabrique en France. Pense comme une archive. Porte comme une phrase.",
};

export function mapManifestoContent(manifesto: Manifesto | null) {
  if (!manifesto) {
    return defaultManifestoContent;
  }

  return {
    eyebrow: manifesto.eyebrow,
    title: manifesto.title,
    paragraphs:
      manifesto.paragraphs?.map((paragraph) => paragraph.text).filter(Boolean) ??
      defaultManifestoContent.paragraphs,
    footer: manifesto.footer,
  };
}

export function mapSiteSettings(settings: SiteSetting | null) {
  return {
    collectionTitle: settings?.collectionTitle ?? "Paysages interieurs",
    archivesTitle: settings?.archivesTitle ?? "Archives",
    archivesIntro:
      settings?.archivesIntro ??
      "Images, fragments et paysages autour de RIEN DE GRAVE.",
    siteDescription:
      settings?.siteDescription ?? "Streetwear francais poetique et cinematographique.",
  };
}
