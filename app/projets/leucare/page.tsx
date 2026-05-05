import type { Metadata } from 'next';
import { Navigation, Footer } from '@/components/layout';
import { Button, Verbatim, ScrollAnimationInit } from '@/components/ui';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'LeuCare — Application mobile leucémie Kinshasa | Belondjo',
};

export default function LeuCarePage() {
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
            <h1 className="text-hero text-orange mb-4">LeuCare — Application mobile de suivi pour enfants atteints de leucémie</h1>
            <p className="text-xl text-dark/70 mb-8">Product Designer · Conception UX from scratch · Application mobile · Santé · Kinshasa, RDC</p>

            {/* Triptyque hero — splash / dashboard / journal-douleurs alignés au centre */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mt-8">
              <div className="flex justify-center">
                <Image
                  src="/images/leucare/splash.png"
                  alt="LeuCare — écran d'accueil de l'application"
                  width={394}
                  height={702}
                  quality={95}
                  className="w-full h-auto max-w-[260px]"
                />
              </div>
              <div className="flex justify-center md:-mt-4">
                <Image
                  src="/images/leucare/dashboard.png"
                  alt="LeuCare — tableau de bord centre de ressources"
                  width={394}
                  height={702}
                  quality={95}
                  priority
                  className="w-full h-auto max-w-[300px]"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/leucare/journal-douleurs.png"
                  alt="LeuCare — journal des douleurs avec body map interactif"
                  width={394}
                  height={702}
                  quality={95}
                  className="w-full h-auto max-w-[260px]"
                />
              </div>
            </div>
          </div>

          {/* Infos du projet */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div>
              <h3 className="text-h3 text-navy mb-4">Rôle</h3>
              <p className="text-dark/80">Product Designer (solo)</p>
            </div>
            <div>
              <h3 className="text-h3 text-navy mb-4">Contexte</h3>
              <p className="text-dark/80">Application mobile santé</p>
              <p className="text-dark/80">Enfants leucémiques et familles</p>
              <p className="text-dark/80">Kinshasa RDC</p>
            </div>
            <div>
              <h3 className="text-h3 text-navy mb-4">Contraintes</h3>
              <p className="text-dark/80">Connectivité limitée</p>
              <p className="text-dark/80">Accessibilité</p>
              <p className="text-dark/80">4 profils utilisateurs</p>
            </div>
            <div>
              <h3 className="text-h3 text-navy mb-4">Stack</h3>
              <p className="text-dark/80">Google Stitch</p>
              <p className="text-dark/80">Figma</p>
              <p className="text-dark/80">Design System</p>
              <p className="text-dark/80">Mobile-first</p>
            </div>
          </div>

          {/* Section — Prototype interactif */}
          <div className="mb-16">
            <h2 className="text-h2 text-orange mb-6">
              Prototype interactif
            </h2>
            <p className="text-lg text-dark/80 mb-6">
              Explorez le prototype complet — naviguez
              entre les écrans, testez le mode hors-ligne,
              changez la langue (FR / Lingala / Swahili).
            </p>
            <div
              className="rounded-2xl overflow-hidden border-2 border-orange/20 shadow-xl"
              style={{height: '860px'}}>
              <iframe
                src="/leucare-prototype/index.html"
                className="w-full h-full border-0"
                title="Prototype LeuCare interactif"
                allow="fullscreen"
              />
            </div>
            <p className="text-sm text-dark/50 mt-3 text-center">
              Prototype haute fidélité —
              conçu avec Claude Design · Anthropic
            </p>
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6 items-start">
              <div className="lg:col-span-2 space-y-6">
                <p className="text-lg text-dark/80 leading-relaxed">
                  LeuCare est une application mobile de suivi personnalisé pour les enfants atteints de leucémie
                  et leurs familles à Kinshasa, République Démocratique du Congo. La leucémie est l&apos;un des cancers
                  pédiatriques les plus fréquents en RDC, avec un accès aux soins spécialisés très limité en dehors
                  de quelques établissements comme l&apos;Hôpital Général de Mama Yemo.
                </p>
                <p className="text-lg text-dark/80 leading-relaxed">
                  L&apos;application vise à combler le manque d&apos;outils numériques adaptés au contexte congolais —
                  où la connectivité est intermittente, les smartphones sont majoritairement des appareils
                  entrée de gamme, et les familles ont besoin d&apos;un soutien continu entre les consultations médicales.
                </p>
              </div>
              <div className="lg:col-span-1 flex justify-center">
                <Image
                  src="/images/leucare/splash.png"
                  alt="LeuCare — écran de lancement de l'application"
                  width={394}
                  height={702}
                  quality={95}
                  className="w-full h-auto max-w-[240px]"
                />
              </div>
            </div>
            <p className="text-lg text-dark/80 leading-relaxed mb-6">Objectifs principaux :</p>
            <ul className="space-y-4 text-lg text-dark/80 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-orange mt-1">•</span>
                <span>Permettre aux familles de suivre les traitements et les épisodes douloureux de leur enfant au quotidien</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange mt-1">•</span>
                <span>Donner accès à des ressources médicales fiables en français, adaptées au contexte congolais</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange mt-1">•</span>
                <span>Créer une communauté d&apos;entraide entre patients et familles</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange mt-1">•</span>
                <span>Faciliter la communication avec les professionnels de santé</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange mt-1">•</span>
                <span>Fonctionner de manière fiable avec une connectivité limitée ou intermittente</span>
              </li>
            </ul>
            <p className="text-lg text-dark/80 leading-relaxed font-bold">
              Contexte de conception : Kinshasa, RDC — connectivité intermittente, smartphones entrée de gamme, français comme langue principale.
            </p>
          </div>

          {/* Section 02 — Problème */}
          <div id="probleme" className="fade-in-section mb-16 scroll-mt-32">
            <h2 className="text-h2 text-orange mb-6">02. Le problème</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-6">
              La prise en charge de la leucémie pédiatrique en RDC génère des défis quotidiens complexes
              pour les familles, aggravés par le manque d&apos;outils numériques adaptés au contexte local.
            </p>

            <div className="space-y-6 mb-10">
              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-xl font-bold text-navy mb-3">1. Suivi du traitement difficile à maintenir</h4>
                <p className="text-dark/80 leading-relaxed">
                  Les enfants leucémiques suivent des protocoles de traitement complexes — plusieurs médicaments
                  par jour à des horaires précis pendant des mois. Sans outil de suivi structuré, les oublis
                  et les erreurs de dosage sont fréquents, avec des conséquences médicales graves.
                </p>
              </div>

              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-xl font-bold text-navy mb-3">2. Isolement des familles</h4>
                <p className="text-dark/80 leading-relaxed">
                  Les familles d&apos;enfants leucémiques se retrouvent souvent isolées, sans réseau de soutien
                  structuré. Le manque d&apos;informations fiables en français sur la maladie génère de l&apos;anxiété
                  et des comportements à risque — recours à des traitements traditionnels, abandon du protocole médical.
                </p>
              </div>

              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-xl font-bold text-navy mb-3">3. Connectivité et accessibilité numérique</h4>
                <p className="text-dark/80 leading-relaxed">
                  En RDC, la connexion Internet est intermittente et coûteuse. La majorité des familles ciblées
                  utilisent des smartphones Android entrée de gamme. Une application nécessitant une connexion
                  permanente ou un appareil performant serait inutilisable pour la population cible.
                </p>
              </div>
            </div>

            <div className="fade-in-section grid grid-cols-1 md:grid-cols-2 gap-6">
              <Verbatim
                citation="Je note les médicaments de mon fils sur un carnet, mais j'oublie parfois les horaires. Le médecin dit que c'est important de ne pas rater une prise, mais c'est difficile à gérer seule."
                auteur="Maman d'un enfant en traitement, insight research Kinshasa"
              />
              <Verbatim
                citation="Entre deux consultations à Mama Yemo, on est livrés à nous-mêmes. On ne sait pas si les symptômes sont normaux ou dangereux. On a besoin de quelqu'un à qui poser des questions."
                auteur="Parent d'un enfant leucémique, insight research Kinshasa"
              />
            </div>
          </div>

          {/* Section 03 — Personas */}
          <div id="personas" className="fade-in-section mb-16 scroll-mt-32">
            <h2 className="text-h2 text-orange mb-8">03. Les 4 personas</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-2 border-orange rounded-xl p-6">
                <div className="text-4xl mb-4">🧒</div>
                <h3 className="text-h3 text-navy mb-1">L&apos;Enfant malade</h3>
                <p className="text-dark/50 text-sm mb-4">6 à 16 ans · Patient</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Besoin</p>
                    <p className="text-dark/80">Comprendre sa maladie simplement, ne pas se sentir différent, avoir des activités adaptées.</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Frustration</p>
                    <p className="text-dark/80 italic">&quot;Je ne comprends pas pourquoi je dois prendre autant de médicaments et pourquoi je me sens fatigué tout le temps.&quot;</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Objectif UX</p>
                    <p className="text-dark/80">Interface ludique, langage accessible, jeux interactifs adaptés, encouragements positifs.</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-orange rounded-xl p-6">
                <div className="text-4xl mb-4">👨‍👩‍👧</div>
                <h3 className="text-h3 text-navy mb-1">Le Parent</h3>
                <p className="text-dark/50 text-sm mb-4">30–50 ans · Aidant principal</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Besoin</p>
                    <p className="text-dark/80">Suivre le traitement avec précision, anticiper les crises, trouver du soutien dans une communauté.</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Frustration</p>
                    <p className="text-dark/80 italic">&quot;Je dois gérer les médicaments, les rendez-vous, la fatigue de mon enfant — sans outil structuré et sans réseau de soutien.&quot;</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Objectif UX</p>
                    <p className="text-dark/80">Suivi traitement clair, alertes rappel médicaments, communauté parents, accès ressources médicales.</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-orange rounded-xl p-6">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-h3 text-navy mb-1">Le Professionnel de santé</h3>
                <p className="text-dark/50 text-sm mb-4">Médecin · Infirmier · Mama Yemo</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Besoin</p>
                    <p className="text-dark/80">Accéder à l&apos;historique du patient entre les consultations, partager des ressources médicales validées.</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Frustration</p>
                    <p className="text-dark/80 italic">&quot;Chaque consultation repart de zéro — pas d&apos;historique des épisodes douloureux, pas de suivi de l&apos;adhérence au traitement.&quot;</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Objectif UX</p>
                    <p className="text-dark/80">Accès historique patient, outils cliniques adaptés, communication sécurisée avec les familles.</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-orange rounded-xl p-6">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-h3 text-navy mb-1">L&apos;Aidant familial</h3>
                <p className="text-dark/50 text-sm mb-4">Grand-parent · Oncle · Voisin</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Besoin</p>
                    <p className="text-dark/80">Comprendre la maladie pour mieux aider, savoir quoi faire en cas de crise, rester informé de l&apos;état de l&apos;enfant.</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Frustration</p>
                    <p className="text-dark/80 italic">&quot;Je veux aider mais je ne sais pas comment. Je ne comprends pas les termes médicaux et j&apos;ai peur de faire une erreur.&quot;</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dark/70 uppercase tracking-wide mb-1">Objectif UX</p>
                    <p className="text-dark/80">Ressources vulgarisées, guides pratiques simples, rôle défini dans le parcours de soins.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 04 — Processus */}
          <div id="processus" className="fade-in-section mb-16 scroll-mt-32">
            <h2 className="text-h2 text-orange mb-6">04. Processus de conception</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-8">
              La conception a été entièrement guidée par les contraintes du contexte congolais —
              connectivité limitée, accessibilité numérique, et enjeux émotionnels forts liés à la maladie.
            </p>

            <div className="space-y-10">
              {/* Étape 1 */}
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">1. Compréhension du contexte médical et des usages terrain</h3>
                <p className="text-lg text-dark/80 leading-relaxed mb-4">
                  Analyse du contexte de la leucémie pédiatrique en RDC, des contraintes d&apos;accès aux soins
                  à Kinshasa, et des usages numériques réels des familles ciblées. Identification des 4 profils
                  utilisateurs et de leurs besoins et frustrations spécifiques.
                </p>
              </div>

              {/* Étape 2 */}
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">2. Architecture — 5 modules de navigation</h3>
                <p className="text-lg text-dark/80 leading-relaxed mb-4">
                  Conception de la navigation principale en 5 modules distincts, chacun répondant à un besoin
                  spécifique identifié en research : Ressources · Traitement · Accueil · Communauté · Journal des Douleurs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold text-xl">5</span>
                    <span className="text-dark/70 text-sm ml-2">modules de navigation</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold text-xl">4</span>
                    <span className="text-dark/70 text-sm ml-2">profils utilisateurs distincts</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold">Onboarding</span>
                    <span className="text-dark/70 text-sm ml-2">progressif étape par étape</span>
                  </div>
                </div>
              </div>

              {/* Étape 3 */}
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">3. Onboarding humanisé — réduire la friction à l&apos;entrée</h3>
                <p className="text-lg text-dark/80 leading-relaxed mb-6">
                  Pour une application de santé destinée à des familles en situation de stress intense,
                  l&apos;onboarding doit être rassurant et progressif. Conception d&apos;un parcours en 6 étapes
                  avec une question par écran. Création de la mascotte &quot;Léa&quot; — personnage féminin aux traits
                  africains — pour humaniser le parcours et créer un lien de confiance.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                  <div className="flex flex-col items-center">
                    <Image
                      src="/images/leucare/onboarding.png"
                      alt="Onboarding LeuCare avec mascotte Léa"
                      width={394}
                      height={702}
                      quality={95}
                      className="w-full h-auto max-w-[200px]"
                    />
                    <p className="text-center text-dark/60 font-bold text-xs mt-3">Onboarding mascotte</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      src="/images/leucare/profile-selection.png"
                      alt="Sélection du profil utilisateur (4 profils distincts)"
                      width={394}
                      height={702}
                      quality={95}
                      className="w-full h-auto max-w-[200px]"
                    />
                    <p className="text-center text-dark/60 font-bold text-xs mt-3">Sélection du profil</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      src="/images/leucare/signup-prenom.png"
                      alt="Étape inscription — prénom de l'enfant"
                      width={394}
                      height={702}
                      quality={95}
                      className="w-full h-auto max-w-[200px]"
                    />
                    <p className="text-center text-dark/60 font-bold text-xs mt-3">Inscription progressive</p>
                  </div>
                </div>
              </div>

              {/* Étape 4 */}
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">4. Design sous contrainte — offline et accessibilité</h3>
                <p className="text-lg text-dark/80 leading-relaxed mb-4">
                  Chaque décision de design a été filtrée par deux questions : est-ce que ça fonctionne
                  avec une connexion lente ? Est-ce lisible sur un écran entrée de gamme ? Priorité aux grands
                  boutons tactiles (48px minimum), contraste élevé, images légères, fonctions essentielles disponibles offline.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold">Zones tactiles</span>
                    <span className="text-dark/70 text-sm ml-2">minimum 48px</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold">Contraste</span>
                    <span className="text-dark/70 text-sm ml-2">WCAG AA</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold">Offline</span>
                    <span className="text-dark/70 text-sm ml-2">Contenu essentiel disponible</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold">Optimisé</span>
                    <span className="text-dark/70 text-sm ml-2">écrans entrée de gamme</span>
                  </div>
                </div>
              </div>

              {/* Étape 5 */}
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">5. Prototypage sur Google Stitch puis raffinement Figma</h3>
                <p className="text-lg text-dark/80 leading-relaxed mb-4">
                  Utilisation de Google Stitch pour générer rapidement les premiers écrans en langage naturel,
                  puis export et raffinement dans Figma pour affiner les détails, le design system et les micro-interactions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold">Google Stitch</span>
                    <span className="text-dark/70 text-sm ml-2">pour la génération rapide</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold">Figma</span>
                    <span className="text-dark/70 text-sm ml-2">pour le raffinement</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold">Design system</span>
                    <span className="text-dark/70 text-sm ml-2">documenté</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 05 — Solution */}
          <div id="solution" className="fade-in-section mb-16 scroll-mt-32">
            <h2 className="text-h2 text-orange mb-6">05. La solution — 4 profils, 5 modules</h2>

            <div className="space-y-8">
              <div className="bg-navy/5 rounded-xl p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">🤝</span>
                      <h4 className="text-xl font-bold text-navy">Onboarding progressif et rassurant</h4>
                    </div>
                    <ul className="space-y-2 text-dark/80">
                      <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Une question par écran pour réduire la charge cognitive</span></li>
                      <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Mascotte Léa aux traits africains pour créer un lien de confiance</span></li>
                      <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Sélection du profil pour personnaliser l&apos;expérience</span></li>
                      <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Langage simple et bienveillant</span></li>
                      <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Mentions de sécurité et confidentialité visibles à chaque étape</span></li>
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Image src="/images/leucare/onboarding.png" alt="Onboarding avec mascotte Léa" width={394} height={702} quality={95} className="w-full h-auto" />
                    <Image src="/images/leucare/profile-selection.png" alt="Sélection du profil" width={394} height={702} quality={95} className="w-full h-auto" />
                  </div>
                </div>
              </div>

              <div className="bg-navy/5 rounded-xl p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">💊</span>
                      <h4 className="text-xl font-bold text-navy">Suivi médical structuré</h4>
                    </div>
                    <ul className="space-y-2 text-dark/80">
                      <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Liste des médicaments du jour avec horaires et statut (Pris / En attente)</span></li>
                      <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Rappel des vrais médicaments leucémie — Hydroxyurée, Mercaptopurine, Méthotrexate</span></li>
                      <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Prochain rendez-vous à l&apos;Hôpital Général de Mama Yemo</span></li>
                      <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Score d&apos;adhérence hebdomadaire (85%)</span></li>
                      <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Journal des épisodes douloureux avec body map et historique</span></li>
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Image src="/images/leucare/traitement.png" alt="Suivi du traitement avec médicaments du jour" width={394} height={702} quality={95} className="w-full h-auto" />
                    <Image src="/images/leucare/journal-douleurs.png" alt="Journal des douleurs avec body map" width={394} height={702} quality={95} className="w-full h-auto" />
                  </div>
                </div>
              </div>

              <div className="bg-navy/5 rounded-xl p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">👥</span>
                      <h4 className="text-xl font-bold text-navy">Ressources et communauté</h4>
                    </div>
                    <ul className="space-y-2 text-dark/80">
                      <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Actualités médicales contextualisées (campagnes Mama Yemo, nutrition locale)</span></li>
                      <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Témoignages de familles ayant vécu la même situation</span></li>
                      <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Guides pratiques en français</span></li>
                      <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Agenda des événements médicaux</span></li>
                      <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Communauté d&apos;entraide modérée — 1,2k membres actifs</span></li>
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Image src="/images/leucare/dashboard.png" alt="Tableau de bord — centre de ressources" width={394} height={702} quality={95} className="w-full h-auto" />
                    <Image src="/images/leucare/communaute.png" alt="Communauté d'entraide LeuCare" width={394} height={702} quality={95} className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 06 — Résultats */}
          <div id="resultats" className="fade-in-section mb-16 scroll-mt-32">
            <div className="bg-orange/5 rounded-2xl p-8 md:p-12">
              <h2 className="text-h2 text-orange mb-8">06. Ce qui a été livré</h2>

              <div className="fade-in-section grid grid-cols-2 md:grid-cols-4 gap-8 bg-cream rounded-2xl p-8 mb-10">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange mb-2">5</div>
                  <div className="text-dark/70">Modules de navigation</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange mb-2">4</div>
                  <div className="text-dark/70">Profils utilisateurs couverts</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange mb-2">10</div>
                  <div className="text-dark/70">Écrans prototypés</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange mb-2">100%</div>
                  <div className="text-dark/70">Mobile-first offline-ready</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-navy mb-6">Livrables</h3>
              <ul className="space-y-3 text-lg text-dark/80 mb-12">
                <li className="flex items-start gap-3">
                  <span className="text-orange mt-1">•</span>
                  <span>Prototype Figma interactif complet — 10 écrans couvrant les parcours principaux</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange mt-1">•</span>
                  <span>Onboarding en 6 étapes avec mascotte Léa aux traits africains</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange mt-1">•</span>
                  <span>Design System adapté au contexte RDC — accessibilité, offline, écrans entrée de gamme</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange mt-1">•</span>
                  <span>Architecture en 5 modules couvrant les 4 profils utilisateurs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange mt-1">•</span>
                  <span>Suivi traitement avec vrais médicaments du protocole leucémie pédiatrique</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-navy mb-6">Galerie des écrans prototypés</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { src: 'splash', alt: 'Écran de lancement', label: 'Splash' },
                  { src: 'onboarding', alt: 'Onboarding mascotte Léa', label: 'Onboarding' },
                  { src: 'profile-selection', alt: 'Sélection du profil', label: 'Profils' },
                  { src: 'signup-prenom', alt: 'Inscription — prénom', label: 'Inscription · Prénom' },
                  { src: 'signup-email', alt: 'Inscription — email', label: 'Inscription · Email' },
                  { src: 'signup-password', alt: 'Inscription — mot de passe', label: 'Inscription · Mot de passe' },
                  { src: 'signup-infos', alt: 'Inscription — infos personnelles', label: 'Inscription · Infos' },
                  { src: 'dashboard', alt: 'Tableau de bord', label: 'Dashboard' },
                  { src: 'journal-douleurs', alt: 'Journal des douleurs', label: 'Journal douleurs' },
                  { src: 'traitement', alt: 'Suivi du traitement', label: 'Traitement' },
                  { src: 'communaute', alt: 'Communauté d\'entraide', label: 'Communauté' },
                ].map((m) => (
                  <div key={m.src} className="flex flex-col items-center bg-cream rounded-xl p-3 transition-transform duration-300 hover:-translate-y-1 w-[140px] sm:w-[170px] lg:w-[190px]">
                    <Image
                      src={`/images/leucare/${m.src}.png`}
                      alt={`LeuCare — ${m.alt}`}
                      width={394}
                      height={702}
                      quality={90}
                      className="w-full h-auto"
                    />
                    <p className="text-center text-dark/60 font-bold text-xs mt-2">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 07 — Apprentissages */}
          <div id="apprentissages" className="fade-in-section mb-16 bg-orange/5 rounded-2xl p-8 md:p-12 scroll-mt-32">
            <h2 className="text-h2 text-orange mb-8">Ce que ce projet m&apos;a appris</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Apprentissages */}
              <div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-dark mb-3">Designer pour un contexte ≠ designer pour un marché</h4>
                    <p className="text-dark/80 leading-relaxed">
                      Concevoir pour des familles à Kinshasa oblige à déconstruire ses automatismes de designer européen.
                      Connexion permanente, smartphones haut de gamme, email comme identifiant principal — aucune de ces
                      hypothèses ne tient dans ce contexte.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-dark mb-3">La contrainte technique est une contrainte de design</h4>
                    <p className="text-dark/80 leading-relaxed">
                      La connectivité limitée n&apos;est pas qu&apos;un problème d&apos;ingénierie — c&apos;est une contrainte de design
                      qui impacte chaque écran : poids des images, données prioritaires en cache, fonctions essentielles offline.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-dark mb-3">L&apos;onboarding est un moment de confiance critique</h4>
                    <p className="text-dark/80 leading-relaxed">
                      Pour une application santé destinée à des familles en détresse, l&apos;onboarding n&apos;est pas une formalité.
                      C&apos;est le moment où la famille décide si l&apos;application mérite leur confiance. Chaque mot compte.
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
                    <h4 className="text-xl font-bold text-dark mb-3">Mode offline complet</h4>
                    <p className="text-dark/80 leading-relaxed">
                      Permettre la saisie du journal des douleurs et la consultation des guides sans aucune connexion,
                      avec synchronisation automatique dès que le réseau est disponible.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-dark mb-3">Intégration Lingala</h4>
                    <p className="text-dark/80 leading-relaxed">
                      Intégrer une version en Lingala pour les utilisateurs peu à l&apos;aise avec le français écrit —
                      langue principale de Kinshasa et des provinces de l&apos;ouest du Congo.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-dark mb-3">Connexion directe avec Mama Yemo</h4>
                    <p className="text-dark/80 leading-relaxed">
                      Permettre aux médecins de l&apos;Hôpital Général de Mama Yemo d&apos;accéder aux historiques patients
                      avec leur consentement, pour améliorer la continuité des soins entre les consultations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Autres projets */}
          <section className="fade-in-section mt-24 pt-12 border-t border-dark/10">
            <h2 className="text-h2 text-orange mb-12 text-center">Lisez d&apos;autres études de cas que j&apos;ai réalisées</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
                href="/projets/moveiq"
                className="project-card group bg-cream border-2 border-orange/20 rounded-2xl p-6 transition-all duration-300 hover:border-orange hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="w-full h-64 bg-navy/10 rounded-xl mb-6 overflow-hidden p-3 flex items-center justify-center">
                  <Image
                    src="/images/moveiq-laptop.png"
                    alt="MoveIQ Basket — landing page sur MacBook"
                    width={1600}
                    height={1000}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-navy text-center group-hover:text-orange transition-colors">
                  MoveIQ — Plateforme de coaching basketball
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
