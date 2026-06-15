import { headers } from "next/headers";
import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getPayloadClient } from "@/lib/payload";
import { getStripeServerClient } from "@/lib/stripe";

export async function POST(request: Request) {
  const stripe = getStripeServerClient();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripe || !webhookSecret) {
    return NextResponse.json({ error: "Webhook indisponible." }, { status: 500 });
  }

  const signature = (await headers()).get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Signature manquante." }, { status: 400 });
  }

  const payloadBody = await request.text();

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(payloadBody, signature, webhookSecret);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Signature invalide." }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    try {
      const payload = await getPayloadClient();
      await payload.create({
        collection: "orders",
        data: {
          stripeSessionId: session.id,
          customerEmail: session.customer_details?.email ?? undefined,
          status: session.payment_status,
          amountTotal: session.amount_total ?? 0,
          lineItems: session.line_items?.data ?? [],
        },
      });
    } catch (error) {
      console.error("Erreur enregistrement commande Payload:", error);
    }
  }

  return NextResponse.json({ received: true });
}
