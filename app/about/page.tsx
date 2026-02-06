import { Navigation, Footer } from '@/components/layout';

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-navy pt-28 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h1 className="text-hero text-orange mb-12">À propos</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Photo portrait */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-md">
                <img
                  src="/images/about-portrait.png"
                  alt="Belondjo - Développeur Full Stack"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Présentation */}
            <div className="space-y-6">
              <h2 className="text-h2 text-orange">Qui suis-je ?</h2>
              <p className="text-xl text-cream/90 leading-relaxed">
                Développeur Full Stack passionné avec une expertise en React,
                Next.js et TypeScript. Je me spécialise dans la création
                d&apos;applications web performantes et accessibles.
              </p>
              <p className="text-lg text-cream/70 leading-relaxed">
                Mon approche combine design moderne, code propre et attention aux
                détails pour créer des expériences utilisateur exceptionnelles.
              </p>
              <p className="text-lg text-cream/70 leading-relaxed">
                Passionné par l&apos;apprentissage continu, je reste toujours à jour
                avec les dernières technologies et meilleures pratiques du
                développement web.
              </p>
            </div>

            {/* Compétences */}
            <div className="space-y-6">
              <h2 className="text-h2 text-orange">Compétences</h2>

              <div>
                <h3 className="text-h3 text-orange mb-4">Frontend</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS'].map((skill) => (
                    <div
                      key={skill}
                      className="bg-cream/10 border border-orange/30 rounded-lg px-4 py-3 text-cream text-center hover:bg-orange/20 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-h3 text-orange mb-4">Backend</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Node.js', 'PostgreSQL', 'MongoDB', 'Express', 'API REST', 'GraphQL'].map((skill) => (
                    <div
                      key={skill}
                      className="bg-cream/10 border border-orange/30 rounded-lg px-4 py-3 text-cream text-center hover:bg-orange/20 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-h3 text-orange mb-4">Outils</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Git', 'Docker', 'Vercel', 'VS Code', 'Figma', 'Postman'].map((skill) => (
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

          {/* Expérience / Formation */}
          <div className="mt-16 space-y-12">
            <div>
              <h2 className="text-h2 text-orange mb-8">Expérience</h2>
              <div className="space-y-8">
                <div className="border-l-4 border-orange pl-6">
                  <h3 className="text-h3 text-orange">Développeur Full Stack</h3>
                  <p className="text-cream/70 text-lg mb-2">Freelance • 2023 - Présent</p>
                  <p className="text-cream/80">
                    Développement d&apos;applications web sur mesure pour divers clients.
                    Conception et mise en œuvre de solutions techniques adaptées.
                  </p>
                </div>

                <div className="border-l-4 border-orange pl-6">
                  <h3 className="text-h3 text-orange">Développeur Frontend</h3>
                  <p className="text-cream/70 text-lg mb-2">Entreprise XYZ • 2021 - 2023</p>
                  <p className="text-cream/80">
                    Développement de composants React réutilisables et maintenance
                    d&apos;applications SaaS à grande échelle.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-h2 text-orange mb-8">Formation</h2>
              <div className="space-y-8">
                <div className="border-l-4 border-orange pl-6">
                  <h3 className="text-h3 text-orange">Master Informatique</h3>
                  <p className="text-cream/70 text-lg mb-2">Université • 2019 - 2021</p>
                  <p className="text-cream/80">
                    Spécialisation en développement web et applications distribuées
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
