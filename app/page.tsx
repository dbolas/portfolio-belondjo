'use client';

import { useState } from 'react';
import { ArrowRight, Code, Palette, Rocket, Mail, MapPin, Phone } from 'lucide-react';
import { Navigation, Footer } from '@/components/layout';
import { Button, Input, Textarea } from '@/components/ui';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Ajouter logique d'envoi
    alert('Merci pour votre message! (TODO: connecter à un service d\'email)');
  };

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen bg-cream flex items-center justify-center pt-20"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
          <div className="text-center lg:text-left">
            <h1 className="text-hero text-orange mb-6 animate-fade-in">
              Belondjo
            </h1>
            <h2 className="text-h2 text-dark mb-8 animate-slide-up">
              Développeur Full Stack
            </h2>
            <p className="text-xl text-dark/80 mb-12 max-w-2xl animate-slide-up">
              Je crée des expériences web modernes, performantes et élégantes
              avec Next.js, React et TypeScript.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
              <Button size="lg" iconAfter={<ArrowRight />}>
                <a href="#travail">Voir mes projets</a>
              </Button>
              <Button size="lg" variant="secondary">
                <a href="#contact">Me contacter</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Travail */}
      <section id="travail" className="min-h-screen bg-cream py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="text-h2 text-orange mb-4">Travail</h2>
          <p className="text-xl text-dark/70 mb-16 max-w-2xl">
            Quelques projets récents qui démontrent mes compétences et ma passion
            pour le développement web.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Projet 1 */}
            <div className="bg-cream border-2 border-orange rounded-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="bg-orange/10 rounded-lg p-4 mb-4 flex items-center justify-center h-48">
                <Code size={64} className="text-orange" />
              </div>
              <h3 className="text-h3 text-orange mb-3">
                Portfolio Moderne
              </h3>
              <p className="text-dark/70 mb-4">
                Site portfolio avec Next.js 16, Tailwind CSS v4, et animations
                Framer Motion.
              </p>
              <Button size="sm" fullWidth>
                Voir le projet
              </Button>
            </div>

            {/* Projet 2 */}
            <div className="bg-cream border-2 border-orange rounded-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="bg-navy/10 rounded-lg p-4 mb-4 flex items-center justify-center h-48">
                <Palette size={64} className="text-navy" />
              </div>
              <h3 className="text-h3 text-orange mb-3">
                Design System
              </h3>
              <p className="text-dark/70 mb-4">
                Système de design complet avec composants réutilisables et
                documentation.
              </p>
              <Button size="sm" fullWidth>
                Voir le projet
              </Button>
            </div>

            {/* Projet 3 */}
            <div className="bg-cream border-2 border-orange rounded-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="bg-orange/10 rounded-lg p-4 mb-4 flex items-center justify-center h-48">
                <Rocket size={64} className="text-orange" />
              </div>
              <h3 className="text-h3 text-orange mb-3">
                Application SaaS
              </h3>
              <p className="text-dark/70 mb-4">
                Plateforme SaaS avec authentification, dashboard et paiements
                Stripe.
              </p>
              <Button size="sm" fullWidth>
                Voir le projet
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section À propos */}
      <section id="about" className="min-h-screen bg-navy py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="text-h2 text-orange mb-4">À propos</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-xl text-cream/90 leading-relaxed">
                Développeur Full Stack passionné avec une expertise en React,
                Next.js et TypeScript. Je me spécialise dans la création
                d&apos;applications web performantes et accessibles.
              </p>
              <p className="text-lg text-cream/70 leading-relaxed">
                Mon approche combine design moderne, code propre et attention aux
                détails pour créer des expériences utilisateur exceptionnelles.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-h3 text-orange">Compétences</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'React',
                  'Next.js',
                  'TypeScript',
                  'Tailwind CSS',
                  'Node.js',
                  'PostgreSQL',
                  'Framer Motion',
                  'Git',
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-cream/10 border border-orange/30 rounded-lg px-4 py-3 text-cream text-center hover:bg-orange/20 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="min-h-screen bg-cream py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-h2 text-orange mb-4">Contact</h2>
          <p className="text-xl text-dark/70 mb-12">
            Vous avez un projet en tête ? N&apos;hésitez pas à me contacter !
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange/10 p-3 rounded-full">
                  <Mail className="text-orange" size={24} />
                </div>
                <div>
                  <h4 className="text-orange font-bold mb-1">Email</h4>
                  <a
                    href="mailto:contact@belondjo.com"
                    className="text-dark hover:text-orange transition-colors"
                  >
                    contact@belondjo.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange/10 p-3 rounded-full">
                  <Phone className="text-orange" size={24} />
                </div>
                <div>
                  <h4 className="text-orange font-bold mb-1">Téléphone</h4>
                  <a
                    href="tel:+33612345678"
                    className="text-dark hover:text-orange transition-colors"
                  >
                    +33 6 12 34 56 78
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange/10 p-3 rounded-full">
                  <MapPin className="text-orange" size={24} />
                </div>
                <div>
                  <h4 className="text-orange font-bold mb-1">Localisation</h4>
                  <p className="text-dark">Paris, France</p>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Nom"
                placeholder="Votre nom"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />

              <Input
                label="Email"
                type="email"
                placeholder="votre@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />

              <Textarea
                label="Message"
                placeholder="Décrivez votre projet..."
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />

              <Button type="submit" size="lg" fullWidth>
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
