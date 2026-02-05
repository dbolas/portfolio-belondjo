import Link from 'next/link';
import { ArrowRight, Code, Palette, Rocket } from 'lucide-react';
import { Navigation, Footer } from '@/components/layout';
import { Button } from '@/components/ui';

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen bg-cream flex items-center justify-center pt-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
          <div className="text-center">
            <h1 className="text-hero text-orange mb-6 animate-fade-in">
              Belondjo
            </h1>
            <h2 className="text-h2 text-dark mb-8 animate-slide-up">
              Développeur Full Stack
            </h2>
            <p className="text-xl text-dark/80 mb-12 max-w-2xl mx-auto animate-slide-up">
              Je crée des expériences web modernes, performantes et élégantes
              avec Next.js, React et TypeScript.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link href="/cv">
                <Button size="lg" iconAfter={<ArrowRight />}>
                  Voir mon CV
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Me contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Projets en aperçu */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="text-h2 text-orange mb-4 text-center">Projets récents</h2>
          <p className="text-xl text-dark/70 mb-16 max-w-2xl mx-auto text-center">
            Découvrez quelques-uns de mes projets les plus récents
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cream border-2 border-orange rounded-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="bg-orange/10 rounded-lg p-4 mb-4 flex items-center justify-center h-48">
                <Code size={64} className="text-orange" />
              </div>
              <h3 className="text-h3 text-orange mb-3">Portfolio Moderne</h3>
              <p className="text-dark/70">
                Site portfolio avec Next.js 16 et Tailwind CSS v4
              </p>
            </div>

            <div className="bg-cream border-2 border-orange rounded-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="bg-navy/10 rounded-lg p-4 mb-4 flex items-center justify-center h-48">
                <Palette size={64} className="text-navy" />
              </div>
              <h3 className="text-h3 text-orange mb-3">Design System</h3>
              <p className="text-dark/70">
                Système de design complet avec composants réutilisables
              </p>
            </div>

            <div className="bg-cream border-2 border-orange rounded-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="bg-orange/10 rounded-lg p-4 mb-4 flex items-center justify-center h-48">
                <Rocket size={64} className="text-orange" />
              </div>
              <h3 className="text-h3 text-orange mb-3">Application SaaS</h3>
              <p className="text-dark/70">
                Plateforme SaaS avec authentification et paiements
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/cv">
              <Button size="lg" iconAfter={<ArrowRight />}>
                Voir tous mes projets
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
