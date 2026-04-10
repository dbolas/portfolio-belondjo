import { Navigation, Footer } from '@/components/layout';
import { Button } from '@/components/ui';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ApplicationSaaSPage() {
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
            <h1 className="text-hero text-orange mb-4">Application SaaS</h1>
            <p className="text-xl text-dark/70 mb-8">Product Designer • UX Research</p>

            {/* Image principale */}
            <div className="w-full h-[400px] lg:h-[600px] bg-orange/10 rounded-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-dark/50">
                Image de l'application SaaS
              </div>
            </div>
          </div>

          {/* Infos du projet */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-h3 text-navy mb-4">Rôle</h3>
              <p className="text-dark/80">Product Designer</p>
              <p className="text-dark/80">UX Researcher</p>
            </div>
            <div>
              <h3 className="text-h3 text-navy mb-4">Équipe</h3>
              <p className="text-dark/80">1 designer</p>
              <p className="text-dark/80">2 développeurs</p>
              <p className="text-dark/80">1 product manager</p>
            </div>
          </div>

          {/* Section 01 - Aperçu */}
          <div className="mb-16">
            <h2 className="text-h2 text-orange mb-6">01. Aperçu</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-6">
              Conception et développement d'une plateforme SaaS moderne permettant aux entreprises de gérer leurs processus métier de manière efficace.
              La solution intègre authentification sécurisée, système de paiements et tableau de bord analytique.
            </p>
            <p className="text-lg text-dark/80 leading-relaxed">
              Focus sur l'expérience utilisateur avec onboarding simplifié, navigation intuitive et fonctionnalités accessibles pour maximiser l'adoption.
            </p>
          </div>

          {/* Section 02 - Problème */}
          <div className="mb-16">
            <h2 className="text-h2 text-orange mb-6">02. Problème</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-6">
              Les solutions existantes sur le marché étaient soit trop complexes pour les petites entreprises, soit manquaient de fonctionnalités essentielles pour les organisations en croissance.
              Le taux d'abandon pendant l'onboarding était particulièrement élevé.
            </p>
            <p className="text-lg text-dark/80 leading-relaxed">
              Il fallait créer une solution qui soit à la fois puissante et accessible, avec un processus d'onboarding fluide et une courbe d'apprentissage minimale.
            </p>
          </div>

          {/* Section 03 - Processus */}
          <div className="mb-16">
            <h2 className="text-h2 text-orange mb-6">03. Processus de conception</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-6">
              Recherche utilisateur approfondie incluant interviews, surveys et analyse comportementale pour comprendre les besoins réels.
              Création de personas et user journeys pour identifier les points de friction critiques.
            </p>
            <p className="text-lg text-dark/80 leading-relaxed">
              Prototypage itératif avec tests utilisateurs à chaque étape. Collaboration étroite avec l'équipe de développement pour garantir la faisabilité technique tout en préservant l'expérience utilisateur optimale.
            </p>
          </div>

          {/* Section 04 - Solution */}
          <div className="mb-16">
            <h2 className="text-h2 text-orange mb-6">04. Solution et résultats</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-12">
              Plateforme SaaS complète avec authentification multi-facteurs, intégration Stripe pour les paiements, et dashboard temps réel.
              Onboarding guidé en 3 étapes avec tutoriels interactifs et support contextuel.
            </p>

            {/* Statistiques */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-navy/5 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange mb-2">85%</div>
                <div className="text-dark/70">Taux de complétion onboarding</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange mb-2">50+</div>
                <div className="text-dark/70">Clients actifs</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange mb-2">4.8/5</div>
                <div className="text-dark/70">Satisfaction utilisateur</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange mb-2">40%</div>
                <div className="text-dark/70">Croissance mensuelle</div>
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
