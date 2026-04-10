import Link from 'next/link';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Réalisations', href: '/' },
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
    <footer className="bg-navy py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Navigation et liens sociaux */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Liens de navigation */}
          <nav className="flex flex-wrap gap-8 justify-center md:justify-start">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-cream font-bold hover:text-orange transition-colors duration-200 text-base"
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
            className="text-cream font-bold hover:text-orange transition-colors duration-200 text-base"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
