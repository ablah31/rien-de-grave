import type { CollectionConfig } from "payload";
import { revalidateCollection } from "@/hooks/revalidate";

const sizeOptions = [
  { label: "S", value: "S" },
  { label: "M", value: "M" },
  { label: "L", value: "L" },
  { label: "XL", value: "XL" },
];

export const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["chapterNumber", "name", "slug", "price", "isActive"],
  },
  hooks: {
    afterChange: [revalidateCollection],
  },
  fields: [
    {
      name: "chapterNumber",
      type: "text",
      required: true,
    },
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
    },
    {
      name: "subtitle",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "quote",
      type: "text",
      required: true,
    },
    {
      name: "price",
      type: "number",
      required: true,
      min: 0,
    },
    {
      name: "color",
      type: "text",
      required: true,
    },
    {
      name: "material",
      type: "text",
      required: true,
    },
    {
      name: "weight",
      type: "text",
      required: true,
    },
    {
      name: "fit",
      type: "text",
      required: true,
    },
    {
      name: "madeIn",
      type: "text",
      required: true,
    },
    {
      name: "isActive",
      type: "checkbox",
      defaultValue: true,
    },
    {
      name: "sizes",
      type: "select",
      hasMany: true,
      required: true,
      options: sizeOptions,
    },
    {
      name: "images",
      type: "group",
      fields: [
        {
          name: "front",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "back",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "detail",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "worn",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};
