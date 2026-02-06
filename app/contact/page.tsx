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
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange/10 p-3 rounded-full">
                      <Mail className="text-orange" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-dark/60">Email</p>
                      <a
                        href="mailto:contact@belondjo.com"
                        className="font-bold text-dark hover:text-orange transition-colors"
                      >
                        contact@belondjo.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-orange/10 p-3 rounded-full">
                      <Phone className="text-orange" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-dark/60">Téléphone</p>
                      <a
                        href="tel:+33612345678"
                        className="font-bold text-dark hover:text-orange transition-colors"
                      >
                        +33 6 12 34 56 78
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-orange/10 p-3 rounded-full">
                      <MapPin className="text-orange" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-dark/60">Localisation</p>
                      <span className="font-bold text-dark">Paris, France</span>
                    </div>
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
