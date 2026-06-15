import type { CollectionConfig } from "payload";

export const Orders: CollectionConfig = {
  slug: "orders",
  admin: {
    useAsTitle: "stripeSessionId",
    defaultColumns: ["stripeSessionId", "customerEmail", "status", "amountTotal", "createdAt"],
  },
  access: {
    create: () => true,
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: "stripeSessionId",
      type: "text",
      required: true,
      unique: true,
      index: true,
    },
    {
      name: "customerEmail",
      type: "email",
    },
    {
      name: "status",
      type: "text",
      required: true,
    },
    {
      name: "amountTotal",
      type: "number",
      required: true,
    },
    {
      name: "lineItems",
      type: "json",
    },
  ],
};
