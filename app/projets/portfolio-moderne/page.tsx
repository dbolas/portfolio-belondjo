import { Navigation, Footer } from '@/components/layout';
import { Button } from '@/components/ui';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PortfolioModernePage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-cream pt-48 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Bouton retour */}
          <Link href="/" className="inline-flex items-center gap-2 text-dark hover:text-orange transition-colors mb-12">
            <ArrowLeft size={20} />
            <span className="font-bold">Retour aux réalisations</span>
          </Link>

          {/* Hero du projet */}
          <div className="mb-16">
            <h1 className="text-hero text-orange mb-4">Portfolio Moderne</h1>
            <p className="text-xl text-dark/70 mb-8">Conception UX/UI • Chef de projet</p>

            {/* Image principale */}
            <div className="w-full h-[400px] lg:h-[600px] bg-orange/10 rounded-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-dark/50">
                Image du projet
              </div>
            </div>
          </div>

          {/* Infos du projet */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-h3 text-navy mb-4">Rôle</h3>
              <p className="text-dark/80">Conception UX/UI</p>
              <p className="text-dark/80">Chef de projet</p>
            </div>
            <div>
              <h3 className="text-h3 text-navy mb-4">Équipe</h3>
              <p className="text-dark/80">Designer solo</p>
            </div>
          </div>

          {/* Section 01 - Aperçu */}
          <div className="mb-16">
            <h2 className="text-h2 text-orange mb-6">01. Aperçu</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-6">
              Ce projet consiste en la création d'un portfolio moderne et élégant utilisant les dernières technologies web.
              L'objectif était de concevoir une expérience utilisateur fluide et engageante tout en mettant en valeur les réalisations de manière professionnelle.
            </p>
            <p className="text-lg text-dark/80 leading-relaxed">
              Le design met l'accent sur la simplicité, la lisibilité et l'accessibilité, avec une attention particulière portée aux détails visuels et aux interactions.
            </p>
          </div>

          {/* Section 02 - Problème */}
          <div className="mb-16">
            <h2 className="text-h2 text-orange mb-6">02. Problème</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-6">
              Les portfolios traditionnels manquent souvent d'originalité et ne parviennent pas à se démarquer dans un marché saturé.
              Il était nécessaire de créer une solution qui soit à la fois unique et fonctionnelle.
            </p>
            <p className="text-lg text-dark/80 leading-relaxed">
              Les défis incluaient la création d'une navigation intuitive, l'optimisation des performances et la garantie d'une expérience cohérente sur tous les appareils.
            </p>
          </div>

          {/* Section 03 - Processus */}
          <div className="mb-16">
            <h2 className="text-h2 text-orange mb-6">03. Processus de conception</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-6">
              Le processus a débuté par une phase de recherche approfondie, incluant l'analyse de portfolios existants et l'identification des meilleures pratiques.
              J'ai ensuite créé des wireframes et des prototypes interactifs pour tester différentes approches.
            </p>
            <p className="text-lg text-dark/80 leading-relaxed">
              L'itération constante basée sur les retours a permis d'affiner le design jusqu'à obtenir une solution optimale qui répond aux besoins des utilisateurs tout en reflétant l'identité de marque souhaitée.
            </p>
          </div>

          {/* Section 04 - Solution */}
          <div className="mb-16">
            <h2 className="text-h2 text-orange mb-6">04. Solution et résultats</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-12">
              Le résultat final est un portfolio qui combine esthétique moderne et fonctionnalité optimale.
              L'utilisation de Next.js 16 et Tailwind CSS v4 garantit des performances exceptionnelles et une maintenabilité à long terme.
            </p>

            {/* Statistiques */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-navy/5 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange mb-2">100%</div>
                <div className="text-dark/70">Score accessibilité</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange mb-2">95%</div>
                <div className="text-dark/70">Performance</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange mb-2">2s</div>
                <div className="text-dark/70">Temps de chargement</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange mb-2">100%</div>
                <div className="text-dark/70">Mobile-friendly</div>
              </div>
            </div>
          </div>

          {/* Autres projets */}
          <div className="mt-24 pt-12 border-t border-dark/10">
            <h2 className="text-h2 text-orange mb-8 text-center">Voir d'autres projets</h2>
            <div className="flex justify-center">
              <Link href="/">
                <Button size="lg">Retour aux réalisations</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
