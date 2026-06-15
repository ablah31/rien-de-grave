# RIEN DE GRAVE

Site e-commerce Next.js pour la marque RIEN DE GRAVE, avec Payload CMS, Stripe et deploiement Vercel.

## Demarrage local

1. Copier `.env.example` vers `.env.local` et renseigner les variables.
2. Connecter une base Postgres (Neon recommande) via `POSTGRES_URL`.
3. Lancer le serveur :

```bash
npm install
npm run dev
```

4. Ouvrir `http://localhost:3000/admin` pour creer le premier utilisateur admin.
5. Peupler le contenu initial :

```bash
npm run seed
```

Sans base configuree, le storefront utilise les donnees de fallback dans `src/lib/products-fallback.ts`.

## Payload CMS

- Admin : `/admin`
- Collections : `products`, `media`, `orders`, `archives`
- Globals : `home`, `manifesto`, `site-settings`

Commandes utiles :

```bash
npm run generate:types
npm run generate:importmap
npm run seed
```

## Deploiement Vercel

1. Deployer le repo sur [Vercel](https://vercel.com).
2. Ajouter les integrations **Neon** et **Vercel Blob** depuis le dashboard Vercel (voir [Payload Website Starter](https://vercel.com/templates/cms/payload-website-starter)).
3. Definir les secrets :

```env
POSTGRES_URL=
BLOB_READ_WRITE_TOKEN=
PAYLOAD_SECRET=
CRON_SECRET=
PREVIEW_SECRET=
NEXT_PUBLIC_SITE_URL=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

4. Le build execute `payload migrate && next build`.
5. Apres le premier deploy : creer l'admin sur `/admin`, puis lancer `npm run seed` en local pointe vers la base prod ou via script.

## Stripe

- Checkout : `POST /api/checkout`
- Webhook : `POST /api/webhooks/stripe` (enregistre les commandes dans Payload)
