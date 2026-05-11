import type { Metadata } from 'next';
import { Navigation, Footer } from '@/components/layout';
import { Button, Verbatim, ScrollAnimationInit, ImageZoom } from '@/components/ui';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Générateur de Factures IA — Application web en production | Belondjo',
};

export default function GenerateurFacturesPage() {
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
            <h1 className="text-hero text-orange mb-4">Générateur de Factures IA</h1>
            <p className="text-xl text-dark/70 mb-8">Fondateur &amp; UX/UI Designer — Concevoir une interaction vocale pour les freelances</p>

            <div className="w-full bg-navy/5 rounded-2xl overflow-hidden">
              <ImageZoom
                src="/images/generateur-factures/hero-desktop.png"
                alt="Générateur de Factures IA — vue desktop complète avec assistant vocal et facture générée"
                width={2400}
                height={1600}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Infos du projet */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div>
              <h3 className="text-h3 text-navy mb-4">Rôle</h3>
              <p className="text-dark/80">Fondateur</p>
              <p className="text-dark/80">UX/UI Designer</p>
            </div>
            <div>
              <h3 className="text-h3 text-navy mb-4">Contexte</h3>
              <p className="text-dark/80">Application web</p>
              <p className="text-dark/80">Freelances &amp; indépendants</p>
            </div>
            <div>
              <h3 className="text-h3 text-navy mb-4">Statut</h3>
              <p className="text-dark/80">En ligne</p>
              <p className="text-dark/80">Tests utilisateurs structurés à venir</p>
            </div>
            <div>
              <h3 className="text-h3 text-navy mb-4">Méthodes &amp; outils</h3>
              <p className="text-dark/80">Entretiens informels</p>
              <p className="text-dark/80">Figma · Design system</p>
              <p className="text-dark/80">Print CSS natif</p>
              <p className="text-dark/80">Conformité légale FR</p>
            </div>
          </div>

          {/* Sommaire de navigation */}
          <nav className="mb-16 bg-cream/80 border border-orange/20 rounded-2xl p-6 md:p-8 sticky top-24 z-10" aria-label="Navigation de l'étude de cas">
            <ul className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-6 justify-center items-start md:items-center text-sm md:text-base">
              <li><a href="#contexte" className="text-dark hover:text-orange transition-colors font-bold">Contexte</a></li>
              <li className="hidden md:block text-dark/30">|</li>
              <li><a href="#recherche" className="text-dark hover:text-orange transition-colors font-bold">Recherche</a></li>
              <li className="hidden md:block text-dark/30">|</li>
              <li><a href="#probleme" className="text-dark hover:text-orange transition-colors font-bold">Problème</a></li>
              <li className="hidden md:block text-dark/30">|</li>
              <li><a href="#solution" className="text-dark hover:text-orange transition-colors font-bold">Solution</a></li>
              <li className="hidden md:block text-dark/30">|</li>
              <li><a href="#resultats" className="text-dark hover:text-orange transition-colors font-bold">Résultats</a></li>
              <li className="hidden md:block text-dark/30">|</li>
              <li><a href="#apprentissages" className="text-dark hover:text-orange transition-colors font-bold">Apprentissages</a></li>
            </ul>
          </nav>

          {/* Section 01 — Contexte */}
          <div id="contexte" className="fade-in-section mb-16 bg-orange/5 rounded-2xl p-8 md:p-12 scroll-mt-32">
            <h2 className="text-h2 text-orange mb-6">01. Contexte</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-6">
              Application web qui permet aux freelances et indépendants de générer des factures professionnelles
              par dictée vocale ou saisie texte. L&apos;IA interprète la description en langage naturel et remplit
              automatiquement tous les champs de la facture.
            </p>
            <p className="text-lg text-dark/80 leading-relaxed mb-6">
              Side project né d&apos;un double déclencheur : un besoin personnel — je facture moi-même comme freelance —
              et l&apos;envie d&apos;explorer comment l&apos;IA conversationnelle peut transformer une tâche connue de tous :
              la création d&apos;une facture conforme.
            </p>
            <p className="text-lg text-dark/80 leading-relaxed font-bold">
              Objectif : remplacer 20 minutes de saisie manuelle par moins de 2 minutes de dictée vocale, sans sacrifier la conformité légale.
            </p>
          </div>

          {/* Section 02 — Recherche utilisateur */}
          <div id="recherche" className="fade-in-section mb-16 scroll-mt-32">
            <h2 className="text-h2 text-orange mb-6">02. Recherche utilisateur</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-6">
              Avant de dessiner quoi que ce soit, j&apos;ai mené des entretiens informels avec 7 freelances de mon réseau,
              représentant 4 métiers différents. Objectif : valider que le problème existe vraiment et comprendre
              les pratiques actuelles.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-orange/10 rounded-lg px-4 py-2">
                <span className="text-orange font-bold text-xl">7</span>
                <span className="text-dark/70 text-sm ml-2">freelances interrogés</span>
              </div>
              <div className="bg-orange/10 rounded-lg px-4 py-2">
                <span className="text-orange font-bold text-xl">4</span>
                <span className="text-dark/70 text-sm ml-2">métiers représentés</span>
              </div>
              <div className="bg-orange/10 rounded-lg px-4 py-2">
                <span className="text-orange font-bold text-xl">0</span>
                <span className="text-dark/70 text-sm ml-2">wireframe avant la research</span>
              </div>
            </div>

            <p className="text-lg text-dark/80 leading-relaxed mb-8">
              Profils interrogés : designers (UX/UI, graphiques), développeurs, consultants, rédacteurs et photographes —
              tous freelances qui facturent occasionnellement (5 à 10 factures par mois).
            </p>

            <div className="fade-in-section grid grid-cols-1 md:grid-cols-2 gap-6">
              <Verbatim
                citation="Je facture peut-être 5 ou 6 fois par mois, mais à chaque fois je dois rouvrir mon ancien tableur, copier-coller, modifier les montants, vérifier les mentions légales… c'est 20 minutes pour rien."
                auteur="Freelance développeur · entretien informel"
              />
              <Verbatim
                citation="Les outils existants sont faits pour des comptables, pas pour quelqu'un qui facture deux fois par mois. On se perd dans les paramètres."
                auteur="Freelance consultante · entretien informel"
              />
            </div>
          </div>

          {/* Section 03 — Problème */}
          <div id="probleme" className="fade-in-section mb-16 scroll-mt-32">
            <h2 className="text-h2 text-orange mb-6">03. Le problème</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-6">
              Les entretiens ont fait remonter trois frustrations récurrentes :
            </p>

            <div className="space-y-6">
              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-xl font-bold text-navy mb-3">1. Saisie manuelle fastidieuse</h4>
                <p className="text-dark/80 leading-relaxed">
                  Les freelances passent du temps à remplir manuellement les mêmes champs sur chaque facture :
                  émetteur, destinataire, lignes de prestation, calcul TVA, mentions légales. Une tâche
                  à faible valeur ajoutée mais chronophage.
                </p>
              </div>

              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-xl font-bold text-navy mb-3">2. Erreurs et oublis fréquents</h4>
                <p className="text-dark/80 leading-relaxed">
                  Les mentions légales obligatoires sont souvent oubliées ou mal formulées. Les calculs HT/TTC/TVA
                  sont sources d&apos;erreurs manuelles. Risque réel de litige ou de rejet de facture côté client.
                </p>
              </div>

              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-xl font-bold text-navy mb-3">3. Outils existants trop complexes</h4>
                <p className="text-dark/80 leading-relaxed">
                  Les logiciels de facturation existants ont des interfaces chargées avec des dizaines de paramètres
                  à configurer. Pour un freelance qui facture occasionnellement, c&apos;est une friction inutile.
                </p>
              </div>
            </div>
          </div>

          {/* Section 04 — Solution */}
          <div id="solution" className="fade-in-section mb-16 scroll-mt-32">
            <h2 className="text-h2 text-orange mb-6">04. Solution — 4 décisions UX</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-8">
              Quatre choix de conception guident le produit, chacun ancré dans un insight terrain.
            </p>

            <div className="space-y-6 mb-12">
              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-xl font-bold text-navy mb-3">Décision 1 — Interaction vocale en priorité</h4>
                <p className="text-dark/70 italic mb-3">
                  Insight : les freelances décrivent leurs prestations à l&apos;oral bien plus naturellement qu&apos;ils
                  ne remplissent un formulaire vide.
                </p>
                <p className="text-dark/80 leading-relaxed mb-4">
                  La dictée vocale est l&apos;interaction principale. Un fallback texte reste disponible pour les contextes
                  silencieux (open space, transport).
                </p>
                <div className="bg-cream border border-orange/30 rounded-lg p-4">
                  <p className="text-dark/70 italic text-sm">
                    &quot;Facture pour Marie Dupont, développement site vitrine 2400€ et intégration CMS 800€, TVA 20%&quot;
                  </p>
                </div>
              </div>

              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-xl font-bold text-navy mb-3">Décision 2 — Génération automatique mais éditable</h4>
                <p className="text-dark/70 italic mb-3">
                  Insight : la confiance dans l&apos;IA n&apos;est pas totale. Les freelances veulent vérifier avant d&apos;envoyer.
                </p>
                <ul className="space-y-2 text-dark/80">
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>L&apos;IA remplit, l&apos;utilisateur valide</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Tous les champs restent éditables après génération</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Calcul automatique HT/TTC/TVA en temps réel</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Ajout/suppression de lignes en un clic</span></li>
                </ul>
              </div>

              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-xl font-bold text-navy mb-3">Décision 3 — Aperçu temps réel WYSIWYG</h4>
                <p className="text-dark/70 italic mb-3">
                  Insight : le PDF reste la norme attendue par les clients. Il faut anticiper le rendu final.
                </p>
                <ul className="space-y-2 text-dark/80">
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Rendu print CSS natif, pas de lib lourde type jsPDF</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Mentions légales françaises auto-injectées</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Numérotation automatique des factures</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Aperçu écran = export final, sans surprise</span></li>
                </ul>
              </div>

              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-xl font-bold text-navy mb-3">Décision 4 — Refonte responsive en seconde itération</h4>
                <p className="text-dark/70 italic mb-3">
                  Observation post-déploiement : les freelances facturent souvent en mobilité (TGV, hors bureau).
                </p>
                <p className="text-dark/80 leading-relaxed mb-6">
                  Refonte responsive ciblée : header compact en icônes sur mobile, blocs émetteur/destinataire empilés,
                  tableau des prestations transformé en cards lisibles. Démarche volontairement itérative, pas big-bang.
                </p>

                {/* Triptyque responsive — iPhone 14 Pro / iPad Pro / MacBook */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 items-end">
                  <div className="flex flex-col items-center">
                    <div className="w-full max-w-[280px]">
                      <Image
                        src="/images/generateur-factures/mockup-mobile.png"
                        alt="Aperçu mobile (iPhone 14 Pro) — blocs émetteur/destinataire empilés et prestations en cards"
                        width={800}
                        height={1600}
                        quality={95}
                        sizes="(max-width: 768px) 80vw, 280px"
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="text-center text-dark/60 font-bold text-xs mt-4">Mobile (iPhone 14 Pro)</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-full max-w-[360px]">
                      <Image
                        src="/images/generateur-factures/mockup-tablet.png"
                        alt="Aperçu tablette (iPad Pro) — assistant vocal et facture côte à côte"
                        width={1200}
                        height={1500}
                        quality={95}
                        sizes="(max-width: 768px) 80vw, 360px"
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="text-center text-dark/60 font-bold text-xs mt-4">Tablette (iPad Pro)</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-full max-w-[480px]">
                      <Image
                        src="/images/generateur-factures/mockup-desktop.png"
                        alt="Aperçu desktop (MacBook) — assistant vocal à gauche, facture à droite"
                        width={1600}
                        height={1000}
                        quality={95}
                        sizes="(max-width: 768px) 80vw, 480px"
                        className="w-full h-auto"
                      />
                    </div>
                    <p className="text-center text-dark/60 font-bold text-xs mt-4">Desktop (MacBook)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="https://invoicegeneratorvrbbl.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" iconAfter={<ArrowRight />}>Voir l&apos;application en ligne</Button>
              </a>
            </div>
          </div>

          {/* Section 05 — Résultats */}
          <div id="resultats" className="fade-in-section mb-16 scroll-mt-32">
            <div className="bg-orange/5 rounded-2xl p-8 md:p-12">
              <h2 className="text-h2 text-orange mb-8">05. Résultats</h2>

              <div className="fade-in-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                <div className="bg-cream rounded-xl p-6">
                  <div className="text-sm font-bold text-dark/50 uppercase tracking-wide mb-2">Statut</div>
                  <div className="text-xl font-bold text-orange">Application en ligne</div>
                </div>
                <div className="bg-cream rounded-xl p-6">
                  <div className="text-sm font-bold text-dark/50 uppercase tracking-wide mb-2">Recherche utilisateur</div>
                  <div className="text-xl font-bold text-orange">7 entretiens · 4 métiers</div>
                </div>
                <div className="bg-cream rounded-xl p-6">
                  <div className="text-sm font-bold text-dark/50 uppercase tracking-wide mb-2">Breakpoints couverts</div>
                  <div className="text-xl font-bold text-orange">Mobile · Tablette · Desktop</div>
                </div>
                <div className="bg-cream rounded-xl p-6">
                  <div className="text-sm font-bold text-dark/50 uppercase tracking-wide mb-2">Temps moyen de saisie</div>
                  <div className="text-xl font-bold text-orange">~2 min vs 20 min en manuel</div>
                </div>
                <div className="bg-cream rounded-xl p-6">
                  <div className="text-sm font-bold text-dark/50 uppercase tracking-wide mb-2">Format export</div>
                  <div className="text-xl font-bold text-orange">PDF A4 conforme (art. L441-10)</div>
                </div>
                <div className="bg-cream rounded-xl p-6">
                  <div className="text-sm font-bold text-dark/50 uppercase tracking-wide mb-2">Prochaine étape</div>
                  <div className="text-xl font-bold text-orange">Tests utilisateurs structurés</div>
                </div>
              </div>

              <p className="text-lg text-dark/80 leading-relaxed mb-3">
                Le produit est en ligne et accessible depuis n&apos;importe quel appareil. Le passage de la saisie manuelle
                à la dictée vocale divise le temps de remplissage par environ 10 sur les premiers usages.
              </p>
              <p className="text-lg text-dark/80 leading-relaxed">
                <strong>Prochaines étapes :</strong> sessions de tests utilisateurs structurées avec un échantillon de freelances
                et analytics d&apos;usage pour valider les gains de temps en conditions réelles.
              </p>
            </div>
          </div>

          {/* Section 06 — Apprentissages */}
          <div id="apprentissages" className="fade-in-section mb-16 bg-orange/5 rounded-2xl p-8 md:p-12 scroll-mt-32">
            <h2 className="text-h2 text-orange mb-8">06. Apprentissages</h2>

            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold text-dark mb-3">Concevoir une interaction vocale crédible</h4>
                <p className="text-dark/80 leading-relaxed">
                  La latence du streaming change la perception : un assistant qui répond instantanément paraît
                  &laquo;&nbsp;vivant&nbsp;&raquo;, un assistant qui charge silencieusement paraît &laquo;&nbsp;cassé&nbsp;&raquo;.
                  Le retour visuel pendant l&apos;écoute compte autant que la qualité du résultat final.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-dark mb-3">La confiance dans l&apos;IA se gagne par l&apos;éditabilité</h4>
                <p className="text-dark/80 leading-relaxed">
                  Les freelances interrogés veulent vérifier la facture avant envoi. L&apos;IA ne remplace pas
                  leur responsabilité, elle accélère le brouillon. Tous les champs restent modifiables —
                  c&apos;est non négociable pour cette cible.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-dark mb-3">Le mobile n&apos;est pas un nice-to-have pour les indépendants</h4>
                <p className="text-dark/80 leading-relaxed">
                  La refonte responsive en seconde itération a confirmé que les freelances facturent souvent
                  en déplacement. La table prestations en cards lisibles est devenue le pattern principal sur mobile,
                  pas un fallback dégradé.
                </p>
              </div>
            </div>
          </div>

          {/* Autres projets */}
          <section className="fade-in-section mt-24 pt-12 border-t border-dark/10">
            <h2 className="text-h2 text-orange mb-12 text-center">Autres études de cas</h2>

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
