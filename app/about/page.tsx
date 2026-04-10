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
                  alt="Belondjo - Product Designer"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Présentation */}
            <div className="space-y-6">
              <h2 className="text-h2 text-orange">À propos de Moi</h2>
              <p className="text-xl text-dark/90 leading-relaxed">
                Product Designer avec 11 ans d&apos;expérience dans le numérique, dont 4 ans de spécialisation en UX/UI. Mon parcours en scénographie et architecture intérieure m&apos;a donné une approche singulière du design : je pense l&apos;espace avant de penser l&apos;interface. Je conçois des produits centrés utilisateur et je les construis — de la research au produit fonctionnel — grâce à mon stack Claude Code, Google Stitch, n8n et Figma. Fondateur de MoveIQ (SaaS coaching basketball) et Compta Concept (automatisation comptable IA).
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
                <h3 className="text-h3 text-navy mb-1">UX-UI Designer</h3>
                <p className="text-dark/70 text-lg mb-1">SGCD — Préfecture des Hauts-de-Seine</p>
                <p className="text-dark/50 text-sm mb-3">Août 2025 – Septembre 2026 · Nanterre (92)</p>
                <p className="text-dark/80">
                  Refonte de l&apos;intranet interministériel pour 400 agents. Discovery, wireframes, prototypes Figma haute fidélité, ateliers Design Thinking avec 30+ agents, intégration Joomla et Webmaster.
                </p>
              </div>

              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-h3 text-navy mb-1">Product Designer &amp; Builder No-Code</h3>
                <p className="text-dark/70 text-lg mb-1">Freelance</p>
                <p className="text-dark/50 text-sm mb-3">Janvier 2023 – Août 2025 · Paris · Remote</p>
                <p className="text-dark/80">
                  10+ projets livrés de la discovery au déploiement. Intégration d&apos;automatisations IA (n8n, Claude API) dans les workflows clients. Design systems documentés transmis aux équipes.
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
                <h3 className="text-h3 text-navy mb-1">Intégrateur Web &amp; Développeur Webflow</h3>
                <p className="text-dark/70 text-lg mb-1">Freelance</p>
                <p className="text-dark/50 text-sm mb-3">Février 2015 – Janvier 2021</p>
                <p className="text-dark/80">
                  Intégration HTML/CSS conformes W3C, accessibilité, performances web. Création de systèmes de design légers et guidelines d&apos;édition pour clients non-techniques.
                </p>
              </div>
            </div>
          </div>

          {/* Formation */}
          <div className="mt-20">
            <h2 className="text-h2 text-orange mb-8">Formation</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-h3 text-navy mb-1">Certifications Design Thinking · User Research · Design de Service · UX/UI</h3>
                <p className="text-dark/70 text-lg mb-1">DThinking Academy</p>
                <p className="text-dark/50 text-sm">2023 – 2024</p>
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
                <h3 className="text-h3 text-navy mb-1">Licence en Architecture d&apos;Intérieure</h3>
                <p className="text-dark/70 text-lg mb-1">Académie des Beaux-Arts de Kinshasa</p>
                <p className="text-dark/50 text-sm">2011</p>
              </div>
            </div>
          </div>

          {/* Compétences */}
          <div className="mt-20">
            <h2 className="text-h2 text-orange mb-8">Compétences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-h3 text-navy mb-3">Product &amp; Discovery</h3>
                <p className="text-dark/80">UX Research · Interviews · Personas · Journey Mapping · UX Audit · Problem Definition</p>
              </div>

              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-h3 text-navy mb-3">Design &amp; Prototypage</h3>
                <p className="text-dark/80">Figma (expert) · Google Stitch · Design System · Atomic Design · Tokens · Wireframes · Prototypes · WCAG 2.1 · DSFR</p>
              </div>

              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-h3 text-navy mb-3">IA &amp; Automatisation</h3>
                <p className="text-dark/80">Claude Code · Claude API · n8n · Prompt Engineering · OCR automatisé · Workflows LLM</p>
              </div>

              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-h3 text-navy mb-3">Build &amp; Intégration</h3>
                <p className="text-dark/80">Webflow (avancé) · HTML5/CSS3 · TypeScript/Next.js (notions) · Joomla · APIs REST · CMS</p>
              </div>

              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-h3 text-navy mb-3">Méthodes</h3>
                <p className="text-dark/80">Agile/Scrum · Design Thinking · Lean Startup · Co-conception · Stakeholder management</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
