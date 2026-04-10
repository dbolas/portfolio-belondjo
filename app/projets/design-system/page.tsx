import { Navigation, Footer } from '@/components/layout';
import { Button } from '@/components/ui';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function DesignSystemPage() {
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
            <h1 className="text-hero text-orange mb-4">Design System</h1>
            <p className="text-xl text-dark/70 mb-8">Lead Designer • Architecture de composants</p>

            {/* Image principale */}
            <div className="w-full h-[400px] lg:h-[600px] bg-navy/10 rounded-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-dark/50">
                Image du système de design
              </div>
            </div>
          </div>

          {/* Infos du projet */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-h3 text-navy mb-4">Rôle</h3>
              <p className="text-dark/80">Lead Designer</p>
              <p className="text-dark/80">Architecture de composants</p>
            </div>
            <div>
              <h3 className="text-h3 text-navy mb-4">Équipe</h3>
              <p className="text-dark/80">2 designers</p>
              <p className="text-dark/80">3 développeurs</p>
            </div>
          </div>

          {/* Section 01 - Aperçu */}
          <div className="mb-16">
            <h2 className="text-h2 text-orange mb-6">01. Aperçu</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-6">
              Création d'un système de design complet et évolutif pour assurer la cohérence visuelle et fonctionnelle à travers plusieurs produits.
              Le système comprend une bibliothèque de composants réutilisables, des guidelines de design et une documentation interactive.
            </p>
            <p className="text-lg text-dark/80 leading-relaxed">
              L'objectif était de réduire le temps de développement, améliorer la collaboration entre designers et développeurs, et garantir une expérience utilisateur cohérente.
            </p>
          </div>

          {/* Section 02 - Problème */}
          <div className="mb-16">
            <h2 className="text-h2 text-orange mb-6">02. Problème</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-6">
              L'équipe faisait face à des incohérences visuelles entre différents produits et des ralentissements dans le processus de développement.
              Chaque designer créait ses propres composants, entraînant duplication de travail et maintenance complexe.
            </p>
            <p className="text-lg text-dark/80 leading-relaxed">
              Il manquait une source de vérité unique pour les standards de design, ce qui compliquait l'onboarding de nouveaux membres et la scalabilité des projets.
            </p>
          </div>

          {/* Section 03 - Processus */}
          <div className="mb-16">
            <h2 className="text-h2 text-orange mb-6">03. Processus de conception</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-6">
              Audit complet des composants existants pour identifier les patterns récurrents et les opportunités de standardisation.
              Création d'une hiérarchie de composants atomiques, moléculaires et organismes suivant la méthodologie Atomic Design.
            </p>
            <p className="text-lg text-dark/80 leading-relaxed">
              Tests utilisateurs réguliers avec les équipes internes pour valider l'utilisabilité du système. Documentation détaillée avec exemples de code et guidelines d'utilisation dans Storybook.
            </p>
          </div>

          {/* Section 04 - Solution */}
          <div className="mb-16">
            <h2 className="text-h2 text-orange mb-6">04. Solution et résultats</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-12">
              Système de design complet avec plus de 50 composants réutilisables, documentation interactive et tokens de design pour assurer la cohérence.
              Adoption progressive par toutes les équipes produit avec formation et support continu.
            </p>

            {/* Statistiques */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-navy/5 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange mb-2">60%</div>
                <div className="text-dark/70">Réduction du temps de dev</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange mb-2">50+</div>
                <div className="text-dark/70">Composants créés</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange mb-2">100%</div>
                <div className="text-dark/70">Adoption équipes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange mb-2">5</div>
                <div className="text-dark/70">Produits utilisant le DS</div>
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
