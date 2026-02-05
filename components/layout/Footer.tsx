import React from 'react';
import Link from 'next/link';
import { Linkedin, Instagram, Mail, Github } from 'lucide-react';
import Logo from './Logo';

interface NavLink {
  label: string;
  href: string;
}

interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navLinks: NavLink[] = [
  { label: 'Maison', href: '/' },
  { label: 'À propos', href: '/about' },
  { label: 'CV', href: '/cv' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/belondjo',
    icon: <Linkedin size={24} />,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/belondjo',
    icon: <Instagram size={24} />,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/belondjo',
    icon: <Github size={24} />,
  },
  {
    label: 'Email',
    href: 'mailto:contact@belondjo.com',
    icon: <Mail size={24} />,
  },
];

/**
 * Composant Footer avec Design System Belondjo
 *
 * Contenu:
 * - Logo avec variante pour fond
 * - Liens de navigation
 * - Icônes sociales (LinkedIn, Instagram, GitHub, Email)
 * - Copyright
 * - Layout responsive (colonne sur mobile, lignes sur desktop)
 *
 * @example
 * <Footer />
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-cream py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Contenu principal du footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo et description */}
          <div className="space-y-4">
            <Logo variant="light" width={120} height={40} clickable={false} />
            <p className="text-cream/80 text-sm leading-relaxed max-w-xs">
              Développeur Full Stack passionné par la création d&apos;expériences
              web modernes et performantes.
            </p>
          </div>

          {/* Liens de navigation */}
          <div>
            <h3 className="text-orange font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="
                      text-cream/80
                      hover:text-orange
                      transition-colors duration-200
                      text-sm
                      inline-block
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-orange font-bold text-lg mb-4">Me suivre</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center justify-center
                    w-12 h-12
                    rounded-full
                    border-2 border-cream/30
                    text-cream
                    hover:border-orange
                    hover:text-orange
                    hover:scale-110
                    transition-all duration-300
                    focus:outline-none
                    focus:ring-2
                    focus:ring-orange
                    focus:ring-offset-2
                    focus:ring-offset-navy
                  "
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-cream/60 text-sm text-center md:text-left">
              © {currentYear} Belondjo. Tous droits réservés.
            </p>

            {/* Liens légaux */}
            <div className="flex gap-6 text-sm">
              <Link
                href="/mentions-legales"
                className="text-cream/60 hover:text-orange transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/confidentialite"
                className="text-cream/60 hover:text-orange transition-colors"
              >
                Confidentialité
              </Link>
            </div>
          </div>

          {/* Made with Claude */}
          <div className="mt-6 text-center">
            <p className="text-cream/40 text-xs">
              Développé avec{' '}
              <span className="text-orange" aria-label="amour">
                ♥
              </span>{' '}
              et{' '}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange transition-colors"
              >
                Next.js
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
