'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Github } from 'lucide-react';
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

      <main className="min-h-screen bg-cream pt-28 py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Image à gauche */}
            <div className="space-y-8">
              <div className="w-full flex items-center justify-center bg-cream/5 rounded-2xl p-8">
                <img
                  src="/images/about.svg"
                  alt="Contact illustration"
                  className="w-full h-auto max-h-[500px] object-contain"
                />
              </div>

              {/* Informations de contact */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-orange/10 p-3 rounded-full">
                    <Mail className="text-orange" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-dark/60">Contactez-nous à</p>
                    <a
                      href="mailto:contact@belondjo.com"
                      className="text-lg font-bold text-dark hover:text-orange transition-colors"
                    >
                      contact@belondjo.com
                    </a>
                  </div>
                </div>

                <Button size="lg" fullWidth>
                  <Mail size={20} />
                  Contactez-moi
                </Button>
              </div>
            </div>

            {/* Formulaire à droite */}
            <div>
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

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="text-orange" size={20} />
                    <a
                      href="tel:+33612345678"
                      className="text-dark hover:text-orange transition-colors"
                    >
                      +33 6 12 34 56 78
                    </a>
                  </div>

                  <div className="flex items-center gap-4">
                    <MapPin className="text-orange" size={20} />
                    <span className="text-dark">Paris, France</span>
                  </div>
                </div>

                {/* Réseaux sociaux */}
                <div className="mt-8">
                  <h4 className="text-lg font-bold text-dark mb-4">Suivez-moi</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com/in/belondjo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-orange text-orange hover:bg-orange hover:text-cream transition-all"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="https://instagram.com/belondjo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-orange text-orange hover:bg-orange hover:text-cream transition-all"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="https://github.com/belondjo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-orange text-orange hover:bg-orange hover:text-cream transition-all"
                    >
                      <Github size={20} />
                    </a>
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
