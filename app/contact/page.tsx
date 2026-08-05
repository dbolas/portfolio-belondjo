import { Navigation, Footer } from '@/components/layout';

export default function ContactPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-cream pt-48 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image à gauche */}
            <div className="order-2 lg:order-1">
              <div className="relative w-full h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/contact-strasbourg.jpg"
                  alt="Strasbourg"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Contact à droite */}
            <div className="order-1 lg:order-2">
              <h1 className="text-h2 text-orange mb-3">Me contacter</h1>
              <p className="text-lg text-dark/70 mb-10 leading-relaxed">
                Un projet, une opportunité ou envie d&apos;échanger ? Voici comment me joindre.
              </p>

              <div className="space-y-8">
                <div>
                  <p className="text-sm text-dark/50 uppercase tracking-wider mb-2">Email</p>
                  <a
                    href="mailto:belondjobolankoko@gmail.com"
                    className="text-xl text-dark hover:text-orange transition-colors break-words"
                  >
                    belondjobolankoko@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-sm text-dark/50 uppercase tracking-wider mb-2">Téléphone</p>
                  <a
                    href="tel:+33768638705"
                    className="text-xl text-dark hover:text-orange transition-colors"
                  >
                    +33 7 68 63 87 05
                  </a>
                </div>

                <div>
                  <p className="text-sm text-dark/50 uppercase tracking-wider mb-2">Localisation</p>
                  <p className="text-xl text-dark">Strasbourg (67) · mobilité Paris</p>
                </div>

                <div>
                  <p className="text-sm text-dark/50 uppercase tracking-wider mb-2">Disponibilité</p>
                  <p className="text-xl text-dark">À partir de septembre 2026</p>
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
