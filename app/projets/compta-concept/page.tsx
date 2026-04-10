import type { Metadata } from 'next';
import { Navigation, Footer } from '@/components/layout';
import { Button, Verbatim, ScrollAnimationInit } from '@/components/ui';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compta Concept — Automatisation comptable IA | Belondjo',
};

export default function ComptaConceptPage() {
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
            <h1 className="text-hero text-orange mb-4">Compta Concept — Automatisation comptable IA</h1>
            <p className="text-xl text-dark/70 mb-8">Concepteur UX · Product Designer — Service B2B pour cabinets comptables</p>

            {/* Image principale */}
            <div className="w-full h-[400px] lg:h-[600px] bg-navy/10 rounded-2xl overflow-hidden flex items-center justify-center">
              <p className="text-dark/40 text-xl font-bold">Mockup Compta Concept</p>
            </div>
          </div>

          {/* Infos du projet */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div>
              <h3 className="text-h3 text-navy mb-4">Rôle</h3>
              <p className="text-dark/80">Concepteur UX</p>
              <p className="text-dark/80">Product Designer</p>
            </div>
            <div>
              <h3 className="text-h3 text-navy mb-4">Contexte</h3>
              <p className="text-dark/80">SaaS B2B</p>
              <p className="text-dark/80">Cabinets comptables</p>
            </div>
            <div>
              <h3 className="text-h3 text-navy mb-4">Statut</h3>
              <p className="text-dark/80">Concept validé</p>
              <p className="text-dark/80">Landing page en ligne</p>
              <p className="text-dark/80">Pipeline technique conçu</p>
            </div>
            <div>
              <h3 className="text-h3 text-navy mb-4">Stack</h3>
              <p className="text-dark/80">Gmail API</p>
              <p className="text-dark/80">Claude API</p>
              <p className="text-dark/80">Pennylane</p>
              <p className="text-dark/80">n8n</p>
            </div>
          </div>

          {/* Sommaire de navigation */}
          <nav className="mb-16 bg-cream/80 border border-orange/20 rounded-2xl p-6 md:p-8 sticky top-24 z-10" aria-label="Navigation de l'étude de cas">
            <ul className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-6 justify-center items-start md:items-center text-sm md:text-base">
              <li><a href="#contexte" className="text-dark hover:text-orange transition-colors font-bold">Contexte</a></li>
              <li className="hidden md:block text-dark/30">|</li>
              <li><a href="#probleme" className="text-dark hover:text-orange transition-colors font-bold">Problème</a></li>
              <li className="hidden md:block text-dark/30">|</li>
              <li><a href="#solution" className="text-dark hover:text-orange transition-colors font-bold">Solution</a></li>
              <li className="hidden md:block text-dark/30">|</li>
              <li><a href="#resultats" className="text-dark hover:text-orange transition-colors font-bold">Résultats</a></li>
            </ul>
          </nav>

          {/* Section 01 — Contexte */}
          <div id="contexte" className="fade-in-section mb-16 bg-orange/5 rounded-2xl p-8 md:p-12 scroll-mt-32">
            <h2 className="text-h2 text-orange mb-6">01. Le produit et ses objectifs</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-6">
              Compta Concept est un service d&apos;automatisation de la saisie de factures pour cabinets comptables.
              Le pipeline technique repose sur Gmail, Claude API et Pennylane pour réduire drastiquement le temps
              de saisie manuelle des collaborateurs.
            </p>
            <p className="text-lg text-dark/80 leading-relaxed mb-6">Objectifs principaux :</p>
            <ul className="space-y-4 text-lg text-dark/80 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-orange mt-1">•</span>
                <span>Automatiser la récupération et la lecture des factures reçues par email</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange mt-1">•</span>
                <span>Extraire les données clés via Claude API et les injecter dans Pennylane</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange mt-1">•</span>
                <span>Réduire le temps de saisie identifié à 40h/mois lors des interviews terrain</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange mt-1">•</span>
                <span>Valider le concept avant tout développement via interviews et landing page</span>
              </li>
            </ul>
          </div>

          {/* Section 02 — Problème */}
          <div id="probleme" className="fade-in-section mb-16 scroll-mt-32">
            <h2 className="text-h2 text-orange mb-6">02. Le problème</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-6">
              Interviews terrain auprès de collaborateurs comptables ont révélé 3 frustrations majeures :
            </p>

            <div className="space-y-6 mb-10">
              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-xl font-bold text-navy mb-3">1. Saisie manuelle chronophage</h4>
                <p className="text-dark/80 leading-relaxed">
                  Les collaborateurs passent en moyenne 40h/mois à saisir manuellement des factures reçues par email.
                  Une tâche répétitive, à faible valeur ajoutée, qui occupe un temps considérable sur des missions à plus haute valeur.
                </p>
              </div>

              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-xl font-bold text-navy mb-3">2. Risque d&apos;erreurs et de doublons</h4>
                <p className="text-dark/80 leading-relaxed">
                  La saisie manuelle génère des erreurs : montants mal retranscrits, TVA incorrecte, fournisseurs mal orthographiés.
                  Ces erreurs ont un coût réel en temps de correction et en risque de non-conformité.
                </p>
              </div>

              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-xl font-bold text-navy mb-3">3. Outils d&apos;automatisation inadaptés</h4>
                <p className="text-dark/80 leading-relaxed">
                  Les solutions existantes nécessitent des configurations complexes et des intégrations coûteuses.
                  Les cabinets de taille intermédiaire n&apos;ont ni le budget ni les ressources techniques pour les déployer.
                </p>
              </div>
            </div>

            <div className="fade-in-section grid grid-cols-1 md:grid-cols-2 gap-6">
              <Verbatim
                citation="On reçoit des dizaines de factures par semaine. Les saisir une par une dans Pennylane, c'est au moins 2h par jour. C'est du temps que j'aimerais passer sur de l'analyse ou du conseil."
                auteur="Collaborateur comptable, entretien terrain"
              />
              <Verbatim
                citation="On a essayé des solutions OCR mais ça ne marche pas bien avec les factures PDF un peu complexes. On finit toujours par ressaisir à la main de toute façon."
                auteur="Expert-comptable, entretien terrain"
              />
            </div>
          </div>

          {/* Section 03 — Solution */}
          <div id="solution" className="fade-in-section mb-16 scroll-mt-32">
            <h2 className="text-h2 text-orange mb-6">03. La solution — Pipeline Gmail → Claude API → Pennylane</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-8">
              Un pipeline d&apos;automatisation conçu pour s&apos;intégrer dans le workflow existant des cabinets, sans friction,
              sans formation nécessaire.
            </p>

            <div className="space-y-6">
              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-xl font-bold text-navy mb-3">Étape 1 — Collecte automatique (Gmail API)</h4>
                <ul className="space-y-2 text-dark/80">
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Détection automatique des emails avec pièces jointes PDF</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Filtrage par expéditeur, objet et type de document</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Transmission vers le moteur d&apos;extraction</span></li>
                </ul>
              </div>

              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-xl font-bold text-navy mb-3">Étape 2 — Extraction intelligente (Claude API)</h4>
                <ul className="space-y-2 text-dark/80">
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Lecture et compréhension du contenu de la facture en langage naturel</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Extraction : fournisseur, montant HT, TVA, date, numéro de facture</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Gestion des formats complexes et des factures non standardisées</span></li>
                </ul>
              </div>

              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-xl font-bold text-navy mb-3">Étape 3 — Injection comptable (Pennylane)</h4>
                <ul className="space-y-2 text-dark/80">
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Création automatique de l&apos;écriture comptable dans Pennylane</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Rattachement au bon fournisseur et au bon compte</span></li>
                  <li className="flex items-start gap-3"><span className="text-orange mt-1">•</span><span>Notification au collaborateur pour validation finale</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 04 — Résultats */}
          <div id="resultats" className="fade-in-section mb-16 scroll-mt-32">
            <div className="bg-orange/5 rounded-2xl p-8 md:p-12">
              <h2 className="text-h2 text-orange mb-8">04. Résultats</h2>
              <p className="text-sm text-dark/50 italic mb-8">Résultats estimés sur la base des interviews terrain</p>

              <div className="fade-in-section grid grid-cols-2 md:grid-cols-3 gap-8 bg-cream rounded-2xl p-8 mb-10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange mb-2">40h/mois</div>
                  <div className="text-dark/70">Temps de saisie identifié terrain</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange mb-2">Pipeline</div>
                  <div className="text-dark/70">Gmail → Claude API → Pennylane</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange mb-2">3 sem.</div>
                  <div className="text-dark/70">Du concept au prototype</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-navy mb-6">Ce qui a été livré</h3>
              <ul className="space-y-3 text-lg text-dark/80">
                <li className="flex items-start gap-3">
                  <span className="text-orange mt-1">•</span>
                  <span>Interviews terrain auprès de collaborateurs comptables</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange mt-1">•</span>
                  <span>Validation du concept et du besoin avant tout développement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange mt-1">•</span>
                  <span>Landing page en ligne pour tester l&apos;intérêt du marché</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange mt-1">•</span>
                  <span>Architecture technique du pipeline Gmail → Claude API → Pennylane</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange mt-1">•</span>
                  <span>Prototype fonctionnel de l&apos;extraction de données par Claude API</span>
                </li>
              </ul>
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
