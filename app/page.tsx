import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Mail } from 'lucide-react';
import { Navigation, Footer } from '@/components/layout';
import { Button } from '@/components/ui';

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Hero Section — centré, minimaliste */}
      <section className="bg-cream pt-48 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-lg text-dark/60 mb-4 animate-fade-in">Salut&nbsp;!</p>
          <h1 className="text-hero text-orange mb-6 text-center animate-fade-in">
            Je suis Belondjo,<br />Product Designer &amp; Builder
          </h1>
          <div className="inline-flex items-center gap-2 bg-orange/10 border border-orange/30 rounded-full px-4 py-2 mb-10 animate-slide-up">
            <span className="w-2 h-2 rounded-full bg-orange animate-pulse"></span>
            <span className="text-sm text-dark/80 font-bold">11 ans d&apos;expérience · Solo Builder · IA</span>
          </div>
          <p className="text-xl text-dark/80 mb-12 max-w-2xl mx-auto animate-slide-up leading-relaxed">
            Je conçois des interfaces centrées utilisateur et je les construis — de la recherche au produit fonctionnel, sans dépendance à une équipe de développement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <a
              href="/cv/CV-Belondjo.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" iconAfter={<ArrowRight />}>
                Voir mon CV
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Me contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Projets — layout alterné gauche/droite */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-sm text-dark/50 uppercase tracking-wider mb-3">Mes réalisations</p>
            <h2 className="text-h2 text-orange">Études de cas sélectionnées</h2>
          </div>

          <div className="space-y-32">
            {/* Projet 1 — Intranet : Image gauche, texte droite */}
            <Link href="/projets/intranet-interministeriel" className="block group">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="bg-navy/5 rounded-2xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                  <Image
                    src="/images/mockup-intranet-laptop.png"
                    alt="Mockup de l'intranet interministériel sur ordinateur portable"
                    width={1200}
                    height={900}
                    className="w-full h-auto object-cover scale-110"
                  />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-sm text-dark/50 uppercase tracking-wider mb-3">Refonte UX · Secteur public</p>
                  <h3 className="text-3xl lg:text-4xl text-orange font-bold mb-4 group-hover:underline decoration-2 underline-offset-4">
                    Intranet interministériel des Hauts-de-Seine
                  </h3>
                  <p className="text-lg text-dark/70 leading-relaxed">
                    Refonte UX d&apos;un intranet pour 400 agents de l&apos;État. Recherche utilisateurs, architecture de l&apos;information, design system.
                  </p>
                </div>
              </div>
            </Link>

            {/* Projet 2 — MoveIQ : Texte gauche, image droite */}
            <Link href="/projets/moveiq" className="block group">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left order-2 md:order-1">
                  <p className="text-sm text-dark/50 uppercase tracking-wider mb-3">SaaS B2C · Sport</p>
                  <h3 className="text-3xl lg:text-4xl text-orange font-bold mb-4 group-hover:underline decoration-2 underline-offset-4">
                    MoveIQ — Plateforme de coaching basketball
                  </h3>
                  <p className="text-lg text-dark/70 leading-relaxed">
                    Plateforme de suivi de progression pour jeunes joueurs (6-18 ans). Conçue et développée en solo avec Claude Code.
                  </p>
                </div>
                <div className="bg-navy/5 rounded-2xl overflow-hidden order-1 md:order-2 transition-transform duration-500 group-hover:scale-[1.02]">
                  <Image
                    src="/images/moveiq-landing.png"
                    alt="MoveIQ — Plateforme de coaching basketball"
                    width={1200}
                    height={900}
                    className="w-full h-auto object-cover object-top"
                  />
                </div>
              </div>
            </Link>

            {/* Projet 3 — Générateur Factures : Image gauche, texte droite */}
            <Link href="/projets/generateur-factures" className="block group">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="bg-navy/5 rounded-2xl overflow-hidden p-4 transition-transform duration-500 group-hover:scale-[1.02]">
                  <Image
                    src="/images/generateur-factures/mockup-desktop.png"
                    alt="Générateur de Factures IA — application web en production sur MacBook"
                    width={1600}
                    height={1000}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-sm text-dark/50 uppercase tracking-wider mb-3">App web en production · IA</p>
                  <h3 className="text-3xl lg:text-4xl text-orange font-bold mb-4 group-hover:underline decoration-2 underline-offset-4">
                    Générateur de Factures IA
                  </h3>
                  <p className="text-lg text-dark/70 leading-relaxed">
                    Application web en production — création de factures par dictée vocale ou texte avec Gemini 3 Pro.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Section À propos */}
      <section className="py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <p className="text-sm text-dark/50 uppercase tracking-wider mb-3">À propos</p>
              <h2 className="text-h2 text-orange mb-6">Ravi de te rencontrer&nbsp;!</h2>
              <p className="text-lg text-dark/80 leading-relaxed mb-6">
                Product Designer avec 11 ans d&apos;expérience dans le numérique. Passionné par la rencontre entre l&apos;UX research et la construction de produits, je conçois ET je build — grâce à l&apos;IA et aux outils modernes, je transforme une idée en produit fonctionnel sans dépendance à une équipe de dev.
              </p>
              <p className="text-lg text-dark/80 leading-relaxed mb-8">
                Mon approche&nbsp;: comprendre les utilisateurs, prototyper rapidement, livrer des produits que les gens utilisent vraiment.
              </p>
              <Link href="/contact">
                <Button size="lg" iconAfter={<ArrowRight />}>Discutons</Button>
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero.jpeg"
                alt="Belondjo Bolankoko, Product Designer"
                width={800}
                height={1000}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section className="py-24 bg-cream border-t border-dark/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-sm text-dark/50 uppercase tracking-wider mb-4 flex items-center justify-center gap-2">
            <Mail size={16} />
            <span>Contactez-moi</span>
          </p>
          <a
            href="mailto:belondjobolankoko@gmail.com"
            className="text-2xl md:text-4xl text-orange font-bold hover:underline decoration-2 underline-offset-4 break-all transition-all"
          >
            belondjobolankoko@gmail.com
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
