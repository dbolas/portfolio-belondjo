import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Navigation, Footer } from '@/components/layout';
import { Button } from '@/components/ui';
import { notFound } from 'next/navigation';

// Données des projets (à terme, cela pourrait venir d'un CMS ou d'une API)
const projects = {
  'portfolio-moderne': {
    title: 'Portfolio Moderne',
    subtitle: 'Site portfolio avec Next.js 16 et Design System',
    role: 'Conception UX/UI, Développement Full Stack',
    team: 'Projet solo',
    year: '2026',
    heroImage: '/images/hero.jpeg',
    sections: [
      {
        number: '01',
        title: 'Aperçu',
        content: `Ce projet consiste en la création d'un site portfolio moderne utilisant les dernières technologies web. L'objectif était de créer une expérience utilisateur exceptionnelle tout en respectant un Design System strict.

Le site utilise Next.js 16 avec App Router, React 19, TypeScript et Tailwind CSS v4. Une attention particulière a été portée à la performance et à l'accessibilité.`,
      },
      {
        number: '02',
        title: 'Problème',
        content: `Besoin d'une présence en ligne professionnelle qui se démarque. Le portfolio devait être à la fois moderne, performant et refléter une identité visuelle forte.

Les défis incluaient la création d'un Design System cohérent avec des composants réutilisables, l'optimisation des performances, et la mise en place d'une architecture évolutive.`,
      },
      {
        number: '03',
        title: 'Processus de conception',
        content: `Le processus a commencé par la définition d'un Design System strict avec une palette de couleurs spécifique (Cream, Orange, Navy, Dark) et l'utilisation exclusive de la police Courier Prime.

Ensuite, création de composants UI réutilisables (Button, Input, Textarea) respectant les spécifications du Design System. Mise en place de l'architecture avec 4 pages principales (Maison, À propos, CV, Contact).

Intégration des assets visuels (logo, favicon, images) et optimisation des performances avec Next.js Image et code splitting automatique.`,
      },
      {
        number: '04',
        title: 'Solution et résultats',
        content: `Le résultat est un portfolio moderne et performant qui respecte strictement le Design System défini.

Les composants réutilisables permettent une maintenance facile et une évolutivité du projet. La structure en 4 pages distinctes optimise le SEO et facilite la navigation.`,
      },
    ],
    stats: [
      { value: '100%', label: 'Score Lighthouse Performance' },
      { value: '4', label: 'Pages principales' },
      { value: '10+', label: 'Composants réutilisables' },
      { value: '95%', label: 'Satisfaction client' },
    ],
    liveUrl: 'https://portfolio-belondjo.vercel.app',
    technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4'],
  },
  'design-system': {
    title: 'Design System',
    subtitle: 'Système de design complet avec composants réutilisables',
    role: 'Design System Architect, UI Developer',
    team: 'Équipe de 2 designers',
    year: '2025',
    heroImage: '/images/hero.jpeg',
    sections: [
      {
        number: '01',
        title: 'Aperçu',
        content: `Création d'un Design System complet pour assurer la cohérence visuelle et fonctionnelle à travers tous les projets de l'entreprise.`,
      },
      {
        number: '02',
        title: 'Problème',
        content: `Incohérences visuelles entre les différents projets. Besoin d'un système unifié pour accélérer le développement.`,
      },
      {
        number: '03',
        title: 'Processus',
        content: `Audit des composants existants, définition des tokens de design, création de la documentation interactive avec Storybook.`,
      },
      {
        number: '04',
        title: 'Résultats',
        content: `Réduction de 40% du temps de développement. Cohérence totale entre les projets.`,
      },
    ],
    stats: [
      { value: '40%', label: 'Réduction du temps de dev' },
      { value: '50+', label: 'Composants documentés' },
      { value: '5', label: 'Projets utilisant le DS' },
      { value: '100%', label: 'Adoption par l\'équipe' },
    ],
    technologies: ['React', 'Storybook', 'Figma', 'TypeScript'],
  },
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-cream pt-28">
        {/* Hero Section */}
        <section className="py-16 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/cv"
              className="inline-flex items-center gap-2 text-dark hover:text-orange transition-colors mb-8"
            >
              <ArrowLeft size={20} />
              <span className="font-bold">Retour aux projets</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
              <div>
                <h1 className="text-hero text-orange mb-4">{project.title}</h1>
                <p className="text-xl text-dark/70">{project.subtitle}</p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-bold text-orange mb-2">RÔLE</h3>
                  <p className="text-dark">{project.role}</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-orange mb-2">ÉQUIPE</h3>
                  <p className="text-dark">{project.team}</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl mb-16">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Sections du projet */}
        <section className="py-16 px-6 lg:px-12 bg-cream">
          <div className="max-w-4xl mx-auto space-y-16">
            {project.sections.map((section) => (
              <div key={section.number}>
                <h2 className="text-h2 text-orange mb-6">
                  {section.number}. {section.title}
                </h2>
                <div className="prose prose-lg max-w-none">
                  {section.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-dark/80 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Statistiques */}
        {project.stats && (
          <section className="py-16 px-6 lg:px-12 bg-navy">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {project.stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-5xl font-bold text-orange mb-2">
                      {stat.value}
                    </div>
                    <div className="text-cream/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Technologies */}
        <section className="py-16 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 text-orange mb-8">Technologies utilisées</h2>
            <div className="flex flex-wrap gap-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-6 py-3 bg-orange/10 text-orange font-bold rounded-pill border-2 border-orange"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        {project.liveUrl && (
          <section className="py-16 px-6 lg:px-12 bg-navy">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-h2 text-orange mb-6">
                Consultez le projet en direct
              </h2>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg">Voir le site</Button>
              </a>
            </div>
          </section>
        )}

        {/* Autres projets */}
        <section className="py-16 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-h2 text-orange mb-8">Autres projets</h2>
            <Link href="/cv">
              <Button variant="secondary" size="lg">
                Voir tous les projets
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

// Générer les pages statiques pour tous les projets
export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug: slug,
  }));
}
