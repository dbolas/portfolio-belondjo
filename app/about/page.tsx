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
                  alt="Belondjo Bolankoko, Product Designer UX/UI"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Présentation */}
            <div className="space-y-6">
              <h2 className="text-h2 text-orange">À propos de moi</h2>
              <p className="text-xl text-dark/90 leading-relaxed">
                Je suis Product Designer depuis cinq ans, après une première carrière de scénographe qui m&apos;a appris à penser l&apos;espace avant de penser l&apos;interface.
              </p>
              <p className="text-xl text-dark/90 leading-relaxed">
                Mon dernier chantier est la refonte de l&apos;intranet interministériel de la Préfecture des Hauts-de-Seine, pour 400 agents et 11 services de l&apos;État. L&apos;accès aux documents courants est passé de cinq ou sept clics à deux ou trois, et 76 % des agents jugent aujourd&apos;hui l&apos;outil plus simple. J&apos;y ai créé le design system, rendu l&apos;intranet et l&apos;extranet conformes au RGAA et formé les équipes qui publient.
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
                <h3 className="text-h3 text-navy mb-1">Projets personnels</h3>
                <p className="text-dark/70 text-lg mb-1">MoveIQ (depuis janvier 2025) · Générateur de factures (depuis janvier 2026)</p>
                <p className="text-dark/50 text-sm mb-3">Strasbourg (67)</p>
                <p className="text-dark/80">
                  Conception et mise en production de deux plateformes web de bout en bout — discovery, design system, suivi des usages et itérations. Next.js, Supabase, Claude Code.
                </p>
              </div>

              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-h3 text-navy mb-1">Product Designer (UX/UI)</h3>
                <p className="text-dark/70 text-lg mb-1">Préfecture des Hauts-de-Seine</p>
                <p className="text-dark/50 text-sm mb-3">Août 2024 – Septembre 2026 · Nanterre (92), CDD</p>
                <p className="text-dark/80">
                  Refonte de l&apos;intranet utilisé par 400 agents de 11 services de l&apos;État. Plus de 30 entretiens avec les agents, 6 ateliers de conception, design system créé sur Figma et documenté pour les développeurs, intranet et extranet rendus conformes au RGAA. Résultat : un document se trouve en 2 à 3 clics au lieu de 5 à 7, et 76 % des agents trouvent l&apos;outil plus simple.
                </p>
              </div>

              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-h3 text-navy mb-1">Product Designer indépendant</h3>
                <p className="text-dark/70 text-lg mb-1">Client ICorp</p>
                <p className="text-dark/50 text-sm mb-3">Janvier 2023 – Juillet 2024 · Kinshasa (RD Congo), en télétravail depuis la France</p>
                <p className="text-dark/80">
                  Portail national des démarches administratives de la République démocratique du Congo, base de leur dématérialisation. Conception des fiches démarches : procédure, pièces à fournir, coûts, délais et services compétents. Parcours pensés pour éviter aux citoyens des déplacements inutiles et préparer la mise en ligne des procédures. Contenus validés avec les administrations concernées pour garantir une information fiable.
                </p>
              </div>

              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-h3 text-navy mb-1">UX Researcher</h3>
                <p className="text-dark/70 text-lg mb-1">Musée royal de l&apos;Afrique centrale</p>
                <p className="text-dark/50 text-sm mb-3">Octobre – Décembre 2023 · Tervuren, Belgique</p>
                <p className="text-dark/80">
                  Research complète pour une exposition interactive dédiée à la diaspora africaine. Interviews, personas, parcours visiteurs, dispositifs numériques de médiation culturelle.
                </p>
              </div>

              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-h3 text-navy mb-1">Intégrateur web indépendant</h3>
                <p className="text-dark/70 text-lg mb-1">Clients divers</p>
                <p className="text-dark/50 text-sm mb-3">Février 2019 – Janvier 2021 · Strasbourg (67)</p>
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
                <p className="text-dark/50 text-sm">2023 et 2024</p>
              </div>

              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-h3 text-navy mb-1">Certification Figma</h3>
                <p className="text-dark/70 text-lg mb-1">The Cacatoès Theory</p>
                <p className="text-dark/50 text-sm">2024</p>
              </div>

              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-h3 text-navy mb-1">Formation Développement &amp; Intégration Web et Mobile</h3>
                <p className="text-dark/70 text-lg mb-1">3W Academy, Strasbourg</p>
                <p className="text-dark/50 text-sm">2019</p>
              </div>

              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-h3 text-navy mb-1">DNSEP Scénographie · Bac+5, grade Master</h3>
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
                <h3 className="text-h3 text-navy mb-3">Ateliers &amp; équipe</h3>
                <p className="text-dark/80">Design Thinking · Co-conception · Méthodes agiles · Scrum</p>
              </div>

              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-h3 text-navy mb-3">Outils</h3>
                <p className="text-dark/80">Figma · FigJam · Miro · Maze · Notion · Jira · Illustrator · Photoshop · HTML / CSS</p>
              </div>

              <div className="border-l-4 border-orange pl-6">
                <h3 className="text-h3 text-navy mb-3">IA générative</h3>
                <p className="text-dark/80">Claude Design · Stitch · Midjourney · Nano Banana · Google Flow</p>
              </div>
            </div>
          </div>

          {/* Langues */}
          <div className="mt-20">
            <h2 className="text-h2 text-orange mb-8">Langues</h2>
            <div className="border-l-4 border-orange pl-6">
              <p className="text-dark/80">Français et lingala, langues maternelles · Anglais, niveau intermédiaire (B1)</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
