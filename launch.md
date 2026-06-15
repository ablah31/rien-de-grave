# BRIEF DE LANCEMENT — SITE E-COMMERCE “RIEN DE GRAVE”

## 1. Contexte du projet

Je souhaite créer le site web de la marque de vêtements **RIEN DE GRAVE**.

RIEN DE GRAVE est une marque de t-shirts streetwear, mystérieuse, cinématographique et poétique.
La marque est inspirée par :

* le cinéma d’auteur ;
* les paysages naturels ;
* les archives visuelles ;
* les voyages ;
* les souvenirs ;
* les citations fortes ;
* l’idée qu’on vient tous de quelque part.

La marque vendra peu de produits au lancement : une première collection de **4 à 5 t-shirts maximum**.
Chaque t-shirt aura une particularité forte : **un paysage imprimé dans le dos accompagné d’une citation**.

Le site ne doit pas ressembler à une boutique Shopify générique.
Il doit ressembler à un **lookbook cinématographique qui vend une collection rare**.

Référence d’inspiration e-commerce :
https://fr.arte-antwerp.com/

Le site doit être développé avec :

* Next.js
* TypeScript
* Tailwind CSS
* Payload CMS
* Stripe
* Framer Motion

Objectif : créer une base de site premium, propre, responsive, élégante, avec une vraie direction artistique.

---

## 2. Identité de marque

Nom de la marque : **RIEN DE GRAVE**

Positionnement :
Streetwear français, poétique, cinématographique, mystérieux, rare.

Phrase de marque possible :

> Couture d’ailleurs.
> Parce qu’on vient tous de quelque part.

Autres phrases possibles :

> Des vêtements comme des souvenirs.
> Des paysages au dos.
> Des phrases qu’on garde.

> Quelque part, ce n’est jamais loin.

> Rien de grave. Juste un souvenir qui reste.

La marque doit donner une impression de rareté, de silence, de profondeur et de voyage intérieur.

---

## 3. Direction artistique

Le site doit avoir une esthétique forte.

### Ambiance générale

* mystérieuse ;
* cinématographique ;
* éditoriale ;
* sombre ;
* premium ;
* naturelle ;
* un peu archive / film / affiche ancienne ;
* streetwear mais pas agressif.

### Couleurs

Utiliser une palette sobre :

* noir profond : `#0D0D0D`
* blanc cassé : `#F2EFE7`
* gris chaud : `#8C8780`
* sable : `#C2A878`
* brun foncé : `#3A2E28`
* vert fané : `#5F6F5B`

Le site doit principalement utiliser un fond noir ou très sombre, avec du texte blanc cassé.

### Typographies

Utiliser deux familles de typographies :

1. Une typographie serif élégante pour les citations, les titres poétiques et le manifeste.
   Suggestions :

   * Cormorant Garamond
   * Playfair Display
   * Libre Baskerville

2. Une typographie sans-serif ou mono pour l’interface, les boutons, les prix, les tailles.
   Suggestions :

   * Geist
   * Space Grotesk
   * IBM Plex Mono
   * Inter

Style typographique souhaité :

* titres en capitales espacées ;
* textes courts ;
* beaucoup d’espace ;
* citations élégantes ;
* menus très minimalistes ;
* boutons sobres.

---

## 4. Objectif UX

Le site doit être simple mais marquant.

Il ne doit pas y avoir trop de pages, trop de menus ou trop de fonctionnalités inutiles.

Navigation principale :

* Collection
* Archives
* Manifeste
* Panier

Le site doit créer une sensation d’immersion.

Effets souhaités :

* apparition lente du logo au chargement ;
* transition douce entre les pages ;
* léger grain animé sur l’ensemble du site ;
* images très grandes ;
* scroll cinématographique ;
* apparition progressive des textes ;
* hover subtil sur les produits ;
* menu mobile plein écran ;
* panier latéral ou page panier minimaliste.

Ne pas faire :

* un design générique Shopify ;
* des cartes produits classiques sans âme ;
* trop de couleurs ;
* trop d’animations ;
* un site trop chargé ;
* des effets flashy.

---

## 5. Pages à créer

### 5.1 Home page

La home doit être immersive.

Structure souhaitée :

1. Hero section plein écran ou quasi plein écran.
2. Logo RIEN DE GRAVE au centre ou légèrement bas.
3. Grande image éditoriale / paysage / archive.
4. Phrase de marque.
5. Bouton discret vers la collection.
6. Section courte présentant la marque.
7. Section aperçu de la collection.
8. Section manifeste court.
9. Footer minimaliste.

Texte possible pour la home :

```txt
RIEN DE GRAVE

Couture d’ailleurs.
Parce qu’on vient tous de quelque part.

Collection I — Paysages intérieurs
T-shirts imprimés en France.
```

CTA principal :

```txt
Découvrir la collection
```

---

### 5.2 Page Collection

La page collection doit présenter les 4 à 5 t-shirts comme des pièces rares.

Titre :

```txt
Collection I — Quelque part
```

ou

```txt
Collection I — Paysages intérieurs
```

Texte d’introduction :

```txt
Cinq pièces.
Cinq paysages.
Cinq phrases.
Une première collection pensée comme une archive.
```

Chaque produit doit être présenté comme un chapitre :

```txt
01 — Le Départ
T-shirt écru
Dos imprimé — paysage désertique
65 €
```

Affichage desktop :

* grille éditoriale ;
* grandes images ;
* hover avec citation ;
* prix discret ;
* lien vers la page produit.

Affichage mobile :

* scroll vertical ;
* images larges ;
* texte court ;
* bouton visible.

---

### 5.3 Page Produit

Chaque page produit doit être premium, claire et rassurante.

Structure :

1. Galerie produit :

   * photo face avant ;
   * photo dos ;
   * détail impression ;
   * photo portée.
2. Informations produit :

   * nom ;
   * numéro de pièce ;
   * prix ;
   * description courte ;
   * citation au dos ;
   * tailles ;
   * quantité ;
   * bouton ajouter au panier.
3. Détails :

   * composition ;
   * grammage ;
   * coupe ;
   * fabrication ;
   * entretien ;
   * livraison ;
   * retours.
4. Produits liés ou retour collection.

Exemple :

```txt
01 — Le Départ

T-shirt épais 240g.
Coupe légèrement oversize.
Imprimé en France.

Citation au dos :
“Parce qu’on vient tous de quelque part.”

65 €
```

Boutons :

```txt
Ajouter au panier
Guide des tailles
```

---

### 5.4 Page Manifeste

La page manifeste doit expliquer l’univers de marque.

Texte de base :

```txt
RIEN DE GRAVE est une marque de vêtements née entre l’image, le voyage et le silence.

Chaque pièce porte un paysage au dos.
Pas comme une carte postale.
Plutôt comme un souvenir qu’on n’arrive pas à expliquer.

Nous créons des vêtements pour ceux qui gardent quelque chose en eux :
un lieu, une phrase, une scène, une lumière.

Fabriqué en France.
Pensé comme une archive.
Porté comme une phrase.
```

La page doit être très éditoriale, avec peu d’éléments, de grands textes et quelques images.

---

### 5.5 Page Archives

La page Archives doit donner une impression de profondeur à la marque.

Elle peut contenir :

* des images de shooting ;
* des paysages ;
* des citations ;
* des inspirations visuelles ;
* des fragments de textes ;
* des campagnes ;
* des futures collections.

Pour la V1, créer une page statique avec une grille éditoriale.

Titre :

```txt
Archives
```

Texte :

```txt
Images, fragments et paysages autour de RIEN DE GRAVE.
```

---

### 5.6 Panier

Créer une expérience panier simple.

Options possibles :

* panier latéral ;
* ou page panier `/cart`.

Le panier doit afficher :

* image produit ;
* nom ;
* taille ;
* quantité ;
* prix ;
* total ;
* bouton paiement.

CTA :

```txt
Passer au paiement
```

Le paiement se fera via Stripe Checkout.

---

### 5.7 Pages paiement

Créer :

* `/success`
* `/cancel`

Page success :

```txt
Commande confirmée.
Merci d’avoir rejoint quelque part.
```

Page cancel :

```txt
Paiement annulé.
Rien de grave.
```

---

## 6. Stack technique

Utiliser :

* Next.js App Router
* TypeScript
* Tailwind CSS
* Framer Motion
* Payload CMS
* Stripe Checkout
* Zustand ou React Context pour le panier
* Vercel pour le déploiement

Architecture recommandée :

```txt
/src
  /app
    /(site)
      page.tsx
      collection/page.tsx
      collection/[slug]/page.tsx
      manifeste/page.tsx
      archives/page.tsx
      cart/page.tsx
      success/page.tsx
      cancel/page.tsx
    /api
      /checkout/route.ts
      /webhooks/stripe/route.ts

  /components
    /layout
      Header.tsx
      Footer.tsx
      MobileMenu.tsx
    /brand
      Logo.tsx
      GrainOverlay.tsx
      PageTransition.tsx
    /product
      ProductCard.tsx
      ProductGallery.tsx
      ProductInfo.tsx
      SizeSelector.tsx
    /cart
      CartDrawer.tsx
      CartItem.tsx
      CartSummary.tsx
    /sections
      HeroSection.tsx
      ManifestoPreview.tsx
      CollectionPreview.tsx
      ArchiveGrid.tsx

  /lib
    payload.ts
    stripe.ts
    products.ts
    utils.ts

  /store
    cart-store.ts

  /types
    product.ts
    cart.ts
```

---

## 7. Payload CMS

Payload CMS (heberge sur Vercel + Neon Postgres + Vercel Blob) sert a gerer :

* les produits ;
* les images ;
* le contenu editorial (home, manifeste, archives) ;
* les commandes ;
* le back-office admin sur `/admin`.

Collections Payload : products, media, orders, archives.
Globals Payload : home, manifesto, site-settings.

Commandes utiles : `npm run dev`, `npm run seed`, `npm run generate:types`.

---

## 8. Stripe

Stripe doit gérer le paiement.

Fonctionnement attendu :

1. L’utilisateur ajoute un ou plusieurs produits au panier.
2. Il clique sur “Passer au paiement”.
3. Une route API Next.js crée une session Stripe Checkout.
4. L’utilisateur est redirigé vers Stripe Checkout.
5. Après paiement, Stripe redirige vers `/success`.
6. Un webhook Stripe confirme le paiement et enregistre la commande dans Payload.

Routes à créer :

```txt
POST /api/checkout
POST /api/webhooks/stripe
```

Variables d’environnement :

```txt
POSTGRES_URL=
BLOB_READ_WRITE_TOKEN=
PAYLOAD_SECRET=

NEXT_PUBLIC_SITE_URL=

STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

Important :

* ne jamais exposer `STRIPE_SECRET_KEY` côté client ;
* ne jamais exposer `PAYLOAD_SECRET` côté client ;
* le panier côté client ne doit pas décider du prix final ;
* les prix doivent venir de Stripe ou de la base.

---

## 9. Produits mockés pour la V1

Créer 5 produits temporaires.

Exemple :

```ts
export const products = [
  {
    id: "1",
    chapterNumber: "01",
    name: "Le Départ",
    slug: "le-depart",
    subtitle: "T-shirt écru — paysage désertique",
    description: "T-shirt épais à coupe légèrement oversize, imprimé au dos.",
    quote: "Parce qu’on vient tous de quelque part.",
    price: 65,
    color: "Écru",
    material: "100% coton",
    weight: "240g",
    fit: "Oversize",
    madeIn: "Imprimé en France",
    images: {
      front: "/images/products/le-depart-front.jpg",
      back: "/images/products/le-depart-back.jpg",
      detail: "/images/products/le-depart-detail.jpg",
      worn: "/images/products/le-depart-worn.jpg"
    },
    sizes: ["S", "M", "L", "XL"]
  }
]
```

Créer aussi les produits suivants :

```txt
02 — La Route
03 — Le Silence
04 — Quelque Part
05 — La Nuit Claire
```

---

## 10. Composants design importants

### Logo

Créer un composant `Logo.tsx`.

Style :

* texte en capitales ;
* tracking très large ;
* blanc cassé ;
* sobre ;
* utilisable dans le header et le hero.

Texte :

```txt
RIEN DE GRAVE
```

### GrainOverlay

Créer un composant de grain subtil sur tout le site.

Il doit :

* être fixe ;
* couvrir l’écran ;
* avoir une opacité faible ;
* ne pas bloquer les clics ;
* donner une texture cinéma / archive.

### Header

Header minimal :

Desktop :

```txt
RIEN DE GRAVE      Collection   Archives   Manifeste   Panier
```

Mobile :

```txt
RIEN DE GRAVE      Menu
```

Le header peut être transparent au début, puis devenir légèrement sombre au scroll.

### ProductCard

La carte produit ne doit pas être trop classique.

Elle doit ressembler à une affiche / archive :

* grande image ;
* numéro de chapitre ;
* nom ;
* prix ;
* citation visible au hover ;
* effet zoom très léger.

### PageTransition

Créer une transition simple entre les pages :

* fade noir ;
* apparition douce ;
* pas d’effet trop flashy.

---

## 11. Animations Framer Motion

Utiliser Framer Motion pour :

* apparition du hero ;
* apparition des textes ;
* hover produit ;
* menu mobile ;
* panier ;
* transitions de pages.

Animations souhaitées :

* lentes ;
* sobres ;
* fluides ;
* premium.

Éviter les animations rebondissantes ou trop “startup SaaS”.

---

## 12. Responsive

Le site doit être impeccable sur mobile.

Priorité mobile :

* images grandes ;
* textes lisibles ;
* boutons accessibles ;
* menu plein écran ;
* panier simple ;
* page produit facile à utiliser.

Breakpoints Tailwind :

* mobile par défaut ;
* `md`
* `lg`
* `xl`

---

## 13. Ton éditorial du site

Le ton doit être :

* court ;
* poétique ;
* mystérieux ;
* français ;
* jamais trop commercial.

Éviter :

```txt
Découvrez nos incroyables t-shirts de qualité exceptionnelle.
```

Préférer :

```txt
Une pièce.
Un paysage.
Une phrase au dos.
```

Exemples de micro-copy :

```txt
Ajouter au panier
Passer au paiement
Retour à la collection
Guide des tailles
Fabriqué en France
Imprimé en France
Pièce limitée
```

Messages panier :

```txt
Votre panier est encore vide.
Rien de grave.
```

Message succès :

```txt
Commande confirmée.
Merci d’avoir rejoint quelque part.
```

Message erreur :

```txt
Quelque chose s’est perdu en route.
Réessayez dans un instant.
```

---

## 14. Ce que je veux obtenir dans une première version

Créer une première version fonctionnelle avec :

* une home page premium ;
* une page collection ;
* une page détail produit dynamique ;
* une page manifeste ;
* une page archives ;
* un panier ;
* une intégration Stripe Checkout préparée ;
* une structure Payload CMS prete ;
* un design responsive ;
* des animations sobres ;
* une architecture propre.

La priorité est :

1. Design fort.
2. Expérience premium.
3. Code propre.
4. Paiement fonctionnel.
5. Évolutivité.

---

## 15. Critères d’acceptation

La V1 est réussie si :

* le site ne ressemble pas à un thème e-commerce générique ;
* l’identité RIEN DE GRAVE est visible dès la home ;
* les produits sont présentés comme une collection rare ;
* la navigation est simple ;
* le site est responsive ;
* le panier fonctionne ;
* Stripe Checkout peut être déclenché ;
* le code est propre et bien structuré ;
* les composants sont réutilisables ;
* le design est sombre, cinématographique et éditorial.

---

## 16. Instruction finale pour Cursor

Crée maintenant la base complète du projet Next.js.

Commence par :

1. initialiser l’architecture ;
2. configurer Tailwind ;
3. créer les layouts ;
4. créer les pages principales ;
5. créer les composants design ;
6. ajouter les produits mockés ;
7. créer le panier ;
8. préparer Stripe Checkout ;
9. preparer Payload CMS ;
10. soigner fortement le design.

Le résultat doit être une base utilisable immédiatement, avec une vraie direction artistique, pas un simple squelette technique.
