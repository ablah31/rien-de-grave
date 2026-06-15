import path from "path";
import { fileURLToPath } from "url";
import type { Payload } from "payload";
import { ACTIVE_PRODUCT_SLUG } from "@/lib/catalog";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const projectRoot = path.resolve(dirname, "../..");
const publicDir = path.join(projectRoot, "public");

const productSeedData = [
  {
    chapterNumber: "01",
    name: "Le Depart",
    slug: "le-depart",
    subtitle: "T-shirt ecru - paysage desertique",
    description: "T-shirt epais a coupe legerement oversize, pense comme une ouverture de film.",
    quote: "Parce qu'on vient tous de quelque part.",
    price: 65,
    color: "Ecru",
    material: "100% coton",
    weight: "240g",
    fit: "Oversize",
    madeIn: "Imprime en France",
    images: {
      front: "images/products/SS23-103T_WHITE_2.webp",
      back: "images/products/fm-arte-antwerp-back-graphic-t-shirt-black-ss26-143t-black-black-1.webp",
      detail: "images/products/t_shirt_arte_antwerp_men_arte_together_white.webp",
      worn: "images/products/NEW-BRANDO-WHITE.webp",
    },
  },
  {
    chapterNumber: "02",
    name: "La Route",
    slug: "la-route",
    subtitle: "T-shirt noir - route de montagne",
    description: "Coupe droite structuree, esprit route nocturne et lumiere de Taxi Driver.",
    quote: "Un lieu continue de marcher en nous.",
    price: 65,
    color: "Noir",
    material: "100% coton",
    weight: "240g",
    fit: "Regular",
    madeIn: "Imprime en France",
    images: {
      front: "images/products/NEW-BRANDO-WHITE.webp",
      back: "images/products/t_shirt_arte_antwerp_men_arte_together_white.webp",
      detail: "images/products/SS23-103T_WHITE_2.webp",
      worn: "images/products/fm-arte-antwerp-back-graphic-t-shirt-black-ss26-143t-black-black-1.webp",
    },
  },
  {
    chapterNumber: "03",
    name: "Le Silence",
    slug: "le-silence",
    subtitle: "T-shirt sable - horizon brumeux",
    description: "Piece lourde et sobre, grain brut dans l'esprit de Raging Bull.",
    quote: "Le silence aussi laisse des traces.",
    price: 65,
    color: "Sable",
    material: "100% coton",
    weight: "240g",
    fit: "Oversize",
    madeIn: "Imprime en France",
    images: {
      front: "images/products/t_shirt_arte_antwerp_men_arte_together_white.webp",
      back: "images/products/fm-arte-antwerp-back-graphic-t-shirt-black-ss26-143t-black-black-1.webp",
      detail: "images/products/SS23-103T_WHITE_2.webp",
      worn: "images/products/NEW-BRANDO-WHITE.webp",
    },
  },
  {
    chapterNumber: "04",
    name: "Quelque Part",
    slug: "quelque-part",
    subtitle: "T-shirt brun - vallee minerale",
    description: "Volume controle, detail precis, tension elegante facon Casino.",
    quote: "Quelque part, ce n'est jamais loin.",
    price: 65,
    color: "Brun",
    material: "100% coton",
    weight: "240g",
    fit: "Regular",
    madeIn: "Imprime en France",
    images: {
      front: "images/products/SS23-103T_WHITE_2.webp",
      back: "images/products/fm-arte-antwerp-back-graphic-t-shirt-black-ss26-143t-black-black-1.webp",
      detail: "images/products/t_shirt_arte_antwerp_men_arte_together_white.webp",
      worn: "images/products/NEW-BRANDO-WHITE.webp",
    },
  },
  {
    chapterNumber: "05",
    name: "La Nuit Claire",
    slug: "la-nuit-claire",
    subtitle: "T-shirt blanc casse - paysage nocturne",
    description: "Maille dense, coupe ample, errance tardive inspiree par After Hours.",
    quote: "Rien de grave. Juste un souvenir qui reste.",
    price: 65,
    color: "Blanc casse",
    material: "100% coton",
    weight: "240g",
    fit: "Oversize",
    madeIn: "Imprime en France",
    images: {
      front: "images/products/NEW-BRANDO-WHITE.webp",
      back: "images/products/t_shirt_arte_antwerp_men_arte_together_white.webp",
      detail: "images/products/SS23-103T_WHITE_2.webp",
      worn: "images/products/fm-arte-antwerp-back-graphic-t-shirt-black-ss26-143t-black-black-1.webp",
    },
  },
] as const;

async function uploadMedia(payload: Payload, filePath: string, alt: string) {
  const absolutePath = path.join(publicDir, filePath);
  const existing = await payload.find({
    collection: "media",
    where: {
      alt: {
        equals: alt,
      },
    },
    limit: 1,
  });

  if (existing.docs[0]) {
    return existing.docs[0].id;
  }

  const media = await payload.create({
    collection: "media",
    data: {
      alt,
    },
    filePath: absolutePath,
  });

  return media.id;
}

export async function seedDatabase(payload: Payload) {
  const heroImageId = await uploadMedia(
    payload,
    "images/Dos fichier 2 Plus grand.png",
    "Hero RIEN DE GRAVE",
  );

  const collectionImageId = await uploadMedia(
    payload,
    "images/products/SS23-103T_WHITE_2.webp",
    "Collection preview",
  );

  for (const product of productSeedData) {
    const isActive = product.slug === ACTIVE_PRODUCT_SLUG;
    const existing = await payload.find({
      collection: "products",
      where: {
        slug: {
          equals: product.slug,
        },
      },
      limit: 1,
    });

    if (existing.docs[0]) {
      await payload.update({
        collection: "products",
        id: existing.docs[0].id,
        data: { isActive },
      });
      continue;
    }

    const [front, back, detail, worn] = await Promise.all([
      uploadMedia(payload, product.images.front, `${product.slug}-front`),
      uploadMedia(payload, product.images.back, `${product.slug}-back`),
      uploadMedia(payload, product.images.detail, `${product.slug}-detail`),
      uploadMedia(payload, product.images.worn, `${product.slug}-worn`),
    ]);

    await payload.create({
      collection: "products",
      data: {
        ...product,
        isActive,
        sizes: ["S", "M", "L", "XL"],
        images: {
          front,
          back,
          detail,
          worn,
        },
      },
    });
  }

  const archiveTexts = [
    "Images, fragments et paysages autour de RIEN DE GRAVE.",
    "Des vetements comme des souvenirs.",
    "Une piece. Un paysage. Une phrase au dos.",
    "Coulisses, campagnes, notes de voyage.",
  ];

  for (const [index, text] of archiveTexts.entries()) {
    const existing = await payload.find({
      collection: "archives",
      where: {
        order: {
          equals: index,
        },
      },
      limit: 1,
    });

    if (existing.docs[0]) {
      await payload.update({
        collection: "archives",
        id: existing.docs[0].id,
        data: { text, order: index },
      });
    } else {
      await payload.create({
        collection: "archives",
        data: {
          text,
          order: index,
        },
      });
    }
  }

  await payload.updateGlobal({
    slug: "home",
    data: {
      heroEyebrow: "Quelque part",
      heroTitle: "Couture d'ailleurs.",
      heroSubtitle:
        "Une image au dos. Une phrase qu'on garde. Une piece pensee comme une archive de voyage.",
      heroBackgroundImage: heroImageId,
      heroArtImage: heroImageId,
      heroArtQuote: "Parce qu'on vient tous de quelque part.",
      heroArtLabel: "Dos imprime",
      dropEyebrow: "En vente",
      dropTitle: "Des paysages au dos, pour ceux qui portent encore un lieu en eux.",
      ctaLabel: "Decouvrir la piece",
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
      collectionSectionTitle: "Une piece. Pas une gamme.",
      collectionSectionText:
        "Un numero, un nom, une couleur, une image au dos et une phrase qui donne le ton.",
      collectionSectionImage: collectionImageId,
      collectionPreviewEyebrow: "La piece",
      collectionPreviewTitle: "Le chapitre en vente.",
      collectionPreviewText:
        "Chaque fiche produit prolonge le recit: visuel, citation, coupe, matiere et details d'atelier.",
      manifestoPreviewEyebrow: "Manifeste",
      manifestoPreviewText:
        "Nous creons des vetements pour ceux qui gardent un lieu, une phrase, une scene, une lumiere.",
    },
  });

  await payload.updateGlobal({
    slug: "manifesto",
    data: {
      eyebrow: "Manifeste",
      title: "RIEN DE GRAVE",
      paragraphs: [
        {
          text: "RIEN DE GRAVE est une marque de vetements nee entre l'image, le voyage et le silence.",
        },
        {
          text: "Chaque piece porte un paysage au dos. Pas comme une carte postale. Plutot comme un souvenir qu'on n'arrive pas a expliquer.",
        },
        {
          text: "Nous creons des vetements pour ceux qui gardent quelque chose en eux: un lieu, une phrase, une scene, une lumiere.",
        },
      ],
      footer: "Fabrique en France. Pense comme une archive. Porte comme une phrase.",
    },
  });

  await payload.updateGlobal({
    slug: "site-settings",
    data: {
      collectionTitle: "Paysages interieurs",
      archivesTitle: "Archives",
      archivesIntro: "Images, fragments et paysages autour de RIEN DE GRAVE.",
      siteDescription: "Streetwear francais poetique et cinematographique.",
    },
  });
}
