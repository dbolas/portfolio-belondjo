import Link from 'next/link';
import { Button } from '@/components/ui';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Maison', href: '/' },
  { label: 'À propos', href: '/about' },
  { label: 'CV', href: '/cv' },
  { label: 'Contact', href: '/contact' },
];

/**
 * Composant Footer simplifié avec Design System Belondjo
 *
 * Contenu:
 * - Emoji + texte "Contactez-nous à"
 * - Email en grand
 * - Bouton "Contactez-moi"
 * - Ligne de séparation
 * - Navigation links (gauche) + LinkedIn (droite)
 *
 * @example
 * <Footer />
 */
export default function Footer() {
  return (
    <footer className="bg-cream py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Email et CTA */}
        <div className="mb-8">
          <p className="flex items-center gap-2 text-dark/70 mb-4">
            <span className="text-2xl">👋</span>
            <span>Contactez-nous à</span>
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
            contact@belondjo.com
          </h2>
          <Link href="/contact">
            <Button size="lg">Contactez-moi</Button>
          </Link>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-dark/10 my-8"></div>

        {/* Navigation et liens sociaux */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Liens de navigation */}
          <nav className="flex flex-wrap gap-6 justify-center md:justify-start">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-dark/70 hover:text-orange transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Lien LinkedIn */}
          <a
            href="https://linkedin.com/in/belondjo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark/70 hover:text-orange transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
