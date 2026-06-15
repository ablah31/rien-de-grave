import type { CollectionConfig } from "payload";
import { revalidateCollection } from "@/hooks/revalidate";

export const Archives: CollectionConfig = {
  slug: "archives",
  admin: {
    useAsTitle: "text",
    defaultColumns: ["text", "order"],
  },
  hooks: {
    afterChange: [revalidateCollection],
  },
  fields: [
    {
      name: "text",
      type: "textarea",
      required: true,
    },
    {
      name: "order",
      type: "number",
      required: true,
      defaultValue: 0,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
  ],
};
