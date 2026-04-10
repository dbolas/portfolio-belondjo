import type { Metadata } from 'next';
import { Navigation, Footer } from '@/components/layout';
import { Button, ScrollAnimationInit } from '@/components/ui';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

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
            <p className="text-xl text-dark/70 mb-8">Builder · UX Designer — Application web en production</p>

            {/* Image principale */}
            <div className="w-full h-[400px] lg:h-[600px] bg-navy/10 rounded-2xl overflow-hidden flex items-center justify-center">
              <p className="text-dark/40 text-xl font-bold">Mockup Générateur de Factures</p>
            </div>
          </div>

          {/* Infos du projet */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div>
              <h3 className="text-h3 text-navy mb-4">Rôle</h3>
              <p className="text-dark/80">Concepteur</p>
              <p className="text-dark/80">Builder IA</p>
            </div>
            <div>
              <h3 className="text-h3 text-navy mb-4">Contexte</h3>
              <p className="text-dark/80">Application web</p>
              <p className="text-dark/80">Freelances &amp; indépendants</p>
            </div>
            <div>
              <h3 className="text-h3 text-navy mb-4">Statut</h3>
              <p className="text-dark/80">En production sur Vercel</p>
            </div>
            <div>
              <h3 className="text-h3 text-navy mb-4">Stack</h3>
              <p className="text-dark/80">Gemini 3 Pro</p>
              <p className="text-dark/80">Vercel AI SDK</p>
              <p className="text-dark/80">Next.js · React</p>
              <p className="text-dark/80">Export PDF</p>
            </div>
          </div>

          {/* Sommaire de navigation */}
          <nav className="mb-16 bg-cream/80 border border-orange/20 rounded-2xl p-6 md:p-8 sticky top-24 z-10" aria-label="Navigation de l'étude de cas">
            <ul className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-6 justify-center items-start md:items-center text-sm md:text-base">
              <li><a href="#produit" className="text-dark hover:text-orange transition-colors font-bold">Le produit</a></li>
              <li className="hidden md:block text-dark/30">|</li>
              <li><a href="#probleme" className="text-dark hover:text-orange transition-colors font-bold">Problème</a></li>
              <li className="hidden md:block text-dark/30">|</li>
              <li><a href="#solution" className="text-dark hover:text-orange transition-colors font-bold">Solution</a></li>
              <li className="hidden md:block text-dark/30">|</li>
              <li><a href="#resultats" className="text-dark hover:text-orange transition-colors font-bold">Résultats</a></li>
            </ul>
          </nav>

          {/* Section 01 — Le produit */}
          <div id="produit" className="fade-in-section mb-16 bg-orange/5 rounded-2xl p-8 md:p-12 scroll-mt-32">
            <h2 className="text-h2 text-orange mb-6">01. Le produit</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-6">
              Application web qui permet aux freelances et indépendants de générer des factures professionnelles
              par dictée vocale ou saisie texte. L&apos;IA (Gemini 3 Pro) interprète la description et remplit
              automatiquement tous les champs de la facture.
            </p>
            <p className="text-lg text-dark/80 leading-relaxed mb-6">Objectifs :</p>
            <ul className="space-y-4 text-lg text-dark/80">
              <li className="flex items-start gap-3">
                <span className="text-orange mt-1">•</span>
                <span>Éliminer la friction de la saisie manuelle des factures pour les indépendants</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange mt-1">•</span>
                <span>Permettre la création d&apos;une facture complète en moins de 2 minutes par dictée vocale</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange mt-1">•</span>
                <span>Générer un PDF conforme aux mentions légales françaises obligatoires</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange mt-1">•</span>
                <span>Interface simple utilisable sans formation</span>
              </li>
            </ul>
          </div>

          {/* Section 02 — Problème */}
          <div id="probleme" className="fade-in-section mb-16 scroll-mt-32">
            <h2 className="text-h2 text-orange mb-6">02. Le problème</h2>

            <div className="space-y-6 mb-10">
              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-xl font-bold text-navy mb-3">Saisie manuelle fastidieuse</h4>
                <p className="text-dark/80 leading-relaxed">
                  Les freelances passent du temps à remplir manuellement des champs répétitifs sur chaque facture :
                  émetteur, destinataire, lignes de prestation, calcul TVA, mentions légales. C&apos;est une tâche
                  à faible valeur ajoutée mais chronophage.
                </p>
              </div>

              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-xl font-bold text-navy mb-3">Erreurs et oublis fréquents</h4>
                <p className="text-dark/80 leading-relaxed">
                  Les mentions légales obligatoires sont souvent oubliées ou mal formulées. Les calculs HT/TTC/TVA
                  sont sources d&apos;erreurs manuelles. Le risque de litige ou de rejet de facture est réel.
                </p>
              </div>

              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-xl font-bold text-navy mb-3">Outils existants trop complexes</h4>
                <p className="text-dark/80 leading-relaxed">
                  Les logiciels de facturation existants ont des interfaces chargées avec des dizaines de paramètres
                  à configurer. Pour un freelance qui facture occasionnellement, c&apos;est une friction inutile.
                </p>
              </div>
            </div>
          </div>

          {/* Section 03 — Solution */}
          <div id="solution" className="fade-in-section mb-16 scroll-mt-32">
            <h2 className="text-h2 text-orange mb-6">03. La solution</h2>

            <div className="space-y-6">
              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-xl font-bold text-navy mb-4">Dictée vocale ou saisie texte</h4>
                <p className="text-dark/80 leading-relaxed mb-4">
                  L&apos;utilisateur décrit sa facture en langage naturel :
                </p>
                <div className="bg-cream border border-orange/30 rounded-lg p-4 mb-4">
                  <p className="text-dark/70 italic text-sm">
                    &quot;Facture pour Marie Dupont, développement site vitrine 2400€ et intégration CMS 800€, TVA 20%&quot;
                  </p>
                </div>
                <p className="text-dark/80">
                  Gemini 3 Pro extrait et structure toutes les informations automatiquement.
                </p>
              </div>

              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-xl font-bold text-navy mb-3">Aperçu temps réel</h4>
                <ul className="space-y-2 text-dark/80">
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>La facture se génère instantanément</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Tous les champs sont éditables manuellement</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Calcul automatique HT/TTC/TVA</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Ajout de lignes supplémentaires en un clic</span></li>
                </ul>
              </div>

              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-xl font-bold text-navy mb-3">Export PDF conforme</h4>
                <ul className="space-y-2 text-dark/80">
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>PDF généré avec toutes les mentions légales françaises obligatoires</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Numérotation automatique des factures</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Coordonnées bancaires (IBAN/BIC)</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Conditions de paiement personnalisables</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 04 — Résultats */}
          <div id="resultats" className="fade-in-section mb-16 scroll-mt-32">
            <div className="bg-orange/5 rounded-2xl p-8 md:p-12">
              <h2 className="text-h2 text-orange mb-8">04. Résultats</h2>

              <div className="fade-in-section grid grid-cols-2 md:grid-cols-4 gap-8 bg-cream rounded-2xl p-8 mb-10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange mb-2">En ligne</div>
                  <div className="text-dark/70">Sur Vercel en production</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange mb-2">Gemini</div>
                  <div className="text-dark/70">3 Pro — IA de génération</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange mb-2">&lt; 2 min</div>
                  <div className="text-dark/70">Temps de création d&apos;une facture</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange mb-2">100%</div>
                  <div className="text-dark/70">Mentions légales françaises incluses</div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-8">
                <a
                  href="https://invoicegeneratorvrbbl.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg">Voir l&apos;application en ligne</Button>
                </a>
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
                <div className="w-full h-64 bg-navy/10 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                  <div className="text-center text-dark/30">
                    <div className="text-4xl mb-2">🏛️</div>
                    <p className="text-sm font-bold">Intranet interministériel</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-navy text-center group-hover:text-orange transition-colors">
                  Intranet interministériel des Hauts-de-Seine
                </h3>
              </Link>

              <Link
                href="/projets/moveiq"
                className="project-card group bg-cream border-2 border-orange/20 rounded-2xl p-6 transition-all duration-300 hover:border-orange hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="w-full h-64 bg-orange/10 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                  <div className="text-center text-dark/30">
                    <div className="text-4xl mb-2">🏀</div>
                    <p className="text-sm font-bold">MoveIQ</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-navy text-center group-hover:text-orange transition-colors">
                  MoveIQ — Plateforme de suivi basketball
                </h3>
              </Link>
            </div>

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
