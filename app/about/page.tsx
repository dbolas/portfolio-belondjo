import { Navigation, Footer } from '@/components/layout';
import { Button } from '@/components/ui';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-cream pt-48 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Photo portrait */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-md">
                <img
                  src="/images/about-portrait.png"
                  alt="Belondjo - UX/UI Designer"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Présentation */}
            <div className="space-y-6">
              <h2 className="text-h2 text-orange">À propos de moi</h2>
              <p className="text-xl text-dark/90 leading-relaxed">
                Je conçois et je livre : de la recherche terrain à la mise en production. Dernier chantier — la refonte de l&apos;intranet interministériel de la Préfecture des Hauts-de-Seine : 400 agents, 11 services de l&apos;État, accès aux documents ramené de 5-7 clics à 2-3, et 76 % des agents qui jugent l&apos;outil plus simple. Design system, accessibilité RGAA, prototypage accéléré par Claude Code et n8n. Dix ans de design dont cinq en UX/UI, et une formation de scénographe qui m&apos;a appris à penser l&apos;espace avant l&apos;interface.
              </p>
              <a
                href="/cv/CV-Belondjo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4"
              >
                <Button size="lg" iconAfter={<ArrowRight />}>
                  Voir mon CV
                </Button>
              </a>
            </div>
          </div>

          {/* Expérience */}
          <div className="mt-24">
            <h2 className="text-h2 text-orange mb-8">Expérience</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-h3 text-navy mb-1">Product Designer (UX/UI)</h3>
                <p className="text-dark/70 text-lg mb-1">Préfecture des Hauts-de-Seine</p>
                <p className="text-dark/50 text-sm mb-3">Août 2024 – Août 2026 · Nanterre (92)</p>
                <p className="text-dark/80">
                  Refonte de l&apos;intranet interministériel pour 400 agents. Discovery, wireframes, prototypes Figma haute fidélité, ateliers Design Thinking avec 30+ agents, intégration Joomla et Webmaster.
                </p>
              </div>

              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-h3 text-navy mb-1">Product Designer</h3>
                <p className="text-dark/70 text-lg mb-1">ICorp</p>
                <p className="text-dark/50 text-sm mb-3">Janvier 2023 – Août 2025 · Kinshasa, RDC</p>
                <p className="text-dark/80">
                  Conception produit d&apos;une solution d&apos;analyse documentaire IA pour Actif Group. Cadrage des besoins et cahier des charges, architecture produit, prototype fonctionnel testé auprès des utilisateurs, présentation à des partenaires et institutions.
                </p>
              </div>

              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-h3 text-navy mb-1">UX Researcher</h3>
                <p className="text-dark/70 text-lg mb-1">Musée Royal d&apos;Afrique Centrale</p>
                <p className="text-dark/50 text-sm mb-3">Octobre 2021 – Décembre 2023 · Tervuren, Belgique</p>
                <p className="text-dark/80">
                  Research complète pour une exposition interactive dédiée à la diaspora africaine. Interviews, personas, parcours visiteurs, dispositifs numériques de médiation culturelle.
                </p>
              </div>

              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-h3 text-navy mb-1">Intégrateur Web</h3>
                <p className="text-dark/70 text-lg mb-1">Freelance</p>
                <p className="text-dark/50 text-sm mb-3">2019 – 2021 · Strasbourg (67)</p>
                <p className="text-dark/80">
                  Intégration HTML/CSS conformes W3C, accessibilité, performances web. Création de systèmes de design légers et guidelines d&apos;édition pour clients non-techniques.
                </p>
              </div>

              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-h3 text-navy mb-1">Scénographe &amp; directeur artistique</h3>
                <p className="text-dark/70 text-lg mb-1">Collectif Scénopolis</p>
                <p className="text-dark/50 text-sm mb-3">2016 – 2019 · Strasbourg (67)</p>
                <p className="text-dark/80">
                  Direction artistique et conception scénographique — mise en espace, parcours de visite, dispositifs de médiation.
                </p>
              </div>
            </div>
          </div>

          {/* Formation */}
          <div className="mt-20">
            <h2 className="text-h2 text-orange mb-8">Formation</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-h3 text-navy mb-1">Formation continue</h3>
                <p className="text-dark/70 text-lg mb-1">Claude Code &amp; création de SaaS (Codelynx) · n8n : automatisation de A à Z</p>
                <p className="text-dark/50 text-sm">2025</p>
              </div>

              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-h3 text-navy mb-1">Certifications Design Thinking · User Research · Design de Service · UX/UI</h3>
                <p className="text-dark/70 text-lg mb-1">DThinking Academy</p>
                <p className="text-dark/50 text-sm">2023</p>
              </div>

              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-h3 text-navy mb-1">Formation Développement &amp; Intégration Web et Mobile</h3>
                <p className="text-dark/70 text-lg mb-1">3W Academy, Strasbourg</p>
                <p className="text-dark/50 text-sm">2019</p>
              </div>

              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-h3 text-navy mb-1">Diplôme National Supérieur d&apos;Expression Plastique — Scénographie</h3>
                <p className="text-dark/70 text-lg mb-1">Haute École des Arts du Rhin, Strasbourg</p>
                <p className="text-dark/50 text-sm">2016</p>
              </div>

              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-h3 text-navy mb-1">Licence en Architecture d&apos;intérieur</h3>
                <p className="text-dark/70 text-lg mb-1">Académie des Beaux-Arts de Kinshasa</p>
                <p className="text-dark/50 text-sm">2011</p>
              </div>
            </div>
          </div>

          {/* Compétences */}
          <div className="mt-20">
            <h2 className="text-h2 text-orange mb-8">Compétences</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-h3 text-navy mb-3">Product &amp; Discovery</h3>
                <p className="text-dark/80">UX Research · Interviews · Personas · Journey Mapping · UX Audit · Problem Definition</p>
              </div>

              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-h3 text-navy mb-3">Design &amp; Prototypage</h3>
                <p className="text-dark/80">Figma (expert) · Design System · Atomic Design · Tokens · Wireframes · Prototypes · WCAG 2.1 · RGAA · DSFR</p>
              </div>

              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-h3 text-navy mb-3">AI-Augmented Build</h3>
                <p className="text-dark/80">Claude Code · Next.js · Supabase · Prisma · Vercel · Better-Auth</p>
              </div>

              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-h3 text-navy mb-3">Automatisation</h3>
                <p className="text-dark/80">n8n · Intégrations API REST · Workflows IA · Gemini API · Prompt Engineering</p>
              </div>

              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-h3 text-navy mb-3">Exploration IA &amp; Design</h3>
                <p className="text-dark/80">Claude Design · Google Stitch · Prototypage IA-first</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
