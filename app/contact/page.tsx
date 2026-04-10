'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Navigation, Footer } from '@/components/layout';
import { Button, Input, Textarea } from '@/components/ui';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Merci pour votre message! (TODO: connecter à un service d\'email)');
    // Reset form
    setFormData({ email: '', name: '', message: '' });
  };

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-cream pt-48 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image à gauche */}
            <div className="order-2 lg:order-1">
              <div className="relative w-full h-[400px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/contact-strasbourg.jpg"
                  alt="Strasbourg"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Formulaire à droite */}
            <div className="order-1 lg:order-2">
              <h1 className="text-h2 text-orange mb-2">Entrer en contact!</h1>
              <p className="text-dark/70 mb-8">
                Remplissez le formulaire ci-dessous pour m&apos;envoyer un message
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="E-mail"
                  type="email"
                  placeholder="Votre courriel"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />

                <Input
                  label="Nom"
                  type="text"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />

                <Textarea
                  label="Message"
                  placeholder="Écrivez votre message ici..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />

                <Button type="submit" size="lg" fullWidth>
                  Envoyer un e-mail
                </Button>
              </form>

              {/* Autres moyens de contact */}
              <div className="mt-12 pt-8 border-t border-dark/10">
                <h3 className="text-h3 text-orange mb-6">Autres moyens de contact</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange/10 p-3 rounded-full flex-shrink-0">
                      <Mail className="text-orange" size={24} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-dark/60 mb-1">Email</p>
                      <a
                        href="mailto:belondjobolankoko@gmail.com"
                        className="font-bold text-dark hover:text-orange transition-colors break-words"
                      >
                        belondjobolankoko@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-orange/10 p-3 rounded-full flex-shrink-0">
                      <Phone className="text-orange" size={24} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-dark/60 mb-1">Téléphone</p>
                      <a
                        href="tel:+33768638705"
                        className="font-bold text-dark hover:text-orange transition-colors"
                      >
                        +33 7 68 63 87 05
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
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
        </div>
      </main>

      <Footer />
    </>
  );
}
