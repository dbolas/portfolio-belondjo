import type { Metadata } from 'next';
import { Navigation, Footer } from '@/components/layout';
import { Button, Verbatim, ScrollAnimationInit, ImageZoom } from '@/components/ui';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'DesignLab Academy — Plateforme EdTech design numérique | Belondjo',
};

export default function DesignLabAcademyPage() {
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
            <h1 className="text-hero text-orange mb-4">DesignLab Academy — Plateforme de formation au design numérique pour les 8–18 ans</h1>
            <p className="text-xl text-dark/70 mb-8">UX Designer · Recherche utilisateur · Architecture de l&apos;information</p>

            {/* Image principale */}
            <div className="w-full h-[400px] lg:h-[600px] bg-navy/10 rounded-2xl overflow-hidden flex items-center justify-center">
              <p className="text-dark/40 text-xl font-bold">Mockup DesignLab Academy</p>
            </div>
          </div>

          {/* Infos du projet */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div>
              <h3 className="text-h3 text-navy mb-4">Rôle</h3>
              <p className="text-dark/80">UX Designer</p>
              <p className="text-dark/80">Product Designer</p>
            </div>
            <div>
              <h3 className="text-h3 text-navy mb-4">Contexte</h3>
              <p className="text-dark/80">Plateforme EdTech</p>
              <p className="text-dark/80">Formation design numérique</p>
            </div>
            <div>
              <h3 className="text-h3 text-navy mb-4">Contraintes</h3>
              <p className="text-dark/80">RGPD mineurs</p>
              <p className="text-dark/80">3 tranches d&apos;âge</p>
              <p className="text-dark/80">Pédagogie adaptée</p>
            </div>
            <div>
              <h3 className="text-h3 text-navy mb-4">Stack</h3>
              <p className="text-dark/80">Figma</p>
              <p className="text-dark/80">FigJam</p>
              <p className="text-dark/80">Design System</p>
              <p className="text-dark/80">Prototypage</p>
            </div>
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
              DesignLab Academy est une plateforme de formation au design numérique avec Figma, destinée aux jeunes
              de 8 à 18 ans. Elle répond à un gap identifié sur le marché : il n&apos;existe pas de pont entre les outils
              créatifs pour enfants (limités) et les outils professionnels (inaccessibles avant 18 ans).
            </p>
            <p className="text-lg text-dark/80 leading-relaxed mb-6">Objectifs principaux :</p>
            <ul className="space-y-4 text-lg text-dark/80 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-orange mt-1">•</span>
                <span>Rendre Figma accessible et engageant dès 8 ans</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange mt-1">•</span>
                <span>Proposer une pédagogie adaptée par tranche d&apos;âge (8–11 / 12–14 / 15–18 ans)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange mt-1">•</span>
                <span>Garantir un environnement 100% sécurisé pour les mineurs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange mt-1">•</span>
                <span>Permettre à chaque élève de construire un portfolio réel dès le premier cours</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange mt-1">•</span>
                <span>Préparer les 15–18 ans aux métiers du design et aux candidatures écoles</span>
              </li>
            </ul>
            <p className="text-lg text-dark/80 leading-relaxed font-bold">
              Marché adressable : 8,7 millions de jeunes en France. 90% des offres d&apos;emploi design mentionnent Figma.
              Moins de 1% des utilisateurs Figma ont moins de 18 ans.
            </p>
          </div>

          {/* Section 02 — Problème */}
          <div id="probleme" className="fade-in-section mb-16 scroll-mt-32">
            <h2 className="text-h2 text-orange mb-6">02. Le problème</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-6">
              La recherche utilisateur a révélé 3 problèmes distincts selon les profils :
            </p>

            <div className="space-y-6 mb-10">
              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-xl font-bold text-navy mb-3">1. Le gap entre outils enfants et outils pros</h4>
                <p className="text-dark/80 leading-relaxed">
                  Les outils créatifs pour enfants (Canva Kids, Tux Paint) sont trop limités. Les outils professionnels
                  (Figma, Adobe) semblent inaccessibles et intimidants avant 18 ans. Il manque un pont pédagogique
                  entre les deux univers.
                </p>
              </div>

              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-xl font-bold text-navy mb-3">2. Le temps d&apos;écran passif vs productif</h4>
                <p className="text-dark/80 leading-relaxed">
                  Les jeunes passent 3 à 4 heures par jour sur les réseaux sociaux en mode consommation.
                  Les parents cherchent des alternatives éducatives qui transforment ce temps en apprentissage créatif
                  et en compétences valorisables.
                </p>
              </div>

              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-xl font-bold text-navy mb-3">3. L&apos;absence de portfolio avant 18 ans</h4>
                <p className="text-dark/80 leading-relaxed">
                  Les lycéens qui candidatent en école de design arrivent sans portfolio professionnel. Les formations
                  accessibles avant 18 ans sont soit trop chères (50–80€/h en cours particuliers), soit trop généralistes
                  pour construire de vraies compétences Figma.
                </p>
              </div>
            </div>

            <div className="fade-in-section grid grid-cols-1 md:grid-cols-2 gap-6">
              <Verbatim
                citation="Mon fils veut faire du design mais je ne sais pas par où commencer. Les cours particuliers coûtent une fortune et je ne suis pas sûre que ça lui corresponde vraiment."
                auteur="Parent d'un collégien de 13 ans, entretien research"
              />
              <Verbatim
                citation="Je veux créer des interfaces comme les vraies apps que j'utilise, pas juste des dessins basiques. J'ai essayé Figma seul mais je me suis perdu."
                auteur="Nathan, lycéen de 16 ans, entretien research"
              />
            </div>
          </div>

          {/* Section 03 — Personas */}
          <div id="personas" className="fade-in-section mb-16 scroll-mt-32">
            <h2 className="text-h2 text-orange mb-4">03. Les 4 personas</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-8">
              La plateforme répond à 4 profils distincts avec des besoins radicalement différents.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-2 border-orange rounded-xl p-6">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-h3 text-navy mb-1">Lucas</h3>
                <p className="text-dark/50 text-sm mb-4">9 ans — Le petit créatif</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Besoin</p>
                    <p className="text-dark/80">S&apos;amuser en créant, être encouragé à chaque étape, voir ses créations valorisées.</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Frustration</p>
                    <p className="text-dark/80 italic">&quot;Les outils que j&apos;essaie sont soit trop simples soit trop compliqués.&quot;</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Objectif UX</p>
                    <p className="text-dark/80">Interface ultra-simple, sessions courtes (1h max), système de badges et stickers, vocabulaire accessible.</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-orange rounded-xl p-6">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-h3 text-navy mb-1">Léa</h3>
                <p className="text-dark/50 text-sm mb-4">14 ans — La créative digitale</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Besoin</p>
                    <p className="text-dark/80">Créer des visuels pour ses réseaux, se démarquer, avoir de la liberté créative.</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Frustration</p>
                    <p className="text-dark/80 italic">&quot;Je veux créer des trucs stylés pour mon Instagram mais je ne maîtrise pas les outils pro.&quot;</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Objectif UX</p>
                    <p className="text-dark/80">Projets partageables, connexion aux usages réels (TikTok, Instagram), communauté inspirante.</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-orange rounded-xl p-6">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-h3 text-navy mb-1">Nathan</h3>
                <p className="text-dark/50 text-sm mb-4">16 ans — Le futur entrepreneur</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Besoin</p>
                    <p className="text-dark/80">Construire un portfolio pro, préparer ses candidatures en école de design, apprendre le workflow industry standard.</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Frustration</p>
                    <p className="text-dark/80 italic">&quot;Je veux lancer ma marque de streetwear mais je n&apos;ai pas les compétences design pour ça.&quot;</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Objectif UX</p>
                    <p className="text-dark/80">Approche professionnelle, cas réels d&apos;entreprises, mentorat, Dev Mode et handoff.</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-orange rounded-xl p-6">
                <div className="text-4xl mb-4">👨‍👩‍👧</div>
                <h3 className="text-h3 text-navy mb-1">Les Parents</h3>
                <p className="text-dark/50 text-sm mb-4">35–50 ans — Les décideurs</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Besoin</p>
                    <p className="text-dark/80">Activité éducative différenciante, temps d&apos;écran productif, environnement sécurisé, résultats concrets mesurables.</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Frustration</p>
                    <p className="text-dark/80 italic">&quot;Je ne veux pas payer cher pour quelque chose que mon enfant va abandonner au bout de 3 semaines.&quot;</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Objectif UX</p>
                    <p className="text-dark/80">Transparence sur la progression, contrôle parental intégré, portfolio visible, garantie satisfait ou remboursé.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 04 — Processus */}
          <div id="processus" className="fade-in-section mb-16 scroll-mt-32">
            <h2 className="text-h2 text-orange mb-6">04. Processus de conception</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-8">
              La conception a été structurée autour des contraintes spécifiques des mineurs : RGPD,
              pédagogie adaptée par âge, sécurité et engagement sur la durée.
            </p>

            <div className="space-y-10">
              {/* Étape 1 */}
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">1. Research utilisateur — 3 segments d&apos;âge</h3>
                <p className="text-lg text-dark/80 leading-relaxed mb-4">
                  Interviews menées auprès de jeunes (8–11, 12–14, 15–18 ans) et de leurs parents pour comprendre
                  les motivations, les freins et les usages numériques réels de chaque tranche d&apos;âge.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold text-xl">3</span>
                    <span className="text-dark/70 text-sm ml-2">tranches d&apos;âge étudiées</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold">Parents</span>
                    <span className="text-dark/70 text-sm ml-2">interviewés séparément</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold">Usages réels</span>
                    <span className="text-dark/70 text-sm ml-2">analysés (TikTok, gaming, YouTube)</span>
                  </div>
                </div>
              </div>

              {/* Étape 2 */}
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">2. Architecture pédagogique — 27+ parcours</h3>
                <p className="text-lg text-dark/80 leading-relaxed mb-4">
                  Conception de la structure complète de l&apos;offre : 4 niveaux (Découverte, Initié, Intermédiaire, Avancé),
                  27+ parcours thématiques, système de badges par tranche d&apos;âge, et progression naturelle sur 10 ans.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold text-xl">4</span>
                    <span className="text-dark/70 text-sm ml-2">niveaux de progression</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold text-xl">27+</span>
                    <span className="text-dark/70 text-sm ml-2">parcours thématiques</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold">Badges</span>
                    <span className="text-dark/70 text-sm ml-2">par tranche d&apos;âge</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold">10 ans</span>
                    <span className="text-dark/70 text-sm ml-2">sur le même outil</span>
                  </div>
                </div>
              </div>

              {/* Étape 3 */}
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">3. Conception sous contraintes RGPD mineurs</h3>
                <p className="text-lg text-dark/80 leading-relaxed mb-4">
                  Intégration dès la conception des exigences légales pour les mineurs : consentement parental,
                  modération adaptée, zones Discord séparées par âge, pas de contact non supervisé entre enfants.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold">Conformité RGPD</span>
                    <span className="text-dark/70 text-sm ml-2">mineurs</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold">Contrôle parental</span>
                    <span className="text-dark/70 text-sm ml-2">intégré (8–14 ans)</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold">Modération</span>
                    <span className="text-dark/70 text-sm ml-2">24/7</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold">Zones séparées</span>
                    <span className="text-dark/70 text-sm ml-2">par tranche d&apos;âge</span>
                  </div>
                </div>
              </div>

              {/* Étape 4 */}
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">4. Design System — pédagogie par l&apos;exemple</h3>
                <p className="text-lg text-dark/80 leading-relaxed mb-4">
                  Création d&apos;un design system complet dans Figma qui sert à la fois d&apos;outil de conception ET de support
                  pédagogique. Les élèves apprennent Figma en utilisant la même logique de composants et tokens
                  que les professionnels.
                </p>
                <div className="bg-dark/5 rounded-xl p-12 min-h-[200px] flex items-center justify-center">
                  <p className="text-center text-dark/40 text-lg font-bold">Design System DesignLab Academy — Figma</p>
                </div>
              </div>

              {/* Étape 5 */}
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">5. Prototypes haute fidélité &amp; beta testing</h3>
                <p className="text-lg text-dark/80 leading-relaxed mb-4">
                  Tests avec 15 élèves beta (5 par tranche d&apos;âge) et leurs parents sur 9 sessions live. Itérations
                  sur le vocabulaire (trop technique pour les 8–11 ans), la durée des sessions et le système de récompenses.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold text-xl">15</span>
                    <span className="text-dark/70 text-sm ml-2">élèves beta testeurs</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold text-xl">9</span>
                    <span className="text-dark/70 text-sm ml-2">sessions de tests live</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold text-xl">3</span>
                    <span className="text-dark/70 text-sm ml-2">groupes par tranche d&apos;âge</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold">Itérations</span>
                    <span className="text-dark/70 text-sm ml-2">sur vocabulaire et durée</span>
                  </div>
                </div>

                <Verbatim
                  citation="Le mot 'composant' ça ne veut rien dire pour un enfant de 9 ans. On a dû trouver des métaphores concrètes pour chaque concept technique."
                  auteur="Insight issu des sessions de beta testing, groupe 8–11 ans"
                />
              </div>
            </div>
          </div>

          {/* Section 05 — Solution */}
          <div id="solution" className="fade-in-section mb-16 scroll-mt-32">
            <h2 className="text-h2 text-orange mb-6">05. La solution — une expérience différente selon l&apos;âge</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-8">
              Trois interfaces et trois approches pédagogiques distinctes, construites sur la même plateforme.
            </p>

            <div className="space-y-6">
              <div className="bg-navy/5 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🎨</span>
                  <h4 className="text-xl font-bold text-navy">8–11 ans — Apprendre en s&apos;amusant</h4>
                </div>
                <ul className="space-y-2 text-dark/80">
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Sessions courtes (1h max) avec pauses toutes les 20 min</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Vocabulaire simplifié et métaphores concrètes</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Système de stickers et badges à chaque étape</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Mascotte guide virtuelle</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Projets amusants : emoji, badge, carte personnalisée</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Contrôle parental total, modération 24/7</span></li>
                </ul>
              </div>

              <div className="bg-navy/5 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">📱</span>
                  <h4 className="text-xl font-bold text-navy">12–14 ans — Expression et découverte</h4>
                </div>
                <ul className="space-y-2 text-dark/80">
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Connexion aux usages réels (Instagram, TikTok, gaming)</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Liberté créative encadrée</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Peer learning et communauté modérée</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Projets partageables sur réseaux sociaux</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Gamification et défis mensuels</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Autonomie progressive</span></li>
                </ul>
              </div>

              <div className="bg-navy/5 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🚀</span>
                  <h4 className="text-xl font-bold text-navy">15–18 ans — Professionnalisation</h4>
                </div>
                <ul className="space-y-2 text-dark/80">
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Workflow 100% industry standard</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Cas réels d&apos;entreprises (Airbnb, Spotify)</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Dev Mode et handoff avec développeurs</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Mentorat individuel (2h/trimestre)</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Portfolio hébergé sur prenom.designlabacademy.fr</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Préparation candidatures écoles et jobs</span></li>
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
                  <div className="text-4xl font-bold text-orange mb-2">15</div>
                  <div className="text-dark/70">Élèves beta testeurs</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange mb-2">27+</div>
                  <div className="text-dark/70">Parcours conçus</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange mb-2">3</div>
                  <div className="text-dark/70">Tranches d&apos;âge couvertes</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange mb-2">10 ans</div>
                  <div className="text-dark/70">Parcours de progression</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-navy mb-6">Ce qui a été livré</h3>
              <ul className="space-y-3 text-lg text-dark/80">
                <li className="flex items-start gap-3">
                  <span className="text-orange mt-1">•</span>
                  <span>Architecture complète de la plateforme — 4 niveaux, 27+ parcours, système de badges</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange mt-1">•</span>
                  <span>Design System Figma complet — composants, tokens, documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange mt-1">•</span>
                  <span>Prototypes haute fidélité — 3 interfaces distinctes par tranche d&apos;âge</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange mt-1">•</span>
                  <span>Conformité RGPD mineurs intégrée dès la conception</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange mt-1">•</span>
                  <span>Système de portfolio automatique — prenom.designlabacademy.fr</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange mt-1">•</span>
                  <span>Offre pédagogique validée en beta testing</span>
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
                    <h4 className="text-xl font-bold text-dark mb-3">Concevoir pour des mineurs change tout</h4>
                    <p className="text-dark/80 leading-relaxed">
                      Chaque décision UX doit être filtrée par deux questions : est-ce adapté à cet âge ?
                      est-ce conforme au RGPD mineurs ? La sécurité et la pédagogie ne sont pas des contraintes — elles sont le produit.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-dark mb-3">Le vocabulaire est un enjeu UX majeur</h4>
                    <p className="text-dark/80 leading-relaxed">
                      Les mots &quot;composant&quot;, &quot;frame&quot;, &quot;prototype&quot; sont évidents pour un designer senior.
                      Pour un enfant de 9 ans, ils sont un mur. Trouver les bonnes métaphores par âge
                      a été le travail de design le plus subtil.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-dark mb-3">Convaincre les parents autant que les enfants</h4>
                    <p className="text-dark/80 leading-relaxed">
                      Le vrai décideur d&apos;achat c&apos;est le parent. L&apos;interface parent — dashboard de progression,
                      contrôle parental, transparence — était aussi importante que l&apos;interface élève.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pistes d'amélioration */}
              <div>
                <h3 className="text-2xl font-bold text-navy mb-6">Pistes d&apos;amélioration</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-dark mb-3">Mode hors-ligne</h4>
                    <p className="text-dark/80 leading-relaxed">
                      Permettre aux élèves de travailler sur leurs projets sans connexion,
                      avec synchronisation automatique.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-dark mb-3">Certification officielle</h4>
                    <p className="text-dark/80 leading-relaxed">
                      Développer des parcours diplômants en partenariat avec des universités
                      pour renforcer la valeur du portfolio.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-dark mb-3">Expansion European</h4>
                    <p className="text-dark/80 leading-relaxed">
                      Belgique francophone, Suisse romande et Québec comme premiers marchés d&apos;expansion naturelle.
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
                href="/projets/moveiq"
                className="project-card group bg-cream border-2 border-orange/20 rounded-2xl p-6 transition-all duration-300 hover:border-orange hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="w-full h-64 bg-orange/10 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                  <div className="text-center text-dark/30">
                    <div className="text-4xl mb-2">🏀</div>
                    <p className="text-sm font-bold">Mockup MoveIQ</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-navy text-center group-hover:text-orange transition-colors">
                  MoveIQ — Plateforme coaching basketball
                </h3>
              </Link>

              <Link
                href="/projets/intranet-interministeriel"
                className="project-card group bg-cream border-2 border-orange/20 rounded-2xl p-6 transition-all duration-300 hover:border-orange hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="w-full h-64 bg-navy/10 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                  <div className="text-center text-dark/30">
                    <div className="text-4xl mb-2">🏛️</div>
                    <p className="text-sm font-bold">Mockup Intranet</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-navy text-center group-hover:text-orange transition-colors">
                  Intranet interministériel des Hauts-de-Seine
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
