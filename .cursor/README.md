# Cursor Skills - Frontend Next.js

Ce dossier contient les skills Cursor pour améliorer la qualité du code et du design dans ce projet Next.js.

## 📚 Skills Disponibles

### 1. **vercel-react-best-practices**
**Localisation**: `vercel-react-best-practices/`

Guide complet d'optimisation des performances React/Next.js avec 45 règles prioritaires.

**Quand l'utiliser**:
- Écriture de composants React ou pages Next.js
- Optimisation de performance
- Refactoring de code existant
- Data fetching (client ou serveur)

**Priorités**:
- **CRITIQUE**: Éliminer les waterfalls, optimiser bundle size
- **HAUTE**: Performance serveur, data fetching client
- **MOYENNE**: Optimisation re-renders, rendering performance

**Documentation**: `vercel-react-best-practices/AGENTS.md`

---

### 2. **nextjs-app-router-patterns**
**Localisation**: `nextjs-app-router-patterns/`

Patterns et conventions spécifiques pour Next.js 15 App Router dans ce projet.

**Quand l'utiliser**:
- Création de pages ou layouts
- Utilisation de Server Components vs Client Components
- Data fetching avec les services du projet
- Configuration de routes dynamiques

**Contenu**:
- Architecture Server/Client Components
- Patterns de data fetching
- Gestion des métadonnées SEO
- Gestion des erreurs
- Conventions de nommage

---

### 3. **graphql-schema-stitching**
**Localisation**: `graphql-schema-stitching/`

Patterns pour travailler avec le Schema Stitching GraphQL unifiant Saleor et Strapi.

**Quand l'utiliser**:
- Travail avec GraphQL queries
- Intégration Saleor/Strapi
- Création de services de données
- Transformation de données CMS

**Contenu**:
- Utilisation du client stitché
- Patterns de queries
- Structure des données Strapi
- Gestion des images Strapi
- Filtrage et transformation

---

### 4. **tailwind-shadcn-styling**
**Localisation**: `tailwind-shadcn-styling/`

Guide de styling avec Tailwind CSS et Shadcn UI.

**Quand l'utiliser**:
- Styling de composants ou pages
- Création de nouveaux éléments UI
- Design responsive
- Animations et interactions

**Contenu**:
- Configuration Tailwind (couleurs brand, typographie)
- Composants Shadcn UI
- Patterns de layout responsive
- Animations Framer Motion
- Styles pour contenu HTML (prose)

---

### 5. **frontend-design**
**Localisation**: `frontend-design/`

Création d'interfaces distinctives et mémorables évitant les esthétiques génériques.

**Quand l'utiliser**:
- Création de composants UI
- Design de pages ou layouts
- Amélioration de l'esthétique
- Création d'interfaces visuellement impactantes

**Contenu**:
- Typographie unique et caractérielle
- Couleurs et thèmes audacieux
- Animations impactantes
- Composition spatiale créative
- Détails visuels (gradients, textures, patterns)

---

### 6. **web-design-guidelines**
**Localisation**: `web-design-guidelines/`

Vérification de conformité avec les Web Interface Guidelines.

**Quand l'utiliser**:
- Revue de code UI
- Audit d'accessibilité
- Vérification des standards web
- Best practices design

**Commandes**:
- "Revois mon UI"
- "Vérifie l'accessibilité"
- "Audit du design"

---

### 7. **vercel-composition-patterns**
**Localisation**: `.agents/skills/vercel-composition-patterns/`

Patterns de composition React qui évoluent bien. Évite la prolifération de props booléennes en utilisant la composition.

**Quand l'utiliser**:
- Refactoring de composants avec beaucoup de props booléennes
- Construction de bibliothèques de composants réutilisables
- Conception d'APIs de composants flexibles
- Architecture de composants
- Travail avec compound components ou context providers

**Contenu**:
- Architecture de composants (éviter les props booléennes)
- Gestion d'état avec composition
- Patterns d'implémentation (compound components, render props)
- APIs React 19

**Priorités**:
- **HAUTE**: Architecture de composants
- **MOYENNE**: Gestion d'état, patterns d'implémentation, React 19

---

## 🎯 Utilisation Recommandée

### Pour un nouveau composant

1. **nextjs-app-router-patterns** - Déterminer Server vs Client Component
2. **tailwind-shadcn-styling** - Styling avec Tailwind et Shadcn
3. **vercel-react-best-practices** - Optimiser les performances
4. **frontend-design** - Améliorer l'esthétique

### Pour une nouvelle page

1. **nextjs-app-router-patterns** - Structure de la page
2. **graphql-schema-stitching** - Data fetching si nécessaire
3. **tailwind-shadcn-styling** - Layout et styling
4. **web-design-guidelines** - Vérification finale

### Pour l'optimisation

1. **vercel-react-best-practices** - Identifier les problèmes
2. **nextjs-app-router-patterns** - Appliquer les patterns
3. **tailwind-shadcn-styling** - Optimiser les styles

---

## 📖 Structure des Skills

Chaque skill suit cette structure:

```
skill-name/
├── SKILL.md          # Documentation principale
├── metadata.json     # Métadonnées (optionnel)
├── README.md        # Documentation détaillée (optionnel)
└── rules/           # Règles spécifiques (optionnel)
```

---

## 🔄 Mise à Jour

Les skills sont maintenus à jour avec:
- Les dernières pratiques Next.js
- Les conventions du projet
- Les retours d'expérience de développement

---

## 📝 Notes

- Les skills sont automatiquement détectés par Cursor
- Ils peuvent être référencés dans les règles du projet (`.cursor/rules`)
- Chaque skill est indépendant et peut être utilisé séparément

---

**Dernière mise à jour**: Février 2026
