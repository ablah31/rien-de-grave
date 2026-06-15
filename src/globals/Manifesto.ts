import type { GlobalConfig } from "payload";
import { revalidateGlobal } from "@/hooks/revalidate";

export const Manifesto: GlobalConfig = {
  slug: "manifesto",
  hooks: {
    afterChange: [revalidateGlobal],
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
      required: true,
      defaultValue: "Manifeste",
    },
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: "RIEN DE GRAVE",
    },
    {
      name: "paragraphs",
      type: "array",
      required: true,
      fields: [
        {
          name: "text",
          type: "textarea",
          required: true,
        },
      ],
    },
    {
      name: "footer",
      type: "text",
      required: true,
      defaultValue: "Fabrique en France. Pense comme une archive. Porte comme une phrase.",
    },
  ],
};
