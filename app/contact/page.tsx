import { Mail, Phone, MapPin } from 'lucide-react';
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

              <div className="space-y-4">
                <a
                  href="mailto:belondjobolankoko@gmail.com"
                  className="flex items-start gap-4 p-6 rounded-xl border-2 border-orange/20 hover:border-orange hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="bg-orange/10 p-3 rounded-full flex-shrink-0">
                    <Mail className="text-orange" size={24} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-dark/60 mb-1">Email</p>
                    <span className="font-bold text-dark group-hover:text-orange transition-colors break-words">
                      belondjobolankoko@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+33768638705"
                  className="flex items-start gap-4 p-6 rounded-xl border-2 border-orange/20 hover:border-orange hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="bg-orange/10 p-3 rounded-full flex-shrink-0">
                    <Phone className="text-orange" size={24} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-dark/60 mb-1">Téléphone</p>
                    <span className="font-bold text-dark group-hover:text-orange transition-colors">
                      +33 7 68 63 87 05
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-6 rounded-xl border-2 border-orange/20">
                  <div className="bg-orange/10 p-3 rounded-full flex-shrink-0">
                    <MapPin className="text-orange" size={24} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-dark/60 mb-1">Localisation</p>
                    <span className="font-bold text-dark">Strasbourg, France</span>
                  </div>
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
