import type { GlobalConfig } from "payload";
import { revalidateGlobal } from "@/hooks/revalidate";

export const Home: GlobalConfig = {
  slug: "home",
  hooks: {
    afterChange: [revalidateGlobal],
  },
  fields: [
    {
      name: "heroEyebrow",
      type: "text",
      required: true,
      defaultValue: "Quelque part",
    },
    {
      name: "heroTitle",
      type: "text",
      required: true,
      defaultValue: "Couture d'ailleurs.",
    },
    {
      name: "heroSubtitle",
      type: "textarea",
      required: true,
      defaultValue:
        "Une image au dos. Une phrase qu'on garde. Une piece pensee comme une archive de voyage.",
    },
    {
      name: "heroBackgroundImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "heroArtImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "heroArtQuote",
      type: "text",
      required: true,
      defaultValue: "Parce qu'on vient tous de quelque part.",
    },
    {
      name: "heroArtLabel",
      type: "text",
      required: true,
      defaultValue: "Dos imprime",
    },
    {
      name: "dropEyebrow",
      type: "text",
      required: true,
      defaultValue: "En vente",
    },
    {
      name: "dropTitle",
      type: "textarea",
      required: true,
      defaultValue: "Des paysages au dos, pour ceux qui portent encore un lieu en eux.",
    },
    {
      name: "ctaLabel",
      type: "text",
      required: true,
      defaultValue: "Decouvrir la piece",
    },
    {
      name: "ctaHref",
      type: "text",
      required: true,
      defaultValue: "/collection",
    },
    {
      name: "universeBlocks",
      type: "array",
      minRows: 3,
      maxRows: 3,
      fields: [
        { name: "step", type: "text", required: true },
        { name: "title", type: "text", required: true },
        { name: "text", type: "textarea", required: true },
      ],
    },
    {
      name: "collectionSectionEyebrow",
      type: "text",
      required: true,
      defaultValue: "Paysages interieurs",
    },
    {
      name: "collectionSectionTitle",
      type: "text",
      required: true,
      defaultValue: "Une piece. Pas une gamme.",
    },
    {
      name: "collectionSectionText",
      type: "textarea",
      required: true,
    },
    {
      name: "collectionSectionImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "collectionPreviewEyebrow",
      type: "text",
      required: true,
      defaultValue: "La piece",
    },
    {
      name: "collectionPreviewTitle",
      type: "text",
      required: true,
      defaultValue: "Le chapitre en vente.",
    },
    {
      name: "collectionPreviewText",
      type: "textarea",
      required: true,
    },
    {
      name: "manifestoPreviewEyebrow",
      type: "text",
      required: true,
      defaultValue: "Manifeste",
    },
    {
      name: "manifestoPreviewText",
      type: "textarea",
      required: true,
    },
  ],
};
