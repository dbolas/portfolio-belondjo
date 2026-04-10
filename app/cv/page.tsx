import Link from 'next/link';
import { Code, Palette, Rocket, Globe, Database, Smartphone } from 'lucide-react';
import { Navigation, Footer } from '@/components/layout';
import { Button } from '@/components/ui';

const projects = [
  {
    title: 'Portfolio Moderne',
    description: 'Site portfolio avec Next.js 16, Tailwind CSS v4, et animations Framer Motion. Design System complet avec composants réutilisables.',
    icon: Code,
    color: 'orange',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    slug: 'portfolio-moderne',
  },
  {
    title: 'Design System',
    description: 'Système de design complet avec composants réutilisables et documentation interactive. Utilisé par plusieurs projets.',
    icon: Palette,
    color: 'navy',
    tags: ['React', 'Storybook', 'CSS', 'Documentation'],
    slug: 'design-system',
  },
  {
    title: 'Application SaaS',
    description: 'Plateforme SaaS avec authentification, dashboard interactif, et intégration des paiements Stripe.',
    icon: Rocket,
    color: 'orange',
    tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Auth'],
    slug: 'portfolio-moderne',
  },
  {
    title: 'Site E-commerce',
    description: 'Boutique en ligne complète avec gestion des produits, panier, et processus de commande optimisé.',
    icon: Globe,
    color: 'navy',
    tags: ['React', 'Node.js', 'MongoDB', 'PayPal'],
    slug: 'design-system',
  },
  {
    title: 'API RESTful',
    description: 'API backend robuste avec authentification JWT, documentation Swagger, et tests automatisés.',
    icon: Database,
    color: 'orange',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
    slug: 'portfolio-moderne',
  },
  {
    title: 'Application Mobile',
    description: 'Application mobile cross-platform pour iOS et Android avec synchronisation temps réel.',
    icon: Smartphone,
    color: 'navy',
    tags: ['React Native', 'Firebase', 'Redux', 'APIs'],
    slug: 'design-system',
  },
];

export default function CVPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-cream pt-28 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h1 className="text-hero text-orange mb-4">CV</h1>
          <p className="text-xl text-dark/70 mb-16 max-w-2xl">
            Découvrez mes projets et réalisations qui démontrent mes compétences
            en développement web full stack.
          </p>

          {/* Grille de projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project) => {
              const Icon = project.icon;
              const bgColor = project.color === 'orange' ? 'bg-orange/10' : 'bg-navy/10';
              const iconColor = project.color === 'orange' ? 'text-orange' : 'text-navy';

              return (
                <div
                  key={project.title}
                  className="bg-cream border-2 border-orange rounded-xl p-6 hover:scale-105 transition-all duration-300"
                >
                  <div className={`${bgColor} rounded-lg p-4 mb-4 flex items-center justify-center h-48`}>
                    <Icon size={64} className={iconColor} />
                  </div>
                  <h3 className="text-h3 text-orange mb-3">{project.title}</h3>
                  <p className="text-dark/70 mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-orange/10 text-orange rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href={`/cv/${project.slug}`}>
                    <Button size="sm" fullWidth>
                      Voir le projet
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-orange/10 rounded-xl border-2 border-orange">
              <div className="text-4xl font-bold text-orange mb-2">25+</div>
              <div className="text-dark/70">Projets réalisés</div>
            </div>
            <div className="text-center p-6 bg-navy/10 rounded-xl border-2 border-navy">
              <div className="text-4xl font-bold text-navy mb-2">15+</div>
              <div className="text-dark/70">Clients satisfaits</div>
            </div>
            <div className="text-center p-6 bg-orange/10 rounded-xl border-2 border-orange">
              <div className="text-4xl font-bold text-orange mb-2">3+</div>
              <div className="text-dark/70">Années d&apos;expérience</div>
            </div>
            <div className="text-center p-6 bg-navy/10 rounded-xl border-2 border-navy">
              <div className="text-4xl font-bold text-navy mb-2">100%</div>
              <div className="text-dark/70">Satisfaction</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-navy rounded-2xl p-12">
            <h2 className="text-h2 text-orange mb-4">Intéressé par mon profil ?</h2>
            <p className="text-xl text-cream/80 mb-8">
              Téléchargez mon CV ou contactez-moi pour discuter de votre projet
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/cv/CV-Belondjo.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg">Télécharger le CV (PDF)</Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="secondary">Me contacter</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
