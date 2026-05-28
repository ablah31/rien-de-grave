---
name: graphql-schema-stitching
description: GraphQL Schema Stitching patterns for unifying Saleor and Strapi APIs. Use when working with GraphQL queries, resolvers, schema stitching, or integrating Saleor/Strapi data.
metadata:
  author: grandes-marques
  version: "1.0.0"
---

# GraphQL Schema Stitching - Grandes Marques

Guide pour travailler avec le Schema Stitching GraphQL qui unifie Saleor (e-commerce) et Strapi (CMS).

## Architecture

```
Frontend Next.js
    ↓
Schema Stitching Gateway (/api/graphql)
    ↓
    ├── Saleor GraphQL API (e-commerce)
    └── Strapi GraphQL API (CMS)
```

## Utilisation des clients

### Client stitché (recommandé)

```tsx
import { stitchedClient } from '@/lib/clients/stitched-safe'
import { STITCHED_QUERIES } from '@/lib/stitching-experimental/queries'

// Dans un Server Component
const result = await stitchedClient.query({
  query: STITCHED_QUERIES.GET_CMS_PAGES
})
```

### Client sécurisé pour RSC

```tsx
// src/lib/clients/stitched-safe.ts
import { stitchedClient } from './stitched-browser'

// Utiliser stitched-safe pour Server Components
export { stitchedClient }
```

## Patterns de queries

### Query CMS simple

```tsx
import { STITCHED_QUERIES } from '@/lib/stitching-experimental/queries'

const result = await stitchedClient.query({
  query: STITCHED_QUERIES.GET_CMS_PAGE,
  variables: { slug: 'mentions-legales' }
})

const pageData = result.data?.cmsPage
```

### Query avec fragments

```tsx
// Utiliser les fragments définis dans fragments.ts
import { CMS_PAGE_FRAGMENT } from '@/lib/stitching-experimental/fragments'

const query = gql`
  query GetPage($slug: String!) {
    cmsPage(slug: $slug) {
      ...CmsPageFragment
    }
  }
  ${CMS_PAGE_FRAGMENT}
`
```

## Structure des données Strapi

### Pages CMS

```typescript
interface CMSPage {
  id: string
  slug: string
  title: string
  Text?: string  // HTML directement
  Text2?: string
  Image?: {
    data?: {
      attributes?: {
        url?: string
        alternativeText?: string
      }
    }
  }
  RubriqueDroite?: {
    text?: string
    image?: any
  }
  RubriqueGauche?: {
    text?: string
    image?: any
  }
  Seo?: {
    SeoTitle?: string
    SeoDescription?: string
  }
  publishedAt?: string
}
```

### Images Strapi

```tsx
import { buildStrapiImageUrlFromObject } from '@/lib/utils/strapi-image'

const imageUrl = buildStrapiImageUrlFromObject(
  page.Image,
  'fallback-url'
)
```

## Services pattern

### Service CMS

```tsx
// src/lib/services/CMSPageService.ts
export class CMSPageService {
  static async getCMSPages(): Promise<CMSPagesResult> {
    const result = await stitchedClient.query({
      query: STITCHED_QUERIES.GET_CMS_PAGES
    })
    
    const pagesData = result.data?.cmsPages?.data?.map((edge: any) => ({
      id: edge.id,
      slug: edge.attributes.slug,
      title: edge.attributes.Title,
      ...edge.attributes
    })) || []
    
    return { pages: pagesData }
  }
  
  static async getCMSPageBySlug(slug: string): Promise<CMSPage | null> {
    const result = await stitchedClient.query({
      query: STITCHED_QUERIES.GET_CMS_PAGE,
      variables: { slug }
    })
    
    return result.data?.cmsPage || null
  }
}
```

## Filtrage et transformation

### Nettoyer les données pour RSC

```tsx
private static sanitizeForRSC(obj: any): any {
  if (obj === null || obj === undefined) return obj
  if (typeof obj !== 'object') return obj
  if (Array.isArray(obj)) return obj.map(item => this.sanitizeForRSC(item))
  
  const sanitized: any = {}
  for (const [key, value] of Object.entries(obj)) {
    if (key !== '__typename') {
      sanitized[key] = this.sanitizeForRSC(value)
    }
  }
  return sanitized
}
```

### Filtrer les pages

```tsx
static filterBlogPages(pages: CMSPage[]): CMSPage[] {
  const excludedSlugs = [
    'faq',
    'marques',
    'mentions-legales',
    // ...
  ]
  
  return pages.filter(page => !excludedSlugs.includes(page.slug))
}
```

## Gestion des erreurs

### Try-catch dans les services

```tsx
static async getCMSPageBySlug(slug: string): Promise<CMSPage | null> {
  try {
    const result = await stitchedClient.query({
      query: STITCHED_QUERIES.GET_CMS_PAGE,
      variables: { slug }
    })
    
    return result.data?.cmsPage || null
  } catch (error) {
    log.error('❌ Erreur CMSPageService.getCMSPageBySlug:', error)
    return null
  }
}
```

## Logging

### Utiliser le logger du projet

```tsx
import { log } from '@/lib/utils/logger'

log.debug('🔍 CMSPageService - Page trouvée:', pageData.title)
log.error('❌ Erreur:', error)
```

## Variables d'environnement

```env
# Saleor
NEXT_PUBLIC_SALEOR_URL_GRAPHQL=https://api.gm.cprb.io/graphql/
SALEOR_URL_GRAPHQL=https://api.gm.cprb.io/graphql/

# Strapi
NEXT_PUBLIC_STRAPI_URL_GRAPHQL=https://fm.gm.cprb.io/graphql
STRAPI_URL_GRAPHQL=https://fm.gm.cprb.io/graphql
NEXT_PUBLIC_STRAPI_TOKEN=your_token
STRAPI_TOKEN=your_token
```

## Best practices

1. **Toujours utiliser le client stitché** pour accéder aux données unifiées
2. **Nettoyer les données** avant de les passer aux Client Components (supprimer `__typename`)
3. **Gérer les erreurs** avec try-catch et logging approprié
4. **Utiliser les fragments** pour réutiliser les structures de données
5. **Filtrer côté serveur** pour éviter de transférer des données inutiles
