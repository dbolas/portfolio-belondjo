import { Navigation, Footer } from '@/components/layout';
import { Button } from '@/components/ui';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function InterfaceMobilePage() {
  return (
    <>
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
            <h1 className="text-hero text-orange mb-4">Interface Mobile</h1>
            <p className="text-xl text-dark/70 mb-8">UI/UX Designer • Prototypage</p>

            {/* Image principale */}
            <div className="w-full h-[400px] lg:h-[600px] bg-navy/10 rounded-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-dark/50">
                Image de l'interface mobile
              </div>
            </div>
          </div>

          {/* Infos du projet */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-h3 text-navy mb-4">Rôle</h3>
              <p className="text-dark/80">UI/UX Designer</p>
              <p className="text-dark/80">Prototypage interactif</p>
            </div>
            <div>
              <h3 className="text-h3 text-navy mb-4">Équipe</h3>
              <p className="text-dark/80">Designer solo</p>
              <p className="text-dark/80">Collaboration avec devs</p>
            </div>
          </div>

          {/* Section 01 - Aperçu */}
          <div className="mb-16">
            <h2 className="text-h2 text-orange mb-6">01. Aperçu</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-6">
              Conception d'une application mobile moderne et intuitive axée sur l'expérience utilisateur mobile-first.
              L'interface privilégie la simplicité d'utilisation avec des interactions tactiles naturelles et une navigation fluide.
            </p>
            <p className="text-lg text-dark/80 leading-relaxed">
              Design adaptatif optimisé pour différentes tailles d'écran (smartphone et tablette) avec attention particulière aux zones tactiles et à l'ergonomie mobile.
            </p>
          </div>

          {/* Section 02 - Problème */}
          <div className="mb-16">
            <h2 className="text-h2 text-orange mb-6">02. Problème</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-6">
              Les utilisateurs mobiles représentent plus de 70% du trafic mais l'expérience était sous-optimale avec des interfaces conçues desktop-first puis adaptées.
              Navigation complexe et interactions tactiles peu intuitives entraînaient frustration et abandons.
            </p>
            <p className="text-lg text-dark/80 leading-relaxed">
              Nécessité de repenser complètement l'expérience en adoptant une approche mobile-first avec focus sur les gestes tactiles et la performance.
            </p>
          </div>

          {/* Section 03 - Processus */}
          <div className="mb-16">
            <h2 className="text-h2 text-orange mb-6">03. Processus de conception</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-6">
              Analyse comportementale des utilisateurs mobiles et mapping des parcours critiques. Création de wireframes mobile-first avec focus sur les interactions tactiles essentielles.
              Prototypes haute-fidélité dans Figma avec micro-interactions et animations.
            </p>
            <p className="text-lg text-dark/80 leading-relaxed">
              Tests utilisateurs sur différents devices pour valider l'ergonomie et l'accessibilité des zones tactiles. Itérations basées sur les retours avec ajustements des espacements et des tailles d'éléments interactifs.
            </p>
          </div>

          {/* Section 04 - Solution */}
          <div className="mb-16">
            <h2 className="text-h2 text-orange mb-6">04. Solution et résultats</h2>
            <p className="text-lg text-dark/80 leading-relaxed mb-12">
              Interface mobile intuitive avec navigation par gestes, animations fluides et design adaptatif.
              Architecture de l'information optimisée pour mobile avec hiérarchie visuelle claire et actions rapides accessibles.
            </p>

            {/* Statistiques */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-navy/5 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange mb-2">45%</div>
                <div className="text-dark/70">Augmentation engagement</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange mb-2">30%</div>
                <div className="text-dark/70">Réduction taux rebond</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange mb-2">4.7/5</div>
                <div className="text-dark/70">Note app stores</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange mb-2">98%</div>
                <div className="text-dark/70">Compatible devices</div>
              </div>
            </div>
          </div>

          {/* Autres projets */}
          <div className="mt-24 pt-12 border-t border-dark/10">
            <h2 className="text-h2 text-orange mb-8 text-center">Voir d'autres projets</h2>
            <div className="flex justify-center">
              <Link href="/">
                <Button size="lg">Retour aux réalisations</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
