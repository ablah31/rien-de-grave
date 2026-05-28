import { NextResponse } from "next/server";
import { getProductBySlug } from "@/lib/products";
import { getStripeServerClient } from "@/lib/stripe";
import type { CartItem } from "@/types/cart";
import type { ProductSize } from "@/types/product";

interface CheckoutPayload {
  items: CartItem[];
}

function validateSize(size: string): size is ProductSize {
  return ["S", "M", "L", "XL"].includes(size);
}

export async function POST(request: Request) {
  try {
    const stripe = getStripeServerClient();
    if (!stripe) {
      return NextResponse.json(
        { error: "Stripe n'est pas configure." },
        { status: 500 },
      );
    }

    const body = (await request.json()) as CheckoutPayload;
    if (!body.items || body.items.length === 0) {
      return NextResponse.json({ error: "Panier vide." }, { status: 400 });
    }

    const lineItems = body.items
      .map((item) => {
        if (!validateSize(item.size)) {
          return null;
        }

        const product = getProductBySlug(item.slug);
        if (!product) {
          return null;
        }

        return {
          quantity: item.quantity,
          price_data: {
            currency: "eur",
            product_data: {
              name: `${product.chapterNumber} - ${product.name}`,
              description: `${product.subtitle} - Taille ${item.size}`,
            },
            unit_amount: Math.round(product.price * 100),
          },
        };
      })
      .filter((item) => item !== null);

    if (lineItems.length === 0) {
      return NextResponse.json({ error: "Aucun article valide." }, { status: 400 });
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${siteUrl}/success`,
      cancel_url: `${siteUrl}/cancel`,
      billing_address_collection: "auto",
      metadata: {
        source: "rien-de-grave-v1",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Quelque chose s'est perdu en route." },
      { status: 500 },
    );
  }
}
