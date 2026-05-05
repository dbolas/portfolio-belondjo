import type { Metadata } from 'next';
import { Navigation, Footer } from '@/components/layout';
import { Button, Verbatim, ScrollAnimationInit, ImageZoom } from '@/components/ui';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'MoveIQ — Plateforme de suivi de progression basketball | Belondjo',
};

export default function MoveIQPage() {
  return (
    <>
      <ScrollAnimationInit />
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
            <h1 className="text-hero text-orange mb-4">MoveIQ — Plateforme de suivi de progression pour jeunes basketteurs</h1>
            <p className="text-xl text-dark/70 mb-8">Fondateur · Product Designer · Builder — De l&apos;insight terrain au produit fonctionnel</p>

            {/* Statut */}
            <p className="text-sm font-bold text-dark/50 mb-8 tracking-wide">Produit fonctionnel · 3 interfaces · Déployé sur Vercel</p>

            {/* Image principale */}
            <div className="w-full h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/images/moveiq-landing.png"
                alt="MoveIQ - Landing page"
                width={1200}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Infos du projet */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div>
              <h3 className="text-h3 text-navy mb-4">Rôle</h3>
              <p className="text-dark/80">Fondateur</p>
              <p className="text-dark/80">Product Designer</p>
              <p className="text-dark/80">Builder</p>
            </div>
            <div>
              <h3 className="text-h3 text-navy mb-4">Contexte</h3>
              <p className="text-dark/80">SaaS B2C</p>
              <p className="text-dark/80">Sport &amp; Gamification</p>
            </div>
            <div>
              <h3 className="text-h3 text-navy mb-4">Durée</h3>
              <p className="text-dark/80">2023 – en cours</p>
              <p className="text-dark/80">Prototype avancé · Design system complet · En phase de finalisation</p>
            </div>
            <div>
              <h3 className="text-h3 text-navy mb-4">Stack</h3>
              <p className="text-dark/80">Figma</p>
              <p className="text-dark/80">TypeScript / Next.js</p>
              <p className="text-dark/80">Claude Code</p>
              <p className="text-dark/80">RGPD mineurs</p>
            </div>
          </div>

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="https://www.figma.com/proto/Zz2HRjszmaB01WErIyHsVV/MoveIQ-Basket?node-id=2-165&t=U4mwBVYwHHCCIEge-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A165"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">Voir le prototype Figma →</Button>
            </a>
            <a
              href="https://moveiq-basket.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary">Voir le produit en ligne →</Button>
            </a>
          </div>

          {/* Sommaire de navigation */}
          <nav className="mb-16 bg-cream/80 border border-orange/20 rounded-2xl p-6 md:p-8 sticky top-24 z-10" aria-label="Navigation de l'étude de cas">
            <ul className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-6 justify-center items-start md:items-center text-sm md:text-base">
              <li><a href="#contexte" className="text-dark hover:text-orange transition-colors font-bold">Contexte</a></li>
              <li className="hidden md:block text-dark/30">|</li>
              <li><a href="#probleme" className="text-dark hover:text-orange transition-colors font-bold">Problème</a></li>
              <li className="hidden md:block text-dark/30">|</li>
              <li><a href="#personas" className="text-dark hover:text-orange transition-colors font-bold">Personas</a></li>
              <li className="hidden md:block text-dark/30">|</li>
              <li><a href="#processus" className="text-dark hover:text-orange transition-colors font-bold">Processus</a></li>
              <li className="hidden md:block text-dark/30">|</li>
              <li><a href="#solution" className="text-dark hover:text-orange transition-colors font-bold">Solution</a></li>
              <li className="hidden md:block text-dark/30">|</li>
              <li><a href="#resultats" className="text-dark hover:text-orange transition-colors font-bold">Résultats</a></li>
            </ul>
          </nav>

          {/* Section 01 — Contexte */}
          <div id="contexte" className="fade-in-section mb-16 bg-orange/5 rounded-2xl p-8 md:p-12 scroll-mt-32">
            <h2 className="text-h2 text-orange mb-6">Le produit et ses objectifs</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-6">
              MoveIQ est une plateforme SaaS de suivi de progression pour jeunes basketteurs de 6 à 18 ans. Elle s&apos;adresse
              à trois utilisateurs distincts — le joueur, le coach et le parent — avec une interface dédiée à chacun.
            </p>
            <p className="text-lg text-dark/80 leading-relaxed mb-6">Objectifs principaux :</p>
            <ul className="space-y-4 text-lg text-dark/80 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-orange mt-1">•</span>
                <span>Permettre aux coaches d&apos;évaluer et suivre chaque joueur sur 8 dimensions de jeu</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange mt-1">•</span>
                <span>Donner aux joueurs une vision gamifiée de leur progression</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange mt-1">•</span>
                <span>Fournir aux parents un feedback personnalisé et régulier</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange mt-1">•</span>
                <span>Générer des recommandations automatiques par joueur grâce à l&apos;IA</span>
              </li>
            </ul>
            <p className="text-lg text-dark/80 leading-relaxed font-bold">
              Produit conçu, designé et développé en solo via Claude Code.
            </p>
          </div>

          {/* Section 02 — Problème */}
          <div id="probleme" className="fade-in-section mb-16 scroll-mt-32">
            <h2 className="text-h2 text-orange mb-6">02. Le problème</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-6">
              20+ interviews menées auprès de coaches et parents ont révélé 3 frustrations majeures :
            </p>

            <div className="space-y-6 mb-10">
              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-xl font-bold text-navy mb-3">1. Absence d&apos;outil de suivi standardisé</h4>
                <p className="text-dark/80 leading-relaxed">
                  Les coaches s&apos;appuient sur des carnets papier ou des tableurs. Il n&apos;existe pas d&apos;outil numérique adapté
                  au basketball jeunes qui permette de suivre la progression individuelle dans le temps sur des critères objectifs.
                </p>
              </div>

              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-xl font-bold text-navy mb-3">2. Difficulté à motiver les jeunes joueurs</h4>
                <p className="text-dark/80 leading-relaxed">
                  Les joueurs (6–18 ans) ne voient pas leur progression et perdent rapidement la motivation.
                  Sans repère visuel ni récompense, l&apos;entraînement manque de sens pour eux.
                </p>
              </div>

              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-xl font-bold text-navy mb-3">3. Manque de feedback personnalisé pour les parents</h4>
                <p className="text-dark/80 leading-relaxed">
                  Les parents investissent du temps et de l&apos;argent dans le basketball de leur enfant mais reçoivent peu
                  ou pas de retours sur ce que leur enfant apprend et comment il progresse.
                </p>
              </div>
            </div>

            <div className="fade-in-section grid grid-cols-1 md:grid-cols-2 gap-6">
              <Verbatim
                citation="Je note sur un carnet, mais je perds tout en fin de saison. Je n'ai aucun historique pour comparer les joueurs d'une année sur l'autre."
                auteur="Coach club basketball, entretien terrain"
              />
              <Verbatim
                citation="Mon fils s'entraîne trois fois par semaine depuis deux ans. Je ne sais pas vraiment s'il progresse ou pas. Le coach n'a pas le temps de nous faire un retour individuel."
                auteur="Parent d'un joueur de 12 ans, entretien terrain"
              />
            </div>
          </div>

          {/* Section 03 — Personas */}
          <div id="personas" className="fade-in-section mb-16 scroll-mt-32">
            <h2 className="text-h2 text-orange mb-8">03. Les 3 personas</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-2 border-orange rounded-xl p-6">
                <div className="text-4xl mb-4">🏀</div>
                <h3 className="text-h3 text-navy mb-1">Le Joueur</h3>
                <p className="text-dark/50 text-sm mb-4">6 à 18 ans</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Besoin</p>
                    <p className="text-dark/80">Voir sa progression, être récompensé, comprendre où il en est.</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Frustration</p>
                    <p className="text-dark/80 italic">&quot;Je sais pas si je m&apos;améliore.&quot;</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Objectif UX</p>
                    <p className="text-dark/80">Dashboard gamifié avec niveaux, badges et progression visuelle.</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-orange rounded-xl p-6">
                <div className="text-4xl mb-4">🧑‍🏫</div>
                <h3 className="text-h3 text-navy mb-1">Le Coach</h3>
                <p className="text-dark/50 text-sm mb-4">Éducateur sportif</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Besoin</p>
                    <p className="text-dark/80">Évaluer rapidement, comparer les joueurs, suivre les progrès dans le temps.</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Frustration</p>
                    <p className="text-dark/80 italic">&quot;Je n&apos;ai pas le temps de noter tout ça pendant l&apos;entraînement.&quot;</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Objectif UX</p>
                    <p className="text-dark/80">Interface d&apos;évaluation rapide, moins de 3 minutes par joueur.</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-orange rounded-xl p-6">
                <div className="text-4xl mb-4">👨‍👩‍👧</div>
                <h3 className="text-h3 text-navy mb-1">Le Parent</h3>
                <p className="text-dark/50 text-sm mb-4">Décideur et financeur</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Besoin</p>
                    <p className="text-dark/80">Comprendre la progression de son enfant, être rassuré sur l&apos;investissement.</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Frustration</p>
                    <p className="text-dark/80 italic">&quot;Je ne sais jamais vraiment ce que mon fils apprend.&quot;</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Objectif UX</p>
                    <p className="text-dark/80">Rapport mensuel automatique, lisible sans vocabulaire technique.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 04 — Processus */}
          <div id="processus" className="fade-in-section mb-16 scroll-mt-32">
            <h2 className="text-h2 text-orange mb-6">04. Processus de conception</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-8">
              J&apos;ai structuré le projet en 6 phases, de la research terrain jusqu&apos;au développement avec Claude Code.
            </p>

            <div className="space-y-10">
              {/* Étape 1 */}
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">1. Research terrain — 20+ interviews</h3>
                <p className="text-lg text-dark/80 leading-relaxed mb-4">
                  Interviews semi-structurées avec coaches et parents avant de dessiner quoi que ce soit.
                  Objectif : valider les problèmes réels, pas les hypothèses.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold text-xl">20+</span>
                    <span className="text-dark/70 text-sm ml-2">interviews coaches &amp; parents</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold text-xl">3</span>
                    <span className="text-dark/70 text-sm ml-2">insights clés retenus</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold text-xl">0</span>
                    <span className="text-dark/70 text-sm ml-2">wireframe avant la research</span>
                  </div>
                </div>
              </div>

              {/* Étape 2 */}
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">2. Architecture produit — PlayerPath</h3>
                <p className="text-lg text-dark/80 leading-relaxed mb-4">
                  Conception du système d&apos;évaluation central : 8 dimensions de jeu, 7 niveaux de progression par dimension,
                  moteur de recommandations personnalisées.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold text-xl">8</span>
                    <span className="text-dark/70 text-sm ml-2">dimensions d&apos;évaluation</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold text-xl">7</span>
                    <span className="text-dark/70 text-sm ml-2">niveaux de progression</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold text-xl">IA</span>
                    <span className="text-dark/70 text-sm ml-2">Recommandations par joueur</span>
                  </div>
                </div>
              </div>

              {/* Étape 3 */}
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">3. Wireframes basse fidélité</h3>
                <p className="text-lg text-dark/80 leading-relaxed mb-4">
                  Exploration rapide des 3 parcours utilisateurs sur papier puis Figma. Priorité : le parcours coach
                  (évaluation en moins de 3 minutes) et le dashboard joueur (progression visible en un coup d&apos;œil).
                </p>
                <div className="bg-dark/5 rounded-xl p-12 min-h-[200px] flex items-center justify-center">
                  <p className="text-center text-dark/40 text-lg font-bold">Wireframes basse fidélité — Figma</p>
                </div>
              </div>

              {/* Étape 4 */}
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">4. Design System Figma</h3>
                <p className="text-lg text-dark/80 leading-relaxed mb-4">
                  Composants atomiques, tokens de design, documentation développeurs. Objectif : système directement
                  exploitable par une équipe future sans briefing supplémentaire.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold">Composants atomiques</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold">Tokens de design</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold">Documentation développeurs</span>
                  </div>
                </div>
              </div>

              {/* Étape 5 */}
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">5. Prototypes haute fidélité &amp; tests</h3>
                <p className="text-lg text-dark/80 leading-relaxed mb-4">
                  Tests avec 4 coaches sur prototypes Figma interactifs. Résultat : 2 itérations majeures sur le flux
                  d&apos;évaluation pour réduire le temps de saisie à moins de 3 minutes par joueur.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold text-xl">4</span>
                    <span className="text-dark/70 text-sm ml-2">coaches testeurs</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold text-xl">2</span>
                    <span className="text-dark/70 text-sm ml-2">itérations majeures</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold">Objectif : -3 min</span>
                    <span className="text-dark/70 text-sm ml-2">par évaluation</span>
                  </div>
                </div>

                <Verbatim
                  citation="Le système de notation sur 8 dimensions, c'est bien, mais je veux pouvoir évaluer toute l'équipe en une seule session, pas joueur par joueur."
                  auteur="Coach testeur, session de test prototype"
                />
              </div>

              {/* Étape 6 */}
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">6. Développement avec Claude Code</h3>
                <p className="text-lg text-dark/80 leading-relaxed mb-4">
                  Implémentation TypeScript/Next.js via Claude Code : diagnostic automatisé, gamification, dashboard temps réel,
                  conformité RGPD mineurs. Développé en solo via Claude Code.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold">TypeScript / Next.js</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold">Claude Code</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold">RGPD mineurs</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold">Développé en solo via Claude Code</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section — Aperçu du produit */}
          <div className="fade-in-section mb-16">
            <h2 className="text-h2 text-orange mb-10">Aperçu du produit — interfaces réelles</h2>

            {/* Encart prototype Figma */}
            <div className="bg-orange/5 rounded-xl p-6 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-navy mb-2">Prototype interactif Figma</h3>
                <p className="text-dark/70">Explorez le prototype complet avec toutes les interactions — parcours joueur, coach et parent.</p>
              </div>
              <a
                href="https://www.figma.com/proto/Zz2HRjszmaB01WErIyHsVV/MoveIQ-Basket?node-id=2-165&t=U4mwBVYwHHCCIEge-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A165"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
              >
                <Button>Voir le prototype →</Button>
              </a>
            </div>

            {/* Groupe 1 — Interface Joueur */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-navy mb-6">Interface Joueur</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { src: '/images/moveiq-dashboard-joueur.png', alt: 'Dashboard joueur', caption: 'Dashboard joueur — score et progression' },
                  { src: '/images/moveiq-diagnostic-choix.png', alt: 'Choix du mode diagnostic', caption: 'Choix du mode diagnostic' },
                  { src: '/images/moveiq-diagnostic-question.png', alt: 'Évaluation par dimension', caption: 'Évaluation par dimension' },
                  { src: '/images/moveiq-diagnostic-resultat.png', alt: 'Résultats — profil personnalisé', caption: 'Résultats — profil personnalisé' },
                  { src: '/images/moveiq-missions.png', alt: 'Mes missions', caption: 'Mes missions — suivi hebdomadaire' },
                  { src: '/images/moveiq-progression.png', alt: 'Ma progression', caption: 'Ma progression — historique et badges' },
                ].map((img) => (
                  <div key={img.src}>
                    <div className="bg-dark/5 rounded-xl overflow-hidden">
                      <ImageZoom src={img.src} alt={img.alt} width={800} height={600} className="w-full h-auto" />
                    </div>
                    <p className="text-sm text-dark/60 mt-2 text-center">{img.caption}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Groupe 2 — Interface Coach */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-navy mb-6">Interface Coach</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { src: '/images/moveiq-dashboard-coach.png', alt: 'Dashboard coach', caption: 'Dashboard coach — vue équipe' },
                  { src: '/images/moveiq-equipe.png', alt: 'Mon équipe', caption: 'Mon équipe — profils et diagnostics' },
                  { src: '/images/moveiq-joueur-detail.png', alt: 'Vue joueur', caption: 'Vue joueur — profil détaillé' },
                  { src: '/images/moveiq-invitations.png', alt: 'Gestion des invitations', caption: 'Gestion des invitations' },
                ].map((img) => (
                  <div key={img.src}>
                    <div className="bg-dark/5 rounded-xl overflow-hidden">
                      <ImageZoom src={img.src} alt={img.alt} width={800} height={600} className="w-full h-auto" />
                    </div>
                    <p className="text-sm text-dark/60 mt-2 text-center">{img.caption}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Groupe 3 — Interface Parent */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-navy mb-6">Interface Parent</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { src: '/images/moveiq-dashboard-parent.png', alt: 'Vue parent', caption: 'Vue parent — progression de l\'enfant' },
                  { src: '/images/moveiq-consentement.png', alt: 'Consentement parental RGPD', caption: 'Consentement parental RGPD' },
                ].map((img) => (
                  <div key={img.src}>
                    <div className="bg-dark/5 rounded-xl overflow-hidden">
                      <ImageZoom src={img.src} alt={img.alt} width={800} height={600} className="w-full h-auto" />
                    </div>
                    <p className="text-sm text-dark/60 mt-2 text-center">{img.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 05 — Solution */}
          <div id="solution" className="fade-in-section mb-16 scroll-mt-32">
            <h2 className="text-h2 text-orange mb-6">05. La solution — 3 interfaces, 3 réalités</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-8">
              Trois interfaces pensées pour trois réalités différentes, alimentées par la même base de données de progression.
            </p>

            <div className="space-y-6">
              <div className="bg-navy/5 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🧑‍🏫</span>
                  <h4 className="text-xl font-bold text-navy">Interface Coach</h4>
                </div>
                <ul className="space-y-2 text-dark/80">
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Évaluation rapide par joueur sur les 8 dimensions PlayerPath</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Vue d&apos;ensemble de l&apos;équipe avec comparaison</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Génération automatique de recommandations personnalisées</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Historique de progression saison par saison</span></li>
                </ul>
              </div>

              <div className="bg-navy/5 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🏀</span>
                  <h4 className="text-xl font-bold text-navy">Interface Joueur</h4>
                </div>
                <ul className="space-y-2 text-dark/80">
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Dashboard gamifié : niveau actuel, XP, progression par dimension</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Récompenses visuelles à chaque progression débloquée</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Prochaine étape clairement identifiée</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Conformité RGPD pour les mineurs</span></li>
                </ul>
              </div>

              <div className="bg-navy/5 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">👨‍👩‍👧</span>
                  <h4 className="text-xl font-bold text-navy">Interface Parent</h4>
                </div>
                <ul className="space-y-2 text-dark/80">
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Rapport mensuel automatique généré par l&apos;IA</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Ce que mon enfant a travaillé ce mois-ci</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Points forts et axes de progression</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Lisible sans aucun vocabulaire technique basketball</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 06 — Résultats */}
          <div id="resultats" className="fade-in-section mb-16 scroll-mt-32">
            <div className="bg-orange/5 rounded-2xl p-8 md:p-12">
              <h2 className="text-h2 text-orange mb-8">06. Résultats</h2>

              <div className="fade-in-section grid grid-cols-2 md:grid-cols-4 gap-8 bg-cream rounded-2xl p-8 mb-10">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange mb-2">3</div>
                  <div className="text-dark/70">Interfaces déployées</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange mb-2">20+</div>
                  <div className="text-dark/70">Interviews terrain</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange mb-2">Solo</div>
                  <div className="text-dark/70">Développé via Claude Code</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange mb-2">3</div>
                  <div className="text-dark/70">Personas couverts</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-navy mb-6">Ce qui a été livré</h3>
              <ul className="space-y-3 text-lg text-dark/80">
                <li className="flex items-start gap-3">
                  <span className="text-orange mt-1">•</span>
                  <span>Prototype fonctionnel testé lors d&apos;interviews utilisateurs terrain</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange mt-1">•</span>
                  <span>Design system complet Figma — composants atomiques, tokens, documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange mt-1">•</span>
                  <span>Architecture PlayerPath — 8 dimensions, 7 niveaux, moteur de recommandations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange mt-1">•</span>
                  <span>Codebase TypeScript/Next.js via Claude Code</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange mt-1">•</span>
                  <span>Conformité RGPD mineurs intégrée dès la conception</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange mt-1">•</span>
                  <span>Application déployée sur Vercel — authentification Google/Apple, RGPD mineurs, 3 interfaces distinctes joueur · coach · parent</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section — Apprentissages */}
          <div id="apprentissages" className="fade-in-section mb-16 bg-orange/5 rounded-2xl p-8 md:p-12 scroll-mt-32">
            <h2 className="text-h2 text-orange mb-8">Ce que ce projet m&apos;a appris</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Apprentissages */}
              <div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-dark mb-3">Concevoir pour 3 personas simultanément</h4>
                    <p className="text-dark/80 leading-relaxed">
                      La tension la plus forte : ce qui est rapide pour le coach (évaluation en masse) est moins personnalisé
                      pour le parent. La solution a été de séparer les interfaces tout en partageant la même base de données.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-dark mb-3">Claude Code change le métier de designer</h4>
                    <p className="text-dark/80 leading-relaxed">
                      Implémenter directement les features que je conçois élimine les frictions entre design et delivery.
                      Je teste en conditions réelles, pas sur des prototypes statiques.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-dark mb-3">La gamification doit être méritée</h4>
                    <p className="text-dark/80 leading-relaxed">
                      Les premiers tests ont montré que les joueurs ignoraient les badges trop faciles à obtenir.
                      La progression doit être visible mais exigeante pour rester motivante.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pistes d'amélioration */}
              <div>
                <h3 className="text-2xl font-bold text-navy mb-6">Pistes d&apos;amélioration</h3>
                <p className="text-dark/80 leading-relaxed mb-6">Si je devais aller plus loin :</p>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-dark mb-3">Vidéo intégrée</h4>
                    <p className="text-dark/80 leading-relaxed">
                      Permettre aux coaches de filmer des gestes techniques directement dans l&apos;app
                      pour illustrer les recommandations.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-dark mb-3">Mode compétition</h4>
                    <p className="text-dark/80 leading-relaxed">
                      Classements entre joueurs du même club pour stimuler l&apos;émulation collective.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-dark mb-3">Analytics coach avancés</h4>
                    <p className="text-dark/80 leading-relaxed">
                      Tableaux de bord agrégés pour suivre la progression collective de l&apos;équipe sur une saison.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Autres projets */}
          <section className="fade-in-section mt-24 pt-12 border-t border-dark/10">
            <h2 className="text-h2 text-orange mb-12 text-center">Lisez d&apos;autres études de cas que j&apos;ai réalisées</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Link
                href="/projets/intranet-interministeriel"
                className="project-card group bg-cream border-2 border-orange/20 rounded-2xl p-6 transition-all duration-300 hover:border-orange hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="w-full h-64 bg-navy/10 rounded-xl mb-6 overflow-hidden">
                  <Image
                    src="/images/mockup-intranet-laptop.png"
                    alt="Intranet interministériel des Hauts-de-Seine"
                    width={1200}
                    height={900}
                    className="w-full h-full object-cover scale-125"
                  />
                </div>
                <h3 className="text-2xl font-bold text-navy text-center group-hover:text-orange transition-colors">
                  Intranet interministériel des Hauts-de-Seine
                </h3>
              </Link>

              <Link
                href="/projets/generateur-factures"
                className="project-card group bg-cream border-2 border-orange/20 rounded-2xl p-6 transition-all duration-300 hover:border-orange hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="w-full h-64 bg-navy/10 rounded-xl mb-6 overflow-hidden p-3 flex items-center justify-center">
                  <Image
                    src="/images/generateur-factures/mockup-desktop.png"
                    alt="Générateur de Factures IA — application web en production sur MacBook"
                    width={1600}
                    height={1000}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-navy text-center group-hover:text-orange transition-colors">
                  Générateur de Factures IA
                </h3>
              </Link>
            </div>

            {/* Bouton retour */}
            <div className="flex justify-center">
              <Link href="/">
                <Button size="lg">Retour à tous les projets</Button>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
