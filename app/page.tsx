import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Navigation, Footer } from '@/components/layout';
import { Button } from '@/components/ui';

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen bg-cream flex items-center justify-center pt-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texte à gauche */}
            <div className="order-1 lg:order-1 text-center lg:text-left">
              <h1 className="text-hero text-orange mb-6 animate-fade-in">
                Salut, Je suis Belondjo
              </h1>
              <p className="text-xl text-dark/80 mb-12 max-w-2xl mx-auto lg:mx-0 animate-slide-up leading-relaxed">
                Product Designer avec 11 ans d'expérience dans le numérique. Je conçois des interfaces centrées utilisateur et je les construis — de la recherche au produit fonctionnel, sans dépendance à une équipe de développement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
                <a
                  href="/cv/CV-Belondjo.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" iconAfter={<ArrowRight />}>
                    Voir mon CV
                  </Button>
                </a>
                <Link href="/contact">
                  <Button size="lg" variant="secondary">
                    Me contacter
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image à droite */}
            <div className="order-2 lg:order-2 animate-fade-in">
              <div className="relative w-full h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hero.jpeg"
                  alt="Belondjo Portfolio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="text-h2 text-orange mb-4 text-center">Mes Réalisations</h2>
          <p className="text-xl text-dark/70 mb-16 max-w-2xl mx-auto text-center">
            Découvrez mes projets
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/projets/intranet-interministeriel" className="bg-cream border-2 border-orange rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="bg-navy/10 rounded-lg p-0 mb-4 flex items-center justify-center h-96 overflow-hidden">
                <Image
                  src="/images/mockup-intranet-laptop.png"
                  alt="Mockup de l'intranet interministériel sur ordinateur portable"
                  width={1200}
                  height={900}
                  className="w-full h-full object-cover scale-125"
                />
              </div>
              <h3 className="text-h3 text-orange mb-3">Intranet interministériel</h3>
              <p className="text-dark/70">
                Refonte UX d'un intranet pour 400 agents de l'État des Hauts-de-Seine
              </p>
            </Link>

            <Link href="/projets/moveiq" className="bg-cream border-2 border-orange rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="bg-navy/10 rounded-lg p-0 mb-4 flex items-center justify-center h-96 overflow-hidden">
                <Image
                  src="/images/moveiq-landing.png"
                  alt="MoveIQ — Plateforme de coaching basketball"
                  width={1200}
                  height={900}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-h3 text-orange mb-3">MoveIQ — Plateforme de coaching basketball</h3>
              <p className="text-dark/70 mb-4">
                SaaS B2C de suivi de progression pour jeunes joueurs (6–18 ans) — conçu et développé en solo avec Claude Code
              </p>
              <div className="flex flex-wrap gap-2">
                {["UX Research", "Design System", "Gamification", "Claude Code"].map((tag) => (
                  <span key={tag} className="text-xs border border-orange text-orange rounded-full px-3 py-1">{tag}</span>
                ))}
              </div>
            </Link>

            <Link href="/projets/leucare" className="bg-cream border-2 border-orange rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="bg-slate-50 rounded-lg p-4 mb-4 flex items-center justify-center h-96 overflow-hidden">
                <Image
                  src="/images/leucare/splash.png"
                  alt="LeuCare — Application mobile leucémie sur iPhone"
                  width={394}
                  height={702}
                  className="h-full w-auto object-contain"
                />
              </div>
              <h3 className="text-h3 text-orange mb-3">LeuCare — Application mobile leucémie</h3>
              <p className="text-dark/70 mb-4">
                Application mobile de suivi pour enfants atteints de leucémie à Kinshasa, RDC — conçue avec Google Stitch et Figma
              </p>
              <div className="flex flex-wrap gap-2">
                {["UX Research", "Mobile", "Santé", "Kinshasa RDC"].map((tag) => (
                  <span key={tag} className="text-xs border border-orange text-orange rounded-full px-3 py-1">{tag}</span>
                ))}
              </div>
            </Link>

            <Link href="/projets/generateur-factures" className="bg-cream border-2 border-orange rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="bg-navy/10 rounded-lg p-4 mb-4 flex items-center justify-center h-96 overflow-hidden">
                <Image
                  src="/images/generateur-factures/mockup-desktop.png"
                  alt="Générateur de Factures IA — application web en production sur MacBook"
                  width={1600}
                  height={1000}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-h3 text-orange mb-3">Générateur de Factures IA</h3>
              <p className="text-dark/70 mb-4">
                Application web en production — création de factures par dictée vocale ou texte avec Gemini 3 Pro
              </p>
              <div className="flex flex-wrap gap-2">
                {["IA générative", "Gemini 3 Pro", "Next.js", "En production"].map((tag) => (
                  <span key={tag} className="text-xs border border-orange text-orange rounded-full px-3 py-1">{tag}</span>
                ))}
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
