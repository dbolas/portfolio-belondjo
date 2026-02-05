# Portfolio Belondjo - Documentation Projet

## Vue d'ensemble

Portfolio personnel développé avec Next.js 16, React 19 et Tailwind CSS v4. Ce projet utilise l'App Router de Next.js et TypeScript pour une expérience de développement moderne et type-safe.

## Stack Technique

### Framework et Bibliothèques
- **Next.js** v16.1.6 - Framework React avec App Router
- **React** v19.2.3 - Bibliothèque UI
- **TypeScript** v5 - Typage statique
- **Tailwind CSS** v4 - Framework CSS utility-first

### Outils de Développement
- **ESLint** v9 avec configuration Next.js - Linting du code
- **PostCSS** - Traitement CSS avec Tailwind
- **Geist Font** - Polices optimisées de Vercel (Sans & Mono)

## Design System

### Palette de Couleurs

Le portfolio utilise une palette de couleurs stricte et cohérente:

| Couleur | Hex Code | Usage | Variable CSS |
|---------|----------|-------|--------------|
| **Cream** | `#F9F6F0` | Fond principal du site | `--color-cream` |
| **Orange** | `#FF7B54` | Titres, accents, hover | `--color-orange` |
| **Navy** | `#2C3E50` | Logo, éléments secondaires | `--color-navy` |
| **Dark** | `#1A1A1A` | Texte principal | `--color-dark` |

#### Configuration Tailwind

Ajouter ces couleurs dans `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        cream: '#F9F6F0',
        orange: '#FF7B54',
        navy: '#2C3E50',
        dark: '#1A1A1A',
      },
    },
  },
}
```

#### Exemples d'utilisation

```tsx
// Fond principal
<div className="bg-cream">

// Titre avec couleur orange
<h1 className="text-orange">Portfolio</h1>

// Texte principal
<p className="text-dark">Description</p>

// Logo ou élément secondaire
<div className="bg-navy">Logo</div>
```

### Logo et Identité Visuelle

#### Fichiers Logo et Favicon

Le portfolio dispose de deux assets visuels principaux:

##### Logo Principal
- **Emplacement**: `public/images/logo-belondjo.svg`
- **Format**: SVG vectoriel (346KB)
- **Couleur principale**: Navy (`#2C3E50`)
- **Usage**: Header, Footer, pages
- **Optimisation**: Utiliser avec Next.js Image pour les performances

##### Favicon
- **Emplacement**: `app/icon.svg` (détection automatique Next.js)
- **Copie**: `public/images/favicon.svg`
- **Format**: SVG vectoriel (309KB)
- **Taille**: 16x16px recommandée pour l'affichage
- **Usage**: Icône du navigateur, onglets, favoris
- **Configuration**: Automatique via App Router de Next.js

#### Composant Logo

Un composant React réutilisable est disponible dans `components/layout/Logo.tsx`.

##### Import et utilisation

```tsx
// Import du composant
import { Logo } from '@/components/layout';

// Utilisation par défaut (120x40px, cliquable)
<Logo />

// Logo personnalisé
<Logo
  width={200}
  height={60}
  clickable={false}
  className="hover:scale-105"
/>
```

##### Props disponibles

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `width` | `number` | `120` | Largeur en pixels |
| `height` | `number` | `40` | Hauteur en pixels |
| `clickable` | `boolean` | `true` | Si true, redirige vers "/" au clic |
| `className` | `string` | `''` | Classes CSS additionnelles |
| `variant` | `'default' \| 'light' \| 'dark'` | `'default'` | Variante de couleur |

##### Variantes du logo

```tsx
// Logo par défaut (navy)
<Logo variant="default" />

// Logo clair (pour fond sombre)
<Logo variant="light" />

// Logo sombre (pour fond clair)
<Logo variant="dark" />
```

##### Exemples d'intégration

```tsx
// Dans le Header
export default function Header() {
  return (
    <header className="bg-cream py-6 px-8">
      <nav className="flex items-center justify-between">
        <Logo width={140} height={45} />
        <ul className="flex gap-6">
          {/* Navigation */}
        </ul>
      </nav>
    </header>
  );
}

// Dans le Footer
export default function Footer() {
  return (
    <footer className="bg-navy py-12 px-8">
      <Logo variant="light" width={100} height={35} />
      {/* Contenu footer */}
    </footer>
  );
}

// Logo standalone non cliquable
<div className="flex items-center justify-center py-20">
  <Logo
    width={300}
    height={100}
    clickable={false}
    className="opacity-80"
  />
</div>
```

#### Utilisation directe du SVG

Si vous préférez utiliser le SVG directement sans le composant:

```tsx
import Image from 'next/image';

<Image
  src="/images/logo-belondjo.svg"
  alt="Belondjo Logo"
  width={120}
  height={40}
  priority
/>
```

#### Configuration du Favicon

Next.js détecte automatiquement le favicon via le fichier `app/icon.svg`.

##### Fonctionnement automatique

Le fichier `app/icon.svg` est automatiquement:
- Détecté par Next.js au build
- Converti en formats multiples (ICO, PNG)
- Ajouté aux métadonnées HTML
- Optimisé pour différentes tailles

##### Vérification du favicon

```bash
# Le favicon est généré automatiquement au build
npm run build

# Vérifier dans le navigateur
# L'icône apparaît dans l'onglet et les favoris
```

##### Configuration personnalisée (optionnelle)

Si vous souhaitez personnaliser les métadonnées du favicon:

```tsx
// app/layout.tsx
export const metadata = {
  icons: {
    icon: '/images/favicon.svg',
    apple: '/images/favicon.svg',
  },
}
```

##### Formats alternatifs

Pour créer des formats alternatifs (ICO, PNG):

```bash
# Installer un convertisseur (optionnel)
npm install -D sharp

# Ou utiliser un service en ligne
# https://realfavicongenerator.net/
```

##### Emplacements des fichiers

```
app/
├── icon.svg              # ✅ Favicon principal (détection auto)

public/
└── images/
    ├── logo-belondjo.svg # Logo principal
    └── favicon.svg       # Copie du favicon
```

### Typographie

#### Police Obligatoire: Courier Prime

**IMPORTANT**: Courier Prime (monospace) est la police OBLIGATOIRE pour l'ensemble du site.

##### Installation avec Google Fonts

```tsx
// app/layout.tsx
import { Courier_Prime } from "next/font/google";

const courierPrime = Courier_Prime({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-courier',
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={courierPrime.variable}>
        {children}
      </body>
    </html>
  );
}
```

##### Configuration CSS Globale

```css
/* app/globals.css */
:root {
  --font-courier: 'Courier Prime', monospace;
}

* {
  font-family: var(--font-courier);
}

body {
  font-family: var(--font-courier);
}
```

##### Hiérarchie Typographique

```tsx
// H1 - Titres principaux
<h1 className="text-4xl md:text-6xl font-bold text-orange">
  Titre Principal
</h1>

// H2 - Sous-titres
<h2 className="text-3xl md:text-5xl font-bold text-orange">
  Sous-titre
</h2>

// H3 - Titres de section
<h3 className="text-2xl md:text-4xl font-bold text-orange">
  Section
</h3>

// Paragraphe
<p className="text-base md:text-lg text-dark leading-relaxed">
  Texte de paragraphe
</p>

// Petit texte
<span className="text-sm text-dark/70">
  Détails
</span>
```

### Boutons

#### Spécifications strictes

- **Border**: Outline orange 2px
- **Border-radius**: 50px (complètement arrondi)
- **Hover**: Remplissage avec fond orange
- **Transition**: Smooth (200-300ms)

#### Composant Button Standard

```tsx
// components/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export default function Button({
  children,
  onClick,
  type = 'button',
  className = ''
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-6 py-3
        border-2 border-orange
        rounded-[50px]
        text-orange
        font-bold
        transition-all duration-300
        hover:bg-orange hover:text-cream
        active:scale-95
        ${className}
      `}
    >
      {children}
    </button>
  );
}
```

#### Classes Tailwind pour les boutons

```tsx
// Bouton primaire
<button className="
  px-6 py-3
  border-2 border-orange
  rounded-[50px]
  text-orange
  font-bold
  transition-all duration-300
  hover:bg-orange hover:text-cream
">
  Cliquez ici
</button>

// Bouton avec icône
<button className="
  flex items-center gap-2
  px-6 py-3
  border-2 border-orange
  rounded-[50px]
  text-orange
  font-bold
  transition-all duration-300
  hover:bg-orange hover:text-cream
">
  <Icon />
  Télécharger CV
</button>
```

### Inputs et Formulaires

#### Spécifications strictes

- **Border**: Border-bottom uniquement (pas de bordure complète)
- **Border-color**: Orange
- **Background**: Transparent ou cream
- **Focus**: Border-bottom plus épais

#### Composant Input Standard

```tsx
// components/Input.tsx
interface InputProps {
  type?: 'text' | 'email' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  className = ''
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`
        w-full
        bg-transparent
        border-0 border-b-2 border-orange
        py-3 px-0
        text-dark
        placeholder:text-dark/50
        focus:outline-none
        focus:border-b-[3px]
        transition-all duration-200
        ${className}
      `}
    />
  );
}
```

#### Textarea

```tsx
// components/Textarea.tsx
export default function Textarea({
  placeholder,
  value,
  onChange,
  rows = 4,
  className = ''
}: TextareaProps) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      className={`
        w-full
        bg-transparent
        border-0 border-b-2 border-orange
        py-3 px-0
        text-dark
        placeholder:text-dark/50
        focus:outline-none
        focus:border-b-[3px]
        transition-all duration-200
        resize-none
        ${className}
      `}
    />
  );
}
```

#### Exemple de formulaire complet

```tsx
// app/contact/page.tsx
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';
import Button from '@/components/Button';

export default function ContactForm() {
  return (
    <form className="max-w-2xl mx-auto space-y-6 p-8 bg-cream">
      <div>
        <label className="block text-dark font-bold mb-2">
          Nom
        </label>
        <Input
          type="text"
          placeholder="Votre nom"
        />
      </div>

      <div>
        <label className="block text-dark font-bold mb-2">
          Email
        </label>
        <Input
          type="email"
          placeholder="votre@email.com"
        />
      </div>

      <div>
        <label className="block text-dark font-bold mb-2">
          Message
        </label>
        <Textarea
          placeholder="Votre message..."
          rows={6}
        />
      </div>

      <Button type="submit">
        Envoyer
      </Button>
    </form>
  );
}
```

### Composants UI Réutilisables

#### Card

```tsx
// components/Card.tsx
export default function Card({
  children,
  className = ''
}: CardProps) {
  return (
    <div className={`
      bg-cream
      border-2 border-orange
      rounded-lg
      p-6
      transition-all duration-300
      hover:shadow-lg
      hover:scale-[1.02]
      ${className}
    `}>
      {children}
    </div>
  );
}
```

#### Section Container

```tsx
// components/Section.tsx
export default function Section({
  children,
  className = ''
}: SectionProps) {
  return (
    <section className={`
      min-h-screen
      bg-cream
      py-16 md:py-24
      px-6 md:px-12
      ${className}
    `}>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
}
```

### Règles de Design Strictes

#### À FAIRE ✅

- Utiliser **uniquement** Courier Prime pour toutes les polices
- Respecter la palette de couleurs (cream, orange, navy, dark)
- Boutons avec `border-radius: 50px` et outline orange
- Inputs avec `border-bottom` uniquement
- Transitions smooth sur tous les éléments interactifs
- Titres toujours en orange (`text-orange`)
- Texte principal toujours en dark (`text-dark`)
- Fond principal toujours en cream (`bg-cream`)

#### À ÉVITER ❌

- Ne **JAMAIS** utiliser d'autres polices que Courier Prime
- Ne pas utiliser de couleurs en dehors de la palette définie
- Éviter les border complètes sur les inputs
- Ne pas utiliser `border-radius` inférieur à 50px pour les boutons
- Éviter les ombres excessives (sauf hover subtil)
- Ne pas mélanger les styles (rester cohérent)

### Responsive Design

```tsx
// Exemple de composant responsive
<div className="
  grid
  grid-cols-1
  md:grid-cols-2
  lg:grid-cols-3
  gap-6
  p-4 md:p-8 lg:p-12
">
  {/* Contenu */}
</div>

// Typographie responsive
<h1 className="
  text-3xl md:text-5xl lg:text-6xl
  text-orange
  font-bold
">
  Titre
</h1>
```

### Animations et Transitions

```tsx
// Hover effects
<div className="
  transition-all duration-300
  hover:scale-105
  hover:shadow-xl
">

// Fade in on scroll (avec framer-motion)
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* Contenu */}
</motion.div>
```

## Structure du Projet

```
portfolio-belondjo/
├── app/                    # Répertoire App Router
│   ├── layout.tsx         # Layout racine avec métadonnées
│   ├── page.tsx           # Page d'accueil
│   ├── globals.css        # Styles globaux
│   └── icon.svg           # Favicon (détection automatique Next.js)
├── components/            # Composants React réutilisables
│   ├── layout/           # Composants de structure
│   │   ├── Logo.tsx      # Composant Logo
│   │   └── index.ts      # Export des composants layout
│   └── ui/               # Composants Design System
├── public/                # Assets statiques
│   ├── images/           # Images et logos
│   │   └── logo-belondjo.svg  # Logo principal (346KB)
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── .next/                 # Build Next.js (généré)
├── node_modules/          # Dépendances (généré)
├── .git/                  # Dépôt Git
├── .gitignore            # Fichiers ignorés par Git
├── eslint.config.mjs     # Configuration ESLint
├── next.config.ts        # Configuration Next.js
├── next-env.d.ts         # Types Next.js
├── postcss.config.mjs    # Configuration PostCSS
├── tsconfig.json         # Configuration TypeScript
├── package.json          # Dépendances et scripts
├── package-lock.json     # Lock des dépendances
├── README.md             # Documentation utilisateur
└── CLAUDE.md             # Documentation projet (ce fichier)
```

## Scripts Disponibles

```bash
# Démarrer le serveur de développement
npm run dev

# Compiler le projet pour la production
npm run build

# Démarrer le serveur de production
npm run start

# Analyser le code avec ESLint
npm run lint
```

## Configuration

### Métadonnées (app/layout.tsx:15-18)
- **Titre**: "Create Next App"
- **Description**: "Generated by create next app"
- **Langue**: Anglais (en)

### Polices
- **Courier Prime** - Police monospace OBLIGATOIRE pour tout le site
- Chargement optimisé via `next/font/google`
- Variable CSS: `--font-courier`
- Poids disponibles: 400 (regular), 700 (bold)

### Thème
- **Fond principal**: Cream (`#F9F6F0`)
- **Couleur d'accent**: Orange (`#FF7B54`) pour titres et éléments interactifs
- **Logo/Secondaire**: Navy (`#2C3E50`)
- **Texte principal**: Dark (`#1A1A1A`)
- Pas de mode sombre (design system strict)

## Architecture

### App Router
Ce projet utilise l'App Router de Next.js (pas le Pages Router) avec:
- Composants serveur par défaut
- Streaming et Suspense natifs
- Layouts imbriqués
- Route handlers API possibles

### Composants Principaux

#### Layout Racine (app/layout.tsx)
- Configure les polices Geist
- Définit les métadonnées
- Applique l'antialiasing
- Wrapper HTML/Body global

#### Page d'Accueil (app/page.tsx:3-65)
- Composant serveur par défaut
- Layout centré et responsive
- Liens vers:
  - Templates Vercel
  - Centre d'apprentissage Next.js
  - Documentation Next.js
  - Déploiement Vercel

## Guide de Développement

### Installation

```bash
# Cloner le projet (si nécessaire)
cd C:\Dev\portfolios\portfolio-belondjo

# Installer les dépendances
npm install

# Démarrer le développement
npm run dev
```

Le serveur de développement démarre sur [http://localhost:3000](http://localhost:3000)

### Hot Reload
- Les modifications dans `app/` sont automatiquement rechargées
- Pas besoin de redémarrer le serveur

### Ajouter une Nouvelle Page
```tsx
// app/about/page.tsx
export default function About() {
  return <div>À propos</div>
}
```
Accessible sur `/about`

### Ajouter un Layout
```tsx
// app/dashboard/layout.tsx
export default function DashboardLayout({ children }) {
  return (
    <div>
      <nav>Navigation</nav>
      {children}
    </div>
  )
}
```

### Utiliser Tailwind CSS avec le Design System
```tsx
// Respecter les couleurs du design system
<div className="flex items-center justify-center bg-cream">
  <h1 className="text-3xl md:text-5xl font-bold text-orange">
    Titre Principal
  </h1>
  <p className="text-base text-dark">
    Texte de description
  </p>
</div>

// Bouton avec le style du design system
<button className="
  px-6 py-3
  border-2 border-orange rounded-[50px]
  text-orange font-bold
  hover:bg-orange hover:text-cream
  transition-all duration-300
">
  Call to Action
</button>

// Input avec border-bottom uniquement
<input className="
  w-full bg-transparent
  border-0 border-b-2 border-orange
  py-3 text-dark
  focus:outline-none focus:border-b-[3px]
" />
```

## Conventions de Code

### TypeScript
- Tous les fichiers React utilisent `.tsx`
- Typage strict activé
- Types importés avec `import type`

### Composants
- Noms en PascalCase
- Export default pour les pages
- Props typées avec TypeScript

### CSS
- Privilégier les classes Tailwind
- Classes globales dans `globals.css`
- Utiliser les variables CSS pour les polices

## Déploiement

### Vercel (Recommandé)
1. Connecter le dépôt Git à Vercel
2. Configuration automatique détectée
3. Déploiement automatique sur chaque push

### Build Local
```bash
npm run build
npm run start
```

### Variables d'Environnement
Créer un fichier `.env.local`:
```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Git

### Statut Actuel
- Branche: `master`
- Statut: Clean (aucune modification non commitée)

### Workflow Recommandé
```bash
# Créer une branche feature
git checkout -b feature/nouvelle-fonctionnalite

# Faire vos modifications
git add .
git commit -m "feat: description de la fonctionnalité"

# Fusionner dans master
git checkout master
git merge feature/nouvelle-fonctionnalite
```

## Optimisations Next.js

### Images
```tsx
import Image from "next/image"

<Image
  src="/image.jpg"
  alt="Description"
  width={500}
  height={300}
  priority // Pour les images above-the-fold
/>
```

### Métadonnées Dynamiques
```tsx
export const metadata = {
  title: 'Titre de la page',
  description: 'Description',
}
```

### Loading States
```tsx
// app/loading.tsx
export default function Loading() {
  return <div>Chargement...</div>
}
```

## Prochaines Étapes

### Recommandations

#### Priorité 1: Implémenter le Design System
1. **Configurer Courier Prime** dans `app/layout.tsx`
2. **Configurer la palette de couleurs** dans `tailwind.config.js`
3. **Créer les composants de base**
   - `Button.tsx` (outline orange, border-radius 50px)
   - `Input.tsx` (border-bottom uniquement)
   - `Textarea.tsx` (border-bottom uniquement)
   - `Card.tsx` (avec bordure orange)
   - `Section.tsx` (container responsive)
4. **Mettre à jour `globals.css`** avec les variables CSS et la police

#### Priorité 2: Structure et Contenu
1. **Personnaliser les métadonnées** (titre, description)
2. **Créer les pages du portfolio**
   - À propos
   - Projets
   - Contact
3. **Ajouter des composants layout**
   - Header/Navigation
   - Footer

#### Priorité 3: Améliorations
1. **Intégrer des animations** (Framer Motion)
2. **Ajouter des analytics** (Vercel Analytics)
3. **Optimiser SEO**
   - Sitemap
   - robots.txt
   - Open Graph tags

### Structure Suggérée
```
app/
├── (home)/
│   └── page.tsx
├── about/
│   └── page.tsx
├── projects/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
├── contact/
│   └── page.tsx
├── layout.tsx              # Layout racine avec Courier Prime
└── globals.css             # Styles globaux + variables CSS

components/
├── ui/                     # Composants Design System
│   ├── Button.tsx         # Bouton outline orange
│   ├── Input.tsx          # Input border-bottom
│   ├── Textarea.tsx       # Textarea border-bottom
│   ├── Card.tsx           # Card avec bordure orange
│   └── Section.tsx        # Container de section
├── layout/                 # Composants de structure
│   ├── Header.tsx         # Navigation
│   ├── Footer.tsx         # Pied de page
│   └── Navigation.tsx     # Menu de navigation
└── projects/              # Composants spécifiques
    ├── ProjectCard.tsx    # Card de projet
    └── ProjectGrid.tsx    # Grille de projets
```

## Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS v4](https://tailwindcss.com/docs)
- [Documentation React 19](https://react.dev)
- [Documentation TypeScript](https://www.typescriptlang.org/docs)
- [Templates Vercel](https://vercel.com/templates?framework=next.js)

## Support

Pour toute question ou assistance avec Claude Code:
- Utiliser `/help` dans le terminal
- Reporter des issues: [GitHub Claude Code](https://github.com/anthropics/claude-code/issues)

---

**Dernière mise à jour**: 5 février 2026
**Version Next.js**: 16.1.6
**État du projet**: Initialisé avec Design System documenté
**Design System**: Courier Prime • Cream/Orange/Navy/Dark • Boutons outline 50px • Inputs border-bottom
