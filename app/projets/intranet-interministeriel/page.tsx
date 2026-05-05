import { Navigation, Footer } from '@/components/layout';
import { Button, Verbatim, ScrollAnimationInit, ImageZoom } from '@/components/ui';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function IntranetInterministerielPage() {
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
            <h1 className="text-hero text-orange mb-4">Intranet interministériel des Hauts-de-Seine</h1>
            <p className="text-xl text-dark/70 mb-8">UX Designer • Recherche utilisateur • Architecture de l'information</p>

            {/* Image principale */}
            <div className="w-full h-[400px] lg:h-[600px] bg-navy/10 rounded-2xl overflow-hidden flex items-center justify-center">
              <Image
                src="/images/mockup-intranet.png"
                alt="Mockup de l'intranet interministériel des Hauts-de-Seine sur ordinateur portable"
                width={1200}
                height={800}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>

          {/* Infos du projet */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-h3 text-navy mb-4">Rôle</h3>
              <p className="text-dark/80">UX Designer</p>
              <p className="text-dark/80">Recherche utilisateur</p>
              <p className="text-dark/80">Architecture de l'information</p>
            </div>
            <div>
              <h3 className="text-h3 text-navy mb-4">Équipe</h3>
              <p className="text-dark/80">1 UX Designer (moi)</p>
              <p className="text-dark/80">1 Chef de projet</p>
              <p className="text-dark/80">2 Développeurs</p>
            </div>
          </div>

          {/* Sommaire de navigation */}
          <nav className="mb-16 bg-cream/80 border border-orange/20 rounded-2xl p-6 md:p-8 sticky top-24 z-10" aria-label="Navigation de l'étude de cas">
            <ul className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-6 justify-center items-start md:items-center text-sm md:text-base">
              <li><a href="#produit" className="text-dark hover:text-orange transition-colors font-bold">Le produit</a></li>
              <li className="hidden md:block text-dark/30">|</li>
              <li><a href="#probleme" className="text-dark hover:text-orange transition-colors font-bold">Le problème</a></li>
              <li className="hidden md:block text-dark/30">|</li>
              <li><a href="#processus" className="text-dark hover:text-orange transition-colors font-bold">Processus</a></li>
              <li className="hidden md:block text-dark/30">|</li>
              <li><a href="#resultats" className="text-dark hover:text-orange transition-colors font-bold">Résultats</a></li>
              <li className="hidden md:block text-dark/30">|</li>
              <li><a href="#apprentissages" className="text-dark hover:text-orange transition-colors font-bold">Apprentissages</a></li>
            </ul>
          </nav>

          {/* Section - Le produit et ses objectifs */}
          <div id="produit" className="fade-in-section mb-16 bg-orange/5 rounded-2xl p-8 md:p-12 scroll-mt-32">
            <h2 className="text-h2 text-orange mb-6">Le produit et ses objectifs</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-6">
              L'intranet sert quotidiennement <strong>plusieurs centaines d'agents</strong> répartis dans une dizaine de services.
              Ses objectifs principaux :
            </p>
            <ul className="space-y-4 text-lg text-dark/80">
              <li className="flex items-start gap-3">
                <span className="text-orange mt-1">•</span>
                <span>Faciliter la communication et la collaboration entre administrations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange mt-1">•</span>
                <span>Centraliser l'accès aux procédures, annuaires et documents officiels</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange mt-1">•</span>
                <span>Réduire le temps passé à chercher l'information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange mt-1">•</span>
                <span>Offrir des outils métiers directement accessibles depuis la plateforme</span>
              </li>
            </ul>
            <p className="text-lg text-dark/80 leading-relaxed mt-6 font-bold">
              Malgré son rôle central, l'ancien intranet était peu utilisé et générait beaucoup de frustration.
            </p>
          </div>

          {/* Section 02 - Problème */}
          <div id="probleme" className="fade-in-section mb-16 scroll-mt-32">
            <h2 className="text-h2 text-orange mb-6">02. Le problème</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-6">
              L'intranet existant posait trois difficultés majeures qui freinaient son adoption par les agents :
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-xl font-bold text-navy mb-3">1. Navigation complexe et peu intuitive</h4>
                <p className="text-dark/80 leading-relaxed">
                  Les agents devaient effectuer 5 à 7 clics en moyenne pour accéder à un document courant.
                  Les intitulés de rubriques étaient techniques (sigles administratifs) et ne correspondaient pas au langage naturel des utilisateurs.
                </p>
              </div>

              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-xl font-bold text-navy mb-3">2. Contenu désorganisé et difficile à trouver</h4>
                <p className="text-dark/80 leading-relaxed">
                  Les pages n'avaient pas de structure claire : pas de titres, de sous-titres ou de listes.
                  Les documents importants étaient noyés dans des pavés de texte, rendant la recherche d'information épuisante.
                </p>
              </div>

              <div className="bg-navy/5 rounded-xl p-6">
                <h4 className="text-xl font-bold text-navy mb-3">3. Problèmes d'ergonomie et d'accessibilité</h4>
                <p className="text-dark/80 leading-relaxed">
                  Les liens n'étaient pas identifiables visuellement, les PDF s'ouvraient dans la même page (faisant perdre le fil de navigation),
                  et le contraste des couleurs rendait la lecture difficile.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-navy mb-6 mt-12">Impact sur le quotidien des agents</h3>
            <p className="text-lg text-dark/80 leading-relaxed mb-8">
              Résultat : <strong>perte de temps quotidienne</strong>, contournement de l'outil (appels téléphoniques, mails directs),
              et sentiment général que l'intranet était <strong>"inutilisable"</strong>.
            </p>

            <div className="fade-in-section grid grid-cols-1 md:grid-cols-2 gap-6">
              <Verbatim
                citation="Je cherche pendant 10 minutes, je ne trouve pas, alors j'appelle ma collègue. C'est plus rapide que de continuer à cliquer partout."
                auteur="Agent DDPP lors des entretiens initiaux"
              />
              <Verbatim
                citation="Les PDF qui s'ouvrent dans la même page, c'est l'horreur. Je perds ma navigation à chaque fois et je dois tout recommencer."
                auteur="Agent DDFiP lors des entretiens initiaux"
              />
            </div>
          </div>

          {/* Section 03 - Processus */}
          <div id="processus" className="fade-in-section mb-16 scroll-mt-32">
            <h2 className="text-h2 text-orange mb-6">03. Processus de conception</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-8">
              Pour répondre à ces enjeux, j'ai structuré le projet en quatre phases clés,
              chacune centrée sur les besoins réels des utilisateurs.
            </p>

            <div className="space-y-10">
              {/* Phase 1 */}
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">1. Comprendre les besoins réels des agents</h3>
                <p className="text-lg text-dark/80 leading-relaxed mb-4">
                  J'ai mené des entretiens individuels et analysé l'existant pour identifier les principaux points de friction.
                </p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold text-xl">12 agents</span>
                    <span className="text-dark/70 text-sm ml-2">interrogés</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold text-xl">6 services</span>
                    <span className="text-dark/70 text-sm ml-2">différents</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold text-xl">35 pages</span>
                    <span className="text-dark/70 text-sm ml-2">clés analysées</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold text-xl">5-7 clics</span>
                    <span className="text-dark/70 text-sm ml-2">en moyenne</span>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">2. Cadrer les objectifs</h3>
                <p className="text-lg text-dark/80 leading-relaxed mb-4">
                  Sur la base des insights recueillis, j'ai défini des objectifs mesurables pour guider la refonte.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold text-xl">Max 3 clics</span>
                    <span className="text-dark/70 text-sm ml-2">objectif de navigation</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold text-xl">8 → 5</span>
                    <span className="text-dark/70 text-sm ml-2">rubriques principales</span>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">3. Concevoir</h3>
                <p className="text-lg text-dark/80 leading-relaxed mb-4">
                  J'ai créé des wireframes, des gabarits de pages et des prototypes interactifs pour tester différentes organisations de contenu.
                </p>
                <div className="bg-orange/10 rounded-lg px-4 py-2 inline-block">
                  <span className="text-orange font-bold text-xl">15 gabarits</span>
                  <span className="text-dark/70 text-sm ml-2">créés</span>
                </div>
              </div>

              {/* Phase 4 */}
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">4. Tester et itérer</h3>
                <p className="text-lg text-dark/80 leading-relaxed mb-4">
                  Des sessions de tests avec des agents ont permis d'identifier rapidement les intitulés confus et les parcours bloquants.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold text-xl">8 agents</span>
                    <span className="text-dark/70 text-sm ml-2">testeurs</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold text-xl">3 sessions</span>
                    <span className="text-dark/70 text-sm ml-2">de tests</span>
                  </div>
                  <div className="bg-orange/10 rounded-lg px-4 py-2">
                    <span className="text-orange font-bold text-xl">7 rubriques</span>
                    <span className="text-dark/70 text-sm ml-2">renommées</span>
                  </div>
                </div>

                <Verbatim
                  citation="Le titre 'Ressources UD-DRIEAT', ça ne me parle pas. Moi je cherche juste 'Mes outils' ou 'Mes documents', vous voyez ?"
                  auteur="Agent UD-DRIEAT lors des tests de wireframes"
                />
              </div>
            </div>
          </div>

          {/* Section - Visuels du projet */}
          <div className="mb-16">
            <h2 className="text-h2 text-orange mb-8">Évolution visuelle du projet</h2>

            {/* 1. Avant / Après : Page d'accueil */}
            <div className="mb-12">
              {/* Avant */}
              <div className="fade-in-section mb-8">
                <h4 className="text-3xl font-bold text-orange mb-6">Avant</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                  {/* Première ligne - 3 images */}
                  <div className="bg-dark/5 rounded-xl overflow-hidden">
                    <ImageZoom
                      src="/images/intranet-avant.jpg"
                      alt="Page d'accueil de l'intranet avant la refonte - Interface Extra92"
                      width={800}
                      height={1600}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="bg-dark/5 rounded-xl overflow-hidden">
                    <ImageZoom
                      src="/images/intranet-apres.jpg"
                      alt="Page de contenu de l'intranet avant la refonte - Interface Extra92"
                      width={800}
                      height={1600}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="bg-dark/5 rounded-xl overflow-hidden">
                    <ImageZoom
                      src="/images/intranet-avant-3.jpg"
                      alt="Page Rénovation CAD de l'intranet avant la refonte - Interface Extra92"
                      width={800}
                      height={1600}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Deuxième ligne - 2 images centrées */}
                  <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="bg-dark/5 rounded-xl overflow-hidden">
                      <ImageZoom
                        src="/images/intranet-avant-4.jpg"
                        alt="Page Charte graphique de l'intranet avant la refonte - Interface Extra92"
                        width={800}
                        height={1600}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="bg-dark/5 rounded-xl overflow-hidden">
                      <ImageZoom
                        src="/images/intranet-avant-5.jpg"
                        alt="Page Sécurité informatique de l'intranet avant la refonte - Interface Extra92"
                        width={800}
                        height={1600}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Après */}
              <div className="fade-in-section">
                <h4 className="text-3xl font-bold text-orange mb-6">Après</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                  {/* Première ligne - 3 images */}
                  <div className="bg-dark/5 rounded-xl overflow-hidden">
                    <ImageZoom
                      src="/images/intranet-apres-accueil.jpg"
                      alt="Page d'accueil de l'intranet après la refonte - Interface modernisée"
                      width={800}
                      height={1600}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="bg-dark/5 rounded-xl overflow-hidden">
                    <ImageZoom
                      src="/images/intranet-apres-actu.jpg"
                      alt="Page actualités de l'intranet après la refonte"
                      width={800}
                      height={1600}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="bg-dark/5 rounded-xl overflow-hidden">
                    <ImageZoom
                      src="/images/intranet-apres-demenager.jpg"
                      alt="Page Déménager en 2026 de l'intranet après la refonte"
                      width={800}
                      height={1600}
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Deuxième ligne - 3 images */}
                  <div className="bg-dark/5 rounded-xl overflow-hidden">
                    <ImageZoom
                      src="/images/intranet-apres-renovation.jpg"
                      alt="Page Rénovation de l'intranet après la refonte"
                      width={800}
                      height={1600}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="bg-dark/5 rounded-xl overflow-hidden">
                    <ImageZoom
                      src="/images/intranet-apres-nourrir.jpg"
                      alt="Page Mieux se nourrir de l'intranet après la refonte"
                      width={800}
                      height={1600}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="bg-dark/5 rounded-xl overflow-hidden">
                    <ImageZoom
                      src="/images/intranet-apres-politique.jpg"
                      alt="Page Politiques prioritaires de l'intranet après la refonte"
                      width={800}
                      height={1600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Architecture de l'information */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-navy mb-6">Architecture de l'information</h3>
              <div className="bg-cream border-2 border-orange/20 rounded-xl p-8 md:p-12">
                <Image
                  src="/images/arborescence-intranet.svg"
                  alt="Arborescence de l'intranet interministériel - Organisation des contenus et navigation"
                  width={3000}
                  height={1500}
                  className="w-full h-auto mx-auto"
                  priority
                />
              </div>

              {/* Bouton prototype Figma */}
              <div className="mt-8 flex justify-center">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-orange rounded-[50px] text-orange font-bold transition-all duration-300 hover:bg-orange hover:text-cream"
                >
                  <svg width="20" height="20" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" fill="currentColor"/>
                    <path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z" fill="currentColor"/>
                    <path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z" fill="currentColor"/>
                    <path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z" fill="currentColor"/>
                    <path d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z" fill="currentColor"/>
                  </svg>
                  Voir le prototype sur Figma
                </a>
              </div>
            </div>
          </div>

          {/* Section 04 - Résultats */}
          <div id="resultats" className="fade-in-section mb-16 scroll-mt-32">
            <h2 className="text-h2 text-orange mb-6">04. Résultats et impact</h2>

            {/* A. Portée du projet */}
            <div className="bg-navy/5 rounded-2xl p-8 mb-10">
              <h3 className="text-2xl font-bold text-navy mb-6">Portée du projet</h3>
              <ul className="space-y-3 text-lg text-dark/80">
                <li className="flex items-start gap-3">
                  <span className="text-orange mt-1">•</span>
                  <span><strong>1 intranet interministériel</strong> couvrant 11 services de l'État</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange mt-1">•</span>
                  <span><strong>~400 agents</strong> concernés au quotidien</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange mt-1">•</span>
                  <span><strong>Refonte complète :</strong> 65 pages restructurées et 15 nouveaux gabarits créés</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange mt-1">•</span>
                  <span><strong>4 itérations</strong> de maquettes avant validation finale</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange mt-1">•</span>
                  <span><strong>Durée du projet :</strong> 6 mois (de la recherche initiale au déploiement)</span>
                </li>
              </ul>
            </div>

            {/* B. Améliorations mesurées */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-navy mb-6">Améliorations mesurées</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-dark mb-3">Navigation plus fluide</h4>
                  <p className="text-lg text-dark/80 leading-relaxed">
                    Réduction du nombre de clics moyen : de <strong className="text-orange">5-7 clics</strong> à{' '}
                    <strong className="text-orange">2-3 clics</strong> (réduction d'environ <strong className="text-orange">50%</strong>)
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-dark mb-3">Meilleure lisibilité</h4>
                  <p className="text-lg text-dark/80 leading-relaxed">
                    <strong className="text-orange">100%</strong> des pages restructurées avec titres, sous-titres et listes
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-dark mb-3">Satisfaction utilisateur</h4>
                  <p className="text-lg text-dark/80 leading-relaxed mb-4">
                    Enquête informelle auprès de <strong>25 agents</strong>, 2 mois après le déploiement :
                  </p>
                  <ul className="space-y-2 text-lg text-dark/80">
                    <li className="flex items-start gap-3">
                      <span className="text-orange font-bold">76%</span>
                      <span>trouvent l'intranet "plus facile à utiliser"</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange font-bold">68%</span>
                      <span>disent "trouver l'information plus rapidement qu'avant"</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange font-bold">82%</span>
                      <span>apprécient la nouvelle page d'accueil avec les accès rapides</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* C. Statistiques techniques */}
            <div className="fade-in-section grid grid-cols-2 md:grid-cols-4 gap-8 bg-navy/5 rounded-2xl p-8 mb-10">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange mb-2">100%</div>
                <div className="text-dark/70">Taux accessibilité</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange mb-2">95%</div>
                <div className="text-dark/70">Performance</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange mb-2">2s</div>
                <div className="text-dark/70">Temps de chargement</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange mb-2">100%</div>
                <div className="text-dark/70">Mobile-friendly</div>
              </div>
            </div>

            {/* D. Retours utilisateurs */}
            <div>
              <h3 className="text-2xl font-bold text-navy mb-6">Retours utilisateurs</h3>
              <div className="fade-in-section grid grid-cols-1 md:grid-cols-2 gap-6">
                <Verbatim
                  citation="Maintenant je trouve mes documents en 30 secondes au lieu de 5 minutes. C'est le jour et la nuit."
                  auteur="Agent SGCD, 2 mois après le déploiement"
                />
                <Verbatim
                  citation="C'est enfin clair où cliquer. Avant, je ne savais même pas que certains mots étaient des liens."
                  auteur="Agent DSDEN, 2 mois après le déploiement"
                />
                <Verbatim
                  citation="Je n'ai plus besoin d'appeler mon collègue pour savoir où est la procédure de validation budgétaire. Je vais directement dans 'Mes outils' et c'est là."
                  auteur="Agent DDFiP, 2 mois après le déploiement"
                />
                <Verbatim
                  citation="L'ouverture des PDF dans un nouvel onglet, ça change tout. Je peux consulter plusieurs documents sans perdre ma place."
                  auteur="Agent DTSP, 2 mois après le déploiement"
                />
              </div>
            </div>
          </div>

          {/* Section 05 - Apprentissages et suite */}
          <div id="apprentissages" className="fade-in-section mb-16 bg-orange/5 rounded-2xl p-8 md:p-12 scroll-mt-32">
            <h2 className="text-h2 text-orange mb-8">Apprentissages et suite</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Ce que j'ai appris */}
              <div>
                <h3 className="text-2xl font-bold text-navy mb-6">Ce que ce projet m'a appris</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-dark mb-3">Partir du terrain</h4>
                    <p className="text-dark/80 leading-relaxed">
                      Les entretiens avec les agents ont révélé des problèmes invisibles sur les pages : raccourcis utilisés,
                      documents "cachés", détours par mail ou téléphone. L'analyse seule ne suffit pas.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-dark mb-3">Concevoir dans un contexte complexe</h4>
                    <p className="text-dark/80 leading-relaxed">
                      Travailler avec de nombreux services ayant leurs sigles et logiques propres m'a appris à trouver un équilibre
                      entre vocabulaire institutionnel et langage des utilisateurs réels.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-dark mb-3">L'impact des petites décisions</h4>
                    <p className="text-dark/80 leading-relaxed">
                      Des détails comme le comportement des PDF, la hiérarchie typographique ou le positionnement des accès rapides
                      ont un impact réel et mesurable sur la satisfaction quotidienne.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pistes d'amélioration */}
              <div>
                <h3 className="text-2xl font-bold text-navy mb-6">Pistes d'amélioration futures</h3>
                <p className="text-dark/80 leading-relaxed mb-6">
                  Si je devais poursuivre ce projet, je mettrais en place :
                </p>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-dark mb-3">Des outils de suivi analytique</h4>
                    <p className="text-dark/80 leading-relaxed">
                      Statistiques de consultation, parcours types, taux de rebond par rubrique pour objectiver les gains
                      et identifier les zones encore problématiques.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-dark mb-3">Des tests utilisateurs plus formels</h4>
                    <p className="text-dark/80 leading-relaxed">
                      Sessions structurées avec différents profils d'agents (nouveaux arrivants, experts métier, managers)
                      pour affiner certains parcours spécifiques.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-dark mb-3">Une approche produit</h4>
                    <p className="text-dark/80 leading-relaxed">
                      Traiter l'intranet comme un produit vivant, avec des cycles réguliers d'amélioration (tous les 3-6 mois)
                      basés sur les retours des utilisateurs.
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
                href="/projets/moveiq"
                className="project-card group bg-cream border-2 border-orange/20 rounded-2xl p-6 transition-all duration-300 hover:border-orange hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="w-full h-64 bg-navy/10 rounded-xl mb-6 overflow-hidden">
                  <Image
                    src="/images/moveiq-landing.png"
                    alt="MoveIQ — Plateforme de coaching basketball"
                    width={1200}
                    height={900}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-2xl font-bold text-navy text-center group-hover:text-orange transition-colors">
                  MoveIQ — Plateforme de coaching basketball
                </h3>
              </Link>

              <Link
                href="/projets/leucare"
                className="project-card group bg-cream border-2 border-orange/20 rounded-2xl p-6 transition-all duration-300 hover:border-orange hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="w-full h-64 bg-slate-50 rounded-xl mb-6 overflow-hidden">
                  <Image
                    src="/images/leucare-splash.png"
                    alt="LeuCare — Application mobile leucémie"
                    width={1200}
                    height={900}
                    className="w-full h-full object-contain bg-slate-50"
                  />
                </div>
                <h3 className="text-2xl font-bold text-navy text-center group-hover:text-orange transition-colors">
                  LeuCare — Application mobile leucémie
                </h3>
              </Link>

              <Link
                href="/projets/generateur-factures"
                className="project-card group bg-cream border-2 border-orange/20 rounded-2xl p-6 transition-all duration-300 hover:border-orange hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="w-full h-64 bg-navy/10 rounded-xl mb-6 overflow-hidden">
                  <Image
                    src="/images/generateur-factures/hero-desktop.png"
                    alt="Générateur de Factures IA — application web en production"
                    width={1200}
                    height={900}
                    className="w-full h-full object-cover object-top"
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
