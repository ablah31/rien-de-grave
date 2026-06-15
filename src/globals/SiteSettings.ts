import type { GlobalConfig } from "payload";
import { revalidateGlobal } from "@/hooks/revalidate";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  hooks: {
    afterChange: [revalidateGlobal],
  },
  fields: [
    {
      name: "collectionTitle",
      type: "text",
      required: true,
      defaultValue: "Collection I - Paysages interieurs",
    },
    {
      name: "archivesTitle",
      type: "text",
      required: true,
      defaultValue: "Archives",
    },
    {
      name: "archivesIntro",
      type: "textarea",
      required: true,
      defaultValue: "Images, fragments et paysages autour de RIEN DE GRAVE.",
    },
    {
      name: "siteDescription",
      type: "textarea",
      required: true,
      defaultValue: "Streetwear francais poetique et cinematographique.",
    },
  ],
};
